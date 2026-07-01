import React from 'react'
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
    title: "Setup & Training",
    text: "Studio build-out, equipment install, and technician certification.",
  },
  {
    n: "05",
    title: "Launch",
    text: "Grand opening backed by regional marketing support.",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const display = { fontFamily: "'Bebas Neue', sans-serif" };
const label = { fontFamily: "'DM Sans', sans-serif" };
const body = { fontFamily: "'Jost', sans-serif" };
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

function OurProcess() {
  return (
    <>
         {/* ---------------- PROCESS ---------------- */}
      <section className=" bg-[#0B0B0B] text-[#f0f0f0] max-w-7xl mx-auto px-6 py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 max-w-2xl"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-[#8C8C8C] mb-4" style={label}>
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl" style={display}>
            FIVE STEPS TO LAUNCH.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-5 gap-8"
        >
          {steps.map((s) => (
            <motion.div key={s.n} variants={fadeUp} className="border-t border-[#C0C0C0]/40 pt-5">
              <div className="text-[#8C8C8C] text-sm" style={display}>{s.n}</div>
              <h3 className="mt-3 uppercase text-sm tracking-wide" style={label}>{s.title}</h3>
              <p className="mt-2 text-[#8C8C8C] text-sm leading-relaxed" style={body}>{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}

export default OurProcess