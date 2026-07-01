import React from "react";
import { motion } from "framer-motion";

/**
 * AboutHero — AutoLuxe
 *
 * Palette (fixed):
 *   Primary BG      #0B0B0B
 *   Secondary BG    #1A1A1A
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

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#0B0B0B] pt-32 pb-20 px-5 sm:px-8 lg:px-10 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .ah-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .ah-title   { font-family: 'DM Sans', sans-serif; }
        .ah-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Silver hairline top */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#8C8C8C] to-transparent opacity-50" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="ah-title text-[#B8B8B8] text-sm font-semibold tracking-widest uppercase mb-6">
            La Nostra Storia
          </p>

          <h1 className="ah-heading text-[4rem] md:text-[5.5rem] leading-[0.95] text-white mb-8">
            OUR <span className="text-[#8C8C8C]">STORY</span>
          </h1>

          <p className="ah-sub text-lg font-light text-[#B8B8B8] max-w-2xl mx-auto leading-relaxed">
            Every remarkable automobile tells a story. Our purpose is to
            preserve it.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#3D3D3D] to-transparent"
        />
      </div>
    </section>
  );
}