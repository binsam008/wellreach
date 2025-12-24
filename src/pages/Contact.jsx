import React from "react";
import { MessageCircle } from "lucide-react";
import Footer from "../sections/Footer";

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

  const BranchCard = ({ index, title, body, whatsapp }) => {
    const isLeft = index % 2 === 0;

    return (
      <div
        className="
          bg-white 
          border border-[#e3a67a]
          rounded-[18px]
          shadow-[0_4px_14px_rgba(227,166,122,0.5)]
          overflow-hidden
        "
        style={{ borderWidth: "1.5px" }}
      >
        <div
          className={`
            bg-[#4A46C6] text-white px-8 py-2.5 
            flex items-center justify-between
            ${
              isLeft
                ? "rounded-tl-[14px] rounded-tr-[80px]"
                : "rounded-tl-[80px] rounded-tr-[14px]"
            }
          `}
        >
          <h3 className="text-[14px] font-medium tracking-tight">
            {title}
          </h3>

          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white text-green-600 
              p-1.5 rounded-full shadow-sm
              hover:scale-110 transition
            "
          >
            <MessageCircle size={16} />
          </a>
        </div>

        <p
          className="
            p-4 text-[13px] leading-relaxed 
            whitespace-pre-line 
            text-[#444]
          "
        >
          {body}
        </p>
      </div>
    );
  };

  return (
    <>
      <section className="px-6 md:px-12 py-25 max-w-7xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-purple-700 mb-2">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 max-w-lg mx-auto mb-14">
          We’re here to help. Reach out to us for inquiries, quotes, or support —
          our team is just a message away.
        </p>

        <div className="hidden lg:grid grid-cols-2 gap-12">

          <form className="space-y-5">
            <input type="text" placeholder="Name" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
            <input type="email" placeholder="Email" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
            <input type="text" placeholder="Subject" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
            <textarea rows="5" placeholder="Message" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />

            <button className="bg-[#4A46C6] text-white px-8 py-3 rounded-tl-3xl rounded-tr-xl rounded-bl-2xl rounded-br-xl shadow-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>

          <div className="grid grid-cols-2 gap-6">
            {branches.map((b, i) => (
              <BranchCard key={i} index={i} {...b} />
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {branches.map((b, i) => (
            <BranchCard key={i} index={i} {...b} />
          ))}

          <form className="space-y-5 mt-10">
            <input type="text" placeholder="Name" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
            <input type="email" placeholder="Email" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
            <input type="text" placeholder="Subject" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />
            <textarea rows="5" placeholder="Message" className="w-full border px-4 py-3 rounded-xl bg-gray-50" />

            <button className="bg-[#4A46C6] text-white px-8 py-3 rounded-tl-3xl rounded-tr-xl rounded-bl-2xl rounded-br-xl shadow-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>

      </section>

      <Footer />
    </>
  );
}
