import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * About — CarStyle / Dettagli Auto (Editorial Timeline redesign v2)
 *
 * Colors:
 *   Primary BG      #0B0B0B
 *   Primary Text    #F0F0F0
 *   Silver Accent   #C0C0C0
 *   Muted Silver    #8C8C8C
 *
 * Font system (consistent across site):
 *   Main heading    Bebas Neue
 *   Labels/CTAs     DM Sans
 *   Body/sub        Jost
 */

const IMG_MAIN =
  "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1000";

const TIMELINE = [
  { year: "1999", value: "25+", label: "Years of Expertise" },
  { year: "2020", value: "2020", label: "Studio Established" },
  { year: "Today", value: "9,000+", label: "Automobiles Detailed" },
];

const PARAS = [
  "Founded in 2020, Dettagli Auto was born from a lifelong passion for automotive craftsmanship and the pursuit of perfection. Behind the brand stands Sheikh Yasir, whose journey in detailing began in 1999 — spanning over twenty-five years across international markets, including the Middle East.",
  "At Dettagli Auto, detailing is not regarded as a service — it is considered a craft. Every vehicle entrusted to our studio is approached individually, without compromise or haste. Each surface is examined, every material understood, and every procedure executed with meticulous attention to detail.",
  "Since our establishment, we have had the privilege of detailing, restoring and protecting more than 9,000 automobiles. This milestone is not measured simply by numbers, but by the confidence our clients continue to place in our work.",
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1], delay },
  },
});
const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1], delay },
  },
});

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0B0B0B",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0 110px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .abt2-inner {
          max-width: 1320px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: 0.85fr 1.15fr;
          gap: 0px; align-items: stretch;
        }
        @media (max-width: 1023px) { .abt2-inner { grid-template-columns: 1fr; } }
        @media (max-width: 520px)  { .abt2-inner { padding: 0 16px; } }

        /* ===== LEFT: image + timeline rail ===== */
        .abt2-visual {
          position: relative;
          padding-left: 60px;
          padding-top: 14px;
          padding-bottom: 34px;
          display: flex;
        }
        @media (max-width: 1023px) { .abt2-visual { margin-bottom: 56px; } }
        @media (max-width: 520px)  { .abt2-visual { padding-left: 44px; padding-top: 8px; } }

        .abt2-rail-track {
          position: absolute; left: 14px; top: 0; bottom: 0;
          width: 1px; background: rgba(192,192,192,0.1);
        }
        .abt2-rail-fill {
          position: absolute; left: 14px; top: 0; width: 1px; height: 100%;
          background: linear-gradient(to bottom, #C0C0C0, rgba(192,192,192,0.2));
          transform-origin: top;
        }
        .abt2-node {
          position: absolute; left: 14px;
          transform: translate(-50%, -50%);
          display: flex; align-items: center; gap: 14px;
        }
        .abt2-node-dot-ring {
          position: relative;
          width: 16px; height: 16px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .abt2-node-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #0B0B0B; border: 1.5px solid #C0C0C0;
          position: relative; z-index: 2;
        }
        .abt2-node-pulse {
          position: absolute; width: 8px; height: 8px; border-radius: 50%;
          background: rgba(192,192,192,0.5);
        }
        .abt2-node-text { white-space: nowrap; }
        .abt2-node-year {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px; letter-spacing: 0.1em;
          color: #8C8C8C;
        }
        .abt2-node-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 21px; color: #F0F0F0; line-height: 1.15;
        }
        .abt2-node-label {
          font-family: 'Jost', sans-serif;
          font-size: 9.5px; font-weight: 300;
          color: rgba(240,240,240,0.4);
          letter-spacing: 0.05em; text-transform: uppercase;
        }

        .abt2-frame {
          position: relative;
          width: 100%;
        }
        .abt2-frame-border {
          position: absolute;
          top: 16px; left: 16px; right: -16px; bottom: -16px;
          border: 1px solid rgba(192,192,192,0.28);
          border-radius: 3px;
          z-index: 0;
        }
        .abt2-imgwrap {
          position: relative; width: 100%; z-index: 1;
          border-radius: 3px; overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .abt2-img {
          display: block; width: 100%; height: 100%;
          object-fit: cover; aspect-ratio: 3/4;
          filter: grayscale(20%) contrast(1.05);
          transition: transform 0.9s cubic-bezier(0.4,0,0.2,1);
        }
        .abt2-imgwrap:hover .abt2-img { transform: scale(1.06); }
        .abt2-imgwrap::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(11,11,11,0.6), transparent 42%);
          pointer-events: none;
        }

        .abt2-badge {
          position: absolute; bottom: -30px; left: -30px; z-index: 3;
          width: 84px; height: 84px;
          display: flex; align-items: center; justify-content: center;
        }
        .abt2-badge-spin {
          position: absolute; inset: 0;
          animation: abt2-rotate 16s linear infinite;
        }
        @keyframes abt2-rotate { to { transform: rotate(360deg); } }
        .abt2-badge-core {
          width: 34px; height: 34px; border-radius: 50%;
          background: #0B0B0B; border: 1px solid rgba(192,192,192,0.4);
          display: flex; align-items: center; justify-content: center;
          position: relative; z-index: 1;
        }
        .abt2-badge-core svg { width: 15px; height: 15px; }

        @media (max-width: 520px) {
          .abt2-frame-border { top: 12px; left: 12px; right: -12px; bottom: -12px; }
          .abt2-badge { width: 68px; height: 68px; bottom: -22px; left: -22px; }
          .abt2-badge-core { width: 28px; height: 28px; }
        }

        /* ===== RIGHT: text (unchanged) ===== */
        .abt2-text {
          padding: 6px 0 0 64px;
          display: flex; flex-direction: column; justify-content: center;
        }
        @media (max-width: 1023px) { .abt2-text { padding-left: 0; } }

        .abt2-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .abt2-eyebrow-line { width: 34px; height: 1px; background: #8C8C8C; flex-shrink: 0; }
        .abt2-eyebrow-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.26em; text-transform: uppercase; color: #8C8C8C;
        }

        .abt2-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 7vw, 92px);
          color: #F0F0F0; line-height: 0.92;
          margin: 0 0 22px; letter-spacing: 0.005em;
        }
        .abt2-heading span {
          -webkit-text-stroke: 1.5px #C0C0C0;
          color: transparent;
        }

        .abt2-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 15px; font-weight: 300; font-style: italic;
          color: rgba(240,240,240,0.45);
          margin-bottom: 28px; line-height: 1.65;
          max-width: 480px;
        }

        .abt2-para {
          font-family: 'Jost', sans-serif;
          font-size: 14.5px; font-weight: 300;
          line-height: 1.85; color: rgba(240,240,240,0.58);
          margin-bottom: 16px; max-width: 560px;
        }

        .abt2-quote {
          margin: 30px 0 28px;
          padding: 4px 0 4px 24px;
          border-left: 1px solid #C0C0C0;
        }
        .abt2-quote-main {
          font-family: 'Jost', sans-serif;
          font-style: italic; font-weight: 400;
          font-size: clamp(20px, 2.6vw, 27px);
          color: #C0C0C0; line-height: 1.35;
          margin-bottom: 8px;
        }
        .abt2-quote-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(240,240,240,0.32);
        }

        .abt2-closing p {
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(240,240,240,0.28); line-height: 2.2;
        }
        .abt2-closing p span { color: rgba(192,192,192,0.7); }

        .abt2-cta {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 30px; padding: 12px 26px;
          border-radius: 3px; background: transparent;
          border: 1px solid #8C8C8C; color: #C0C0C0;
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none; width: fit-content;
          transition: background 0.25s, color 0.25s;
        }
        .abt2-cta:hover { background: #C0C0C0; color: #0B0B0B; }
        .abt2-cta:hover .cta-arrow2 { transform: translateX(4px); }
        .cta-arrow2 { transition: transform 0.25s; }
      `}</style>

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          right: -100,
          top: "8%",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background: "rgba(160,160,160,0.05)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -60,
          bottom: "5%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(160,160,160,0.04)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div className="abt2-inner">
        {/* ══ LEFT — Image + Timeline (redesigned) ══ */}
        <div className="abt2-visual">
          <div className="abt2-rail-track" />
          <motion.div
            className="abt2-rail-fill"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          />

          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              className="abt2-node"
              style={{ top: `${10 + i * 40}%` }}
              initial={{ opacity: 0, x: -14 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.5 + i * 0.18,
              }}
            >
             
            </motion.div>
          ))}

          <motion.div
            className="abt2-frame"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.25 }}
          >
            <div className="abt2-frame-border" />
            <div className="abt2-imgwrap">
              <motion.img
                src={IMG_MAIN}
                alt="Dettagli Auto craftsmanship"
                className="abt2-img"
                loading="lazy"
                initial={{ scale: 1.25 }}
                animate={inView ? { scale: 1 } : { scale: 1.25 }}
                transition={{
                  duration: 1.4,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.25,
                }}
              />
            </div>

            <motion.div
              className="abt2-badge"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }
              }
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.9 }}
            >
              <svg className="abt2-badge-spin" viewBox="0 0 84 84">
                <defs>
                  <path
                    id="abt2-circle-path"
                    d="M 42,42 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                  />
                </defs>
                <text
                  fill="#C0C0C0"
                  fontSize="8.2"
                  fontFamily="'DM Sans', sans-serif"
                  fontWeight="600"
                  letterSpacing="2.5"
                >
                  <textPath href="#abt2-circle-path" startOffset="0%">
                    DETTAGLI AUTO • EST. 1999 •
                  </textPath>
                </text>
              </svg>
              <div className="abt2-badge-core">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C0C0C0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ══ RIGHT — Text (unchanged) ══ */}
        <div className="abt2-text">
          <motion.div
            className="abt2-eyebrow"
            variants={fadeRight(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="abt2-eyebrow-line" />
            <span className="abt2-eyebrow-text">Our Story</span>
          </motion.div>

          <motion.h2
            className="abt2-heading"
            variants={fadeRight(0.18)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            About <span>Us</span>
          </motion.h2>

          <motion.p
            className="abt2-subtitle"
            variants={fadeUp(0.26)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Every remarkable automobile tells a story.
            <br />
            Our purpose is to preserve it.
          </motion.p>

          {PARAS.slice(0, 2).map((p, i) => (
            <motion.p
              key={i}
              className="abt2-para"
              variants={fadeUp(0.34 + i * 0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            className="abt2-quote"
            variants={fadeUp(0.56)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="abt2-quote-main">
              "Excellence resides in the details."
            </div>
            <div className="abt2-quote-sub">
              Every surface examined. Every procedure executed without
              compromise.
            </div>
          </motion.div>

          <motion.p
            className="abt2-para"
            variants={fadeUp(0.64)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {PARAS[2]}
          </motion.p>

          <motion.div
            className="abt2-closing"
            variants={fadeUp(0.72)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p>
              <span>It is crafted.</span>&nbsp; It is refined.&nbsp; It is
              preserved.
            </p>
            <p style={{ marginTop: 4 }}>
              Welcome to <span>Dettagli Auto.</span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.8)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <a href="#services" className="abt2-cta">
              Explore Our Services
              <svg
                className="cta-arrow2"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
