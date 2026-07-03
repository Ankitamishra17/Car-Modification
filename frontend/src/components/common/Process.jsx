export default function Process({
  subtitle,
  heading,
  process,
}) {
  return (
    <section className="bg-[#0B0B0B] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
            {subtitle}
          </span>
        </div>

        <h2 className="text-[2.2rem] sm:text-[2.8rem] text-white mb-12">
          {heading}
        </h2>

        <div className="relative">
          <div className="absolute top-7 left-0 right-0 h-px bg-[#2A2A2A] hidden lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#3D3D3D] flex items-center justify-center text-[#8C8C8C] text-lg z-10">
                  {item.step}
                </div>

                <h4 className="text-[14px] font-semibold text-white">
                  {item.title}
                </h4>

                <p className="text-[12.5px] leading-relaxed text-[#B8B8B8]">
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