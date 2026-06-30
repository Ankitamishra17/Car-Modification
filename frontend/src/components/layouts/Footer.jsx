import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

/**
 * Footer — AutoLuxe
 *
 * Design system matches Header.jsx exactly:
 *   bg #0A0A0A | gold #D4AF37 | text #F5F5F0 | font 'Bai Jamjuree'
 *
 * Structure:
 *   1. Gold top hairline (mirrors Header's top-line)
 *   2. Main grid — Logo+tagline | Services | Quick Links | Contact
 *   3. Social bar — SVG icons (Instagram, YouTube, Facebook, WhatsApp, X/Twitter)
 *   4. Bottom strip — copyright + legal links
 *
 * Social icons: all inline SVGs, no external icon lib dependency.
 */

const SERVICES = [
  "PPF / Ceramic Coating",
  "Refurbish Vehicle / Restore",
  "Upholstery / Paints",
  "Car Body Kits / Exhaust",
  "Tuning & Mapping / Accessories",
];

const QUICK_LINKS = [
  { label: "Home",      href: "#home" },
  { label: "About Us",  href: "#about" },
  { label: "Blog",      href: "#blog" },
  { label: "Franchise", href: "#franchise" },
  { label: "Contact",   href: "#contact" },
];

const CONTACT_INFO = [
  { icon: Phone,  value: "+91-72-71-939393", href: "tel:+917271939393" },
  { icon: Mail,   value: "hello@autoluxe.in", href: "mailto:hello@autoluxe.in" },
  { icon: MapPin, value: "12 cities across India", href: "#locations" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.75"/>
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.75"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75"/>
        <path
          d="M13.5 8H15V5.5h-1.5C12 5.5 10.5 7 10.5 8.5V10H9v2.5h1.5V19H13v-6.5h1.5L15 10h-2V8.5c0-.3.2-.5.5-.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75"/>
        <path
          d="M16.5 14.5c-.3-.15-1.7-.85-1.97-.95-.27-.1-.46-.15-.65.15-.2.3-.75.95-.92 1.15-.17.2-.33.22-.62.07a7.8 7.8 0 01-2.3-1.42 8.6 8.6 0 01-1.6-1.98c-.17-.3-.02-.46.13-.6.13-.13.3-.33.44-.5.14-.17.19-.3.29-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49H7.5c-.2 0-.5.07-.76.37S6 8.95 6 9.9c0 .93.68 1.84.78 1.97.1.13 1.33 2.03 3.22 2.85 1.9.82 1.9.55 2.24.52.34-.03 1.1-.45 1.25-.88.16-.43.16-.8.11-.88-.05-.07-.18-.12-.38-.22z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
        <path
          d="M4 4l6.5 7.5L4 20h2l5-5.7L15.5 20H20l-6.8-7.8L19.5 4h-2l-4.7 5.4L8.5 4H4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap');

        .ftr-root *, .ftr-root *::before, .ftr-root *::after { box-sizing: border-box; }

        .ftr-root {
          font-family: 'Bai Jamjuree', sans-serif;
          background: #0A0A0A;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        /* ── Gold top hairline — mirrors Header ── */
        .ftr-top-line {
          height: 2px;
          background: linear-gradient(to right, transparent, #D4AF37, transparent);
          opacity: 0.55;
        }

        /* ── Ambient glow ── */
        .ftr-glow {
          pointer-events: none;
          position: absolute;
          border-radius: 50%;
          background: rgba(212,175,55,0.09);
          filter: blur(100px);
        }
        .ftr-glow-left  { width: 360px; height: 360px; top: 0; left: -80px; }
        .ftr-glow-right { width: 280px; height: 280px; bottom: 40px; right: -60px; }

        .ftr-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 56px 20px 0;
        }

        /* ── Main grid ── */
        .ftr-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 640px) {
          .ftr-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .ftr-grid { grid-template-columns: 2fr 1fr 1fr 1.4fr; gap: 48px; }
        }

        /* ── Brand column ── */
        .ftr-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 20px;
        }
        .ftr-logo-shield {
          width: 46px; height: 46px;
          border: 2px solid #D4AF37;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(212,175,55,0.07);
          flex-shrink: 0;
        }
        .ftr-logo-name {
          font-size: 22px; font-weight: 700;
          letter-spacing: 0.06em;
          color: #F5F5F0; text-transform: uppercase; line-height: 1;
        }
        .ftr-logo-name span { color: #D4AF37; }
        .ftr-logo-tagline {
          font-size: 9px; letter-spacing: 0.22em;
          color: rgba(212,175,55,0.7);
          text-transform: uppercase; margin-top: 3px;
        }

        .ftr-brand-desc {
          font-family: Georgia, serif;
          font-size: 13.5px; line-height: 1.7;
          color: rgba(245,245,240,0.55);
          max-width: 300px; margin-bottom: 24px;
        }

        /* Newsletter strip */
        .ftr-newsletter {
          display: flex;
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 8px;
          overflow: hidden;
          max-width: 300px;
        }
        .ftr-newsletter input {
          flex: 1;
          background: rgba(255,255,255,0.04);
          border: none; outline: none;
          padding: 10px 14px;
          font-size: 13px;
          color: #F5F5F0;
          font-family: 'Bai Jamjuree', sans-serif;
        }
        .ftr-newsletter input::placeholder { color: rgba(245,245,240,0.35); }
        .ftr-newsletter button {
          background: #D4AF37;
          border: none; cursor: pointer;
          padding: 0 14px;
          display: flex; align-items: center; justify-content: center;
          color: #0A0A0A;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .ftr-newsletter button:hover { background: #c9a030; }

        /* ── Column heading ── */
        .ftr-col-head {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 18px;
        }
        .ftr-col-head-line {
          height: 1px; width: 20px; background: #D4AF37; flex-shrink: 0;
        }
        .ftr-col-head-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: #D4AF37;
        }

        /* ── Link lists ── */
        .ftr-link-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 2px;
        }
        .ftr-link-list li a {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13.5px; color: rgba(245,245,240,0.6);
          text-decoration: none;
          padding: 5px 0;
          transition: color 0.2s;
          font-family: Georgia, serif;
        }
        .ftr-link-list li a .fl-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: #D4AF37; opacity: 0;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }
        .ftr-link-list li a:hover { color: #D4AF37; }
        .ftr-link-list li a:hover .fl-dot { opacity: 1; }

        /* ── Contact column ── */
        .ftr-contact-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 14px;
        }
        .ftr-contact-item a {
          display: flex; align-items: flex-start; gap: 12px;
          text-decoration: none;
          transition: color 0.2s;
          color: inherit;
        }
        .ftr-contact-icon {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.3);
          background: rgba(212,175,55,0.07);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s;
          color: #D4AF37;
        }
        .ftr-contact-item a:hover .ftr-contact-icon {
          border-color: #D4AF37;
          background: rgba(212,175,55,0.15);
        }
        .ftr-contact-value {
          font-size: 13.5px;
          color: rgba(245,245,240,0.65);
          font-family: Georgia, serif;
          line-height: 1.5;
          padding-top: 6px;
          transition: color 0.2s;
        }
        .ftr-contact-item a:hover .ftr-contact-value { color: #D4AF37; }

        /* ── Divider ── */
        .ftr-divider {
          margin: 48px 0 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent);
        }

        /* ── Social + copyright strip ── */
        .ftr-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding: 24px 20px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 768px) {
          .ftr-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        /* Social icons */
        .ftr-socials {
          display: flex; gap: 10px;
        }
        .ftr-social-btn {
          width: 38px; height: 38px;
          border-radius: 8px;
          border: 1px solid rgba(212,175,55,0.25);
          background: rgba(212,175,55,0.05);
          display: flex; align-items: center; justify-content: center;
          color: rgba(245,245,240,0.55);
          text-decoration: none;
          transition: color 0.25s, border-color 0.25s, background 0.25s, transform 0.25s;
        }
        .ftr-social-btn:hover {
          color: #D4AF37;
          border-color: #D4AF37;
          background: rgba(212,175,55,0.12);
          transform: translateY(-2px);
        }

        /* Copyright */
        .ftr-copy {
          font-size: 12px;
          color: rgba(245,245,240,0.35);
          letter-spacing: 0.04em;
        }
        .ftr-copy a {
          color: rgba(212,175,55,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ftr-copy a:hover { color: #D4AF37; }

        /* Legal links */
        .ftr-legal {
          display: flex; gap: 20px;
        }
        .ftr-legal a {
          font-size: 11.5px;
          color: rgba(245,245,240,0.35);
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .ftr-legal a:hover { color: #D4AF37; }

        @media (max-width: 400px) {
          .ftr-logo-name { font-size: 18px; }
          .ftr-logo-shield { width: 38px; height: 38px; }
        }
      `}</style>

      <footer className="ftr-root">
        <div className="ftr-top-line" />

        {/* Ambient glows */}
        <div className="ftr-glow ftr-glow-left" />
        <div className="ftr-glow ftr-glow-right" />

        <div className="ftr-inner">
          <div className="ftr-grid">

            {/* ── Col 1: Brand ── */}
            <div>
              <a href="#home" className="ftr-logo" aria-label="AutoLuxe home">
                <div className="ftr-logo-shield">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="ftr-logo-name">AUTO<span>LUXE</span></div>
                  <div className="ftr-logo-tagline">Beyond The Luxury</div>
                </div>
              </a>

              <p className="ftr-brand-desc">
                India's premium auto detailing studio — PPF, ceramic coatings,
                restoration, and performance upgrades. We protect what moves you.
              </p>

              {/* Newsletter */}
              <div className="ftr-newsletter">
                <input type="email" placeholder="Your email address" />
                <button aria-label="Subscribe">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
              <div style={{ fontSize: 11, color: "rgba(245,245,240,0.3)", marginTop: 8, letterSpacing: "0.05em" }}>
                Studio news &amp; exclusive offers — no spam.
              </div>
            </div>

            {/* ── Col 2: Services ── */}
            <div>
              <div className="ftr-col-head">
                <div className="ftr-col-head-line" />
                <div className="ftr-col-head-text">Services</div>
              </div>
              <ul className="ftr-link-list">
                {SERVICES.map((svc) => (
                  <li key={svc}>
                    <a href={`#${svc.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      <span className="fl-dot" />
                      {svc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Quick Links ── */}
            <div>
              <div className="ftr-col-head">
                <div className="ftr-col-head-line" />
                <div className="ftr-col-head-text">Quick Links</div>
              </div>
              <ul className="ftr-link-list">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>
                      <span className="fl-dot" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Contact ── */}
            <div>
              <div className="ftr-col-head">
                <div className="ftr-col-head-line" />
                <div className="ftr-col-head-text">Contact Us</div>
              </div>
              <ul className="ftr-contact-list">
                {CONTACT_INFO.map(({ icon: Icon, value, href }) => (
                  <li className="ftr-contact-item" key={value}>
                    <a href={href}>
                      <div className="ftr-contact-icon">
                        <Icon size={15} strokeWidth={1.75} />
                      </div>
                      <div className="ftr-contact-value">{value}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="ftr-divider" />
        </div>

        {/* ── Bottom strip ── */}
        <div className="ftr-bottom">
          {/* Copyright */}
          <div className="ftr-copy">
            © {year} <a href="#home">AutoLuxe</a>. All rights reserved.
          </div>

          {/* Social icons */}
          <div className="ftr-socials">
            {SOCIALS.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                className="ftr-social-btn"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {svg}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="ftr-legal">
            <a href="https://deboxtechnology.com/">Developed by Debox Technology</a>
          </div>
        </div>
      </footer>
    </>
  );
}