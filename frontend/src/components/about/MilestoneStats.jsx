import React from "react";
import { motion } from "framer-motion";

/**
 * MilestoneStats — AutoLuxe
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

export default function MilestoneStats() {
  const stats = [
    { number: "9,000+", label: "Automobiles Detailed", subtext: "Since 2020" },
    { number: "25+", label: "Years of Experience", subtext: "Since 1999" },
    { number: "2", label: "Continents", subtext: "Middle East & Asia" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0B0B0B] to-[#1A1A1A] py-20 px-5 sm:px-8 lg:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .ms-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .ms-title   { font-family: 'DM Sans', sans-serif; }
        .ms-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-6xl">
        {/* Top accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#3D3D3D] to-transparent mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-3 py-8"
            >
              <h3 className="ms-heading text-[4.5rem] md:text-[5.5rem] leading-none text-[#8C8C8C]">
                {stat.number}
              </h3>
              <p className="ms-title text-lg font-semibold text-white">
                {stat.label}
              </p>
              <p className="ms-sub text-sm font-light text-[#B8B8B8]">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#3D3D3D] to-transparent mt-20" />
      </div>
    </section>
  );
}