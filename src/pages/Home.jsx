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
{/* ======================= HERO SECTION ======================= */}
<div className="relative w-full overflow-hidden min-h-[750px] md:min-h-[900px]">

  {/* -------- DESKTOP BACKGROUND -------- */}
  <img
    src="/hero-desktop.png"
    alt="Hero"
    className="
      hidden md:block
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
  <div className="hidden md:flex items-center py-70 relative z-20">

    {/* LEFT SIDE CONTENT WRAPPER */}
    <div className="w-1/2 flex flex-col justify-center pl-14">

      {/* ✔ ANTON HEADING */}
      <h1
        className="
          text-white
          leading-none
          text-[100px]
          drop-shadow-xl
          font-['Anton',sans-serif]
          tracking-tight
          opacity-75
        "
      >
        DELIVERING YOUR <br />
        CARGO <br />
        WORLDWIDE
      </h1>

      {/* ✔ SIMPLE CAL-SANS STYLE BUTTON */}
      <button
        className="
          mt-10 px-10 py-4 rounded-full 
          bg-white text-[color:var(--brand-600)]
          font-semibold shadow-xl
          hover:bg-gray-200 hover:scale-105 transition-all duration-200
          w-fit flex items-center gap-2
        "
      >
        Explore what we do
        <span className="text-xl">▶</span>
      </button>

    </div>
  </div>

  {/* ======================= MOBILE TEXT ======================= */}
  <div className="flex md:hidden flex-col items-center text-center relative z-20 px-6 pt-[480px] pb-12">

    {/* ✔ ANTON MOBILE HEADING */}
    <h1
      className="
        text-white font-['Anton',sans-serif]
        leading-[1.1]
        text-[42px]
        drop-shadow-xl
        opacity-75
      "
    >
      DELIVERING YOUR <br />
      CARGO <br />
      WORLDWIDE
    </h1>

    {/* ✔ BUTTON SAME STYLE */}
    <button
      className="
        mt-6 px-8 py-3 rounded-full 
        bg-white text-[color:var(--brand-600)]
        font-semibold shadow-xl
        hover:bg-gray-200 hover:scale-105 transition-all duration-200
        flex items-center gap-2
      "
    >
      Explore what we do
      <span className="text-xl">▶</span>
    </button>

  </div>

</div>

      <TextBand />

      {/* ======================= ABOUT SECTION ======================= */}
      <section id="about" className=" mx-auto px-6 py-12">
       <AboutUs />
      </section>

      <TextBand />

      {/* ======================= SERVICES PREVIEW ======================= */}
      <section id="services" className=" mx-auto px-6 py-12">
        <ServicesPreview />
      </section>
<TextBand />
      {/* ======================= WHY CHOOSE ======================= */}
      <section id="whychoose" className=" mx-auto px-6 py-8">
        <WhyChoose />
      </section>

      {/* ======================= TESTIMONIAL =======================
      <section id="testimonial" className="container mx-auto px-6 py-8">
        <Testimonial />
      </section> */}

      {/* ======================= EXPERT CTA ======================= */}
      <section id="expert" className="mx-auto px-6 py-12">
        <ExpertCTA />
      </section>

      {/* ======================= FOOTER ======================= */}
      <section id="footer">
        <Footer />
      </section>

    </main>
  );
}
