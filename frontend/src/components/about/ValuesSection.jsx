import React from "react";
import { motion } from "framer-motion";

/**
 * ValuesSection — AutoLuxe
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

export default function ValuesSection() {
  const values = [
    {
      title: "Precision",
      description:
        "Every measurement, every movement, every application demands exactitude. Perfection is found in precision.",
    },
    {
      title: "Authenticity",
      description:
        "We honor the authentic character of every automobile, preserving what makes it unique while enhancing its brilliance.",
    },
    {
      title: "Respect",
      description:
        "Every vehicle carries a story. We approach each with the reverence and respect it deserves.",
    },
    {
      title: "Timelessness",
      description:
        "True luxury is not defined by trends, but by work that endures and appreciates with time.",
    },
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-5 sm:px-8 lg:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .vs-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .vs-title   { font-family: 'DM Sans', sans-serif; }
        .vs-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="vs-title text-[#8C8C8C] text-xs font-semibold tracking-widest uppercase mb-4">
            What We Stand For
          </p>
          <h2 className="vs-heading text-[2.4rem] md:text-[3rem] leading-[0.97] text-white">
            OUR CORE <span className="text-[#8C8C8C]">VALUES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3 pb-8 border-b border-[#3D3D3D]"
            >
              <h3 className="vs-heading text-[1.8rem] text-[#8C8C8C]">
                {value.title}
              </h3>
              <p className="vs-sub font-light text-[#B8B8B8] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}