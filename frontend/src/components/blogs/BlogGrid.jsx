import { useState } from "react";
import { ArrowUpRight, Clock, Flame } from "lucide-react";

/**
 * BlogGrid — AutoLuxe
 * Continues directly below BlogHero.
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
 *  1. Featured post — large left card + 2 stacked side cards
 *  2. Standard grid — 3-column card grid with category tag, read time
 *  3. "Load more" ghost button
 */

const FEATURED = {
  category: "Restoration",
  title: "Bringing a rust-eaten '71 Datsun back from the dead — 40 days, no shortcuts.",
  excerpt:
    "From frame rot to fresh paint: the full teardown, the parts we couldn't save, and the one mistake that cost us a week.",
  image:
    "https://images.pexels.com/photos/3849160/pexels-photo-3849160.jpeg?auto=compress&cs=tinysrgb&w=1200",
  readTime: "12 min read",
  date: "Jun 24, 2026",
  author: "Marco Reyes",
};

const SIDE_FEATURED = [
  {
    category: "Tuning",
    title: "Stage 2 vs Stage 3: when more boost stops being worth it",
    image:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min read",
    date: "Jun 21, 2026",
  },
  {
    category: "PPF & Coatings",
    title: "Ceramic vs PPF: what we actually recommend to clients",
    image:
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "5 min read",
    date: "Jun 18, 2026",
  },
];

const POSTS = [
  {
    category: "Body Kits",
    title: "Wide-body or subtle? Choosing a kit that fits your car's intent",
    excerpt: "A practical framework for matching aero to how you actually drive.",
    image:
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "7 min read",
    date: "Jun 15, 2026",
    hot: true,
  },
  {
    category: "Tips & Tricks",
    title: "Why your ceramic coating is hazing — and how to fix it",
    excerpt: "Five causes we see every week, ranked from most to least common.",
    image:
      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "4 min read",
    date: "Jun 12, 2026",
  },
  {
    category: "Restoration",
    title: "Sourcing NOS parts in 2026: forums are dead, here's what works",
    excerpt: "Our actual supplier list, with the dead ends removed.",
    image:
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "9 min read",
    date: "Jun 9, 2026",
  },
  {
    category: "Tuning",
    title: "Dyno day: what the numbers don't tell you about a build",
    excerpt: "Peak horsepower is the least interesting line on the sheet.",
    image:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min read",
    date: "Jun 6, 2026",
  },
  {
    category: "PPF & Coatings",
    title: "Self-healing film, tested: three years of rock chips later",
    excerpt: "We tracked one customer's hood film since 2023. Here's what survived.",
    image:
      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "8 min read",
    date: "Jun 3, 2026",
    hot: true,
  },
  {
    category: "Body Kits",
    title: "Fitment week: the small gaps nobody warns you about",
    excerpt: "Panel alignment, clearance, and the patience it actually takes.",
    image:
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "5 min read",
    date: "May 30, 2026",
  },
];

function Tag({ children }) {
  return (
    <span className="bg-title inline-block rounded-full border border-[#3D3D3D] bg-[#1A1A1A] px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#8C8C8C]">
      {children}
    </span>
  );
}

function Meta({ date, readTime }) {
  return (
    <div className="bg-sub flex items-center gap-2 text-[11.5px] text-[#B8B8B8]/70">
      <span>{date}</span>
      <span className="h-1 w-1 rounded-full bg-[#B8B8B8]/40" />
      <span className="flex items-center gap-1">
        <Clock size={11} /> {readTime}
      </span>
    </div>
  );
}

export default function BlogGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative bg-[#0B0B0B] px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .bg-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
        .bg-title   { font-family: 'DM Sans', sans-serif; }
        .bg-sub     { font-family: 'Jost', sans-serif; }

        .bg-card {
          background: #1A1A1A;
          border: 1px solid #3D3D3D;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.25s, background 0.25s;
        }
        .bg-card:hover {
          border-color: #8C8C8C;
          background: #202020;
          transform: translateY(-3px);
        }
        .bg-img-wrap { overflow: hidden; position: relative; }
        .bg-img-wrap img {
          transition: transform 0.5s ease;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .bg-card:hover .bg-img-wrap img { transform: scale(1.06); }

        .bg-arrow {
          width: 30px; height: 30px;
          border-radius: 999px;
          border: 1px solid #3D3D3D;
          display: flex; align-items: center; justify-content: center;
          color: #8C8C8C;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .bg-card:hover .bg-arrow {
          background: #8C8C8C;
          color: #0B0B0B;
          transform: rotate(45deg);
        }

        .bg-loadmore {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #FFFFFF;
          border: 1px solid #3D3D3D;
          border-radius: 999px;
          padding: 13px 36px;
          background: transparent;
          cursor: pointer;
          transition: all 0.25s;
        }
        .bg-loadmore:hover {
          border-color: #8C8C8C;
          background: #1A1A1A;
          color: #8C8C8C;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="bg-title mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8C8C8C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
                Latest
              </span>
            </div>
            <h2 className="bg-heading text-[2.2rem] text-white sm:text-[2.8rem]">
              FRESH OFF THE FLOOR.
            </h2>
          </div>
        </div>

        {/* Featured row */}
        <div className="mb-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Large featured card */}
          <a
            href="#"
            className="bg-card group relative col-span-1 flex flex-col lg:col-span-2"
            onMouseEnter={() => setHoveredCard("featured")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="bg-img-wrap h-[260px] sm:h-[340px]">
              <img src={FEATURED.image} alt={FEATURED.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
              <Tag>{FEATURED.category}</Tag>
              <h3 className="bg-sub text-[1.35rem] font-medium leading-snug text-white sm:text-[1.6rem]">
                {FEATURED.title}
              </h3>
              <p className="bg-sub text-[13.5px] font-light leading-relaxed text-[#B8B8B8]">
                {FEATURED.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <Meta date={FEATURED.date} readTime={FEATURED.readTime} />
                <div className="bg-arrow">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          </a>

          {/* Side stacked cards */}
          <div className="flex flex-col gap-5">
            {SIDE_FEATURED.map((post, i) => (
              <a href="#" key={i} className="bg-card group flex flex-1 gap-4 p-4 sm:p-5">
                <div className="bg-img-wrap h-[88px] w-[88px] flex-shrink-0 rounded-lg sm:h-[100px] sm:w-[100px]">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="flex flex-1 flex-col justify-between py-0.5">
                  <div>
                    <span className="bg-title text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8C8C8C]">
                      {post.category}
                    </span>
                    <h4 className="bg-sub mt-1.5 text-[13.5px] font-medium leading-snug text-white">
                      {post.title}
                    </h4>
                  </div>
                  <Meta date={post.date} readTime={post.readTime} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Standard grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <a href="#" key={i} className="bg-card group flex flex-col">
              <div className="bg-img-wrap h-[180px]">
                <img src={post.image} alt={post.title} />
                {post.hot && (
                  <div className="bg-title absolute left-3 top-3 flex items-center gap-1 rounded-full bg-[#0B0B0B]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8C8C8C] backdrop-blur-sm">
                    <Flame size={10} /> Trending
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <Tag>{post.category}</Tag>
                <h3 className="bg-sub text-[15.5px] font-medium leading-snug text-white">
                  {post.title}
                </h3>
                <p className="bg-sub text-[12.5px] font-light leading-relaxed text-[#B8B8B8]/80">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <Meta date={post.date} readTime={post.readTime} />
                  <div className="bg-arrow">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-12 flex justify-center">
          <button className="bg-loadmore">Load more articles</button>
        </div>
      </div>
    </section>
  );
}