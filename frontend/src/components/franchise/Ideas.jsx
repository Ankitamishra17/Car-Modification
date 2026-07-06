import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
const SERVICES = [
  {
    id: 1,
    slug: "detailing-devils",
    title: "Detailing Devils",
    desc: "A premium automotive detailing franchise offering world-class paint protection, ceramic coating, detailing, and luxury car care solutions with proven business support.",
    tag: "Premium Detailing",
    img: "https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg",
  },
  {
    id: 2,
    slug: "detailing-mafia",
    title: "Detailing Mafia",
    desc: "A performance-driven car care franchise focused on advanced detailing, paint correction, protection films, and customized vehicle enhancement services.",
    tag: "Performance Studio",
    img: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
  },
  {
    id: 3,
    slug: "steam-and-shine",
    title: "Steam & Shine",
    desc: "An eco-friendly steam car wash and detailing franchise delivering professional cleaning, sanitization, and premium vehicle care using sustainable technology.",
    tag: "Steam Detailing",
    img: "https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg",
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

export default function Ideas() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  const pad = (n) => String(n).padStart(2, "0");

  // ===== 3D tilt handlers (direct DOM manipulation, no re-render on mousemove) =====
  const handleTiltMove = useCallback((e) => {
    if (e.pointerType && e.pointerType !== "mouse") return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height; // 0 -> 1

    const rotateY = (px - 0.5) * MAX_TILT * 2; // left/right
    const rotateX = (0.5 - py) * MAX_TILT * 2; // up/down

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${SCALE_HOVER}, ${SCALE_HOVER}, ${SCALE_HOVER})`;

    const glare = card.querySelector(".svc-card-glare");
    if (glare) {
      glare.style.opacity = "1";
      glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.18), transparent 55%)`;
    }
  }, []);

  const handleTiltLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    const glare = card.querySelector(".svc-card-glare");
    if (glare) glare.style.opacity = "0";
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] py-14 sm:py-20 md:py-24 lg:py-[110px]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        .font-jost { font-family: 'Jost', sans-serif; }

        .svc-card {
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1);
          transition: transform 0.15s ease-out, box-shadow 0.3s ease;
          will-change: transform;
        }
        .svc-card-glare {
          transition: opacity 0.25s ease;
        }
        .svc-card-desc {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (hover: none) {
          .svc-card { transform: none !important; }
        }
      `}</style>

      <div className="relative z-[1] mx-auto w-full max-w-[1320px] px-4 sm:px-6">
        {/* Header */}
        <div
          ref={headRef}
          className="mb-7 grid grid-cols-1 items-end gap-y-4 sm:mb-9 md:mb-12 lg:grid-cols-[auto_1fr] lg:gap-x-12"
        >
          <div>
            <motion.div
              className="mb-3 flex items-center gap-3"
              variants={fadeUp(0)}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
            >
              <span className="h-px w-8 flex-shrink-0 bg-[#8C8C8C]" />
              <span className="font-dm text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C8C8C]">
                What We Offer
              </span>
            </motion.div>
            <motion.p
              className="font-bebas mb-0.5 text-[18px] leading-none tracking-[0.04em] text-[rgba(240,240,240,0.26)] sm:text-[24px] md:text-[32px]"
              variants={fadeUp(0.06)}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
            >
              Franchise Opportunities
            </motion.p>
            <motion.h2
              className="font-bebas text-[34px] leading-none tracking-[0.01em] text-[#F0F0F0] sm:text-[48px] md:text-[60px] lg:text-[72px]"
              variants={fadeUp(0.12)}
              initial="hidden"
              animate={headInView ? "visible" : "hidden"}
            >
              Choose the{" "}
              <span className="text-[#C0C0C0]">Perfect Franchise Idea</span>
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-col items-start pb-1 text-left lg:items-end lg:text-right"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={headInView ? "visible" : "hidden"}
          >
            <p className="font-jost mb-1 max-w-[440px] text-[12.5px] font-light italic leading-normal text-[rgba(240,240,240,0.4)] sm:text-[14px]">
              Build your automotive business with one of our three specialized
              franchise concepts. Each brand is designed for a different market
              segment while delivering exceptional quality and operational
              excellence.{" "}
            </p>
            <span className="font-dm text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[rgba(192,192,192,0.4)]">
              <b className="text-[#C0C0C0]">{pad(SERVICES.length)}</b> services
            </span>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          variants={fadeUp(0.32)}
          initial="hidden"
          animate={headInView ? "visible" : "hidden"}
        >
          {SERVICES.map((svc, i) => (
            <div
              className="h-[min(85vw,380px)] w-full [perspective:1000px] xs:h-[min(78vw,420px)] sm:h-[clamp(380px,42vw,440px)] lg:h-[clamp(360px,48vw,460px)]"
              key={svc.id}
            >
              <div
                className="svc-card relative h-full w-full overflow-hidden rounded-lg border border-[rgba(192,192,192,0.1)] bg-[#111] shadow-[0_11px_15px_-8px_rgba(0,0,0,0.2)] [transform-style:preserve-3d] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.85),0_0_0_1px_rgba(192,192,192,0.25)]"
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <img
                  className="block h-full w-full object-cover opacity-[0.55] grayscale-[20%] transition-opacity duration-400 [transform:translateZ(0px)] group-hover:opacity-[0.68]"
                  src={svc.img}
                  alt={svc.title}
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.6)_46%,rgba(5,5,5,0.1)_100%)]" />
                <div className="svc-card-glare pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay" />
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-[linear-gradient(to_right,transparent,#8C8C8C,transparent)]" />
                <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pt-[18px] [transform:translateZ(40px)] sm:px-6 sm:pb-7 sm:pt-6">
                  <span className="font-dm mb-3 inline-block rounded-[3px] border border-[rgba(192,192,192,0.2)] bg-[rgba(192,192,192,0.1)] px-[9px] py-[3px] text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#C0C0C0]">
                    {svc.tag}
                  </span>
                  <div className="font-bebas mb-2 text-[20px] leading-[1.1] tracking-[0.01em] text-[#F0F0F0] sm:text-[24px] md:text-[27px]">
                    {svc.title.trim()}
                  </div>
                  <div className="svc-card-desc font-jost mb-4 text-[12px] font-light leading-[1.7] text-[rgba(240,240,240,0.5)] sm:text-[13px]">
                    {svc.desc}
                  </div>
                </div>
                <span className="font-bebas pointer-events-none absolute right-5 top-[18px] select-none text-[36px] leading-none tracking-[0.02em] text-[rgba(192,192,192,0.08)] [transform:translateZ(20px)] sm:text-[44px] md:text-[52px]">
                  {pad(svc.id)}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
