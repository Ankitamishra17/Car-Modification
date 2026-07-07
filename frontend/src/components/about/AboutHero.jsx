import React from "react";
import { motion } from "framer-motion";

/**
 * AboutHero — AutoLuxe
 *
 * Palette (fixed):
 *   Primary BG      #0B0B0B
 *   Secondary BG    #1A1A1A
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver)
 *
 * Type system:
 *   Main heading    Bebas Neue
 *   Title/labels    DM Sans
 *   Sub/body text   Jost
 */

const SOCIALS = [
  {
    key: "contact",
    label: "Contact",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M4 6.5L12 13L20 6.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "#instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="4.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "#youtube",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.5 7.6C21.3 6.6 20.5 5.8 19.5 5.6C17.8 5.2 12 5.2 12 5.2C12 5.2 6.2 5.2 4.5 5.6C3.5 5.8 2.7 6.6 2.5 7.6C2.1 9.3 2.1 12 2.1 12C2.1 12 2.1 14.7 2.5 16.4C2.7 17.4 3.5 18.2 4.5 18.4C6.2 18.8 12 18.8 12 18.8C12 18.8 17.8 18.8 19.5 18.4C20.5 18.2 21.3 17.4 21.5 16.4C21.9 14.7 21.9 12 21.9 12C21.9 12 21.9 9.3 21.5 7.6Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M10 9.6L15 12L10 14.4V9.6Z" fill="currentColor" />
      </svg>
    ),
  },
];

function SocialRail() {
  return (
    <>
      {/* Desktop / tablet — vertical rail hugging the right edge */}
      <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 sm:flex lg:right-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex w-16 flex-col items-center rounded-md border border-[#3D3D3D] bg-[#1A1A1A]/70 backdrop-blur-sm lg:w-[4.5rem]"
        >
          <span className="ah-title py-3 text-[9px] uppercase tracking-[0.3em] text-[#8C8C8C] [writing-mode:vertical-rl]">
            Follow
          </span>
          <span className="h-px w-8 bg-[#3D3D3D]" />

          {SOCIALS.map((s, i) => (
            <a
              key={s.key}
              href={s.href}
              aria-label={s.label}
              className="group relative flex h-16 w-full items-center justify-center text-[#B8B8B8] transition-colors duration-300 hover:text-white lg:h-[4.5rem]"
              style={{
                borderTop: i === 0 ? "none" : "1px solid #3D3D3D",
              }}
            >
              <span className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 lg:h-6 lg:w-6">
                {s.icon}
              </span>
              <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded bg-[#1A1A1A] px-2 py-1 text-[10px] uppercase tracking-widest text-[#B8B8B8] opacity-0 shadow-[0_0_0_1px_#3D3D3D] transition-opacity duration-200 group-hover:opacity-100">
                {s.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

    </>
  );
}

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0B0B0B]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .ah-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .ah-title   { font-family: 'DM Sans', sans-serif; }
        .ah-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Silver hairline top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8C8C8C] to-transparent opacity-50" />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/banner/refurbish.png"
          alt="Our Story"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Ghost background text — desktop only */}
      <div className="pointer-events-none absolute -mt-18 inset-0 hidden lg:flex items-center justify-end overflow-hidden pr-10">
        <h2
          className="ah-heading text-[16rem] leading-none uppercase tracking-wider opacity-[0.05] select-none"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.25)",
            color: "transparent",
          }}
        >
          STORY
        </h2>
      </div>

      {/* Vertical social rail (desktop) / horizontal strip (mobile, rendered inline below) */}
      <SocialRail />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl py-32 pr-0 sm:pr-24 lg:pr-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center -mt-14 gap-3">
              <span className="h-px w-12 bg-[#8C8C8C]" />
              <span className="ah-title text-[4px] sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#B8B8B8]">
                La Nostra Storia
              </span>
            </div>

            {/* Heading */}
            <h1 className="ah-heading uppercase leading-[0.9] whitespace-nowrap">
              <span className="text-[2.5rem] sm:text-[4.5rem] lg:text-[6rem] text-white">
                OUR{" "}
              </span>
              <span
                className="text-[2.5rem] sm:text-[4.5rem] lg:text-[6rem]"
                style={{
                  WebkitTextStroke: "2px #8C8C8C",
                  color: "transparent",
                }}
              >
                STORY
              </span>
            </h1>

            {/* Description */}
            <p className="ah-sub mt-5 max-w-lg text-sm sm:text-base lg:text-lg font-light leading-relaxed text-[#B8B8B8]">
              Every remarkable automobile tells a story. Our purpose is to
              preserve it — through craftsmanship, precision, and an unwavering
              respect for the machines that define generations.
            </p>
          </motion.div>

          {/* Decorative line + stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 sm:mt-16"
          >
            <div className="h-px w-full origin-left bg-gradient-to-r from-[#3D3D3D] via-[#3D3D3D] to-transparent" />

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
              <div>
                <p className="ah-heading text-3xl sm:text-4xl text-white">
                  26+
                </p>
                <p className="ah-title text-[11px] sm:text-xs uppercase tracking-widest text-[#B8B8B8] mt-1">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="ah-heading text-3xl sm:text-4xl text-white">
                  1,200+
                </p>
                <p className="ah-title text-[11px] sm:text-xs uppercase tracking-widest text-[#B8B8B8] mt-1">
                  Vehicles Restored
                </p>
              </div>
              <div>
                <p className="ah-heading text-3xl sm:text-4xl text-white">
                  100%
                </p>
                <p className="ah-title text-[11px] sm:text-xs uppercase tracking-widest text-[#B8B8B8] mt-1">
                  Craftsmanship
                </p>
              </div>
            </div>

            {/* Mobile social strip lives here, right after stats */}
            <SocialRailMobileSlot />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Small helper so the mobile strip renders once, in flow, instead of
// duplicating markup — pulls the same SOCIALS list.
function SocialRailMobileSlot() {
  return (
    <div className="flex justify-start sm:hidden">
      <div className="mt-10 flex w-full max-w-[220px] overflow-hidden rounded-md border border-[#3D3D3D] bg-[#1A1A1A]/70">
        {SOCIALS.map((s, i) => (
          <a
            key={s.key}
            href={s.href}
            aria-label={s.label}
            className="flex flex-1 flex-col items-center gap-1.5 py-3 text-[#B8B8B8] active:text-white"
            style={{ borderLeft: i === 0 ? "none" : "1px solid #3D3D3D" }}
          >
            <span className="h-5 w-5">{s.icon}</span>
            <span className="ah-title text-[8px] uppercase tracking-widest">
              {s.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}