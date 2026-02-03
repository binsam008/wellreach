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
      <div className="relative w-full h-175 min-h-[150px] md:min-h-[900px]">

        {/* -------- DESKTOP BACKGROUND -------- */}
        <img
          src="/hero-desktop.jpg"
          alt="Hero"
          className="
            absolute inset-0
            w-full h-full
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
            absolute inset-0
            w-full h-full
            object-cover object-center
            pointer-events-none
          "
        />

        {/* ======================= DESKTOP TEXT ======================= */}
        <div className="hidden md:flex items-center py-40 relative z-20">
          <div className="flex flex-col justify-center pl-20 pr-10 max-w-[720px]">
            <h1
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#E7EBEE]
                via-[#E7EBEE]
                to-[#C6D6DB]
                leading-none
                text-[60px] md:text-[90px] lg:text-[95px]
                drop-shadow-xl
                font-['Anton']
                font-semibold
                tracking-[0.03em]
                py-30
              "
            >
              DELIVERING YOUR <br />
              CARGO <br />
              WORLDWIDE
            </h1>
          </div>
        </div>

        {/* ======================= MOBILE TEXT ======================= */}
        <div className="flex md:hidden flex-col items-center text-center relative z-20 px-6 pt-[480px] pb-12">
          <h1
            className="
              text-white
              leading-[1.05]
              text-[42px]
              sm:text-[52px]
              lg:text-[68px]
              font-['Anton',sans-serif]
              font-bold
              tracking-tight
              max-w-[520px]
            "
          >
            DELIVERING <br />
            YOUR CARGO <br />
            WORLDWIDE
          </h1>
        </div>

      </div>

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

      {/* ======================= WHY CHOOSE ======================= */}
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
