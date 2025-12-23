import React from "react";

export default function AboutUs() {
  return (
    <section className="px-6 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – TEXT */}
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">

            <h2 className="text-[color:var(--brand-600)] text-lg font-semibold mb-4">
              About us
            </h2>

            <p
              className="
                text-slate-700
                text-[15px]
                leading-relaxed
                sm:text-base
                lg:text-lg
                lg:leading-8
              "
            >
              Well Reach Logistics offers cost-effective, reliable international
              freight solutions through a strong global network and trusted
              partnerships. We specialize in air, ocean, and international
              courier services, ensuring fast, secure, and flexible shipping
              worldwide. With real-time tracking, proof of delivery, and
              Email/SMS updates, we guarantee on-time, door-to-door delivery with
              complete transparency and trust.
            </p>
          </div>

          {/* RIGHT – IMAGES (DESKTOP ONLY) */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            
            {/* Big image */}
            <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="./about-ship.png"
                alt="Container Ship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top small image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="./about-warehouse.png"
                alt="Warehouse"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom small image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
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
