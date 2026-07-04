import { useRef } from "react";
import { ArrowLeft, ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ALL_POSTS } from "../../data/blog"; // apne actual path ke hisaab se adjust karein

export default function BlogGrid() {
  const sliderRef = useRef(null);

  // ALL_POSTS ke pehle 10 items → featured horizontal slider
  // baaki items → lower "Technical Logs" grid
  const FEATURED_SLIDES = ALL_POSTS.slice(0, 10);
  const POSTS = ALL_POSTS.slice(10);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0B0B0B] text-white px-4 xs:px-5 sm:px-8 lg:px-12 py-14 sm:py-18 lg:py-24 select-none">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&family=Jost:wght@300;400;500&display=swap');
        
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-label { font-family: 'DM Sans', sans-serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        /* Hide default scrollbars */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-12">
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#222] pb-5 sm:pb-6 mb-8 sm:mb-12 gap-4">
          <div>
            <span className="font-label text-[9px] xs:text-[10px] uppercase tracking-[0.2em] xs:tracking-[0.25em] text-[#8C8C8C] block mb-2">
              Featured Spotlights
            </span>
            <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl tracking-wide uppercase">
              Curated Stories<span className="text-[#8C8C8C]">.</span>
            </h2>
          </div>

          {/* Slider Controllers */}
          <div className="flex gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="h-9 w-9 sm:h-10 sm:w-10 border border-[#2A2A2A] hover:border-[#8C8C8C] flex items-center justify-center transition-colors bg-[#111]/30"
            >
              <ArrowLeft size={16} className="text-[#8C8C8C]" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="h-9 w-9 sm:h-10 sm:w-10 border border-[#2A2A2A] hover:border-[#8C8C8C] flex items-center justify-center transition-colors bg-[#111]/30"
            >
              <ArrowRight size={16} className="text-[#8C8C8C]" />
            </button>
          </div>
        </div>

        {/* ── PART 1: SLIDE ROW (EQUAL SIZE SLIDERS) ── */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 sm:pb-16 -mx-4 xs:-mx-5 sm:mx-0 px-4 xs:px-5 sm:px-0"
        >
          {FEATURED_SLIDES.map((slide, i) => (
            <Link
              to={`/blog/${slide.slug}`}
              key={slide.slug || i}
              className="w-[85%] xs:w-[75%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start group cursor-pointer block"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#161616] mb-4 sm:mb-5 border border-[#222]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                <span className="font-label text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-[#8C8C8C] block">
                  // {slide.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide leading-tight group-hover:text-[#B8B8B8] transition-colors">
                  {slide.title}
                </h3>
                <p className="font-body text-[#8C8C8C] text-[13px] sm:text-[13.5px] font-light leading-relaxed line-clamp-2">
                  {slide.excerpt}
                </p>
                <div className="font-body text-[11px] sm:text-xs text-[#555] pt-1 flex items-center gap-2">
                  <span>{slide.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {slide.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── PART 2: CORE LOWER GRID (PERFECT SYMMETRIC MATRIX) ── */}
        <div className="border-t border-[#222] pt-10 sm:pt-16 mt-2 sm:mt-4">
          <div className="mb-6 sm:mb-10">
            <span className="font-label text-[9px] xs:text-[10px] uppercase tracking-[0.2em] xs:tracking-[0.25em] text-[#8C8C8C] block mb-1">
              Deep Dives
            </span>
            <h3 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide">
              Technical Logs
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {POSTS.map((post, i) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug || i}
                className="group block space-y-3 sm:space-y-4 pb-4"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#161616] border border-[#222]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-label text-[9px] sm:text-[10px] tracking-widest text-[#8C8C8C] uppercase font-semibold">
                      {post.category}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-[#444] group-hover:text-white transition-colors shrink-0"
                    />
                  </div>

                  <h4 className="font-display text-lg sm:text-xl uppercase tracking-wide leading-snug group-hover:text-[#B8B8B8] transition-colors">
                    {post.title}
                  </h4>

                  <p className="font-body text-[#8C8C8C] text-[12.5px] sm:text-[13px] font-light leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="font-body text-[10px] sm:text-[11px] text-[#555] pt-1">
                    {post.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
