import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Navbar with:
 *  - fade + slide show/hide animation
 *  - shadow when page is scrolled
 *  - auto-hide delay (so it doesn't hide immediately)
 *  - only hide after passing the hero (#home) section
 *
 * Behavior: hides on scroll-down, shows on scroll-up (applies on all screen sizes)
 *
 * Configurable parameters below:
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);      // mobile menu
  const [hidden, setHidden] = useState(false);      // whether navbar is hidden
  const [scrolled, setScrolled] = useState(false);  // whether user scrolled past tiny threshold (for shadow)
  const location = useLocation();

  // Config
  const NAV_HEIGHT = 64;               // px, used for offset math (approx your header size)
  const AUTO_HIDE_DELAY = 650;         // ms - wait this long after user stops scrolling before hiding
  const MIN_SCROLL_TO_ENABLE = 100;    // start reacting after this many px scrolled (safety)
  const ONLY_HIDE_AFTER_HOME = true;   // only auto-hide once past hero section

  // refs so we can use them in handlers
  const lastScrollYRef = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const hideTimeoutRef = useRef(null);
  const isManualShowRef = useRef(false); // if user opens mobile menu, keep navbar visible

  // Close mobile menu on route change
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

          // set scrolled flag for shadow when user has scrolled a little
          setScrolled(currentY > 10);

          // determine if we are allowed to auto-hide yet
          const passedHero = heroEl ? currentY > Math.max(heroHeight - NAV_HEIGHT, 0) : true;

          // if ONLY_HIDE_AFTER_HOME is true, don't hide until we've passed hero section
          const canHideNow = ONLY_HIDE_AFTER_HOME ? passedHero : true;

          // if mobile menu is open, keep visible
          if (isOpen) {
            // keep navbar visible while mobile menu open
            setHidden(false);
            lastScrollYRef.current = currentY;
            ticking = false;
            return;
          }

          // If user scrolled down (currentY > lastY) and beyond MIN_SCROLL_TO_ENABLE and canHideNow -> schedule hide
          if (currentY > lastScrollYRef.current && currentY > Math.max(MIN_SCROLL_TO_ENABLE, NAV_HEIGHT) && canHideNow) {
            // user scrolling down -> start auto-hide after delay
            // clear any existing timer and start a new one
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = setTimeout(() => {
              setHidden(true);
              hideTimeoutRef.current = null;
            }, AUTO_HIDE_DELAY);
          } else {
            // user scrolled up OR hasn't reached threshold -> show immediately and cancel hide timer
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
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };
  }, [isOpen]);

  // Mobile menu open/close toggle - when opening, ensure navbar is visible
  const openMobileMenu = () => {
    setIsOpen(true);
    setHidden(false);
    isManualShowRef.current = true;
    // after short time release manual show flag so scroll can hide again when appropriate
    setTimeout(() => (isManualShowRef.current = false), 800);
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
    { name: "Get a Quote", to: "/quote" },
  ];

  // Framer variants for slide + fade
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
      {/* Outer container: apply shadow when scrolled, keep transitions smooth */}
      <div
        className={`backdrop-blur-sm transition-shadow duration-300 ${
          scrolled ? "shadow-lg bg-white/80" : "bg-white/90"
        }`}
        style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-9 w-auto" />
            </Link>

            {/* Desktop Navigation (still shown/hide controlled by animation above) */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-black hover:text-[var(--brand-600)] transition font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={openMobileMenu}
              className="md:hidden p-2 rounded-md text-purple-400"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-over menu */}
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
                    className="block text-lg hover:text-[var(--brand-600)] transition"
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
