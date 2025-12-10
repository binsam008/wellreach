import React, { useEffect, useRef, useState } from "react";

/**
 * Testimonial
 * - Auto-rotates through testimonial entries
 * - Pauses rotation on hover/focus
 * - Uses IntersectionObserver to animate layered cards when scrolled into view
 * - Avatar supports image files in public/avatars/
 */

const TESTIMONIALS = [
  {
    quote:
      "WellReach managed our international shipments flawlessly.Their customer service is top notch.",
    name: "Lando Norris",
    role: "F1 - World Champion",
    avatar: "/avatars/lando.jpg",
    stars: 5,
  },
  {
    quote:
      "Reduced our transit times and improved visibility across shipments. Their customer service is top notch.",
    name: "Priya Shah",
    role: "Logistics Head",
    avatar: "/avatars/priya.jpg",
    stars: 5,
  },
  {
    quote:
      "Professional and reliable. Great rates and the tracking system gives us peace of mind throughout the delivery.",
    name: "David Miller",
    role: "Procurement Manager",
    avatar: "/avatars/david.jpg",
    stars: 4,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Auto-rotate logic (advance every 5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused]);

  // Pause on hover/focus handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocus = () => setIsPaused(true);
  const handleBlur = () => setIsPaused(false);

  // IntersectionObserver for entrance animation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const active = TESTIMONIALS[index];

  return (
    <section
      className="px-6 py-10"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto max-w-xl lg:max-w-5xl">
        <h3 className="text-center text-2xl font-semibold text-[color:var(--brand-600,#6d4bd6)] mb-6">
          Client Testimonial
        </h3>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Card column */}
          <div className="relative flex justify-center lg:justify-start">
            {/* layered shadows/cards behind (animated) */}
            <div
              className={`absolute -right-3 top-6 w-44 h-48 rounded-xl bg-[color:var(--brand-600,#6d4bd6)] opacity-12 transform rotate-6 transition-transform duration-900 ${
                visible ? "translate-x-0" : "translate-x-8"
              }`}
            />
            <div
              className={`absolute -right-6 top-12 w-40 h-44 rounded-xl bg-white/90 opacity-60 transform rotate-3 shadow-sm transition-transform duration-900 ${
                visible ? "translate-x-0" : "translate-x-10"
              }`}
            />

            {/* main testimonial card */}
            <article
              className="relative bg-white rounded-2xl w-full max-w-[360px] sm:max-w-[420px] p-5 sm:p-6 card-shadow overflow-hidden"
              aria-labelledby="testimonial-title"
              tabIndex={0}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {/* vertical purple accent bar on right */}
              <div
                className="absolute right-0 top-0 bottom-0 w-15 rounded-tr-2xl rounded-br-2xl bg-[color:var(--brand-600,#6d4bd6)]"
                aria-hidden
              />

              {/* stars */}
              <div className="flex items-center gap-2 mb-3">
                <StarRating value={active.stars} />
              </div>

              {/* quote */}
              <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                {active.quote}
              </blockquote>

              {/* avatar + name */}
              <footer className="flex items-center gap-3">
                <img
                  src={active.avatar}
                  alt={`${active.name} avatar`}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-slate-800">{active.name}</div>
                  <div className="text-xs text-slate-500">{active.role}</div>
                </div>
              </footer>
            </article>
          </div>

          {/* Explanatory / marketing column (on mobile appears under card) */}
          <div
            className="text-center lg:text-left"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <p className="text-slate-600 mb-4">
              We prioritize transparency and speed — helping businesses scale across borders.
              Our clients trust us for dependable logistics solutions and consistent delivery times.
            </p>

            <div className="mt-3 flex items-center justify-center lg:justify-start gap-3">
              {/* <a
                href="#expert"
                className="inline-block bg-[color:var(--brand-600,#6d4bd6)] text-white py-2 px-4 rounded-md shadow-sm text-sm"
                aria-label="Talk to expert"
              >
                Talk to an Expert
              </a> */}

              {/* small pager dots with clickable preview */}
              <div className="flex items-center gap-2 ml-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={i}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-2 w-8 rounded-full transition-all duration-300 ${
                      i === index ? "bg-[color:var(--brand-600,#6d4bd6)] w-8" : "bg-slate-200 w-4"
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small helper component for star rating (0..5) */
function StarRating({ value = 5 }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {stars.map((s) => (
        <svg
          key={s}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={s <= value ? "#FBBF24" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.04l2.94 5.955L21.9 9.24l-4.95 4.82L18.9 21 12 17.77 5.1 21l1.95-6.94L2.1 9.24l6.96-1.245L12 2.04z"
            fill={s <= value ? "#FBBF24" : "none"}
            stroke={s <= value ? "none" : "#E5E7EB"}
            strokeWidth="0"
          />
        </svg>
      ))}
    </div>
  );
}
