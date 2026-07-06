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
 *   Title/labels    DM Sans
 *   Sub/body text   Jost
 */

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0B0B0B]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .ah-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .ah-title   { font-family: 'DM Sans', sans-serif; }
        .ah-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Silver hairline top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8C8C8C] to-transparent opacity-50" />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/banner/refurbish.png"
          alt="Our Story"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Ghost background text — desktop only */}
      <div className="pointer-events-none absolute -mt-18 inset-0 hidden lg:flex items-center justify-end overflow-hidden pr-10">
        <h2
          className="ah-heading text-[16rem] leading-none uppercase tracking-wider opacity-[0.05] select-none"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.25)",
            color: "transparent",
          }}
        >
          STORY
        </h2>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center -mt-14 gap-3">
              <span className="h-px w-12 bg-[#8C8C8C]" />
              <span className="ah-title text-[4px] sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#B8B8B8]">
                La Nostra Storia
              </span>
            </div>

            {/* Heading */}
            <h1 className="ah-heading uppercase leading-[0.9] whitespace-nowrap">
              <span className="text-[2.5rem] sm:text-[4.5rem] lg:text-[6rem] text-white">
                OUR{" "}
              </span>
              <span
                className="text-[2.5rem] sm:text-[4.5rem] lg:text-[6rem]"
                style={{
                  WebkitTextStroke: "2px #8C8C8C",
                  color: "transparent",
                }}
              >
                STORY
              </span>
            </h1>

            {/* Description */}
            <p className="ah-sub mt-5 max-w-lg text-sm sm:text-base lg:text-lg font-light leading-relaxed text-[#B8B8B8]">
              Every remarkable automobile tells a story. Our purpose is to
              preserve it — through craftsmanship, precision, and an unwavering
              respect for the machines that define generations.
            </p>
          </motion.div>

          {/* Decorative line + stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 sm:mt-16"
          >
            <div className="h-px w-full origin-left bg-gradient-to-r from-[#3D3D3D] via-[#3D3D3D] to-transparent" />

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
              <div>
                <p className="ah-heading text-3xl sm:text-4xl text-white">
                  26+
                </p>
                <p className="ah-title text-[11px] sm:text-xs uppercase tracking-widest text-[#B8B8B8] mt-1">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="ah-heading text-3xl sm:text-4xl text-white">
                  1,200+
                </p>
                <p className="ah-title text-[11px] sm:text-xs uppercase tracking-widest text-[#B8B8B8] mt-1">
                  Vehicles Restored
                </p>
              </div>
              <div>
                <p className="ah-heading text-3xl sm:text-4xl text-white">
                  100%
                </p>
                <p className="ah-title text-[11px] sm:text-xs uppercase tracking-widest text-[#B8B8B8] mt-1">
                  Craftsmanship
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
