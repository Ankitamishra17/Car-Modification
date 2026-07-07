import React from "react";
import { motion } from "framer-motion";

/**
 * DETTAGLI AUTO — WHY PARTNER WITH US
 * -------------------------------------------------------------
 * Reference: 8-tile grid of desaturated photos, each carrying a bold
 * uppercase label, under a two-line question headline.
 *
 * Kept in the existing system:
 *   Colors -> #0B0B0B / #0F0F0F / #F0F0F0 / #C0C0C0 / #8C8C8C
 *   Fonts  -> Bebas Neue (headings/labels) · DM Sans (eyebrow) · Jost (body)
 *
 * Each tile: grayscale photo, dark gradient for legibility, label
 * pinned bottom-left, thin corner accent on hover to match the HUD
 * language used elsewhere on the site.
 *
 * Fully responsive: mobile-first, tuned at xs / sm / md / lg
 * -------------------------------------------------------------
 */

const display = { fontFamily: "'Bebas Neue', sans-serif" };
const label = { fontFamily: "'DM Sans', sans-serif" };

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
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

const items = [
  { n: "01", title: "Self-Proven Concept", img: "https://i.pinimg.com/1200x/29/ee/01/29ee0188999db0b0aebd9edb61a76cc1.jpg" },
  { n: "02", title: "Exclusivity", img: "https://i.pinimg.com/1200x/c5/5a/99/c55a995f05c7c8e43c831d167e31df29.jpg" },
  { n: "03", title: "Digital Marketing Support", img: "https://i.pinimg.com/736x/f6/84/df/f684df0ae9b24c6826b746804b87f62c.jpg" },
  { n: "04", title: "One-Stop Solution", img: "https://i.pinimg.com/736x/c7/46/b6/c746b633f4db61206a88a95005e67835.jpg" },
  { n: "05", title: "Training", img: "https://i.pinimg.com/1200x/ca/f8/48/caf8488644f7efff7ac47eb35cc3c496.jpg" },
  { n: "06", title: "World Class Product", img: "https://i.pinimg.com/1200x/3e/f2/cc/3ef2cc6bf848ac374f54bece43cc8ede.jpg" },
  { n: "07", title: "Billing And CRM Solution", img: "https://i.pinimg.com/736x/3b/dc/fd/3bdcfdf1c9876866329a60e1abe95882.jpg" },
  { n: "08", title: "Maintenance Support", img: "https://i.pinimg.com/736x/4b/8a/f0/4b8af0332e2f20d480dd5e90fe49b271.jpg" },
];

export default function WhyPartnerWithUs() {
  return (
    <section className="relative bg-[#0B0B0B] text-[#F0F0F0] px-4 xs:px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-28 overflow-hidden">
      {/* Subtle Architectural Background Grid lines — consistent with Process section */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] opacity-[0.15] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="relative mb-9 sm:mb-12 lg:mb-14 max-w-7xl mx-auto text-center space-y-3"
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <span className="h-px w-4 sm:w-6 bg-[#8C8C8C] shrink-0" />
          <span
            className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-bold text-[#8C8C8C] whitespace-nowrap"
            style={label}
          >
            Partner With Confidence
          </span>
          <span className="h-px w-4 sm:w-6 bg-[#8C8C8C] shrink-0" />
        </div>
        <h2
          className="uppercase leading-[0.95] tracking-wide"
          style={{ ...display, fontSize: "clamp(2.2rem, 7vw, 3.9rem)" }}
        >
          <span className="block text-[#8C8C8C]">So Are You Ready To Become</span>
          <span className="block text-[#F0F0F0]">Our Business Partner?</span>
        </h2>
      </motion.div>

      {/* Tile Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4 max-w-7xl mx-auto"
      >
        {items.map((it) => (
          <motion.div
            key={it.n}
            variants={fadeUp}
            className="group relative aspect-square overflow-hidden border border-[#3D3D3D]/40"
          >
            {/* Photo */}
            <img
              src={it.img}
              alt={it.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 scale-105 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
            />

            {/* Dark tint for legibility, echoes the hero's gradient treatment */}
            <div className="absolute inset-0 bg-[#0B0B0B]/55 group-hover:bg-[#0B0B0B]/35 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent" />

            {/* Index tag */}
            <span
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[9px] sm:text-[10px] tracking-widest text-[#8C8C8C] group-hover:text-[#F0F0F0] transition-colors duration-300"
              style={label}
            >
              {it.n}
            </span>

            {/* Label */}
            <h3
              className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 uppercase leading-[0.95] text-[#F0F0F0]"
              style={{ ...display, fontSize: "clamp(0.85rem, 3.2vw, 1.5rem)" }}
            >
              {it.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}