import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

/* ── Custom social SVG icons (stroke uses currentColor so they pick up hover color) ── */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.4" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="5.5" width="20" height="13" rx="4" />
    <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M18.244 2H21.5L14.51 10.01L22.75 22H16.32L11.29 14.92L5.55 22H2.29L9.77 13.42L1.85 2H8.45L13 8.53L18.244 2ZM17.1 20.13H18.9L7.6 3.77H5.66L17.1 20.13Z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M9 19c.6-2 1.5-5.7 1.9-7.5M12 7.8c2.3 0 3.8 1.6 3.8 3.7 0 2.6-1.3 4.7-3.4 4.7-1 0-1.8-.6-2.1-1.3" strokeLinecap="round" />
  </svg>
);

/**
 * BlogFooter — AutoLuxe
 * Continues below BlogGrid.
 *
 * Palette (fixed):
 *   Primary BG      #0B0B0B
 *   Secondary BG    #1A1A1A
 *   Section BG      #2A2A2A
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver — buttons / hover)
 *
 * Type system:
 *   Main heading    Bebas Neue
 *   Title/labels     DM Sans
 *   Sub/body text    Jost
 *
 * Structure:
 *  1. Newsletter CTA band (bordered card, silver glow)
 *  2. Footer — brand + nav columns + socials + bottom bar
 */

const FOOTER_LINKS = {
  Journal: ["PPF & Coatings", "Restoration", "Tuning", "Body Kits", "Tips & Tricks"],
  Studio: ["About", "Our Work", "Careers", "Contact"],
  Resources: ["Booking", "Pricing", "FAQ", "Warranty"],
};

export default function BlogFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0B] px-4 pb-10 pt-4 sm:px-8 lg:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .fl-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .fl-title   { font-family: 'DM Sans', sans-serif; }
        .fl-sub     { font-family: 'Jost', sans-serif; }

        .fl-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          color: #FFFFFF;
          padding: 14px 0;
        }
        .fl-input::placeholder { color: #6E6E6E; }

        .fl-search {
          display: flex; align-items: center;
          background: #1A1A1A;
          border: 1px solid #3D3D3D;
          border-radius: 999px;
          padding: 0 6px 0 22px;
          gap: 10px;
          transition: border-color 0.2s;
        }
        .fl-search:focus-within { border-color: #8C8C8C; }

        .fl-submit {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase;
          background: #8C8C8C;
          color: #0B0B0B;
          border: none;
          border-radius: 999px;
          padding: 11px 22px;
          cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .fl-submit:hover { background: #FFFFFF; }

        .fl-social {
          width: 38px; height: 38px;
          border-radius: 999px;
          border: 1px solid #3D3D3D;
          display: flex; align-items: center; justify-content: center;
          color: #B8B8B8;
          transition: all 0.2s;
        }
        .fl-social:hover {
          border-color: #8C8C8C;
          color: #FFFFFF;
          background: #1A1A1A;
        }

        .fl-link {
          font-family: 'Jost', sans-serif;
          font-size: 13.5px;
          color: #B8B8B8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .fl-link:hover { color: #FFFFFF; }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* ── Newsletter band ── */}
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-[#3D3D3D] bg-[#1A1A1A] px-6 py-10 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#8C8C8C]/10 blur-[100px]" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <div className="fl-title mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-[#8C8C8C]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
                  Stay sharp
                </span>
              </div>
              <h2 className="fl-heading text-[2.1rem] leading-tight text-white sm:text-[2.6rem]">
                ONE EMAIL A WEEK. NO FLUFF, JUST WHAT WE LEARNED.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md flex-shrink-0">
              {submitted ? (
                <div className="fl-title flex items-center gap-2 rounded-full border border-[#8C8C8C]/50 bg-[#2A2A2A] px-6 py-4 text-[14px] text-white">
                  You're in — first issue lands Sunday.
                </div>
              ) : (
                <div className="fl-search">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="fl-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="fl-submit">
                    Subscribe <ArrowRight size={13} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}