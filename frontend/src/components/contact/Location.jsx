import { Clock, Navigation, Phone } from "lucide-react";

/**
 * ContactLocation — Dettagali Auto
 * Second section for the contact page: full-width background image
 * (workshop / garage photo) with dark overlay so it's instantly clear
 * this is the "find us" / location part of the Contact page.
 *
 * Same fixed palette + fonts as ContactHero:
 *   BG #0B0B0B / #1A1A1A / #2A2A2A | Border #3D3D3D
 *   Text #FFFFFF / #B8B8B8 | Accent #8C8C8C
 *   Heading: Bebas Neue | Title: DM Sans | Sub/body: Jost
 */

const BG_IMAGE =
  "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1920";

const HOURS = [
  { day: "Mon — Fri", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactLocation() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B0B0B] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .cl-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .cl-title   { font-family: 'DM Sans', sans-serif; }
        .cl-sub     { font-family: 'Jost', sans-serif; }

        .cl-wrap {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid #3D3D3D;
          min-height: 480px;
          display: flex;
          align-items: flex-end;
        }
        .cl-wrap img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(35%) contrast(1.05);
        }
        .cl-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(11,11,11,0.95) 5%, rgba(11,11,11,0.55) 45%, rgba(11,11,11,0.25) 100%),
            linear-gradient(to right, rgba(11,11,11,0.5) 0%, transparent 55%);
        }

        .cl-pin {
          position: absolute;
          top: 36px; left: 36px;
          display: flex; align-items: center; gap: 8px;
          background: rgba(11,11,11,0.55);
          border: 1px solid #3D3D3D;
          border-radius: 999px;
          padding: 9px 16px;
          backdrop-filter: blur(6px);
        }

        .cl-card {
          background: #1A1A1A;
          border: 1px solid #3D3D3D;
          border-radius: 16px;
          padding: 24px;
        }

        .cl-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #2A2A2A;
        }
        .cl-row:last-child { border-bottom: none; }

        .cl-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase;
          color: #0B0B0B;
          background: #8C8C8C;
          border: none;
         
          padding: 13px 26px;
          display: inline-flex; align-items: center; gap: 8px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .cl-cta:hover { background: #FFFFFF; transform: translateY(-1px); }

        /* ===== Responsive tuning ===== */
        @media (max-width: 1024px) {
          .cl-wrap { min-height: 420px; }
        }

        @media (max-width: 640px) {
          .cl-wrap { min-height: 0; border-radius: 16px; }
          .cl-pin {
            top: 16px; left: 16px;
            padding: 7px 12px;
            gap: 6px;
          }
          .cl-pin span { font-size: 10px !important; letter-spacing: 0.1em !important; }
          .cl-card { padding: 18px; border-radius: 14px; }
          .cl-row { padding: 8px 0; }
          .cl-cta { width: 100%; justify-content: center; padding: 13px 20px; }
        }

        @media (max-width: 400px) {
          .cl-wrap { border-radius: 14px; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="cl-wrap">
          <img src={BG_IMAGE} alt="Dettagali Auto garage exterior" />
          <div className="cl-overlay" />

          {/* Location pin badge */}
          <div className="cl-pin">
            <Navigation size={13} color="#8C8C8C" />
            <span className="cl-title text-[11px] font-semibold uppercase tracking-[0.15em] text-[#B8B8B8]">
              Find the shop
            </span>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 flex w-full flex-col gap-6 p-5 sm:gap-8 sm:p-8 md:p-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-lg pt-16 sm:pt-14 lg:pt-0">
              <h2 className="cl-heading text-[2rem] leading-[0.95] text-white sm:text-[2.8rem] lg:text-[3.4rem]">
                COME SEE THE
                <br />
                SHOP FLOOR.
              </h2>
              <p className="cl-sub mt-3 max-w-md text-[13.5px] font-light leading-relaxed text-[#B8B8B8] sm:mt-4 sm:text-[14.5px]">
                C, 32, Block C, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi
                110024
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=C+32+Block+C+Lajpat+Nagar+II+New+Delhi+Delhi+110024"
                target="_blank"
                rel="noopener noreferrer"
                className="cl-cta mt-5 sm:mt-6 inline-flex items-center gap-2"
              >
                <Navigation size={14} />
                Get Directions
              </a>
            </div>

            {/* Hours card */}
            {/* <div className="cl-card w-full max-w-full flex-shrink-0 sm:max-w-xs">
              <div className="mb-3 flex items-center gap-2">
                <Clock size={14} color="#8C8C8C" />
                <span className="cl-title text-[11px] font-semibold uppercase tracking-[0.15em] text-[#B8B8B8]">
                  Shop hours
                </span>
              </div>
              {HOURS.map(({ day, time }) => (
                <div className="cl-row" key={day}>
                  <span className="cl-sub text-[13px] text-[#B8B8B8] sm:text-[13.5px]">
                    {day}
                  </span>
                  <span className="cl-sub text-[13px] text-white sm:text-[13.5px]">
                    {time}
                  </span>
                </div>
              ))}
              <div className="mt-4 flex items-center gap-2 border-t border-[#2A2A2A] pt-4">
                <Phone size={13} color="#8C8C8C" />
                <span className="cl-sub text-[13px] text-[#B8B8B8]">
                  +91 98765 43210
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
