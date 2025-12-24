import React from "react";
import {
  FiShield,
  FiClock,
  FiGlobe,
  FiDollarSign,
  FiAward,
  FiTruck,
} from "react-icons/fi";

export default function WhyChoose() {
  const leftItems = [
    {
      icon: <FiShield />,
      title: "Trusted & Insured",
      body: "Insured logistics you can rely on every step of the way.",
    },
    {
      icon: <FiClock />,
      title: "On Time Delivery",
      body: "Reliable delivery committed to punctual schedules.",
    },
    {
      icon: <FiAward />,
      title: "Expertise & Experience",
      body: "A seasoned team with professional logistics knowledge.",
    },
  ];

  const rightItems = [
    {
      icon: <FiGlobe />,
      title: "Nationwide Reach",
      body: "We deliver across all regions with complete coverage.",
    },
    {
      icon: <FiDollarSign />,
      title: "Affordable Rates",
      body: "Top-quality logistics services at the best prices.",
    },
    {
      icon: <FiTruck />,
      title: "Smart Transportation",
      body: "Advanced fleet ensuring efficiency and reliability.",
    },
  ];

const Card = ({ icon, title, body }) => (
  <div className="bg-[color:var(--brand-600)] text-white p-6 rounded-2xl shadow-md flex flex-col items-start text-start">
    
    {/* ICON TOP (centered + rotating) */}
    <div className="text-4xl mb-4">
      {icon}
    </div>

    {/* TEXT BELOW */}
    <h4 className="font-semibold text-lg mb-1">
      {title}
    </h4>

    <p className="text-sm opacity-90 leading-snug">
      {body}
    </p>
  </div>
);


  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-14 text-[color:var(--brand-600)]">
          Why Choose Us
        </h2>

        {/* Desktop Layout - EXACT LIKE IMAGE */}
        <div className="hidden lg:grid grid-cols-3 items-center gap-12">

          {/* LEFT 3 CARDS */}
          <div className="space-y-8">
            {leftItems.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>

          {/* TRUCK IMAGE FLOATING */}
          <div className="flex justify-center">
            <img
              src="./why-choose-truck.png"
              alt="Well Reach Logistics Truck"
              className="h-[450px] scale-[1.18] animate-upDown"
            />
          </div>

          {/* RIGHT 3 CARDS */}
          <div className="space-y-8">
            {rightItems.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>

        </div>

        {/* MOBILE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden mt-10">
          {[...leftItems, ...rightItems].map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
