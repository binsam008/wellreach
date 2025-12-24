import React from "react";
import Footer from "../sections/Footer";

export default function About() {
  return (
    <>
      <div className="container px-6 py-25">

        {/* ABOUT US */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-20">

          {/* TEXT */}
          <div>
            <h1 className="text-[32px] font-semibold tracking-tight text-[color:var(--brand-600)] mb-4 font-['Cal Sans',sans-serif]">
              About Us
            </h1>

            <p className="text-slate-700 leading-[28px] text-[16px] font-[Inter,sans-serif] text-justify">
              Well Reach Logistics began its journey in 2015 in India, with a small but determined team
              focused on solving real-world logistics challenges for local businesses. What started as a
              single office has grown into multiple locations in Kerala, Karnataka, and an overseas office
              in the Kingdom of Bahrain—serving clients across the GCC and beyond.
              <br /><br />
              Well Reach Logistics is a full-service logistics partner offering integrated solutions across
              air, ocean, road, warehousing, and value-added services for domestic and international
              movements. Our teams in India and Bahrain work as a united force, designing tailored
              logistics strategies that support industries ranging from manufacturing and engineering to
              events, exhibitions, and retail.
              <br /><br />
              Through strategic relationships with global carriers, airlines, and express integrators, we
              combine competitive pricing with reliable capacity—ensuring your cargo reaches the right
              place, at the right time, in the right condition.
            </p>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src="/about-image.png"
              alt="Container Port"
              className="w-5xl h-160 rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* VISION & MISSION - EXACT UI MATCH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-20">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="/vision-worker.png"
              alt="Worker Vision"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-[32px] font-semibold tracking-tight text-[color:var(--brand-600)] mb-4 font-['Cal Sans',sans-serif]">
              Vision & Mission
            </h2>

            <p className="text-slate-700 leading-[28px] text-[16px] font-[Inter,sans-serif] text-justify">
              Our mission is to make logistics effortless and dependable by providing seamless,
              end-to-end transportation solutions across the globe. We are committed to delivering every
              shipment with trust, transparency, and on-time performance, while offering personalized,
              solution-driven support that aligns with our clients’ business goals.
              <br /><br />
              Through ethical practices and clear communication, we strive to build lasting partnerships
              and ensure consistent, reliable service.
              <br /><br />
              Our vision is to be a globally trusted logistics partner known for excellence in operations,
              advanced technology, and superior service quality. We aspire to set industry benchmarks
              through continuous improvement, proactive communication, and unwavering reliability—
              enabling businesses worldwide to move forward with confidence.
            </p>
          </div>
        </div>

        {/* LEADERSHIP */}
        <div className="text-center mb-8">
          <h2 className="text-[28px] font-semibold text-[color:var(--brand-600)] font-['Cal Sans',sans-serif]">
            Our Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center mb-20">
          <div className="w-40 h-40 bg-gray-500 rounded-xl"></div>
          <div className="w-40 h-40 bg-gray-500 rounded-xl"></div>
          <div className="w-40 h-40 bg-gray-500 rounded-xl"></div>
        </div>
      </div>

      {/* FIXED FOOTER */}
      <Footer />
    </>
  );
}
