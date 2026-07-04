import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiActivity, FiArrowLeft, FiArrowRight } from "react-icons/fi";

/**
 * DETTAGLI AUTO — CLIENT SIGNALS (Testimonials v2)
 * -------------------------------------------------------------
 * Shares the franchise page's design system exactly:
 *   Colors: #0B0B0B / #0F0F0F bg, #F0F0F0 text, #C0C0C0 silver,
 *           #8C8C8C muted, #C8102E signal red
 *   Type:   Bebas Neue (display) / DM Sans (labels) / Jost (body)
 *
 * SIGNATURE ELEMENT
 * Instead of a generic card grid, this reads as a diagnostic
 * "session console": one large readout panel plays back the
 * active client's report — corner brackets, a scanning header
 * line, signal-strength bars — while a manifest list on the side
 * lets you tune into any other session. Selecting a row swaps
 * the console's contents with a crossfade, the same way the
 * franchise page's hero behaves like a scanner viewfinder.
 *
 * Data: Omani clients across Muscat, Salalah, Sohar, Nizwa, Sur
 * and Muttrah — names and cities are representative, not real
 * individuals.
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

// Corner bracket — the recurring "viewfinder / scanner" motif from the franchise page
function Bracket({ position }) {
  const pos = {
    "top-left": "top-3 left-3 sm:top-5 sm:left-5 border-t-2 border-l-2",
    "top-right": "top-3 right-3 sm:top-5 sm:right-5 border-t-2 border-r-2",
    "bottom-left":
      "bottom-3 left-3 sm:bottom-5 sm:left-5 border-b-2 border-l-2",
    "bottom-right":
      "bottom-3 right-3 sm:bottom-5 sm:right-5 border-b-2 border-r-2",
  };
  return (
    <span
      className={`pointer-events-none absolute w-5 h-5 sm:w-7 sm:h-7 border-[#8C8C8C]/50 ${pos[position]}`}
    />
  );
}

// Signal-strength meter — replaces star ratings with the page's diagnostic vocabulary
function SignalBars({ strength = 5, max = 5, active = false }) {
  return (
    <div className="flex items-end gap-[3px] h-3.5 sm:h-4">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-sm transition-colors duration-300 ${
            i < strength
              ? active
                ? "bg-[#C8102E]"
                : "bg-[#8C8C8C]"
              : "bg-[#3D3D3D]"
          }`}
          style={{ height: `${35 + i * 16}%` }}
        />
      ))}
    </div>
  );
}

const testimonials = [
  {
    code: "T.01",
    name: "Khalid Al-Farsi",
    city: "Muscat",
    vehicle: "Nissan Patrol",
    strength: 5,
    quote:
      "The ceramic coating job on my Patrol was flawless. Booked a slot in Al Khuwair and the studio ran exactly on the schedule they gave me — no surprises, no upselling.",
  },
  {
    code: "T.02",
    name: "Mariam Al-Zadjali",
    city: "Sohar",
    vehicle: "Toyota Land Cruiser",
    strength: 5,
    quote:
      "I was skeptical about paint correction on a car that's been through the Batinah heat and dust for years. It came back looking close to showroom. Genuinely impressed.",
  },
  {
    code: "T.03",
    name: "Sultan Al-Harthy",
    city: "Salalah",
    vehicle: "BMW X5",
    strength: 4,
    quote:
      "Good, honest detailing work and the team explained every stage before starting. Wait time was a little longer during Khareef season but worth it.",
  },
  {
    code: "T.04",
    name: "Aisha Al-Kindi",
    city: "Nizwa",
    vehicle: "Mitsubishi Pajero",
    strength: 5,
    quote:
      "First detailing studio in the region that felt this professional. The interior deep-clean alone was worth the drive from Nizwa. Already booked my next visit.",
  },
  {
    code: "T.05",
    name: "Ahmed Al-Balushi",
    city: "Sur",
    vehicle: "Ford Ranger",
    strength: 5,
    quote:
      "Straightforward pricing, real before-and-after photos, and my Ranger's paintwork hasn't looked this good since I bought it. Will be back before the next Sur festival.",
  },
  {
    code: "T.06",
    name: "Zahra Al-Rawahi",
    city: "Muttrah",
    vehicle: "Lexus RX",
    strength: 4,
    quote:
      "Booked through the Muttrah studio for a full protection package. Clean process, clear timelines, and they actually called to confirm before I arrived.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const goTo = (i) => setActive((i + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-[#0B0B0B] text-[#F0F0F0] border-b border-[#8C8C8C]/20 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-16 py-14 xs:py-16 sm:py-24 md:py-28">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 xs:mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div className="space-y-3">
            <p
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-[#8C8C8C]"
              style={label}
            >
              <FiActivity size={12} className="text-[#ffffff] shrink-0" />
              Incoming Signals · Sultanate of Oman
            </p>
            <h2
              className="leading-none"
              style={{ ...display, fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
            >
              CLIENT REPORTS.
            </h2>
          </div>
          <p
            className="text-[#8C8C8C] text-xs sm:text-sm max-w-xs sm:text-right"
            style={body}
          >
            Tune into field feedback from studios across Muscat, Sohar,
            Salalah, Nizwa, Sur and Muttrah.
          </p>
        </motion.div>

        {/* Console layout: playback panel + manifest list */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 sm:gap-6"
        >
          {/* -------- Playback panel -------- */}
          <div className="relative border border-[#3D3D3D]/50 bg-[#0F0F0F] flex flex-col min-h-[380px] xs:min-h-[420px] sm:min-h-[460px]">
      

            {/* Scanning line ambient animation */}
          

            {/* Header strip */}
            <div className="relative flex items-center justify-between px-6 sm:px-10 pt-8 sm:pt-10 pb-4">
              <span
                className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8C8C8C]"
                style={label}
              >
                <span className="text-[#C8102E]" style={display}>
                  {current.code}
                </span>
                {current.city}, Oman
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff]/60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ffffff]" />
                </span>
              </span>
              <SignalBars strength={current.strength} active />
            </div>

            {/* Quote */}
            <div className="relative flex-1 px-6 sm:px-10 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.code}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#E5E5E5] text-lg xs:text-xl sm:text-2xl md:text-[1.7rem] leading-snug"
                  style={body}
                >
                  "{current.quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Footer: identity + transport controls */}
            <div className="relative flex items-end justify-between gap-4 px-6 sm:px-10 pb-8 sm:pb-10 pt-6 border-t border-[#8C8C8C]/15 mt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.code + "-id"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xl sm:text-2xl tracking-wide" style={display}>
                    {current.name}
                  </div>
                  <div
                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#8C8C8C] mt-1"
                    style={label}
                  >
                    {current.vehicle}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  aria-label="Previous report"
                  onClick={() => goTo(active - 1)}
                  className="group relative p-2.5 sm:p-3 border border-[#8C8C8C]/30 hover:border-[#F0F0F0]/60 transition-colors duration-300"
                >
                  <FiArrowLeft size={14} className="text-[#C0C0C0]" />
                </button>
                <span
                  className="text-[10px] sm:text-xs text-[#8C8C8C] tabular-nums px-1"
                  style={label}
                >
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
                <button
                  aria-label="Next report"
                  onClick={() => goTo(active + 1)}
                  className="group relative p-2.5 sm:p-3 border border-[#8C8C8C]/30 hover:border-[#F0F0F0]/60 transition-colors duration-300"
                >
                  <FiArrowRight size={14} className="text-[#C0C0C0]" />
                </button>
              </div>
            </div>
          </div>

          {/* -------- Manifest list -------- */}
          <div className="border border-[#3D3D3D]/50 bg-[#0F0F0F] flex lg:flex-col overflow-x-auto lg:overflow-visible divide-x lg:divide-x-0 lg:divide-y divide-[#8C8C8C]/15">
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.code}
                  onClick={() => setActive(i)}
                  className={`group relative flex-1 lg:flex-none min-w-[200px] xs:min-w-[220px] lg:min-w-0 text-left px-5 sm:px-6 py-4 sm:py-5 transition-colors duration-300 ${
                    isActive ? "bg-[#151515]" : "hover:bg-[#131313]"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8102E] transition-transform duration-300 origin-top ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#8C8C8C]"
                      style={label}
                    >
                      <span
                        className={isActive ? "text-[#C8102E]" : "text-[#4d4d4d]"}
                        style={display}
                      >
                        {t.code}
                      </span>
                      {t.city}
                    </span>
                    <SignalBars strength={t.strength} active={isActive} />
                  </div>
                  <div
                    className={`mt-1.5 text-sm sm:text-base tracking-wide truncate ${
                      isActive ? "text-[#F0F0F0]" : "text-[#8C8C8C]"
                    }`}
                    style={display}
                  >
                    {t.name}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}