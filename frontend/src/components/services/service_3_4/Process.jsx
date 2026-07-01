import { PROCESS } from "./data";

export default function Process() {
  return (
    <section className="bg-[#0B0B0B] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rr-title mb-3 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
            How it works
          </span>
        </div>
        <h2 className="rr-heading text-[2.2rem] sm:text-[2.8rem] text-white mb-12">
          WHAT HAPPENS TO YOUR CAR.
        </h2>

        <div className="relative">
          {/* Connecting line desktop */}
          <div className="absolute top-7 left-0 right-0 h-px bg-[#2A2A2A] hidden lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((item) => (
              <div key={item.step} className="relative flex flex-col gap-3">
                <div className="rr-heading w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#3D3D3D] flex items-center justify-center text-[#8C8C8C] text-lg z-10">
                  {item.step}
                </div>
                <h4 className="rr-title text-[14px] font-semibold text-white">{item.title}</h4>
                <p className="rr-sub text-[12.5px] font-light leading-relaxed text-[#B8B8B8]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}