import React from "react";
import { motion } from "framer-motion";

/**
 * ExperienceCallout — AutoLuxe (Premium Structural Redesign)
 *
 * Palette (fixed):
 *   Primary BG       #0B0B0B
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver)
 *
 * Type system:
 *   Main heading    Bebas Neue
 *   Title/labels     DM Sans
 *   Sub/body text    Jost
 */

export default function ExperienceCallout() {
  const processes = [
    { label: "It is crafted.", desc: "Meticulous execution from the very first stroke." },
    { label: "It is refined.", desc: "Continuous polishing until the surface achieves mirror precision." },
    { label: "It is preserved.", desc: "Advanced protection sealing the character for generations." },
  ];

  return (
    <section className="w-full bg-[#0B0B0B] py-28 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .exc-heading { font-family: 'Bebas Neue', sans-serif; }
        .exc-title   { font-family: 'DM Sans', sans-serif; }
        .exc-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Luxury Ambient Line and Glow Overlays */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#8C8C8C]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3D3D3D]/40 to-transparent" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Statement & Deep Philosophy Block (Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Small Eyebrow Label */}
            <div className="flex items-center gap-2">
              <span className="h-px w-5 bg-[#8C8C8C]" />
              <p className="exc-title text-[#8C8C8C] text-[10px] font-bold tracking-[0.25em] uppercase">
                The Heritage Creed
              </p>
            </div>

            {/* Heavy Editorial Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="exc-heading text-[2.8rem] sm:text-[4rem] lg:text-[4.75rem] leading-[0.95] text-white tracking-tight"
            >
              WE BELIEVE THAT{" "}
              <span style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}>
                PRESERVING
              </span>{" "}
              A VEHICLE IS ABOUT MORE THAN MAINTAINING ITS APPEARANCE.
            </motion.h2>

            {/* Descriptive Body with Premium left border accent */}
            <p className="exc-sub text-base sm:text-lg font-light text-[#B8B8B8] leading-relaxed max-w-2xl border-l border-[#3D3D3D] pl-6 pt-1">
              It is about safeguarding its character, protecting its value, and
              honouring the engineering behind every automobile—whether it is a
              cherished daily driver, a grand tourer, a supercar, or a collector's
              masterpiece.
            </p>
          </div>

          {/* Right Column: High-End Process Sequence & Timeline Callout (Span 5) */}
          <div className="lg:col-span-5 space-y-10 lg:pt-12">
            
            {/* Precision Meta Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-t border-b border-[#3D3D3D]/50 py-6 space-y-2"
            >
              <span className="exc-title text-[10px] text-[#8C8C8C]/50 font-bold tracking-widest uppercase block">
                Since 1999
              </span>
              <p className="exc-heading text-xl sm:text-2xl text-white tracking-wide uppercase">
                BECAUSE PERFECTION IS NEVER ACCIDENTAL.
              </p>
            </motion.div>

            {/* Vertical Segmented Progress List */}
            <div className="space-y-6">
              {processes.map((proc, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 group"
                >
                  {/* Step Serial Indicator */}
                  <span className="exc-title text-xs text-[#8C8C8C]/40 font-mono pt-1">
                    0{index + 1}
                  </span>
                  
                  {/* Step Titles */}
                  <div className="space-y-1">
                    <h4 className="exc-heading text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-[#8C8C8C] transition-colors duration-300">
                      {proc.label}
                    </h4>
                    <p className="exc-sub text-xs text-[#B8B8B8]/60 font-light max-w-sm">
                      {proc.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}