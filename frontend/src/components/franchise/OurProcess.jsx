import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Enquiry",
    text: "Submit your application with your city and investment range.",
  },
  {
    n: "02",
    title: "Discussion & Site Visit",
    text: "Our team evaluates location fit and walks you through the model.",
  },
  {
    n: "03",
    title: "Agreement",
    text: "Franchise terms finalized, territory locked for your city.",
  },
  {
    n: "04",
    title: "Setup & Buildout",
    text: "Studio construction and specialized team training managed end-to-end.",
  },
  {
    n: "05",
    title: "Launch Matrix",
    text: "Grand opening backed by aggressive regional marketing support pipelines.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function OurProcess({ display, label, body }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      {/* ---------------- PROCESS MATRIX SECTION ---------------- */}
      <section className="bg-[#0B0B0B] text-[#F0F0F0] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle Architectural Background Grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] pointer-events-none" />

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-10 sm:mb-12 lg:mb-14 space-y-3 max-w-7xl px-12 mx-auto"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#8C8C8C]" />
            <span
              className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#8C8C8C]"
              style={label}
            >
              How It Works / Execution Matrix
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide text-white uppercase leading-none"
            style={{ ...display, fontFamily: "'Bebas Neue', sans-serif" }}
          >
            FIVE STEPS TO LAUNCH<span className="text-[#8C8C8C]">.</span>
          </h2>
        </motion.div>

        {/* Steps Pipeline Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-5 border border-[#3D3D3D]/30 divide-y md:divide-y-0 md:divide-x divide-[#3D3D3D]/30 bg-[#121212]/20 max-w-7xl mx-auto backdrop-blur-sm"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="group relative p-6 sm:p-8 lg:p-10 transition-all duration-500 ease-in-out cursor-default overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex flex-col justify-between"
            >
              {/* Modern Hover Sliding Background Fill */}
              <div className="absolute inset-0 bg-[#141414] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10" />

              {/* Top Row Indicators */}
              <div className="flex items-center justify-between w-full select-none">
                <div
                  className="text-2xl font-normal tracking-wider text-[#3D3D3D] group-hover:text-white transition-colors duration-300 font-mono"
                  style={{ ...display, fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {s.n}
                </div>
                <div
                  className="text-[10px] font-mono tracking-widest text-[#555555] uppercase"
                  style={label}
                >
                  Phase {s.n}
                </div>
              </div>

              {/* Main Content Info Block */}
              <div className="mt-8 sm:mt-10 lg:mt-12 space-y-3 relative z-10">
                <h3
                  className="uppercase text-lg lg:text-xl font-normal tracking-wide text-[#B8B8B8] group-hover:text-white transition-colors duration-300"
                  style={{ ...display, fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[#666666] group-hover:text-[#8C8C8C] leading-relaxed text-[13px] font-light transition-colors duration-300"
                  style={body}
                >
                  {s.text}
                </p>
              </div>

              {/* Decorative Subtle Corner Accent Node */}
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#3D3D3D]/40 group-hover:bg-[#8C8C8C] transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
