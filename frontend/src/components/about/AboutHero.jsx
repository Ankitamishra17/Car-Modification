import React from "react";
import { motion } from "framer-motion";

// ===== ABOUT HERO SECTION =====
export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#0A0A0A] pt-32 pb-20 px-5 sm:px-8 lg:px-10 overflow-hidden">
      {/* Gradient accent top */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p
            className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-6"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            La Nostra Storia
          </p>

          <h1
            className="text-5xl md:text-6xl font-light text-[#F5EBE0] mb-8 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our <span className="text-[#D4AF37] font-medium">Story</span>
          </h1>

          <p
            className="text-lg text-[#F5EBE0]/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Every remarkable automobile tells a story. Our purpose is to
            preserve it.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
        />
      </div>
    </section>
  );
}
