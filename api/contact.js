// Contact form endpoint (Vercel serverless function): POST /api/contact
//
// Sends the visitor's message to MAIL_TO through the SMTP server, then saves an
// identical copy in the sending mailbox's IMAP folder.
//
// Every server detail lives in Vercel environment variables, never in the site:
//   MAIL_HOST, SMTP_PORT, IMAP_PORT, MAIL_USER, MAIL_PASS, MAIL_FROM, MAIL_TO, IMAP_FOLDER
// None of them may start with VITE_, or Vite would publish them in the browser bundle.

/* global process */
import nodemailer from "nodemailer";
import MailComposer from "nodemailer/lib/mail-composer/index.js";
import { ImapFlow } from "imapflow";

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 };
const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

const oneLine = (value) => String(value ?? "").replace(/[\r\n\t]+/g, " ").trim();
const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Returns { fields } or { error } — exported so it can be tested without sending mail.
export function validate(body) {
  const fields = {
    name: oneLine(body?.name),
    email: oneLine(body?.email),
    subject: oneLine(body?.subject),
    message: String(body?.message ?? "").replace(/\r\n/g, "\n").trim(),
  };
  if (!fields.name) return { error: "Please enter your name." };
  if (!EMAIL_RE.test(fields.email)) return { error: "Please enter a valid email address." };
  if (!fields.message) return { error: "Please enter a message." };
  for (const [key, max] of Object.entries(LIMITS)) {
    if (fields[key].length > max) return { error: `The ${key} is too long (maximum ${max} characters).` };
  }
  return { fields };
}

function readConfig() {
  // Trim every value: a space or line break pasted into Vercel makes a correct password fail.
  const env = Object.fromEntries(
    ["MAIL_HOST", "SMTP_PORT", "IMAP_PORT", "MAIL_USER", "MAIL_PASS", "MAIL_FROM", "MAIL_TO", "IMAP_FOLDER"]
      .map((key) => [key, (process.env[key] ?? "").trim()])
  );
  const config = {
    host: env.MAIL_HOST,
    smtpPort: Number(env.SMTP_PORT || 465),
    imapPort: Number(env.IMAP_PORT || 993),
    user: env.MAIL_USER,
    pass: env.MAIL_PASS,
    from: env.MAIL_FROM || env.MAIL_USER,
    to: env.MAIL_TO,
    folder: env.IMAP_FOLDER || "Sent",
  };
  const missing = ["host", "user", "pass", "to"].filter((key) => !config[key]);
  return missing.length ? { missing } : { config };
}

export function buildMail({ name, email, subject, message }, { from, to }) {
  const sentAt = new Date().toUTCString();
  const text =
    `New message from the Well Reach Logistics website contact form\n\n` +
    `Name:    ${name}\nEmail:   ${email}\nSubject: ${subject || "(none)"}\nSent:    ${sentAt}\n\n` +
    `${message}\n\n-- \nReply to this email to answer ${name} directly.`;
  const html =
    `<p>New message from the <b>Well Reach Logistics</b> website contact form.</p>` +
    `<table cellpadding="4" style="border-collapse:collapse">` +
    `<tr><td><b>Name</b></td><td>${escapeHtml(name)}</td></tr>` +
    `<tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>` +
    `<tr><td><b>Subject</b></td><td>${escapeHtml(subject || "(none)")}</td></tr>` +
    `<tr><td><b>Sent</b></td><td>${escapeHtml(sentAt)}</td></tr></table>` +
    `<p style="white-space:pre-wrap;border-left:3px solid #4A46C6;padding-left:10px">${escapeHtml(message)}</p>` +
    `<p style="color:#666">Reply to this email to answer ${escapeHtml(name)} directly.</p>`;
  return {
    from: { name: "Well Reach Logistics Website", address: from },
    to,
    replyTo: { name, address: email },
    subject: `Website enquiry: ${subject || `message from ${name}`}`,
    text,
    html,
  };
}

async function saveCopy(config, raw) {
  const client = new ImapFlow({
    host: config.host,
    port: config.imapPort,
    secure: config.imapPort === 993,
    auth: { user: config.user, pass: config.pass },
    logger: false,
  });
  await client.connect();
  try {
    await client.append(config.folder, raw, ["\\Seen"]);
  } finally {
    await client.logout().catch(() => {});
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== "object") {
    return res.status(400).json({ ok: false, error: "Invalid request." });
  }

  // Spam trap: a hidden field people never see. Bots fill it; pretend success.
  if (oneLine(body.website)) return res.status(200).json({ ok: true });

  const { fields, error } = validate(body);
  if (error) return res.status(400).json({ ok: false, error });

  const { config, missing } = readConfig();
  if (missing) {
    console.error("contact: missing environment variables:", missing.join(", "));
    return res.status(500).json({ ok: false, error: "The form is not available right now. Please email us instead." });
  }

  // Build the message once so the delivered mail and the saved copy are identical.
  const raw = await new MailComposer(buildMail(fields, config)).compile().build();

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.smtpPort,
      secure: config.smtpPort === 465,
      auth: { user: config.user, pass: config.pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });
    await transporter.sendMail({ envelope: { from: config.from, to: [config.to] }, raw });
  } catch (err) {
    console.error("contact: SMTP send failed:", err?.code || "", err?.response || err?.message);
    return res.status(502).json({ ok: false, error: "Sorry, your message could not be sent. Please try again or email us." });
  }

  // The visitor's message is already delivered; a failed copy is logged, not reported to them.
  try {
    await saveCopy(config, raw);
  } catch (err) {
    console.error("contact: IMAP copy failed:", err?.code || "", err?.responseText || err?.message);
  }

  return res.status(200).json({ ok: true });
}
