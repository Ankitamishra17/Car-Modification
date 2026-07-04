import React from "react";
import { motion } from "framer-motion";
import {
  FiChevronRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiActivity,
} from "react-icons/fi";

/**
 * DETTAGLI AUTO — OUR STORY
 * -------------------------------------------------------------
 * Shares the franchise page's brand system:
 *   Primary BG      #0B0B0B
 *   Alt Section BG  #0F0F0F
 *   Primary Text    #F0F0F0
 *   Silver Accent   #C0C0C0
 *   Muted Silver    #8C8C8C
 *   Signal Red      #C8102E
 *
 *   Bebas Neue  -> headings
 *   DM Sans     -> labels / eyebrows / CTAs
 *   Jost        -> body copy
 *
 * Signature element: the "Build Log" — the brand's history told as a
 * vehicle service record, odometer-style year stamps down a center rail.
 * It's the same diagnostic-bay language as the franchise page's Spec
 * Sheet, applied to the company's own timeline instead of an investment.
 * -------------------------------------------------------------
 */

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

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Bracket({ position }) {
  const pos = {
    "top-left": "top-6 left-6 border-t-2 border-l-2",
    "top-right": "top-6 right-6 border-t-2 border-r-2",
    "bottom-left": "bottom-6 left-6 border-b-2 border-l-2",
    "bottom-right": "bottom-6 right-6 border-b-2 border-r-2",
  };
  return (
    <span
      className={`absolute w-8 h-8 md:w-10 md:h-10 border-[#C0C0C0]/50 ${pos[position]}`}
    />
  );
}

const log = [
  {
    year: "2015",
    odo: "000,412 KM",
    title: "First Bay Opens",
    text: "One rented bay, two detailers, and a hand-written intake sheet. Dettagli Auto starts the way most good workshops do — fixing what other shops rushed.",
  },
  {
    year: "2017",
    odo: "041,860 KM",
    title: "The Studio Standard",
    text: "We rebuild the process from the ground up: lighting rigs for paint inspection, climate-controlled bays, and a checklist every car clears before it leaves.",
  },
  {
    year: "2019",
    odo: "128,330 KM",
    title: "Ceramic Certification",
    text: "Our detailing team completes factory-level ceramic coating certification, turning a premium add-on into the studio's signature service.",
  },
  {
    year: "2022",
    odo: "266,904 KM",
    title: "First Franchise Bay",
    text: "The Dettagli Auto playbook — layout, training, supplier list — gets documented and handed to our first franchise partner outside the home city.",
  },
  {
    year: "2026",
    odo: "512,177 KM",
    title: "12 Cities, One Standard",
    text: "Today the studios run to the same spec sheet in every city. Different address, same inspection light.",
  },
];

const principles = [
  { code: "P.01", label: "Every Car Gets a Sheet", value: "Written intake, no verbal promises" },
  { code: "P.02", label: "Lighting Before Judgement", value: "No paint call made outside inspection light" },
  { code: "P.03", label: "One Studio Standard", value: "Same checklist, city 1 or city 12" },
  { code: "P.04", label: "Nothing Leaves Unchecked", value: "Second inspector signs off before handover" },
];

export default function OurStory() {
  return (
    <div className="bg-[#0B0B0B] text-[#F0F0F0] min-h-screen" style={body}>
      {/* ---------------- HERO ---------------- */}
    

      {/* ---------------- FOUNDER NOTE ---------------- */}

      {/* ---------------- BUILD LOG (signature element) ---------------- */}
      <section className="border-b border-[#8C8C8C]/20">
        <div className="max-w-7xl mx-auto px-12 py-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <p
              className="uppercase tracking-[0.3em] text-xs text-[#8C8C8C] mb-4"
              style={label}
            >
              Service History
            </p>
            <h2 className="text-4xl md:text-5xl" style={display}>
              THE BUILD LOG.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            {/* center rail */}
            <span className="absolute left-[4.5rem] md:left-[6.5rem] top-2 bottom-2 w-px bg-[#8C8C8C]/25" />

            {log.map((entry, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative flex gap-6 md:gap-10 pb-14 last:pb-0 group"
              >
                <div className="w-[4.5rem] md:w-[6.5rem] shrink-0 text-right">
                  <div className="text-2xl md:text-3xl text-[#F0F0F0]" style={display}>
                    {entry.year}
                  </div>
                  <div className="text-[9px] md:text-[10px] text-[#8C8C8C] uppercase tracking-[0.15em] mt-1" style={label}>
                    {entry.odo}
                  </div>
                </div>

                <span className="absolute left-[4.5rem] md:left-[6.5rem] top-1.5 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-[#0B0B0B] border-2 border-[#C8102E] group-hover:scale-125 transition-transform duration-300" />

                <div className="pl-8 md:pl-10 border-l border-[#8C8C8C]/0">
                  <h3 className="text-xl md:text-2xl mb-2 tracking-wide" style={display}>
                    {entry.title}
                  </h3>
                  <p className="text-[#8C8C8C] leading-relaxed max-w-xl" style={body}>
                    {entry.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- PRINCIPLES (reuses spec-sheet language) ---------------- */}
      <section className="border-b border-[#8C8C8C]/20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-12 py-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <p
              className="uppercase tracking-[0.3em] text-xs text-[#8C8C8C] mb-4"
              style={label}
            >
              Shop Principles
            </p>
            <h2 className="text-4xl md:text-5xl" style={display}>
              WHAT DOESN'T CHANGE.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="border border-[#8C8C8C]/25"
          >
            {principles.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`group relative flex items-center justify-between gap-6 px-6 md:px-10 py-6 overflow-hidden ${
                  i !== principles.length - 1 ? "border-b border-[#8C8C8C]/20" : ""
                }`}
              >
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8102E] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span
                  className="flex items-center gap-4 text-[#8C8C8C] uppercase text-xs tracking-[0.2em]"
                  style={label}
                >
                  <span className="text-[#4d4d4d]" style={display}>
                    {p.code}
                  </span>
                  {p.label}
                </span>
                <span
                  className="text-base md:text-lg text-[#F0F0F0] text-right"
                  style={display}
                >
                  {p.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
  

      {/* ---------------- CLOSING CONTACT STRIP ---------------- */}
      {/* <section>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#8C8C8C]" style={body}>
          <span className="flex items-center gap-2 uppercase tracking-[0.15em] text-xs" style={label}>
            <FiMapPin size={14} className="text-[#C0C0C0]" />
            Dettagli Auto — 12 Studios Nationwide
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-2">
              <FiPhone size={14} /> +91 00000 00000
            </span>
            <span className="flex items-center gap-2">
              <FiMail size={14} /> hello@dettagliauto.com
            </span>
            <span className="flex items-center gap-2">
              <FiClock size={14} /> Mon–Sat, 10am–7pm
            </span>
          </div>
        </div>
      </section> */}
    </div>
  );
}