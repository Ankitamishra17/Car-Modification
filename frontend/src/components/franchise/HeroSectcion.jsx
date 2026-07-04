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
 * DETTAGLI AUTO — FRANCHISE PAGE
 * -------------------------------------------------------------
 * Colors:
 *   Primary BG      #0B0B0B
 *   Alt Section BG  #0F0F0F
 *   Primary Text    #F0F0F0
 *   Silver Accent   #C0C0C0
 *   Muted Silver    #8C8C8C
 *   Signal Red      #C8102E   <- new: used only for "live/scan" moments
 *
 * Fonts:
 *   Bebas Neue  -> headings (industrial, tall, automotive)
 *   DM Sans     -> labels / CTAs / eyebrows
 *   Jost        -> body copy
 *
 * Signature element: the page reads like a diagnostic bay readout —
 * the hero is framed like a scanner viewfinder over a real studio shot,
 * and that same HUD language carries into the "Build Spec" sheet below.
 *
 * RESPONSIVE NOTES
 *   - Fluid type via clamp() so headings scale continuously between
 *     ~320px phones and ultra-wide desktops instead of jumping at
 *     fixed breakpoints.
 *   - Hero height uses svh/dvh fallbacks so mobile browser chrome
 *     (address bar show/hide) doesn't clip or over-scroll content.
 *   - Spec sheet rows and the stats dock reflow independently at
 *     their own breakpoints so they don't feel tied to the hero's.
 *   - A 2xl max-width cap keeps line-length and spacing sane on
 *     very large / ultra-wide monitors.
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

// Corner bracket — the recurring "viewfinder / scanner" motif
function Bracket({ position }) {
  const pos = {
    "top-left": "top-4 left-4 sm:top-6 sm:left-6 border-t-2 border-l-2",
    "top-right": "top-4 right-4 sm:top-6 sm:right-6 border-t-2 border-r-2",
    "bottom-left":
      "bottom-4 left-4 sm:bottom-6 sm:left-6 border-b-2 border-l-2",
    "bottom-right":
      "bottom-4 right-4 sm:bottom-6 sm:right-6 border-b-2 border-r-2",
  };
  return (
    <span
      className={`absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-[#C0C0C0]/50 ${pos[position]}`}
    />
  );
}

const specs = [
  { code: "S.01", label: "Franchise Fee", value: "OMR 3,000 – 4,500" },
  {
    code: "S.02",
    label: "Studio Area Required",
    value: "1,200 – 1,800 sq. ft.",
  },
  {
    code: "S.03",
    label: "Total Setup Investment",
    value: "OMR 14,000 – 20,000",
  },
  { code: "S.04", label: "Estimated ROI Period", value: "18 – 24 Months" },
  { code: "S.05", label: "Franchise Term", value: "5 Years, Renewable" },
];

export default function FranchisePage() {
  return (
    <div className="bg-[#0B0B0B] text-[#F0F0F0] min-h-screen" style={body}>
      {/* ---------------- HERO / BANNER ---------------- */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{ minHeight: "100svh" }}
      >
        {/* Background photograph */}
        <div className="absolute inset-0">
          <img
            src="/banner/franchise.png"
            alt=""
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Left-to-right read gradient so copy stays legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/25" />
          {/* Bottom fade so the floating stats dock reads clean */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/10 to-transparent" />
        </div>

        {/* Live status readout, top-right of frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-4 right-4 sm:top-10 sm:right-10 md:top-14 md:right-14 hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8C8C8C]"
          style={label}
        >
          <FiActivity size={12} className="text-[#ffffff] shrink-0" />
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff]/60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ffffff]" />
          </span>
          <span className="whitespace-nowrap">Studios Live · 12 Cities</span>
        </motion.div>

        {/* Copy block */}
        <div className="relative w-full max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-10 pb-28 xs:pb-32 sm:pb-40 md:pb-48">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 sm:gap-3 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-xs text-[#8C8C8C] mb-5 sm:mb-7 border border-[#8C8C8C]/30 px-3 sm:px-4 py-1.5 sm:py-2"
              style={label}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff] flex-shrink-0" />
              Now Expanding Nationwide
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="leading-[0.88] tracking-wide"
              style={{
                ...display,
                fontSize: "clamp(2.75rem, 11vw, 7.5rem)",
              }}
            >
              <span className="block text-[#F0F0F0]">Franchise</span>
              <span
                className="block"
                style={{
                  WebkitTextStroke: "2px rgba(240,240,240,0.9)",
                  color: "transparent",
                }}
              >
                Opportunity
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-5 sm:mt-8 text-[#C0C0C0] text-sm sm:text-base md:text-lg max-w-lg border-l-2 border-[#C8102E]/70 pl-4 sm:pl-5"
              style={body}
            >
              If you're passionate about automobiles and seeking a promising
              business opportunity, partner with Dettagli Auto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-7 sm:mt-10 flex flex-col xs:flex-row xs:flex-wrap items-start xs:items-center gap-3.5 sm:gap-5"
            >
              <a
                href="#apply"
                className="group relative inline-flex w-full xs:w-auto items-center justify-center gap-3 sm:gap-6 overflow-hidden bg-[#F0F0F0] text-[#0B0B0B] px-5 sm:px-8 py-3.5 sm:py-4 uppercase text-[11px] sm:text-xs font-bold tracking-widest transition-all duration-300 hover:bg-[#8C8C8C]"
                style={label}
              >
                <span>Book a Free Consultation Call</span>
                <FiChevronRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                />
                <Shine />
              </a>
              <span
                className="text-[10px] sm:text-xs text-[#8C8C8C] uppercase tracking-[0.15em]"
                style={label}
              >
                Response within 2 business days
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating stats dock — replaces the separate stats section, overlaps the hero's bottom edge */}
      </section>

      {/* ---------------- SPEC SHEET (signature element) ---------------- */}
      <section className="border-b border-[#8C8C8C]/20 bg-[#0F0F0F]">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-16 py-12 xs:py-16 sm:py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-8 xs:mb-10 sm:mb-14 space-y-3"
          >
            <p
              className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-[#8C8C8C] mb-3 sm:mb-4"
              style={label}
            >
              Investment Sheet
            </p>
            <h2
              className="leading-none"
              style={{ ...display, fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
            >
              THE BUILD SPEC.
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
                className={`group relative flex flex-col sm:flex-row sm:items-center items-start justify-between gap-1.5 sm:gap-6 px-4 xs:px-5 sm:px-6 md:px-10 py-4 xs:py-5 sm:py-6 overflow-hidden ${
                  i !== specs.length - 1 ? "border-b border-[#8C8C8C]/20" : ""
                }`}
              >
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span
                  className="flex flex-wrap items-center gap-2 sm:gap-4 text-[#8C8C8C] uppercase text-[10px] xs:text-[11px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em]"
                  style={label}
                >
                  <span className="text-[#4d4d4d]" style={display}>
                    {s.code}
                  </span>
                  {s.label}
                </span>
                <span
                  className="text-sm xs:text-base sm:text-lg md:text-xl text-[#F0F0F0] text-left sm:text-right"
                  style={display}
                >
                  {s.value}
                </span>

                {/* Left Active Luxury Accent Vertical Pin Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8C8C8C] scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              </motion.div>
            ))}
          </motion.div>
          <p className="text-[11px] xs:text-xs text-[#8C8C8C] mt-5 sm:mt-6" style={body}>
            Figures are indicative and vary by city, studio size, and site
            conditions — final numbers confirmed during the site visit.
          </p>
        </div>
      </section>

      {/* ---------------- CLOSING CONTACT STRIP ---------------- */}
      {/* <section className="border-t border-[#8C8C8C]/20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#8C8C8C]" style={body}>
          <span className="flex items-center gap-2 uppercase tracking-[0.15em] text-xs" style={label}>
            <FiMapPin size={14} className="text-[#C0C0C0]" />
            Franchise Enquiries — Dettagli Auto Growth Team
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-2">
              <FiPhone size={14} /> +91 00000 00000
            </span>
            <span className="flex items-center gap-2">
              <FiMail size={14} /> franchise@dettagliauto.com
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