import React from "react";
import { motion } from "framer-motion";

/**
 * CraftsmanshipPhilosophy — AutoLuxe (Premium Image Integration)
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
 *   Title/labels    DM Sans
 *   Sub/body text   Jost
 */

export default function CraftsmanshipPhilosophy() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0B] px-4 py-20 sm:px-12 sm:py-32 lg:px-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .cp-heading { font-family: 'Bebas Neue', sans-serif; }
        .cp-title   { font-family: 'DM Sans', sans-serif; }
        .cp-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Decorative Subtle Grid Lines for Luxury Studio Aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px)] bg-[size:6rem_100%] opacity-20" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3D3D3D]/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="space-y-12 lg:space-y-16">
          
          {/* Eyebrow and Header Layout */}
          <div className="space-y-6 max-w-5xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#8C8C8C]" />
              <span className="cp-title text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C8C8C]">
                Our Philosophy
              </span>
            </div>

            {/* Main Heading with High-Contrast Typography Split */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="cp-heading text-[2.5rem] leading-[0.95] text-white sm:text-[4rem] md:text-[5rem] lg:text-[5.75rem] tracking-tight"
            >
              EVERY VEHICLE ENTRUSTED TO OUR STUDIO IS APPROACHED{" "}
              <span 
                className="inline-block" 
                style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}
              >
                INDIVIDUALLY
              </span>
              , WITHOUT COMPROMISE OR HASTE.
            </motion.h2>
          </div>

          {/* Bottom Grid Split: Content on left, Luxury Image Quote Card on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch pt-10 border-t border-[#3D3D3D]/30">
            
            {/* Left Column: Meticulous Details (Body Text) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 flex flex-col justify-center space-y-6"
            >
              <p className="cp-sub text-base sm:text-lg lg:text-xl font-light leading-relaxed text-[#B8B8B8]">
                Each surface is examined, every material understood, and every procedure executed with meticulous attention to detail. Our skilled technicians combine years of expertise with industry-leading techniques to ensure every vehicle receives the highest standard of care. From preparation to the final inspection, we focus on precision, durability, and flawless results that exceed expectations.
              </p>
              <p className="cp-sub text-sm font-light leading-relaxed text-[#B8B8B8]/60 max-w-lg">
                From paint correction and ceramic protection to Paint Protection Film and complete vehicle restoration, every stage reflects our continuous commitment to absolute excellence. We combine cutting-edge technology, premium-grade products, and skilled craftsmanship to enhance your vehicle's appearance, preserve its value, and deliver protection that stands the test of time.
              </p>
            </motion.div>

            {/* Right Column: Statement Card with Background Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#3D3D3D]/50 bg-[#1A1A1A] p-8 sm:p-10 flex flex-col justify-between min-h-[320px] lg:min-h-[380px] group cursor-pointer shadow-2xl shadow-black/80"
            >
              {/* Background Image Integration */}
              <img 
                src="https://i.pinimg.com/736x/29/2a/ef/292aefb2952504bf758e2a77cefa1789.jpg"
                alt="Studio Craftsmanship Detail" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-50 group-hover:grayscale-0"
              />

              {/* Dynamic Gradient Overlays to preserve absolute text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none" />

              {/* Inner Frame Line */}
              <div className="absolute inset-4 border border-white/5 rounded-xl pointer-events-none z-10 transition-all duration-500 group-hover:border-[#8C8C8C]/20" />

              {/* Card Content Top */}
              <div className="space-y-3 relative z-20">
                <span className="cp-heading text-[#8C8C8C] text-xs font-semibold tracking-widest uppercase block">
                  Studio Statement
                </span>
                <p className="cp-sub text-2xl sm:text-3xl italic font-normal leading-snug text-white tracking-wide">
                  "L'eccellenza è nei dettagli."
                </p>
              </div>

              {/* Card Content Bottom */}
              <div className="mt-12 pt-4 border-t border-[#3D3D3D]/60 relative z-20">
                <p className="cp-sub text-xs font-light uppercase tracking-[0.15em] text-[#B8B8B8]">
                  Excellence resides in the details.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}