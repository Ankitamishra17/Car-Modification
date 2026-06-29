import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

/**
 * Hero — AutoLuxe
 *
 * Background video: royalty-free from Mixkit (no download needed, direct CDN URL)
 * Fallback poster: thumbnail from same source
 *
 * Fonts: 'Bai Jamjuree' (load in index.html)
 * Colors: Black #0A0A0A | Gold #D4AF37 | White #F5F5F0
 */

// ✅ Free royalty-free video — Mixkit License (no attribution required)
// "Man carefully polishing the front of a shiny car"
const VIDEO_SRC   = "https://assets.mixkit.co/videos/47834/47834-360.mp4";
const POSTER_SRC  = "https://assets.mixkit.co/videos/47834/47834-thumb-360-3.jpg";

// Stat strip — edit as needed
const STATS = [
  { value: "5+",   label: "Years of excellence" },
  { value: "4",    label: "Cities served" },
  { value: "100%", label: "In-house craftsmanship" },
];

export default function Hero() {
  const videoRef        = useRef(null);
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
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-[#0A0A0A] font-serif"
      aria-label="Hero"
    >
      {/* ── Video / poster background ── */}
      <div className="absolute inset-0 z-0">
        {!reducedMotion ? (
          <video
            ref={videoRef}
            className={`h-full w-full object-cover transition-opacity duration-[1400ms] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setLoaded(true)}
          />
        ) : (
          <img
            src={POSTER_SRC}
            alt="Car polishing and detailing at AutoLuxe"
            className="h-full w-full object-cover"
          />
        )}

        {/* Multi-layer tint for text readability */}
        <div className="absolute inset-0 bg-[#0A0A0A]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/35 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-transparent to-[#0A0A0A]/30" />
      </div>

      {/* Ambient golden glow — left side */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 z-[1] h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{ background: "rgba(212,175,55,0.09)" }}
      />
      {/* Subtle gold vignette bottom-right */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 z-[1] h-[340px] w-[340px] rounded-full blur-[100px]"
        style={{ background: "rgba(212,175,55,0.06)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div
            className="mb-5 flex items-center gap-3"
            style={{
              fontFamily: "'Bai Jamjuree', sans-serif",
              opacity: 0,
              animation: "fadeUp 0.8s ease-out 0.1s forwards",
            }}
          >
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4AF37",
              }}
            >
              Detailing &amp; Performance Studio
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Bai Jamjuree', sans-serif",
              position: "relative",
              overflow: "hidden",
            }}
            className="text-4xl font-semibold leading-[1.08] text-[#F5F5F0] sm:text-5xl lg:text-[3.4rem]"
          >
            <span
              style={{
                display: "block",
                opacity: 0,
                animation: "fadeUp 0.8s ease-out 0.25s forwards",
              }}
            >
              Every car has a finish
            </span>
            <span
              style={{
                display: "block",
                opacity: 0,
                animation: "fadeUp 0.8s ease-out 0.4s forwards",
              }}
            >
              it was{" "}
              <span style={{ position: "relative", display: "inline-block", color: "#D4AF37" }}>
                built to wear
                {!reducedMotion && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: "-100%",
                      width: "100%",
                      transform: "skewX(-20deg)",
                      background:
                        "linear-gradient(to right, transparent, rgba(255,255,255,0.65), transparent)",
                      animation: "sweep 1.4s ease-in 1.1s forwards",
                    }}
                  />
                )}
              </span>
              .
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="mt-6 max-w-md text-[15.5px] leading-relaxed text-[#F5F5F0]/70 sm:text-base"
            style={{
              opacity: 0,
              animation: "fadeUp 0.8s ease-out 0.55s forwards",
            }}
          >
            From ceramic coating to full restoration, body kits to remapped
            performance — we bring out the car underneath the car.
          </p>

          {/* CTAs */}
          <div
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            style={{
              fontFamily: "'Bai Jamjuree', sans-serif",
              opacity: 0,
              animation: "fadeUp 0.8s ease-out 0.7s forwards",
            }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-medium tracking-wide text-[#0A0A0A] transition-all duration-300"
              style={{
                background: "#D4AF37",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(212,175,55,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book a Service
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-[14.5px] font-medium tracking-wide text-[#F5F5F0] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              style={{ borderColor: "rgba(245,245,240,0.25)" }}
            >
              Explore Services
            </a>
          </div>

          {/* Stat strip */}
          <div
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6"
            style={{
              opacity: 0,
              animation: "fadeUp 0.8s ease-out 0.85s forwards",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-semibold text-[#D4AF37]"
                  style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[12px] text-[#F5F5F0]/50">
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
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[#F5F5F0]/50 transition-colors duration-300 hover:text-[#D4AF37]"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sweep {
          from { left: -100%; }
          to   { left: 130%; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
}