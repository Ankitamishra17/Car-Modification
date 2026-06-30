import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Services — AutoLuxe
 *
 * Layout:
 *  - Section heading with eyebrow
 *  - ONE card at a time sliding carousel
 *  - Full-bleed car image per service with gold overlay gradient
 *  - Left / Right arrow buttons + dot indicators + counter
 *  - Hover pauses auto-play
 *  - Seamless infinite loop
 *
 * Colors: #0A0A0A bg | #D4AF37 gold | #F5F5F0 white
 * Fonts : Bai Jamjuree + Georgia serif
 */

const SERVICES = [
  {
    id: 1,
    title: "PPF / Ceramic Coating",
    desc: "Paint protection that keeps the shine permanent. Our nano-ceramic technology bonds to your paintwork at a molecular level, delivering hydrophobic protection that lasts years.",
    tag: "Protection",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Refurbish & Restore",
    desc: "Bring tired metal back to factory-fresh form. From rust treatment to full panel restoration, we return every vehicle to its original glory — or better.",
    tag: "Restoration",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Upholstery / Paints",
    desc: "Interior trim and full-body paint, done by hand. Custom leather stitching, premium paint correction and colour-matched refinishing for a truly bespoke result.",
    tag: "Interior & Exterior",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Car Body Kits / Exhaust",
    desc: "Aggressive lines and a sound to match. We design and fit custom body kits, splitters, diffusers and exhaust systems that transform your vehicle's presence.",
    tag: "Styling",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Tuning & Mapping",
    desc: "Tuned performance, fitted exactly to you. ECU remapping, dyno tuning and performance accessories — every modification calibrated for your specific driving style.",
    tag: "Performance",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Paint Protection Film",
    desc: "Self-healing PPF film applied with precision to every panel. Near-invisible armour that protects against stone chips, scratches and environmental contaminants.",
    tag: "Protection",
    img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Paint Correction & Polishing",
    desc: "Multi-stage machine polishing to eliminate swirl marks, oxidation and fine scratches. We restore depth and clarity to your paintwork before any protective coating.",
    tag: "Detailing",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Deep Interior Detailing",
    desc: "Steam cleaning, leather conditioning, headliner refresh and odour elimination. A complete interior reset that leaves every surface spotless and protected.",
    tag: "Detailing",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop",
  },
];

const AUTO_INTERVAL = 3400;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay },
  },
});

export default function Services() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const total = SERVICES.length;

  const goTo = useCallback(
    (n) => {
      setIndex(((n % total) + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(index + 1), [index, goTo]);
  const goPrev = useCallback(() => goTo(index - 1), [index, goTo]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, goNext]);

  const handlePrev = () => {
    clearInterval(timerRef.current);
    goPrev();
  };
  const handleNext = () => {
    clearInterval(timerRef.current);
    goNext();
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      style={{
        background: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0 110px",
      }}
    >
      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          left: "15%",
          top: "-80px",
          width: 440,
          height: 440,
          borderRadius: "50%",
          background: "rgba(212,175,55,0.07)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "5%",
          bottom: "-60px",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(212,175,55,0.05)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        .svc-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* ── Heading ── */
        .svc-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .svc-eyebrow-line { width: 32px; height: 1.5px; background: #D4AF37; flex-shrink: 0; }
        .svc-eyebrow-text {
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #D4AF37;
        }
        .svc-title-ghost {
          font-family: 'Bai Jamjuree', sans-serif;
          font-style: italic;
          font-size: clamp(20px, 3vw, 30px);
          font-weight: 400;
          color: rgba(245,245,240,0.08);
          line-height: 1;
          margin: 0 0 4px;
        }
        .svc-title {
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 700;
          color: #F5F5F0;
          line-height: 1.1;
          margin: 0 0 10px;
        }
        .svc-title span { color: #D4AF37; }
        .svc-subtitle {
          font-family: Georgia, serif;
          font-size: 14px;
          font-style: italic;
          color: rgba(245,245,240,0.4);
          margin-bottom: 50px;
          max-width: 480px;
        }

        /* ── Carousel Stage ── */
        .svc-stage {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          border: 1px solid rgba(212,175,55,0.12);
        }
        .svc-track {
          display: flex;
          transition: transform 0.48s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ── Card ── */
        .svc-card {
          flex: 0 0 100%;
          position: relative;
          height: 440px;
          overflow: hidden;
          background: #111;
          cursor: default;
        }
        .svc-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0.55;
          transition: opacity 0.4s, transform 0.6s ease;
        }
        .svc-stage:hover .svc-card-img {
          opacity: 0.65;
          transform: scale(1.02);
        }
        .svc-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(5,5,5,0.98) 0%,
            rgba(5,5,5,0.55) 50%,
            rgba(5,5,5,0.15) 100%
          );
        }
        .svc-card-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, #D4AF37, transparent);
        }
        .svc-card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 32px 36px 40px;
        }
        .svc-card-tag {
          display: inline-block;
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #D4AF37;
          background: rgba(212,175,55,0.12);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 3px;
          padding: 3px 10px;
          margin-bottom: 14px;
        }
        .svc-card-title {
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 700;
          color: #F5F5F0;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .svc-card-desc {
          font-family: Georgia, serif;
          font-size: 14px;
          line-height: 1.8;
          color: rgba(245,245,240,0.52);
          margin-bottom: 20px;
          max-width: 600px;
        }
        .svc-card-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.65);
          text-decoration: none;
          transition: color 0.2s, gap 0.2s;
          cursor: pointer;
        }
        .svc-stage:hover .svc-card-link { color: #D4AF37; gap: 11px; }

        .svc-card-num {
          position: absolute;
          top: 22px; right: 26px;
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 60px;
          font-weight: 700;
          color: rgba(212,175,55,0.07);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* ── Controls ── */
        .svc-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 32px;
        }
        .svc-arrow {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.3);
          background: rgba(212,175,55,0.05);
          color: #D4AF37;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, color 0.25s, box-shadow 0.25s;
          flex-shrink: 0;
        }
        .svc-arrow:hover {
          background: #D4AF37;
          border-color: #D4AF37;
          color: #0A0A0A;
          box-shadow: 0 0 18px rgba(212,175,55,0.35);
        }
        .svc-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .svc-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(212,175,55,0.2);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, width 0.3s, border-radius 0.3s;
        }
        .svc-dot.active {
          background: #D4AF37;
          width: 22px;
          border-radius: 3px;
        }
        .svc-dot:hover:not(.active) { background: rgba(212,175,55,0.45); }
        .svc-counter {
          font-family: 'Bai Jamjuree', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(212,175,55,0.5);
          min-width: 48px;
          text-align: center;
        }

        @media (max-width: 600px) {
          .svc-inner { padding: 0 16px; }
          .svc-card { height: 520px; }
          .svc-card-content { padding: 24px 20px 30px; }
          .svc-card-desc { font-size: 13px; }
        }
      `}</style>

      <div className="svc-inner">
        {/* ── Heading ── */}
        <div ref={headRef}>
          <motion.div
            className="svc-eyebrow"
            variants={fadeUp(0)}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
          >
            <span className="svc-eyebrow-line" />
            <span className="svc-eyebrow-text">What We Offer</span>
          </motion.div>
          <motion.p
            className="svc-title-ghost"
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
          >
            I nostri servizi
          </motion.p>
          <motion.h2
            className="svc-title"
            variants={fadeUp(0.14)}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
          >
            Our <span>Services</span>
          </motion.h2>
          <motion.p
            className="svc-subtitle"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
          >
            Eight disciplines. One unwavering standard. Every procedure carried
            out with precision and respect for the automobile.
          </motion.p>
        </div>

        {/* ── Carousel ── */}
        <motion.div
          variants={fadeUp(0.28)}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
        >
          <div
            className="svc-stage"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Sliding track */}
            <div
              className="svc-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SERVICES.map((svc, i) => (
                <div className="svc-card" key={svc.id}>
                  <img
                    className="svc-card-img"
                    src={svc.img}
                    alt={svc.title}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="svc-card-overlay" />
                  <div className="svc-card-topline" />
                  <div className="svc-card-content">
                    <span className="svc-card-tag">{svc.tag}</span>
                    <div className="svc-card-title">{svc.title}</div>
                    <div className="svc-card-desc">{svc.desc}</div>
                    <a href="#contact" className="svc-card-link">
                      Book this service
                      <svg
                        width="13"
                        height="13"
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
                  </div>
                  <span className="svc-card-num">0{svc.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Controls ── */}
          <div className="svc-controls">
            {/* Prev */}
            <button
              className="svc-arrow"
              onClick={handlePrev}
              aria-label="Previous service"
            >
              <svg
                width="18"
                height="18"
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

            {/* Dots */}
            <div className="svc-dots" role="tablist" aria-label="Service slides">
              {SERVICES.map((_, i) => (
                <button
                  key={i}
                  className={`svc-dot${index === i ? " active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to service ${i + 1}`}
                  role="tab"
                  aria-selected={index === i}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="svc-counter">
              {pad(index + 1)} / {pad(total)}
            </span>

            {/* Next */}
            <button
              className="svc-arrow"
              onClick={handleNext}
              aria-label="Next service"
            >
              <svg
                width="18"
                height="18"
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
        </motion.div>
      </div>
    </section>
  );
}