import React from "react";
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
    title: "Setup & Launch",
    text: "Studio build-out, team training, and grand opening backed by regional marketing.",
  },
  {
    n: "05",
    title: "Launch",
    text: "Grand opening backed by regional marketing support.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const display = {
  fontFamily: "'Marcellus', serif",
};

const label = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 500,
};

const body = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 400,
};

function OurProcess() {
  
  const renderFormattedHeading = (text) => {
    if (!text) return "";
    const parts = text.split(/\*(.*?)\*/g);
    return parts.map((part, index) => 
      index % 2 === 1 ? (
        <span
          key={index}
          className="inline-block mx-2 sm:mx-4"
          style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      {/* ---------------- PROCESS ---------------- */}
      <section className="bg-[#0B0B0B] text-[#F0F0F0] px-12 py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20 space-y-4  max-w-7xl mx-auto px-12"
        >
          <p
            className="uppercase tracking-[0.3em] text-xs text-[#8C8C8C] mb-4"
            style={label}
          >
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
          className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8  max-w-7xl mx-auto px-12"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="relative border-l md:border-l-0 md:border-t border-[#8C8C8C]/30 pl-6 md:pl-0 md:pt-6"
            >
              {/* node marker sitting on the connecting rail */}
              <span
                className="absolute w-2.5 h-2.5 rotate-45 bg-[#0B0B0B] border border-[#C0C0C0]
                  -left-[5.5px] top-0
                  md:left-1/2 md:-translate-x-1/2 md:-top-[5.5px] md:top-auto"
              />

              <div
                className="text-[#8C8C8C] text-sm tracking-[0.15em]"
                style={display}
              >
                {s.n} / 05
              </div>
              <h3
                className="mt-3 uppercase text-sm tracking-wide text-[#F0F0F0]"
                style={label}
              >
                {s.title}
              </h3>
              <p
                className="mt-2 text-[#8C8C8C] text-sm leading-relaxed"
                style={body}
              >
                {s.text}
              </p>

              {i !== steps.length - 1 && (
                <FiArrow className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-[#8C8C8C]/40" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

// small inline connector chevron so the rail reads as a path, not just a divider
function FiArrow({ className = "" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default OurProcess;