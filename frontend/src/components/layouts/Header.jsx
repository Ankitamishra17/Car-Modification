import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

/**
 * Header — Auto Detailing / Customization Brand
 *
 * Fonts:
 *  - Headings / nav links: 'Bai Jamjuree'
 *  - Body / dropdown copy: serif
 * Colors:
 *  - Golden  #D4AF37 (signature accent, logo, hover states)
 *  - Black   #0A0A0A (header background)
 *  - White   #F5F5F0 (text on dark)
 *
 * Load Bai Jamjuree in your layout.tsx/layout.js head, e.g.:
 * <link to="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap" rel="stylesheet" />
 */

const SERVICES = [
  {
    name: "PPF / Ceramic Coating",
    desc: "Paint protection that keeps the shine permanent.",
    path: "/services/ppf-ceramic",
  },
  {
    name: "Refurbish Vehicle / Restore",
    desc: "Bring tired metal back to factory-fresh form.",
    path: "/services/refurbish",
  },
  {
    name: "Upholstery / Paints",
    desc: "Interior trim and full-body paint, done by hand.",
    path: "/services/upholstery-paints",
  },
  {
    name: "Car Body Kits / Exhaust",
    desc: "Aggressive lines and a sound to match.",
    path: "/services/body-kits-exhaust",
  },
  {
    name: "Tuning & Mapping / Accessories",
    desc: "Tuned performance, fitted exactly to you.",
    path: "/services/tuning-accessories",
  },
];

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blogs", path: "/blogs" },
  { name: "Franchise", path: "/franchise" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header
      className={[
        "font-serif sticky top-0 z-50 w-full transition-all duration-500",
        "bg-[#0A0A0A]",
        scrolled
          ? "shadow-[0_4px_30px_-10px_rgba(212,175,55,0.35)] border-b border-[#D4AF37]/20"
          : "border-b border-white/5",
      ].join(" ")}
    >
      {/* hairline gold gradient top accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 outline-none"
          aria-label="Go to homepage"
        >
          <span className="relative flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
            <span className="absolute inset-0 rounded-full border border-[#D4AF37]/50 transition-all duration-500 group-hover:border-[#D4AF37] group-hover:rotate-90" />
            <span className="absolute inset-[3px] rounded-full border border-[#D4AF37]/20" />
            <Sparkles
              className="h-5 w-5 text-[#D4AF37] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
              strokeWidth={1.75}
            />
          </span>
          <span
            className="font-[\'Bai_Jamjuree\'] text-xl font-semibold tracking-wide text-[#F5F5F0] sm:text-2xl"
            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
          >
            AUTO<span className="text-[#D4AF37]">LUXE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
        >
          {NAV_LINKS.map((link) =>
            link.name === "Services" ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex items-center gap-1 py-2 text-[15px] font-medium tracking-wide text-[#F5F5F0]/90 transition-colors duration-300 hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180 text-[#D4AF37]" : ""
                    }`}
                  />
                </button>

                {/* underline */}
                <span
                  className={`absolute -bottom-[1px] left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${
                    servicesOpen ? "w-full" : "w-0"
                  }`}
                />

                {/* Dropdown */}
                <div
                  className={[
                    "absolute left-1/2 top-full z-50 mt-3 w-[340px] -translate-x-1/2 origin-top",
                    "rounded-xl border border-[#D4AF37]/25 bg-[#0E0E0E] shadow-2xl shadow-black/60",
                    "transition-all duration-300 ease-out",
                    servicesOpen
                      ? "visible translate-y-0 opacity-100 scale-100"
                      : "invisible -translate-y-2 opacity-0 scale-95 pointer-events-none",
                  ].join(" ")}
                  role="menu"
                >
                  <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-[#D4AF37]/25 bg-[#0E0E0E]" />
                  <ul className="relative max-h-[70vh] overflow-auto py-2">
                    {SERVICES.map((service, i) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          role="menuitem"
                          className="group/item flex flex-col gap-0.5 px-5 py-3 transition-colors duration-200 hover:bg-[#D4AF37]/[0.07] focus-visible:bg-[#D4AF37]/10 focus-visible:outline-none"
                          style={{
                            animationDelay: servicesOpen
                              ? `${i * 35}ms`
                              : "0ms",
                          }}
                        >
                          <span
                            className="text-[14.5px] font-medium text-[#F5F5F0] transition-colors duration-200 group-hover/item:text-[#D4AF37]"
                            style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
                          >
                            {service.name}
                          </span>
                          <span className="font-serif text-[12.5px] leading-snug text-[#F5F5F0]/50">
                            {service.desc}
                          </span>
                        </Link>
                        {i < SERVICES.length - 1 && (
                          <div className="mx-5 h-px bg-white/5" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="group relative py-2 text-[15px] font-medium tracking-wide text-[#F5F5F0]/90 transition-colors duration-300 hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
              >
                {link.name}
                <span className="absolute -bottom-[1px] left-0 h-[1.5px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </Link>
            ),
          )}
        </nav>

        {/* CTA (desktop) */}
        <Link
          to="/contact"
          className="hidden rounded-full border border-[#D4AF37] px-5 py-2 text-[14px] font-medium tracking-wide text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] lg:inline-block"
          style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
        >
          Book Now
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#D4AF37]/30 text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37]/10 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "overflow-hidden border-t border-[#D4AF37]/15 bg-[#0A0A0A] transition-all duration-400 ease-in-out lg:hidden",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav
          className="flex flex-col px-5 py-3"
          style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
        >
          {NAV_LINKS.map((link) =>
            link.name === "Services" ? (
              <div key={link.name} className="border-b border-white/5">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3.5 text-[15px] font-medium text-[#F5F5F0]/90"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 text-[#D4AF37] transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={[
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    mobileServicesOpen
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <ul className="pb-2 pl-2">
                    {SERVICES.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          className="block rounded-md py-2.5 pl-3 pr-2 text-[13.5px] text-[#F5F5F0]/70 transition-colors duration-200 hover:bg-[#D4AF37]/[0.08] hover:text-[#D4AF37]"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="border-b border-white/5 py-3.5 text-[15px] font-medium text-[#F5F5F0]/90 transition-colors duration-200 hover:text-[#D4AF37]"
              >
                {link.name}
              </Link>
            ),
          )}
          <Link
            to="/contact"
            className="my-4 rounded-full border border-[#D4AF37] py-2.5 text-center text-[14px] font-medium text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
