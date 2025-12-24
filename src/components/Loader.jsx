import React, { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#f8f8ff] flex flex-col items-center justify-center z-[9999]">

      {/* Truck */}
      <img
        src="/loader-truck.png"
        alt="Loading"
        className="w-[330px] md:w-[450px] animate-upDown"
      />

      {/* Loading Bar */}
      <div className="w-[70%] md:w-[40%] h-5 bg-white rounded-full mt-10 shadow-md border border-[#4A46C6] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-purple-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* % Text */}
      <p className="mt-4 text-[#4A46C6] font-bold text-lg tracking-wide">
        Loading... {progress}%
      </p>
    </div>
  );
}
