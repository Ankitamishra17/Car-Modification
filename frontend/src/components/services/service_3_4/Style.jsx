export default function Style() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

      .rr-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
      .rr-title   { font-family: 'DM Sans', sans-serif; }
      .rr-sub     { font-family: 'Jost', sans-serif; }

      .rr-tab {
        font-family: 'DM Sans', sans-serif;
        font-size: 13px; font-weight: 600;
        letter-spacing: 0.08em; text-transform: uppercase;
        padding: 10px 24px; border-radius: 999px;
        border: 1px solid #3D3D3D;
        color: #B8B8B8;
        background: transparent;
        cursor: pointer;
        transition: all 0.2s;
      }
      .rr-tab:hover { border-color: #8C8C8C; color: #FFFFFF; }
      .rr-tab.active { background: #8C8C8C; border-color: #8C8C8C; color: #0B0B0B; }

      .rr-pkg {
        background: #1A1A1A;
        border: 1px solid #3D3D3D;
        border-radius: 16px;
        overflow: hidden;
        transition: border-color 0.25s, transform 0.25s;
      }
      .rr-pkg:hover { border-color: #8C8C8C; transform: translateY(-4px); }
      .rr-pkg.highlight {
        border-color: #8C8C8C;
        background: #202020;
      }

      .rr-faq-btn {
        width: 100%; text-align: left;
        background: none; border: none; cursor: pointer;
        padding: 20px 0;
        display: flex; align-items: center; justify-content: space-between; gap: 16px;
        font-family: 'DM Sans', sans-serif;
        font-size: 15px; font-weight: 600;
        color: #FFFFFF;
        transition: color 0.2s;
      }
      .rr-faq-btn:hover { color: #8C8C8C; }

      .rr-faq-icon {
        width: 22px; height: 22px; flex-shrink: 0;
        border: 1px solid #3D3D3D; border-radius: 999px;
        display: flex; align-items: center; justify-content: center;
        font-size: 16px; color: #8C8C8C;
        transition: all 0.2s;
      }

      .rr-check { color: #8C8C8C; flex-shrink: 0; }

      .rr-cta-btn {
        font-family: 'DM Sans', sans-serif;
        font-size: 14px; font-weight: 600;
        letter-spacing: 0.05em; text-transform: uppercase;
        background: #8C8C8C; color: #0B0B0B;
        border: none; border-radius: 999px;
        padding: 14px 32px;
        display: inline-flex; align-items: center; gap: 8px;
        cursor: pointer;
        transition: background 0.2s;
        text-decoration: none;
      }
      .rr-cta-btn:hover { background: #FFFFFF; }

      .rr-cta-ghost {
        font-family: 'DM Sans', sans-serif;
        font-size: 14px; font-weight: 600;
        letter-spacing: 0.05em; text-transform: uppercase;
        background: transparent; color: #B8B8B8;
        border: 1px solid #3D3D3D; border-radius: 999px;
        padding: 14px 32px;
        display: inline-flex; align-items: center; gap: 8px;
        cursor: pointer;
        transition: all 0.2s;
        text-decoration: none;
      }
      .rr-cta-ghost:hover { border-color: #8C8C8C; color: #FFFFFF; }
    `}</style>
  );
}