import React from "react";
import { motion } from "framer-motion";

/**
 * FounderStory — AutoLuxe (Enhanced Premium UI)
 *
 * Palette (fixed):
 *   Primary BG       #0B0B0B
 *   Secondary BG    #1A1A1A
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver)
 *
 * Type system:
 *   Main heading    Bebas Neue
 *   Title/labels    DM Sans
 *   Sub/body text   Jost
 */

export default function FounderStory() {
  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-4 sm:px-8 lg:px-16 overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .fs-heading { font-family: 'Bebas Neue', sans-serif; }
        .fs-title   { font-family: 'DM Sans', sans-serif; }
        .fs-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Decorative subtle ambient light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8C8C8C]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Premium Card Image Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-5 relative h-[380px] sm:h-[460px] lg:h-[550px]  overflow-hidden border border-[#3D3D3D]/60 bg-[#1A1A1A] p-8 flex flex-col justify-between group cursor-pointer shadow-2xl shadow-black/50"
          >
            {/* The Actual Background Image */}
            <img 
              src="https://img.magnific.com/premium-photo/man-with-arms-crossed-standing-front-window-dynamic-tech-startup-founder-incorporating-islamic-principles-into-his-innovative-business-model_538213-71092.jpg?semt=ais_hybrid&w=740&q=80" // <-- Apna image link yahan lagayein
              alt="Sheikh Yasir - Founder of Dettagli Auto" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105  group-hover:grayscale-0"
            />

            {/* Premium Inner Geometric Border (Image ke side me border) */}
            <div className="absolute inset-4 border border-[#3D3D3D]/40 rounded-xl pointer-events-none z-10 transition-all duration-500 group-hover:border-[#8C8C8C]/40" />

            {/* Dark & Luxury Overlays for Text Contrast
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-85" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#8C8C8C_0%,transparent_60%)] opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.08]" /> */}

            {/* Top Corner Accent */}
            <div className="relative z-20 self-end border border-[#3D3D3D] px-3 py-1 rounded-full bg-[#0B0B0B]/80 backdrop-blur-md">
              <p className="fs-title text-[10px] text-[#8C8C8C] tracking-widest uppercase font-medium">
                Est. 1999
              </p>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-20 space-y-2">
              <div className="w-10 h-px bg-[#8C8C8C] transition-all duration-500 group-hover:w-16" />
              <h4 className="fs-title text-xl text-white font-light tracking-tight">
                Sheikh Yasir <span className="text-white font-normal">/ Founder</span>
              </h4>
            </div>
          </motion.div>

          {/* Right: Text Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#8C8C8C]" />
              <p className="fs-title text-[#8C8C8C] text-[11px] font-semibold tracking-[0.25em] uppercase">
                Craftsmanship Since 1999
              </p>
            </div>

            {/* Typography Masterpiece Heading */}
            <h2 className="fs-heading uppercase leading-[0.9] text-white text-[2.8rem] sm:text-[4rem] md:text-[4.75rem] lg:text-[5.25rem] tracking-tight">
              FOUNDED IN{" "}
              <span
                className="inline-block"
                style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}
              >
                2020
              </span>
              <span className="hidden sm:inline" /> , BUILT ON{" "}
              <span
                className="inline-block"
                style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}
              >
                DECADE
              </span>{" "}
              OF EXCELLENCE
            </h2>

            {/* Body Content */}
            <div className="fs-sub space-y-5 font-light text-[#B8B8B8] leading-relaxed text-base">
              <p className="text-[#FFFFFF]/90 font-normal border-l-2 border-[#3D3D3D] pl-4 italic">
                Dettagli Auto was born from a lifelong passion for automotive
                craftsmanship and the pursuit of perfection. While the company
                itself is contemporary, its foundations were laid over two
                decades earlier.
              </p>

              <p className="pt-2">
                Behind the brand stands{" "}
                <span className="text-white font-medium shadow-sm">Sheikh Yasir</span>,
                whose journey in the automotive detailing industry began in
                1999. Throughout more than twenty-five years of experience
                across international markets, including the Middle East, he
                has cultivated a philosophy founded upon precision,
                discipline, and respect for the automobile.
              </p>

              {/* Enhanced Quote Section */}
              <div className="pt-4 border-t border-[#3D3D3D]/40 flex items-start gap-4">
                <span className="text-4xl text-[#8C8C8C]/30 font-serif leading-none">“</span>
                <p className="fs-sub italic text-white/80 tracking-wide text-[15px] sm:text-base pt-1">
                  At Dettagli Auto, detailing is not regarded as a service — it
                  is considered a craft.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}