import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const IMG_MAIN =
  "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1000";

const SPEC = [
  { tag: "01", value: "25+", label: "Years of Expertise", note: "Since 1999" },
  { tag: "02", value: "2020", label: "Studio Established", note: "Founded" },
  { tag: "03", value: "9,000+", label: "Automobiles Detailed", note: "To date" },
];

const PARAS = [
  "Founded in 2020, Dettagli Auto was born from a lifelong passion for automotive craftsmanship and the pursuit of perfection. Behind the brand stands Sheikh Yasir, whose journey in detailing began in 1999 — spanning over twenty-five years across international markets, including the Middle East.",
  "At Dettagli Auto, detailing is not regarded as a service — it is considered a craft. Every vehicle entrusted to our studio is approached individually, without compromise or haste. Each surface is examined, every material understood, and every procedure executed with meticulous attention to detail.",
  "Since our establishment, we have had the privilege of detailing, restoring and protecting more than 9,000 automobiles. This milestone is not measured simply by numbers, but by the confidence our clients continue to place in our work.",
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay },
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
        padding: "110px 0 0",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .da-wrap { max-width: 1320px; margin: 0 auto; padding: 0 24px; }
        @media (max-width: 520px) { .da-wrap { padding: 0 16px; } }

        /* ===== Masthead row: heading left, subtitle right, shared baseline ===== */
        .da-masthead {
          display: grid;
          grid-template-columns: auto 1fr;
          column-gap: 48px;
          align-items: end;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(192,192,192,0.14);
        }
        @media (max-width: 900px) {
          .da-masthead { grid-template-columns: 1fr; row-gap: 22px; align-items: start; }
        }

        .da-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .da-eyebrow-line { width: 34px; height: 1px; background: #8C8C8C; flex-shrink: 0; }
        .da-eyebrow-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.26em; text-transform: uppercase; color: #8C8C8C;
        }

        .da-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 9vw, 128px);
          color: #F0F0F0; line-height: 0.86;
          margin: 0; letter-spacing: 0.005em;
          white-space: nowrap;
        }
        .da-heading span {
          -webkit-text-stroke: 1.5px #C0C0C0;
          color: transparent;
        }
        @media (max-width: 900px) { .da-heading { white-space: normal; } }

        .da-subtitle-block {
          display: flex; flex-direction: column; align-items: flex-end;
          text-align: right;
          padding-bottom: 6px;
        }
        @media (max-width: 900px) { .da-subtitle-block { align-items: flex-start; text-align: left; } }

        .da-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 16px; font-weight: 300; font-style: italic;
          color: rgba(240,240,240,0.5);
          line-height: 1.6;
          max-width: 380px;
          margin: 0 0 14px;
        }

        .da-cta {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 26px;
          border-radius: 3px; background: transparent;
          border: 1px solid #8C8C8C; color: #C0C0C0;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none; width: fit-content;
          transition: background 0.25s, color 0.25s;
        }
        .da-cta:hover { background: #C0C0C0; color: #0B0B0B; }
        .da-cta:hover .da-arrow { transform: translateX(4px); }
        .da-arrow { transition: transform 0.25s; }

        /* ===== Body row: image + copy ===== */
        .da-body {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 76px;
          padding: 64px 0 96px;
        }
        @media (max-width: 1023px) {
          .da-body { grid-template-columns: 1fr; gap: 48px; }
        }

        /* --- image with corner-bracket frame (precision / viewfinder motif) --- */
        .da-visual { position: relative; }

        .da-bracket {
          position: absolute; width: 26px; height: 26px;
          border-color: #C0C0C0; border-style: solid; border-width: 0;
          z-index: 2; pointer-events: none;
        }
        .da-bracket.tl { top: -12px; left: -12px; border-top-width: 1.5px; border-left-width: 1.5px; }
        .da-bracket.tr { top: -12px; right: -12px; border-top-width: 1.5px; border-right-width: 1.5px; }
        .da-bracket.bl { bottom: -12px; left: -12px; border-bottom-width: 1.5px; border-left-width: 1.5px; }
        .da-bracket.br { bottom: -12px; right: -12px; border-bottom-width: 1.5px; border-right-width: 1.5px; }

        .da-imgwrap {
          position: relative; width: 100%;
          border-radius: 2px; overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
        }
        .da-img {
          display: block; width: 100%; height: 100%;
          object-fit: cover; aspect-ratio: 4/5;
          filter: grayscale(20%) contrast(1.05);
          transition: transform 0.9s cubic-bezier(0.4,0,0.2,1);
        }
        .da-imgwrap:hover .da-img { transform: scale(1.06); }
        .da-imgwrap::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(11,11,11,0.55), transparent 40%);
          pointer-events: none;
        }

        .da-imgtag {
          position: absolute; left: 18px; bottom: 18px; z-index: 2;
          display: flex; align-items: center; gap: 8px;
        }
        .da-imgtag-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #C0C0C0;
          box-shadow: 0 0 0 3px rgba(192,192,192,0.15);
        }
        .da-imgtag-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(240,240,240,0.75);
        }

        .da-badge {
          position: absolute; top: 20px; right: 20px; z-index: 2;
          width: 68px; height: 68px;
          display: flex; align-items: center; justify-content: center;
        }
        .da-badge-spin { position: absolute; inset: 0; animation: da-rotate 16s linear infinite; }
        @keyframes da-rotate { to { transform: rotate(360deg); } }
        .da-badge-core {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(11,11,11,0.7); backdrop-filter: blur(2px);
          border: 1px solid rgba(192,192,192,0.5);
          display: flex; align-items: center; justify-content: center;
          position: relative; z-index: 1;
        }
        .da-badge-core svg { width: 13px; height: 13px; }

        /* --- copy column --- */
        .da-copy { display: flex; flex-direction: column; justify-content: center; }

        .da-para {
          font-family: 'Jost', sans-serif;
          font-size: 15px; font-weight: 300;
          line-height: 1.85; color: rgba(240,240,240,0.58);
          margin: 0 0 18px; max-width: 560px;
        }

        .da-quote {
          margin: 8px 0 28px;
          padding: 22px 26px;
          border-left: 1px solid #C0C0C0;
          background: rgba(192,192,192,0.04);
        }
        .da-quote-main {
          font-family: 'Jost', sans-serif;
          font-style: italic; font-weight: 400;
          font-size: clamp(20px, 2.4vw, 26px);
          color: #C0C0C0; line-height: 1.35;
          margin-bottom: 8px;
        }
        .da-quote-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(240,240,240,0.32);
        }

        .da-closing p {
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(240,240,240,0.28); line-height: 2.2;
          margin: 0;
        }
        .da-closing p span { color: rgba(192,192,192,0.7); }

        /* ===== Signature element: spec plate strip ===== */
        .da-plate {
          border-top: 1px solid rgba(192,192,192,0.14);
          background: linear-gradient(180deg, rgba(192,192,192,0.03), transparent 60%);
        }
        .da-plate-inner {
          max-width: 1320px; margin: 0 auto; padding: 0 24px;
          display: grid; grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 520px) { .da-plate-inner { padding: 0 16px; } }
        @media (max-width: 760px) { .da-plate-inner { grid-template-columns: 1fr; } }

        .da-spec {
          position: relative;
          padding: 40px 36px 44px;
          border-left: 1px solid rgba(192,192,192,0.14);
        }
        .da-spec:first-child { border-left: none; }
        @media (max-width: 760px) {
          .da-spec { border-left: none; border-top: 1px solid rgba(192,192,192,0.14); padding: 32px 4px; }
          .da-spec:first-child { border-top: none; }
        }

        .da-spec-top {
          display: flex; align-items: baseline; justify-content: space-between;
          margin-bottom: 22px;
        }
        .da-spec-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em;
          color: rgba(240,240,240,0.28);
        }
        .da-spec-note {
          font-family: 'DM Sans', sans-serif;
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(240,240,240,0.28);
        }
        .da-spec-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(40px, 4.5vw, 56px);
          color: #F0F0F0; line-height: 1; letter-spacing: 0.01em;
          margin-bottom: 10px;
        }
        .da-spec-label {
          font-family: 'Jost', sans-serif;
          font-size: 12.5px; font-weight: 300;
          color: rgba(240,240,240,0.42);
          letter-spacing: 0.03em;
        }
        .da-spec-rule {
          position: absolute; left: 36px; right: 36px; bottom: 0;
          height: 1px; background: #C0C0C0; transform-origin: left;
        }
        @media (max-width: 760px) { .da-spec-rule { left: 4px; right: 4px; } }
      `}</style>

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          right: -100,
          top: "6%",
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
          bottom: "20%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(160,160,160,0.04)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div className="da-wrap">
        {/* ══ Masthead ══ */}
        <div className="da-masthead">
          <div>
            <motion.div
              className="da-eyebrow"
              variants={fadeUp(0.05)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <span className="da-eyebrow-line" />
              <span className="da-eyebrow-text">Our Story</span>
            </motion.div>
            <motion.h2
              className="da-heading"
              variants={fadeUp(0.12)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              About <span>Us</span>
            </motion.h2>
          </div>

          <motion.div
            className="da-subtitle-block"
            variants={fadeUp(0.24)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="da-subtitle">
              Every remarkable automobile tells a story. Our purpose is to
              preserve it.
            </p>
            <a href="/services/ppf" className="da-cta">
              Explore Our Services
              <svg
                className="da-arrow"
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

        {/* ══ Body: image + copy ══ */}
        <div className="da-body">
          <motion.div
            className="da-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <span className="da-bracket tl" />
            <span className="da-bracket tr" />
            <span className="da-bracket bl" />
            <span className="da-bracket br" />

            <div className="da-imgwrap">
              <motion.img
                src={IMG_MAIN}
                alt="Dettagli Auto craftsmanship"
                className="da-img"
                loading="lazy"
                initial={{ scale: 1.2 }}
                animate={inView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              />

              <div className="da-imgtag">
                <span className="da-imgtag-dot" />
                <span className="da-imgtag-text">Est. 1999 — Sheikh Yasir</span>
              </div>

              <div className="da-badge">
                <svg className="da-badge-spin" viewBox="0 0 68 68">
                  <defs>
                    <path
                      id="da-circle-path"
                      d="M 34,34 m -25,0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
                    />
                  </defs>
                  <text
                    fill="#C0C0C0"
                    fontSize="6.6"
                    fontFamily="'DM Sans', sans-serif"
                    fontWeight="600"
                    letterSpacing="2"
                  >
                    <textPath href="#da-circle-path" startOffset="0%">
                      DETTAGLI AUTO • PRECISION •
                    </textPath>
                  </text>
                </svg>
                <div className="da-badge-core">
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
              </div>
            </div>
          </motion.div>

          <div className="da-copy">
            {PARAS.slice(0, 2).map((p, i) => (
              <motion.p
                key={i}
                className="da-para"
                variants={fadeUp(0.3 + i * 0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              className="da-quote"
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="da-quote-main">
                "Excellence resides in the details."
              </div>
              <div className="da-quote-sub">
                Every surface examined. Every procedure executed without
                compromise.
              </div>
            </motion.div>

            <motion.p
              className="da-para"
              variants={fadeUp(0.58)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {PARAS[2]}
            </motion.p>

            <motion.div
              className="da-closing"
              variants={fadeUp(0.66)}
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
          </div>
        </div>
      </div>

      {/* ══ Signature: spec plate strip ══ */}
      <div className="da-plate">
        <div className="da-plate-inner">
          {SPEC.map((s, i) => (
            <motion.div
              key={s.tag}
              className="da-spec"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.5 + i * 0.12,
              }}
            >
              <div className="da-spec-top">
                <span className="da-spec-tag">{s.tag}</span>
                <span className="da-spec-note">{s.note}</span>
              </div>
              <div className="da-spec-value">{s.value}</div>
              <div className="da-spec-label">{s.label}</div>
              <motion.span
                className="da-spec-rule"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.65 + i * 0.12,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}