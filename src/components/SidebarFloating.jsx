import React, { useEffect, useRef, useState } from "react";
import {
  FiHome,
  FiInfo,
  FiGift,
  FiShield,
  FiMessageSquare,
  FiMapPin,
  FiMail,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const logoSrc = "/logo.png";

const items = [
  { id: "home", label: "Home", Icon: FiHome },
  { id: "about", label: "About", Icon: FiInfo },
  { id: "services", label: "Services", Icon: FiGift },
  { id: "whychoose", label: "Why Choose", Icon: FiShield },
  { id: "testimonial", label: "Testimonial", Icon: FiMessageSquare },
  { id: "expert", label: "Talk to Expert", Icon: FiMapPin },
  { id: "footer", label: "Contact / Footer", Icon: FiMail },
];

const FloatButton = ({ active, onClick, label, Icon }) => (
  <button
    onClick={onClick}
    title={label}
    aria-label={label}
    className={`group flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-150
      ${active ? "bg-[var(--brand-600)] text-white shadow-lg" : "bg-white text-gray-700 shadow-md"}
    `}
  >
    <span className="inline-flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
      <Icon size={18} />
    </span>
  </button>
);

export default function SidebarFloating() {
  const wrapRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // show when wrapper enters viewport (fallback show if ref missing)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // observe sections for active highlighting
  useEffect(() => {
    const sectionIds = items.map((it) => it.id);
    const sectionEls = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sectionEls.length) return;

    const callback = (entries) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (!visibleEntries.length) return;
      visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      setActiveId(visibleEntries[0].target.id);
    };

    const observer = new IntersectionObserver(callback, { threshold: [0.25, 0.5, 0.75] });
    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => (e) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveId(id);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 30 } },
  };

  return (
    // fixed bottom-right container (always vertical)
    <div ref={wrapRef} className="fixed right-6 bottom-12 z-50">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            // ALWAYS vertical stack on all screen sizes
            className="flex flex-col gap-3 items-center"
          >
            {/* Logo - top of the vertical stack */}
            <motion.div variants={itemVariants} className="flex items-center justify-center">
              <div className="bg-white rounded-full p-1 shadow-md w-12 h-12 flex items-center justify-center">
                <img src={logoSrc} alt="WellReach" className="w-8 h-8 object-contain" />
              </div>
            </motion.div>

            {/* Buttons stacked vertically */}
            {items.map(({ id, label, Icon }) => (
              <motion.div key={id} variants={itemVariants} className="relative">
                <FloatButton active={activeId === id} onClick={scrollTo(id)} label={label} Icon={Icon} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
