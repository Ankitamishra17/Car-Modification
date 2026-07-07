import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  { svc: "PPF", href: "/services/paint-protection-film" },
  { svc: "Restore", href: "/services/restore" },
  { svc: "Exhaust", href: "/services/exhaust" },
  { svc: "Paints", href: "/services/paints" },
  { svc: "Refurbish", href: "/services/refurbish" },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
];

// ── Inline SVG flags (render reliably on every OS/browser, unlike emoji) ──
const IndiaFlag = (props) => (
  <svg viewBox="0 0 36 24" width="18" height="12" {...props}>
    <rect width="36" height="8" y="0" fill="#FF9933" />
    <rect width="36" height="8" y="8" fill="#FFFFFF" />
    <rect width="36" height="8" y="16" fill="#138808" />
    <circle cx="18" cy="12" r="3.2" fill="none" stroke="#000080" strokeWidth="0.5" />
    <circle cx="18" cy="12" r="0.6" fill="#000080" />
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      const x1 = 18 + 0.6 * Math.cos(angle);
      const y1 = 12 + 0.6 * Math.sin(angle);
      const x2 = 18 + 3.2 * Math.cos(angle);
      const y2 = 12 + 3.2 * Math.sin(angle);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#000080"
          strokeWidth="0.25"
        />
      );
    })}
  </svg>
);

const OmanFlag = (props) => (
  <svg viewBox="0 0 36 24" width="18" height="12" {...props}>
    <rect width="36" height="24" fill="#FFFFFF" />
    <rect width="36" height="8" y="8" fill="#FFFFFF" />
    <rect width="36" height="8" y="0" fill="#DA020E" />
    <rect width="36" height="8" y="16" fill="#008000" />
    <rect width="10" height="24" fill="#DA020E" />
  </svg>
);

const CONTACT_INFO = [
  {
    icon: Phone,
    value: "080-77976595",
    href: "tel:080-77976595",
    Flag: IndiaFlag,
    country: "India",
  },
  {
    icon: Phone,
    value: "+968 8077976595",
    href: "tel:+9688077976595",
    Flag: OmanFlag,
    country: "Oman",
  },
  {
    icon: Mail,
    value: "dettagliauto251@gmail.com",
    href: "mailto:dettagliauto251@gmail.com",
  },
  {
    icon: MapPin,
    value: "Oman",
    href: "#locations",
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dettagli.auto?igsh=bG9rdm9yODdsODY3",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle
          cx="12"
          cy="12"
          r="4.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@dettagliauto1.618",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer({ display, label, body }) {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .ftr-root *, .ftr-root *::before, .ftr-root *::after { box-sizing: border-box; }

        .ftr-root {
          background: #1A1A1A;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        /* ── Silver top hairline ── */
        .ftr-top-line {
          height: 2px;
          background: linear-gradient(to right, transparent, #8C8C8C, transparent);
          opacity: 0.35;
        }

        .ftr-inner {
          position: relative;
          max-width: 1240px;
          margin: 0 auto;
          padding: 64px 20px 0;
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
          .ftr-grid { grid-template-columns: 2.2fr 1fr 1fr 1.3fr; gap: 48px; }
        }

        /* ── Brand column ── */
        .ftr-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .ftr-brand-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #B8B8B8;
          max-width: 320px;
          margin-bottom: 24px;
        }

        /* ── Column heading ── */
        .ftr-col-head {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 22px;
        }
        .ftr-col-head-line {
          height: 1px; width: 16px; background: #8C8C8C; flex-shrink: 0;
        }
        .ftr-col-head-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: #8C8C8C;
        }

        /* ── Link lists ── */
        .ftr-link-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 4px;
        }
        .ftr-link-list li a {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 14px; font-weight: 400; color: #B8B8B8;
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .ftr-link-list li a .fl-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: #8C8C8C; opacity: 0;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }
        .ftr-link-list li a:hover { color: #FFFFFF; transform: translateX(2px); }
        .ftr-link-list li a:hover .fl-dot { opacity: 1; }

        /* ── Contact column ── */
        .ftr-contact-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 16px;
        }
        .ftr-contact-item a {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none;
          color: inherit;
        }
        .ftr-contact-icon {
          width: 34px; height: 34px; border-radius: 6px;
          border: 1px solid #3D3D3D;
          background: #1A1A1A;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s;
          color: #8C8C8C;
        }
        .ftr-contact-item a:hover .ftr-contact-icon {
          border-color: #FFFFFF;
          background: #2A2A2A;
          color: #FFFFFF;
        }
        .ftr-contact-value-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ftr-contact-flag {
          flex-shrink: 0;
          border-radius: 2px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.15);
          display: inline-block;
          line-height: 0;
        }
        .ftr-contact-value {
          font-size: 14px; font-weight: 400;
          color: #B8B8B8;
          line-height: 1.4;
          transition: color 0.2s;
        }
        .ftr-contact-item a:hover .ftr-contact-value { color: #FFFFFF; }

        /* ── Divider ── */
        .ftr-divider {
          margin: 56px 0 0;
          height: 1px;
          background: linear-gradient(to right, transparent, #3D3D3D, transparent);
        }

        /* ── Social + copyright strip ── */
        .ftr-bottom {
          max-width: 1240px;
          margin: 0 auto;
          padding: 28px 20px 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
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
          border-radius: 6px;
          border: 1px solid #3D3D3D;
          background: #1A1A1A;
          display: flex; align-items: center; justify-content: center;
          color: #B8B8B8;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .ftr-social-btn:hover {
          color: #0B0B0B;
          border-color: #FFFFFF;
          background: #FFFFFF;
          transform: translateY(-2px);
        }

        /* Copyright */
        .ftr-copy {
          font-size: 12px;
          color: #555555;
          letter-spacing: 0.04em;
        }
        .ftr-copy a {
          color: #8C8C8C;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ftr-copy a:hover { color: #FFFFFF; }

        /* Legal links */
        .ftr-legal a {
          font-size: 11px;
          color: #555555;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .ftr-legal a:hover { color: #FFFFFF; }
      `}</style>

      <footer className="ftr-root">
        <div className="ftr-top-line" />

        <div className="ftr-inner">
          <div className="ftr-grid">
            {/* ── Col 1: Brand ── */}
            <div>
              <Link to="/" className="ftr-logo" aria-label="DETTAGLI AUTO home">
                <img
                  src="/logo.png"
                  alt="DETTAGLI AUTO logo"
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <p className="ftr-brand-desc" style={body}>
                India's premium auto detailing studio — PPF, ceramic coatings,
                restoration, and performance upgrades. We protect what moves
                you.
              </p>
            </div>

            {/* ── Col 2: Services ── */}
            <div>
              <div className="ftr-col-head">
                <div className="ftr-col-head-line" />
                <div className="ftr-col-head-text" style={label}>
                  Services
                </div>
              </div>
              <ul className="ftr-link-list">
                {SERVICES.map(({ svc, href }) => (
                  <li key={svc}>
                    <Link to={href} style={body}>
                      <span className="fl-dot" />
                      {svc}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Quick Links ── */}
            <div>
              <div className="ftr-col-head">
                <div className="ftr-col-head-line" />
                <div className="ftr-col-head-text" style={label}>
                  Quick Links
                </div>
              </div>
              <ul className="ftr-link-list">
                {QUICK_LINKS.map(({ label: linkLabel, href }) => (
                  <li key={linkLabel}>
                    <Link to={href} style={body}>
                      <span className="fl-dot" />
                      {linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Contact ── */}
            <div>
              <div className="ftr-col-head">
                <div className="ftr-col-head-line" />
                <div className="ftr-col-head-text" style={label}>
                  Contact Us
                </div>
              </div>
              <ul className="ftr-contact-list">
                {CONTACT_INFO.map(({ icon: Icon, value, href, Flag, country }) => (
                  <li className="ftr-contact-item" key={value}>
                    <Link to={href}>
                      <div className="ftr-contact-icon">
                        <Icon size={14} strokeWidth={2} />
                      </div>
                      <div className="ftr-contact-value-row">
                        {Flag && (
                          <span
                            className="ftr-contact-flag"
                            role="img"
                            aria-label={country}
                            title={country}
                          >
                            <Flag />
                          </span>
                        )}
                        <div className="ftr-contact-value" style={body}>
                          {value}
                        </div>
                      </div>
                    </Link>
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
          <div className="ftr-copy" style={body}>
            © {year}{" "}
            <a href="#home" style={label}>
              DETTAGLI AUTO
            </a>
            . All rights reserved.
          </div>

          {/* Social icons
          <div className="ftr-socials">
            {SOCIALS.map(({ label: socLabel, href, svg }) => (
              <a
                key={socLabel}
                href={href}
                className="ftr-social-btn"
                aria-label={socLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {svg}
              </a>
            ))}
          </div> */}

          {/* Legal */}
          <div className="ftr-legal">
            <a href="https://deboxtechnology.com/" style={label}>
              Developed by Debox Technology
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}