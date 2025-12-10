import React, { useEffect, useState, useRef } from "react";

/**
 * AnimatedHeadline
 * Props:
 *  - lines: array of strings (each will appear in turn)
 *  - interval: ms between switches (default 3000)
 *
 * Renders a stack of absolutely positioned lines and crossfades + slides them.
 */
export default function AnimatedHeadline({ lines = [], interval = 3000, className = "" }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!lines || lines.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % lines.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [lines, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`} aria-live="polite">
      {lines.map((text, i) => {
        const active = i === index;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-out
              ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <span className="block">{text}</span>
          </div>
        );
      })}
    </div>
  );
}
