import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiTrendingUp, FiUsers, FiTool } from "react-icons/fi";
const benefits = [
  {
    icon: FiShield,
    title: "Established Brand Equity",
    text: "Step into a name already trusted for PPF, ceramic coating, and precision detailing — no brand-building from zero.",
  },
  {
    icon: FiTool,
    title: "Full Setup Support",
    text: "Studio layout, equipment sourcing, and product line-up handed to you — built on what already works.",
  },
  {
    icon: FiUsers,
    title: "Technician Training",
    text: "Your team trained on our exact detailing, coating, and tuning workflows before doors open.",
  },
  {
    icon: FiTrendingUp,
    title: "Marketing Engine",
    text: "Regional launch campaigns, content, and lead-gen support handled centrally, tuned to your city.",
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

export default function WhyChoose() {
  return (
    <>
      {/* ---------------- WHY PARTNER ---------------- */}
      <section className=" bg-[#0B0B0B] max-w-7xl mx-auto px-12 py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 max-w-2xl"
          
        >
          <p
            className="uppercase tracking-[0.3em] text-xs text-[#8C8C8C] mb-4"
            style={label}
          >
            WHY CONSIDER PARTNERING WITH OUR TEAM?
          </p>
          <h2 className="text-4xl md:text-5xl text-[#ffffff]" style={display}>
            A SYSTEM BUILT ON DETAIL.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-px bg-[#8C8C8C]/20"
        >
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative bg-[#0B0B0B] p-8 overflow-hidden"
            >
              <Icon className="text-[#C0C0C0]" size={26} strokeWidth={1.5} />
              <h3
                className="mt-6 text-xl text-[#C0C0C0] uppercase tracking-wide"
                style={label}
              >
                {title}
              </h3>
              <p
                className="mt-3 text-[#8C8C8C] text-sm leading-relaxed"
                style={body}
              >
                {text}
              </p>
              <Shine className="opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
