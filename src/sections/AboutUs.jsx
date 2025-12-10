import React from "react";

export default function AboutUs() {
  return (
    <section className="px-6 py-10 lg:py-16">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-[color:var(--brand-600)] text-lg font-semibold mb-4 lg:mb-6">
          About us
        </h2>

        <p className="
          text-slate-700 
          text-[15px] 
          leading-relaxed 
          sm:text-base 
          lg:text-lg 
          lg:leading-8
        ">
          Well Reach Logistics offers cost-effective, reliable international 
          freight solutions through a strong global network and trusted partnerships. 
          We specialize in air, ocean, and international courier services, ensuring 
          fast, secure, and flexible shipping worldwide. With real-time tracking, 
          proof of delivery, and Email/SMS updates, we guarantee on-time, 
          door-to-door delivery with complete transparency and trust.
        </p>
      </div>
    </section>
  );
}
