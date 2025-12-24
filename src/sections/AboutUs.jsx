import React from "react";

export default function AboutUs() {
  return (
    <section className="px-6 py-12 lg:py-20 section-animate">
      <div className="max-w-8xl mx-auto">

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
                mb-8
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
Well Reach Logistics began its journey in 2015 in India, with a small but determined team focused on
 solving real-world logistics challenges for local businesses. What started as a single office has grown into multiple locations in Kerala, Karnataka and overseas office in the Kingdom of Bahrain, operations serving clients across the GCC and beyond.

              <br /><br />
              Well Reach Logistics is a full-service logistics partner offering integrated solutions across air, ocean, road, warehousing, and value-added services for both domestic and international movements. Our teams in India and Bahrain work as a single unit, designing tailored logistics strategies that support
industries ranging from manufacturing and engineering to events, exhibitions, and retail. Through strategic relationships with global carriers, airlines, and express integrators, we combine competitive pricing with reliable capacity, ensuring your cargo reaches the right place, at the right
time, in the right condition.
            </p>
          </div>

          {/* RIGHT – IMAGE GRID */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            
            {/* Big image */}
            <div className="row-span-2 rounded-2xl overflow-hidden card-shadow h-140">
              <img
                src="./about-ship.png"
                alt="Container Ship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top small image */}
            <div className="rounded-2xl overflow-hidden card-shadow h-66" >
              <img
                src="./about-warehouse.png"
                alt="Warehouse"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom small image */}
            <div className="rounded-2xl overflow-hidden card-shadow h-66">
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
