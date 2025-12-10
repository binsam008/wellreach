import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * ExpertCTA — desktop left image will be exactly 461x614 px
 * Mobile: full width, fixed height 614px to match portrait crop.
 *
 * Make sure the source image in public/assets is >= 461x614 px for good sharpness.
 */

export default function ExpertCTA() {
  return (
    <section className="w-full">
      {/* ===== MOBILE HERO (shown on small screens) ===== */}
      <div className="relative md:hidden w-full h-[614px] overflow-hidden">
        <picture>
          <source srcSet="/assets/expert-hero.png" media="(min-width:640px)" />
          <img
            src="/assets/hero-mobile.png"
            alt="Logistics containers"
            className="w-full h-full object-cover"
            style={{ objectPosition: "60% 40%" }}
          />
        </picture>

        {/* darker overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />

        {/* Text content overlay */}
        <div className="absolute inset-0 z-10 flex items-start">
          <div className="px-6 pt-20 sm:pt-24">
            <h2 className="font-extrabold uppercase text-white leading-tight text-[clamp(40px,10vw,72px)]">
              <span className="block pb-2">Talk to a</span>
              <span className="block pb-2">Logistics</span>
              <span className="block pb-2">Expert</span>
            </h2>

            <p className="mt-4 max-w-xs text-white/90 text-sm">
              Get solutions that fit your business needs. Talk to a supply-chain expert today
              and get a tailored shipping plan.
            </p>

            <div className="mt-6">
              <a
                href="#quote"
                className="inline-flex items-center gap-3 bg-white text-[color:var(--brand-600,#6d4bd6)] rounded-full px-4 py-2 sm:px-5 sm:py-3 font-semibold shadow-lg hover:shadow-2xl transition"
              >
                Contact Us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP TWO-COLUMN (shown from md up) ===== */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* left image - exact pixel size on desktop */}
          <div className="col-span-7 flex items-center justify-center">
            <div
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ width: 461 /* px */, height: 614 /* px */ }}
            >
              {/* The img uses exact width/height classes for tailwind + inline style as double-safety */}
              <img
                src="/assets/expert-hero.png"
                alt="Warehouse and containers"
                className="w-[461px] h-[614px] object-cover"
                style={{ objectPosition: "60% 40%" }}
                width={461}
                height={614}
              />
            </div>
          </div>

          {/* right copy - spans 5/12 */}
          <div className="col-span-5">
            <h2 className="font-extrabold uppercase text-slate-900 leading-tight text-4xl md:text-5xl lg:text-6xl">
              <span className="block pb-2">Talk to a</span>
              <span className="block pb-2">Logistics</span>
              <span className="block pb-2">Expert</span>
            </h2>

            <p className="mt-6 text-slate-700 text-base leading-relaxed">
              Get solutions that fit your business needs. Talk to a supply-chain expert today
              and get a tailored shipping plan. Our team will evaluate your requirements and
              propose the most cost-effective and reliable shipping options.
            </p>

            <div className="mt-8">
              <a
                href="#quote"
                className="inline-flex items-center gap-3 bg-[color:var(--brand-600,#6d4bd6)] text-white rounded-full px-5 py-3 font-semibold shadow hover:opacity-95 transition"
              >
                Contact Us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
