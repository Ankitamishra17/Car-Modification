import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Packages — Dettagali Auto Highly Reusable Dynamic Component (Dual-Stroke Engine)
 *
 * Usage in data arrays:
 * heading: "CHOOSE *ELITE* SERVICES *OR* COMPROMISE" -> 'ELITE' and 'OR' will become outlined strokes.
 * heading: "THE *ULTIMATE* LUXURY *PPF* PROTECTION" -> 'ULTIMATE' and 'PPF' will become outlined strokes.
 */

export default function Packages({ subtitle, heading, packages = [] }) {
  // Purely dynamic text formatter that converts any text inside asterisks (*TEXT*) into ultra-luxury strokes
  const renderFormattedHeading = (text) => {
    if (!text) return "";

    // Captures text inside asterisks pairs sequentially
    const parts = text.split(/\*(.*?)\*/g);

    return parts.map((part, index) =>
      // Odd indices represent values caught within asterisks wrappers
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
      ),
    );
  };

  // Safe fallback to prevent layout breakages across common views
  if (!packages || packages.length === 0) return null;

  return (
    <section className="bg-[#0B0B0B] px-4 py-24 sm:px-8 lg:px-16 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .pkg-heading { font-family: 'Bebas Neue', sans-serif; }
        .pkg-title   { font-family: 'DM Sans', sans-serif; }
        .pkg-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl relative z-10 px-2">
        {/* Dynamic Header Block */}
        <div className="mb-16 space-y-4 max-w-5xl">
          {subtitle && (
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#8C8C8C]" />
              <span className="pkg-title text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C8C8C]">
                {subtitle}
              </span>
            </div>
          )}

          {heading && (
            <h2 className="pkg-heading text-[3.5rem] sm:text-[5rem] lg:text-[5.75rem] leading-[0.9] text-white tracking-wide uppercase">
              {renderFormattedHeading(heading)}
            </h2>
          )}
        </div>

        {/* Dynamic Responsive Grid Layout */}
        <div
          className={`grid grid-cols-1 gap-8 items-stretch
          ${packages.length === 1 ? "max-w-md mx-auto" : ""}
          ${packages.length === 2 ? "md:grid-cols-2 max-w-7xl mx-auto" : ""}
          ${packages.length >= 3 ? "md:grid-cols-3" : ""}
        `}
        >
          {packages.map((pkg, i) => (
            <div
              key={pkg.name || i}
              className={`group relative rounded-none border flex flex-col justify-between transition-all duration-500 overflow-hidden
              ${
                pkg.highlight
                  ? "border-[#8C8C8C] bg-[#1A1A1A]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-102 z-10"
                  : "border-[#3D3D3D]/50 bg-[#1A1A1A]/30 hover:border-[#8C8C8C]/50"
              }`}
            >
              {/* Conditional Highlight Badge */}
              {pkg.highlight && (
                <div className="pkg-title bg-[#8C8C8C] py-1.5 text-center text-[9px] font-bold uppercase tracking-[0.25em] text-[#0B0B0B] w-full">
                  {pkg.badgeText || "RECOMMENDED LUXURY FINISH"}
                </div>
              )}

              <div className="p-8 sm:p-10 flex-grow">
                {/* Meta Top Section */}
                <div className="flex items-center justify-between mb-4">
                  <span className="pkg-title text-[9px] font-bold uppercase tracking-[0.2em] text-[#8C8C8C]">
                    {pkg.type || "STUDIO PLAN"}
                  </span>
                  <span className="text-[10px] text-[#3D3D3D] font-mono group-hover:text-[#8C8C8C]/50 transition-colors">
                    // 0{i + 1}
                  </span>
                </div>

                {/* Title and Price */}
                <h3 className="pkg-heading text-3xl sm:text-4xl text-white uppercase tracking-wider mb-2">
                  {pkg.name}
                </h3>

                <div className="flex items-baseline gap-2 mt-4">
                  <span className="pkg-heading text-4xl sm:text-5xl text-white tracking-tight">
                    {pkg.price}
                  </span>
                  {pkg.priceUnit && (
                    <span className="pkg-sub text-xs text-[#B8B8B8]/60 font-light lowercase">
                      / {pkg.priceUnit}
                    </span>
                  )}
                </div>

                {pkg.duration && (
                  <p className="pkg-sub mt-2 text-[#B8B8B8]/80 text-xs font-light">
                    Approx.{" "}
                    <span className="text-white font-medium">
                      {pkg.duration}
                    </span>{" "}
                    turnaround time
                  </p>
                )}

                <div className="my-8 h-px bg-[#3D3D3D]/40" />

                {/* Features Mapping */}
                <ul className="space-y-4">
                  {pkg.features?.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-3 items-start">
                      <CheckCircle2
                        size={15}
                        className="text-[#8C8C8C] shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="pkg-sub text-[13px] font-light text-[#B8B8B8] leading-tight group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0">
                <Link
                  to="/contact"
                  className={`group w-full py-4 rounded-none text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300
                  ${
                    pkg.highlight
                      ? "bg-[#8C8C8C] text-[#0B0B0B] hover:bg-white"
                      : "border border-[#3D3D3D] text-[#B8B8B8] hover:border-white hover:text-white"
                  }`}
                >
                  <span>{pkg.buttonText || "GET A QUOTE"}</span>
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Hover Side Border Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#8C8C8C] scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
