import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Air Freight",
      img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=900&q=60",
      desc: "Fastest international air cargo delivery for parcels, documents, and special shipments.",
    },
    {
      title: "Ocean Freight",
      img: "https://images.unsplash.com/photo-1583318513818-097e5e1de1c8?auto=format&fit=crop&w=900&q=60",
      desc: "Cost-effective global ocean freight for LCL, FCL, and breakbulk shipments.",
    },
    {
      title: "Custom Clearance",
      img: "https://images.unsplash.com/photo-1596402184326-6567a16d7a44?auto=format&fit=crop&w=900&q=60",
      desc: "End-to-end customs documentation, inspection handling, and smooth clearance support.",
    },
    {
      title: "Land Transport",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=60",
      desc: "Reliable domestic trucking and last-mile delivery with tracking support.",
    },
    {
      title: "Warehouse Storage",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=60",
      desc: "Secure and temperature-controlled warehousing for all shipment types.",
    },
    {
      title: "Cargo Handling",
      img: "https://images.unsplash.com/photo-1549300461-1e1a9f7b4ae6?auto=format&fit=crop&w=900&q=60",
      desc: "Professional cargo handling with safety, packaging, and loading/unloading services.",
    },
  ];

  return (
    <section className="py-25 px-6 md:px-12 max-w-7xl mx-auto text-center">
      {/* HEADING */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#4A46C6]">
        Shipping & Logistics <br /> Services
      </h1>

      {/* GRID */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <HoverCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}


// ⭐ FINAL COMBINED CARD COMPONENT
function HoverCard({ title, img, desc }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="
        relative group overflow-hidden rounded-2xl 
        shadow-md hover:shadow-xl transition duration-500 
        cursor-pointer
      "
      onClick={() => setShow(!show)}
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="
          w-full h-56 object-cover 
          group-hover:scale-105 
          transition-transform duration-700
        "
      />

      {/* ALWAYS VISIBLE TITLE + ARROW */}
      {/* <div className="absolute bottom-3 left-4">
        <span className="text-white text-lg font-semibold drop-shadow-lg">
          {title}
        </span>
      </div>

      <div
        className="
          absolute bottom-3 right-4 
          bg-white/80 backdrop-blur p-1.5 rounded-full
          group-hover:bg-white transition
        "
      >
        <ArrowRight size={20} className="text-black" />
      </div> */}

      {/* HOVER / CLICK OVERLAY WITH DESCRIPTION */}
      <div
        className={`
          absolute inset-0 bg-purple-800 text-white 
          flex flex-col justify-center items-center text-center
          px-6 opacity-0 group-hover:opacity-100 transition duration-500
          ${show ? "opacity-100" : ""}
        `}
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
