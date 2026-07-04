import React from "react";

/**
 * BeforeAfter — AutoLuxe Premium Transformation Gallery Component
 * Target Words for Stroke: "THE" and "STUDIO"
 */

export default function BeforeAfter({ 
  subtitle, 
  heading, 
  images = [] 
}) {

  // Auto-detects "THE" and "STUDIO" inside any heading string and converts them to outline stroke
  const renderFormattedHeading = (text) => {
    if (!text) return "";
    
    // Split by exact matches of words THE or STUDIO (case-insensitive)
    const parts = text.split(/\b(THE|STUDIO)\b/gi);
    
    return parts.map((part, index) => {
      const upperPart = part.toUpperCase();
      if (upperPart === "THE" || upperPart === "STUDIO") {
        return (
          <span
            key={index}
            className="inline-block"
            style={{ WebkitTextStroke: "1px #8C8C8C", color: "transparent" }}
          >
            {upperPart}
          </span>
        );
      }
      return part;
    });
  };

  // Safe fallback if images array is empty or undefined
  if (!images || images.length === 0) return null;

  return (
    <section className="bg-[#0B0B0B] px-2 py-24 sm:px-4 lg:px-8 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .gal-heading { font-family: 'Bebas Neue', sans-serif; }
        .gal-title   { font-family: 'DM Sans', sans-serif; }
        .gal-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl relative z-10 px-5">

        {/* Dynamic Header Block */}
        <div className="mb-16 space-y-4 max-w-5xl">
          {subtitle && (
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#8C8C8C]" />
              <span className="gal-title text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C8C8C]">
                {subtitle}
              </span>
            </div>
          )}

          {heading && (
            <h2 className="gal-heading text-[3.5rem] sm:text-[5rem] lg:text-[5.75rem] leading-[0.9] text-white tracking-wide uppercase">
              {renderFormattedHeading(heading)}
            </h2>
          )}
        </div>

        {/* Dynamic Media Studio Grid */}
        <div className={`grid grid-cols-1 gap-6 items-stretch
          ${images.length === 1 ? "max-w-xl mx-auto" : ""}
          ${images.length === 2 ? "sm:grid-cols-2 max-w-5xl mx-auto" : ""}
          ${images.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}
        `}>
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-none border border-[#3D3D3D]/50 bg-[#1A1A1A]/40 transition-all duration-700 hover:border-[#8C8C8C]"
            >
              {/* Image Source Asset */}
              <img
                src={src}
                alt={`Transformation Showcase ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
              />

              {/* High-End Dark Studio Overlay Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

              {/* Dynamic Technical Frame Overlay info */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="space-y-0.5">
                  <span className="gal-title block text-[9px] font-bold uppercase tracking-[0.15em] text-[#8C8C8C]">
                    STUDIO WORKCASE
                  </span>
                  <p className="gal-sub text-xs text-white/90 font-light tracking-wide">
                    Project Transformation Spec_{index + 1}
                  </p>
                </div>
                <span className="text-[10px] text-[#8C8C8C] font-mono tracking-tighter">
                  // [0{index + 1}]
                </span>
              </div>

              {/* Subtle tech border guidelines on corners */}
              <div className="absolute top-0 right-0 w-2 h-px bg-[#8C8C8C]/40" />
              <div className="absolute top-0 right-0 w-px h-2 bg-[#8C8C8C]/40" />
              <div className="absolute bottom-0 left-0 w-2 h-px bg-[#8C8C8C]/40" />
              <div className="absolute bottom-0 left-0 w-px h-2 bg-[#8C8C8C]/40" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}