import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * CTA — AutoLuxe
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
 *   Title/labels     DM Sans
 *   Sub/body text    Jost
 */

export default function CTA() {
  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .cta2-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .cta2-title   { font-family: 'DM Sans', sans-serif; }
        .cta2-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Overlay — slightly darker to suit greyscale palette */}
      <div className="absolute inset-0 bg-black/75 px-15" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        <span className="cta2-title text-[#8C8C8C] uppercase tracking-[4px] text-sm font-semibold">
          We Are Here To Help
        </span>

        <h2 className="cta2-heading mt-4 text-[3rem] md:text-[5rem] leading-[0.95] text-white">
          PLEASE FEEL FREE TO CONTACT US
          <span className="block text-[#8C8C8C]">IF YOU HAVE ANY QUESTION!</span>
        </h2>

        <p className="cta2-sub mt-6 text-lg font-light text-[#B8B8B8] max-w-2xl mx-auto">
          Get a free consultation from our design experts and create interiors
          that blend luxury, functionality, and elegance.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="cta2-title group inline-flex items-center gap-3 bg-[#8C8C8C] text-[#0B0B0B] px-8 py-4 font-semibold transition-all duration-300 hover:bg-white"
          >
            Get Free Consultation
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}