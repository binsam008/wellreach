// src/sections/ServicesPreview.jsx
import React, { useState } from "react";

const SERVICES = [
  { id: "air-freight", title: "Air Freight", img: "/services/air.jpg" },
  { id: "ocean-freight", title: "Ocean Freight", img: "/services/ocean.jpg" },
  { id: "international-courier", title: "International Courier", img: "/services/international-courier.jpg" },
  { id: "events-project-cargo", title: "Events and Project Cargo", img: "/services/events.jpg" },
  { id: "dangerous-goods", title: "Dangerous Goods (DG) Cargo", img: "/services/dg.jpg" },
  { id: "custom-clearance", title: "Custom Clearance", img: "/services/custom.jpg" },
  { id: "excess-baggage", title: "Excess Baggage", img: "/services/excess.jpg" },
  { id: "ata-carnet", title: "ATA Carnet Shipment", img: "/services/ata.jpg" },
  { id: "warehouse-management-1", title: "Warehouse Management", img: "/services/warehouse1.jpg" },
  { id: "warehouse-management-2", title: "Warehouse Management", img: "/services/warehouse2.jpg" },
  { id: "cargo-insurance", title: "Cargo Insurance", img: "/services/insurance.jpg" },
  { id: "cargos", title: "Cargos", img: "/services/cargo.jpg" },
];


function ServiceCard({ s }) {
  const [failed, setFailed] = useState(false);
  const placeholder = "/assets/placeholder.png";

  return (
    <article className="relative rounded-2xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* IMAGE */}
      <div className="w-full h-[220px] sm:h-[260px] md:h-[220px] lg:h-[240px] bg-slate-100 relative overflow-hidden">
        {!failed ? (
          <img
            src={s.img}
            alt={s.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              setFailed(true);
              e.currentTarget.onerror = null;
              e.currentTarget.src = placeholder;
            }}
            draggable={false}
          />
        ) : (
          <img src={placeholder} alt="placeholder" className="w-full h-full object-cover" draggable={false} />
        )}

        {/* TITLE OVERLAY */}
        <div className="absolute left-4 bottom-4">
          <h3
            className="
              text-white font-semibold text-lg 
              drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)]
              relative inline-block
              transition-all duration-300
              hover:text-[color:var(--brand-600)]
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-[color:var(--brand-600)]
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            {s.title}
          </h3>
        </div>

        {/* ARROW BUTTON */}
        <div className="absolute right-4 bottom-4">
          <a
            href={`/services#${s.id}`}
            className="
              w-10 h-10 rounded-full bg-white flex items-center justify-center 
              shadow-md transition-all duration-300 hover:scale-110
            "
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 5l7 7-7 7" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* DESCRIPTION */}
      {/* <div className="p-4">
        <h4
          className="
            text-slate-800 font-semibold 
            relative inline-block
            transition-all duration-300
            hover:text-[color:var(--brand-600)]
            after:content-[''] after:absolute after:left-0 after:-bottom-1
            after:w-0 after:h-[2px] after:bg-[color:var(--brand-600)]
            after:transition-all after:duration-300
            hover:after:w-full
          "
        >
          {s.title}
        </h4>

        <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
      </div> */}
    </article>
  );
}

export default function ServicesPreview() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? SERVICES : SERVICES.slice(0, 3);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-[20px] sm:text-2xl font-semibold text-[color:var(--brand-600)] mb-6">
        Shipping & Logistics Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((s) => (
          <ServiceCard s={s} key={s.id} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="
            inline-flex items-center gap-2
            text-[color:var(--brand-600)]
            border border-[color:var(--brand-600)]
            px-4 py-2 rounded-full font-medium shadow-sm
            transition-all duration-300
            hover:bg-[color:var(--brand-600)] hover:text-white
          "
        >
          {expanded ? "Show less" : "View more"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d={expanded ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </button>
      </div>
    </section>
  );
}
