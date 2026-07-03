import { ArrowRight, CheckCircle } from "lucide-react";

export default function Packages({
  subtitle,
  heading,
  packages,
}) {
  return (
    <section className="bg-[#1A1A1A] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
            {subtitle}
          </span>
        </div>

        <h2 className="text-[2.2rem] sm:text-[2.8rem] text-white mb-10">
          {heading}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl overflow-hidden border transition-all
              ${
                pkg.highlight
                  ? "border-[#8C8C8C] bg-[#202020]"
                  : "border-[#3D3D3D] bg-[#1A1A1A]"
              }`}
            >
              {pkg.highlight && (
                <div className="bg-[#8C8C8C] py-2 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B0B0B]">
                  Most Popular
                </div>
              )}

              <div className="p-7">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#8C8C8C]">
                  {pkg.type}
                </span>

                <h3 className="mt-2 text-3xl text-white">
                  {pkg.name}
                </h3>

                <div className="mt-4">
                  <span className="text-4xl text-white">
                    {pkg.price}
                  </span>
                </div>

                <p className="mt-2 text-[#B8B8B8] text-sm">
                  Approx. {pkg.duration} turnaround
                </p>

                <div className="my-6 h-px bg-[#3D3D3D]" />

                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3"
                    >
                      <CheckCircle
                        size={16}
                        className="text-[#8C8C8C] mt-1"
                      />

                      <span className="text-[#B8B8B8]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3 rounded-full flex items-center justify-center gap-2 transition-all
                  ${
                    pkg.highlight
                      ? "bg-[#8C8C8C] text-[#0B0B0B]"
                      : "border border-[#3D3D3D] text-[#B8B8B8]"
                  }`}
                >
                  Get a Quote
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}