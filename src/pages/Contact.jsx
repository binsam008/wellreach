import React from "react";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  const branches = [
    {
      title: "Head Office - Calicut",
      body: `2/2288, Peringatt Building, Opp. Civil Station,
Calicut, Kerala, India – 673020
Email: krishna@wellreachlogistics.com
Phone: +91 99021 85610`,
      whatsapp: "+919902185610",
    },
    {
      title: "Cochin",
      body: `2/2288, Peringatt Building, Opp. Civil Station,
Calicut, Kerala, India – 673020
Email: krishna@wellreachlogistics.com
Phone: +91 99021 85610`,
      whatsapp: "+919902185610",
    },
    {
      title: "Bangalore",
      body: `2/2288, Peringatt Building, Opp. Civil Station,
Calicut, Kerala, India – 673020
Email: krishna@wellreachlogistics.com
Phone: +91 99021 85610`,
      whatsapp: "+919902185610",
    },
    {
      title: "Bahrain - Overseas Office",
      body: `2/2288, Peringatt Building, Opp. Civil Station,
Calicut, Kerala, India – 673020
Email: krishna@wellreachlogistics.com
Phone: +91 99021 85610`,
      whatsapp: "+9739902185610",
    },
  ];

  // ⭐ FINAL PERFECT-MATCH DESIGN CARD
  const BranchCard = ({ title, body, whatsapp }) => (
    <div className="bg-white shadow-md border border-orange-300 rounded-2xl overflow-hidden">

      {/* Purple Header (EXACT shape from screenshot) */}
      <div
        className="
          bg-[#4A46C6] text-white px-4 py-3
          rounded-tl-[40px] rounded-tr-[20px]
          flex items-center justify-between
        "
      >
        <h3 className="text-sm font-semibold">{title}</h3>

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-green-600 rounded-full p-1.5 shadow hover:scale-110 transition"
        >
          <MessageCircle size={18} />
        </a>
      </div>

      {/* Body content EXACT spacing */}
      <p className="p-5 text-sm leading-relaxed whitespace-pre-line text-gray-700">
        {body}
      </p>
    </div>
  );

  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">

      {/* HEADING */}
      <h2 className="text-center text-4xl font-bold text-purple-700 mb-2">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 max-w-lg mx-auto mb-14">
        We’re here to help. Reach out to us for inquiries, quotes, or support—
        our team is just a message away.
      </p>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid grid-cols-2 gap-12">

        {/* LEFT FORM */}
        <form className="space-y-6">
          <input type="text" placeholder="Name" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
          <input type="text" placeholder="Subject" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
          <textarea rows="5" placeholder="Message" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />

          {/* Send Message Button (unchanged) */}
          <button
            className="
              bg-[#4A46C6] text-white px-8 py-3
              rounded-tl-3xl rounded-tr-xl rounded-bl-2xl rounded-br-xl
              shadow-lg hover:opacity-90 transition
            "
          >
            Send Message
          </button>
        </form>

        {/* RIGHT — 2×2 GRID */}
        <div className="grid grid-cols-2 gap-6">
          {branches.map((b, i) => (
            <BranchCard key={i} {...b} />
          ))}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden space-y-6">

        {branches.map((b, i) => (
          <BranchCard key={i} {...b} />
        ))}

        {/* MOBILE FORM */}
        <form className="space-y-6 mt-10">
          <input type="text" placeholder="Name" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
          <input type="text" placeholder="Subject" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
          <textarea rows="5" placeholder="Message" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />

          <button
            className="
              bg-[#4A46C6] text-white px-8 py-3
              rounded-tl-3xl rounded-tr-xl rounded-bl-2xl rounded-br-xl
              shadow-lg hover:opacity-90 transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
