import React, { useState, useEffect } from "react";

/**
 * TopBar — Auto Detailing Brand
 *
 * Palette (fixed):
 *   Primary BG      #0B0B0B
 *   Secondary BG    #1A1A1A
 *   Section BG      #2A2A2A
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver — icons / hover)
 *
 * Type system:
 *   Main heading   Bebas Neue
 *   Title/labels    DM Sans
 *   Sub/body text   Jost
 */

const LOCATIONS = ["Delhi", "Noida", "Gurugram", "Patna"];

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.847L.057 23.5l5.797-1.521A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.003-1.368l-.359-.214-3.717.975.993-3.631-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

const SOCIALS = [
  { Icon: FacebookIcon, href: "#facebook", label: "Facebook" },
  { Icon: InstagramIcon, href: "#instagram", label: "Instagram" },
  { Icon: XIcon, href: "#twitter", label: "X / Twitter" },
  { Icon: WhatsAppIcon, href: "#whatsapp", label: "WhatsApp" },
];

export default function TopBar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 40);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .topbar-root {
          font-family: 'Jost', sans-serif;
          background: #0B0B0B;
          border-bottom: 1px solid #2A2A2A;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s;
          transform: translateY(0);
          opacity: 1;
          position: relative;
          z-index: 60;
        }
        .topbar-root.hidden-bar {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }

        /* 3-column grid: left | center | right — each takes equal width so center is truly centered */
        .topbar-inner {
          max-width: 1280px;
          margin: 0;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          height: 38px;
        }

        /* LEFT — email */
        .topbar-left {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .topbar-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #B8B8B8;
          white-space: nowrap;
        }
        .topbar-item svg {
          color: #8C8C8C;
          flex-shrink: 0;
        }
        .topbar-item a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }
        .topbar-item a:hover { color: #FFFFFF; }

        /* CENTER — cities */
        .topbar-locations {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .topbar-loc {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #B8B8B8;
          white-space: nowrap;
          padding: 0 12px;
          border-right: 1px solid #2A2A2A;
        }
        .topbar-loc:first-child {
          border-left: 1px solid #2A2A2A;
        }
        .topbar-loc svg {
          color: #8C8C8C;
        }

        /* RIGHT — socials */
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 4px;
          justify-content: flex-end;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          color: #B8B8B8;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .social-btn:hover {
          color: #FFFFFF;
          background: #1A1A1A;
        }

        /* Mobile fallback */
        .topbar-mobile-info {
          display: none;
        }

        @media (max-width: 1024px) {
          .topbar-locations {
            display: none;
          }
          .topbar-inner {
            grid-template-columns: auto 1fr auto;
          }
        }
        @media (max-width: 640px) {
          .topbar-inner {
            grid-template-columns: auto 1fr auto;
          }
          .topbar-left {
            display: none;
          }
          .topbar-mobile-info {
            display: flex !important;
            align-items: center;
            gap: 6px;
            font-family: 'DM Sans', sans-serif;
            font-size: 12px;
            color: #B8B8B8;
          }
          .topbar-mobile-info svg {
            color: #8C8C8C;
          }
        }
      `}</style>

      <div className={`topbar-root${visible ? "" : " hidden-bar"}`}>
        <div className="topbar-inner">

          {/* LEFT — email */}
          <div className="topbar-left">
            <div className="topbar-item email">
              <EmailIcon />
              <a href="mailto:carstylein02@gmail.com">carstylein02@gmail.com</a>
            </div>
            {/* Mobile fallback */}
            <div className="topbar-mobile-info">
              <ClockIcon size={13} />
              <span>10:00 AM – 7:00 PM</span>
            </div>
          </div>

          {/* CENTER — cities */}
          <div className="topbar-locations">
            {LOCATIONS.map((loc) => (
              <div className="topbar-loc" key={loc}>
                <PinIcon />
                <span>{loc}</span>
              </div>
            ))}
          </div>

          {/* RIGHT — socials */}
          <div className="topbar-right">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="social-btn">
                <Icon />
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

/* Inline icon components */
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ color: "#8C8C8C" }}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function ClockIcon({ size = 14 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} style={{ color: "#8C8C8C" }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" style={{ color: "#8C8C8C" }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}