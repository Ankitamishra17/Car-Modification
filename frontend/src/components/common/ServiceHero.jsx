import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * ServiceHero — AutoLuxe (Premium Redesign)
 *
 * Palette (fixed):
 *   Primary BG       #0B0B0B
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

export default function ServiceHero({
  image,
  breadcrumb,
  title,
  highlight,
  description,
}) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden flex flex-col justify-end bg-[#0B0B0B]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .sh-heading { font-family: 'Bebas Neue', sans-serif; }
        .sh-title   { font-family: 'DM Sans', sans-serif; }
        .sh-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Hero Background Image with Subtle Ken Burns Zoom Effect */}
      <motion.img
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.45 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Cinematic Graduated Overlays for Legibility */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-transparent z-[1]" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-transparent z-[1]" />

      {/* Decorative Grid Line Anchor */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D3D3D]/30 to-transparent z-[2]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-8 lg:px-16 pb-16 pt-36 sm:pb-24 flex flex-col justify-end">
        <div className="max-w-4xl -mt-18 space-y-6">
          
          {/* Breadcrumb Eyebrow Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-6 bg-[#8C8C8C]" />
            <span className="sh-title text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C8C8C]">
              {breadcrumb}
            </span>
          </motion.div>

          {/* Main Title Split */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="sh-heading text-[3.25rem] sm:text-[5.5rem] lg:text-[7rem] leading-[0.9] text-white tracking-tight uppercase"
          >
            {title}{" "} <br className="hidden md:block" />
            <span 
              className="inline-block" 
              style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}
            >
              {highlight}
            </span>
          </motion.h1>

          {/* Paragraph Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="sh-sub text-base sm:text-lg font-light leading-relaxed text-[#B8B8B8]/80 max-w-xl pt-2"
          >
            {description}
          </motion.p>

          {/* Premium Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6 flex flex-wrap gap-4 items-center"
          >
            {/* Primary Filled Metallic Button */}
            <a 
              href="#packages" 
              className="sh-title group relative overflow-hidden bg-white text-black text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 flex items-center gap-2 hover:bg-[#8C8C8C] hover:text-white"
            >
              View Packages
              <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Ghost Border Custom Button */}
            <a 
              href="#contact" 
              className="sh-title relative border border-[#3D3D3D] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 bg-transparent hover:border-white hover:bg-white/5"
            >
              Book Free Consultation
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}