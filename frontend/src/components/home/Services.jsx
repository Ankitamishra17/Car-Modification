import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
const SERVICES = [
  {
    id: 1,
    title: "PPF ",
    desc: "Paint protection that keeps the shine permanent. Our nano-ceramic technology bonds to your paintwork at a molecular level, delivering hydrophobic protection that lasts years.",
    tag: "Protection",
    img: "https://images.pexels.com/photos/20042056/pexels-photo-20042056.jpeg",
  },
  {
    id: 2,
    title: "Restore",
    desc: "Bring tired metal back to factory-fresh form. From rust treatment to full panel restoration, we return every vehicle to its original glory — or better.",
    tag: "Restoration",
    img: "https://images.pexels.com/photos/4489707/pexels-photo-4489707.jpeg",
  },
  {
    id: 3,
    title: "Upholstery",
    desc: "Interior trim and full-body paint, done by hand. Custom leather stitching, premium paint correction and colour-matched refinishing for a truly bespoke result.",
    tag: "Interior & Exterior",
    img: "https://images.pexels.com/photos/31014447/pexels-photo-31014447.jpeg",
  },
  {
    id: 4,
    title: "Car Body Kits",
    desc: "Aggressive lines and a sound to match. We design and fit custom body kits, splitters, diffusers and exhaust systems that transform your vehicle's presence.",
    tag: "Styling",
    img: "https://images.pexels.com/photos/16883139/pexels-photo-16883139.jpeg",
  },
  {
    id: 5,
    title: "Tuning & Mapping",
    desc: "Tuned performance, fitted exactly to you. ECU remapping, dyno tuning and performance accessories — every modification calibrated for your specific driving style.",
    tag: "Performance",
    img: "https://images.pexels.com/photos/9702356/pexels-photo-9702356.jpeg",
  },
  {
    id: 6,
    title: "Exhaust",
    desc: "Exhaust cleaning and restoration. We remove soot, rust and corrosion to restore the original colour and function of your exhaust system.",
    tag: "Maintenance",
    img: "https://images.pexels.com/photos/14217549/pexels-photo-14217549.jpeg",
  },
  {
    id: 7,
    title: " Paints",
    desc: "We use the highest quality paints and materials to ensure a perfect finish. We offer a range of services including paint correction, touch ups and full repaints.",
    tag: "Paint",
    img: "https://images.pexels.com/photos/11139244/pexels-photo-11139244.jpeg",
  },
  {
    id: 8,
    title: "Refurbish ",
    desc: "We offer a range of services including paint correction, touch ups and full repaints.",
    tag: "Refurbish",
    img: "https://images.pexels.com/photos/10894207/pexels-photo-10894207.jpeg",
  },
  {
    id: 9,
    title: "Ceramic Coating",
    desc: "We offer a range of services including paint correction, touch ups and full repaints.",
    tag: "Ceramic Coating",
    img: "https://images.pexels.com/photos/20051458/pexels-photo-20051458.jpeg",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay },
  },
});

// ===== 3D tilt config =====
const MAX_TILT = 12; // degrees
const SCALE_HOVER = 1.035;

export default function Services() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const trackRef = useRef(null);

  const [activeTag, setActiveTag] = useState("All");
  const [progress, setProgress] = useState(0);

  const tags = useMemo(() => {
    const seen = [];
    SERVICES.forEach((s) => {
      if (!seen.includes(s.tag)) seen.push(s.tag);
    });
    return ["All", ...seen];
  }, []);

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? SERVICES
        : SERVICES.filter((s) => s.tag === activeTag),
    [activeTag],
  );

  const pad = (n) => String(n).padStart(2, "0");

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    updateProgress();
  }, [activeTag, updateProgress]);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".svc-card");
    const step = card
      ? card.getBoundingClientRect().width + 20
      : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // ===== 3D tilt handlers (direct DOM manipulation, no re-render on mousemove) =====
  const handleTiltMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height;  // 0 -> 1

    const rotateY = (px - 0.5) * MAX_TILT * 2;       // left/right
    const rotateX = (0.5 - py) * MAX_TILT * 2;       // up/down

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${SCALE_HOVER}, ${SCALE_HOVER}, ${SCALE_HOVER})`;

    const glare = card.querySelector(".svc-card-glare");
    if (glare) {
      glare.style.opacity = "1";
      glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.18), transparent 55%)`;
    }
  }, []);

  const handleTiltLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    const glare = card.querySelector(".svc-card-glare");
    if (glare) glare.style.opacity = "0";
  }, []);

  return (
    <section
      style={{
        background: "#1A1A1A",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0 110px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .svc-inner { max-width: 1320px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        @media (max-width: 520px) { .svc-inner { padding: 0 16px; } }

        /* ===== Header row: title left, subtitle+meta right ===== */
        .svc-headrow {
          display: grid; grid-template-columns: auto 1fr;
          column-gap: 48px; align-items: end;
          margin-bottom: 40px;
        }
        @media (max-width: 900px) { .svc-headrow { grid-template-columns: 1fr; row-gap: 18px; margin-bottom: 28px; } }

        .svc-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .svc-eyebrow-line { width: 32px; height: 1px; background: #8C8C8C; flex-shrink: 0; }
        .svc-eyebrow-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase; color: #8C8C8C;
        }
        .svc-title-ghost {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(20px, 3vw, 32px);
          color: rgba(240,240,240,0.06);
          line-height: 1; margin: 0 0 2px; letter-spacing: 0.04em;
        }
        .svc-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(40px, 6vw, 72px);
          color: #F0F0F0; line-height: 1;
          margin: 0; letter-spacing: 0.01em;
        }
        .svc-title span { color: #C0C0C0; }

        .svc-headmeta { display: flex; flex-direction: column; align-items: flex-end; text-align: right; padding-bottom: 4px; }
        @media (max-width: 900px) { .svc-headmeta { align-items: flex-start; text-align: left; } }
        .svc-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 14px; font-weight: 300; font-style: italic;
          color: rgba(240,240,240,0.4);
          max-width: 440px; margin: 0 0 4px;
        }
        @media (max-width: 520px) { .svc-subtitle { font-size: 13px; } }
        .svc-count {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(192,192,192,0.4);
        }
        .svc-count b { color: #C0C0C0; }

        /* ===== Filter chips ===== */
        .svc-chips {
          display: flex; flex-wrap: nowrap; gap: 10px;
          margin-bottom: 32px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(192,192,192,0.1);
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .svc-chips::-webkit-scrollbar { display: none; }
        @media (max-width: 640px) {
          .svc-chips { flex-wrap: nowrap; margin-bottom: 24px; padding-bottom: 20px; margin-left: -16px; margin-right: -16px; padding-left: 16px; padding-right: 16px; }
        }
        .svc-chip {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(240,240,240,0.5);
          background: transparent;
          border: 1px solid rgba(192,192,192,0.18);
          border-radius: 0px; padding: 8px 16px;
          cursor: pointer; white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .svc-chip:hover { border-color: rgba(192,192,192,0.5); color: #F0F0F0; }
        .svc-chip.active { background: #C0C0C0; border-color: #C0C0C0; color: #0B0B0B; }

        /* ===== Filmstrip wrapper (holds track + floating arrows) ===== */
        .svc-track-wrap { position: relative; }
        @media (max-width: 640px) {
          .svc-track-wrap { margin-left: -16px; margin-right: -16px; }
        }

        .svc-track {
          display: flex; gap: 20px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          padding: 20px 4px 28px;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .svc-track::-webkit-scrollbar { display: none; }
        @media (max-width: 640px) {
          .svc-track { padding-left: 16px; padding-right: 16px; }
        }

        /* Wrapper gives each card its own 3D perspective context */
        .svc-card-wrap {
          flex: 0 0 auto;
          width: clamp(260px, 30vw, 340px);
          height: 460px;
          perspective: 1000px;
          scroll-snap-align: start;
        }
        @media (max-width: 640px) {
          .svc-card-wrap { width: 78vw; height: 440px; }
        }

        .svc-card {
          position: relative;
          width: 100%; height: 100%;
          border-radius: 8px; overflow: hidden;
          border: 1px solid rgba(192,192,192,0.1);
          background: #111;
          box-shadow: 0 11px 15px -8px rgba(0,0,0,0.2);
          transform-style: preserve-3d;
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1);
          transition: transform 0.15s ease-out, box-shadow 0.3s ease;
          will-change: transform;
        }
        .svc-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.85), 0 0 0 1px rgba(192,192,192,0.25);
        }

        .svc-card-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          opacity: 0.55; filter: grayscale(20%);
          transition: opacity 0.4s;
          transform: translateZ(0px);
        }
        .svc-card:hover .svc-card-img { opacity: 0.68; }
        .svc-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.6) 46%, rgba(5,5,5,0.1) 100%);
        }
        .svc-card-glare {
          position: absolute; inset: 0;
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
        .svc-card-topline {
          position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(to right, transparent, #8C8C8C, transparent);
        }
        .svc-card-content {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 26px 24px 28px;
          transform: translateZ(40px);
        }
        .svc-card-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 9.5px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #C0C0C0;
          background: rgba(192,192,192,0.1);
          border: 1px solid rgba(192,192,192,0.2);
          border-radius: 3px; padding: 3px 9px; margin-bottom: 12px;
        }
        .svc-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(22px, 2.6vw, 27px);
          color: #F0F0F0; margin-bottom: 8px; line-height: 1.1; letter-spacing: 0.01em;
        }
        .svc-card-desc {
          font-family: 'Jost', sans-serif;
          font-size: 13px; font-weight: 300;
          line-height: 1.7; color: rgba(240,240,240,0.5);
          margin-bottom: 16px;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
        }
        .svc-card-link {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(192,192,192,0.55); text-decoration: none;
          transition: color 0.2s, gap 0.2s; cursor: pointer;
        }
        .svc-card:hover .svc-card-link { color: #C0C0C0; gap: 11px; }
        .svc-card-num {
          position: absolute; top: 18px; right: 20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 52px; color: rgba(192,192,192,0.08);
          line-height: 1; pointer-events: none; user-select: none; letter-spacing: 0.02em;
          transform: translateZ(20px);
        }

        /* ===== Floating overlay arrows (mobile-focused, sits on track) ===== */
        .svc-float-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 38px; height: 38px; border-radius: 4px;
          border: 1px solid rgba(192,192,192,0.3);
          background: rgba(11,11,11,0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: #F0F0F0;
          display: none;
          align-items: center; justify-content: center;
          cursor: pointer; z-index: 3;
          transition: background 0.25s, border-color 0.25s, opacity 0.25s;
        }
        .svc-float-arrow.left { left: 8px; }
        .svc-float-arrow.right { right: 8px; }
        .svc-float-arrow:disabled { opacity: 0; pointer-events: none; }
        .svc-float-arrow:active { background: #C0C0C0; color: #0B0B0B; }

        @media (max-width: 900px) {
          .svc-float-arrow { display: flex; }
        }

        /* ===== Controls: progress rail + arrows ===== */
        .svc-controls {
          display: grid; grid-template-columns: 1fr auto;
          align-items: center; gap: 24px;
          margin-top: 28px;
        }
        @media (max-width: 640px) { .svc-controls { grid-template-columns: 1fr; gap: 14px; margin-top: 20px; } }

        .svc-rail { position: relative; height: 2px; background: rgba(192,192,192,0.12); border-radius: 2px; }
        .svc-rail-fill {
          position: absolute; top: 0; left: 0; height: 100%;
          background: #C0C0C0; border-radius: 2px;
          transition: width 0.15s linear;
        }

        .svc-navrow { display: flex; align-items: center; gap: 14px; justify-content: flex-end; }
        @media (max-width: 640px) { .svc-navrow { justify-content: center; } }
        .svc-counter {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; color: rgba(192,192,192,0.45);
          min-width: 52px; text-align: center;
        }

        /* Hide the bottom round arrow buttons on mobile since floating arrows already handle nav */
        .svc-arrow {
          width: 40px; height: 40px; border-radius: 4px;
          border: 1px solid rgba(192,192,192,0.25);
          background: rgba(192,192,192,0.04);
          color: #8C8C8C;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          flex-shrink: 0;
        }
        .svc-arrow:hover { background: #C0C0C0; border-color: #C0C0C0; color: #0B0B0B; }
        .svc-arrow:disabled { opacity: 0.3; cursor: default; }
        .svc-arrow:disabled:hover { background: rgba(192,192,192,0.04); border-color: rgba(192,192,192,0.25); color: #8C8C8C; }
        @media (max-width: 900px) { .svc-arrow { display: none; } }
      `}</style>

      <div className="svc-inner">
        {/* Header */}
        <div ref={headRef} className="svc-headrow">
          <div>
            <motion.div
              className="svc-eyebrow"
              variants={fadeUp(0)}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
            >
              <span className="svc-eyebrow-line" />
              <span className="svc-eyebrow-text">What We Offer</span>
            </motion.div>
            <motion.p className="svc-title-ghost" variants={fadeUp(0.06)} initial="hidden" animate={headInView ? "visible" : "hidden"}>
              PREMIUM PROTECTION
            </motion.p>
            <motion.h2
              className="svc-title"
              variants={fadeUp(0.12)}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
            >
              Our <span>Services</span>
            </motion.h2>
          </div>

          <motion.div
            className="svc-headmeta"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
          >
            <p className="svc-subtitle">
Dodici discipline. Un solo standard, senza compromessi. Ogni intervento è eseguito con precisione assoluta e nel massimo rispetto dell'automobile.            </p>
            <span className="svc-count"><b>{pad(filtered.length)}</b> services{activeTag !== "All" ? ` — ${activeTag}` : ""}</span>
          </motion.div>
        </div>

        {/* Filter chips */}
        <motion.div
          className="svc-chips"
          variants={fadeUp(0.26)}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
        >
          {tags.map((t) => (
            <button
              key={t}
              className={`svc-chip${activeTag === t ? " active" : ""}`}
              onClick={() => setActiveTag(t)}
            >
              {t}
            </button>
          ))}
        </motion.div>

        {/* Filmstrip */}
        <motion.div variants={fadeUp(0.32)} initial="hidden" animate={headInView ? "visible" : "hidden"}>
          <div className="svc-track" ref={trackRef} onScroll={updateProgress}>
            {filtered.map((svc, i) => (
              <div className="svc-card-wrap" key={svc.id}>
                <div
                  className="svc-card"
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                >
                  <img className="svc-card-img" src={svc.img} alt={svc.title} loading={i < 3 ? "eager" : "lazy"} />
                  <div className="svc-card-overlay" />
                  <div className="svc-card-glare" />
                  <div className="svc-card-topline" />
                  <div className="svc-card-content">
                    <span className="svc-card-tag">{svc.tag}</span>
                    <div className="svc-card-title">{svc.title.trim()}</div>
                    <div className="svc-card-desc">{svc.desc}</div>
                    <Link to="/contact" className="svc-card-link">
                      Book this service
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <span className="svc-card-num">{pad(svc.id)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="svc-controls">
            <div className="svc-rail">
              <div
                className="svc-rail-fill"
                style={{ width: `${Math.max(6, progress * 100)}%` }}
              />
            </div>
            <div className="svc-navrow">
              <span className="svc-counter">
                {pad(Math.round(progress * (filtered.length - 1)) + 1)} /{" "}
                {pad(filtered.length)}
              </span>
              <button
                className="svc-arrow"
                onClick={() => scrollByCards(-1)}
                disabled={progress <= 0.01}
                aria-label="Scroll left"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="svc-arrow"
                onClick={() => scrollByCards(1)}
                disabled={progress >= 0.99}
                aria-label="Scroll right"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
