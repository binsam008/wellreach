import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const NAV_HEIGHT = 64;
  const AUTO_HIDE_DELAY = 650;
  const MIN_SCROLL_TO_ENABLE = 100;
  const ONLY_HIDE_AFTER_HOME = true;

  const lastScrollYRef = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const hideTimeoutRef = useRef(null);
  const isManualShowRef = useRef(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const heroEl = document.getElementById("home");
    const heroHeight = heroEl ? heroEl.getBoundingClientRect().height : 0;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          // detect scroll for transparency toggle
          setScrolled(currentY > 10);

          const passedHero = heroEl ? currentY > Math.max(heroHeight - NAV_HEIGHT, 0) : true;
          const canHideNow = ONLY_HIDE_AFTER_HOME ? passedHero : true;

          if (isOpen) {
            setHidden(false);
            lastScrollYRef.current = currentY;
            ticking = false;
            return;
          }

          if (
            currentY > lastScrollYRef.current &&
            currentY > Math.max(MIN_SCROLL_TO_ENABLE, NAV_HEIGHT) &&
            canHideNow
          ) {
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = setTimeout(() => {
              setHidden(true);
              hideTimeoutRef.current = null;
            }, AUTO_HIDE_DELAY);
          } else {
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
              hideTimeoutRef.current = null;
            }
            setHidden(false);
          }

          lastScrollYRef.current = currentY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [isOpen]);

  const openMobileMenu = () => {
    setIsOpen(true);
    setHidden(false);
    isManualShowRef.current = true;
    setTimeout(() => (isManualShowRef.current = false), 800);
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
    { name: "Get a Quote", to: "/quote" },
  ];

  const navVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "circOut" } },
    hidden:  { opacity: 0, y: -18, transition: { duration: 0.28, ease: "circIn" } },
  };

  return (
    <motion.nav
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      variants={navVariants}
      className={`fixed left-0 right-0 z-50 top-0 pointer-events-auto`}
    >
      {/* NAV CONTAINER */}
      <div
        className={`
          transition-all duration-300
          ${
            scrolled
              ? "backdrop-blur-md bg-purple-500/30 shadow-md"
              : "bg-transparent shadow-none"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/navlogo.png" alt="Logo" className="h-9 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-white hover:text-(--brand-600) transition font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={openMobileMenu}
              className="md:hidden p-2 rounded-md text-purple-500"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden flex"
          >
            <div className="rounded-r-2xl w-72 h-full shadow-xl p-6 flex flex-col bg-white">
              <div className="flex items-center justify-between mb-6">
                <img src="/logo.png" className="h-9" alt="Logo" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md bg-gray-200"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-5 text-gray-800 font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg hover:text-(--brand-600) transition"
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
