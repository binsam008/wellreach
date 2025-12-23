import React from "react";
import {
  FiShield,
  FiClock,
  FiGlobe,
  FiDollarSign,
} from "react-icons/fi";

export default function WhyChoose() {
  const leftItems = [
    {
      icon: <FiShield />,
      title: "Trusted & Insured",
      body: "Insured logistics you can rely on every step of the way",
    },
    {
      icon: <FiClock />,
      title: "On Time Delivery",
      body: "Your goods delivered right on schedule, without delays",
    },
  ];

  const rightItems = [
    {
      icon: <FiGlobe />,
      title: "Nationwide Reach",
      body: "Wherever your cargo needs to go, we deliver across the country.",
    },
    {
      icon: <FiDollarSign />,
      title: "Affordable Rates",
      body: "Quality logistics services at prices that fit your budget.",
    },
  ];

  const Card = ({ icon, title, body }) => (
    <div className="bg-[color:var(--brand-600)] text-white p-6 rounded-2xl shadow-md">
      <div className="flex gap-4 items-start">
        <div className="text-xl">{icon}</div>
        <div>
          <h4 className="font-semibold text-base">{title}</h4>
          <p className="text-sm mt-1 opacity-90 leading-snug">
            {body}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-14 text-[color:var(--brand-600)]">
          Why Choose Us
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 items-center gap-10">

          {/* Left cards */}
          <div className="space-y-8">
            {leftItems.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src="/assets/why-choose-truck.png"
              alt="Well Reach Logistics Truck"
              className="max-h-[420px] object-contain"
            />
          </div>

          {/* Right cards */}
          <div className="space-y-8">
            {rightItems.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {[...leftItems, ...rightItems].map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}
