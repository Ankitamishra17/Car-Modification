import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "../../data/services";
import { Link } from "react-router-dom";
/**
 * Header — AutoLuxe
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
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

const mobSubVariants = {
  hidden: { height: 0, opacity: 0 },
  show: { height: "auto", opacity: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
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
  const [svcHighlight, setSvcHighlight] = useState({ top: 0, height: 0, opacity: 0 });

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
  const hideSvcHighlight = () =>
    setSvcHighlight((h) => ({ ...h, opacity: 0 }));

  useEffect(() => {
    if (!servicesOpen) setSvcHighlight((h) => ({ ...h, opacity: 0 }));
  }, [servicesOpen]);

  // Sliding hover/tap highlight for the mobile services accordion
  const mobSvcListRef = useRef(null);
  const mobSvcItemRefs = useRef([]);
  const [mobSvcHighlight, setMobSvcHighlight] = useState({ top: 0, height: 0, opacity: 0 });

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap');

        .hdr-root *, .hdr-root *::before, .hdr-root *::after { box-sizing: border-box; }

        .hdr-root {
          font-family: 'Bai Jamjuree', sans-serif;
          position: sticky; top: 0; z-index: 50; width: 100%;
          background: #0B0B0B;
          transition: box-shadow 0.4s, border-color 0.4s;
          border-bottom: 1px solid #2A2A2A;
        }
        .hdr-root.scrolled {
          box-shadow: 0 4px 30px -8px rgba(140,140,140,0.25);
          border-bottom-color: #3D3D3D;
        }

        .hdr-top-line {
          height: 2px;
          background: linear-gradient(to right, transparent, #8C8C8C, transparent);
          opacity: 0.55;
        }

        .hdr-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 20px;
          display: flex; align-items: center; justify-content: space-between;
          height: 70px; gap: 16px;
        }

        /* ── Logo ── */
        .hdr-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0;
        }
        .hdr-logo-shield {
          width: 46px; height: 46px; border: 2px solid #8C8C8C; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          background: #1A1A1A; transition: background 0.3s; flex-shrink: 0;
        }
        .hdr-logo:hover .hdr-logo-shield { background: #2A2A2A; }
        .hdr-logo-text { display: flex; flex-direction: column; line-height: 1; }
        .hdr-logo-name {
          font-size: 22px; font-weight: 700; letter-spacing: 0.06em;
          color: #FFFFFF; text-transform: uppercase;
        }
        .hdr-logo-name span { color: #8C8C8C; }
        .hdr-logo-tagline {
          font-size: 9px; letter-spacing: 0.22em;
          color: #B8B8B8; text-transform: uppercase; margin-top: 3px;
        }

        /* ── Desktop nav ── */
        .hdr-nav { display: none; align-items: center; gap: 6px; }
        @media (min-width: 1024px) { .hdr-nav { display: flex; } }

        .hdr-nav-link {
          position: relative; display: flex; align-items: center; gap: 4px;
          padding: 6px 10px; font-size: 13.5px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: #ffffff; text-decoration: none;
          background: none; border: none; cursor: pointer;
          transition: color 0.25s; white-space: nowrap; font-family: inherit;
        }
        .hdr-nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 10px; right: 10px;
          height: 2px; background: #B8B8B8;
          transform: scaleX(0); transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .hdr-nav-link:hover,
        .hdr-nav-link[data-open="true"] { color: #FFFFFF; }
        .hdr-nav-link:hover::after,
        .hdr-nav-link[data-open="true"]::after { transform: scaleX(1); }
        .hdr-nav-link .chevron { transition: transform 0.3s; }
        .hdr-nav-link[data-open="true"] .chevron { transform: rotate(180deg); }

        /* ── Dropdown ── */
        .hdr-dropdown-wrap { position: relative; }
        .hdr-dropdown {
          position: absolute; left: 50%; top: calc(100% + 10px);
          width: 340px;
          background: #1A1A1A; border: 1px solid #3D3D3D;
          border-radius: 12px;
          box-shadow: 0 20px 60px -10px rgba(0,0,0,0.7), 0 0 0 1px rgba(140,140,140,0.05);
          z-index: 100;
        }
        .hdr-dropdown::before {
          content: ''; position: absolute; top: -6px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 12px; height: 12px; background: #1A1A1A;
          border-left: 1px solid #3D3D3D;
          border-top: 1px solid #3D3D3D;
        }
        .hdr-dropdown-inner { position: relative; padding: 8px 0; }
        .hdr-dropdown-highlight {
          position: absolute; left: 8px; right: 8px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(140,140,140,0.16), rgba(140,140,140,0.05));
          border: 1px solid rgba(140,140,140,0.28);
          pointer-events: none; z-index: 0;
        }
        .hdr-dropdown-list { list-style: none; margin: 0; padding: 0; position: relative; z-index: 1; }
        .hdr-dropdown-item a {
          position: relative;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 11px 18px; text-decoration: none;
        }
        .hdr-dropdown-item a:hover .di-name { color: #FFFFFF; }
        .hdr-dropdown-divider { margin: 0 18px; height: 1px; background: #2A2A2A; position: relative; z-index: 1; }
        .di-text {
          display: flex; flex-direction: column; gap: 2px;
          transition: transform 0.25s ease;
        }
        .hdr-dropdown-item a:hover .di-text { transform: translateX(3px); }
        .di-name {
          font-family: 'Bai Jamjuree', sans-serif; font-size: 13.5px; font-weight: 600;
          color: #FFFFFF; transition: color 0.2s; letter-spacing: 0.02em;
        }
        .di-desc { font-size: 11.5px; color: #B8B8B8; font-family: Georgia, serif; line-height: 1.4; }
        .di-arrow {
          flex-shrink: 0; color: #8C8C8C;
          opacity: 0; transform: translateX(-6px);
          transition: opacity 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .hdr-dropdown-item a:hover .di-arrow { opacity: 1; transform: translateX(0); color: #FFFFFF; }

        /* ── Right area ── */
        .hdr-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

        .hdr-phone { display: none; align-items: center; gap: 10px; }
        @media (min-width: 1024px) { .hdr-phone { display: flex; } }
        .hdr-phone-icon {
          width: 40px; height: 40px; border-radius: 50%; background: #8C8C8C;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          animation: ring-pulse 2.5s infinite;
        }
        @keyframes ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(140,140,140,0.5); }
          50%       { box-shadow: 0 0 0 8px rgba(140,140,140,0); }
        }
        .hdr-phone-text { line-height: 1.2; }
        .hdr-phone-label { font-size: 10px; color: #B8B8B8; letter-spacing: 0.08em; text-transform: uppercase; }
        .hdr-phone-num { font-size: 15px; font-weight: 700; color: #FFFFFF; letter-spacing: 0.03em; }

        .hdr-cta-strip { display: flex; align-items: center; }
        @media (min-width: 1024px) { .hdr-cta-strip { display: none; } }
        .hdr-book-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; background: #8C8C8C; border: none;
          cursor: pointer; border-radius: 6px; color: #0B0B0B; transition: background 0.2s;
        }
        .hdr-book-btn:hover { background: #FFFFFF; }

        .hdr-hamburger {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; background: none;
          border: 1px solid #3D3D3D; border-radius: 6px;
          color: #8C8C8C; cursor: pointer;
          transition: background 0.2s, border-color 0.2s; flex-shrink: 0;
          position: relative; z-index: 210;
        }
        .hdr-hamburger:hover { background: #1A1A1A; border-color: #8C8C8C; }
        @media (min-width: 1024px) { .hdr-hamburger { display: none; } }

        /* ── Mobile drawer (right-side slide-in) ── */
        .hdr-mob-overlay {
          position: fixed; inset: 0; z-index: 190;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(2px);
        }

        .hdr-mob-drawer {
          position: fixed; top: 0; right: 0; bottom: 0; z-index: 200;
          width: 85vw; max-width: 340px;
          background: #0B0B0B;
          border-left: 1px solid #3D3D3D;
          box-shadow: -20px 0 60px -15px rgba(0,0,0,0.8);
          display: flex; flex-direction: column;
          overflow-y: auto;
        }

        .hdr-mob-drawer-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 20px;
          border-bottom: 1px solid #2A2A2A;
          flex-shrink: 0;
        }
        .hdr-mob-drawer-title {
          font-size: 12px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: #8C8C8C;
        }
        .hdr-mob-close {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; border-radius: 6px;
          border: 1px solid #3D3D3D; background: none; color: #B8B8B8;
          cursor: pointer; transition: color 0.2s, border-color 0.2s;
        }
        .hdr-mob-close:hover { color: #FFFFFF; border-color: #8C8C8C; }

        .hdr-mobile-nav { display: flex; flex-direction: column; padding: 8px 20px 16px; }

        .hdr-mob-link {
          display: block; padding: 13px 0; font-size: 14px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: #B8B8B8; text-decoration: none;
          border-bottom: 1px solid #2A2A2A; transition: color 0.2s;
        }
        .hdr-mob-link:hover { color: #FFFFFF; }

        .hdr-mob-accordion { border-bottom: 1px solid #2A2A2A; }
        .hdr-mob-acc-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 13px 0; font-size: 14px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: #B8B8B8; background: none; border: none;
          cursor: pointer; font-family: inherit; transition: color 0.2s;
        }
        .hdr-mob-acc-btn:hover { color: #FFFFFF; }
        .hdr-mob-acc-btn .chevron { transition: transform 0.3s; }
        .hdr-mob-acc-btn.open .chevron { transform: rotate(180deg); }
        .hdr-mob-acc-btn.open { color: #FFFFFF; }

        .hdr-mob-sub { overflow: hidden; }
        .hdr-mob-svc-inner { position: relative; padding: 4px 0 8px; }
        .hdr-mob-svc-highlight {
          position: absolute; left: 4px; right: 4px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(140,140,140,0.16), rgba(140,140,140,0.05));
          border: 1px solid rgba(140,140,140,0.28);
          pointer-events: none; z-index: 0;
        }
        .hdr-mob-svc-list { position: relative; z-index: 1; }

        .hdr-mob-cta {
          margin-top: 14px; display: flex; align-items: center; gap: 10px;
          background: #1A1A1A; border: 1px solid #3D3D3D;
          border-radius: 8px; padding: 10px 14px; text-decoration: none;
        }
        .hdr-mob-cta-icon {
          width: 34px; height: 34px; background: #8C8C8C; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .hdr-mob-cta-text label { display: block; font-size: 10px; color: #B8B8B8; letter-spacing: 0.1em; text-transform: uppercase; }
        .hdr-mob-cta-text span { font-size: 15px; font-weight: 700; color: #FFFFFF; letter-spacing: 0.03em; }

        @media (max-width: 400px) {
          .hdr-logo-name { font-size: 18px; }
          .hdr-logo-shield { width: 38px; height: 38px; }
        }
      `}</style>

      <motion.header
        className={`hdr-root${scrolled ? " scrolled" : ""}`}
        variants={headerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="hdr-top-line" />

        <div className="hdr-inner">
          {/* Logo */}
          <Link to
            ="/"
            className="hdr-logo"
            aria-label="AutoLuxe home"
            onClick={(e) => handleNav(e, "#home")}
          >
            <img src="/logo.png" alt="AutoLuxe logo" className="h-20 w-35" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hdr-nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key="Services"
                    className="hdr-dropdown-wrap"
                    {...svcHover}
                  >
                    <button
                      className="hdr-nav-link"
                      data-open={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      Services
                      <ChevronDown
                        className="chevron"
                        size={14}
                        strokeWidth={2.5}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="hdr-dropdown"
                          style={{ x: "-50%" }}
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          role="menu"
                        >
                          <div
                            className="hdr-dropdown-inner"
                            ref={svcListRef}
                            onPointerLeave={hideSvcHighlight}
                          >
                            <motion.div
                              className="hdr-dropdown-highlight"
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
                            <ul className="hdr-dropdown-list">
                              {SERVICES.map((svc, i) => (
                                <motion.li
                                  className="hdr-dropdown-item"
                                  key={svc.name}
                                  variants={dropdownItemVariants}
                                >
                                  <Link
                                    to={svc.href}
                                    role="menuitem"
                                    ref={(el) => (svcItemRefs.current[i] = el)}
                                    onPointerEnter={() => updateSvcHighlight(i)}
                                    onClick={(e) => handleNav(e, svc.href)}
                                  >
                                    <span className="di-text">
                                      <span className="di-name">{svc.name}</span>
                                      <span className="di-desc">{svc.desc}</span>
                                    </span>
                                    <ChevronRight
                                      className="di-arrow"
                                      size={16}
                                      strokeWidth={2}
                                    />
                                  </Link>
                                  {i < SERVICES.length - 1 && (
                                    <div className="hdr-dropdown-divider" />
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
                  className="hdr-nav-link"
                  onClick={() => {
                    setMobileOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Phone + mobile buttons */}
          <div className="hdr-right">
            <div className="hdr-phone">
              <a
                href="tel:080-77976595"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  textDecoration: "none",
                }}
              >
                <div className="hdr-phone-icon">
                  <Phone size={18} strokeWidth={2.5} color="#0B0B0B" />
                </div>
                <div className="hdr-phone-text">
                  <div className="hdr-phone-num">080-77976595</div>
                </div>
              </a>
            </div>

            <div className="hdr-cta-strip">
              <a
                href="tel:080-77976595"
                className="hdr-book-btn"
                aria-label="Call us"
              >
                <Phone size={18} strokeWidth={2.5} />
              </a>
            </div>

            <button
              className="hdr-hamburger"
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
                className="hdr-mob-overlay"
                variants={overlayVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                className="hdr-mob-drawer"
                variants={drawerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                role="dialog"
                aria-modal="true"
              >
                <div className="hdr-mob-drawer-head">
                  <span className="hdr-mob-drawer-title">Menu</span>
                  {/* <button
                    className="hdr-mob-close"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button> */}
                </div>

                <motion.nav
                  className="hdr-mobile-nav"
                  variants={drawerNavVariants}
                  initial="hidden"
                  animate="show"
                >
                  {NAV_LINKS.map((link) => {
                    if (link.label === "Services") {
                      return (
                        <motion.div
                          className="hdr-mob-accordion"
                          key="Services"
                          variants={drawerItemVariants}
                        >
                          <button
                            className={`hdr-mob-acc-btn${mobileSvcOpen ? " open" : ""}`}
                            onClick={() => setMobileSvcOpen((v) => !v)}
                            aria-expanded={mobileSvcOpen}
                          >
                            Services
                            <ChevronDown
                              className="chevron"
                              size={16}
                              strokeWidth={2.5}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {mobileSvcOpen && (
                              <motion.div
                                className="hdr-mob-sub"
                                variants={mobSubVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                              >
                                <div
                                  className="hdr-mob-svc-inner"
                                  ref={mobSvcListRef}
                                  onPointerLeave={hideMobSvcHighlight}
                                >
                                  <motion.div
                                    className="hdr-mob-svc-highlight"
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
                                  <ul className="hdr-dropdown-list hdr-mob-svc-list">
                                    {SERVICES.map((svc, i) => (
                                      <li className="hdr-dropdown-item" key={svc.name}>
                                        <Link
                                          to={svc.href}
                                          ref={(el) => (mobSvcItemRefs.current[i] = el)}
                                          onPointerEnter={() => updateMobSvcHighlight(i)}
                                          onPointerDown={() => updateMobSvcHighlight(i)}
                                          onClick={(e) => handleNav(e, svc.href)}
                                        >
                                          <span className="di-text">
                                            <span className="di-name">{svc.name}</span>
                                            <span className="di-desc">{svc.desc}</span>
                                          </span>
                                          <ChevronRight
                                            className="di-arrow"
                                            size={16}
                                            strokeWidth={2}
                                          />
                                        </Link>
                                        {i < SERVICES.length - 1 && (
                                          <div className="hdr-dropdown-divider" />
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
                      <motion.div key={link.label} variants={drawerItemVariants}>
                        <Link
                          to={link.href}
                          className="hdr-mob-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.a
                    href="tel:080-77976595"
                    className="hdr-mob-cta"
                    variants={drawerItemVariants}
                  >
                    <div className="hdr-mob-cta-icon">
                      <Phone size={16} strokeWidth={2.5} color="#0B0B0B" />
                    </div>
                    <div className="hdr-mob-cta-text">
                      <label>Need Help</label>
                      <span>080-77976595</span>
                    </div>
                  </motion.a>
                </motion.nav>
              </motion.div>
            </React.Fragment>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 32 36" fill="none" width="26" height="26">
      <path
        d="M16 2L3 7v10c0 8.3 5.6 15.7 13 18 7.4-2.3 13-9.7 13-18V7L16 2z"
        fill="#1A1A1A"
        stroke="#8C8C8C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 18l4 4 8-8"
        stroke="#8C8C8C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}