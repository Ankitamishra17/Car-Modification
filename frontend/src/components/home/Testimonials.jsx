import React from "react";
import { motion } from "framer-motion";
import { FiActivity } from "react-icons/fi";

/**
 * DETTAGLI AUTO — CLIENT SIGNALS (Testimonials)
 * -------------------------------------------------------------
 * Shares the franchise page's design system exactly:
 *   Colors: #0B0B0B / #0F0F0F bg, #F0F0F0 text, #C0C0C0 silver,
 *           #8C8C8C muted, #C8102E signal red
 *   Type:   Bebas Neue (display) / DM Sans (labels) / Jost (body)
 *
 * Signature element: testimonials are framed as "signal reports"
 * coming in from studios across Oman — each card reads like a
 * transmission log (city + signal-strength bars) rather than a
 * generic star rating, continuing the diagnostic-bay HUD language
 * established on the franchise page.
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

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// Metallic-sweep hover shine — matches the franchise page's CTA/card treatment
function Shine() {
  return (
    <span className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute -inset-y-full -left-1/2 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-[#F0F0F0]/10 to-transparent translate-x-[-160%] group-hover:translate-x-[420%] transition-transform duration-[1200ms] ease-out" />
    </span>
  );
}

// Signal-strength meter — replaces star ratings with the page's diagnostic vocabulary
function SignalBars({ strength = 5, max = 5 }) {
  return (
    <div className="flex items-end gap-[3px] h-4">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-sm transition-colors duration-300 ${
            i < strength ? "bg-[#ffffff]" : "bg-[#3D3D3D]"
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
  return (
    <section className="relative bg-[#0B0B0B] text-[#F0F0F0] border-b border-[#8C8C8C]/20 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-16 py-14 xs:py-16 sm:py-24 md:py-28">
        {/* Section header — mirrors the "Investment Sheet" header pattern */}
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
            Field feedback from studios across Muscat, Sohar, Salalah, Nizwa,
            Sur and Muttrah.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.code}
              variants={fadeUp}
              className="group relative flex flex-col justify-between border border-[#3D3D3D]/40 bg-[#121212]/40 p-5 xs:p-6 sm:p-7 overflow-hidden"
            >
              {/* Top accent line that draws in on hover — echoes the spec sheet's left pin */}
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#8C8C8C] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              <Shine />

              {/* Card header: code + city, signal bars */}
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span
                  className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8C8C8C]"
                  style={label}
                >
                  <span className="text-[#4d4d4d]" style={display}>
                    {t.code}
                  </span>
                  {t.city}, Oman
                </span>
                <SignalBars strength={t.strength} />
              </div>

              {/* Quote */}
              <p
                className="text-[#C0C0C0] text-sm sm:text-base leading-relaxed flex-1"
                style={body}
              >
                "{t.quote}"
              </p>

              {/* Client identity */}
              <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-[#8C8C8C]/20 flex items-center justify-between gap-3">
                <div>
                  <div
                    className="text-lg sm:text-xl tracking-wide"
                    style={display}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#8C8C8C] mt-0.5"
                    style={label}
                  >
                    {t.vehicle}
                  </div>
                </div>
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff]/60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ffffff]" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}