import React from "react";
import { FiShield, FiClock, FiGlobe, FiDollarSign } from "react-icons/fi";

export default function WhyChoose() {
  const items = [
    {
      icon: <FiShield />,
      title: "Trusted & Insured",
      body: "Your cargo is protected, insured and handled with care.",
    },
    {
      icon: <FiClock />,
      title: "On Time Delivery",
      body: "Reliable schedules and proactive alerts.",
    },
    {
      icon: <FiGlobe />,
      title: "Nationwide Reach",
      body: "Extensive carrier network for broad coverage.",
    },
    {
      icon: <FiDollarSign />,
      title: "Affordable Rates",
      body: "Competitive pricing for every business size.",
    },
  ];

  return (
    <div className="w-full">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl font-semibold mb-6 text-[color:var(--brand-600)]">
        Why Choose Us
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[color:var(--brand-600)] text-white shadow-md"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="bg-white text-[color:var(--brand-600)] p-3 rounded-xl shadow-sm text-xl">
                {it.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className="font-semibold text-base">{it.title}</h4>
                <p className="text-sm mt-1 opacity-90 leading-snug">
                  {it.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
