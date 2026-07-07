import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "../../data/services";
import { Link } from "react-router-dom";
/**
 * Header — AutoLuxe (Tailwind CSS version)
 * Palette (fixed):
 *   Primary BG      #0B0B0B
 *   Secondary BG    #1A1A1A
 *   Section BG      #2A2A2A
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver — buttons / hover)
 *
 * All NAV_LINKS wired to correct section IDs:
 *   Home       → #home
 *   About Us   → #about-us
 *   Services   → dropdown with individual service section IDs
 *   Blog       → #blog
 *   Franchise  → #franchise
 *   Contact    → #contact
 *
 * Smooth scroll: handleNav() scrolls to section & closes mobile menu.
 */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: null }, // has dropdown
  { label: "Blog", href: "/blog" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
];

/* ── Framer Motion variants ── */

const headerVariants = {
  hidden: { y: -80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.22, ease: "easeOut" } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const drawerVariants = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: "100%", transition: { duration: 0.32, ease: [0.4, 0, 1, 1] } },
};

const drawerNavVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const drawerItemVariants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const mobSubVariants = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const svcTimer = useRef(null);

  // Sliding hover highlight for the services dropdown
  const svcListRef = useRef(null);
  const svcItemRefs = useRef([]);
  const [svcHighlight, setSvcHighlight] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });

  const updateSvcHighlight = (idx) => {
    const el = svcItemRefs.current[idx];
    const list = svcListRef.current;
    if (el && list) {
      const elRect = el.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      setSvcHighlight({
        top: elRect.top - listRect.top,
        height: elRect.height,
        opacity: 1,
      });
    }
  };
  const hideSvcHighlight = () => setSvcHighlight((h) => ({ ...h, opacity: 0 }));

  useEffect(() => {
    if (!servicesOpen) setSvcHighlight((h) => ({ ...h, opacity: 0 }));
  }, [servicesOpen]);

  // Sliding hover/tap highlight for the mobile services accordion
  const mobSvcListRef = useRef(null);
  const mobSvcItemRefs = useRef([]);
  const [mobSvcHighlight, setMobSvcHighlight] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });

  const updateMobSvcHighlight = (idx) => {
    const el = mobSvcItemRefs.current[idx];
    const list = mobSvcListRef.current;
    if (el && list) {
      const elRect = el.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      setMobSvcHighlight({
        top: elRect.top - listRect.top,
        height: elRect.height,
        opacity: 1,
      });
    }
  };
  const hideMobSvcHighlight = () =>
    setMobSvcHighlight((h) => ({ ...h, opacity: 0 }));

  useEffect(() => {
    if (!mobileSvcOpen) setMobSvcHighlight((h) => ({ ...h, opacity: 0 }));
  }, [mobileSvcOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const svcHover = {
    onMouseEnter: () => {
      clearTimeout(svcTimer.current);
      setServicesOpen(true);
    },
    onMouseLeave: () => {
      svcTimer.current = setTimeout(() => setServicesOpen(false), 150);
    },
  };

  // Smooth scroll to section ID, close menus
  const handleNav = (e, href) => {
    if (!href) return;
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileSvcOpen(false);
  };

  return (
    <>
      {/* Only things Tailwind truly can't express: font import + keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap');
        @keyframes ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(140,140,140,0.5); }
          50%       { box-shadow: 0 0 0 8px rgba(140,140,140,0); }
        }
      `}</style>

      <motion.header
        className={`sticky top-0 z-50 w-full bg-[#0B0B0B] transition-[box-shadow,border-color] duration-[400ms] border-b border-[#2A2A2A] font-['Bai_Jamjuree',sans-serif] [&_*]:box-border ${
          scrolled
            ? "shadow-[0_4px_30px_-8px_rgba(140,140,140,0.25)] border-b-[#3D3D3D]"
            : ""
        }`}
        variants={headerVariants}
        initial="hidden"
        animate="show"
      >
        {/* top gradient line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#8C8C8C] to-transparent opacity-55" />

        <div className="max-w-7xl mx-auto px-[clamp(14px,4vw,20px)] flex items-center justify-between h-[clamp(60px,8vw,70px)] gap-[clamp(8px,2vw,16px)]">
          {/* Logo (bigger now) */}
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline flex-shrink-0 min-w-0"
            aria-label="AutoLuxe home"
            onClick={(e) => handleNav(e, "#home")}
          >
            <img
              src="/logo.png"
              alt="AutoLuxe logo"
              className="h-[clamp(48px,8vw,72px)] w-auto max-w-[clamp(160px,36vw,260px)] object-contain block max-[400px]:h-[380px] max-[400px]:max-w-[130px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1 flex-wrap justify-end lg:gap-0.5 xl:gap-1"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key="Services" className="relative" {...svcHover}>
                    <button
                      className={`group relative flex items-center gap-1 px-2.5 py-1.5 lg:px-[7px] lg:text-xs xl:px-2.5 xl:text-[13.5px] text-[13.5px] font-semibold tracking-[0.06em] uppercase text-white bg-transparent border-none cursor-pointer transition-colors duration-[250ms] whitespace-nowrap font-inherit ${
                        servicesOpen ? "text-white" : ""
                      }`}
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      Services
                      <ChevronDown
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        size={14}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#B8B8B8] origin-center transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          servicesOpen
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="absolute left-1/2 top-[calc(100%+10px)] w-[min(340px,90vw)] bg-[#1A1A1A] border border-[#3D3D3D] rounded-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7),0_0_0_1px_rgba(140,140,140,0.05)] z-[100]"
                          style={{ x: "-50%" }}
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          role="menu"
                        >
                          {/* caret */}
                          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-45 w-3 h-3 bg-[#1A1A1A] border-l border-t border-[#3D3D3D]" />

                          <div
                            className="relative py-2"
                            ref={svcListRef}
                            onPointerLeave={hideSvcHighlight}
                          >
                            <motion.div
                              className="absolute left-2 right-2 rounded-lg bg-gradient-to-br from-[rgba(140,140,140,0.16)] to-[rgba(140,140,140,0.05)] border border-[rgba(140,140,140,0.28)] pointer-events-none z-0"
                              animate={{
                                top: svcHighlight.top,
                                height: svcHighlight.height,
                                opacity: svcHighlight.opacity,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 38,
                                mass: 0.6,
                              }}
                            />
                            <ul className="list-none m-0 p-0 relative z-[1]">
                              {SERVICES.map((svc, i) => (
                                <motion.li
                                  className="relative"
                                  key={svc.name}
                                  variants={dropdownItemVariants}
                                >
                                  <Link
                                    to={svc.href}
                                    role="menuitem"
                                    ref={(el) => (svcItemRefs.current[i] = el)}
                                    onPointerEnter={() => updateSvcHighlight(i)}
                                    onClick={(e) => handleNav(e, svc.href)}
                                    className="group relative flex items-center justify-between gap-3 px-[18px] py-[11px] no-underline"
                                  >
                                    <span className="flex flex-col gap-0.5 min-w-0 transition-transform duration-[250ms] ease-out group-hover:translate-x-[3px]">
                                      <span className="font-['Bai_Jamjuree',sans-serif] text-[13.5px] font-semibold text-white tracking-[0.02em]">
                                        {svc.name}
                                      </span>
                                      <span className="text-[11.5px] text-[#B8B8B8] font-serif leading-[1.4]">
                                        {svc.desc}
                                      </span>
                                    </span>
                                    <ChevronRight
                                      className="flex-shrink-0 text-[#8C8C8C] opacity-0 -translate-x-1.5 transition-all duration-[250ms] ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white"
                                      size={16}
                                      strokeWidth={2}
                                    />
                                  </Link>
                                  {i < SERVICES.length - 1 && (
                                    <div className="mx-[18px] h-px bg-[#2A2A2A] relative z-[1]" />
                                  )}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="group relative flex items-center gap-1 px-2.5 py-1.5 lg:px-[7px] lg:text-xs xl:px-2.5 xl:text-[13.5px] text-[13.5px] font-semibold tracking-[0.06em] uppercase text-white no-underline transition-colors duration-[250ms] whitespace-nowrap"
                  onClick={() => {
                    setMobileOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#B8B8B8] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                </Link>
              );
            })}
          </nav>

          {/* Right: Phone + mobile buttons */}
          <div className="flex items-center gap-[clamp(6px,1.5vw,12px)] flex-shrink-0">
            {/* Full numbers with flags — shown from lg (1024px) up so there is no
                dead zone between the hamburger button and this block */}
            <div className="hidden lg:flex items-center gap-[clamp(5px,0.8vw,10px)]">
              {/* First Number — Oman */}
              <a
                href="tel:08077976595"
                className="flex items-center gap-1.5 no-underline"
              >
                <img
                  src="https://flagcdn.com/w40/om.png"
                  srcSet="https://flagcdn.com/w80/om.png 2x"
                  alt="Oman flag"
                  className="w-[clamp(16px,1.2vw,20px)] h-auto rounded-[2px] flex-shrink-0 ring-1 ring-white/15"
                />
                <div className="leading-[1.2]">
                  <div className="text-[clamp(11.5px,0.9vw,15px)] font-bold text-white tracking-[0.03em] whitespace-nowrap">
                    080-77976595
                  </div>
                </div>
              </a>

              {/* Vertical Divider */}
              <div className="w-px h-[22px] bg-white/25 flex-shrink-0" />

              {/* Second Number — India */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-1.5 no-underline"
              >
                <img
                  src="https://flagcdn.com/w40/in.png"
                  srcSet="https://flagcdn.com/w80/in.png 2x"
                  alt="India flag"
                  className="w-[clamp(16px,1.2vw,20px)] h-auto rounded-[2px] flex-shrink-0 ring-1 ring-white/15"
                />
                <div className="leading-[1.2]">
                  <div className="text-[clamp(11.5px,0.9vw,15px)] font-bold text-white tracking-[0.03em] whitespace-nowrap">
                    +91 98765 43210
                  </div>
                </div>
              </a>
            </div>

            <button
              className="flex lg:hidden items-center justify-center w-10 h-10 bg-transparent border border-[#3D3D3D] rounded-md text-[#8C8C8C] cursor-pointer transition-colors duration-200 hover:bg-[#1A1A1A] hover:border-[#8C8C8C] flex-shrink-0 relative z-[210]"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (right-side) */}
        <AnimatePresence>
          {mobileOpen && (
            <React.Fragment>
              <motion.div
                className="fixed inset-0 z-[190] bg-black/60 backdrop-blur-[2px]"
                variants={overlayVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                className="fixed top-0 right-0 bottom-0 z-[200] w-[min(85vw,340px)] min-w-[260px] bg-[#0B0B0B] border-l border-[#3D3D3D] shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.8)] flex flex-col overflow-y-auto"
                variants={drawerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                role="dialog"
                aria-modal="true"
              >
                <div className="flex items-center justify-between px-5 py-[18px] border-b border-[#2A2A2A] flex-shrink-0">
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#8C8C8C]">
                    Menu
                  </span>
                </div>

                <motion.nav
                  className="flex flex-col px-[clamp(16px,5vw,20px)] pt-2 pb-4"
                  variants={drawerNavVariants}
                  initial="hidden"
                  animate="show"
                >
                  {NAV_LINKS.map((link) => {
                    if (link.label === "Services") {
                      return (
                        <motion.div
                          className="border-b border-[#2A2A2A]"
                          key="Services"
                          variants={drawerItemVariants}
                        >
                          <button
                            className={`w-full flex items-center justify-between py-[13px] text-sm font-semibold tracking-[0.06em] uppercase bg-transparent border-none cursor-pointer font-inherit transition-colors duration-200 ${
                              mobileSvcOpen
                                ? "text-white"
                                : "text-[#B8B8B8] hover:text-white"
                            }`}
                            onClick={() => setMobileSvcOpen((v) => !v)}
                            aria-expanded={mobileSvcOpen}
                          >
                            Services
                            <ChevronDown
                              className={`transition-transform duration-300 ${
                                mobileSvcOpen ? "rotate-180" : ""
                              }`}
                              size={16}
                              strokeWidth={2.5}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {mobileSvcOpen && (
                              <motion.div
                                className="overflow-hidden"
                                variants={mobSubVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                              >
                                <div
                                  className="relative pt-1 pb-2"
                                  ref={mobSvcListRef}
                                  onPointerLeave={hideMobSvcHighlight}
                                >
                                  <motion.div
                                    className="absolute left-1 right-1 rounded-lg bg-gradient-to-br from-[rgba(140,140,140,0.16)] to-[rgba(140,140,140,0.05)] border border-[rgba(140,140,140,0.28)] pointer-events-none z-0"
                                    animate={{
                                      top: mobSvcHighlight.top,
                                      height: mobSvcHighlight.height,
                                      opacity: mobSvcHighlight.opacity,
                                    }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 500,
                                      damping: 38,
                                      mass: 0.6,
                                    }}
                                  />
                                  <ul className="list-none m-0 p-0 relative z-[1]">
                                    {SERVICES.map((svc, i) => (
                                      <li className="relative" key={svc.name}>
                                        <Link
                                          to={svc.href}
                                          ref={(el) =>
                                            (mobSvcItemRefs.current[i] = el)
                                          }
                                          onPointerEnter={() =>
                                            updateMobSvcHighlight(i)
                                          }
                                          onPointerDown={() =>
                                            updateMobSvcHighlight(i)
                                          }
                                          onClick={(e) =>
                                            handleNav(e, svc.href)
                                          }
                                          className="group relative flex items-center justify-between gap-3 px-[18px] py-[11px] no-underline"
                                        >
                                          <span className="flex flex-col gap-0.5 min-w-0 transition-transform duration-[250ms] ease-out group-hover:translate-x-[3px]">
                                            <span className="font-['Bai_Jamjuree',sans-serif] text-[13.5px] font-semibold text-white tracking-[0.02em]">
                                              {svc.name}
                                            </span>
                                            <span className="text-[11.5px] text-[#B8B8B8] font-serif leading-[1.4]">
                                              {svc.desc}
                                            </span>
                                          </span>
                                          <ChevronRight
                                            className="flex-shrink-0 text-[#8C8C8C] opacity-0 -translate-x-1.5 transition-all duration-[250ms] ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white"
                                            size={16}
                                            strokeWidth={2}
                                          />
                                        </Link>
                                        {i < SERVICES.length - 1 && (
                                          <div className="mx-[18px] h-px bg-[#2A2A2A] relative z-[1]" />
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={link.label}
                        variants={drawerItemVariants}
                      >
                        <Link
                          to={link.href}
                          className="block py-[13px] text-sm font-semibold tracking-[0.06em] uppercase text-[#B8B8B8] no-underline border-b border-[#2A2A2A] transition-colors duration-200 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    className="mt-3.5 flex flex-col gap-2"
                    variants={drawerItemVariants}
                  >
                    <a
                      href="tel:08077976595"
                      className="flex items-center gap-2.5 bg-[#1A1A1A] border border-[#3D3D3D] rounded-lg px-3.5 py-2.5 no-underline"
                    >
                      <img
                        src="https://flagcdn.com/w40/om.png"
                        srcSet="https://flagcdn.com/w80/om.png 2x"
                        alt="Oman flag"
                        className="w-5 h-auto rounded-[2px] flex-shrink-0 ring-1 ring-white/15"
                      />
                      <span className="text-[13px] font-bold text-white tracking-[0.03em]">
                        080-77976595
                      </span>
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-2.5 bg-[#1A1A1A] border border-[#3D3D3D] rounded-lg px-3.5 py-2.5 no-underline"
                    >
                      <img
                        src="https://flagcdn.com/w40/in.png"
                        srcSet="https://flagcdn.com/w80/in.png 2x"
                        alt="India flag"
                        className="w-5 h-auto rounded-[2px] flex-shrink-0 ring-1 ring-white/15"
                      />
                      <span className="text-[13px] font-bold text-white tracking-[0.03em]">
                        +91 98765 43210
                      </span>
                    </a>
                  </motion.div>
                </motion.nav>
              </motion.div>
            </React.Fragment>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}