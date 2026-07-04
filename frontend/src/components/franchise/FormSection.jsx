import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import {
  FiArrowUpRight,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiCheck,
} from "react-icons/fi";

export default function FormSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

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
    show: { transition: { staggerChildren: 0.1 } },
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
    { name: "name", ph: "Full Name", icon: FiUser, required: true },
    { name: "phone", ph: "Phone Number", icon: FiPhone, required: true },
    { name: "email", ph: "Email Address", icon: FiMail, required: false },
    { name: "city", ph: "Preferred City", icon: FiMapPin, required: true },
  ];

  // Functional completion gauge — styled like an instrument dial, echoing
  // the automotive subject rather than decorating it.
  const requiredKeys = ["name", "phone", "city"];
  const filledCount = useMemo(
    () => requiredKeys.filter((k) => form[k].trim().length > 0).length,
    [form],
  );
  const pct = filledCount / requiredKeys.length;
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * pct;

  return (
    <>
      {/* ---------------- APPLICATION FORM ---------------- */}
      <section
        id="apply"
        className="border-t border-[#8C8C8C]/20 bg-[#0F0F0F] relative overflow-hidden"
      >
        {/* faint ambient sheen across the banner */}

        <div className="max-w-7xl mx-auto px-12 py-28 relative">
          {/* Header row — eyebrow, headline, and the reference tag sit together
              like the title block on a spec sheet */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap items-end justify-between gap-6 mb-16 border-b border-[#8C8C8C]/20 pb-8"
          >
            <div>
              <p
                className="uppercase tracking-[0.3em] text-xs text-[#8C8C8C] mb-4"
                style={label}
              >
                Apply Now
              </p>
              <h2
                className="text-4xl md:text-6xl text-[#ffffff] leading-[0.95]"
                style={display}
              >
                Franchise Enquiry Form.
              </h2>
            </div>
            <p
              className="uppercase tracking-[0.25em] text-xs text-[#8C8C8C] shrink-0 border border-[#8C8C8C]/30 px-4 py-2"
              style={label}
            >
              Ref&nbsp;— FR-01
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT — form */}
            <div className="relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-[#C0C0C0]/30 p-10 text-center"
                >
                  <div className="mx-auto mb-5 w-12 h-12 rounded-full border border-[#C0C0C0]/50 flex items-center justify-center">
                    <FiCheck size={20} className="text-[#F0F0F0]" />
                  </div>
                  <p className="text-lg text-[#ffffff]" style={label}>
                    Application received.
                  </p>
                  <p className="text-[#8C8C8C] mt-2 text-sm" style={body}>
                    Our franchise team will reach out within 2 business days.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* completion dial */}
                  <div className="flex items-center gap-3 mb-8">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      className="shrink-0 -rotate-90"
                    >
                      <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        fill="none"
                        stroke="#8C8C8C"
                        strokeOpacity="0.2"
                        strokeWidth="2"
                      />
                      <motion.circle
                        cx="28"
                        cy="28"
                        r={radius}
                        fill="none"
                        stroke="#F0F0F0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        animate={{ strokeDashoffset: circumference - dash }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div>
                      <p className="text-[#ffffff] text-sm" style={label}>
                        {filledCount} / {requiredKeys.length} required fields
                      </p>
                      <p className="text-[#8C8C8C] text-xs" style={body}>
                        Name, phone and city are required
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid gap-5"
                  >
                    {fields.map((f) => {
                      const isActive = focused === f.name || form[f.name];
                      return (
                        <motion.div
                          key={f.name}
                          variants={fadeUp}
                          className="relative"
                        >
                          <label
                            className={`absolute left-11 uppercase tracking-[0.2em] text-[10px] transition-all duration-200 ${
                              isActive
                                ? "top-2 text-[#8C8C8C]"
                                : "top-1/2 -translate-y-1/2 text-transparent"
                            }`}
                            style={label}
                          >
                            {f.ph}
                            {f.required ? " *" : ""}
                          </label>
                          <f.icon
                            size={16}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C8C8C]"
                          />
                          <input
                            name={f.name}
                            value={form[f.name]}
                            onChange={handleChange}
                            onFocus={() => setFocused(f.name)}
                            onBlur={() => setFocused(null)}
                            placeholder={
                              isActive ? "" : f.ph + (f.required ? " *" : "")
                            }
                            className="w-full bg-transparent border border-[#8C8C8C]/30 pl-11 pr-5 pt-6 pb-2 text-sm text-[#ffffff] focus:outline-none focus:border-[#C0C0C0] placeholder:text-[#8C8C8C] transition-colors"
                            style={body}
                          />
                        </motion.div>
                      );
                    })}

                    <motion.div variants={fadeUp} className="relative">
                      <label
                        className={`absolute left-11 uppercase tracking-[0.2em] text-[10px] transition-all duration-200 ${
                          focused === "message" || form.message
                            ? "top-3 text-[#8C8C8C]"
                            : "top-5 text-transparent"
                        }`}
                        style={label}
                      >
                        Message
                      </label>
                      <FiMessageSquare
                        size={16}
                        className="absolute left-4 top-5 text-[#8C8C8C]"
                      />
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder={
                          focused === "message" || form.message ? "" : "Message"
                        }
                        rows={4}
                        className="w-full bg-transparent border border-[#8C8C8C]/30 pl-11 pr-5 pt-7 pb-3 text-sm text-[#ffffff] focus:outline-none focus:border-[#C0C0C0] placeholder:text-[#8C8C8C] resize-none transition-colors"
                        style={body}
                      />
                    </motion.div>

                    <motion.button
                      variants={fadeUp}
                      onClick={handleSubmit}
                      disabled={filledCount < requiredKeys.length}
                      className="group relative overflow-hidden bg-[#F0F0F0] text-[#0B0B0B] py-4 uppercase text-sm tracking-widest flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                      style={label}
                    >
                      Submit Application
                      <FiArrowUpRight size={16} />
                      <Shine />
                    </motion.button>
                  </motion.div>
                </>
              )}
            </div>

            {/* RIGHT — image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center h-[550px] md:h-[650px]"
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] rounded-full opacity-30 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #C0C0C0, transparent 70%)",
                }}
              />

              <span className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[#C0C0C0]/50" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-[#C0C0C0]/50" />

              <motion.img
                src="https://images.pexels.com/photos/28380934/pexels-photo-28380934.jpeg"
                alt="Dettagli Auto franchise studio car"
                className="relative z-10 w-full h-full object-cover drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <p
                className="absolute bottom-2 right-2 uppercase tracking-[0.2em] text-[10px] text-[#8C8C8C] border border-[#8C8C8C]/30 px-3 py-1.5 bg-[#0F0F0F]/60"
                style={label}
              >
                Studio Finish
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
