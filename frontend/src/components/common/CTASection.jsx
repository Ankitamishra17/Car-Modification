import React from "react";
import { ArrowRight, Phone } from "lucide-react";

/**
 * BottomCTA — Pixel-Perfect Grid-Aligned Split Screen Layout
 * Left: Full Height Asset | Right: Content Engine
 */

export default function BottomCTA({
  title,
  description,
  buttonText,
  buttonLink,
  phone,
}) {

  // Dynamic text formatter that converts any text inside asterisks (*TEXT*) into luxury strokes
  const renderFormattedTitle = (text) => {
    if (!text) return "";
    
    const parts = text.split(/\*(.*?)\*/g);
    
    return parts.map((part, index) => 
      index % 2 === 1 ? (
        <span
          key={index}
          className="inline-block mx-1 sm:mx-2"
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
    <section className="bg-[#0B0B0B] border-t border-[#3D3D3D]/30 py-16 sm:py-20 relative overflow-hidden px-0">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .cta-heading { font-family: 'Bebas Neue', sans-serif; }
        .cta-title   { font-family: 'DM Sans', sans-serif; }
        .cta-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* 
        The Grid Anchor Container: 
        Maintains max-width 7xl and exact uniform side spacing (px-12 on desktop) to sit flush with your header logo.
      */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Component Card Box */}
        <div className="bg-[#141414] border border-[#3D3D3D]/40 unique-cta-box-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT SIDE: Full Height Visual Banner Image Section */}
            <div className="col-span-1 lg:col-span-5 relative min-h-[280px] sm:min-h-[350px] lg:min-h-full overflow-hidden group">
              <img 
                src="https://i.pinimg.com/1200x/00/7b/8b/007b8b156fbca8623030243e22ad5371.jpg" 
                alt="Studio Showcase" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale-[40%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-[10%]"
              />
              {/* Dark tint mapping layer to maintain luxury overlay contrast */}
              <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent lg:to-black/20" />
              
              {/* Tech corner tick inside image */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30" />
            </div>

            {/* RIGHT SIDE: Dedicated Premium Copywriting and CTA Engine */}
            <div className="col-span-1 lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              
              {/* Action Tracking Label */}
              <div className="flex items-center gap-3">
                <span className="h-px w-4 bg-[#8C8C8C]" />
                <span className="cta-title text-[9px] font-bold uppercase tracking-[0.25em] text-[#8C8C8C]">
                  NEXT STEP // INITIATION ENGINE
                </span>
              </div>

              {/* Core Segment Title with Text-Stroke Support */}
              <h2 className="cta-heading text-[3rem] sm:text-[4rem] lg:text-[4.5rem] leading-[0.95] text-white tracking-wide uppercase">
                {renderFormattedTitle(title)}
              </h2>

              {/* Explanatory Body Paragraph */}
              <p className="cta-sub text-[14px] sm:text-[15px] leading-relaxed font-light text-[#B8B8B8] max-w-xl">
                {description}
              </p>

              {/* Dynamic Controls Layout Grid Spacer */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                
                {/* Main Redirect Button Link */}
                <a
                  href={buttonLink}
                  className="group relative inline-flex items-center justify-between gap-6 bg-white px-8 py-4 text-xs font-mono tracking-widest text-[#0B0B0B] uppercase font-bold transition-all duration-300 hover:bg-[#8C8C8C]"
                >
                  <span>{buttonText || "START PROJECT"}</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Direct Voice Phone Action Line */}
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="group inline-flex items-center justify-between gap-6 border border-[#3D3D3D] bg-[#0F0F0F]/50 px-8 py-4 text-xs font-mono tracking-widest text-[#B8B8B8] uppercase transition-all duration-300 hover:border-[#8C8C8C] hover:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="text-[#3D3D3D] group-hover:text-[#8C8C8C]" />
                      <span>{phone}</span>
                    </div>
                    <span className="text-[9px] text-[#3D3D3D] group-hover:text-[#8C8C8C]">// CALL</span>
                  </a>
                )}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}