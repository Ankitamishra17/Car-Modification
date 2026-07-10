import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiChevronRight,
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiActivity,
} from "react-icons/fi";
import { Link } from "react-router-dom";

/**
 * DETTAGLI AUTO — FRANCHISE PAGE
 * -------------------------------------------------------------
 * Colors:
 *   Primary BG      #0B0B0B
 *   Alt Section BG  #0F0F0F
 *   Primary Text    #F0F0F0
 *   Silver Accent   #C0C0C0
 *   Muted Silver    #8C8C8C
 *
 * Fonts:
 *   Bebas Neue  -> headings (industrial, tall, automotive)
 *   DM Sans     -> labels / CTAs / eyebrows / form fields
 *   Jost        -> body copy
 *
 * Hero layout (per reference):
 *   Left  -> big stacked headline + supporting line
 *   Right -> floating "User Details" enquiry card over the studio photo
 * Same HUD / scanner language (corner brackets, shine sweep) carries
 * through, and the spec sheet below is untouched.
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

const fadeUpCard = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
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

// Shared input styling for the enquiry card — kept minimal/dark to match the palette
function FormField({ placeholder, type = "text", name }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full bg-[#161616] border border-[#3D3D3D]/60 text-[#F0F0F0] placeholder:text-[#8C8C8C] text-sm px-4 py-3.5 focus:outline-none focus:border-[#F0F0F0]/60 transition-colors duration-300"
      style={body}
    />
  );
}

export default function FranchisePage() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    state: "",
    city: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your actual submit handler / API call
    console.log("Franchise enquiry:", form);
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F0F0F0] min-h-screen" style={body}>
      {/* ---------------- HERO / BANNER ---------------- */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "100svh" }}
      >
        {/* Background photograph */}
        <div className="absolute inset-0">
          <img
            src="/banner/franchise.png"
            alt=""
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/40" />
        </div>

        {/* Live status readout, top-right of frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-10 md:right-10 hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8C8C8C] z-10"
          style={label}
        >
          <FiActivity size={12} className="text-[#ffffff] shrink-0" />
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff]/60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ffffff]" />
          </span>
          <span className="whitespace-nowrap">Studios Live · 12 Cities</span>
        </motion.div>

        {/* Two-column layout: headline left, enquiry card right */}
        <div className="relative w-full max-w-7xl 2xl:max-w-[85rem] mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-28 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          {/* ---- Left: headline ---- */}
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
              className="leading-[0.92] tracking-wide"
              style={{
                ...display,
                fontSize: "clamp(2.5rem, 6.2vw, 4.75rem)",
              }}
            >
              <span className="block text-[#F0F0F0]">
                Best Car Detailing
              </span>
              <span className="block text-[#F0F0F0]">
                Franchise Opportunities
              </span>
              <span
                className="block"
                style={{
                  WebkitTextStroke: "2px rgba(240,240,240,0.9)",
                  color: "transparent",
                }}
              >
                in India — Dettagli Auto
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 sm:mt-8 text-[#C0C0C0] text-sm sm:text-base md:text-lg max-w-lg border-l-2 border-white/70 pl-4 sm:pl-5"
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
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 sm:gap-6 overflow-hidden bg-[#F0F0F0] text-[#0B0B0B] px-5 sm:px-8 py-3.5 sm:py-4 uppercase text-[11px] sm:text-xs font-bold tracking-widest transition-all duration-300 hover:bg-[#8C8C8C]"
                style={label}
              >
                <span>Book a Free Consultation Call</span>
                <FiChevronRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                />
                <Shine />
              </Link>
              <span
                className="text-[10px] sm:text-xs text-[#8C8C8C] uppercase tracking-[0.15em]"
                style={label}
              >
                Response within 2 business days
              </span>
            </motion.div>
          </motion.div>

          {/* ---- Right: floating "User Details" enquiry card ---- */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUpCard}
            transition={{ delay: 0.3 }}
            className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="relative bg-[#0F0F0F]/90 backdrop-blur-md border border-[#3D3D3D]/50 px-6 sm:px-8 py-8 sm:py-10">

              <p
                className="uppercase tracking-[0.25em] text-[10px] sm:text-xs text-[#8C8C8C] mb-2"
                style={label}
              >
                Franchise Enquiry
              </p>
              <h2
                className="leading-none mb-6 sm:mb-8"
                style={{ ...display, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                User Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField placeholder="Name" name="name" />
                  <FormField placeholder="Number" name="number" type="tel" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField placeholder="Email" name="email" type="email" />
                  <FormField placeholder="Select State" name="state" />
                </div>
                <FormField placeholder="City Name" name="city" />

                <button
                  type="submit"
                  className="group relative mt-2 inline-flex items-center gap-3 overflow-hidden bg-[#F0F0F0] text-[#0B0B0B] px-6 sm:px-8 py-3.5 sm:py-4 uppercase text-[11px] sm:text-xs font-bold tracking-widest transition-all duration-300 hover:bg-[#8C8C8C]"
                  style={label}
                >
                  <span>Next</span>
                  <FiArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                  />
                  <Shine />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- ABOUT (signature element) ---------------- */}
      <section className="border-b border-[#8C8C8C]/20 bg-[#0F0F0F]">
        <div className="max-w-7xl 2xl:max-w-[85rem] mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-16 py-12 xs:py-16 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* ---- Left: copy ---- */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p
                className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-[#8C8C8C] mb-3 sm:mb-4"
                style={label}
              >
                Who We Are
              </p>
              <h2
                className="leading-none mb-6 sm:mb-8"
                style={{ ...display, fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
              >
                CAR DETAILING FRANCHISE.
              </h2>

              <div className="space-y-5 text-[#C0C0C0] text-sm sm:text-base leading-relaxed" style={body}>
                <p>
                  Dettagli Auto: the epitome of car detailing business, has
                  been a defining part of the automotive industry for over a
                  decade. We specialize in the art of detailing and strive to
                  deliver nothing short of the best. Exclusively for our
                  premium clientele, Dettagli Auto offers an edge over the
                  traditional car wash — with our franchise model built
                  around detailed cleaning services and premium products
                  that keep customers coming back.
                </p>
                <p>
                  After extensive research and development across the Indian
                  market, we brought in international-grade products to help
                  cars shine without ever compromising the paint body —
                  giving our partners the irresistible combo of protection
                  and shine. What started as a single studio has, city by
                  city, grown into a nationwide network — and we're just
                  getting started.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="mt-8 sm:mt-10"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 sm:gap-6 overflow-hidden bg-[#F0F0F0] text-[#0B0B0B] px-5 sm:px-8 py-3.5 sm:py-4 uppercase text-[11px] sm:text-xs font-bold tracking-widest transition-all duration-300 hover:bg-[#8C8C8C]"
                  style={label}
                >
                  <span>Know More About Us</span>
                  <FiChevronRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                  />
                  <Shine />
                </Link>
              </motion.div>
            </motion.div>

            {/* ---- Right: YouTube video frame ---- */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUpCard}
              className="relative w-full"
            >
              <div className="relative border border-[#3D3D3D]/50 bg-[#121212]/30 p-2 sm:p-3">

                <div className="relative w-full aspect-video overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/uAxrZ45Sjxc"
                    title="Dettagli Auto — Franchise"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <p
                className="mt-4 sm:mt-5 text-[10px] xs:text-xs text-[#8C8C8C] uppercase tracking-[0.15em]"
                style={label}
              >
                Watch — Establishing Entrepreneurs
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}