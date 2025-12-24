import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TruckLoader from "./components/TruckLoader";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Incoterms = lazy(() => import("./pages/Incoterms"));

export default function App() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // SLOW, SMOOTH PROGRESS FILL
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 0.4;  // ⬅ Smooth slow loading
      });
    }, 120);

    if (progress >= 100) {
      clearInterval(interval);

      // Wait for truck to finish driving animation
      setTimeout(() => {
        setLoaded(true);
      }, 1600);
    }

    return () => clearInterval(interval);
  }, [progress]);

  // ⛔ SHOW LOADING SCREEN UNTIL FINISHED
  if (!loaded) {
    return (
      <div className={progress >= 100 ? "fade-out" : ""}>
        <TruckLoader progress={progress} />
      </div>
    );
  }

  // MAIN WEBSITE
  return (
    <BrowserRouter>
      <Navbar />

      <main className="pt-0">
        <Suspense fallback={<TruckLoader progress={80} />}>
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
