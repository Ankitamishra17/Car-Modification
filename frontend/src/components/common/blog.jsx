import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Calendar,
  Clock,
  Share2,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { ALL_POSTS } from "../../data/blog"; // Aapka actual path

export default function BlogDetailPage() {
  const { slug } = useParams();

  const post = ALL_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#070707] text-white flex flex-col items-center justify-center font-body p-5 xs:p-6 pt-28 xs:pt-32">
        <div className="border border-[#222] p-8 xs:p-10 sm:p-12 text-center max-w-md w-full bg-[#0F0F0F]/50 backdrop-blur-md">
          <span className="text-[9px] xs:text-[10px] font-label tracking-[0.25em] xs:tracking-[0.3em] text-red-500 uppercase block mb-3 xs:mb-4">
            // System Error
          </span>
          <h2 className="text-2xl xs:text-3xl mb-3 xs:mb-4 font-display uppercase tracking-wide text-white">
            Log Dimension Missing
          </h2>
          <p className="font-body text-[#666] text-[11px] xs:text-xs mb-6 xs:mb-8 leading-relaxed">
            The technical publication you are trying to access does not exist or
            has been re-indexed.
          </p>
          <Link
            to="/blog"
            className="inline-block text-[9px] xs:text-[10px] font-label uppercase tracking-widest border border-[#333] hover:border-white px-5 xs:px-6 py-2.5 xs:py-3 transition-all duration-300 bg-transparent text-[#8C8C8C] hover:text-white"
          >
            Return to Terminal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#070707] text-white min-h-screen selection:bg-white selection:text-black antialiased overflow-x-hidden pt-16 xs:pt-20 sm:pt-24 lg:pt-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600&family=Jost:wght@300;400;500&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-label { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* MAIN CONTAINER: Max width applied with top padding alignment */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto border-t border-[#111]">
        {/* ─── LEFT SIDEBAR: FIXED/STICKY METADATA PANEL (DESKTOP) ─── */}
        {/* lg:top-[90px] ko aap apne navbar ki exact height ke hisab se thoda badal bhi sakte hain */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:h-[calc(100vh-90px)] px-5 xs:px-6 sm:px-10 lg:px-16 pt-8 xs:pt-10 sm:pt-14 lg:pt-16 pb-8 xs:pb-10 sm:pb-14 lg:pb-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#161616] bg-[#0B0B0B]/40 backdrop-blur-sm z-10">
          {/* Top Row: Navigation */}
          <div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2.5 xs:gap-3 font-label text-[9px] xs:text-[10px] uppercase tracking-[0.2em] xs:tracking-[0.25em] text-[#666] hover:text-white transition-colors group mb-8 xs:mb-10 lg:mb-0"
            >
              <div className="h-6 w-6 xs:h-7 xs:w-7 border border-[#222] group-hover:border-[#555] flex items-center justify-center transition-colors shrink-0">
                <ArrowLeft
                  size={12}
                  className="transition-transform group-hover:-translate-x-0.5"
                />
              </div>
              Back to Index
            </Link>
          </div>

          {/* Middle Row: Core Header & Meta */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 pt-2 lg:pt-0">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1 w-1 bg-white animate-pulse shrink-0"></span>
              <span className="font-label text-[9px] xs:text-[10px] font-medium uppercase tracking-[0.25em] xs:tracking-[0.3em] text-[#8C8C8C] break-words">
                CORE.{post.category}
              </span>
            </div>

            <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-[3.25rem] lg:text-5xl xl:text-6xl tracking-wide uppercase leading-[0.95] text-white break-words">
              {post.title}
            </h1>

            <p className="font-body text-sm sm:text-base text-[#8C8C8C] font-light leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Bottom Row: Specs & Actions Dashboard */}
          <div className="pt-8 xs:pt-10 lg:pt-0 space-y-4 xs:space-y-5 sm:space-y-6">
            <div className="grid grid-cols-3 gap-1.5 xs:gap-2 border-t border-b border-[#161616] py-3 xs:py-4">
              <div className="space-y-1 min-w-0">
                <span className="block text-[8px] xs:text-[9px] font-label uppercase tracking-wider text-[#444]">
                  Author
                </span>
                <span className="block text-[10px] xs:text-[11px] font-body text-[#A3A3A3] truncate">
                  {post.author || "Tech Desk"}
                </span>
              </div>
              <div className="space-y-1 border-x border-[#161616] px-2 xs:px-3 min-w-0">
                <span className="block text-[8px] xs:text-[9px] font-label uppercase tracking-wider text-[#444]">
                  Timestamp
                </span>
                <span className="block text-[10px] xs:text-[11px] font-body text-[#A3A3A3] truncate">
                  {post.date}
                </span>
              </div>
              <div className="space-y-1 pl-1.5 xs:pl-2 min-w-0">
                <span className="block text-[8px] xs:text-[9px] font-label uppercase tracking-wider text-[#444]">
                  Duration
                </span>
                <span className="block text-[10px] xs:text-[11px] font-body text-[#A3A3A3] truncate">
                  {post.readTime}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-3 text-[9px] xs:text-[10px] font-label uppercase tracking-widest text-[#444]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={11} className="text-[#222] shrink-0" />{" "}
                Verified Spec
              </span>
              <button className="flex items-center gap-2 hover:text-white transition-colors text-[#666] group">
                <Share2
                  size={11}
                  className="group-hover:rotate-12 transition-transform shrink-0"
                />{" "}
                Share Report
              </button>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDEBAR: SCROLLABLE MAIN CONTENT (DESKTOP) ─── */}
        <div className="w-full lg:w-[60%] bg-[#070707] flex flex-col">
          {/* Full-bleed Hero Visual with customized aspect ratios to avoid vertical clipping */}
          <div className="w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[45vh] xl:h-[55vh] overflow-hidden relative border-b border-[#161616]">
            {/* Subtle Industrial Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/20 z-10" />
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover scale-101 filter brightness-95"
            />
            {/* Corner Decorative Crosshairs — hidden on smallest screens, purely decorative */}
            <span className="hidden xs:block absolute top-3 right-3 sm:top-4 sm:right-4 text-[#ffffff10] font-label text-xs select-none">
              ✕ 01.A
            </span>
          </div>

          {/* Deep Technical Article Content */}
          <div className="p-5 xs:p-6 sm:p-10 lg:p-14 xl:p-10 max-w-3xl lg:max-w-none w-full mx-auto lg:mx-0 space-y-6 xs:space-y-7 sm:space-y-8">
            {/* Aesthetic Entry Chapter Mark */}
            <div className="flex flex-wrap items-center gap-2.5 xs:gap-4 text-[#333] font-label text-[9px] xs:text-[10px] uppercase tracking-[0.3em] xs:tracking-[0.4em] pb-3 xs:pb-4 border-b border-[#111]">
              <span>Section // 01</span>
              <span>•</span>
              <span>Data Logs</span>
            </div>

            {/* Content Body Layout */}
            <div className="font-body text-[#C5C5C5] text-[15px] xs:text-base sm:text-lg leading-relaxed font-light space-y-6 xs:space-y-7 sm:space-y-8">
              <p className="first-letter:text-3xl xs:first-letter:text-4xl first-letter:font-display first-letter:text-white first-letter:mr-2.5 xs:first-letter:mr-3 first-letter:float-left first-letter:tracking-wider">
                {post.content ||
                  "Detailed logs and diagnostic readouts are currently being compiled for this automotive entry. Our workshop team tracks variables across climate conditions, mechanical load, and material wear metrics over extensive testing phases."}
              </p>

              <div className="relative border border-[#1A1A1A] bg-[#0A0A0A] p-5 xs:p-6 sm:p-8 my-6 xs:my-8 flex gap-3 xs:gap-4 items-start overflow-hidden">
                <div className="absolute top-0 right-0 h-14 w-14 xs:h-16 xs:w-16 bg-[#111] rotate-45 translate-x-7 xs:translate-x-8 -translate-y-7 xs:-translate-y-8 border-l border-[#222]" />
                <Layers size={18} className="text-[#555] shrink-0 mt-1" />
                <div className="space-y-1 min-w-0">
                  <span className="block font-label text-[9px] uppercase tracking-widest text-[#555]">
                    Technical Advisory Note
                  </span>
                  <p className="text-xs sm:text-sm text-[#8C8C8C] italic font-light">
                    Every blueprint, material threshold, and diagnostic
                    telemetry index mentioned in this publication has been
                    authenticated live inside our performance prototyping bay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
