import React from "react";

/**
 * Process — Dettagali Auto Premium 4-Step Ultra-Wide Layout
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

  // Enforcing the 4-step structure limit safely
  const activeSteps = process.slice(0, 5);
  if (activeSteps.length === 0) return null;

  return (
    <section className="bg-[#0B0B0B] px-4 py-10 sm:px-8 lg:px-16 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .proc-heading { font-family: 'Bebas Neue', sans-serif; }
        .proc-title   { font-family: 'DM Sans', sans-serif; }
        .proc-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl relative z-10 px-4">

        {/* Dynamic Header Block */}
        <div className="mb-24 space-y-4 max-w-5xl">
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

        {/* Zero-Gap Optimized Core Grid Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* Left Column: Higher & Max Scale Studio Vertical Text */}
          <div className="hidden lg:block lg:col-span-2 sticky top-24 select-none pointer-events-none">
            <span 
              className="proc-heading text-[10rem] leading-[0.75] text-[#1F1F1F] tracking-widest uppercase block rotate-90 origin-left translate-x-10 -translate-y-8" 
              style={{ WebkitTextStroke: "1px #6f67679c", color: "transparent" }}
            >
              WORKFLOW
            </span>
          </div>

          {/* Right Column: Premium Active Row Engine (Expanded to take full remaining screen estate) */}
          <div className="col-span-1 lg:col-span-10 border-t border-[#3D3D3D]/30 divide-y divide-[#3D3D3D]/30">
            {activeSteps.map((item, i) => (
              <div
                key={item.step || i}
                className="group relative py-10 sm:py-12 transition-all duration-500 ease-in-out cursor-default"
              >
                {/* Background Hover Slide In Panel */}
                <div className="absolute inset-0 bg-[#121212] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10" />

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start relative z-10 px-4 sm:px-6">
                  
                  {/* Row Serial Number Block */}
                  <div className="sm:col-span-2 flex items-center gap-4 sm:flex-col sm:items-start sm:gap-1">
                    <span className="proc-heading text-[2.5rem] leading-none text-[#4E4E4E] group-hover:text-white transition-colors duration-300">
                      {String(item.step || i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-[#3D3D3D] group-hover:text-[#8C8C8C]">
                      // PHASE_STG
                    </span>
                  </div>

                  {/* Row Core Title Block */}
                  <div className="sm:col-span-4">
                    <h4 className="proc-title text-[16px] font-bold uppercase tracking-wider text-white group-hover:text-[#8C8C8C] transition-colors duration-300 sm:mt-2">
                      {item.title}
                    </h4>
                  </div>

                  {/* Row Narrative/Description Block */}
                  <div className="sm:col-span-6">
                    <p className="proc-sub text-[14px] leading-relaxed font-light text-[#B8B8B8] group-hover:text-white transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>

                </div>

                {/* Left Border Accent Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8C8C8C] scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}