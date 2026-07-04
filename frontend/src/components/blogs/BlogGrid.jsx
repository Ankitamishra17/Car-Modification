import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Clock, ArrowUpRight } from "lucide-react";

// Combined Featured items for an exact equal-size horizontal layout
const FEATURED_SLIDES = [
  {
    category: "PPF",
    title: "Self-Healing TPU Film vs Highway Gravel: 3 Years of Real-World Torture",
    excerpt: "We peeled back the paint protection film from a client's daily-driven supercar to see if the factory clear coat actually survived.",
    image: "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "12 min read",
    date: "Jun 24, 2026",
  },
  {
    category: "Tuning & Mapping",
    title: "Stage 2 vs Stage 3 ECU Maps: When More Boost Stops Being Worth It",
    excerpt: "Exploring ignition timing adjustments, fuel trim thresholds, and where standard engine internals reach their absolute limit.",
    image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min read",
    date: "Jun 21, 2026",
  },
  {
    category: "Ceramic Coatings",
    title: "Why Your DIY Coating is Hazing — The Science of Flash Times",
    excerpt: "Five critical environment and temperature mistakes that turn a premium 9H ceramic coating into a cloudy, streaky mess.",
    image: "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "5 min read",
    date: "Jun 18, 2026",
  },
  {
    category: "Car Body Kits",
    title: "The 3mm Panel Gap Nightmare: Profiling Raw Dry Carbon Aero",
    excerpt: "Why high-end carbon fiber kits never fit perfectly straight out of the box, and the custom profiling secrets to making them flush.",
    image: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "9 min read",
    date: "Jun 15, 2026",
  },
  {
    category: "Restoration",
    title: "Bringing a Rust-Eaten '71 Datsun Back from the Dead: 40 Days, No Shortcuts",
    excerpt: "From deep frame rot and media blasting to metal fabrication: a complete teardown of what we saved and what we had to rebuild.",
    image: "https://i.pinimg.com/736x/a9/21/58/a921580c2d9d86f860cf2415e4d203db.jpg",
    readTime: "8 min read",
    date: "Jun 12, 2026",
  },
  {
    category: "Exhaust",
    title: "Straight Pipes vs Valvetronic Systems: Designing the Perfect Tone",
    excerpt: "Analyzing backpressure dynamics, drone cancellation frequencies, and how to get an aggressive exhaust note without losing low-end torque.",
    image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "7 min read",
    date: "Jun 09, 2026",
  },
  {
    category: "Paints",
    title: "Multi-Stage OEM Color Matching: The Art of Spraying Liquid Metallics",
    excerpt: "How digital spectrophotometers and custom binder ratios help us match faded original factory paint with flawless precision.",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "11 min read",
    date: "Jun 06, 2026",
  },
  {
    category: "Refurbish",
    title: "Alloy Wheel Structural Repair: Straightening, Machining, and Balancing",
    excerpt: "The exact engineering process required to fix severe curb rashes, hairline barrel cracks, and out-of-round performance wheels.",
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "10 min read",
    date: "Jun 03, 2026",
  },
  {
    category: "Upholstery",
    title: "Restoring Vintage Leather: Stitching Alcantara & Custom Seat Rebuilding",
    excerpt: "Replacing collapsed bolster foam and applying high-density French seams to a completely worn out 90s sports car interior.",
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min read",
    date: "May 29, 2026",
  },
  {
    category: "Accessories",
    title: "Thermal Management: Wrapping Exhaust Manifolds vs Ceramic Shields",
    excerpt: "A deep dive into keeping engine bay temperatures critically low to prevent intake air temp sensor heat-soak loops.",
    image: "https://i.pinimg.com/736x/e4/d4/dc/e4d4dc26636bfe9861c6fbbb22ab4089.jpg",
    readTime: "8 min read",
    date: "May 25, 2026",
  }
];

const POSTS = [
  {
    category: "Car Body Kits",
    title: "Wide-Body vs Subtle Aero: Choosing a Kit That Fits Your Track Intent",
    excerpt: "A practical, data-backed framework for matching aerodynamic downforce to how you actually drive on the street and circuit.",
    image: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "7 min read",
    date: "Jun 15, 2026",
  },
  {
    category: "Ceramic Coatings",
    title: "The Ultimate Guide to Graphene vs Quartz Coatings: Which Wins?",
    excerpt: "Breaking down water spot resistance, slickness factors, and real-world durability indexes over a 24-month testing period.",
    image: "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "4 min read",
    date: "Jun 12, 2026",
  },
  {
    category: "Restoration",
    title: "Dry Ice Blasting: How We Safely Remove Decades of Undercarriage Grime",
    excerpt: "Why traditional high-pressure washing risks electrical damage, and how kinetic freeze tech restores metal components to factory finish.",
    image: "https://images.pexels.com/photos/3849160/pexels-photo-3849160.jpeg?auto=compress&cs=tinysrgb&w=1200",
    readTime: "9 min read",
    date: "Jun 9, 2026",
  },
  {
    category: "PPF",
    title: "Matte Paint Protection Film: Transforming Gloss Finishes Safely",
    excerpt: "How to achieve a seamless satin look while adding a heavy-duty layer of chemical and rock chip protection to factory clear coats.",
    image: "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min read",
    date: "Jun 06, 2026",
  },
  {
    category: "Tuning & Mapping",
    title: "Understanding Octane Knock: Why Bad Fuel Kills Aggressive Tunes",
    excerpt: "How modern ECUs pull ignition timing to prevent low-speed pre-ignition (LSPI) and how to log data safely using OBD tools.",
    image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "8 min read",
    date: "Jun 03, 2026",
  },
  {
    category: "Exhaust",
    title: "Titanium vs Stainless Steel: Weighing the Cost of Exhaust Upgrades",
    excerpt: "Analyzing acoustic notes, structural heat dissipation, and the exact power-to-weight advantages of exotic exhaust alloys.",
    image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "5 min read",
    date: "May 30, 2026",
  },
  {
    category: "Paints",
    title: "The Physics of Orange Peel: How to Achieve a True Mirror Finish",
    excerpt: "Why factory paint jobs have textures and the specialized wet sanding processes required to safely flatten clear coats.",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "10 min read",
    date: "May 26, 2026",
  },
  {
    category: "Refurbish",
    title: "Diamond Cut Wheels: How Many Times Can You Re-Machine Them?",
    excerpt: "How computer-controlled CNC lathes profile alloy rims and the structural safety margins you need to calculate beforehand.",
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "7 min read",
    date: "May 22, 2026",
  },
  {
    category: "Upholstery",
    title: "Alcantara Maintenance 101: Preventing Sweat and Oil Matting",
    excerpt: "A simple detailing routine using specialized low-pH cleaners to keep your performance steering wheel and buckets feeling brand new.",
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "5 min read",
    date: "May 18, 2026",
  },
];

export default function BlogGrid() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0B0B0B] text-white px-8 sm:px-10 lg:px-12 py-24 select-none">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&family=Jost:wght@300;400;500&display=swap');
        
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-label { font-family: 'DM Sans', sans-serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        /* Hide default scrollbars */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="mx-auto max-w-7xl px-12">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#222] pb-6 mb-12 gap-4">
          <div>
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-[#8C8C8C] block mb-2">
              Featured Spotlights
            </span>
            <h2 className="font-display text-6xl sm:text-7xl tracking-wide uppercase">
              Curated Stories<span className="text-[#8C8C8C]">.</span>
            </h2>
          </div>
          
          {/* Slider Controllers */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll("left")} 
              className="h-10 w-10 border border-[#2A2A2A] hover:border-[#8C8C8C] flex items-center justify-center transition-colors bg-[#111]/30"
            >
              <ArrowLeft size={16} className="text-[#8C8C8C]" />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="h-10 w-10 border border-[#2A2A2A] hover:border-[#8C8C8C] flex items-center justify-center transition-colors bg-[#111]/30"
            >
              <ArrowRight size={16} className="text-[#8C8C8C]" />
            </button>
          </div>
        </div>

        {/* ── PART 1: SLIDE ROW (EQUAL SIZE SLIDERS) ── */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-16"
        >
          {FEATURED_SLIDES.map((slide, i) => (
            <div 
              key={i} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#161616] mb-5 border border-[#222]">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="space-y-3">
                <span className="font-label text-[10px] font-semibold uppercase tracking-widest text-[#8C8C8C] block">
                  // {slide.category}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide leading-tight group-hover:text-[#B8B8B8] transition-colors">
                  {slide.title}
                </h3>
                <p className="font-body text-[#8C8C8C] text-[13.5px] font-light leading-relaxed line-clamp-2">
                  {slide.excerpt}
                </p>
                <div className="font-body text-xs text-[#555] pt-1 flex items-center gap-2">
                  <span>{slide.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {slide.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── PART 2: CORE LOWER GRID (PERFECT SYMMETRIC MATRIX) ── */}
        <div className="border-t border-[#222] pt-16 mt-4">
          <div className="mb-10">
            <span className="font-label text-[10px] uppercase tracking-[0.25em] text-[#8C8C8C] block mb-1">
              Deep Dives
            </span>
            <h3 className="font-display text-5xl  sm:text-3xl md:text-5xl lg:text-7xl  uppercase tracking-wide">
              Technical Logs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
              <a href="#" key={i} className="group block space-y-4 pb-4">
                <div className="aspect-[4/3] overflow-hidden bg-[#161616] border border-[#222]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-label text-[10px] tracking-widest text-[#8C8C8C] uppercase font-semibold">
                      {post.category}
                    </span>
                    <ArrowUpRight size={14} className="text-[#444] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h4 className="font-display text-xl uppercase tracking-wide leading-snug group-hover:text-[#B8B8B8] transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="font-body text-[#8C8C8C] text-[13px] font-light leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="font-body text-[11px] text-[#555] pt-1">
                    {post.readTime}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── FOOTER BUTTON ── */}
        <div className="mt-16 flex justify-center">
          <button className="font-label border border-[#2A2A2A] text-white bg-transparent px-8 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-[#0B0B0B] hover:border-white transition-all duration-300">
            View All Publications
          </button>
        </div>

      </div>
    </section>
  );
}