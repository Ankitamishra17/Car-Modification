// import React from "react";

// /**
//  * SidePanel — global quick-contact rail
//  *
//  * Renders once in App.jsx (outside individual page/hero components) so it
//  * stays fixed on screen across every route instead of being duplicated
//  * inside each page's hero section.
//  */

// // ── Inline SVG icons (no external icon-library dependency) ──
// const MapIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.75"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const PhoneIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.75"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//   </svg>
// );

// const InstagramIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.75"
//     {...props}
//   >
//     <rect x="2" y="2" width="20" height="20" rx="5.5" />
//     <circle cx="12" cy="12" r="4.5" />
//     <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
//   </svg>
// );

// const YoutubeIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.75"
//     {...props}
//   >
//     <rect x="2" y="5" width="20" height="14" rx="4" />
//     <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
//   </svg>
// );

// const SIDE_LINKS = [
//   {
//     label: "Map",
//     href: "https://www.google.com/maps/search/?api=1&query=C+32+Block+C+Lajpat+Nagar+II+New+Delhi+Delhi+110024",
//     Icon: MapIcon,
//     external: true,
//   },
//   {
//     label: "Call Us",
//     href: "tel:080-77976595",
//     Icon: PhoneIcon,
//     external: false,
//   },
//   {
//     label: "Instagram",
//     href: "https://www.instagram.com/dettagli.auto?igsh=bG9rdm9yODdsODY3",
//     Icon: InstagramIcon,
//     external: true,
//   },
//   {
//     label: "YouTube",
//     href: "https://www.youtube.com/@dettagliauto1.618",
//     Icon: YoutubeIcon,
//     external: true,
//   },
// ];

// export default function SidePanel() {
//   return (
//     <>
//       <style>{`
//         @keyframes sidePanelFadeIn {
//           from { opacity: 0; }
//           to   { opacity: 1; }
//         }

//         /* ══════════════════════════════════════
//            GLOBAL RIGHT-SIDE VERTICAL CONTACT PANEL
//         ══════════════════════════════════════ */
//         .side-panel {
//           position: fixed;
//           top: 50%;
//           right: 2px;
//           overflow: visible;
//           transform: translateY(-50%);
//           z-index: 50;
//           display: flex;
//           flex-direction: column;
//           border: 1px solid rgba(192,192,192,0.22);
//           border-radius: 4px;
//           background: rgba(11,11,11,0.45);
//           backdrop-filter: blur(10px);
//           opacity: 0;
//           animation: sidePanelFadeIn 0.8s ease-out 1.1s forwards;
//         }
//         .side-box {
//           display: flex;
//           overflow: visible;
//           align-items: center;
//           justify-content: center;
//           width: 60px;
//           height: 60px;
//           color: rgba(224,224,224,0.75);
//           text-decoration: none;
//           transition: background 0.25s, color 0.25s;
//           position: relative;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .side-box + .side-box {
//           border-top: 1px solid rgba(255,255,255,0.1);
//         }
//         .side-box:hover {
//           border; 
//           background: rgba(224,224,224,0.08);
//           color: #F5F5F5;
//         }
//         .side-box svg { width: 20px; height: 20px; }

//         /* Tooltip label on hover — desktop only */
//         .side-box .side-tooltip {
//           position: absolute;
//           right: calc(100% + 12px);
//           top: 50%;
//           transform: translateY(-50%) translateX(6px);
//           white-space: nowrap;
//           font-size: 11px;
//           font-weight: 600;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           color: #0B0B0B;
//           background: #E4E4E4;
//           padding: 6px 12px;
//           border-radius: 2px;
//           opacity: 0;
//           pointer-events: none;
//           transition: opacity 0.2s, transform 0.2s;
//         }
//         .side-box:hover .side-tooltip {
//           opacity: 1;
//           transform: translateY(-50%) translateX(0);
//         }

// .side-box .side-tooltip {
//   position: absolute;
//   right: calc(100% + 16px);
//   top: 50%;
//   transform: translateY(-50%) translateX(12px) scale(0.95);

//   white-space: nowrap;
//   padding: 10px 16px;

//   font-size: 12px;
//   font-weight: 600;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;

//   color: #fff;
//   background: rgba(15, 15, 15, 0.96);
//   border: 1px solid rgba(255, 255, 255, 0.12);
//   backdrop-filter: blur(14px);

//   border-radius: 8px;
//   box-shadow:
//     0 12px 35px rgba(0,0,0,.35),
//     0 0 0 1px rgba(255,255,255,.05);

//   opacity: 0;
//   visibility: hidden;
//   pointer-events: none;

//   transition: all .28s cubic-bezier(.22,1,.36,1);
// }
//   .side-box .side-tooltip::after {
//   content: "";
//   position: absolute;
//   top: 50%;
//   right: -6px;
//   transform: translateY(-50%) rotate(45deg);

//   width: 12px;
//   height: 12px;

//   background: rgba(15, 15, 15, 0.96);
//   border-top: 1px solid rgba(255,255,255,.12);
//   border-right: 1px solid rgba(255,255,255,.12);
// }

// .side-box:hover .side-tooltip {
//   opacity: 1;
//   visibility: visible;
//   transform: translateY(-50%) translateX(0) scale(1);
// }

//         @media (max-width: 768px) {
//           /* Side panel → horizontal bar pinned to the bottom on mobile */
//           .side-panel {
//             top: auto;
//             bottom: 22px;
//             right: 50%;
//             transform: translateX(50%);
//             flex-direction: row;
//           }
//           .side-box {
//             width: 52px;
//             height: 52px;
//           }
//           .side-box + .side-box {
//             border-top: none;
//             border-left: 1px solid rgba(255,255,255,0.1);
//           }
//           .side-box svg { width: 18px; height: 18px; }
//           /* Tooltips are a hover-only affordance — drop them on touch devices */
//           .side-box .side-tooltip { display: none; }
//         }

//         @media (max-width: 380px) {
//           .side-box { width: 46px; height: 46px; }
//           .side-box svg { width: 16px; height: 16px; }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .side-panel { animation: none !important; opacity: 1 !important; }
//         }
//       `}</style>

//       <div className="side-panel" aria-label="Quick contact links">
//         {SIDE_LINKS.map(({ label, href, Icon, external }) => (
//           <a
//             key={label}
//             href={href}
//             className="side-box"
//             aria-label={label}
//             {...(external
//               ? { target: "_blank", rel: "noopener noreferrer" }
//               : {})}
//           >
//             <Icon />
//             <span className="side-tooltip">{label}</span>
//           </a>
//         ))}
//       </div>
//     </>
//   );
// }

import React from "react";

/**
 * SidePanel — global quick-contact rail
 *
 * Renders once in App.jsx (outside individual page/hero components) so it
 * stays fixed on screen across every route instead of being duplicated
 * inside each page's hero section.
 */

// ── Inline SVG icons (no external icon-library dependency) ──
const MapIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    {...props}
  >
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
  </svg>
);

// Each link gets its own brand-tinted outline color so the icons read
// distinctly at a glance instead of all sharing one neutral tone.
const SIDE_LINKS = [
  {
    label: "Map",
    href: "https://www.google.com/maps/search/?api=1&query=C+32+Block+C+Lajpat+Nagar+II+New+Delhi+Delhi+110024",
    Icon: MapIcon,
    external: true,
    outlineColor: "rgba(90,160,255,0.85)",
    outlineColorHover: "rgba(90,160,255,1)",
  },
  {
    label: "Call Us",
    href: "tel:080-77976595",
    Icon: PhoneIcon,
    external: false,
    outlineColor: "rgba(90,220,140,0.85)",
    outlineColorHover: "rgba(90,220,140,1)",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dettagli.auto?igsh=bG9rdm9yODdsODY3",
    Icon: InstagramIcon,
    external: true,
    outlineColor: "rgba(225,90,180,0.85)",
    outlineColorHover: "rgba(225,90,180,1)",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@dettagliauto1.618",
    Icon: YoutubeIcon,
    external: true,
    outlineColor: "rgba(255,90,90,0.85)",
    outlineColorHover: "rgba(255,90,90,1)",
  },
];

export default function SidePanel() {
  return (
    <>
      <style>{`
        @keyframes sidePanelFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ══════════════════════════════════════
           GLOBAL RIGHT-SIDE VERTICAL CONTACT PANEL
        ══════════════════════════════════════ */
        .side-panel {
          position: fixed;
          top: 50%;
          right: 2px;
          overflow: visible;
          transform: translateY(-50%);
          z-index: 50;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(192,192,192,0.22);
          border-radius: 4px;
          background: rgba(11,11,11,0.45);
          backdrop-filter: blur(10px);
          opacity: 0;
          animation: sidePanelFadeIn 0.8s ease-out 1.1s forwards;
        }
        .side-box {
          display: flex;
          overflow: visible;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          color: rgba(224,224,224,0.75);
          text-decoration: none;
          transition: background 0.25s, color 0.25s;
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }
        .side-box + .side-box {
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .side-box:hover {
          background: rgba(224,224,224,0.08);
        }

        /* Icon color — the icon's own stroke lines are tinted per brand via
           the --icon-outline / --icon-outline-hover custom properties set
           inline on each .side-box below. No extra circle/shape added. */
        .side-box svg {
          width: 20px;
          height: 20px;
          color: var(--icon-outline);
          transition: color 0.25s;
        }
        .side-box:hover svg {
          color: var(--icon-outline-hover);
        }

        /* Tooltip label on hover — desktop only */
        .side-box .side-tooltip {
          position: absolute;
          right: calc(100% + 16px);
          top: 50%;
          transform: translateY(-50%) translateX(12px) scale(0.95);

          white-space: nowrap;
          padding: 10px 16px;

          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: #fff;
          background: rgba(15, 15, 15, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);

          border-radius: 8px;
          box-shadow:
            0 12px 35px rgba(0,0,0,.35),
            0 0 0 1px rgba(255,255,255,.05);

          opacity: 0;
          visibility: hidden;
          pointer-events: none;

          transition: all .28s cubic-bezier(.22,1,.36,1);
        }
        .side-box .side-tooltip::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -6px;
          transform: translateY(-50%) rotate(45deg);

          width: 12px;
          height: 12px;

          background: rgba(15, 15, 15, 0.96);
          border-top: 1px solid rgba(255,255,255,.12);
          border-right: 1px solid rgba(255,255,255,.12);
        }

        .side-box:hover .side-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(0) scale(1);
        }

        @media (max-width: 768px) {
          /* Side panel → horizontal bar pinned to the bottom on mobile */
          .side-panel {
            top: auto;
            bottom: 22px;
            right: 50%;
            transform: translateX(50%);
            flex-direction: row;
          }
          .side-box {
            width: 52px;
            height: 52px;
          }
          .side-box + .side-box {
            border-top: none;
            border-left: 1px solid rgba(255,255,255,0.1);
          }
          .side-box svg { width: 22px; height: 22px; }
          /* Tooltips are a hover-only affordance — drop them on touch devices */
          .side-box .side-tooltip { display: none; }
        }

        @media (max-width: 380px) {
          .side-box { width: 46px; height: 46px; }
          .side-box svg { width: 19px; height: 19px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .side-panel { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <div className="side-panel" aria-label="Quick contact links">
        {SIDE_LINKS.map(
          ({ label, href, Icon, external, outlineColor, outlineColorHover }) => (
            <a
              key={label}
              href={href}
              className="side-box"
              aria-label={label}
              style={{
                "--icon-outline": outlineColor,
                "--icon-outline-hover": outlineColorHover,
              }}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon />
              <span className="side-tooltip">{label}</span>
            </a>
          )
        )}
      </div>
    </>
  );
}