import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TruckLoader from "./components/TruckLoader";

// ✅ LAZY LOAD PAGES
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Incoterms = lazy(() => import("./pages/Incoterms"));

export default function App() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // ⚡ FASTER, SMART LOADER
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev; // stop at 90%
        return prev + 1.5; // faster fill
      });
    }, 80);

    // Finish loader once JS is ready
    window.addEventListener("load", () => {
      setProgress(100);
      setTimeout(() => setLoaded(true), 800);
    });

    return () => clearInterval(interval);
  }, []);

  // 🚚 LOADER
  if (!loaded) {
    return (
      <div className={progress >= 100 ? "fade-out" : ""}>
        <TruckLoader progress={progress} />
      </div>
    );
  }

  // 🌐 MAIN APP
  return (
    <BrowserRouter>
      <Navbar />

      <main className="pt-0">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/incoterms" element={<Incoterms />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}
