import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

/**
 * Hero — AutoLuxe
 *
 * Signature element: a muted detailing video (polish / ceramic sheeting)
 * sits behind the headline, with a thin golden sweep that crosses the
 * headline once on load — echoing the "reveal the shine" moment the
 * brand actually sells, rather than a generic gradient blob.
 *
 * Fonts:
 *  - Headline / eyebrow / CTAs: 'Bai Jamjuree'
 *  - Subhead / body: serif
 *
 * Replace VIDEO_SRC and POSTER_SRC with your own asset paths.
 * Video should be silent, loopable, and ideally < 6MB (compressed mp4/webm).
 */

const VIDEO_SRC = "/videos/detailing-loop.mp4";
const POSTER_SRC = "/images/hero-poster.jpg";

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
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-[#0A0A0A] font-serif"
      aria-label="Hero"
    >
      {/* Video / poster background */}
      <div className="absolute inset-0 z-0">
        {!reducedMotion ? (
          <video
            ref={videoRef}
            className={`h-full w-full object-cover transition-opacity duration-[1200ms] ${
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
            alt="Detailed luxury vehicle finished with ceramic coating"
            className="h-full w-full object-cover"
          />
        )}

        {/* Tint + readability gradient */}
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/40" />
      </div>

      {/* Ambient golden vignette, signature element support */}
      <div className="pointer-events-none absolute -left-32 top-1/3 z-[1] h-[480px] w-[480px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="mb-5 flex items-center gap-3 opacity-0 animate-[fadeUp_0.8s_ease-out_0.1s_forwards]"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-[13px] font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
              Detailing &amp; Performance Studio
            </span>
          </div>

          {/* Headline with golden sweep */}
          <h1
            className="relative overflow-hidden text-4xl font-semibold leading-[1.08] text-[#F5F5F0] sm:text-5xl lg:text-[3.4rem]"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            <span className="opacity-0 animate-[fadeUp_0.8s_ease-out_0.25s_forwards]">
              Every car has a finish
            </span>
            <br />
            <span className="opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
              it was{" "}
              <span className="relative inline-block text-[#D4AF37]">
                built to wear
                {!reducedMotion && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 -left-full w-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[sweep_1.4s_ease-in_1.1s_forwards]"
                  />
                )}
              </span>
              .
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="mt-6 max-w-md text-[15.5px] leading-relaxed text-[#F5F5F0]/70 opacity-0 animate-[fadeUp_0.8s_ease-out_0.55s_forwards] sm:text-base"
          >
            From ceramic coating to full restoration, body kits to remapped
            performance — we bring out the car underneath the car.
          </p>

          {/* CTAs */}
          <div
            className="mt-9 flex flex-col gap-3.5 opacity-0 animate-[fadeUp_0.8s_ease-out_0.7s_forwards] sm:flex-row sm:items-center"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-[14.5px] font-medium tracking-wide text-[#0A0A0A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
            >
              Book a Service
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-[#F5F5F0]/25 px-7 py-3.5 text-[14.5px] font-medium tracking-wide text-[#F5F5F0] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Explore Services
            </a>
          </div>

          {/* Stat strip — only meaningful, no invented numbers as filler */}
          <div
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6 opacity-0 animate-[fadeUp_0.8s_ease-out_0.85s_forwards]"
          >
            {[
              { value: "5", label: "Core services" },
              { value: "100%", label: "In-house craftsmanship" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-semibold text-[#D4AF37]"
                  style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[12.5px] text-[#F5F5F0]/55">
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

      {/* Keyframes (scoped, no Tailwind config needed) */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sweep {
          from { left: -100%; }
          to { left: 130%; }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-["] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
}