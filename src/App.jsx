import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

// UI components
import Navbar from "./components/Navbar"; // top bar (has the hamburger)
// import Sidebar from "./components/Sidebar"; // sliding sidebar used for mobile overlay
import SidebarFloating from "./components/SidebarFloating"; // fixed vertical icon bar (desktop)

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800 relative">
        {/* Top navigation (shows logo + hamburger) */}
        <Navbar onOpen={() => setOpen(true)} />

        {/* Mobile sliding sidebar (overlay). Sidebar component expects `open` and `onClose`
        <Sidebar open={open} onClose={() => setOpen(false)} /> */}

        {/* Floating vertical icon bar for desktop */}
        <SidebarFloating />

        {/* Page content */}
        <main className="pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
