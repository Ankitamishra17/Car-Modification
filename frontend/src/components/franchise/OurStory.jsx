import React from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const display = { fontFamily: "'Bebas Neue', sans-serif" };
const label = { fontFamily: "'DM Sans', sans-serif" };
const body = { fontFamily: "'Jost', sans-serif" };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const log = [
  {
    step: "01",
    year: "2015",
    odo: "000,412 KM",
    title: "First Bay Opens",
    text: "One rented bay, two detailers, and a hand-written intake sheet. Dettagli Auto starts the way most good workshops do — fixing what other shops rushed.",
  },
  {
    step: "02",
    year: "2017",
    odo: "041,860 KM",
    title: "The Studio Standard",
    text: "We rebuild the process from the ground up: lighting rigs for paint inspection, climate-controlled bays, and a checklist every car clears before it leaves.",
  },
  {
    step: "03",
    year: "2019",
    odo: "128,330 KM",
    title: "Ceramic Certification",
    text: "Our detailing team completes factory-level ceramic coating certification, turning a premium add-on into the studio's signature service.",
  },
  {
    step: "04",
    year: "2022",
    odo: "266,904 KM",
    title: "First Franchise Bay",
    text: "The Dettagli Auto playbook — layout, training, supplier list — gets documented and handed to our first franchise partner outside the home city.",
  },
  {
    step: "05",
    year: "2026",
    odo: "512,177 KM",
    title: "12 Cities, One Standard",
    text: "Today the studios run to the same spec sheet in every city. Different address, same inspection light.",
  },
];

const principles = [
  {
    code: "P.01",
    label: "Every Car Gets a Sheet",
    value: "Written intake, no verbal promises",
  },
  {
    code: "P.02",
    label: "Lighting Before Judgement",
    value: "No paint call made outside inspection light",
  },
  {
    code: "P.03",
    label: "One Studio Standard",
    value: "Same checklist, city 1 or city 12",
  },
  {
    code: "P.04",
    label: "Nothing Leaves Unchecked",
    value: "Second inspector signs off before handover",
  },
];

export default function OurStory() {
  return (
    <div
      className="bg-[#0B0B0B] text-[#F0F0F0] min-h-screen relative overflow-hidden"
      style={body}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      {/* ---------------- BUILD LOG WORKFLOW SECTION ---------------- */}
      <section className="border-b border-[#3D3D3D]/30 relative">
        {/* Main Parent Container - Stretch Max Width for more breathing space */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 py-24">
          {/* Layout Split Grid: 3-to-9 Ratio for Wider Right Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Fixed/Sticky Minimal Navigation Block (Narrowed down) */}
            <div className="lg:col-span-3 lg:sticky lg:top-28 flex flex-col justify-start h-auto lg:h-[70vh] relative select-none pointer-events-none">
              {/* Small Accent Header Stamp */}
              <div className="flex items-center gap-3 ml-15">
                <span className="h-px w-6 bg-white" />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-white"
                  style={label}
                >
                  Log Matrix
                </span>
              </div>

              {/* Outlined Vertical Text Layer */}
              <div className="absolute left-25 top-0 origin-left rotate-90 whitespace-nowrap pl-1">
                <div
                  className="text-[100px] md:text-[115px] lg:text-[125px] font-black tracking-[0.12em] text-transparent uppercase leading-none"
                  style={{
                    ...display,
                    WebkitTextStroke: "1px rgba(255, 255, 255, 0.22)",
                    transformOrigin: "0 0",
                  }}
                >
                  BUILD HISTORY
                </div>
              </div>
            </div>

            {/* Right Column: Workflow Phase Feed (EXPANDED WIDTH) */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="lg:col-span-9 border border-[#3D3D3D]/30 divide-y divide-[#3D3D3D]/20 bg-[#121212]/10 w-full"
            >
              {log.map((entry, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative grid grid-cols-1 sm:grid-cols-12 gap-6 p-6 md:p-8 lg:p-10 transition-all duration-500 ease-in-out cursor-default overflow-hidden"
                >
                  {/* Workflow Hover Sliding Fill */}
                  <div className="absolute inset-0 bg-[#141414] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10" />

                  {/* Left Active Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8C8C8C] scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />

                  {/* Step Code Block */}
                  <div className="sm:col-span-2 flex items-baseline gap-2 sm:flex-col sm:gap-0 select-none">
                    <span
                      className="text-2xl md:text-3xl lg:text-4xl text-[#3D3D3D] group-hover:text-white transition-colors duration-300 leading-none"
                      style={display}
                    >
                      {entry.step}
                    </span>
                    <span
                      className="text-[10px] font-mono tracking-wider text-[#555555] uppercase sm:mt-1.5"
                      style={label}
                    >
                      Phase
                    </span>
                  </div>

                  {/* Metadata Stamp Block */}
                  <div className="sm:col-span-2 select-none">
                    <div
                      className="text-2xl md:text-3xl lg:text-4xl text-[#8C8C8C] group-hover:text-white transition-colors duration-300 tracking-wide leading-none"
                      style={display}
                    >
                      {entry.year}
                    </div>
                    <div
                      className="text-[9px] text-[#555555] group-hover:text-[#8C8C8C] uppercase tracking-[0.15em] mt-1.5 transition-colors duration-300"
                      style={label}
                    >
                      {entry.odo}
                    </div>
                  </div>

                  {/* Content Sheet Block (Takes up the rest of the expanded row space smoothly) */}
                  <div className="sm:col-span-8 space-y-2 pt-1 sm:pt-0">
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className="text-lg md:text-xl lg:text-2xl tracking-wide text-[#B8B8B8] group-hover:text-white transition-colors duration-300 uppercase"
                        style={display}
                      >
                        {entry.title}
                      </h3>
                      <FiArrowRight
                        size={16}
                        className="text-[#3D3D3D] group-hover:text-white translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    <p
                      className="text-[#666666] group-hover:text-[#8C8C8C] leading-relaxed text-[13px] lg:text-[14px] font-light transition-colors duration-300 max-w-4xl"
                      style={body}
                    >
                      {entry.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- PRINCIPLES SECTION ---------------- */}
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
              <span
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C8C8C]"
                style={label}
              >
                Shop Principles
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl tracking-wide uppercase text-white"
              style={display}
            >
              WHAT DOESN'T CHANGE.
            </h2>
          </motion.div>

          {/* Matrix Grid System Layout */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="border border-[#3D3D3D]/40 divide-y divide-[#3D3D3D]/30 bg-[#121212]/30"
          >
            {principles.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 md:px-10 py-6 transition-all duration-500 ease-in-out cursor-default"
              >
                <div className="absolute inset-0 bg-[#141414] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10" />

                <span
                  className="flex items-center gap-4 text-[#8C8C8C] uppercase text-[11px] font-medium tracking-[0.20em] transition-colors duration-300"
                  style={label}
                >
                  <span
                    className="px-1.5 py-0.5 text-[9px] font-bold bg-[#1A1A1A] border border-[#3D3D3D] text-[#555555] group-hover:bg-[#F0F0F0] group-hover:text-[#0B0B0B] group-hover:border-[#F0F0F0] transition-all duration-300 tracking-normal"
                    style={display}
                  >
                    {p.code}
                  </span>
                  {p.label}
                </span>

                <span
                  className="text-base md:text-lg text-[#B8B8B8] group-hover:text-white transition-colors duration-300 tracking-wide uppercase md:text-right"
                  style={display}
                >
                  {p.value}
                </span>

                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8102E] scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- CLOSING CONTACT STRIP ---------------- */}
      {/* <section className="bg-[#0B0B0B]">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-[#666666] font-light border-t border-[#3D3D3D]/10"
          style={body}
        >
          <span className="tracking-wide uppercase text-[11px] font-mono flex items-center gap-2">
            <FiMapPin size={12} className="text-[#3D3D3D]" /> Dettagli Auto — 12
            Studios Nationwide
          </span>
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <FiPhone size={12} className="text-[#3D3D3D]" />{" "}
              <span>+91 00000 00000</span>
            </a>
            <a
              href="mailto:hello@dettagliauto.com"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <FiMail size={12} className="text-[#3D3D3D]" />{" "}
              <span>hello@dettagliauto.com</span>
            </a>
            <span className="flex items-center gap-2 select-none">
              <FiClock size={12} className="text-[#3D3D3D]" />{" "}
              <span>Mon–Sat, 10am–7pm</span>
            </span>
          </div>
        </div>
      </section> */}
    </div>
  );
}
