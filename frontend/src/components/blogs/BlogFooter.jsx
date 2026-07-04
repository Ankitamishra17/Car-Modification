import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

/* ── Custom Social Icons ── */
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
    <footer className="relative bg-[#080808] text-white pt-20 pb-12 px-6 sm:px-12 overflow-hidden font-['Jost',sans-serif]">
      {/* Dynamic Font Loader to avoid text flickering */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@500;600;700&family=Jost:wght@300;400;500;600&display=swap');
      `}} />

      <div className="max-w-7xl mx-auto">
        
        {/* ── HIGH-END INDUSTRIAL NEWSLETTER HERO CARD ── */}
        <div className="relative rounded-2xl border border-neutral-800 bg-[#121212] overflow-hidden p-8 sm:p-12 lg:p-16 mb-20 shadow-2xl">
          {/* Immersive Image Layer with Dark Radial Gradients */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Studio Workshop Ambient" 
              className="w-full h-full object-cover grayscale opacity-20 brightness-[0.4] scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Typography Section */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-neutral-500 block" />
                <span className="font-['DM_Sans'] text-[10px] text-nowrap sm:text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
                  Weekly Intelligence
                </span>
              </div>
              <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl tracking-wide leading-none text-neutral-100">
                ONE EMAIL A WEEK. <br />
                <span className="text-neutral-500">NO FLUFF, JUST CORE CRAFT.</span>
              </h2>
              <p className="font-light text-neutral-400 text-sm max-w-md leading-relaxed">
                Raw data logs, clear coat failure teardowns, and engineering dispatch briefs straight from our bays.
              </p>
            </div>

            {/* Form Input Container Section */}
            <div className="lg:col-span-5 w-full">
              {submitted ? (
                <div className="font-['DM_Sans'] text-sm font-medium border border-neutral-700 bg-neutral-900/80 backdrop-blur-md text-white rounded-xl p-5 text-center shadow-lg">
                  ⚡ Connection established — First transmission lands Sunday.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3 bg-neutral-950/60 p-2 rounded-xl border border-neutral-800 focus-within:border-neutral-600 backdrop-blur-md transition-colors duration-300">
                    <input
                      type="email"
                      required
                      placeholder="Enter premium partner email"
                      className="flex-1 bg-transparent border-none outline-none font-light text-sm text-white px-4 py-3 placeholder-neutral-600 w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button 
                      type="submit" 
                      className="font-['DM_Sans'] bg-white text-black hover:bg-neutral-200 font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
                    >
                      Subscribe <ArrowRight size={14} />
                    </button>
                  </div>
                  <p className="text-[11px] text-neutral-600 font-light pl-2">
                    Zero spam. Unsubscribe anytime in one single click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

       

      </div>
    </footer>
  );
}