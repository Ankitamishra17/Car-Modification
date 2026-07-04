import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0B]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/banner/3.png"
          alt="Contact Us"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="absolute inset-0 bg-[#0B0B0B]/60" />
      {/* Silver gradient — left side depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-[#0B0B0B]/30 to-transparent" />
      {/* Subtle silver radial glow top-left */}
      <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-[#8C8C8C]/10 blur-[100px]" />
     
      {/* Huge Ghost Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2
          className="font-[Bebas_Neue] text-[18rem] leading-none uppercase tracking-wider opacity-[0.05] hidden lg:block"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.25)",
            color: "transparent",
          }}
        >
          CONTACT
        </h2>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-[#8C8C8C]" />

            <span className="font-[DM_Sans] text-[11px] font-semibold uppercase tracking-[0.35em] text-[#B8B8B8]">
              Contact Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[Bebas_Neue] uppercase leading-[0.88]">
            <span className="block text-[3rem] sm:text-[5rem] lg:text-[8rem] text-white">
              LET'S BUILD
            </span>

            <span
              className="block text-[3rem] sm:text-[5rem] lg:text-[8rem]"
              style={{
                WebkitTextStroke: "2px rgba(255,255,255,0.8)",
                color: "transparent",
              }}
            >
              SOMETHING
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl font-[Jost] text-sm sm:text-lg leading-relaxed text-[#B8B8B8]">
            Got a project in mind? Whether it's protection, performance,
            {/* restoration, detailing, or a complete custom build, our specialists
            are ready to transform your vision into reality. */}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact-form"
              className="group inline-flex items-center gap-3 bg-white px-8 py-4 font-[DM_Sans] text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#D5D5D5]"
            >
              Get In Touch
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 border border-[#3D3D3D] px-8 py-4 font-[DM_Sans] text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#8C8C8C]"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
