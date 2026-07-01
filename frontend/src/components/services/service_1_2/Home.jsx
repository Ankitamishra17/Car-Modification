import { ArrowRight } from "lucide-react";
import { HERO_IMAGE } from "./data";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden flex flex-col justify-end">
      <img
        src={HERO_IMAGE}
        alt="PPF & Ceramic Coating"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-10 pb-16 pt-32">
        <div className="ppf-title mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
            Services / PPF & Ceramic Coating
          </span>
        </div>

        <h1 className="ppf-heading text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] leading-[0.92] text-white max-w-4xl">
          PAINT PROTECTION
          <span className="block text-[#8C8C8C]">THAT LASTS.</span>
        </h1>

        <p className="ppf-sub mt-6 max-w-lg text-[15px] font-light leading-relaxed text-[#B8B8B8]">
          PPF guards your paint from stone chips, road debris, and scratches.
          Ceramic coating adds a permanent hydrophobic gloss layer. Together,
          they're the most complete exterior protection available.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#packages" className="ppf-cta-btn">
            View packages <ArrowRight size={16} />
          </a>
          <a href="#contact" className="ppf-cta-ghost">
            Book free consultation
          </a>
        </div>
      </div>
    </section>
  );
}