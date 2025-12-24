import React from "react";

export default function TruckLoader({ progress }) {
  const cleanProgress = Math.floor(progress); // ⬅ REMOVE DECIMALS

  return (
    <div className="fixed inset-0 bg-[#f4f4ff] flex flex-col items-center justify-center z-[9999]">

      {/* TRUCK WRAPPER (drives away at 100%) */}
      <div className={`truck-container ${cleanProgress >= 100 ? "drive-away" : ""}`}>

        <svg width="320" height="180" viewBox="0 0 200 120">

          {/* CLIP SHAPE */}
          <clipPath id="truckClip">
            <rect x="10" y="35" width="120" height="50" rx="10" />
            <rect x="135" y="50" width="45" height="35" rx="8" />
          </clipPath>

          {/* LIQUID FILL */}
          <g clipPath="url(#truckClip)">
            <rect
              x="0"
              y="0"
              width={(cleanProgress / 100) * 200}
              height="200"
              fill="#4A46C6"
              className="transition-all duration-700 ease-linear"
            />

            {/* LIQUID WAVE INSIDE */}
            <path
              d="M0 65 Q 40 45 80 65 T 200 65 V200 H0 Z"
              fill="#6D67D7"
              className="liquid-wave"
              style={{
                opacity: 0.6,
                transform: `translateX(${-(100 - cleanProgress) * 2}px)`
              }}
            />
          </g>

          {/* OUTLINE */}
          <rect
            x="10"
            y="35"
            width="120"
            height="50"
            rx="10"
            stroke="#4A46C6"
            strokeWidth="4"
            fill="transparent"
          />

          <rect
            x="135"
            y="50"
            width="45"
            height="35"
            rx="8"
            stroke="#4A46C6"
            strokeWidth="4"
            fill="transparent"
          />

          {/* WHEELS */}
          <circle cx="45" cy="95" r="13" stroke="#4A46C6" strokeWidth="4" fill="white" className="wheel-rotate" />
          <circle cx="145" cy="95" r="13" stroke="#4A46C6" strokeWidth="4" fill="white" className="wheel-rotate" />

        </svg>
      </div>

      {/* LOGO TEXT */}
      <h2 className="text-[#4A46C6] font-bold text-2xl mt-6 tracking-wide">
        WELL REACH LOGISTICS
      </h2>

      {/* LOADING PERCENTAGE WITHOUT DECIMALS */}
      <p className="text-[#4A46C6] text-lg font-medium mt-1">
        Loading {cleanProgress}%
      </p>
    </div>
  );
}
