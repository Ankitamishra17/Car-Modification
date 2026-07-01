import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageSquare,
} from "react-icons/fi";
// Colors:
//  *   Primary BG      #0B0B0B
//  *   Primary Text    #F0F0F0
//  *   Silver Accent   #C0C0C0
//  *   Muted Silver    #8C8C8C
//  *
//  * Fonts:
//  *   Bebas Neue  -> headings (industrial, tall, automotive)
//  *   DM Sans     -> labels / CTAs / eyebrows
//  *   Jost        -> body copy

export default function FormSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });
  const display = { fontFamily: "'Bebas Neue', sans-serif" };
  const label = { fontFamily: "'DM Sans', sans-serif" };
  const body = { fontFamily: "'Jost', sans-serif" };
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.city) return;
    setSubmitted(true);
  };

  const fields = [
    { name: "name", ph: "Full Name", icon: FiUser },
    { name: "phone", ph: "Phone Number", icon: FiPhone },
    { name: "email", ph: "Email Address", icon: FiMail },
    { name: "city", ph: "Preferred City", icon: FiMapPin },
  ];

  return (
    <>
      {/* ---------------- APPLICATION FORM ---------------- */}
      <section id="apply" className="border-t border-[#8C8C8C]/20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT — form */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-12"
            >
              <p
                className="uppercase tracking-[0.3em] text-xs text-[#8C8C8C] mb-4"
                style={label}
              >
                Apply Now
              </p>
              <h2
                className="text-4xl md:text-5xl text-[#ffffff]"
                style={display}
              >
                Franchise Enquiry Form.
              </h2>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-[#C0C0C0]/30 p-10 text-center"
              >
                <p className="text-lg" style={label}>
                  Application received.
                </p>
                <p className="text-[#8C8C8C] mt-2 text-sm" style={body}>
                  Our franchise team will reach out within 2 business days.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="grid gap-6"
              >
                {fields.map((f) => (
                  <motion.div
                    key={f.name}
                    variants={fadeUp}
                    className="relative"
                  >
                    <f.icon
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C8C8C]"
                    />
                    <input
                      name={f.name}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.ph}
                      className="w-full bg-transparent border border-[#8C8C8C]/30 pl-11 pr-5 py-4 text-sm focus:outline-none focus:border-[#C0C0C0] placeholder:text-[#8C8C8C]"
                      style={body}
                    />
                  </motion.div>
                ))}

                <motion.div variants={fadeUp} className="relative">
                  <FiMessageSquare
                    size={16}
                    className="absolute left-4 top-5 text-[#8C8C8C]"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-transparent border border-[#8C8C8C]/30 pl-11 pr-5 py-4 text-sm focus:outline-none focus:border-[#C0C0C0] placeholder:text-[#8C8C8C] resize-none"
                    style={body}
                  />
                </motion.div>

                <motion.button
                  variants={fadeUp}
                  onClick={handleSubmit}
                  className="group relative overflow-hidden bg-[#F0F0F0] text-[#0B0B0B] py-4 uppercase text-sm tracking-widest flex items-center justify-center gap-2"
                  style={label}
                >
                  Submit Application
                  <FiArrowUpRight size={16} />
                  <Shine />
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] rounded-full opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #C0C0C0, transparent 70%)",
              }}
            />

            <span className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[#C0C0C0]/50" />
            <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-[#C0C0C0]/50" />

            <motion.img
              src="/images/franchise-apply-car.png"
              alt="Dettagli Auto franchise studio car"
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
