import React from "react";
import { motion } from "framer-motion";

/**
 * MilestoneStats — AutoLuxe (Exact Replica of image_ea27a3.png)
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
 *   Title/labels     DM Sans
 *   Sub/body text    Jost
 */

export default function MilestoneStats() {
  // Screenshot ke matching content ke hisaab se order and data mapping
  const stats = [
    { id: "01", number: "25+", label: "Years of Expertise", tag: "SINCE 1999" },
    { id: "02", number: "2020", label: "Studio Established", tag: "FOUNDED" },
    { id: "03", number: "9,000+", label: "Automobiles Detailed", tag: "TO DATE" },
  ];

  return (
    <section className="w-full bg-[#0B0B0B] py-8 px-3 sm:px-5 lg:px-7 relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .ms-heading { font-family: 'Bebas Neue', sans-serif; }
        .ms-title   { font-family: 'DM Sans', sans-serif; }
        .ms-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid Wrapper with vertical and horizontal line structures */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#3D3D3D]/30 divide-y md:divide-y-0 md:divide-x divide-[#3D3D3D]/30">
          
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[260px] relative group overflow-hidden"
            >
              {/* Top Meta Row (01 / Tag) */}
              <div className="flex justify-between items-center w-full mb-8">
                <span className="ms-title text-xs text-[#8C8C8C]/50 font-semibold tracking-wider">
                  {stat.id}
                </span>
                <span className="ms-title text-[8px] text-[#8C8C8C]/40 font-bold tracking-[0.15em] uppercase">
                  {stat.tag}
                </span>
              </div>

              {/* Center Large Stat Number */}
              <div className="space-y-3 mt-auto">
                <h3 className="ms-heading text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] leading-none text-white tracking-wide font-normal">
                  {stat.number}
                </h3>
                
                {/* Bottom Sub-label */}
                <p className="ms-sub text-sm font-light text-[#B8B8B8]/70 tracking-wide">
                  {stat.label}
                </p>
              </div>

              {/* Bottom Decorative Fine Active Line (Optional micro-interaction) */}
              <div className="absolute bottom-0 left-4 right-4 h-px bg-white/0 transition-all duration-500 group-hover:bg-white/20" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}