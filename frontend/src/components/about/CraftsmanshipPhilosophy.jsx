import React from "react";
import { motion } from "framer-motion";

/**
 * CraftsmanshipPhilosophy — Dettagali Auto — v3 (editorial layout)
 *
 * Palette (unchanged):
 *   Primary BG       #0B0B0B
 *   Secondary BG     #1A1A1A
 *   Borders          #3D3D3D
 *   Primary Text     #FFFFFF
 *   Secondary Text   #B8B8B8
 *   Accent           #8C8C8C (metallic silver)
 *
 * Type system (unchanged):
 *   Main heading     Bebas Neue
 *   Title/labels     DM Sans
 *   Sub/body text    Jost
 *
 * Design direction (what actually changed this time, not just spacing tweaks):
 * - A vertical spine on the left (desktop only) carries a rotated section
 *   label and four tick marks — a quiet index that echoes the four real
 *   service stages, giving the page a magazine-margin feel instead of a
 *   centered card stack.
 * - The image now bleeds to the section's own right edge (cancels the
 *   section's own padding) instead of sitting inside a padded card — it
 *   reads as a photograph, not a UI tile.
 * - The studio statement is no longer a boxed card floating in its own
 *   column. It's a compact plate that overlaps the boundary between the
 *   text column and the photo, anchored with a heavier shadow — the one
 *   deliberate "risk" element that gives the section depth.
 * - The four stages moved out of a sidebar list into a connected
 *   horizontal timeline at the base of the section, full width, with a
 *   progress rule running through it — this is the real sequence, so it
 *   gets the most graphic treatment.
 */

const STAGES = [
  { n: "01", label: "Paint Correction" },
  { n: "02", label: "Ceramic Protection" },
  { n: "03", label: "Paint Protection Film" },
  { n: "04", label: "Full Restoration" },
];

export default function CraftsmanshipPhilosophy() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0B] py-16 sm:py-24 lg:py-32">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .cp-heading { font-family: 'Bebas Neue', sans-serif; }
        .cp-title   { font-family: 'DM Sans', sans-serif; }
        .cp-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Ambient studio grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px)] bg-[size:6rem_100%] opacity-20" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3D3D3D]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto flex  lg:pl-5 lg:pr-8">
        {/* Spine — desktop only */}
        <div className="hidden lg:flex flex-col items-center justify-between w-16 shrink-0 pb-2">
          <span
            className="cp-title text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C8C8C] whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Our Philosophy
          </span>
          <div className="flex flex-col items-center gap-3 my-8">
            {STAGES.map((s) => (
              <span
                key={s.n}
                className="w-1.5 h-1.5 rounded-full bg-[#3D3D3D]"
              />
            ))}
          </div>
          <span className="cp-heading text-[#8C8C8C] text-xs tracking-widest">
            04
          </span>
        </div>

        {/* Main column */}
        <div className="flex-1 min-w-0 pl-5 sm:pl-8 lg:pl-12 border-l border-[#3D3D3D]/30 lg:border-l">
          {/* Mobile eyebrow (spine hidden below lg) */}
          <div className="flex lg:hidden items-center gap-3 mb-6">
            <span className="h-px w-6 bg-[#8C8C8C]" />
            <span className="cp-title text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C8C8C]">
              Our Philosophy
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="cp-heading text-[2.25rem] leading-[0.95] text-white sm:text-[3.25rem] md:text-[4.75rem] lg:text-[5.25rem] tracking-tight max-w-3xl pr-4 sm:pr-12 lg:pr-20"
          >
            EVERY VEHICLE IS APPROACHED{" "}
            <span
              className="inline-block"
              style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}
            >
              INDIVIDUALLY
            </span>
            . NO COMPROMISE, NO HASTE.
          </motion.h2>

          {/* Narrative + bleeding image, with overlapping statement plate */}
          <div className="relative mt-10 sm:mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12">
            {/* Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-4 pr-4 sm:pr-12 lg:pr-10 pb-10 sm:pb-16 lg:pb-0 space-y-5 sm:space-y-6"
            >
              <p className="cp-sub text-[15px] sm:text-lg font-light leading-relaxed text-[#B8B8B8]">
             From invisible paint protection to complete vehicle restoration, every process is performed with patience, precision and uncompromising attention to detail.
              </p>
              <p className="cp-sub text-sm font-light leading-relaxed text-[#B8B8B8]/60">
               
Our philosophy combines traditional craftsmanship with modern technology, allowing every vehicle to receive an individual approach based upon its condition, intended use and the expectations of its owner.
              </p>
            </motion.div>

            {/* Image — bleeds to the section's own right edge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-8 relative"
            >
              <div className="relative overflow-hidden rounded-l-2xl lg:rounded-r-none rounded-r-2xl aspect-[16/11] sm:aspect-[16/9] lg:aspect-[16/10] group">
                <img
                  src="https://i.pinimg.com/736x/29/2a/ef/292aefb2952504bf758e2a77cefa1789.jpg"
                  alt="Studio Craftsmanship Detail"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-125 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent" />
                <span className="cp-title absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B8B8B8]">
                  Detail Studio — Bay 02
                </span>
              </div>

              {/* Overlapping statement plate — the one deliberate risk */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative lg:absolute lg:-bottom-10 lg:-left-16 w-full sm:w-[85%] lg:w-[360px] mt-6 lg:mt-0 bg-[#1A1A1A] border border-[#3D3D3D]/60 rounded-xl p-5 sm:p-8 shadow-2xl shadow-black/90"
              >
                <span className="cp-heading text-[#8C8C8C] text-xs font-semibold tracking-widest uppercase block mb-3">
                  Studio Statement
                </span>
                <p className="cp-sub text-lg sm:text-2xl italic font-normal leading-snug text-white">
                  "L'eccellenza è nei dettagli."
                </p>
                <p className="cp-sub text-xs font-light uppercase tracking-[0.15em] text-[#B8B8B8] mt-4 pt-4 border-t border-[#3D3D3D]/50">
                  Excellence resides in the details
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Process timeline — the real sequence, given the most graphic treatment */}
          <div className="relative mt-20 sm:mt-24 lg:mt-32 pr-4 sm:pr-12 lg:pr-20">
            <div className="absolute left-0 right-4 sm:right-12 lg:right-20 top-[9px] h-px bg-[#3D3D3D]/50" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6">
              {STAGES.map((stage, i) => (
                <motion.div
                  key={stage.n}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pt-6"
                >
                  <span className="absolute left-0 top-0 w-[9px] h-[9px] rounded-full bg-[#8C8C8C]" />
                  <span className="cp-heading text-[#8C8C8C] text-sm block mb-1">
                    {stage.n}
                  </span>
                  <span className="cp-title text-sm sm:text-base font-medium text-white leading-snug block">
                    {stage.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
