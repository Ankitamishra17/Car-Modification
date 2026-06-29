// ===== FOUNDER STORY SECTION =====
import React from "react";
import { motion } from "framer-motion";


export default function FounderStory() {
  return (
    <section className="w-full bg-[#0A0A0A] py-20 px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
              Craftsmanship Since 1999
            </p>
            
            <h2 className="text-4xl font-light text-[#F5EBE0]" style={{ fontFamily: "Georgia, serif" }}>
              Founded in <span className="text-[#D4AF37]">2020</span>, Built on <span className="text-[#D4AF37]">Decades</span> of Excellence
            </h2>

            <div className="space-y-4 text-[#F5EBE0]/75 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
              <p>
                Dettagli Auto was born from a lifelong passion for automotive craftsmanship and the pursuit of perfection. While the company itself is contemporary, its foundations were laid over two decades earlier.
              </p>
              
              <p>
                Behind the brand stands <span className="text-[#D4AF37] font-medium">Sheikh Yasir</span>, whose journey in the automotive detailing industry began in 1999. Throughout more than twenty-five years of experience across international markets, including the Middle East, he has cultivated a philosophy founded upon precision, discipline and respect for the automobile.
              </p>
              
              <p className="italic text-[#D4AF37]/90">
                "At Dettagli Auto, detailing is not regarded as a service—it is considered a craft."
              </p>
            </div>
          </motion.div>

          {/* Right: Image placeholder - replace with actual founder image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-xl overflow-hidden border border-[#D4AF37]/20 bg-[#1A1A1A] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#0A0A0A]" />
            <div className="relative z-10 text-center text-[#F5EBE0]/40">
              <p className="text-sm">Founder Image</p>
              <p className="text-xs mt-2 text-[#D4AF37]">Sheikh Yasir</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}