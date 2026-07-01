import { useState } from "react";

const CATEGORIES = [
  {
    name: "Restoration",
    count: "32 articles",
    desc: "Frame-up rebuilds, rust repair, and the patience it takes.",
    image:
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=900",
    num: "01",
    size: "feat",
  },
  {
    name: "Tuning",
    count: "21 articles",
    image:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=700",
    num: "02",
  },
  {
    name: "PPF & Coatings",
    count: "27 articles",
    image:
      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=700",
    num: "03",
  },
  {
    name: "Body Kits",
    count: "18 articles",
    image:
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=700",
    num: "04",
  },
  {
    name: "Tips & Tricks",
    count: "14 articles",
    image:
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=700",
    num: "05",
  },
];

function ArrowIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function TagDot() {
  return (
    <span
      style={{
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "#8C8C8C",
        display: "inline-block",
        flexShrink: 0,
      }}
    />
  );
}

export default function CategoryShowcase() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        background: "#0B0B0B",
        padding: "48px 24px",
        fontFamily: "'Jost', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .cs-tile {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #2A2A2A;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.3s, transform 0.35s cubic-bezier(0.23,1,0.32,1);
        }
        .cs-tile:hover { border-color: #5A5A5A; transform: translateY(-3px); }
        .cs-tile img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
          z-index: 0;
          transition: transform 0.6s cubic-bezier(0.23,1,0.32,1);
          filter: grayscale(30%) brightness(0.85);
        }
        .cs-tile:hover img { transform: scale(1.06); }
        .cs-tile:hover .cs-arrow-btn {
          background: #8C8C8C;
          color: #0B0B0B;
          border-color: #8C8C8C;
          transform: rotate(45deg);
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Heading */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <span
            style={{
              width: 32,
              height: 1,
              background: "#8C8C8C",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10.5,
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8C8C8C",
            }}
          >
            Browse by craft
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 42,
            color: "#fff",
            letterSpacing: "0.02em",
            margin: "0 0 36px",
            lineHeight: 1,
          }}
        >
          FOUR CORNERS OF THE SHOP FLOOR.
        </h2>

        {/* Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
        >
          {/* Feature tile */}
          <a
            href="#"
            className="cs-tile"
            style={{ minHeight: 444 }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={CATEGORIES[0].image} alt={CATEGORIES[0].name} />
            {/* Overlays */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background:
                  "linear-gradient(to top, rgba(11,11,11,0.97) 0%, rgba(11,11,11,0.6) 40%, rgba(11,11,11,0.1) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 70,
                zIndex: 2,
                background:
                  "linear-gradient(to bottom, rgba(11,11,11,0.55), transparent)",
              }}
            />
            {/* Ghost number */}
            <span
              style={{
                position: "absolute",
                top: 18,
                right: 20,
                zIndex: 4,
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 80,
                color: "rgba(255,255,255,0.05)",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              01
            </span>
            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 3,
                padding: "22px 22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#8C8C8C",
                }}
              >
                <TagDot />
                32 articles
              </div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: "#fff",
                  margin: 0,
                  lineHeight: 1.05,
                  fontSize: 36,
                }}
              >
                {CATEGORIES[0].name}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "#9A9A9A",
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: 240,
                }}
              >
                {CATEGORIES[0].desc}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    color: "#6A6A6A",
                    letterSpacing: "0.05em",
                  }}
                >
                  Explore →
                </span>
                <div
                  className="cs-arrow-btn"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid #3D3D3D",
                    background: "rgba(11,11,11,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8C8C8C",
                    flexShrink: 0,
                    transition: "all 0.25s",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <ArrowIcon size={15} />
                </div>
              </div>
            </div>
          </a>

          {/* Right 2×2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              alignContent: "start",
            }}
          >
            {CATEGORIES.slice(1).map((cat, i) => (
              <a
                href="#"
                key={cat.name}
                className="cs-tile"
                style={{ minHeight: 190 }}
                onMouseEnter={() => setHovered(i + 1)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={cat.image} alt={cat.name} />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background:
                      "linear-gradient(to top, rgba(11,11,11,0.97) 0%, rgba(11,11,11,0.6) 40%, rgba(11,11,11,0.1) 100%)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 12,
                    zIndex: 4,
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 52,
                    color: "rgba(255,255,255,0.05)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {cat.num}
                </span>
                <div
                  style={{
                    position: "relative",
                    zIndex: 3,
                    padding: "16px 16px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#8C8C8C",
                    }}
                  >
                    <TagDot />
                    {cat.count}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      color: "#fff",
                      margin: 0,
                      lineHeight: 1.05,
                      fontSize: 26,
                    }}
                  >
                    {cat.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      marginTop: 4,
                    }}
                  >
                    <div
                      className="cs-arrow-btn"
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1px solid #3D3D3D",
                        background: "rgba(11,11,11,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8C8C8C",
                        flexShrink: 0,
                        transition: "all 0.25s",
                      }}
                    >
                      <ArrowIcon size={13} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
