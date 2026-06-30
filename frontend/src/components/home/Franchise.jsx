import { Banknote, Ruler, TrendingUp, GraduationCap, Megaphone, Boxes, ArrowRight } from "lucide-react";

/**
 * Franchise — AutoLuxe
 *
 * Structure:
 *  1. Heading + studio image — split layout, image grounds the pitch in a real space
 *  2. Investment highlights — three concrete numbers, not invented filler
 *  3. Benefits — what franchisees actually get (training, support, branding),
 *     each card carries a supporting photo instead of a flat icon-only tile
 *  4. Process — a real ordered sequence, so numbering is earned here
 *
 * Fonts: headings 'Bai Jamjuree', body serif — matches Header/Hero.
 *
 * Images below are free-license stock photos (Unsplash) wired in as
 * placeholders so the section works out of the box. Swap them for your
 * own studio/work photography whenever you have it — same IMAGES object,
 * same dimensions (1600px wide for studio, 1200px wide for the rest).
 */

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
  { icon: Banknote, value: "₹18–35L", label: "Total investment" },
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

export default function Franchise() {
  return (
    <section
      className="relative bg-[#0A0A0A] py-20 font-serif sm:py-28"
    >
      {/* ambient glow, consistent with Hero's signature treatment */}
      <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading + studio image, split layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div
              className="mb-5 flex items-center gap-3"
              style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
            >
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-[13px] font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
                Franchise
              </span>
            </div>
            <h2
              className="text-3xl font-semibold leading-tight text-[#F5F5F0] sm:text-4xl"
              style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
            >
              Bring AutoLuxe to your city
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#F5F5F0]/65">
              A proven studio model — training, supply, and marketing built
              in, so you focus on running the business.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#D4AF37]/20 lg:aspect-[16/11]">
            <img
              src={IMAGES.studio}
              alt="AutoLuxe franchise studio storefront"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4">
              <span
                className="text-[12.5px] font-medium uppercase tracking-[0.18em] text-[#F5F5F0]/80"
                style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
              >
                A live AutoLuxe studio
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            </div>
          </div>
        </div>

        {/* Investment highlights */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#D4AF37]/20 sm:grid-cols-3">
          {INVESTMENT.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-start gap-3 bg-[#0E0E0E] p-7 sm:p-8 ${
                i !== 0 ? "sm:border-l sm:border-[#D4AF37]/15" : ""
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

        {/* Benefits */}
        <div className="mt-20">
          <h3
            className="text-xl font-semibold text-[#F5F5F0] sm:text-2xl"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            What you get
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, image, title, desc }) => (
              <div
                key={title}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#D4AF37]/40"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0A0A0A]/80 backdrop-blur-sm transition-colors duration-300 group-hover:border-[#D4AF37]">
                    <Icon className="h-4.5 w-4.5 text-[#D4AF37]" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="p-6">
                  <h4
                    className="text-[15.5px] font-medium text-[#F5F5F0]"
                    style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                  >
                    {title}
                  </h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#F5F5F0]/60">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process — real sequence, numbering earns its place here */}
        <div className="mt-20">
          <h3
            className="text-xl font-semibold text-[#F5F5F0] sm:text-2xl"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            How it works
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-0 sm:grid-cols-4">
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
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#F5F5F0]/60">
                  {item.desc}
                </p>

                {/* connector line — desktop only, between steps */}
                {i < PROCESS.length - 1 && (
                  <div className="absolute right-0 top-[18px] hidden h-px w-4 bg-[#D4AF37]/25 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-start gap-5 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[14.5px] leading-relaxed text-[#F5F5F0]/65">
            Limited territories open per city to protect franchisee margins.
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-[14.5px] font-medium tracking-wide text-[#0A0A0A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
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