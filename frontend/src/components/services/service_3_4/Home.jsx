import { ArrowRight } from "lucide-react";
import { HERO_IMAGE } from "./data";

export default function Home() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden flex flex-col justify-end">
      <img
        src={HERO_IMAGE}
        alt="Vehicle Refurbishment & Restoration"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-10 pb-16 pt-32">
        <div className="rr-title mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
            Services / Refurbish & Restore
          </span>
        </div>

        <h1 className="rr-heading text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] leading-[0.92] text-white max-w-4xl">
          BRING IT BACK
          <span className="block text-[#8C8C8C]">TO LIFE.</span>
        </h1>

        <p className="rr-sub mt-6 max-w-lg text-[15px] font-light leading-relaxed text-[#B8B8B8]">
          From dents and rust to tired interiors, our refurbishment and
          restoration studio takes vehicles back to factory condition —
          panel by panel, inside and out.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#packages" className="rr-cta-btn">
            View packages <ArrowRight size={16} />
          </a>
          <a href="#contact" className="rr-cta-ghost">
            Book free consultation
          </a>
        </div>
      </div>
    </section>
  );
}