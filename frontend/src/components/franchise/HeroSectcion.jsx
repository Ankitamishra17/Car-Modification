import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiChevronRight,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const display = { fontFamily: "'Bebas Neue', sans-serif" };
const label = { fontFamily: "'DM Sans', sans-serif" };
const body = { fontFamily: "'Jost', sans-serif" };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// Reusable metallic-sweep hover shine — echoes a polished panel catching light
function Shine() {
  return (
    <span className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute -inset-y-full -left-1/2 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-[#F0F0F0]/25 to-transparent translate-x-[-160%] group-hover:translate-x-[420%] transition-transform duration-[1200ms] ease-out" />
    </span>
  );
}

const specs = [
  { label: "Franchise Fee", value: "₹8,00,000 – ₹12,00,000" },
  { label: "Studio Area Required", value: "1,200 – 1,800 sq. ft." },
  { label: "Total Setup Investment", value: "₹35,00,000 – ₹55,00,000" },
  { label: "Estimated ROI Period", value: "18 – 24 Months" },
  { label: "Franchise Term", value: "5 Years, Renewable" },
];

export default function FranchisePage() {
  return (
    <div className="bg-[#0B0B0B] text-[#F0F0F0] min-h-screen relative overflow-hidden px-0" style={body}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden border-b border-[#3D3D3D]/30">
        <div
          className="absolute -top-40 -left-20 w-[700px] h-[700px] rounded-full opacity-[0.10] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #C0C0C0, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-32 lg:-mt-[40px] pb-24 md:pt-40 md:pb-32 grid md:grid-cols-2 gap-14 items-center">
          
          {/* LEFT — Text Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[13vw] md:text-[4.2rem] lg:text-[6rem] leading-[0.95] tracking-wide uppercase"
              style={display}
            >
              <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)", color: "transparent" }}>
                Franchise
              </span>
              <br />
              <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)", color: "transparent" }}>
                Opportunity
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-[#8C8C8C] text-base md:text-[15px] font-light leading-relaxed max-w-xl"
              style={body}
            >
              If you're passionate about automobiles and seeking a promising
              business opportunity, Dettagli Auto franchise partnerships offer 
              unmatched scale. As a leader in premium body shop and detailing services with
              a strong structural reputation, Dettagli Auto is a brand that has captivated 
              car enthusiasts nationwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10"
            >
              <a
                href="#apply"
                className="group relative inline-flex items-center gap-6 overflow-hidden bg-[#F0F0F0] text-[#0B0B0B] px-8 py-4 uppercase text-xs font-bold tracking-widest transition-all duration-300 hover:bg-[#8C8C8C]"
                style={label}
              >
                <span>Book a Free Consultation Call</span>
                <FiChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                <Shine />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Premium Car Asset Block */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center group"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] rounded-full opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-30"
              style={{
                background: "radial-gradient(circle, #C0C0C0, transparent 70%)",
              }}
            />

            <motion.img
              src="https://i.pinimg.com/1200x/5e/8f/1d/5e8f1d5bc95da3002d86a46d8b1befc2.jpg"
              alt="Dettagli Auto franchise studio car"
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)] filter grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floor Reflection Line */}
            <div
              className="relative z-0 w-[85%] h-24 -mt-6 opacity-15 transition-opacity duration-700 group-hover:opacity-25"
              style={{
                backgroundImage: "url(https://i.pinimg.com/1200x/5e/8f/1d/5e8f1d5bc95da3002d86a46d8b1befc2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "scaleY(-1)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
                filter: "blur(3px)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------- QUICK STATS ---------------- */}
      <section className="border-b border-[#3D3D3D]/30 bg-[#090909]">
        <div className="max-w-7xl mx-auto px-0 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#3D3D3D]/30 border-x border-[#3D3D3D]/30">
          {[
            { n: "12+", l: "Cities OPERATIONAL" },
            { n: "5 Yrs", l: "Franchise Term" },
            { n: "18–24 Mo", l: "Avg. ROI Period" },
            { n: "100%", l: "Setup Support" },
          ].map((s, i) => (
            <div 
              key={i} 
              className="group relative py-12 text-center px-4 overflow-hidden transition-all duration-500 cursor-default"
            >
              {/* Subtle grid background card hover panels */}
              <div className="absolute inset-0 bg-[#121212] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10" />
              
              <div className="text-3xl md:text-4xl text-[#8C8C8C] group-hover:text-white transition-colors duration-300 tracking-wide" style={display}>
                {s.n}
              </div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#555555] group-hover:text-[#8C8C8C] mt-2 transition-colors duration-300" style={label}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SPEC SHEET (Signature Element) ---------------- */}
      <section className="border-b border-[#3D3D3D]/30 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#8C8C8C]" />
              <span className="proc-title text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C8C8C]">
                Investment Allocation Matrix
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl tracking-wide uppercase text-white" style={display}>
              THE BUILD SPECIFICATION
            </h2>
          </motion.div>

          {/* Matrix Dynamic Interactive Container */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="border border-[#3D3D3D]/40 divide-y divide-[#3D3D3D]/30 bg-[#121212]/30"
          >
            {specs.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative flex items-center justify-between px-6 md:px-10 py-6 transition-all duration-500 ease-in-out cursor-default"
              >
                {/* Horizontal Sliding background layout block indicator */}
                <div className="absolute inset-0 bg-[#141414] scale-y-0 origin-bottom transition-transform duration-500 ease-out -z-10" />

                <span className="flex items-center gap-4 text-[#8C8C8C] group-hover:text-[#8C8C8C] uppercase text-[11px] font-medium tracking-[0.20em] transition-colors duration-300" style={label}>
                  <span className="w-3 h-px bg-[#3D3D3D] group-hover:bg-[#8C8C8C] transition-colors duration-300" />
                  {s.label}
                </span>
                
                <span className="text-lg md:text-xl text-[#B8B8B8] group-hover:text-white transition-colors duration-300 tracking-wide uppercase" style={display}>
                  {s.value}
                </span>

                {/* Left Active Luxury Accent Vertical Pin Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8C8C8C] scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              </motion.div>
            ))}
          </motion.div>
          
          <p className="text-[12px] font-light text-[#555555] mt-6" style={body}>
            // Note: Figures are indicative and vary by target micro-market city, studio setup parameters, and site terrain structural realities. Final numbers confirmed inside documentation phase.
          </p>
        </div>
      </section>

      {/* ---------------- CLOSING CONTACT STRIP ---------------- */}
      <section className="bg-[#0B0B0B]">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-[#666666] font-light"
          style={body}
        >
          <span className="tracking-wide uppercase text-[11px] font-mono">// Growth Engine: Dettagli Auto Corporate Operations Team</span>
          <div className="flex items-center gap-8">
            <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-white transition-colors duration-300">
              <FiPhone size={12} className="text-[#3D3D3D]" /> <span>+91 00000 00000</span>
            </a>
            <a href="mailto:franchise@dettagliauto.com" className="flex items-center gap-2 hover:text-white transition-colors duration-300">
              <FiMail size={12} className="text-[#3D3D3D]" /> <span>franchise@dettagliauto.com</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}