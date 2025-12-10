import React from "react";
import About from "../sections/AboutUs"
import WhyChoose from "../sections/WhyChoose";
import Testimonial from "../sections/Testimonial";
import ExpertCTA from "../sections/ExpertCTA";
import ServicesPreview from "../sections/ServicesPreview";
import Footer from "../sections/Footer";
import TypingHeadline from "../components/TypingHeadline";
import AboutUs from "../sections/AboutUs";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
<div id="home" className="relative h-[600px] lg:h-[850px] overflow-hidden">

  <picture>
    {/* Desktop hero image */}
    <source srcSet="/hero-desktop.jpg" media="(min-width: 1280px)" />

    {/* Mobile hero image */}
    <img
      src="/hero-mobile.png"
      alt="Hero background"
      className="w-full h-full object-cover"
    />
  </picture>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>

        {/* <div className="absolute inset-0 z-30 flex items-end justify-center">
          <div className="text-center pb-6 sm:pb-10 lg:pb-14 px-4 max-w-[92%]">
            <TypingHeadline
              text={"DELIVERING YOUR CARGO\nWORLD WIDE"}
              speed={55}
              loop={false}
              className="text-[clamp(32px,6.8vw,76px)] leading-[0.95] font-extrabold tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div> */}
      </div>

      {/* SERVICES */}
      <section id="about" className="container mx-auto px-6 py-12">
        <AboutUs />
      </section>
      <section id="services" className="container mx-auto px-6 py-12">
        <ServicesPreview />
      </section>

      {/* WHY CHOOSE */}
      <section id="whychoose" className="container mx-auto px-6 py-8">
        <WhyChoose />
      </section>

      {/* TESTIMONIAL */}
      <section id="testimonial" className="container mx-auto px-6 py-8">
        <Testimonial />
      </section>

      {/* EXPERT CTA */}
      <section id="expert" className="container mx-auto px-6 py-12">
        <ExpertCTA />
      </section>

      {/* QUOTE FORM */}
      {/* <section id="quote" className="container mx-auto px-6 py-12">
        <div className="bg-white p-6 rounded-lg card-shadow">
          <h2 className="text-xl font-bold mb-3">Get a Quote</h2>
          <p className="text-sm text-slate-600 mb-4">Leave your details and we’ll reach out.</p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="p-3 border rounded" placeholder="Full name" />
            <input className="p-3 border rounded" placeholder="Email" />
            <input className="p-3 border rounded sm:col-span-2" placeholder="Company / message" />
            <button className="sm:col-span-2 bg-[color:var(--brand-600)] text-white py-2 rounded">
              Request Quote
            </button>
          </form>
        </div>
      </section> */}

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
