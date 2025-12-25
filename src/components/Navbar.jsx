import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  // Scroll detection (HOME only)
  useEffect(() => {
    const onScroll = () => {
      if (isHome) {
        setScrolled(window.scrollY > 10);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
    { name: "Incoterms", to: "/incoterms" },
  ];

  // 🔑 LOGO LOGIC
  const logoSrc =
    isHome && !scrolled ? "/navlogo.png" : "/nav1.png";

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      {/* NAVBAR BACKGROUND */}
      <div
        className={`
          transition-all duration-300
          ${
            isHome
              ? scrolled
                ? "backdrop-blur-md bg-white/80 shadow-md"
                : "bg-transparent"
              : "bg-white shadow-md"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={logoSrc}
                alt="Well Reach Logistics"
                className="h-12 w-auto transition-all duration-300"
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`
                    font-semibold text-sm uppercase tracking-wide transition
                    ${
                      isHome && !scrolled
                        ? "text-white hover:text-purple-300"
                        : "text-gray-800 hover:text-[#5154B6]"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className={`
                md:hidden p-2 rounded-md transition
                ${isHome && !scrolled ? "text-white" : "text-gray-900"}
              `}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden flex"
          >
            <div className="rounded-r-2xl w-72 h-full bg-white shadow-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <img src="/nav-logo.png" className="h-10" alt="Logo" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md bg-gray-200"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-5 text-gray-900 font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg hover:text-[#5154B6]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
