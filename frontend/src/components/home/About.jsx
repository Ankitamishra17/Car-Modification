import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * About — AutoLuxe / Dettagli Auto
 * Fixed: image collage layout with proper z-index and positioning
 */

const IMG_MAIN  = "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=900";
const IMG_SMALL = "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500";

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

const fadeUp   = (delay = 0) => ({ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.4,0,0.2,1], delay } } });
const fadeLeft = (delay = 0) => ({ hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.4,0,0.2,1], delay } } });
const fadeRight= (delay = 0) => ({ hidden: { opacity: 0, x: 36  }, visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.4,0,0.2,1], delay } } });

export default function About() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} id="about" style={{ background: "#0A0A0A", position: "relative", overflow: "hidden", padding: "100px 0 110px" }}>

      {/* ambient glows */}
      <div style={{ position:"absolute", right:"-100px", top:"10%", width:500, height:500, borderRadius:"50%", background:"rgba(212,175,55,0.055)", filter:"blur(120px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", left:"-60px", bottom:"5%", width:340, height:340, borderRadius:"50%", background:"rgba(212,175,55,0.04)", filter:"blur(90px)", pointerEvents:"none" }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        .abt-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 1023px) {
          .abt-inner { grid-template-columns: 1fr; gap: 56px; }
        }
        @media (max-width: 520px) {
          .abt-inner { padding: 0 16px; gap: 44px; }
        }

        /* ── LEFT COLLAGE ── */
        /* Outer wrapper — defines total height including stat strip below */
        .collage-outer {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* The actual image collage box */
        .collage-box {
          position: relative;
          /* padding-right makes room for small image that pokes out right */
          padding-right: 52px;
          /* padding-bottom makes room for small image that pokes down */
          padding-bottom: 80px;
        }

        /* Gold offset frame — sits BEHIND main image */
        .collage-frame {
          position: absolute;
          top: 20px;
          left: -18px;
          right: 70px;
          bottom: 98px;
          border: 1.5px solid rgba(212,175,55,0.32);
          border-radius: 4px;
          z-index: 0;
          pointer-events: none;
        }

        /* Main image */
        .collage-main {
          position: relative;
          z-index: 1;
          width: 100%;
          display: block;
          border-radius: 4px;
          object-fit: cover;
          aspect-ratio: 4/5;
          max-height: 520px;
        }

        /* Small image — overlaps bottom-right corner of main */
        .collage-small-wrap {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 52%;
          z-index: 2;
          border: 3px solid #0A0A0A;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.65);
        }
        .collage-small {
          display: block;
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
        }

        /* "Since 1999" badge — top right of main image */
        .collage-badge {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 3;
          background: #D4AF37;
          color: #0A0A0A;
          padding: 10px 16px;
          border-radius: 4px;
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1.4;
          text-align: center;
          box-shadow: 0 8px 24px rgba(212,175,55,0.4);
        }

        /* Stat strip — sits below collage box, full width of left col */
        .abt-stats {
          display: flex;
          margin-top: 28px;
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 6px;
          overflow: hidden;
        }
        .abt-stat {
          flex: 1;
          padding: 16px 10px;
          border-right: 1px solid rgba(212,175,55,0.12);
          background: rgba(255,255,255,0.02);
          text-align: center;
        }
        .abt-stat:last-child { border-right: none; }
        .abt-stat-val {
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #D4AF37;
          line-height: 1;
        }
        .abt-stat-lbl {
          font-size: 9.5px;
          color: rgba(245,245,240,0.4);
          margin-top: 5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: 'Bai Jamjuree', sans-serif;
        }

        /* ── RIGHT TEXT ── */
        .abt-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .abt-eyebrow-line { width:36px; height:1.5px; background:#D4AF37; flex-shrink:0; }
        .abt-eyebrow-text {
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #D4AF37;
        }
        .abt-italian {
          font-family: 'Bai Jamjuree', sans-serif;
          font-style: italic;
          font-size: clamp(22px, 3.5vw, 34px);
          font-weight: 400;
          color: rgba(245,245,240,0.12);
          letter-spacing: 0.02em;
          line-height: 1.1;
          margin: 0 0 4px;
        }
        .abt-heading {
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          color: #F5F5F0;
          line-height: 1.1;
          margin: 0 0 24px;
        }
        .abt-heading span { color: #D4AF37; }
        .abt-subtitle {
          font-family: Georgia, serif;
          font-size: 15px;
          font-style: italic;
          color: rgba(245,245,240,0.5);
          margin-bottom: 26px;
          line-height: 1.65;
        }
        .abt-para {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 15px;
          line-height: 1.85;
          color: rgba(245,245,240,0.62);
          margin-bottom: 16px;
        }
        .abt-divider { width:44px; height:1.5px; background:linear-gradient(to right,#D4AF37,transparent); margin:26px 0; }
        .abt-philosophy {
          border-left: 2px solid #D4AF37;
          padding: 13px 18px;
          background: rgba(212,175,55,0.04);
          border-radius: 0 5px 5px 0;
          margin: 24px 0;
        }
        .abt-philosophy-it { font-family:'Bai Jamjuree',sans-serif; font-style:italic; font-size:16.5px; font-weight:500; color:#D4AF37; margin-bottom:4px; }
        .abt-philosophy-en { font-family:Georgia,serif; font-size:12.5px; color:rgba(245,245,240,0.4); letter-spacing:0.04em; }
        .abt-closing { margin-top:28px; padding-top:24px; border-top:1px solid rgba(255,255,255,0.07); }
        .abt-closing p { font-family:'Bai Jamjuree',sans-serif; font-size:12px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:rgba(245,245,240,0.32); line-height:2.1; }
        .abt-closing p span { color:rgba(212,175,55,0.75); }
        .abt-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          padding: 13px 26px;
          border-radius: 4px;
          background: transparent;
          border: 1px solid #D4AF37;
          color: #D4AF37;
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.3s, color 0.3s, box-shadow 0.3s;
        }
        .abt-cta:hover { background:#D4AF37; color:#0A0A0A; box-shadow:0 0 24px rgba(212,175,55,0.35); }
        .abt-cta:hover svg { transform: translateX(4px); }
        .abt-cta svg { transition: transform 0.3s; }

        @media (max-width: 520px) {
          .collage-box { padding-right: 36px; padding-bottom: 64px; }
          .collage-frame { right: 54px; bottom: 82px; left: -10px; top: 16px; }
          .collage-small-wrap { width: 50%; }
          .collage-badge { padding: 8px 10px; font-size: 9px; }
        }
      `}</style>

      <div className="abt-inner">

        {/* ══ LEFT — Collage ══ */}
        <motion.div
          className="collage-outer"
          variants={fadeLeft(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="collage-box">
            {/* Gold frame — z-index 0, behind everything */}
            <div className="collage-frame" />

            {/* Main image — z-index 1 */}
            <img
              src={IMG_MAIN}
              alt="Professional car polishing at AutoLuxe studio"
              className="collage-main"
              loading="lazy"
            />

            {/* Small overlay image — z-index 2 */}
            <motion.div
              className="collage-small-wrap"
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <img
                src={IMG_SMALL}
                alt="Ceramic coating application close-up"
                className="collage-small"
                loading="lazy"
              />
            </motion.div>

            {/* Badge — z-index 3 */}
            <motion.div
              className="collage-badge"
              variants={fadeUp(0.55)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Since<br />1999
            </motion.div>
          </div>

          {/* Stat strip — outside collage-box so it never overlaps images */}
          <motion.div
            className="abt-stats"
            variants={fadeUp(0.65)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
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
            <span className="abt-eyebrow-text">La Nostra Storia</span>
          </motion.div>

          <motion.p className="abt-italian" variants={fadeRight(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            La nostra storia
          </motion.p>
          <motion.h2 className="abt-heading" variants={fadeRight(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            About <span>Us</span>
          </motion.h2>

          <motion.p className="abt-subtitle" variants={fadeUp(0.3)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            Every remarkable automobile tells a story.<br />Our purpose is to preserve it.
          </motion.p>

          {PARAS.map((p, i) => (
            <motion.p key={i} className="abt-para" variants={fadeUp(0.36 + i * 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              {p}
            </motion.p>
          ))}

          <motion.div className="abt-divider" variants={fadeUp(0.66)} initial="hidden" animate={inView ? "visible" : "hidden"} />

          <motion.div className="abt-philosophy" variants={fadeUp(0.72)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="abt-philosophy-it">L'eccellenza è nei dettagli.</div>
            <div className="abt-philosophy-en">Excellence resides in the details.</div>
          </motion.div>

          <motion.div className="abt-closing" variants={fadeUp(0.8)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <p><span>It is crafted.</span> &nbsp;It is refined. &nbsp;It is preserved.</p>
            <p style={{ marginTop: 4 }}>Benvenuti a <span>Dettagli Auto.</span></p>
          </motion.div>

          <motion.div variants={fadeUp(0.88)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <a href="#services" className="abt-cta">
              Explore Our Services
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}