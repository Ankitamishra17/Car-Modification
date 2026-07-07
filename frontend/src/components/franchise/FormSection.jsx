import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

/**
 * DETTAGLI AUTO — FRANCHISE ENQUIRY FORM
 * -------------------------------------------------------------
 * Reference: centered heading + subtext, then a single rounded card
 * holding a dense 3-column field grid, a full-width message box, and
 * a centered submit button.
 *
 * Kept in the existing system:
 *   Colors -> #0B0B0B / #0F0F0F / #F0F0F0 / #C0C0C0 / #8C8C8C
 *   Fonts  -> Bebas Neue (heading) · DM Sans (labels/CTA) · Jost (inputs/body)
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
  show: { transition: { staggerChildren: 0.06 } },
};

// Reusable metallic-sweep hover shine — echoes a polished panel catching light
function Shine({ className = "" }) {
  return (
    <span
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span className="absolute -inset-y-full -left-1/2 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-[#0B0B0B]/15 to-transparent translate-x-[-160%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
    </span>
  );
}

const inputClass =
  "w-full bg-[#161616] border border-[#3D3D3D]/60 text-[#F0F0F0] placeholder:text-[#8C8C8C] text-sm px-4 py-3.5 focus:outline-none focus:border-[#F0F0F0]/60 transition-colors duration-300";

const selectClass =
  "w-full bg-[#161616] border border-[#3D3D3D]/60 text-[#8C8C8C] text-sm px-4 py-3.5 focus:outline-none focus:border-[#F0F0F0]/60 transition-colors duration-300 appearance-none";

const stateOptions = [
  "Delhi NCR",
  "Maharashtra",
  "Karnataka",
  "Uttar Pradesh",
  "Gujarat",
  "Telangana",
  "Tamil Nadu",
  "Punjab",
  "Rajasthan",
  "West Bengal",
];

const capitalOptions = [
  "Under ₹10 Lakhs",
  "₹10 – 20 Lakhs",
  "₹20 – 35 Lakhs",
  "₹35 Lakhs & Above",
];

const readyOptions = [
  "Immediately",
  "Within 1 Month",
  "1 – 3 Months",
  "3+ Months",
];

const preferenceOptions = ["Own Space", "Rented Space", "Not Decided Yet"];

export default function FormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    altMobile: "",
    location: "",
    heardFrom: "",
    country: "India",
    state: "",
    city: "",
    zipcode: "",
    profession: "",
    business: "",
    capital: "",
    readyToStart: "",
    preference: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.mobile || !form.city) return;
    setSubmitted(true);
  };

  return (
    <section
      id="apply"
      className="border-t border-[#8C8C8C]/20 bg-[#0F0F0F] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-8 md:px-12 py-16 sm:py-20 lg:py-28 relative">
        {/* Header — centered, matching the reference */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto"
        >
          <h2
            className="leading-none mb-4"
            style={{ ...display, fontSize: "clamp(3rem, 6vw, 3.9rem)", color: "white" }}
          >
            Franchise <span className="text-[#8C8C8C]">With Us</span>
          </h2>
          <p
            className="text-[#C0C0C0] text-sm sm:text-base leading-relaxed"
            style={body}
          >
            Thank you for considering us. Let's get your details to set up
            your car detailing business! Fill up the form below, and we will
            get back to you shortly.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="border border-[#3D3D3D]/50 bg-[#121212]/40 p-5 xs:p-6 sm:p-8 md:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-14 text-center"
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
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-4 sm:gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                <motion.input
                  variants={fadeUp}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className={inputClass}
                  style={body}
                />
                <motion.input
                  variants={fadeUp}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Id"
                  className={inputClass}
                  style={body}
                />
                <motion.input
                  variants={fadeUp}
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number *"
                  className={inputClass}
                  style={body}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                <motion.input
                  variants={fadeUp}
                  name="altMobile"
                  type="tel"
                  value={form.altMobile}
                  onChange={handleChange}
                  placeholder="Alternate Number"
                  className={inputClass}
                  style={body}
                />
                <motion.input
                  variants={fadeUp}
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Location Preference For Franchise"
                  className={inputClass}
                  style={body}
                />
                <motion.input
                  variants={fadeUp}
                  name="heardFrom"
                  value={form.heardFrom}
                  onChange={handleChange}
                  placeholder="How did you hear about us?"
                  className={inputClass}
                  style={body}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                <motion.input
                  variants={fadeUp}
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={inputClass}
                  style={body}
                />
                <motion.select
                  variants={fadeUp}
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className={selectClass}
                  style={body}
                >
                  <option value="">Select State</option>
                  {stateOptions.map((s) => (
                    <option key={s} value={s} className="bg-[#161616] text-[#F0F0F0]">
                      {s}
                    </option>
                  ))}
                </motion.select>
                <motion.input
                  variants={fadeUp}
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City Name *"
                  className={inputClass}
                  style={body}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                <motion.input
                  variants={fadeUp}
                  name="zipcode"
                  value={form.zipcode}
                  onChange={handleChange}
                  placeholder="Zipcode"
                  className={inputClass}
                  style={body}
                />
                <motion.input
                  variants={fadeUp}
                  name="profession"
                  value={form.profession}
                  onChange={handleChange}
                  placeholder="Current Profession"
                  className={inputClass}
                  style={body}
                />
                <motion.input
                  variants={fadeUp}
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  placeholder="Tell us about your business"
                  className={inputClass}
                  style={body}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                <motion.select
                  variants={fadeUp}
                  name="capital"
                  value={form.capital}
                  onChange={handleChange}
                  className={selectClass}
                  style={body}
                >
                  <option value="">Select Capital</option>
                  {capitalOptions.map((c) => (
                    <option key={c} value={c} className="bg-[#161616] text-[#F0F0F0]">
                      {c}
                    </option>
                  ))}
                </motion.select>
                <motion.select
                  variants={fadeUp}
                  name="readyToStart"
                  value={form.readyToStart}
                  onChange={handleChange}
                  className={selectClass}
                  style={body}
                >
                  <option value="">Select Ready To Start</option>
                  {readyOptions.map((r) => (
                    <option key={r} value={r} className="bg-[#161616] text-[#F0F0F0]">
                      {r}
                    </option>
                  ))}
                </motion.select>
                <motion.select
                  variants={fadeUp}
                  name="preference"
                  value={form.preference}
                  onChange={handleChange}
                  className={selectClass}
                  style={body}
                >
                  <option value="">Select Preference</option>
                  {preferenceOptions.map((p) => (
                    <option key={p} value={p} className="bg-[#161616] text-[#F0F0F0]">
                      {p}
                    </option>
                  ))}
                </motion.select>
              </div>

              <motion.textarea
                variants={fadeUp}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message (if any)"
                rows={4}
                className={`${inputClass} resize-none`}
                style={body}
              />

              <motion.div variants={fadeUp} className="flex justify-center pt-2">
                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.mobile || !form.city}
                  className="group relative overflow-hidden bg-[#F0F0F0] text-[#0B0B0B] px-10 py-4 uppercase text-sm tracking-widest flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                  style={label}
                >
                  Submit
                  <FiArrowUpRight size={16} />
                  <Shine />
                </button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}