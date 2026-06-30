import { Banknote, Ruler, TrendingUp, GraduationCap, Megaphone, Boxes, ArrowRight } from "lucide-react";

const IMAGES = {
  studio:
    "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?q=80&w=1600&auto=format&fit=crop",
  training:
    "https://images.unsplash.com/photo-1605437241278-c1806d14a4d9?q=80&w=1200&auto=format&fit=crop",
  marketing:
    "https://images.unsplash.com/photo-1632823471799-c3812077da2d?q=80&w=1200&auto=format&fit=crop",
  supply:
    "https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?q=80&w=1200&auto=format&fit=crop",
};

const INVESTMENT = [
  { icon: Banknote,   value: "₹18–35L",      label: "Total investment"    },
  { icon: Ruler,      value: "1,200+ sq.ft",  label: "Minimum space"       },
  { icon: TrendingUp, value: "18–24 mo",      label: "Avg. payback period" },
];

const BENEFITS = [
  {
    icon: GraduationCap,
    image: IMAGES.training,
    title: "Hands-on training",
    desc: "Your team trains at a live studio on PPF, coating, and restoration workflows before you open.",
  },
  {
    icon: Megaphone,
    image: IMAGES.marketing,
    title: "Brand & marketing support",
    desc: "Launch campaigns, signage, and a steady stream of local marketing assets, handled centrally.",
  },
  {
    icon: Boxes,
    image: IMAGES.supply,
    title: "Vetted supply chain",
    desc: "Direct access to the films, coatings, and parts vendors we use — no sourcing guesswork.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Apply",
    desc: "Share your city, available space, and investment range through a short enquiry.",
  },
  {
    step: "02",
    title: "Review & approve",
    desc: "We assess location fit and walk you through margins, costs, and territory exclusivity.",
  },
  {
    step: "03",
    title: "Set up",
    desc: "Studio design, equipment, and inventory move in while your team completes training.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Go live with on-ground marketing support and a dedicated franchise success contact.",
  },
];

export default function Franchise() {
  return (
    <section
      id="franchise"
      className="relative bg-[#0A0A0A] py-12 font-serif sm:py-16 lg:py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[100px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">

        {/* ── Heading + studio image ── */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div
              className="mb-4 flex items-center gap-3"
              style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
            >
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-[12px] font-medium uppercase tracking-[0.25em] text-[#D4AF37] sm:text-[13px]">
                Franchise
              </span>
            </div>
            <h2
              className="text-2xl font-semibold leading-tight text-[#F5F5F0] sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
            >
              Bring AutoLuxe to your city
            </h2>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-[#F5F5F0]/65 sm:text-[15px]">
              A proven studio model — training, supply, and marketing built
              in, so you focus on running the business.
            </p>
          </div>

          {/* Studio image — tighter aspect on mobile */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[#D4AF37]/20 sm:rounded-2xl lg:aspect-[16/11]">
            <img
              src={IMAGES.studio}
              alt="AutoLuxe franchise studio storefront"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3">
              <span
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#F5F5F0]/80 sm:text-[12.5px]"
                style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
              >
                A live AutoLuxe studio
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            </div>
          </div>
        </div>

        {/* ── Investment highlights ── */}
        {/* Mobile: horizontal scroll row | sm+: 3-col grid */}
        <div className="mt-8 sm:mt-10">
          {/* Mobile scrollable row */}
          <div className="flex gap-3 overflow-x-auto pb-1 sm:hidden">
            {INVESTMENT.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex min-w-[140px] flex-col gap-2 rounded-xl border border-[#D4AF37]/20 bg-[#0E0E0E] p-4"
              >
                <Icon className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.75} />
                <div
                  className="text-xl font-semibold text-[#F5F5F0]"
                  style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                >
                  {value}
                </div>
                <div className="text-[12px] text-[#F5F5F0]/55">{label}</div>
              </div>
            ))}
          </div>

          {/* sm+ grid */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[#D4AF37]/20">
            {INVESTMENT.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-start gap-3 bg-[#0E0E0E] p-7 sm:p-8 ${
                  i !== 0 ? "border-l border-[#D4AF37]/15" : ""
                }`}
              >
                <Icon className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.75} />
                <div
                  className="text-2xl font-semibold text-[#F5F5F0] sm:text-3xl"
                  style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                >
                  {value}
                </div>
                <div className="text-[13px] text-[#F5F5F0]/55">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Benefits ── */}
        <div className="mt-12 sm:mt-16">
          <h3
            className="text-lg font-semibold text-[#F5F5F0] sm:text-xl lg:text-2xl"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            What you get
          </h3>

          {/* Mobile: horizontal scroll | sm+: 3-col grid */}
          <div className="mt-5 flex gap-4 overflow-x-auto pb-1 sm:hidden">
            {BENEFITS.map(({ icon: Icon, image, title, desc }) => (
              <div
                key={title}
                className="group min-w-[260px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <div className="relative h-32 w-full overflow-hidden">
                  <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0A0A0A]/80">
                    <Icon className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="p-4">
                  <h4
                    className="text-[14px] font-medium text-[#F5F5F0]"
                    style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                  >
                    {title}
                  </h4>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#F5F5F0]/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* sm+ grid */}
          <div className="mt-6 hidden gap-5 sm:grid sm:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, image, title, desc }) => (
              <div
                key={title}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#D4AF37]/40"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={image} alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0A0A0A]/80 backdrop-blur-sm transition-colors duration-300 group-hover:border-[#D4AF37]">
                    <Icon className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="p-5">
                  <h4
                    className="text-[15px] font-medium text-[#F5F5F0]"
                    style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                  >
                    {title}
                  </h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#F5F5F0]/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Process ── */}
        <div className="mt-12 sm:mt-16">
          <h3
            className="text-lg font-semibold text-[#F5F5F0] sm:text-xl lg:text-2xl"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            How it works
          </h3>

          {/* Mobile: vertical stacked list with left border accent */}
          <div className="mt-5 flex flex-col gap-0 sm:hidden">
            {PROCESS.map((item, i) => (
              <div key={item.step} className="flex gap-4 pb-6">
                {/* Left: step number + connecting line */}
                <div className="flex flex-col items-center">
                  <div
                    className="text-lg font-semibold text-[#D4AF37]/50 leading-none"
                    style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                  >
                    {item.step}
                  </div>
                  {i < PROCESS.length - 1 && (
                    <div className="mt-2 flex-1 w-px bg-[#D4AF37]/15" />
                  )}
                </div>
                {/* Right: content */}
                <div className="pb-2">
                  <h4
                    className="text-[14px] font-medium text-[#F5F5F0]"
                    style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-[#F5F5F0]/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* sm+: horizontal 4-col grid */}
          <div className="mt-6 hidden sm:grid sm:grid-cols-4 gap-0">
            {PROCESS.map((item, i) => (
              <div key={item.step} className="relative pr-4">
                <div
                  className="text-3xl font-semibold text-[#D4AF37]/30"
                  style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                >
                  {item.step}
                </div>
                <h4
                  className="mt-3 text-[15px] font-medium text-[#F5F5F0]"
                  style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                >
                  {item.title}
                </h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#F5F5F0]/60">{item.desc}</p>
                {i < PROCESS.length - 1 && (
                  <div className="absolute right-0 top-[18px] hidden h-px w-4 bg-[#D4AF37]/25 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-[13.5px] leading-relaxed text-[#F5F5F0]/65 sm:max-w-md sm:text-[14.5px]">
            Limited territories open per city to protect franchisee margins.
          </p>
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-[14px] font-medium tracking-wide text-[#0A0A0A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] sm:w-auto sm:px-7 sm:py-3.5 sm:text-[14.5px]"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            Enquire About Franchise
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}