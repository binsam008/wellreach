import React, { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "WellReach managed our international shipments flawlessly. Their customer service is top notch.",
    name: "Lando Norris",
    role: "F1 - World Champion",
    avatar: "/avatars/lando.jpg",
    stars: 5,
  },
  {
    quote:
      "Reduced our transit times and improved visibility across shipments.",
    name: "Priya Shah",
    role: "Logistics Head",
    avatar: "/avatars/priya.jpg",
    stars: 5,
  },
  {
    quote:
      "Professional and reliable. Great rates and tracking visibility.",
    name: "David Miller",
    role: "Procurement Manager",
    avatar: "/avatars/david.jpg",
    stars: 4,
  },
  {
    quote:
      "Fast deliveries and great communication throughout.",
    name: "Alex Wong",
    role: "Operations Lead",
    avatar: "/avatars/alex.jpg",
    stars: 5,
  },
  {
    quote:
      "Excellent international coverage and smooth customs handling.",
    name: "Sara Khan",
    role: "Import Manager",
    avatar: "/avatars/sara.jpg",
    stars: 5,
  },
  {
    quote:
      "Very dependable logistics partner for our exports.",
    name: "Michael Brown",
    role: "Supply Chain Director",
    avatar: "/avatars/michael.jpg",
    stars: 4,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  // Auto slide (mobile)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-2xl font-semibold text-[color:var(--brand-600)] mb-10">
          Client Testimonial
        </h3>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="lg:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-3">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="mt-4 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  index === i
                    ? "w-6 bg-[color:var(--brand-600)]"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function TestimonialCard({ quote, name, role, avatar, stars }) {
  return (
    <article className="relative bg-white rounded-2xl p-6 shadow-md overflow-hidden">
      {/* right accent bar */}
      <div className="absolute right-0 top-0 bottom-0 w-3 bg-[color:var(--brand-600)]" />

      {/* stars */}
      <StarRating value={stars} />

      <p className="mt-3 text-sm text-slate-700 leading-relaxed">
        {quote}
      </p>

      <footer className="mt-5 flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold text-slate-800">
            {name}
          </div>
          <div className="text-xs text-slate-500">
            {role}
          </div>
        </div>
      </footer>
    </article>
  );
}

/* ================= STARS ================= */

function StarRating({ value = 5 }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill={s <= value ? "#FBBF24" : "none"}
          stroke="#FBBF24"
        >
          <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
        </svg>
      ))}
    </div>
  );
}
