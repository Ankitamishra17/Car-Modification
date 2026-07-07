import React from "react";
import { motion } from "framer-motion";

/**
 * ValuesSection — Dettagali Auto (Premium Grid Redesign)
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

export default function ValuesSection() {
  const values = [
    {
      id: "01",
      title: "Precision",
      description:
        "Every measurement, every movement, every application demands exactitude. Perfection is found in precision.",
    },
    {
      id: "02",
      title: "Authenticity",
      description:
        "We honor the authentic character of every automobile, preserving what makes it unique while enhancing its brilliance.",
    },
    {
      id: "03",
      title: "Respect",
      description:
        "Every vehicle carries a story. We approach each with the reverence and respect it deserves.",
    },
    {
      id: "04",
      title: "Timelessness",
      description:
        "True luxury is not defined by trends, but by work that endures and appreciates with time.",
    },
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .vs-heading { font-family: 'Bebas Neue', sans-serif; }
        .vs-title   { font-family: 'DM Sans', sans-serif; }
        .vs-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Luxury Radial Glow Background */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8C8C8C]/5 rounded-full filter blur-[120px] pointer-events-none" /> */}

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#3D3D3D]/40 pb-8"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-4 bg-[#8C8C8C]" />
              <p className="vs-title text-[#8C8C8C] text-[10px] font-bold tracking-[0.25em] uppercase">
                What We Stand For
              </p>
            </div>
            <h2 className="vs-heading text-[5rem] sm:text-[6rem] leading-[0.9] text-white tracking-wide">
              OUR CORE <span style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}>VALUES</span>
            </h2>

          <p className="vs-sub text-sm text-[#B8B8B8]/60 font-light max-w-md md:text-right">
            The principles that steer our craftsmanship and define every single detail.
          </p>
            </div>
        </motion.div>

        {/* Premium Geometric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#3D3D3D]/30 divide-y sm:divide-y-0 lg:divide-y-0 divide-[#3D3D3D]/30 rounded-xl bg-[#0B0B0B]/40 backdrop-blur-md overflow-hidden">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: "rgba(140, 140, 140, 0.02)" }}
              className="p-8 sm:p-10 flex flex-col justify-between min-h-[300px] group transition-all duration-300 relative sm:border-r last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r sm:border-b lg:border-b-0 [&:nth-child(3)]:border-r"
              style={{ borderColor: "rgba(61, 61, 61, 0.3)" }}
            >
              {/* Top Row: Counter Index */}
              <div className="flex justify-between items-center w-full mb-8">
                <span className="vs-title text-xs text-[#8C8C8C]/40 font-bold tracking-wider">
                  {value.id}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#3D3D3D] group-hover:bg-[#8C8C8C] transition-colors duration-300" />
              </div>

              {/* Bottom Block Content */}
              <div className="space-y-4 mt-auto">
                <h3 className="vs-heading text-[2rem] text-white tracking-wide uppercase transition-colors duration-300 group-hover:text-[#8C8C8C]">
                  {value.title}
                </h3>
                <p className="vs-sub text-sm font-light text-[#B8B8B8]/80 leading-relaxed group-hover:text-[#FFFFFF]/90 transition-colors duration-300">
                  {value.description}
                </p>
              </div>

              {/* Bottom Subtle Bar Hover Interaction */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C8C8C] w-0 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}