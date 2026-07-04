import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const CONTACT = [
  {
    icon: Phone,
    label: "Call us",
    value: "+968 9123 4567",
    href: "tel:+96891234567",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@autoluxe.om",
    href: "mailto:hello@autoluxe.om",
  },
  {
    icon: MapPin,
    label: "Find a studio",
    value: "6 cities across Oman",
    href: "#locations",
  },
];

const TRUST = [
  { value: "6+", label: "Studios across Oman" },
  { value: "8 yrs", label: "In the industry" },
  { value: "40,000+", label: "Cars protected" },
];

export default function CTA() {
  return (
    <section className="relative bg-[#0B0B0B] py-20 sm:py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .cta-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .cta-title   { font-family: 'DM Sans', sans-serif; }
        .cta-sub     { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* Ambient glow — left side */}
      <div className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[#8C8C8C]/[0.08] blur-[120px]" />
      {/* Subtle second glow, bottom right */}
      <div className="pointer-events-none absolute -bottom-20 right-0 h-[320px] w-[320px] rounded-full bg-[#8C8C8C]/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main split */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left — headline + CTAs */}
          <div>
            {/* Eyebrow */}
            <div className="cta-title mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8C8C8C]" />
              <span className="text-[13px] font-medium uppercase tracking-[0.25em] text-[#B8B8B8]">
                Get in touch
              </span>
            </div>

            <h2 className="cta-heading text-[2.6rem] leading-[0.95] text-white sm:text-[3.2rem] lg:text-[3.7rem]">
              YOUR CAR DESERVES{" "}
              <span className="text-[#8C8C8C]">THE BEST.</span>
              <br />
              LET'S TALK.
            </h2>

            <p className="cta-sub mt-5 max-w-md text-[15px] font-light leading-relaxed text-[#B8B8B8]">
              Book a consultation, ask about a service, or enquire about
              bringing AutoLuxe to your city — our team responds within one
              business day.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="cta-title group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#E4E4E4] to-[#A8A8A8] px-7 py-3.5 text-[14.5px] font-semibold tracking-wide text-[#0B0B0B] shadow-[0_8px_24px_-8px_rgba(200,200,200,0.35)] transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(200,200,200,0.5)] hover:-translate-y-0.5 hover:from-white hover:to-[#C0C0C0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C8C8C]"
              >
                Book a free consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/franchise"
                className="cta-title group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#3D3D3D] px-7 py-3.5 text-[14.5px] font-semibold tracking-wide text-[#B8B8B8] transition-all duration-300 hover:border-[#8C8C8C] hover:bg-[#1A1A1A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C8C8C]"
              >
                Franchise enquiry
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-4">
            {CONTACT.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-5 rounded-xl border border-[#3D3D3D] bg-[#1A1A1A] px-6 py-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8C8C8C] hover:bg-[#202020] hover:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.6)]"
              >
                {/* Icon circle */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#3D3D3D] bg-[#2A2A2A] transition-colors duration-300 group-hover:border-[#8C8C8C] group-hover:bg-[#2A2A2A]">
                  <Icon className="h-4.5 w-4.5 text-[#8C8C8C]" strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <div className="cta-title text-[10.5px] font-medium uppercase tracking-[0.18em] text-[#B8B8B8]/70">
                    {label}
                  </div>
                  <div className="cta-sub mt-0.5 text-[15px] font-medium text-white transition-colors duration-300 group-hover:text-[#8C8C8C]">
                    {value}
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#B8B8B8]/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8C8C8C]" />
              </a>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[#3D3D3D] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] sm:mt-20">
          {TRUST.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center bg-[#1A1A1A] py-7 px-4 text-center ${
                i !== 0 ? "border-l border-[#3D3D3D]" : ""
              }`}
            >
              <div className="cta-heading text-3xl text-[#8C8C8C] sm:text-4xl">
                {value}
              </div>
              <div className="cta-sub mt-1.5 text-[12.5px] text-[#B8B8B8]">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}