import React from "react";

/**
 * Process — AutoLuxe Studio Step-by-Step Dynamic Template
 *
 * Usage in data arrays:
 * heading: "OUR *PRECISION* WORKFLOW *PROCESS*" -> 'PRECISION' and 'PROCESS' will become outlined strokes.
 */

export default function Process({ 
  subtitle, 
  heading, 
  process = [] 
}) {

  // Purely dynamic text formatter that converts any text inside asterisks (*TEXT*) into ultra-luxury strokes
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

  // Safe fallback to prevent layout breakages across views if array is empty
  if (!process || process.length === 0) return null;

  return (
    <section className="bg-[#0B0B0B] px-4 py-24 sm:px-8 lg:px-16 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .proc-heading { font-family: 'Bebas Neue', sans-serif; }
        .proc-title   { font-family: 'DM Sans', sans-serif; }
        .proc-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl relative z-10">

        {/* Dynamic Header Block */}
        <div className="mb-20 space-y-4 max-w-5xl">
          {subtitle && (
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#8C8C8C]" />
              <span className="proc-title text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C8C8C]">
                {subtitle}
              </span>
            </div>
          )}

          {heading && (
            <h2 className="proc-heading text-[3.5rem] sm:text-[5rem] lg:text-[5.75rem] leading-[0.9] text-white tracking-wide uppercase">
              {renderFormattedHeading(heading)}
            </h2>
          )}
        </div>

        {/* Process Steps Grid */}
        <div className="relative">
          {/* Studio Top Connecting Horizontal Line (Visible on Large Screens) */}
          <div className="absolute top-[21px] left-0 right-0 h-px bg-[#3D3D3D]/30 hidden lg:block z-0" />

          <div className={`grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-${Math.min(process.length, 5)}`}>
            {process.map((item, i) => (
              <div
                key={item.step || i}
                className="group relative flex flex-col gap-4 z-10"
              >
                {/* Sharp Squared Studio Step Counter */}
                <div className="w-11 h-11 bg-[#1A1A1A] border border-[#3D3D3D] group-hover:border-[#8C8C8C] flex items-center justify-center text-white text-xs font-mono tracking-wider transition-all duration-300 z-10">
                  {String(item.step).padStart(2, '0')}
                </div>

                {/* Content Block */}
                <div className="space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#3D3D3D] group-hover:text-[#8C8C8C] transition-colors duration-300">
                      // PHASE
                    </span>
                    <h4 className="proc-title text-[14px] font-bold uppercase tracking-wider text-white group-hover:text-[#8C8C8C] transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>

                  <p className="proc-sub text-[13px] leading-relaxed font-light text-[#B8B8B8] pr-4 group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
                
                {/* Decorative bottom line on mobile hover */}
                <div className="h-px bg-[#8C8C8C] w-0 group-hover:w-12 transition-all duration-500 mt-2 block lg:hidden" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}