import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExpertCTA() {
  return (
    <section className="px-4 sm:px-6 section-animate">
      <div className="relative max-w-8xl mx-auto overflow-hidden rounded-3xl min-h-[450px]">

        {/* RESPONSIVE BACKGROUND IMAGE */}
        <picture>
          <source
            srcSet="/expert-hero-desktop.jpg"
            media="(min-width: 768px)"
          />

          <img
            src="/expert-hero-mobile.png"
            alt="Logistics expert communication"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>

        {/* BLACK GRADIENT OVERLAY FOR TEXT READABILITY */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" /> */}

        {/* CONTENT */}
        <div className="relative z-10 px-6 sm:px-12 py-16 max-w-[480px]">

          {/* HEADING */}
          <h2
            className="
              uppercase 
              font-extrabold 
              text-white 
              leading-[1.05]
              text-[clamp(40px,6vw,64px)]
              tracking-tight
            "
          >
            <span className="block">Talk to a</span>
            <span className="block">Logistics</span>
            <span className="block">Expert</span>
          </h2>

          {/* SUBTEXT */}
          <p className="mt-5 text-white/90 text-lg sm:text-base leading-relaxed">
            Get solutions that fit your business needs. Talk to a supply chain
            expert today.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-7">
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-3
                bg-white 
                text-[color:var(--brand-600,#6d4bd6)]
                rounded-full 
                px-7 py-3.5 
                font-semibold 
                shadow-lg 
                hover:shadow-xl 
                hover:bg-gray-200
                transition
              "
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
