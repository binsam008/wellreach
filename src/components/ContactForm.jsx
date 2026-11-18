import React, { useState } from "react";

const EMPTY = { name: "", email: "", subject: "", message: "", website: "" };

// Sends the message to /api/contact (api/contact.js), which emails it to the team.
export default function ContactForm({ className = "", title, placeholders }) {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Sorry, your message could not be sent.");
      setValues(EMPTY);
      setStatus("sent");
    } catch (err) {
      setError(
        err instanceof TypeError || !err.message
          ? "Sorry, your message could not be sent. Please check your connection and try again."
          : err.message
      );
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <form className={className} onSubmit={submit}>
      {title}

      <input name="name" type="text" required maxLength={100} autoComplete="name"
        placeholder={placeholders.name} className="input-field" value={values.name} onChange={update} disabled={sending} />
      <input name="email" type="email" required maxLength={200} autoComplete="email"
        placeholder={placeholders.email} className="input-field" value={values.email} onChange={update} disabled={sending} />
      <input name="subject" type="text" maxLength={150}
        placeholder={placeholders.subject} className="input-field" value={values.subject} onChange={update} disabled={sending} />
      <textarea name="message" rows="5" required maxLength={5000}
        placeholder={placeholders.message} className="input-field" value={values.message} onChange={update} disabled={sending} />

      {/* Spam trap: hidden from people, filled in by bots. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
        </label>
      </div>

      <button type="submit" className="btn-primary w-full disabled:opacity-60 disabled:cursor-wait" disabled={sending}>
        {sending ? "Sending…" : "Send Message"}
      </button>

      <div role="status" aria-live="polite" className="text-sm">
        {status === "sent" && (
          <p className="rounded-xl bg-green-50 border border-green-200 text-green-800 px-4 py-3">
            Thank you, your message has been sent. Our team will get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 border border-red-200 text-red-800 px-4 py-3">
            {error} You can also email us at{" "}
            <a className="underline" href="mailto:connect@wellreachlogistics.com">connect@wellreachlogistics.com</a>.
          </p>
        )}
      </div>
    </form>
  );
}
