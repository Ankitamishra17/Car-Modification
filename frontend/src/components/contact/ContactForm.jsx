import { useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

/**
 * ContactHero — Dettagali Auto
 *
 * Palette (fixed, do not deviate):
 *   Primary BG      #0B0B0B
 *   Secondary BG    #1A1A1A
 *   Section BG      #2A2A2A
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver — buttons / hover)
 *
 * Type system:
 *   Main heading        Bebas Neue   (tall, condensed display)
 *   Title / labels       DM Sans     (clean grotesk)
 *   Sub headings / body  Jost        (geometric humanist)
 */

const CONTACT_INFO = [
  { icon: Phone, label: "Call the shop", value: "080779 76595" },
  { icon: Mail, label: "Email us", value: "dettagliauto251@gmail.com" },
  { icon: MapPin, label: "Visit us", value: "C, 32, Block C, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024" },
];

export default function ContactHero() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0B0B0B] px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .ch-heading {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.01em;
        }
        .ch-title {
          font-family: 'DM Sans', sans-serif;
        }
        .ch-sub {
          font-family: 'Jost', sans-serif;
        }

        @keyframes chFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ch-a1 { animation: chFadeUp 0.7s ease both; }
        .ch-a2 { animation: chFadeUp 0.7s 0.12s ease both; }
        .ch-a3 { animation: chFadeUp 0.7s 0.24s ease both; }
        .ch-a4 { animation: chFadeUp 0.7s 0.36s ease both; }
        .ch-a5 { animation: chFadeUp 0.7s 0.48s ease both; }

        .ch-field {
          width: 100%;
          background: #1A1A1A;
          border: 1px solid #3D3D3D;
          border-radius: 10px;
          padding: 14px 16px;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          color: #FFFFFF;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .ch-field::placeholder { color: #6E6E6E; }
        .ch-field:focus {
          border-color: #8C8C8C;
          background: #202020;
        }
        textarea.ch-field { resize: none; min-height: 110px; }

        .ch-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B8B8B8;
        }

        .ch-submit {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: #8C8C8C;
          color: #0B0B0B;
          border: none;
         
          padding: 14px 0;
          width: 100%;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.2s, transform 0.2s;
        }
        .ch-submit:hover { background: #FFFFFF; transform: translateY(-1px); }

        .ch-info-row {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid #3D3D3D;
        }
        .ch-info-row:last-child { border-bottom: none; }

        .ch-icon-circle {
          width: 38px; height: 38px;
          border-radius: 999px;
          border: 1px solid #3D3D3D;
          background: #1A1A1A;
          display: flex; align-items: center; justify-content: center;
          color: #B8B8B8;
          flex-shrink: 0;
          transition: border-color 0.2s, color 0.2s;
        }
        .ch-info-row:hover .ch-icon-circle {
          border-color: #8C8C8C;
          color: #FFFFFF;
        }

        .ch-grid-texture {
          background-image:
            linear-gradient(rgba(140,140,140,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140,140,140,1) 1px, transparent 1px);
          background-size: 56px 56px;
        }
      `}</style>

      {/* Ambient texture */}
      <div className="pointer-events-none absolute inset-0 ch-grid-texture opacity-[0.03]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#8C8C8C]/[0.06] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Left: heading + info ── */}
        <div className="flex flex-col justify-center">
          <div className="ch-a1 mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#8C8C8C]" />
            <span className="ch-title text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
              Get in touch
            </span>
          </div>

          <h1 className="ch-a2 ch-heading text-[3rem] leading-[0.95] text-white sm:text-[4.2rem] lg:text-[5rem]">
            LET'S TALK<br />
            <span className="text-[#8C8C8C]">ABOUT YOUR CAR.</span>
          </h1>

          <p className="ch-a3 ch-sub mt-6 max-w-md text-[15px] font-light leading-relaxed text-[#B8B8B8]">
            Booking a detail, asking about a build, or just curious what we'd
            recommend — drop us a line and someone from the shop floor will
            get back to you within a day.
          </p>

          {/* Contact info rows */}
          <div className="ch-a4 mt-10 max-w-md">
            {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
              <div className="ch-info-row" key={label}>
                <div className="ch-icon-circle">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="ch-title text-[10.5px] font-medium uppercase tracking-[0.1em] text-[#B8B8B8]/70">
                    {label}
                  </div>
                  <div className="ch-sub text-[14.5px] text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: contact form card ── */}
        <div className="ch-a5 flex items-center">
          <div className="w-full rounded-2xl border border-[#3D3D3D] bg-[#1A1A1A] p-7 sm:p-9">
            <h2 className="ch-sub mb-1 text-[1.4rem] font-medium text-white">
              Send a message
            </h2>
            <p className="ch-sub mb-7 text-[13px] font-light text-[#B8B8B8]">
              Fill in the details below — we'll reply by email.
            </p>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="ch-label">Name</label>
                <input
                  className="ch-field"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={update("name")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="ch-label">Email</label>
                <input
                  type="email"
                  className="ch-field"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={update("email")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="ch-label">Message</label>
                <textarea
                  className="ch-field"
                  placeholder="Tell us about your car or what you need…"
                  value={form.message}
                  onChange={update("message")}
                />
              </div>

              <button type="submit" className="ch-submit mt-2">
                Send message <ArrowUpRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}