import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiTool,
  FiChevronRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

/**
 * DETTAGLI AUTO — FRANCHISE PAGE
 * -------------------------------------------------------------
 * Colors:
 *   Primary BG      #0B0B0B
 *   Primary Text    #F0F0F0
 *   Silver Accent   #C0C0C0
 *   Muted Silver    #8C8C8C
 *
 * Fonts:
 *   Bebas Neue  -> headings (industrial, tall, automotive)
 *   DM Sans     -> labels / CTAs / eyebrows
 *   Jost        -> body copy
 *
 * Add to index.html <head>:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
 *
 * Signature element: the "Spec Sheet" investment block — styled like a
 * dyno / build-sheet readout, because this brand sells precision, not fluff.
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
function Shine({ className = "" }) {
  return (
    <span
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span className="absolute -inset-y-full -left-1/2 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-[#F0F0F0]/15 to-transparent translate-x-[-160%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
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

const cities = [
  "Delhi NCR",
  "Lucknow",
  "Jaipur",
  "Chandigarh",
  "Dehradun",
  "Indore",
  "Bhopal",
  "Ludhiana",
];

export default function FranchisePage() {
  return (
    <div className="bg-[#0B0B0B] text-[#F0F0F0] min-h-screen" style={body}>
      {/* ---------------- HERO ---------------- */}

      <section className="relative overflow-hidden border-b border-[#8C8C8C]/20">
        {/* <div
          className="absolute -top-40 -left-20 w-[700px] h-[700px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, #C0C0C0, transparent 70%)",
          }}
        /> */}

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/banner/14.png"
            alt="franchise"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32  lg:-mt-[120px] pb-24 md:pt-40 md:pb-32 grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[13vw] md:text-[4.2rem] lg:text-[6rem] leading-[0.95] tracking-wide"
              style={display}
            >
              <span
                style={{
                  WebkitTextStroke: "2px rgba(255,255,255,0.8)",
                  color: "transparent",
                }}
              >
                Franchise
              </span>
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px rgba(255,255,255,0.8)",
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
              className="mt-8 text-[#8C8C8C] text-base md:text-lg"
              style={body}
            >
              If you're passionate about automobiles and seeking a promising
              business opportunity, Dettagli Auto franchise partnerships across
              county or city name.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10"
            >
              <a
                href="#apply"
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-[#F0F0F0] text-[#0B0B0B] px-8 py-4 uppercase text-sm tracking-widest"
                style={label}
              >
                Book a Free Consultation Call
                <FiChevronRight size={16} />
                <Shine />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- QUICK STATS ---------------- */}
      <section className="border-b border-[#8C8C8C]/20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#8C8C8C]/20">
          {[
            { n: "12+", l: "Cities" },
            { n: "5 Yrs", l: "Franchise Term" },
            { n: "18–24 Mo", l: "Avg. ROI" },
            { n: "100%", l: "Setup Support" },
          ].map((s, i) => (
            <div key={i} className="py-10 text-center px-2">
              <div className="text-3xl md:text-4xl" style={display}>
                {s.n}
              </div>
              <div
                className="text-xs uppercase tracking-[0.2em] text-[#8C8C8C] mt-2"
                style={label}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SPEC SHEET (signature element) ---------------- */}
      <section className="border-y border-[#8C8C8C]/20 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto px-6 py-28">
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
              Investment Sheet
            </p>
            <h2 className="text-4xl md:text-5xl" style={display}>
              THE BUILD SPEC.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="border border-[#8C8C8C]/25"
          >
            {specs.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`flex items-center justify-between px-6 md:px-10 py-6 ${
                  i !== specs.length - 1 ? "border-b border-[#8C8C8C]/20" : ""
                }`}
              >
                <span
                  className="flex items-center gap-4 text-[#8C8C8C] uppercase text-xs tracking-[0.2em]"
                  style={label}
                >
                  <span className="w-2 h-px bg-[#8C8C8C]" />
                  {s.label}
                </span>
                <span
                  className="text-lg md:text-xl text-[#F0F0F0]"
                  style={display}
                >
                  {s.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-xs text-[#8C8C8C] mt-6" style={body}>
            Figures are indicative and vary by city, studio size, and site
            conditions — final numbers confirmed during the site visit.
          </p>
        </div>
      </section>

      {/* ---------------- EXPANSION CITIES ---------------- */}
      {/* <section className="border-t border-[#8C8C8C]/20">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-3 mb-10"
          >
            <FiMapPin className="text-[#C0C0C0]" size={20} />
            <p className="uppercase tracking-[0.3em] text-xs text-[#8C8C8C]" style={label}>
              Now Accepting Applications In
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap gap-3"
          >
            {cities.map((c) => (
              <motion.span
                key={c}
                variants={fadeUp}
                className="border border-[#8C8C8C]/30 px-5 py-2 text-sm uppercase tracking-wide text-[#C0C0C0]"
                style={label}
              >
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ---------------- CLOSING CONTACT STRIP ---------------- */}
      <section className="border-t border-[#8C8C8C]/20">
        <div
          className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#8C8C8C]"
          style={body}
        >
          <span>Franchise Enquiries — Dettagli Auto Growth Team</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FiPhone size={14} /> +91 00000 00000
            </span>
            <span className="flex items-center gap-2">
              <FiMail size={14} /> franchise@dettagliauto.com
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
