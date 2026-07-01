import { ArrowRight, CheckCircle } from "lucide-react";
import { PACKAGES } from "./data";

export default function Packages() {
  return (
    <section id="packages" className="bg-[#1A1A1A] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rr-title mb-3 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
            Pricing
          </span>
        </div>
        <h2 className="rr-heading text-[2.2rem] sm:text-[2.8rem] text-white mb-10">
          CHOOSE YOUR RESTORATION LEVEL.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className={`rr-pkg${pkg.highlight ? " highlight" : ""}`}>
              {pkg.highlight && (
                <div className="rr-title bg-[#8C8C8C] py-2 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B0B0B]">
                  Most Popular
                </div>
              )}
              <div className="p-7">
                <span className="rr-title text-[10.5px] font-semibold uppercase tracking-[0.15em] text-[#8C8C8C]">
                  {pkg.type}
                </span>
                <h3 className="rr-heading mt-1 text-[2rem] text-white">{pkg.name}</h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="rr-heading text-[2.4rem] text-white">{pkg.price}</span>
                </div>
                <p className="rr-sub text-[12px] text-[#B8B8B8] mt-1">
                  Approx. {pkg.duration} turnaround
                </p>

                <div className="my-6 h-px bg-[#3D3D3D]" />

                <ul className="flex flex-col gap-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle size={15} className="rr-check mt-0.5" strokeWidth={2} />
                      <span className="rr-sub text-[13.5px] font-light text-[#B8B8B8]">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-7 flex w-full items-center justify-center gap-2 rounded-full py-3 text-[13px] font-semibold transition-all rr-title ${
                    pkg.highlight
                      ? "bg-[#8C8C8C] text-[#0B0B0B] hover:bg-white"
                      : "border border-[#3D3D3D] text-[#B8B8B8] hover:border-[#8C8C8C] hover:text-white"
                  }`}
                >
                  Get a quote <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="rr-sub mt-6 text-center text-[12.5px] font-light text-[#B8B8B8]/60">
          Prices vary by vehicle condition and extent of damage. Contact us for an exact quote.
        </p>
      </div>
    </section>
  );
}