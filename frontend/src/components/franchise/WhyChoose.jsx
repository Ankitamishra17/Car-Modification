import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, ArrowUpRight } from "lucide-react";
 
/**
 * ULTRA-PREMIUM GLOBAL FOOTPRINTS SECTION
 * -------------------------------------------------------------
 * Style: Luxury Automotive Studio / Flagship Showcase
 * Fonts: Bebas Neue (Headings) · DM Sans / Jost (Labels & Body)
 * Palette: Dark Charcoal #121212 · Deep Carbon #1A1A1A · Luxury Gold #C8972B
 * -------------------------------------------------------------
 */
 
const display = { fontFamily: "'Bebas Neue', sans-serif" };
const label = { fontFamily: "'DM Sans', sans-serif" };
const body = { fontFamily: "'Jost', sans-serif" };
 
const outlets = [
  { 
    id: "01",
    city: "India", 
    studios: "HQ & 12+ Studios Nationwide",
    description: "Our core engineering hub and premium architectural detailing labs operating across major tier-1 metropolitan cities.",
    img: "/banner/2.png" 
  },
  { 
    id: "02",
    city: "Oman", 
    studios: "Muscat Flagship Studio",
    description: "Expanding our global luxury footprint into the Middle East with high-end elite auto restoration and luxury styling suites.",
    img: "/banner/12.png" 
  },
];
 
export default function OurFootprints() {
  const [activeIndex, setActiveIndex] = useState(0);
 
  return (
    <section className="relative bg-[#0D0D0D] text-[#F0F0F0] px-4 xs:px-5 sm:px-8 lg:px-16 py-14 xs:py-16 sm:py-20 lg:py-32 overflow-hidden">
      
      {/* ─── LUXURY BACKGROUND GRAPHICS ─── */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-white/[0.02] blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.03] pointer-events-none hidden lg:block" />
 
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ─── HEADER AREA (PRESTIGE EDITORIAL) ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20 border-b border-white/5 pb-6 sm:pb-8 lg:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Globe className="h-4 w-4 text-white animate-pulse shrink-0" />
              <span className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[9px] sm:text-[10px] font-bold text-white" style={label}>
                Global Network
              </span>
            </div>
            
            <h2 className="leading-none tracking-wide text-white" style={{ ...display, fontSize: "clamp(2.5rem, 9vw, 4.5rem)" }}>
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8C8C8C] to-[#444]">FOOTPRINTS.</span>
            </h2>
          </motion.div>
 
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[#8C8C8C] text-xs sm:text-sm max-w-sm font-light leading-relaxed mb-1"
            style={body}
          >
            Headquartered in Noida, our state-of-the-art diagnostic and craftsmanship studios command prime locations across India and premium sectors in India.
          </motion.p>
        </div>
 
        {/* ─── ASYMMETRICAL LUXURY INTERLOCKING LAYOUT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT SIDE: Interactive Selector List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-3 sm:gap-4 order-2 lg:order-1">
            {outlets.map((o, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative p-5 xs:p-6 sm:p-8 cursor-pointer transition-all duration-500 border rounded-none ${
                    isActive 
                      ? "bg-[#141414] border-white/30 shadow-2xl shadow-black" 
                      : "bg-transparent border-transparent hover:bg-[#111]/40 hover:border-white/10"
                  }`}
                >
                  {/* Subtle Interactive left accent bar */}
                  <div className={`absolute left-0 inset-y-0 w-[2px] bg-white transition-transform duration-500 origin-bottom ${
                    isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-50"
                  }`} />
 
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="space-y-1 min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#444] group-hover:text-white/50 transition-colors">
                        // LOCATION 0{idx + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl text-white tracking-wider uppercase transition-colors group-hover:text-white" style={display}>
                        {o.city}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-white font-medium uppercase tracking-wider pt-1" style={label}>
                        {o.studios}
                      </p>
                    </div>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-none border border-white/10 flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isActive ? "bg-white border-white text-black" : "text-[#8C8C8C] group-hover:text-white group-hover:border-white/30"
                    }`}>
                      <ArrowUpRight size={14} className="sm:hidden" />
                      <ArrowUpRight size={16} className="hidden sm:block" />
                    </div>
                  </div>
 
                  {/* Expandable Text Body Description */}
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[11px] sm:text-xs leading-relaxed text-[#8C8C8C] font-light pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/5" style={body}>
                      {o.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
 
          {/* RIGHT SIDE: Heavy Flagship Cinematic Viewport (7 Columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/3] xs:aspect-[16/11] sm:aspect-[16/9] lg:h-full w-full overflow-hidden bg-[#161616] border border-white/5 shadow-2xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={outlets[activeIndex].img}
                    alt={outlets[activeIndex].city}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
                  />
                  {/* Luxury Metallic Shadow Shaders */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/40 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 p-4 xs:p-5 sm:p-8 flex items-center gap-2 text-white">
                    <MapPin size={13} className="sm:hidden animate-bounce shrink-0" />
                    <MapPin size={14} className="hidden sm:block animate-bounce shrink-0" />
                    <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] font-bold uppercase" style={label}>
                      Active Operation Center / {outlets[activeIndex].city}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
 
        </div>
 
      </div>
    </section>
  );
}
 