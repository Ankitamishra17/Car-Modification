import { useEffect, useRef, useState } from "react";

/**
 * Hero — CarStyle
 *
 * Colors:
 *   Primary BG      #0B0B0B
 *   Primary Text    #F0F0F0
 *   Silver Accent   #C0C0C0
 *   Muted Silver    #8C8C8C
 *
 * Font system (same as TopBar & CategoryShowcase):
 *   Main heading    Bebas Neue
 *   Labels/CTAs     DM Sans
 *   Body/sub        Jost
 */

const VIDEO_SRC  = "https://assets.mixkit.co/videos/47834/47834-360.mp4";
const POSTER_SRC = "https://assets.mixkit.co/videos/47834/47834-thumb-360-3.jpg";

const STATS = [
  { value: "5+",   label: "Years of excellence" },
  { value: "4",    label: "Cities served" },
  { value: "100%", label: "In-house craftsmanship" },
];

export default function Hero() {
  const videoRef = useRef(null);
  const [loaded, setLoaded]               = useState(false);
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
      style={{
        position: "relative",
        minHeight: "92vh",
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
          padding: 13px 28px; border-radius: 3px;
          background: #C0C0C0;
          color: #0B0B0B;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .hero-btn-primary:hover { background: #D8D8D8; transform: translateY(-1px); }
        .hero-btn-primary:hover .hero-arrow { transform: translateX(3px); }
        .hero-arrow { transition: transform 0.2s; }

        .hero-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; font-weight: 500;
          letter-spacing: 0.04em;
          padding: 12px 28px; border-radius: 3px;
          background: transparent;
          color: rgba(240,240,240,0.72);
          border: 1px solid rgba(255,255,255,0.18);
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .hero-btn-ghost:hover { border-color: #8C8C8C; color: #C0C0C0; }

        .hero-accent-word {
          color: #C0C0C0;
          position: relative;
          display: inline-block;
        }
        .hero-accent-word::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 3px;
          height: 2px;
          background: linear-gradient(to right, #8C8C8C, transparent);
        }

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
      `}</style>

      {/* ── Background ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {!reducedMotion ? (
          <video
            ref={videoRef}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              filter: "grayscale(40%) brightness(0.6)",
              opacity: loaded ? 1 : 0,
              transition: "opacity 1.4s ease",
            }}
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            autoPlay muted loop playsInline
            onLoadedData={() => setLoaded(true)}
          />
        ) : (
          <img
            src={POSTER_SRC}
            alt="Car detailing studio"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(40%) brightness(0.6)" }}
          />
        )}
        {/* Tints */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(11,11,11,0.62)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(11,11,11,0.92) 0%, rgba(11,11,11,0.55) 55%, rgba(11,11,11,0.22) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,11,11,0.98) 0%, transparent 45%)" }} />
      </div>

      {/* Silver ambient glow */}
      <div style={{
        position: "absolute", top: "25%", left: -120, zIndex: 1,
        width: 420, height: 420, borderRadius: "50%",
        background: "rgba(180,180,180,0.07)",
        filter: "blur(100px)",
        pointerEvents: "none",
      }} />

      {/* Live badge */}
      <div style={{
        position: "absolute", top: 28, right: 28, zIndex: 3,
        display: "flex", alignItems: "center", gap: 8,
        border: "1px solid rgba(192,192,192,0.2)",
        borderRadius: 2, padding: "8px 14px",
        background: "rgba(11,11,11,0.5)",
        backdropFilter: "blur(8px)",
        opacity: 0,
        animation: "fadeIn 0.8s ease-out 1s forwards",
      }}>
        <div className="hero-badge-dot" />
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 10, fontWeight: 600,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "rgba(192,192,192,0.75)",
        }}>Bookings Open</span>
      </div>

      {/* ── Content ── */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1280, width: "100%",
        margin: "0 auto", padding: "56px 40px 80px",
      }}>
        <div style={{ maxWidth: 580 }}>

          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            marginBottom: 18,
            opacity: 0,
            animation: "fadeUp 0.7s ease-out 0.1s forwards",
          }}>
            <span style={{ width: 36, height: 1, background: "#8C8C8C", display: "block", flexShrink: 0 }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 600,
              letterSpacing: "0.28em", textTransform: "uppercase",
              color: "#8C8C8C",
            }}>
              Detailing &amp; Performance Studio
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(52px, 7vw, 76px)",
            lineHeight: 0.95,
            color: "#F0F0F0",
            margin: "0 0 22px",
            letterSpacing: "0.01em",
          }}>
            <span style={{ display: "block", opacity: 0, animation: "fadeUp 0.75s ease-out 0.22s forwards" }}>
              Every car has
            </span>
            <span style={{ display: "block", opacity: 0, animation: "fadeUp 0.75s ease-out 0.38s forwards" }}>
              a finish it was{" "}
              <span className="hero-accent-word">built to wear</span>.
            </span>
          </h1>

          {/* Subheading — Jost */}
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 15.5, fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(240,240,240,0.60)",
            maxWidth: 400,
            margin: "0 0 34px",
            opacity: 0,
            animation: "fadeUp 0.75s ease-out 0.54s forwards",
          }}>
            From ceramic coating to full restoration, body kits to remapped
            performance — we bring out the car underneath the car.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.75s ease-out 0.68s forwards",
          }}>
            <a href="#contact" className="hero-btn-primary">
              Book a Service
              <svg className="hero-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#services" className="hero-btn-ghost">
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: 36, flexWrap: "wrap",
            marginTop: 44,
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.09)",
            opacity: 0,
            animation: "fadeUp 0.75s ease-out 0.82s forwards",
          }}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 32, color: "#C0C0C0", lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 11.5, fontWeight: 400,
                  color: "rgba(240,240,240,0.38)",
                  marginTop: 5, letterSpacing: "0.04em",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to next section"
        style={{
          position: "absolute", bottom: 28, left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 7,
          textDecoration: "none",
          opacity: 0,
          animation: "fadeIn 1s ease-out 1.4s forwards",
        }}
      >
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 9.5, fontWeight: 600,
          letterSpacing: "0.25em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.28)",
        }}>Scroll</span>
        <div className="hero-scroll-line" />
      </a>
    </section>
  );
}