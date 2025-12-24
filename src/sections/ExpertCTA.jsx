import React from "react";
import { ArrowRight } from "lucide-react";

export default function ExpertCTA() {
  return (
    <section className="px-4 sm:px-6 section-animate">
      <div className="relative max-w-8xl  mx-auto overflow-hidden rounded-3xl min-h-[450px]">

        {/* Responsive Background */}
        <picture>
          <source
            srcSet="/expert-hero-desktop.jpg"
            media="(min-width: 768px)"
          />

          <img
            src="./expert-hero-mobile.png"
            alt="Logistics container ship"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" /> */}

        {/* Content */}
        <div
          className="
            relative z-10
            px-6 sm:px-12 
            py-16 sm:py-10
            max-w-[480px]
          "
        >
          {/* Heading */}
          <h2
            className="
              uppercase 
              font-extrabold 
              text-white 
              leading-[1.05]
              text-[clamp(40px,6vw,64px)]
            "
          >
            <span className="block">Talk to a</span>
            <span className="block">Logistics</span>
            <span className="block">Expert</span>
          </h2>

          {/* Subtext */}
          <p
            className="
              mt-5 
              text-white/90 
              text-2xl sm:text-base 
              leading-relaxed
            "
          >
            Get solutions that fit your business needs. Talk to a supply chain
            expert today.
          </p>

          {/* Button */}
          <div className="mt-7">
            <a
              href="#contact"
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
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
