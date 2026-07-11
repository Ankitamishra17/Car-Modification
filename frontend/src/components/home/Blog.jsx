import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BLOGS = [
  {
    id: 1,
    featured: true,
    category: "PPF",
    date: "Jun 24, 2026",
    readTime: "6 min read",
    title: "Self-Healing TPU Film vs Highway Gravel: 3 Years of Real-World Torture",
    excerpt:
      "We peeled back the paint protection film from a client's daily-driven supercar to see if the factory clear coat actually survived.",
    img: "https://i.pinimg.com/736x/3b/e8/e2/3be8e23d0ee0095530370977b2fc2412.jpg",
    href: "/blog/self-healing-tpu-film-vs-highway-gravel",
  },
  {
    id: 2,
    featured: false,
    category: "Tuning & Mapping",
    date: "Jun 21, 2026",
    readTime: "4 min read",
    title: "Stage 2 vs Stage 3 ECU Maps: When More Boost Stops Being Worth It",
    excerpt: "",
    img: "https://i.pinimg.com/736x/98/99/20/9899201ce4f67c05789e58b8ac804a28.jpg",
    href: "/blog/stage-2-vs-stage-3-ecu-maps",
  },
  {
    id: 3,
    featured: false,
    category: "Ceramic Coatings",
    date: "Jun 18 2026",
    readTime: "5 min read",
    title: "Why Your DIY Coating is Hazing — The Science of Flash Times",
    excerpt: "",
    img: "https://i.pinimg.com/1200x/90/33/2c/90332c80b6937d9ae955a2c6ff4eea38.jpg",
    href: "/blog/why-your-diy-coating-is-hazing",
  },
  {
    id: 4,
    featured: false,
    category: "Car Body Kits",
    date: "Jun 15, 2026",
    readTime: "3 min read",
    title: "The 3mm Panel Gap Nightmare: Profiling Raw Dry Carbon Aero",
    excerpt: "",
    img: "https://i.pinimg.com/1200x/12/f6/8a/12f68a6b839bfb2c4b25fa8b675c9af2.jpg",
    href: "/blog/wide-body-vs-subtle-aero",
  },
  {
    id: 5,
    featured: false,
    category: "Restoration",
    date: "Jun 12, 2026",
    readTime: "7 min read",
    title: "Bringing a Rust-Eaten '71 Datsun Back from the Dead: 40 Days, No Shortcuts",
    excerpt: "",
    img: "https://i.pinimg.com/1200x/5d/96/ab/5d96abb2855ffe249468e15ff56ef950.jpg",
    href: "/blog/dry-ice-blasting-undercarriage-grime",
  },
];

const ArrowIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay } },
});

const pad = (n) => String(n).padStart(2, "0");

export default function Blog() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const bodyRef = useRef(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: "-40px" });

  const featured = BLOGS.find((b) => b.featured);
  const rest = BLOGS.filter((b) => !b.featured);

  return (
    <section className="blog-section" style={{ background: "#0B0B0B", position: "relative", overflow: "hidden" }}>


      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .blog-section { padding: 100px 0 110px; }
        @media (max-width: 780px) { .blog-section { padding: 72px 0 80px; } }
        @media (max-width: 480px) { .blog-section { padding: 56px 0 64px; } }

        .blog-inner { max-width: 1230px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        @media (max-width: 520px) { .blog-inner { padding: 0 16px; } }
        @media (max-width: 380px) { .blog-inner { padding: 0 14px; } }

        /* ===== Masthead row: heading left, subtitle + CTA right ===== */
        .blog-masthead {
          display: grid; grid-template-columns: auto 1fr;
          column-gap: 48px; align-items: end;
          padding-bottom: 44px; margin-bottom: 48px;
          border-bottom: 1px solid rgba(192,192,192,0.12);
        }
        @media (max-width: 780px) {
          .blog-masthead { grid-template-columns: 1fr; row-gap: 20px; align-items: start; padding-bottom: 32px; margin-bottom: 36px; }
        }
        @media (max-width: 480px) {
          .blog-masthead { padding-bottom: 24px; margin-bottom: 28px; }
        }

        .blog-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
        .blog-eline { width: 32px; height: 1px; background: #8C8C8C; flex-shrink: 0; }
        .blog-etxt {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase; color: #8C8C8C;
        }
        .blog-h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(38px, 9vw, 78px);
          color: #F0F0F0; line-height: 0.92; margin: 0; letter-spacing: 0.01em;
        }
        .blog-h2 span { color: #C0C0C0; }

        .blog-headmeta { display: flex; flex-direction: column; align-items: flex-end; text-align: right; padding-bottom: 4px; }
        @media (max-width: 780px) { .blog-headmeta { align-items: flex-start; text-align: left; padding-bottom: 0; } }
        .blog-sub {
          font-family: 'Jost', sans-serif;
          font-size: 15px; font-weight: 300; font-style: italic;
          color: rgba(240,240,240,0.45); line-height: 1.6;
          max-width: 380px; margin: 0 0 16px;
        }
        @media (max-width: 480px) { .blog-sub { font-size: 13.5px; max-width: 100%; } }
        .blog-viewall {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #C0C0C0;
          border: 1px solid #8C8C8C;
          border-radius: 3px; padding: 11px 22px;
          text-decoration: none;
          transition: background 0.25s, color 0.25s;
          white-space: nowrap;
        }
        .blog-viewall:hover { background: #C0C0C0; color: #0B0B0B; }
        @media (max-width: 480px) {
          .blog-viewall { width: 100%; justify-content: center; padding: 12px 18px; }
        }

        /* ===== Featured: horizontal editorial card ===== */
        .blog-featured {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0; margin-bottom: 8px;
          border: 1px solid rgba(192,192,192,0.1);
          border-radius: 8px; overflow: hidden;
          text-decoration: none;
          background: #111;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .blog-featured:hover { border-color: rgba(192,192,192,0.3); box-shadow: 0 26px 50px -24px rgba(0,0,0,0.7); }
        @media (max-width: 780px) { .blog-featured { grid-template-columns: 1fr; border-radius: 6px; } }

        .blog-featured-imgwrap { position: relative; overflow: hidden; min-height: 340px; }
        @media (max-width: 780px) { .blog-featured-imgwrap { min-height: 220px; } }
        @media (max-width: 480px) { .blog-featured-imgwrap { min-height: 170px; } }
        .blog-featured-img {
          width: 100%; height: 100%; object-fit: cover; display: block; position: absolute; inset: 0;
          opacity: 0.6; filter: grayscale(15%);
          transition: opacity 0.4s, transform 0.7s;
        }
        .blog-featured:hover .blog-featured-img { opacity: 0.72; transform: scale(1.05); }
        .blog-featured-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(11,11,11,0.15), rgba(17,17,17,0.55));
        }
        @media (max-width: 780px) {
          .blog-featured-overlay { background: linear-gradient(to top, rgba(17,17,17,1), rgba(17,17,17,0) 60%); }
        }
        .blog-featured-tag {
          position: absolute; top: 20px; left: 20px; z-index: 1;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #C0C0C0;
          background: rgba(11,11,11,0.78);
          border: 1px solid rgba(192,192,192,0.25);
          border-radius: 3px; padding: 4px 10px;
        }
        @media (max-width: 480px) { .blog-featured-tag { top: 14px; left: 14px; } }

        .blog-featured-body {
          padding: 40px 44px; display: flex; flex-direction: column; justify-content: center; gap: 16px;
        }
        @media (max-width: 780px) { .blog-featured-body { padding: 30px 26px 34px; } }
        @media (max-width: 480px) { .blog-featured-body { padding: 22px 18px 26px; gap: 12px; } }

        .blog-featured-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(192,192,192,0.4);
        }
        .blog-featured-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(24px, 5.5vw, 36px);
          color: #F0F0F0; line-height: 1.1; letter-spacing: 0.005em;
        }
        .blog-featured-excerpt {
          font-family: 'Jost', sans-serif;
          font-size: 14px; font-weight: 300; line-height: 1.85;
          color: rgba(240,240,240,0.5); max-width: 460px;
        }
        @media (max-width: 480px) { .blog-featured-excerpt { font-size: 13px; line-height: 1.7; } }
        .blog-featured-meta { display: flex; align-items: center; gap: 10px; }
        .blog-date { font-family: 'DM Sans', sans-serif; font-size: 11px; color: rgba(240,240,240,0.32); letter-spacing: 0.04em; }
        .blog-sep { width: 1px; height: 10px; background: rgba(240,240,240,0.15); }
        .blog-read { font-family: 'DM Sans', sans-serif; font-size: 11px; color: rgba(192,192,192,0.5); }
        .blog-featured-link {
          display: inline-flex; align-items: center; gap: 7px; margin-top: 4px;
          font-family: 'DM Sans', sans-serif; font-size: 11.5px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #C0C0C0; transition: gap 0.2s;
        }
        .blog-featured:hover .blog-featured-link { gap: 11px; }

        /* ===== List: "Also in this edition" ===== */
        .blog-list-head {
          display: flex; align-items: center; gap: 14px;
          margin: 52px 0 4px;
        }
        @media (max-width: 480px) { .blog-list-head { margin: 36px 0 4px; } }
        .blog-list-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(240,240,240,0.32);
          white-space: nowrap;
        }
        .blog-list-rule { flex: 1; height: 1px; background: rgba(192,192,192,0.1); }

        .blog-list { display: flex; flex-direction: column; }
        .blog-row {
          display: grid; grid-template-columns: 40px 84px 1fr auto auto;
          align-items: center; gap: 22px;
          padding: 20px 6px;
          border-bottom: 1px solid rgba(192,192,192,0.08);
          text-decoration: none;
          border-left: 2px solid transparent;
          transition: border-color 0.25s, background 0.25s, padding-left 0.25s;
        }
        .blog-row:hover {
          border-left-color: #C0C0C0;
          background: rgba(192,192,192,0.03);
          padding-left: 14px;
        }
        .blog-row-footer { display: contents; }

        @media (max-width: 700px) {
          .blog-row {
            grid-template-columns: 32px 64px 1fr;
            row-gap: 10px; column-gap: 14px;
            padding: 16px 4px;
          }
          .blog-row:hover { padding-left: 10px; }
          .blog-row-footer {
            display: flex; align-items: center; justify-content: space-between;
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 420px) {
          .blog-row { grid-template-columns: 24px 52px 1fr; column-gap: 10px; }
        }

        .blog-row-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px; color: rgba(192,192,192,0.3); letter-spacing: 0.02em;
        }
        @media (max-width: 420px) { .blog-row-num { font-size: 16px; } }
        .blog-row-thumb { width: 84px; height: 60px; border-radius: 4px; overflow: hidden; flex-shrink: 0; }
        @media (max-width: 700px) { .blog-row-thumb { width: 64px; height: 46px; } }
        @media (max-width: 420px) { .blog-row-thumb { width: 52px; height: 38px; } }
        .blog-row-thumb img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          opacity: 0.55; filter: grayscale(20%); transition: opacity 0.25s;
        }
        .blog-row:hover .blog-row-thumb img { opacity: 0.75; }

        .blog-row-main { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
        .blog-row-cat {
          font-family: 'DM Sans', sans-serif;
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(192,192,192,0.5);
        }
        .blog-row-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600; font-size: 15px; color: #F0F0F0;
          line-height: 1.35; transition: color 0.2s;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        @media (max-width: 700px) { .blog-row-title { white-space: normal; font-size: 14px; } }
        .blog-row:hover .blog-row-title { color: #C0C0C0; }

        .blog-row-meta { display: flex; align-items: center; gap: 10px; white-space: nowrap; }
        @media (max-width: 420px) { .blog-row-meta { gap: 8px; } }
        @media (max-width: 380px) { .blog-read { display: none; } .blog-sep { display: none; } }

        .blog-row-arrow {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid rgba(192,192,192,0.22);
          display: flex; align-items: center; justify-content: center;
          color: #8C8C8C; flex-shrink: 0;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
        }
        @media (max-width: 420px) { .blog-row-arrow { width: 28px; height: 28px; } }
        .blog-row:hover .blog-row-arrow { background: #C0C0C0; border-color: #C0C0C0; color: #0B0B0B; }
      `}</style>

      <div className="blog-inner">

        {/* Masthead */}
        <div ref={headRef} className="blog-masthead">
          <div>
            <motion.div className="blog-eyebrow" variants={fadeUp(0)} initial="hidden" animate={headInView ? "visible" : "hidden"}>
              <span className="blog-eline" />
              <span className="blog-etxt">From the Workshop</span>
            </motion.div>
            <motion.h2 className="blog-h2" variants={fadeUp(0.08)} initial="hidden" animate={headInView ? "visible" : "hidden"}>
              Latest <span>Insights</span>
            </motion.h2>
          </div>

          <motion.div className="blog-headmeta" variants={fadeUp(0.18)} initial="hidden" animate={headInView ? "visible" : "hidden"}>
            <p className="blog-sub">Expert knowledge on paint, protection, and the art of the automobile.</p>
            <a className="blog-viewall" href="/blog">
              View all articles <ArrowIcon />
            </a>
          </motion.div>
        </div>

        <div ref={bodyRef}>
          {/* Featured — horizontal editorial card */}
          {featured && (
            <motion.a
              className="blog-featured"
              href={featured.href}
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={bodyInView ? "visible" : "hidden"}
            >
              <div className="blog-featured-imgwrap">
                <img className="blog-featured-img" src={featured.img} alt={featured.title} loading="eager" />
                <div className="blog-featured-overlay" />
                <span className="blog-featured-tag">{featured.category}</span>
              </div>
              <div className="blog-featured-body">
                <span className="blog-featured-label">Featured Article</span>
                <div className="blog-featured-title">{featured.title}</div>
                <div className="blog-featured-excerpt">{featured.excerpt}</div>
                <div className="blog-featured-meta">
                  <span className="blog-date">{featured.date}</span>
                  <span className="blog-sep" />
                  <span className="blog-read">{featured.readTime}</span>
                </div>
                <span className="blog-featured-link">Read the full article <ArrowIcon size={13} /></span>
              </div>
            </motion.a>
          )}

          {/* List — remaining posts */}
          <motion.div
            className="blog-list-head"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={bodyInView ? "visible" : "hidden"}
          >
            <span className="blog-list-label">Also in this Edition</span>
            <span className="blog-list-rule" />
          </motion.div>

          <div className="blog-list">
            {rest.map((post, i) => (
              <motion.a
                key={post.id}
                className="blog-row"
                href={post.href}
                variants={fadeUp(0.26 + i * 0.06)}
                initial="hidden"
                animate={bodyInView ? "visible" : "hidden"}
              >
                <span className="blog-row-num">{pad(i + 2)}</span>
                <span className="blog-row-thumb">
                  <img src={post.img} alt={post.title} loading={i < 2 ? "eager" : "lazy"} />
                </span>
                <span className="blog-row-main">
                  <span className="blog-row-cat">{post.category}</span>
                  <span className="blog-row-title">{post.title}</span>
                </span>
                <span className="blog-row-footer">
                  <span className="blog-row-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-sep" />
                    <span className="blog-read">{post.readTime}</span>
                  </span>
                  <span className="blog-row-arrow">
                    <ArrowIcon size={14} />
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}