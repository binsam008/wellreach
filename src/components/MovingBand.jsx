import React from "react";

export default function TextBand({
  speed = 20,
}) {
  const words = [
    "SHIPPING",
    "DELIVERY",
    "WELL REACH LOGISTICS",
  ];

  return (
    <div className="w-full overflow-hidden bg-[color:var(--brand-600)] py-3">
      <div
        className="flex items-center gap-8 band-text-track whitespace-nowrap hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...words, ...words, ...words].map((word, i) => (
          <div
            key={i}
            className="flex items-center gap-8 text-white font-medium tracking-widest text-sm sm:text-base"
          >
            <span>{word}</span>
            <span className="text-white opacity-80">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
