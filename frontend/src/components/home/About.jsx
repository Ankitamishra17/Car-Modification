import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * About — CarStyle / Dettagli Auto
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
  "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=900";
const IMG_SMALL =
  "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500";

const STATS = [
  { value: "9,000+", label: "Automobiles Detailed" },
  { value: "25+",    label: "Years of Expertise" },
  { value: "2020",   label: "Studio Established" },
];

const PARAS = [
  "Founded in 2020, Dettagli Auto was born from a lifelong passion for automotive craftsmanship and the pursuit of perfection. Behind the brand stands Sheikh Yasir, whose journey in detailing began in 1999 — spanning over twenty-five years across international markets, including the Middle East.",
  "At Dettagli Auto, detailing is not regarded as a service — it is considered a craft. Every vehicle entrusted to our studio is approached individually, without compromise or haste. Each surface is examined, every material understood, and every procedure executed with meticulous attention to detail.",
  "Since our establishment, we have had the privilege of detailing, restoring and protecting more than 9,000 automobiles. This milestone is not measured simply by numbers, but by the confidence our clients continue to place in our work.",
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1], delay } },
});
const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1], delay } },
});
const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1], delay } },
});

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      style={{ background: "#0B0B0B", position: "relative", overflow: "hidden", padding: "100px 0 110px" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .abt-inner {
          max-width: 1100px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }
        @media (max-width: 1023px) { .abt-inner { grid-template-columns: 1fr; gap: 56px; } }
        @media (max-width: 520px)  { .abt-inner { padding: 0 16px; gap: 44px; } }

        .collage-box {
          position: relative;
          padding-right: 52px;
          padding-bottom: 80px;
        }
        .collage-frame {
          position: absolute;
          top: 20px; left: -18px; right: 70px; bottom: 98px;
          border: 1.5px solid rgba(192,192,192,0.22);
          border-radius: 4px; z-index: 0; pointer-events: none;
        }
        .collage-main {
          position: relative; z-index: 1;
          width: 100%; display: block;
          border-radius: 4px; object-fit: cover;
          aspect-ratio: 4/5; max-height: 520px;
          filter: grayscale(15%);
        }
        .collage-small-wrap {
          position: absolute; bottom: 0; right: 0;
          width: 52%; z-index: 2;
          border: 3px solid #0B0B0B;
          border-radius: 4px; overflow: hidden;
        }
        .collage-small {
          display: block; width: 100%;
          aspect-ratio: 4/3; object-fit: cover;
          filter: grayscale(15%);
        }
        .collage-badge {
          position: absolute; top: 0; right: 0; z-index: 3;
          background: #C0C0C0; color: #0B0B0B;
          padding: 10px 16px; border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          line-height: 1.4; text-align: center;
        }

        .abt-stats {
          display: flex; margin-top: 26px;
          border: 1px solid rgba(192,192,192,0.13);
          border-radius: 4px; overflow: hidden;
        }
        .abt-stat {
          flex: 1; padding: 16px 10px;
          border-right: 1px solid rgba(192,192,192,0.1);
          background: rgba(255,255,255,0.02);
          text-align: center;
        }
        .abt-stat:last-child { border-right: none; }
        .abt-stat-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px; color: #C0C0C0; line-height: 1;
        }
        .abt-stat-lbl {
          font-family: 'Jost', sans-serif;
          font-size: 9.5px; font-weight: 400;
          color: rgba(240,240,240,0.35);
          margin-top: 5px; letter-spacing: 0.08em; text-transform: uppercase;
        }

        .abt-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .abt-eyebrow-line { width: 34px; height: 1px; background: #8C8C8C; flex-shrink: 0; }
        .abt-eyebrow-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.26em; text-transform: uppercase; color: #8C8C8C;
        }
        .abt-ghost-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          color: rgba(240,240,240,0.06);
          letter-spacing: 0.04em; line-height: 1; margin: 0 0 2px;
        }
        .abt-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(34px, 5vw, 52px);
          color: #F0F0F0; line-height: 1;
          margin: 0 0 20px; letter-spacing: 0.01em;
        }
        .abt-heading span { color: #C0C0C0; }
        .abt-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 15px; font-weight: 300; font-style: italic;
          color: rgba(240,240,240,0.45);
          margin-bottom: 24px; line-height: 1.65;
        }
        .abt-para {
          font-family: 'Jost', sans-serif;
          font-size: 14.5px; font-weight: 300;
          line-height: 1.85; color: rgba(240,240,240,0.58);
          margin-bottom: 14px;
        }
        .abt-divider {
          width: 40px; height: 1px;
          background: linear-gradient(to right, #8C8C8C, transparent);
          margin: 24px 0;
        }
        .abt-philosophy {
          border-left: 2px solid #8C8C8C;
          padding: 12px 18px;
          background: rgba(192,192,192,0.04);
          border-radius: 0 4px 4px 0;
          margin: 22px 0;
        }
        .abt-philosophy-main {
          font-family: 'Jost', sans-serif;
          font-style: italic; font-size: 16px; font-weight: 400;
          color: #C0C0C0; margin-bottom: 4px;
        }
        .abt-philosophy-sub {
          font-family: 'Jost', sans-serif;
          font-size: 12px; font-weight: 300;
          color: rgba(240,240,240,0.35); letter-spacing: 0.04em;
        }
        .abt-closing { margin-top: 26px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,0.07); }
        .abt-closing p {
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(240,240,240,0.28); line-height: 2.2;
        }
        .abt-closing p span { color: rgba(192,192,192,0.7); }
        .abt-cta {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 26px; padding: 12px 26px;
          border-radius: 3px; background: transparent;
          border: 1px solid #8C8C8C; color: #C0C0C0;
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s, color 0.25s;
        }
        .abt-cta:hover { background: #C0C0C0; color: #0B0B0B; }
        .abt-cta:hover .cta-arrow { transform: translateX(4px); }
        .cta-arrow { transition: transform 0.25s; }

        @media (max-width: 520px) {
          .collage-box { padding-right: 36px; padding-bottom: 64px; }
          .collage-frame { right: 54px; bottom: 82px; left: -10px; top: 16px; }
          .collage-small-wrap { width: 50%; }
          .collage-badge { padding: 8px 10px; font-size: 9px; }
        }
      `}</style>

      {/* Ambient glows — silver tint */}
      <div style={{ position: "absolute", right: -100, top: "10%", width: 460, height: 460, borderRadius: "50%", background: "rgba(160,160,160,0.055)", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: -60, bottom: "5%", width: 320, height: 320, borderRadius: "50%", background: "rgba(160,160,160,0.04)", filter: "blur(90px)", pointerEvents: "none" }} />

      <div className="abt-inner">

        {/* ══ LEFT — Collage ══ */}
        <motion.div variants={fadeLeft(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <div className="collage-box">
            <div className="collage-frame" />
            <img src={IMG_MAIN} alt="Professional car polishing" className="collage-main" loading="lazy" />
            <motion.div className="collage-small-wrap" variants={fadeUp(0.4)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <img src={IMG_SMALL} alt="Ceramic coating close-up" className="collage-small" loading="lazy" />
            </motion.div>
            <motion.div className="collage-badge" variants={fadeUp(0.55)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Since<br />1999
            </motion.div>
          </div>

          <motion.div className="abt-stats" variants={fadeUp(0.65)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            {STATS.map((s) => (
              <div className="abt-stat" key={s.label}>
                <div className="abt-stat-val">{s.value}</div>
                <div className="abt-stat-lbl">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ══ RIGHT — Text ══ */}
        <div>
          <motion.div className="abt-eyebrow" variants={fadeRight(0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <span className="abt-eyebrow-line" />
            <span className="abt-eyebrow-text">Our Story</span>
          </motion.div>

          <motion.div className="abt-ghost-text" variants={fadeRight(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            OUR STORY
          </motion.div>

          <motion.h2 className="abt-heading" variants={fadeRight(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            About <span>Us</span>
          </motion.h2>

          <motion.p className="abt-subtitle" variants={fadeUp(0.3)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            Every remarkable automobile tells a story.<br />
            Our purpose is to preserve it.
          </motion.p>

          {PARAS.map((p, i) => (
            <motion.p key={i} className="abt-para" variants={fadeUp(0.36 + i * 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              {p}
            </motion.p>
          ))}

          <motion.div className="abt-divider" variants={fadeUp(0.66)} initial="hidden" animate={inView ? "visible" : "hidden"} />

          <motion.div className="abt-philosophy" variants={fadeUp(0.72)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="abt-philosophy-main">Excellence resides in the details.</div>
            <div className="abt-philosophy-sub">Every surface examined. Every procedure executed without compromise.</div>
          </motion.div>

          <motion.div className="abt-closing" variants={fadeUp(0.8)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <p><span>It is crafted.</span>&nbsp; It is refined.&nbsp; It is preserved.</p>
            <p style={{ marginTop: 4 }}>Welcome to <span>Dettagli Auto.</span></p>
          </motion.div>

          <motion.div variants={fadeUp(0.88)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <a href="#services" className="abt-cta">
              Explore Our Services
              <svg className="cta-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}