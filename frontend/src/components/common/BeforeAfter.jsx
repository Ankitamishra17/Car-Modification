export default function BeforeAfter({
  subtitle,
  heading,
  images,
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#3D3D3D]"
            >
              <img
                src={src}
                alt={`Result ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}