import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

/**
 * Header — Auto Detailing / Customization Brand
 *
 * Fonts: 'Bai Jamjuree' (load in index.html)
 * Colors:
 *   Black   #0A0A0A  (header bg)
 *   Gold    #D4AF37  (accent, hover, CTA)
 *   White   #F5F5F0  (nav text)
 *
 * Usage (wrap both in a fragment or layout):
 *   <TopBar />
 *   <Header />
 */

const SERVICES = [
  { name: "PPF / Ceramic Coating",       desc: "Paint protection that keeps the shine permanent." },
  { name: "Refurbish Vehicle / Restore",  desc: "Bring tired metal back to factory-fresh form." },
  { name: "Upholstery / Paints",          desc: "Interior trim and full-body paint, done by hand." },
  { name: "Car Body Kits / Exhaust",      desc: "Aggressive lines and a sound to match." },
  { name: "Tuning & Mapping / Accessories", desc: "Tuned performance, fitted exactly to you." },
];

const NAV_LINKS = ["Home", "About Us", "Services", "Blog", "Franchise", "Contact"];

export default function Header() {
  const [servicesOpen, setServicesOpen]       = useState(false);
  const [ourWorkOpen, setOurWorkOpen]         = useState(false);
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen]     = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen]   = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const svcTimer  = useRef(null);
  const workTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const makeHover = (setter, timer) => ({
    onMouseEnter: () => { clearTimeout(timer.current); setter(true); },
    onMouseLeave: () => { timer.current = setTimeout(() => setter(false), 150); },
  });

  const svcHover  = makeHover(setServicesOpen, svcTimer);
  const workHover = makeHover(setOurWorkOpen,  workTimer);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap');

        /* ─── Reset helpers ─── */
        .hdr-root *, .hdr-root *::before, .hdr-root *::after { box-sizing: border-box; }

        /* ─── Root ─── */
        .hdr-root {
          font-family: 'Bai Jamjuree', sans-serif;
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          background: #0A0A0A;
          transition: box-shadow 0.4s, border-color 0.4s;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .hdr-root.scrolled {
          box-shadow: 0 4px 30px -8px rgba(212,175,55,0.3);
          border-bottom-color: rgba(212,175,55,0.2);
        }

        /* ─── Gold top hairline ─── */
        .hdr-top-line {
          height: 2px;
          background: linear-gradient(to right, transparent, #D4AF37, transparent);
          opacity: 0.55;
        }

        /* ─── Inner layout ─── */
        .hdr-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          gap: 16px;
        }

        /* ─── Logo ─── */
        .hdr-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .hdr-logo-shield {
          width: 46px;
          height: 46px;
          border: 2px solid #D4AF37;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(212,175,55,0.07);
          transition: background 0.3s;
          flex-shrink: 0;
        }
        .hdr-logo:hover .hdr-logo-shield { background: rgba(212,175,55,0.15); }
        .hdr-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .hdr-logo-name {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #F5F5F0;
          text-transform: uppercase;
        }
        .hdr-logo-name span { color: #D4AF37; }
        .hdr-logo-tagline {
          font-size: 9px;
          letter-spacing: 0.22em;
          color: rgba(212,175,55,0.7);
          text-transform: uppercase;
          margin-top: 3px;
        }

        /* ─── Desktop nav ─── */
        .hdr-nav {
          display: none;
          align-items: center;
          gap: 6px;
        }
        @media (min-width: 1024px) {
          .hdr-nav { display: flex; }
        }

        .hdr-nav-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(245,245,240,0.82);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.25s;
          white-space: nowrap;
          font-family: inherit;
        }
        .hdr-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10px;
          right: 10px;
          height: 2px;
          background: #D4AF37;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .hdr-nav-link:hover,
        .hdr-nav-link.active,
        .hdr-nav-link[data-open="true"] {
          color: #D4AF37;
        }
        .hdr-nav-link:hover::after,
        .hdr-nav-link.active::after,
        .hdr-nav-link[data-open="true"]::after {
          transform: scaleX(1);
        }
        .hdr-nav-link .chevron {
          transition: transform 0.3s;
        }
        .hdr-nav-link[data-open="true"] .chevron {
          transform: rotate(180deg);
        }

        /* ─── Dropdown ─── */
        .hdr-dropdown-wrap {
          position: relative;
        }
        .hdr-dropdown {
          position: absolute;
          left: 50%;
          top: calc(100% + 10px);
          transform: translateX(-50%) translateY(-6px) scaleY(0.95);
          transform-origin: top center;
          width: 340px;
          background: #0E0E0E;
          border: 1px solid rgba(212,175,55,0.2);
          border-radius: 12px;
          box-shadow: 0 20px 60px -10px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,175,55,0.05);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.25s, transform 0.25s, visibility 0.25s;
          z-index: 100;
        }
        .hdr-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0) scaleY(1);
        }
        /* Arrow tip */
        .hdr-dropdown::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background: #0E0E0E;
          border-left: 1px solid rgba(212,175,55,0.2);
          border-top: 1px solid rgba(212,175,55,0.2);
        }
        .hdr-dropdown-list {
          list-style: none;
          margin: 0;
          padding: 8px 0;
        }
        .hdr-dropdown-item a {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 11px 18px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .hdr-dropdown-item a:hover { background: rgba(212,175,55,0.07); }
        .hdr-dropdown-item a:hover .di-name { color: #D4AF37; }
        .hdr-dropdown-divider {
          margin: 0 18px;
          height: 1px;
          background: rgba(255,255,255,0.05);
        }
        .di-name {
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #F5F5F0;
          transition: color 0.2s;
          letter-spacing: 0.02em;
        }
        .di-desc {
          font-size: 11.5px;
          color: rgba(245,245,240,0.45);
          font-family: Georgia, serif;
          line-height: 1.4;
        }

        /* ─── Right CTA area ─── */
        .hdr-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        /* Phone block (desktop) */
        .hdr-phone {
          display: none;
          align-items: center;
          gap: 10px;
        }
        @media (min-width: 1024px) {
          .hdr-phone { display: flex; }
        }
        .hdr-phone-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #D4AF37;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          animation: ring-pulse 2.5s infinite;
        }
        @keyframes ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.5); }
          50%       { box-shadow: 0 0 0 8px rgba(212,175,55,0); }
        }
        .hdr-phone-text { line-height: 1.2; }
        .hdr-phone-label {
          font-size: 10px;
          color: rgba(245,245,240,0.5);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .hdr-phone-num {
          font-size: 15px;
          font-weight: 700;
          color: #F5F5F0;
          letter-spacing: 0.03em;
        }

        /* Book Now CTA strip (mobile/desktop) */
        .hdr-cta-strip {
          display: flex;
          align-items: center;
          gap: 0;
        }
        @media (min-width: 1024px) {
          .hdr-cta-strip { display: none; }
        }
        .hdr-book-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: #D4AF37;
          border: none;
          cursor: pointer;
          border-radius: 6px;
          color: #0A0A0A;
          transition: background 0.2s;
        }
        .hdr-book-btn:hover { background: #c9a030; }

        /* Mobile hamburger */
        .hdr-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: none;
          border: 1px solid rgba(212,175,55,0.35);
          border-radius: 6px;
          color: #D4AF37;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .hdr-hamburger:hover {
          background: rgba(212,175,55,0.1);
          border-color: #D4AF37;
        }
        @media (min-width: 1024px) {
          .hdr-hamburger { display: none; }
        }

        /* ─── Mobile menu ─── */
        .hdr-mobile {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
          border-top: 1px solid rgba(212,175,55,0.12);
          background: #0A0A0A;
        }
        .hdr-mobile.open {
          max-height: 75vh;
          opacity: 1;
          overflow-y: auto;
        }
        .hdr-mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 8px 20px 16px;
        }
        .hdr-mob-link {
          display: block;
          padding: 13px 0;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(245,245,240,0.85);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s;
        }
        .hdr-mob-link:hover { color: #D4AF37; }

        .hdr-mob-accordion {
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .hdr-mob-acc-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 0;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(245,245,240,0.85);
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.2s;
        }
        .hdr-mob-acc-btn:hover { color: #D4AF37; }
        .hdr-mob-acc-btn .chevron { transition: transform 0.3s; }
        .hdr-mob-acc-btn.open .chevron { transform: rotate(180deg); }
        .hdr-mob-acc-btn.open { color: #D4AF37; }

        .hdr-mob-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
        }
        .hdr-mob-sub.open { max-height: 500px; }
        .hdr-mob-sub ul {
          list-style: none;
          padding: 4px 0 10px 12px;
          margin: 0;
        }
        .hdr-mob-sub ul li a {
          display: block;
          padding: 9px 10px;
          font-size: 13px;
          color: rgba(245,245,240,0.65);
          text-decoration: none;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          font-family: Georgia, serif;
        }
        .hdr-mob-sub ul li a:hover {
          color: #D4AF37;
          background: rgba(212,175,55,0.07);
        }

        .hdr-mob-cta {
          margin-top: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(212,175,55,0.07);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 8px;
          padding: 10px 14px;
          text-decoration: none;
        }
        .hdr-mob-cta-icon {
          width: 34px;
          height: 34px;
          background: #D4AF37;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hdr-mob-cta-text label {
          display: block;
          font-size: 10px;
          color: rgba(245,245,240,0.5);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hdr-mob-cta-text span {
          font-size: 15px;
          font-weight: 700;
          color: #F5F5F0;
          letter-spacing: 0.03em;
        }

        @media (max-width: 400px) {
          .hdr-logo-name { font-size: 18px; }
          .hdr-logo-shield { width: 38px; height: 38px; }
        }
      `}</style>

      <header className={`hdr-root${scrolled ? " scrolled" : ""}`}>
        <div className="hdr-top-line" />

        <div className="hdr-inner">
          {/* ── Logo ── */}
          <a href="#home" className="hdr-logo" aria-label="AutoLuxe home">
            <div className="hdr-logo-shield">
              <ShieldIcon />
            </div>
            <div className="hdr-logo-text">
              <div className="hdr-logo-name">
                AUTO<span>LUXE</span>
              </div>
              <div className="hdr-logo-tagline">Beyond The Luxury</div>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hdr-nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              if (link === "Services") {
                return (
                  <div key={link} className="hdr-dropdown-wrap" {...svcHover}>
                    <button
                      className="hdr-nav-link"
                      data-open={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link}
                      <ChevronDown className="chevron" size={14} strokeWidth={2.5} />
                    </button>
                    <div className={`hdr-dropdown${servicesOpen ? " open" : ""}`} role="menu">
                      <ul className="hdr-dropdown-list">
                        {SERVICES.map((svc, i) => (
                          <li className="hdr-dropdown-item" key={svc.name}>
                            <a href={`#${svc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} role="menuitem">
                              <span className="di-name">{svc.name}</span>
                              <span className="di-desc">{svc.desc}</span>
                            </a>
                            {i < SERVICES.length - 1 && <div className="hdr-dropdown-divider" />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              if (link === "Our Work") {
                return (
                  <div key={link} className="hdr-dropdown-wrap" {...workHover}>
                    <button
                      className="hdr-nav-link"
                      data-open={ourWorkOpen}
                      onClick={() => setOurWorkOpen((v) => !v)}
                      aria-expanded={ourWorkOpen}
                      aria-haspopup="true"
                    >
                      {link}
                      <ChevronDown className="chevron" size={14} strokeWidth={2.5} />
                    </button>
                    <div className={`hdr-dropdown${ourWorkOpen ? " open" : ""}`} role="menu">
                      <ul className="hdr-dropdown-list">
                        {["Gallery", "Before & After", "Case Studies", "Client Reviews"].map((item, i, arr) => (
                          <li className="hdr-dropdown-item" key={item}>
                            <a href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} role="menuitem">
                              <span className="di-name">{item}</span>
                            </a>
                            {i < arr.length - 1 && <div className="hdr-dropdown-divider" />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hdr-nav-link"
                >
                  {link}
                </a>
              );
            })}
          </nav>

          {/* ── Right: Phone + mobile buttons ── */}
          <div className="hdr-right">
            {/* Desktop phone block */}
            <div className="hdr-phone">
              <a href="tel:+917271939393" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <div className="hdr-phone-icon">
                  <Phone size={18} strokeWidth={2.5} color="#0A0A0A" />
                </div>
                <div className="hdr-phone-text">
                  <div className="hdr-phone-label">Need Help</div>
                  <div className="hdr-phone-num">+91-72-71-939393</div>
                </div>
              </a>
            </div>

            {/* Mobile: Book now icon + hamburger */}
            <div className="hdr-cta-strip">
              <a href="tel:+917271939393" className="hdr-book-btn" aria-label="Call us">
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

        {/* ── Mobile Menu ── */}
        <div className={`hdr-mobile${mobileOpen ? " open" : ""}`}>
          <nav className="hdr-mobile-nav">
            {NAV_LINKS.map((link) => {
              if (link === "Services") {
                return (
                  <div className="hdr-mob-accordion" key={link}>
                    <button
                      className={`hdr-mob-acc-btn${mobileSvcOpen ? " open" : ""}`}
                      onClick={() => setMobileSvcOpen((v) => !v)}
                      aria-expanded={mobileSvcOpen}
                    >
                      Services
                      <ChevronDown className="chevron" size={16} strokeWidth={2.5} color="#D4AF37" />
                    </button>
                    <div className={`hdr-mob-sub${mobileSvcOpen ? " open" : ""}`}>
                      <ul>
                        {SERVICES.map((svc) => (
                          <li key={svc.name}>
                            <a href={`#${svc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                              {svc.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              if (link === "Our Work") {
                return (
                  <div className="hdr-mob-accordion" key={link}>
                    <button
                      className={`hdr-mob-acc-btn${mobileWorkOpen ? " open" : ""}`}
                      onClick={() => setMobileWorkOpen((v) => !v)}
                      aria-expanded={mobileWorkOpen}
                    >
                      Our Work
                      <ChevronDown className="chevron" size={16} strokeWidth={2.5} color="#D4AF37" />
                    </button>
                    <div className={`hdr-mob-sub${mobileWorkOpen ? " open" : ""}`}>
                      <ul>
                        {["Gallery", "Before & After", "Case Studies", "Client Reviews"].map((item) => (
                          <li key={item}>
                            <a href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hdr-mob-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              );
            })}

            {/* Phone CTA */}
            <a href="tel:+917271939393" className="hdr-mob-cta">
              <div className="hdr-mob-cta-icon">
                <Phone size={16} strokeWidth={2.5} color="#0A0A0A" />
              </div>
              <div className="hdr-mob-cta-text">
                <label>Need Help</label>
                <span>+91-72-71-939393</span>
              </div>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

/* Shield logo SVG */
function ShieldIcon() {
  return (
    <svg viewBox="0 0 32 36" fill="none" width="26" height="26">
      <path
        d="M16 2L3 7v10c0 8.3 5.6 15.7 13 18 7.4-2.3 13-9.7 13-18V7L16 2z"
        fill="rgba(212,175,55,0.15)"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 18l4 4 8-8"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
