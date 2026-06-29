// ===== CRAFTSMANSHIP PHILOSOPHY SECTION =====

import React from "react";
import { motion } from "framer-motion";

export default function CraftsmanshipPhilosophy() {
  return (
    <section className="w-full bg-[#0A0A0A] py-24 px-5 sm:px-8 lg:px-10 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <p className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
            Our Philosophy
          </p>

          <h2 className="text-5xl md:text-6xl font-light text-[#F5EBE0] leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Every vehicle entrusted to our studio is approached <span className="text-[#D4AF37]">individually</span>, without compromise or haste.
          </h2>

          <div className="space-y-6 pt-8">
            <p className="text-lg text-[#F5EBE0]/75 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
              Each surface is examined, every material understood, and every procedure executed with meticulous attention to detail. From paint correction and ceramic protection to Paint Protection Film and complete vehicle restoration, every stage reflects our commitment to excellence.
            </p>

            {/* Featured Italian phrase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="pt-12 border-t border-[#D4AF37]/20 space-y-4"
            >
              <p className="text-5xl md:text-6xl font-light text-[#D4AF37] italic" style={{ fontFamily: "Georgia, serif" }}>
                L'eccellenza è nei dettagli.
              </p>
              <p className="text-xl text-[#F5EBE0] font-light" style={{ fontFamily: "Georgia, serif" }}>
                Excellence resides in the details.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
