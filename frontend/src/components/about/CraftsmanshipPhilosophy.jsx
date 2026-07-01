import React from "react";
import { motion } from "framer-motion";

/**
 * CraftsmanshipPhilosophy — AutoLuxe
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

export default function CraftsmanshipPhilosophy() {
  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-5 sm:px-8 lg:px-10 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .cp-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .cp-title   { font-family: 'DM Sans', sans-serif; }
        .cp-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8C8C8C] via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <p className="cp-title text-[#B8B8B8] text-xs font-semibold tracking-widest uppercase">
            Our Philosophy
          </p>

          <h2 className="cp-heading text-[3rem] md:text-[4rem] leading-[0.97] text-white">
            EVERY VEHICLE ENTRUSTED TO OUR STUDIO IS APPROACHED{" "}
            <span className="text-[#8C8C8C]">INDIVIDUALLY</span>, WITHOUT
            COMPROMISE OR HASTE.
          </h2>

          <div className="space-y-6 pt-8">
            <p className="cp-sub text-lg font-light text-[#B8B8B8] leading-relaxed max-w-3xl mx-auto">
              Each surface is examined, every material understood, and every
              procedure executed with meticulous attention to detail. From paint
              correction and ceramic protection to Paint Protection Film and
              complete vehicle restoration, every stage reflects our commitment
              to excellence.
            </p>

            {/* Featured Italian phrase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="pt-12 border-t border-[#3D3D3D] space-y-4"
            >
              <p className="cp-sub text-5xl md:text-6xl font-light text-[#8C8C8C] italic">
                L'eccellenza è nei dettagli.
              </p>
              <p className="cp-sub text-xl font-light text-white">
                Excellence resides in the details.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}