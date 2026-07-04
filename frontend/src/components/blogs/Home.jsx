import { useState } from "react";
import { Search, ArrowRight, ChevronDown } from "lucide-react";

/**
 * BlogHero — AutoLuxe
 *
 * Background: Real MP4 video (Pexels free license) plays autoplay/muted/loop.
 * Dark overlay + silver gradient on top so text stays readable.
 *
 * Palette (fixed):
 *   Primary BG      #0B0B0B
 *   Secondary BG    #1A1A1A
 *   Section BG      #2A2A2A
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver — buttons / hover)
 *
 * Type system:
 *   Main heading    Bebas Neue
 *   Title/labels     DM Sans
 *   Sub/body text    Jost
 */

// ── Pexels free stock video — cinematic car / detailing ──
// Direct CDN links from Pexels (royalty-free, no attribution needed for web use)




const CATEGORIES = ["All", "PPF & Coatings", "Restoration", "Tuning", "Body Kits", "Tips & Tricks"];

export default function BlogHero() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchVal, setSearchVal] = useState("");

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#0B0B0B] flex flex-col">

      {/* ── Background video ── */}
      <div className="absolute inset-0">
        <img
          src="/banner/4.png"
          alt="Contact Us"
          className="h-full w-full object-cover "
        />

      </div>
        
      

      {/* ── Overlays on top of video ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Dark tint so text is readable over video */}
        <div className="absolute inset-0 bg-[#0B0B0B]/60" />
        {/* Silver gradient — left side depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-[#0B0B0B]/30 to-transparent" />
        {/* Subtle silver radial glow top-left */}
        <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-[#8C8C8C]/10 blur-[100px]" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(140,140,140,1) 1px, transparent 1px), linear-gradient(90deg, rgba(140,140,140,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }

        .bh-anim-1 { animation: fadeUp 0.7s ease both; }
        .bh-anim-2 { animation: fadeUp 0.7s 0.15s ease both; }
        .bh-anim-3 { animation: fadeUp 0.7s 0.28s ease both; }
        .bh-anim-4 { animation: fadeUp 0.7s 0.40s ease both; }
        .bh-anim-5 { animation: fadeUp 0.7s 0.52s ease both; }
        .bh-anim-6 { animation: fadeIn 1s 0.7s ease both; }

        .bh-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .bh-title   { font-family: 'DM Sans', sans-serif; }
        .bh-sub     { font-family: 'Jost', sans-serif; }

        .bh-cat-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 7px 16px; border-radius: 999px;
          border: 1px solid #3D3D3D;
          color: #B8B8B8;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .bh-cat-btn:hover {
          border-color: #8C8C8C;
          color: #FFFFFF;
          background: rgba(140,140,140,0.1);
        }
        .bh-cat-btn.active {
          background: #8C8C8C;
          border-color: #8C8C8C;
          color: #0B0B0B;
        }

        .bh-search {
          display: flex; align-items: center;
          background: #1A1A1A;
          border: 1px solid #3D3D3D;
          border-radius: 999px;
          padding: 0 20px;
          gap: 10px;
          transition: border-color 0.2s, background 0.2s;
          max-width: 440px; width: 100%;
        }
        .bh-search:focus-within {
          border-color: #8C8C8C;
          background: #202020;
        }
        .bh-search input {
          flex: 1; background: transparent; border: none; outline: none;
          font-family: 'Jost', sans-serif;
          font-size: 14px; color: #FFFFFF;
          padding: 13px 0;
        }
        .bh-search input::placeholder { color: #6E6E6E; }
      `}</style>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-10 pt-16 sm:px-8 lg:px-10 lg:pt-20">

        {/* Eyebrow */}
        <div className="bh-anim-1 bh-title mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8] sm:text-[12px]">
            AutoLuxe Journal
          </span>
        </div>

        {/* Headline */}
        <h1 className="bh-anim-2 bh-heading max-w-3xl text-[3.2rem] leading-[0.95] text-white sm:text-[4.4rem] lg:text-[5.6rem]">
          INSIGHTS FROM THE<br />
          <span
            className="text-[#8C8C8C]"
            // style={{ textShadow: "0 0 40px rgba(140,140,140,0.35)" }}
            style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.25)",
            color: "transparent",
          }}
          >
            DETAIL FLOOR.
          </span>
        </h1>

        {/* Subtext */}
        <p className="bh-anim-3 bh-sub mt-5 max-w-xl text-[14px] font-light leading-relaxed text-[#B8B8B8] sm:text-[15.5px]">
          PPF deep-dives, restoration journals, tuning breakdowns, and
          everything in between — written by the people who do the work.
        </p>

        

       

       
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-2 opacity-40"
        style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
      >
        <span className="bh-title text-[10px] uppercase tracking-[0.2em] text-[#8C8C8C]">
          Scroll
        </span>
        <ChevronDown size={14} color="#8C8C8C" strokeWidth={2} />
      </div>

    </section>
  );
}