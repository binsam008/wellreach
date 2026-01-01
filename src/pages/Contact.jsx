import React from "react";
import { MessageCircle, Mail, Phone, User, MapPin, Copy } from "lucide-react";
import Footer from "../sections/Footer";

export default function Contact() {

  const branches = [
    {
      title: "Head Office – Calicut",
      head: "Krishna Raj P S",
      body: {
        address: (
          <>
            2/2288, Peringatt Building, Opp. Civil Station,
            Calicut, Kerala, India – 673020
          </>
        ),
        maps: "https://maps.google.com/?q=Peringatt+Building,+Civil+Station,+Calicut",
        email: "krishna@wellreachlogistics.com",
        phone: "+91 99021 85610",
      },
      whatsapp: "+919902185610",
      highlight: true,
    },

    {
      title: "Cochin",
      head: "Visakh P V",
      body: {
        address: (
          <>
            CC 28/447, Club Road,{" "}
            <span className="whitespace-nowrap">Giri Nagar</span>, Kadavanthara,
            Cochin, Kerala, India – 682020
          </>
        ),
        maps: "https://maps.google.com/?q=Giri+Nagar,+Kadavanthara,+Cochin",
        email: "visakh@wellreachlogistics.com",
        phone: "+91 81370 15484",
      },
      whatsapp: "+918137015484",
    },

    {
      title: "Bangalore",
      head: "Varun Dev P V",
      body: {
        address: (
          <>
            2nd Floor, 368, Amruthahalli Main Road, Jakkur Layout, Bengaluru, Karnataka, 560092
          </>
        ),
        maps: "https://maps.google.com/?q=Sapthagiri+Layout,+Maruthi+Nagar,+Bengaluru",
        email: "varun@wellreachlogistics.com",
        phone: "+91 87140 02443",
      },
      whatsapp: "+918714002443",
    },

    {
      title: "Bahrain – Overseas Office",
      head: "Sajid Moosa",
      body: {
        address: (
          <>
            #206, Building 85,{" "}
            <span className="whitespace-nowrap">Finteer Center</span>{" "}
            Road 1802, Hoora, Kingdom of Bahrain
          </>
        ),
        maps: "https://maps.google.com/?q=Hoora+Bahrain",
        email: "sajid@wellreachlogistics.com",
        phone: "+973 3311 3858",
      },
      whatsapp: "+97333113858",
    },
  ];

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const BranchCard = ({ index, title, head, body, whatsapp, highlight }) => {
    const isLeft = index % 2 === 0;

    return (
      <div
        className={`
          bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden
          ${highlight ? "border-[#4A46C6] shadow-purple-200 scale-[1.02]" : "border-orange-300"}
        `}
      >
        {/* Header */}
        <div
          className={`
            bg-[#4A46C6] text-white px-6 py-3 flex items-center justify-between
            ${isLeft ? "rounded-tl-[18px] rounded-tr-[60px]" : "rounded-tl-[60px] rounded-tr-[18px]"}
          `}
        >
          <h3 className="text-[15px] font-semibold">{title}</h3>

          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 p-1.5 rounded-full shadow hover:scale-110 transition"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        {/* Body */}
        <div className="p-5 text-sm space-y-4 text-gray-700">

          {/* Branch Head */}
          <div className="flex items-start gap-2 font-medium text-gray-900">
            <User size={18} className="text-purple-700 min-w-[18px]" />
            <span>Branch Head: {head}</span>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2">
            <MapPin size={18} className="text-purple-700 min-w-[18px] mt-1" />
            <a
              href={body.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-left leading-relaxed hover:text-purple-700 transition"
            >
              {body.address}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-purple-700 min-w-[18px]" />
            <a href={`mailto:${body.email}`} className="hover:text-purple-700 transition">
              {body.email}
            </a>
            <Copy
              size={16}
              className="ml-2 text-gray-400 hover:text-purple-700 cursor-pointer"
              onClick={() => copyToClipboard(body.email)}
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-purple-700 min-w-[18px]" />
            <a href={`tel:${body.phone}`} className="hover:text-purple-700 transition">
              {body.phone}
            </a>
            <Copy
              size={16}
              className="ml-2 text-gray-400 hover:text-purple-700 cursor-pointer"
              onClick={() => copyToClipboard(body.phone)}
            />
          </div>

        </div>
      </div>
    );
  };

  return (
    <>
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#4A46C6] mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            We’re here to help you with logistics, freight, customs,
            warehousing and supply chain solutions.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-14">

          {/* Form */}
          <form className="bg-white/70 backdrop-blur-lg border border-purple-100 shadow-xl rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-semibold text-[#4A46C6]">
              Send us a Message
            </h3>

            <input type="text" placeholder="Your Name" className="input-field" />
            <input type="email" placeholder="Your Email" className="input-field" />
            <input type="text" placeholder="Subject" className="input-field" />
            <textarea rows="5" placeholder="Your Message" className="input-field" />

            <button className="btn-primary w-full">Send Message</button>
          </form>

          {/* Branches */}
          <div className="grid grid-cols-2 gap-6">
            {branches.map((b, i) => (
              <BranchCard key={i} index={i} {...b} />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-8">
          {branches.map((b, i) => (
            <BranchCard key={i} index={i} {...b} />
          ))}

          <form className="bg-white shadow-lg rounded-xl p-6 space-y-5">
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input type="text" placeholder="Subject" className="input-field" />
            <textarea rows="5" placeholder="Message" className="input-field" />
            <button className="btn-primary w-full">Send Message</button>
          </form>
        </div>

      </section>

      <Footer />
    </>
  );
}
