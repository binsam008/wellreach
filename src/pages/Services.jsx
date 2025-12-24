import React, { useState } from "react";
import Footer from "../sections/Footer";

export default function Services() {
  const services = [
    {
      title: "Air Freight",
      img: "/service-page/air.jpg",
      desc: "Fastest international air cargo delivery for parcels, documents, and special shipments.",
    },
    {
      title: "Ocean Freight",
      img: "/service-page/ocean.jpg",
      desc: "Cost-effective global ocean freight for LCL, FCL, and breakbulk shipments.",
    },
    {
      title: "Custom Clearance",
      img: "/service-page/custom.jpg",
      desc: "End-to-end customs documentation, inspection handling, and smooth clearance support.",
    },
    {
      title: "Land Transport",
      img: "/service-page/land.jpg",
      desc: "Reliable domestic trucking and last-mile delivery with tracking support.",
    },
    {
      title: "Warehouse Storage",
      img: "/service-page/warehouse.jpg",
      desc: "Secure and temperature-controlled warehousing for all shipment types.",
    },
    {
      title: "Cargo Handling",
      img: "/service-page/cargo.jpg",
      desc: "Professional cargo handling with safety, packaging, and loading/unloading services.",
    },
  ];

  return (
    <>
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

      <Footer />
    </>
  );
}

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

      {/* OVERLAY */}
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
