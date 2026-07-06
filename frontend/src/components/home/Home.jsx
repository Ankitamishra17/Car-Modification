import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const STATS = [
  { value: "26+", label: "Years of excellence" },
  { value: "100%", label: "In-house craftsmanship" },
];

export default function Hero() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        background: "#0B0B0B",
        overflow: "hidden",
      }}
      aria-label="Hero"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.5; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.35); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; opacity: 1 !important; }
        }

        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; font-weight: 600;
          letter-spacing: 0.04em;
          padding: 14px 30px; border-radius: 3px;
          background: linear-gradient(135deg, #E4E4E4 0%, #B8B8B8 100%);
          color: #0B0B0B;
          border: none; cursor: pointer; text-decoration: none;
          box-shadow: 0 8px 24px -8px rgba(200,200,200,0.35);
          transition: box-shadow 0.25s, transform 0.25s, background 0.25s;
        }
        .hero-btn-primary:hover {
          background: linear-gradient(135deg, #F5F5F5 0%, #D0D0D0 100%);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px -8px rgba(200,200,200,0.5);
        }
        .hero-btn-primary:hover .hero-arrow { transform: translateX(3px); }
        .hero-arrow { transition: transform 0.2s; }

        .hero-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; font-weight: 500;
          letter-spacing: 0.04em;
          padding: 13px 30px; border-radius: 3px;
          background: rgba(255,255,255,0.02);
          color: rgba(240,240,240,0.75);
          border: 1px solid rgba(255,255,255,0.18);
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .hero-btn-ghost:hover { border-color: #8C8C8C; color: #E4E4E4; background: rgba(255,255,255,0.05); }

        .hero-scroll-line {
          width: 1px; height: 36px;
          background: rgba(255,255,255,0.15);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #C0C0C0;
          animation: dotPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .hero-stats { display: flex; gap: 36px; flex-wrap: wrap; }
        .hero-stat { display: flex; flex-direction: column; gap: 4px; }
        .hero-stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 34px; line-height: 1; letter-spacing: 0.01em;
          color: #F0F0F0;
          background: linear-gradient(135deg, #F5F5F5 0%, #9A9A9A 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(240,240,240,0.42);
        }

        @media (max-width: 520px) {
          .hero-stats { gap: 24px; }
          .hero-stat-value { font-size: 27px; }
        }

        /* ── Mobile-only overrides ── */
        .hero-bg-desktop { display: block; }
        .hero-bg-mobile { display: none; }
        .hero-subtitle { display: block; }
        .hero-mobile-overlay { display: none; }

        @media (max-width: 768px) {
          .hero-bg-desktop { display: none; }
          .hero-bg-mobile { display: block; }
          .hero-mobile-overlay { display: block; }
          .hero-stats { display: none; }
          .hero-badge { display: none !important; }
          .hero-btn-ghost { display: none; }

          /* Section: content starts from top instead of center, dvh avoids mobile browser UI jump */
          .hero-section {
            min-height: 100dvh;
            align-items: flex-start !important;
            padding-top: 90px;
          }

          /* Content wrapper: full width so centering works */
          .hero-content-wrap {
            padding: 0 18px !important;
          }

          /* Text block: center everything */
          .hero-inner {
            max-width: 100% !important;
            text-align: center !important;
          }

          /* Eyebrow: keep as a compact centered label instead of hiding it, drop the line rule */
          .hero-eyebrow {
            display: flex !important;
            justify-content: center !important;
            margin-bottom: 14px !important;
          }
          .hero-eyebrow > span:first-child { display: none !important; }
          .hero-eyebrow > span:last-child {
            font-size: 10px !important;
            letter-spacing: 0.22em !important;
            text-shadow: 0 2px 10px rgba(0,0,0,0.75);
          }

          .hero-inner h1 {
            text-shadow: 0 6px 28px rgba(0,0,0,0.55);
          }
          .hero-inner h1 span {
            text-align: center !important;
            font-size: clamp(46px, 13vw, 68px) !important;
            line-height: 0.98 !important;
            -webkit-text-stroke: 0 !important;
          }

          /* Subheading: bring it back, sized and weighted for a small, high-contrast screen */
          .hero-subtitle {
            display: block !important;
            font-size: 14.5px !important;
            line-height: 1.7 !important;
            max-width: 300px !important;
            margin: 18px auto 26px !important;
            color: rgba(240,240,240,0.78) !important;
            text-shadow: 0 2px 12px rgba(0,0,0,0.7);
          }

          .hero-btn-primary {
            background: transparent;
            color: #F0F0F0;
            border: 1px solid rgba(255,255,255,0.5);
            box-shadow: none;
            font-size: 13px;
            padding: 13px 28px;
          }
          .hero-btn-primary:hover {
            background: rgba(255,255,255,0.08);
            box-shadow: none;
          }

          /* CTA row: center the button */
          .hero-cta {
            justify-content: center !important;
            margin-top: 18px !important;
          }

          /* Stats: swap the desktop row for a compact centered summary line under the CTA */
          .hero-mobile-stats {
            display: flex !important;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin-top: 30px;
            opacity: 0;
            animation: fadeUp 0.75s ease-out 0.82s forwards;
          }
          .hero-mobile-stat {
            display: flex;
            flex-direction: column;
            gap: 2px;
            padding: 0 12px;
          }
          .hero-mobile-stat + .hero-mobile-stat {
            border-left: 1px solid rgba(255,255,255,0.15);
          }
          .hero-mobile-stat-value {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 20px;
            line-height: 1;
            color: #F0F0F0;
            text-shadow: 0 2px 10px rgba(0,0,0,0.6);
          }
          .hero-mobile-stat-label {
            font-family: 'DM Sans', sans-serif;
            font-size: 8px;
            font-weight: 500;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: rgba(240,240,240,0.55);
          }
        }

        .hero-mobile-stats { display: none; }
      `}</style>

      {/* ── Background ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          className="hero-bg-desktop"
          src="/banner/banner.png"
          alt="Car detailing studio"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(40%) brightness(0.6)",
          }}
        />
        <img
          className="hero-bg-mobile"
          src="/banner/mobile2.png"
          alt="Car detailing studio"
          style={{
            width: "100%",
            height: "100dvh",
            objectFit: "cover",
            objectPosition: "center 20%",
            filter: "grayscale(40%) brightness(0.55)",
          }}
        />
      </div>

      {/* Mobile-only gradient overlay for text contrast */}
      <div
        className="hero-mobile-overlay"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.4) 32%, rgba(0,0,0,0.28) 55%, rgba(11,11,11,0.85) 100%)",
        }}
      />

      {/* Silver ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: -120,
          zIndex: 1,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(180,180,180,0.09)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* Live badge */}
      <div
        className="hero-badge"
        style={{
          position: "absolute",
          top: 28,
          right: 28,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: 8,
          border: "1px solid rgba(192,192,192,0.2)",
          borderRadius: 2,
          padding: "8px 14px",
          background: "rgba(11,11,11,0.5)",
          backdropFilter: "blur(8px)",
          opacity: 0,
          animation: "fadeIn 0.8s ease-out 1s forwards",
        }}
      >
        <div className="hero-badge-dot" />
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(192,192,192,0.75)",
          }}
        >
          Bookings Open
        </span>
      </div>

      {/* ── Content ── */}
      <div
        className="hero-content-wrap"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          padding: "56px 40px 80px",
        }}
      >
        <div className="hero-inner" style={{ maxWidth: 580 }}>
          {/* Eyebrow */}
          <div
            className="hero-eyebrow"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 18,
              opacity: 0,
              animation: "fadeUp 0.7s ease-out 0.1s forwards",
            }}
          >
            <span
              style={{
                width: 36,
                height: 1,
                background: "#8C8C8C",
                display: "block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                fontStyle: "italic",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#8C8C8C",
              }}
            >
              Studio di &amp; Detailing e Prestazioni
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(52px, 9vw, 90px)",
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            <span
              style={{
                color: "#F0F0F0",
                display: "block",
                WebkitTextStroke: "2px rgba(255,255,255,0.85)",
              }}
            >
              EVERY CAR HAS
            </span>
            <span style={{ color: "#F0F0F0", display: "block" }}>
              A FINISH IT WAS
            </span>
          </h1>

          {/* Subheading — Jost */}
          <p
            className="hero-subtitle"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 15.5,
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(240,240,240,0.62)",
              maxWidth: 400,
              margin: "22px 0 34px",
              opacity: 0,
              animation: "fadeUp 0.75s ease-out 0.54s forwards",
            }}
          >
            From ceramic coating to full restoration, body kits to remapped
            performance — we bring out the car underneath the car.
          </p>

          {/* Stats — desktop row */}
          <div
            className="hero-stats"
            style={{
              marginTop: 44,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.09)",
              opacity: 0,
              animation: "fadeUp 0.75s ease-out 0.82s forwards",
            }}
          >
            {STATS.map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Stats — compact mobile summary line, same position in the flow as the row above */}
          <div className="hero-mobile-stats">
            {STATS.map((s) => (
              <div className="hero-mobile-stat" key={s.label}>
                <span className="hero-mobile-stat-value">{s.value}</span>
                <span className="hero-mobile-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        to="/about"
        aria-label="Scroll to next section"
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 7,
          textDecoration: "none",
          opacity: 0,
          animation: "fadeIn 1s ease-out 1.4s forwards",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 9.5,
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)",
          }}
        >
          Scroll
        </span>
        <div className="hero-scroll-line" />
      </Link>
    </section>
  );
}