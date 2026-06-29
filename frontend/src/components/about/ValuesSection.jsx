// ===== VALUES SECTION =====

import React from "react";
import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    {
      title: 'Precision',
      description: 'Every measurement, every movement, every application demands exactitude. Perfection is found in precision.'
    },
    {
      title: 'Authenticity',
      description: 'We honor the authentic character of every automobile, preserving what makes it unique while enhancing its brilliance.'
    },
    {
      title: 'Respect',
      description: 'Every vehicle carries a story. We approach each with the reverence and respect it deserves.'
    },
    {
      title: 'Timelessness',
      description: 'True luxury is not defined by trends, but by work that endures and appreciates with time.'
    },
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase mb-4" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
            What We Stand For
          </p>
          <h2 className="text-4xl font-light text-[#F5EBE0]" style={{ fontFamily: "Georgia, serif" }}>
            Our Core <span className="text-[#D4AF37]">Values</span>
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
              className="space-y-3 pb-8 border-b border-[#D4AF37]/10"
            >
              <h3 className="text-2xl text-[#D4AF37] font-medium" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
                {value.title}
              </h3>
              <p className="text-[#F5EBE0]/70 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}