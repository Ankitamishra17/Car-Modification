import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BLOGS = [
  {
    id: 1,
    featured: true,
    category: "Protection",
    date: "12 Jun 2025",
    readTime: "6 min read",
    title: "Ceramic Coating vs PPF — Which Does Your Car Actually Need?",
    excerpt:
      "Both promise to protect your paintwork, but they solve very different problems. We break down the science, cost, and real-world performance so you can make the right call for your vehicle.",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=80&auto=format&fit=crop",
    href: "#blog/ceramic-vs-ppf",
  },
  {
    id: 2,
    featured: false,
    category: "Detailing",
    date: "28 May 2025",
    readTime: "4 min read",
    title: "The Truth About Swirl Marks — And How to Remove Them for Good",
    excerpt: "",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80&auto=format&fit=crop",
    href: "#blog/swirl-marks",
  },
  {
    id: 3,
    featured: false,
    category: "Performance",
    date: "14 May 2025",
    readTime: "5 min read",
    title: "ECU Remapping Explained — What Changes, What Doesn't",
    excerpt: "",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80&auto=format&fit=crop",
    href: "#blog/ecu-remapping",
  },
  {
    id: 4,
    featured: false,
    category: "Detailing",
    date: "2 May 2025",
    readTime: "3 min read",
    title: "Interior Detailing: The Products Pros Actually Use",
    excerpt: "",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "#blog/interior-products",
  },
  {
    id: 5,
    featured: false,
    category: "Restoration",
    date: "18 Apr 2025",
    readTime: "7 min read",
    title: "Classic Car Restoration: How We Brought a 1987 BMW Back to Life",
    excerpt: "",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80&auto=format&fit=crop",
    href: "#blog/bmw-restoration",
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay } },
});

export default function Blog() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  const featured = BLOGS.find((b) => b.featured);
  const rest = BLOGS.filter((b) => !b.featured);

  return (
    <section style={{ background: "#0B0B0B", position: "relative", overflow: "hidden", padding: "100px 0 110px" }}>

      {/* Ambient glows — silver */}
      <div style={{ position: "absolute", right: "10%", top: -60, width: 420, height: 420, borderRadius: "50%", background: "rgba(160,160,160,0.06)", filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "5%", bottom: -50, width: 300, height: 300, borderRadius: "50%", background: "rgba(160,160,160,0.04)", filter: "blur(80px)", pointerEvents: "none" }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .blog-inner { max-width: 1160px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }

        .blog-head {
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 20px; margin-bottom: 48px;
        }
        .blog-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
        .blog-eline { width: 32px; height: 1px; background: #8C8C8C; flex-shrink: 0; }
        .blog-etxt {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase; color: #8C8C8C;
        }
        .blog-title-ghost {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(18px, 2.5vw, 28px);
          color: rgba(240,240,240,0.06);
          line-height: 1; margin-bottom: 2px; letter-spacing: 0.04em;
        }
        .blog-h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          color: #F0F0F0; line-height: 1; letter-spacing: 0.01em;
        }
        .blog-h2 span { color: #C0C0C0; }
        .blog-sub {
          font-family: 'Jost', sans-serif;
          font-size: 14px; font-weight: 300; font-style: italic;
          color: rgba(240,240,240,0.4);
          margin-top: 8px; max-width: 380px;
        }
        .blog-viewall {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #8C8C8C;
          border: 1px solid rgba(192,192,192,0.25);
          border-radius: 3px; padding: 10px 20px;
          text-decoration: none;
          transition: background 0.25s, color 0.25s;
          white-space: nowrap; align-self: flex-end; flex-shrink: 0;
        }
        .blog-viewall:hover { background: #C0C0C0; color: #0B0B0B; border-color: #C0C0C0; }

        /* Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 20px;
        }
        @media (max-width: 860px) {
          .blog-grid { grid-template-columns: 1fr 1fr; }
          .blog-card.featured { grid-column: span 2; grid-row: auto; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-card.featured { grid-column: auto; }
        }

        /* Cards */
        .blog-card {
          background: #111;
          border: 1px solid rgba(192,192,192,0.09);
          border-radius: 8px; overflow: hidden;
          display: flex; flex-direction: column;
          position: relative;
          transition: border-color 0.3s, transform 0.3s;
          cursor: pointer;
        }
        .blog-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(to right, transparent, #8C8C8C, transparent);
          opacity: 0; transition: opacity 0.3s; z-index: 2;
        }
        .blog-card:hover { border-color: rgba(192,192,192,0.28); transform: translateY(-5px); }
        .blog-card:hover::before { opacity: 1; }
        .blog-card.featured { grid-row: span 2; }

        /* Image */
        .blog-img-wrap { position: relative; overflow: hidden; flex-shrink: 0; }
        .blog-card.featured .blog-img-wrap { height: 280px; }
        .blog-card:not(.featured) .blog-img-wrap { height: 160px; }
        .blog-img {
          width: 100%; height: 100%; object-fit: cover;
          opacity: 0.55; filter: grayscale(15%); display: block;
          transition: opacity 0.4s, transform 0.55s;
        }
        .blog-card:hover .blog-img { opacity: 0.7; transform: scale(1.04); }
        .blog-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 65%);
        }
        .blog-cat {
          position: absolute; top: 14px; left: 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #C0C0C0;
          background: rgba(11,11,11,0.78);
          border: 1px solid rgba(192,192,192,0.22);
          border-radius: 3px; padding: 3px 9px; z-index: 1;
        }

        /* Body */
        .blog-body { padding: 20px 22px 24px; flex: 1; display: flex; flex-direction: column; gap: 10px; }
        .blog-meta { display: flex; align-items: center; gap: 10px; }
        .blog-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; color: rgba(240,240,240,0.32); letter-spacing: 0.04em;
        }
        .blog-sep { width: 1px; height: 10px; background: rgba(240,240,240,0.12); }
        .blog-read {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; color: rgba(192,192,192,0.45);
        }
        .blog-card-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600; color: #F0F0F0;
          line-height: 1.35; transition: color 0.2s;
        }
        .blog-card.featured .blog-card-title { font-size: 18px; }
        .blog-card:not(.featured) .blog-card-title { font-size: 14.5px; }
        .blog-card:hover .blog-card-title { color: #C0C0C0; }
        .blog-excerpt {
          font-family: 'Jost', sans-serif;
          font-size: 13px; font-weight: 300;
          line-height: 1.78; color: rgba(240,240,240,0.42);
        }
        .blog-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(192,192,192,0.45); text-decoration: none;
          margin-top: auto; transition: color 0.2s, gap 0.2s;
        }
        .blog-card:hover .blog-link { color: #C0C0C0; gap: 10px; }

        .blog-divider { width: 100%; height: 1px; background: rgba(192,192,192,0.07); margin-top: 56px; }

        @media (max-width: 520px) {
          .blog-inner { padding: 0 16px; }
          .blog-card.featured .blog-img-wrap { height: 220px; }
        }
      `}</style>

      <div className="blog-inner">

        {/* Heading */}
        <div ref={headRef}>
          <motion.div className="blog-head" variants={fadeUp(0)} initial="hidden" animate={headInView ? "visible" : "hidden"}>
            <div>
              <div className="blog-eyebrow">
                <span className="blog-eline" />
                <span className="blog-etxt">From the Workshop</span>
              </div>
              <p className="blog-title-ghost">LATEST INSIGHTS</p>
              <h2 className="blog-h2">Latest <span>Insights</span></h2>
              <p className="blog-sub">Expert knowledge on paint, protection, and the art of the automobile.</p>
            </div>
            <a className="blog-viewall" href="#blog">
              View all articles <ArrowIcon />
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div ref={gridRef} className="blog-grid" variants={fadeUp(0.18)} initial="hidden" animate={gridInView ? "visible" : "hidden"}>

          {/* Featured */}
          {featured && (
            <a className="blog-card featured" href={featured.href} style={{ textDecoration: "none" }}>
              <div className="blog-img-wrap">
                <img className="blog-img" src={featured.img} alt={featured.title} loading="eager" />
                <div className="blog-img-overlay" />
                <span className="blog-cat">{featured.category}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-date">{featured.date}</span>
                  <span className="blog-sep" />
                  <span className="blog-read">{featured.readTime}</span>
                </div>
                <div className="blog-card-title">{featured.title}</div>
                {featured.excerpt && <div className="blog-excerpt">{featured.excerpt}</div>}
                <span className="blog-link">Read article <ArrowIcon /></span>
              </div>
            </a>
          )}

          {/* Smaller cards */}
          {rest.map((post, i) => (
            <a key={post.id} className="blog-card" href={post.href} style={{ textDecoration: "none" }}>
              <div className="blog-img-wrap">
                <img className="blog-img" src={post.img} alt={post.title} loading={i < 2 ? "eager" : "lazy"} />
                <div className="blog-img-overlay" />
                <span className="blog-cat">{post.category}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-sep" />
                  <span className="blog-read">{post.readTime}</span>
                </div>
                <div className="blog-card-title">{post.title}</div>
                <span className="blog-link">Read article <ArrowIcon /></span>
              </div>
            </a>
          ))}

        </motion.div>

        <div className="blog-divider" />

      </div>
    </section>
  );
}