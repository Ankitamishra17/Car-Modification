import React from "react";
import { motion } from "framer-motion";

/**
 * ExperienceCallout — AutoLuxe
 *
 * Palette (fixed):
 *   Primary BG      #0B0B0B
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
  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-5 sm:px-8 lg:px-10 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .exc-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .exc-title   { font-family: 'DM Sans', sans-serif; }
        .exc-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Gradient background */}
      <div className="absolute inset-0 opacity-[0.07] bg-gradient-to-r from-[#8C8C8C] via-transparent to-[#8C8C8C]" />

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="exc-heading text-[3rem] md:text-[4.2rem] leading-[0.97] text-white">
            WE BELIEVE THAT{" "}
            <span className="text-[#8C8C8C]">PRESERVING</span> A VEHICLE IS
            ABOUT MORE THAN MAINTAINING ITS APPEARANCE.
          </h2>

          <p className="exc-sub text-xl font-light text-[#B8B8B8] leading-relaxed max-w-3xl mx-auto pt-6">
            It is about safeguarding its character, protecting its value and
            honouring the engineering behind every automobile, whether it is a
            cherished daily driver, a grand tourer, a supercar or a collector's
            masterpiece.
          </p>

          <div className="pt-12">
            <p className="exc-title text-[#8C8C8C] text-sm font-semibold tracking-widest uppercase">
              Since 1999
            </p>
            <p className="exc-heading text-[2rem] md:text-[2.6rem] text-white mt-3">
              BECAUSE PERFECTION IS NEVER ACCIDENTAL.
            </p>
            <div className="exc-sub flex flex-col items-center gap-2 mt-4 font-light text-[#B8B8B8]">
              <p>It is crafted.</p>
              <p>It is refined.</p>
              <p>It is preserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}