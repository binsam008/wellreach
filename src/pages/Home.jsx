import React from "react";

import WhyChoose from "../sections/WhyChoose";
import Testimonial from "../sections/Testimonial";
import ExpertCTA from "../sections/ExpertCTA";
import ServicesPreview from "../sections/ServicesPreview";
import Footer from "../sections/Footer";
import AboutUs from "../sections/AboutUs";
import TextBand from "../components/MovingBand";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ======================= HERO SECTION ======================= */}
      <div className="relative w-full min-h-[300px] md:min-h-[900px] overflow-hidden">

        {/* -------- DESKTOP BACKGROUND -------- */}
        <img
          src="/hero-desktop.jpg"
          alt="Cargo Container"
          className="
            hidden md:block
            absolute inset-0 w-full h-full
            object-cover object-center
            pointer-events-none
          "
        />

        {/* -------- MOBILE BACKGROUND -------- */}
        <img
          src="/hero-mobile.png"
          alt="Hero Mobile"
          className="
            md:hidden
            absolute inset-0 w-full h-full
            object-cover object-center
            pointer-events-none
          "
        />

        {/* ======================= DESKTOP TEXT ======================= */}
        <div className="hidden md:flex items-center h-full relative z-20">

          <div className="w-1/2 flex flex-col justify-center pl-16">

            <h1
              className="
                text-transparent bg-clip-text
                bg-gradient-to-r from-[#E7EBEE] to-[#C6D6DB]
                font-['Anton'] font-semibold tracking-wide leading-[0.9]
                text-[70px] lg:text-[110px]
                drop-shadow-[0_8px_10px_rgba(0,0,0,0.4)]
              "
            >
              DELIVERING <br />
              YOUR CARGO <br />
              WORLDWIDE
            </h1>

          </div>
        </div>

        {/* ======================= MOBILE TEXT ======================= */}
        <div className="md:hidden flex flex-col items-center text-center relative z-20 px-6 pt-[420px] pb-12">

          <h1
            className="
              text-white font-['Anton'] font-bold
              leading-[1] tracking-tight
              text-[42px] sm:text-[50px]
              drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)]
            "
          >
            DELIVERING <br />
            YOUR CARGO <br />
            WORLDWIDE
          </h1>

        </div>

      </div>

      {/* ======================= MARQUEE / MOVING TEXT BAND ======================= */}
      <TextBand />

      {/* ======================= ABOUT SECTION ======================= */}
      <section id="about" className="mx-auto px-6 py-12">
        <AboutUs />
      </section>

      <TextBand />

      {/* ======================= SERVICES PREVIEW ======================= */}
      <section id="services" className="mx-auto px-6 py-12">
        <ServicesPreview />
      </section>

      <TextBand />

      {/* ======================= WHY CHOOSE US ======================= */}
      <section id="whychoose" className="mx-auto px-6 py-3">
        <WhyChoose />
      </section>

      {/* ======================= EXPERT CTA ======================= */}
      <section id="expert" className="mx-auto px-6 py-8">
        <ExpertCTA />
      </section>

      {/* ======================= FOOTER ======================= */}
      <section id="footer">
        <Footer />
      </section>

    </main>
  );
}
