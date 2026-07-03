import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * WhatIsIt — AutoLuxe (Enhanced Scale & "OR" Text Stroke)
 *
 * Palette (fixed):
 *   Primary BG       #0B0B0B
 *   Secondary BG    #1A1A1A
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver)
 *
 * Type system:
 *   Main heading    Bebas Neue
 *   Title/labels     DM Sans
 *   Sub/body text    Jost
 */

export default function WhatIsIt({ subtitle, heading, tabs }) {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id);

  const currentTab = tabs?.find((tab) => tab.id === activeTab);

  // Function to dynamically split text and wrap "OR" in a transparent border stroke style
  const renderFormattedHeading = (text) => {
    if (!text) return "";
    
    // Using word boundaries (\b) so it only matches the exact word "OR" and not parts of words like "ceraMIC" or "dOR"
    const parts = text.split(/\b(OR)\b/gi);
    
    return parts.map((part, index) => 
      part.toUpperCase() === "OR" ? (
        <span
          key={index}
          className="inline-block"
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
    <section className="bg-[#0B0B0B] px-4 py-24 sm:px-8 lg:px-16 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .wi-heading { font-family: 'Bebas Neue', sans-serif; }
        .wi-title   { font-family: 'DM Sans', sans-serif; }
        .wi-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="mb-14 space-y-4 max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#8C8C8C]" />
            <span className="wi-title text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C8C8C]">
              {subtitle}
            </span>
          </div>

          {/* Heading size scaled up and wrapped in formatting engine */}
          <h2 className="wi-heading text-[3.5rem] sm:text-[5rem] lg:text-[5.75rem] leading-[0.9] text-white tracking-wide uppercase">
            {renderFormattedHeading(heading)}
          </h2>
        </div>

        {/* Premium Minimalist Tabs Navigation */}
        <div className="flex gap-8 mb-12 border-b border-[#3D3D3D]/30 overflow-x-auto pb-px scrollbar-none">
          {tabs?.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="wi-title relative pb-4 text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-300 focus:outline-none"
                style={{ color: isActive ? "#FFFFFF" : "#B8B8B8/60" }}
              >
                <span className={isActive ? "text-white" : "text-[#B8B8B8]/50 hover:text-white transition-colors"}>
                  {tab.label}
                </span>
                
                {/* Active Underline Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C8C8C]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Features Grid Container */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {currentTab?.features?.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="group relative rounded-none border border-[#3D3D3D]/40 bg-[#1A1A1A]/30 p-8 flex flex-col justify-between min-h-[240px] transition-all duration-300 hover:border-[#3D3D3D] hover:bg-[#1A1A1A]/60"
                >
                  <div>
                    {/* Icon container */}
                    {Icon && (
                      <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-none border border-[#3D3D3D]/60 bg-[#0B0B0B] transition-colors duration-300 group-hover:border-[#8C8C8C]/50">
                        <Icon size={16} className="text-[#8C8C8C] transition-transform duration-500 group-hover:rotate-[360deg]" />
                      </div>
                    )}

                    <h3 className="wi-title text-sm font-bold uppercase tracking-wider text-white mb-3 group-hover:text-[#8C8C8C] transition-colors duration-300">
                      {title}
                    </h3>

                    <p className="wi-sub text-sm font-light text-[#B8B8B8]/80 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Top corner minimal tag decoration */}
                  <span className="absolute top-4 right-4 text-[10px] text-[#3D3D3D] font-mono group-hover:text-[#8C8C8C]/40 transition-colors">
                    // 0{i + 1}
                  </span>

                  {/* Left accent border on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-[#8C8C8C] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-full" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}