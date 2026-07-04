import {
  Banknote,
  Ruler,
  TrendingUp,
  GraduationCap,
  Megaphone,
  Boxes,
  ArrowRight,
} from "lucide-react";

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
  { icon: Banknote, value: "OMR 18K–35K", label: "Total investment" },
  { icon: Ruler, value: "1,200+ sq.ft", label: "Minimum space" },
  { icon: TrendingUp, value: "18–24 mo", label: "Avg. payback period" },
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

function SectionLabel({ eyebrow, title, sub }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="fr-title mb-3 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#B8B8B8] sm:text-[12px]">
            {eyebrow}
          </span>
        </div>
        <h3 className="fr-heading text-2xl text-white sm:text-3xl">{title}</h3>
      </div>
      {sub && (
        <p className="fr-sub max-w-xs text-[13px] font-light leading-relaxed text-[#B8B8B8] sm:text-right sm:text-[13.5px]">
          {sub}
        </p>
      )}
    </div>
  );
}

export default function Franchise() {
  return (
    <section
      id="franchise"
      className="relative bg-[#1A1A1A] py-12 sm:py-16 lg:py-24 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .fr-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .fr-title   { font-family: 'DM Sans', sans-serif; }
        .fr-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-[300px] w-[300px] rounded-full bg-[#8C8C8C]/[0.08] blur-[100px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-8">
        {/* ── Heading + studio image ── */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="fr-title mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8C8C8C]" />
              <span className="text-[12px] font-medium uppercase tracking-[0.25em] text-[#B8B8B8] sm:text-[13px]">
                Franchise
              </span>
            </div>
            <h2 className="fr-heading text-[2.2rem] leading-[0.95] text-white sm:text-[2.8rem] md:text-[2.8rem] lg:text-[3.4rem]">
              BRING AUTOLUXE TO YOUR CITY
            </h2>
            <p className="fr-sub mt-3 max-w-md text-[14px] font-light leading-relaxed text-[#B8B8B8] sm:text-[15px]">
              A proven studio model — training, supply, and marketing built in,
              so you focus on running the business.
            </p>
          </div>

          {/* Studio image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[#3D3D3D] sm:rounded-2xl lg:aspect-[16/11]">
            <img
              src={IMAGES.studio}
              alt="AutoLuxe franchise studio storefront"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3">
              <span className="fr-title text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 sm:text-[12.5px]">
                A live Dettagli Auto
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#8C8C8C]" />
            </div>
          </div>
        </div>

        {/* ── Floating investment plate — bridges hero and body ── */}
        <div className="relative z-10 mt-[2.5rem] ">
          {/* Mobile scrollable row */}
          <div className="flex gap-3 overflow-x-auto pb-1 sm:hidden">
            {INVESTMENT.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex min-w-[140px] flex-col gap-2 rounded-xl border border-[#3D3D3D] bg-[#1A1A1A] p-4"
              >
                <Icon className="h-5 w-5 text-[#8C8C8C]" strokeWidth={1.75} />
                <div className="fr-heading text-2xl text-white">{value}</div>
                <div className="fr-sub text-[12px] text-[#B8B8B8]">{label}</div>
              </div>
            ))}
          </div>

          {/* sm+ glass plate, floats over the seam between hero and body */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[#3D3D3D] bg-[#3D3D3D] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-sm">
            {INVESTMENT.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 bg-[#141414]/95 p-7 sm:p-8"
              >
                <div className="flex w-full items-center justify-between">
                  <Icon className="h-6 w-6 text-[#8C8C8C]" strokeWidth={1.75} />
                  <span className="fr-title text-[10px] font-medium tracking-[0.14em] text-[#8C8C8C]/50">
                    0{i + 1}
                  </span>
                </div>
                <div className="fr-heading text-3xl text-white sm:text-4xl">
                  {value}
                </div>
                <div className="fr-sub text-[13px] text-[#B8B8B8]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Benefits ── */}
        <div className="mt-14 sm:mt-20">
          <SectionLabel
            eyebrow="What's Included"
            title="WHAT YOU GET"
            sub="Everything a new studio needs to open with confidence, on day one."
          />

          {/* Mobile: horizontal scroll */}
          <div className="mt-5 flex gap-4 overflow-x-auto pb-1 sm:hidden">
            {BENEFITS.map(({ icon: Icon, image, title, desc }, i) => (
              <div
                key={title}
                className="group relative min-w-[260px] overflow-hidden rounded-xl border border-[#3D3D3D] bg-[#1A1A1A]"
              >
                <div className="relative h-32 w-full overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#8C8C8C]/50 bg-[#0B0B0B]/80">
                    <Icon className="h-4 w-4 text-[#8C8C8C]" strokeWidth={1.75} />
                  </div>
                  <span className="fr-heading absolute right-3 top-3 text-lg text-white/25">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="fr-sub text-[14px] font-medium text-white">
                    {title}
                  </h4>
                  <p className="fr-sub mt-1.5 text-[12.5px] font-light leading-relaxed text-[#B8B8B8]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* sm+ grid */}
          <div className="mt-6 hidden gap-5 sm:grid sm:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, image, title, desc }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-[#3D3D3D] bg-[#1A1A1A] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8C8C8C] hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.65)]"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#8C8C8C]/50 bg-[#0B0B0B]/80 backdrop-blur-sm transition-colors duration-300 group-hover:border-[#8C8C8C]">
                    <Icon className="h-4 w-4 text-[#8C8C8C]" strokeWidth={1.75} />
                  </div>
                  <span className="fr-heading absolute right-4 top-3 text-2xl text-white/20">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="fr-sub text-[15px] font-medium text-white">
                    {title}
                  </h4>
                  <p className="fr-sub mt-2 text-[13.5px] font-light leading-relaxed text-[#B8B8B8]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Process ── */}
        <div className="mt-14 sm:mt-20">
          <SectionLabel
            eyebrow="The Journey"
            title="HOW IT WORKS"
            sub="From first enquiry to opening day — a guided path, start to finish."
          />

          {/* Mobile: vertical stacked list with connecting line + node dots */}
          <div className="mt-6 flex flex-col gap-0 sm:hidden">
            {PROCESS.map((item, i) => (
              <div key={item.step} className="flex gap-4 pb-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#8C8C8C]/40 bg-[#1A1A1A]">
                    <span className="fr-heading text-[11px] text-[#8C8C8C]">
                      {item.step}
                    </span>
                  </div>
                  {i < PROCESS.length - 1 && (
                    <div className="mt-2 flex-1 w-px bg-gradient-to-b from-[#3D3D3D] to-transparent" />
                  )}
                </div>
                <div className="pb-2 pt-0.5">
                  <h4 className="fr-sub text-[14px] font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="fr-sub mt-1 text-[12.5px] font-light leading-relaxed text-[#B8B8B8]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* sm+: horizontal rail with node markers connecting each step */}
          <div className="relative mt-10 hidden sm:block">
            <div className="absolute left-0 right-0 top-[15px] h-px bg-[#3D3D3D]" />
            <div className="grid sm:grid-cols-4 gap-8">
              {PROCESS.map((item) => (
                <div key={item.step} className="relative pr-2">
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#8C8C8C]/50 bg-[#1A1A1A]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8C8C8C]" />
                  </div>
                  <span className="fr-heading absolute right-2 top-[-6px] text-4xl text-[#8C8C8C]/[0.15]">
                    {item.step}
                  </span>
                  <h4 className="fr-sub mt-4 text-[15px] font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="fr-sub mt-2 text-[13.5px] font-light leading-relaxed text-[#B8B8B8]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#2A2A2A] pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="fr-sub text-[13.5px] font-light leading-relaxed text-[#B8B8B8] sm:max-w-md sm:text-[14.5px]">
            Limited territories open per city to protect franchisee margins.
          </p>
          <a
            href="/franchise"
            className="fr-title group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#E4E4E4] to-[#A8A8A8] px-6 py-3 text-[14px] font-semibold tracking-wide text-[#0B0B0B] shadow-[0_8px_24px_-8px_rgba(200,200,200,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-white hover:to-[#C0C0C0] hover:shadow-[0_12px_32px_-8px_rgba(200,200,200,0.5)] sm:w-auto sm:px-7 sm:py-3.5 sm:text-[14.5px]"
          >
            Enquire About Franchise
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}