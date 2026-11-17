import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Portfolio from "./portfolio/Portfolio"; // ✅ keep here
import Footer from "./sections/Footer";

// Lazy pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Incoterms = lazy(() => import("./pages/Incoterms"));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/incoterms" element={<Incoterms />} />

            {/* ✅ ADD HERE */}
            <Route path="/portfolio/:slug" element={<Portfolio />} />
          </Routes>
        </Suspense>
        <Footer/>
      </main>
    </BrowserRouter>
  );
}
