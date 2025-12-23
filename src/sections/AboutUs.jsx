import React from "react";

export default function AboutUs() {
  return (
    <section className="px-6 py-12 lg:py-20 section-animate">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – TEXT */}
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">

            {/* Cal-Sans Heading */}
            <h2
              className="
                text-[32px]
                font-semibold
                tracking-tight
                text-[color:var(--brand-600)]
                mb-5
                font-['Cal Sans',_sans-serif]
              "
            >
              About Us
            </h2>

            {/* Paragraph Body (Inter look) */}
            <p
              className="
                text-slate-700
                text-[16px]
                sm:text-[17px]
                leading-[28px]
                sm:leading-[30px]
                font-[Inter,sans-serif]
                space-y-4
                text-justify
              "
            >
              Well Reach Logistics offers cost-effective, reliable international
              freight solutions through a strong global network and trusted
              partnerships.
              <br /><br />
              We specialize in air, ocean, and international courier services,
              ensuring fast, secure, and flexible shipping worldwide.
              <br /><br />
              With real-time tracking, proof of delivery, and Email/SMS updates,
              we guarantee on-time, door-to-door delivery with complete
              transparency and trust.
            </p>
          </div>

          {/* RIGHT – IMAGE GRID */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            
            {/* Big image */}
            <div className="row-span-2 rounded-2xl overflow-hidden card-shadow">
              <img
                src="./about-ship.png"
                alt="Container Ship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top small image */}
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img
                src="./about-warehouse.png"
                alt="Warehouse"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom small image */}
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img
                src="./about-inspection.png"
                alt="Container Inspection"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
