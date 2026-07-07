import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * ULTRA-MINIMALIST SWISS CANVAS LAYOUT
 * -------------------------------------------------------------
 * Style: Contemporary Luxury / Swiss Minimalist Editorial
 * Layout: Clean Horizontal Grid Rows with Floating Indicators
 * Fonts: Bebas Neue (Display) · DM Sans (Labels) · Jost (Body)
 * Fully responsive: mobile-first, tuned at sm / md / lg / xl
 * -------------------------------------------------------------
 */

const display = { fontFamily: "'Bebas Neue', sans-serif" };
const label = { fontFamily: "'DM Sans', sans-serif" };
const body = { fontFamily: "'Jost', sans-serif" };

const requirements = [
  {
    num: "01",
    title: "Space & Volume Matrix",
    mainMetric: "2,000 Sq.Ft.+ Minimum",
    subDetails: "Requires 12 feet clear vertical height from floor to beam. Must be completely clear of low-hanging structural columns to allow fluid movement of supercars and installation of industrial twin-post hydraulic lifts."
  },
  {
    num: "02",
    title: "Zoning & Premium Ingress",
    mainMetric: "Commercial Arterial Road",
    subDetails: "Direct access from primary high-density commercial corridors. The entrance must support a seamless, ultra-low angle gradient tarmac ramp to ensure high-end sports cars with minimal ground clearance can enter safely."
  },
  {
    num: "03",
    title: "Frontage Real Estate",
    mainMetric: "30 Feet Clear Front",
    subDetails: "Unobstructed roadside presence with full architectural capability for a double-glazed glass curtain wall. Zero blocking from utility poles, public trees, or transformers to maintain clear live-studio visibility."
  },
  {
    num: "04",
    title: "Power & Infrastructure Grid",
    mainMetric: "3-Phase Industrial Power",
    subDetails: "Heavy-duty power allocation ready upon site possession to support multi-machine high-amperage detailing rigs. Must include high-pressure water supply loops and independent heavy commercial drainage lines."
  }
];

export default function PropertyRequirements() {
  return (
    <section className="bg-[#0A0A0A] text-[#F5F5F5] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-14 py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP META INFOGRAPHIC ROW */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 sm:pb-8 mb-10 sm:mb-14 lg:mb-16 gap-5 sm:gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white font-medium" style={label}>
              Site Requirements
            </span>
            <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-normal tracking-wide uppercase leading-none" style={display}>
              PRESTIGE <span className="text-[#666]">STANDARDS.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-xs sm:text-sm text-[#888] leading-relaxed font-light" style={body}>
              We selectively secure architectural blueprints that strictly align with our elite automotive detailing infrastructure.
            </p>
          </div>
        </div>

        {/* SWISS CANVAS ROWS */}
        <div className="divide-y divide-white/10">
          {requirements.map((req) => (
            <div
              key={req.num}
              className="group flex flex-col md:grid md:grid-cols-12 gap-5 sm:gap-6 md:gap-8 lg:gap-12 py-8 sm:py-10 md:py-12 lg:py-14 transition-colors duration-300 hover:bg-white/[0.01] px-1 sm:px-2 md:px-3 lg:px-4"
            >

              {/* Number + Title/Metric wrap together on mobile, become independent grid columns from md up */}
              <div className="flex items-start gap-4 sm:gap-5 md:contents">

                {/* Column 1: Number */}
                <div className="md:col-span-2 flex items-start shrink-0">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#333] group-hover:text-white transition-colors duration-300 tracking-tighter" style={display}>
                    {req.num}
                  </span>
                </div>

                {/* Column 2: Parameter Title & Metric */}
                <div className="md:col-span-5 space-y-1.5 sm:space-y-2 min-w-0">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#666] font-semibold block" style={label}>
                    {req.title}
                  </span>
                  <h3 className="text-xl xs:text-2xl sm:text-3xl text-white font-normal tracking-wide uppercase break-words" style={display}>
                    {req.mainMetric}
                  </h3>
                </div>
              </div>

              {/* Column 3: Deep Technical Breakdown */}
              <div className="md:col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-light" style={body}>
                  {req.subDetails}
                </p>

                {/* Micro Indicator Link */}
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#444] group-hover:text-white transition-colors duration-300 pt-1 sm:pt-2 font-mono">
                  <span>Structural Lock</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}