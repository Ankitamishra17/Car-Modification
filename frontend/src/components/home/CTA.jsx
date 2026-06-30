import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

/**
 * CTA — AutoLuxe
 *
 * Structure:
 *  1. Split layout — left: strong headline + subtext + two action buttons
 *                    right: contact info cards (phone, email, location)
 *  2. Bottom strip — trust signals (studio count, years, cars protected)
 *
 * Design is consistent with Franchise.jsx:
 *  - bg-[#0A0A0A], gold (#D4AF37) accents, font 'Bai Jamjuree'
 *  - Same ambient glow treatment (mirrored to left side for variety)
 *  - Border tokens: border-[#D4AF37]/20, border-white/10
 */

const CONTACT = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@autoluxe.in",
    href: "mailto:hello@autoluxe.in",
  },
  {
    icon: MapPin,
    label: "Find a studio",
    value: "12 cities across India",
    href: "#locations",
  },
];

const TRUST = [
  { value: "12+", label: "Studios across India" },
  { value: "8 yrs", label: "In the industry" },
  { value: "40,000+", label: "Cars protected" },
];

export default function CTA() {
  return (
    <section
      className="relative bg-[#0A0A0A] py-20 font-serif sm:py-28 overflow-hidden"
    >
      {/* Ambient glow — left side (mirrors Franchise's right-side glow) */}
      <div className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      {/* Subtle second glow, bottom right */}
      <div className="pointer-events-none absolute -bottom-20 right-0 h-[320px] w-[320px] rounded-full bg-[#D4AF37]/6 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main split */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left — headline + CTAs */}
          <div>
            {/* Eyebrow */}
            <div
              className="mb-5 flex items-center gap-3"
              style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
            >
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-[13px] font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
                Get in touch
              </span>
            </div>

            <h2
              className="text-3xl font-semibold leading-tight text-[#F5F5F0] sm:text-4xl lg:text-[2.65rem]"
              style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
            >
              Your car deserves{" "}
              <span className="text-[#D4AF37]">the best.</span>
              <br />
              Let's talk.
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#F5F5F0]/60">
              Book a consultation, ask about a service, or enquire about
              bringing AutoLuxe to your city — our team responds within one
              business day.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-[14.5px] font-medium tracking-wide text-[#0A0A0A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
              >
                Book a free consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#franchise"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 px-7 py-3.5 text-[14.5px] font-medium tracking-wide text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
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
                className="group flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/[0.04]"
              >
                {/* Icon circle */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/8 transition-colors duration-300 group-hover:border-[#D4AF37]/70 group-hover:bg-[#D4AF37]/15">
                  <Icon className="h-4.5 w-4.5 text-[#D4AF37]" strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <div
                    className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-[#F5F5F0]/40"
                    style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                  >
                    {label}
                  </div>
                  <div
                    className="mt-0.5 text-[15px] font-medium text-[#F5F5F0] transition-colors duration-300 group-hover:text-[#D4AF37]"
                    style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                  >
                    {value}
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#F5F5F0]/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]" />
              </a>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[#D4AF37]/20 sm:mt-20">
          {TRUST.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center bg-[#0E0E0E] py-7 px-4 text-center ${
                i !== 0 ? "border-l border-[#D4AF37]/15" : ""
              }`}
            >
              <div
                className="text-2xl font-semibold text-[#D4AF37] sm:text-3xl"
                style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
              >
                {value}
              </div>
              <div className="mt-1.5 text-[12.5px] text-[#F5F5F0]/50">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}