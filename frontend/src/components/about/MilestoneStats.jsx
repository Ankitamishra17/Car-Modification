// ===== MILESTONES SECTION =====
import React from "react";
import { motion } from "framer-motion";

export default function MilestoneStats() {
  const stats = [
    { number: '9,000+', label: 'Automobiles Detailed', subtext: 'Since 2020' },
    { number: '25+', label: 'Years of Experience', subtext: 'Since 1999' },
    { number: '2', label: 'Continents', subtext: 'Middle East & Asia' },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] py-20 px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Top accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-20" />

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
              <h3 className="text-5xl md:text-6xl font-light text-[#D4AF37]" style={{ fontFamily: "Georgia, serif" }}>
                {stat.number}
              </h3>
              <p className="text-lg text-[#F5EBE0] font-medium" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
                {stat.label}
              </p>
              <p className="text-sm text-[#F5EBE0]/50">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-20" />
      </div>
    </section>
  );
}