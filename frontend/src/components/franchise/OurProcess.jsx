import React from 'react';
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
    title: "Setup & Launch",
    text: "Studio build-out, team training, and grand opening backed by regional marketing.",
  },
  {
    n: "05",
    title: "Launch",
    text: "Grand opening backed by regional marketing support.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function OurProcess() {
  
  const renderFormattedHeading = (text) => {
    if (!text) return "";
    const parts = text.split(/\*(.*?)\*/g);
    return parts.map((part, index) => 
      index % 2 === 1 ? (
        <span
          key={index}
          className="inline-block mx-2 sm:mx-4"
          style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="bg-[#0B0B0B] py-24 relative overflow-hidden px-0">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .proc-heading { font-family: 'Bebas Neue', sans-serif; }
        .proc-title   { font-family: 'DM Sans', sans-serif; }
        .proc-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Dynamic Studio Header Block */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20 space-y-4 max-w-5xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#8C8C8C]" />
            <span className="proc-title text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C8C8C]">
              How It Works // FRANCHISE MODEL
            </span>
          </div>

          <h2 className="proc-heading text-[3.5rem] sm:text-[5rem] lg:text-[5.5rem] leading-[0.9] text-white tracking-wide uppercase">
            {renderFormattedHeading("FIVE STEPS TO *LAUNCH*.")}
          </h2>
        </motion.div>

        {/* Studio Core Matrix Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* 
            LEFT STICKY PILLAR: 
            Changed 'justify-center h-[400px]' to 'justify-start pt-2' 
            This aligns the 'W' of WORKFLOW perfectly flush with Step 1's top line.
          */}
          <div className="hidden lg:flex lg:col-span-2 sticky top-32 select-none pointer-events-none flex-col justify-start items-start">
            <span 
              className="proc-heading text-[10rem] leading-[0.75] text-[#2A2A2A] tracking-widest uppercase block rotate-90 origin-left translate-x-12" 
              style={{ WebkitTextStroke: "1px #7b7777", color: "transparent" }}
            >
              WORKFLOW
            </span>
          </div>

          {/* Right Core System Panel */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="col-span-1 lg:col-span-10 border-t border-[#3D3D3D]/30 divide-y divide-[#3D3D3D]/30"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className="group relative py-10 sm:py-12 transition-all duration-500 ease-in-out cursor-default"
              >
                <div className="absolute inset-0 bg-[#121212] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10" />

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start relative z-10 px-4 sm:px-6">
                  
                  {/* Row Phase Counter Data */}
                  <div className="sm:col-span-2 flex items-center gap-4 sm:flex-col sm:items-start sm:gap-1">
                    <span className="proc-heading text-[2.5rem] leading-none text-[#4E4E4E] group-hover:text-white transition-colors duration-300">
                      {s.n}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-[#3D3D3D] group-hover:text-[#8C8C8C]">
                      // PHASE_STG
                    </span>
                  </div>

                  {/* Row Core Title Engine */}
                  <div className="sm:col-span-4">
                    <h4 className="proc-title text-[16px] font-bold uppercase tracking-wider text-white group-hover:text-[#8C8C8C] transition-colors duration-300 sm:mt-2">
                      {s.title}
                    </h4>
                  </div>

                  {/* Row Narrative/Explanatory block */}
                  <div className="sm:col-span-6">
                    <p className="proc-sub text-[14px] leading-relaxed font-light text-[#B8B8B8] group-hover:text-white transition-colors duration-300">
                      {s.text}
                    </p>
                  </div>

                </div>

                {/* Left Active Luxury Accent Bar Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8C8C8C] scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default OurProcess;