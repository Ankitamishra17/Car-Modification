import React from "react";
import { motion } from "framer-motion";

/**
 * FounderStory — AutoLuxe
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

export default function FounderStory() {
  return (
    <section className="w-full bg-[#0B0B0B] py-20 px-5 sm:px-8 lg:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .fs-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .fs-title   { font-family: 'DM Sans', sans-serif; }
        .fs-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

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
            <p className="fs-title text-[#8C8C8C] text-xs font-semibold tracking-widest uppercase">
              Craftsmanship Since 1999
            </p>

            <h2 className="fs-heading text-[2.4rem] md:text-[3rem] leading-[0.97] text-white">
              FOUNDED IN{" "}
              <span className="text-[#8C8C8C]">2020</span>, BUILT ON{" "}
              <span className="text-[#8C8C8C]">DECADES</span> OF EXCELLENCE
            </h2>

            <div className="fs-sub space-y-4 font-light text-[#B8B8B8] leading-relaxed">
              <p>
                Dettagli Auto was born from a lifelong passion for automotive
                craftsmanship and the pursuit of perfection. While the company
                itself is contemporary, its foundations were laid over two
                decades earlier.
              </p>

              <p>
                Behind the brand stands{" "}
                <span className="text-white font-medium">Sheikh Yasir</span>,
                whose journey in the automotive detailing industry began in
                1999. Throughout more than twenty-five years of experience
                across international markets, including the Middle East, he has
                cultivated a philosophy founded upon precision, discipline and
                respect for the automobile.
              </p>

              <p className="fs-sub italic text-[#8C8C8C]">
                "At Dettagli Auto, detailing is not regarded as a service — it
                is considered a craft."
              </p>
            </div>
          </motion.div>

          {/* Right: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-xl overflow-hidden border border-[#3D3D3D] bg-[#1A1A1A] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8C8C8C]/10 via-transparent to-[#0B0B0B]" />
            <div className="relative z-10 text-center">
              <p className="fs-title text-sm text-[#B8B8B8]/50">Founder Image</p>
              <p className="fs-title text-xs mt-2 text-[#8C8C8C] font-semibold uppercase tracking-widest">
                Sheikh Yasir
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}