import { FOOTER_COLS, CONTACT_LINKS } from "../../data";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050606",
        borderTop: "1px solid #111",
        padding: "64px 48px 36px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          className="col-4"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 60,
            marginBottom: 56,
          }}
        >
          {/* Brand col */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: "1.5px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--serif)",
                  fontWeight: 900,
                  color: "var(--gold)",
                  fontSize: 18,
                }}
              >
                FE
              </div>
              <div>
                <div
                  style={{
                    color: "#fff",
                    fontFamily: "var(--serif)",
                    fontSize: 15,
                    letterSpacing: 3,
                    fontWeight: 700,
                  }}
                >
                  FAB<span style={{ color: "var(--gold)" }}>E</span>DGE
                </div>
                <div style={{ color: "#444", fontSize: 8, letterSpacing: 3 }}>
                  TECHFORM PVT LTD
                </div>
              </div>
            </div>
            <p
              style={{
                color: "#444",
                fontSize: 13,
                lineHeight: 1.9,
                maxWidth: 280,
              }}
            >
              Precision-engineered aluminium formwork systems for India's
              leading construction projects.
            </p>
            <p
              style={{
                color: "var(--gold)",
                fontSize: 10,
                letterSpacing: 3,
                marginTop: 16,
                fontFamily: "var(--condensed)",
              }}
            >
              PRECISION. STRENGTH. EXCELLENCE.
            </p>
          </div>

          {/* Link cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  color: "var(--gold)",
                  fontSize: 10,
                  letterSpacing: 3,
                  margin: "0 0 20px",
                  fontFamily: "var(--condensed)",
                }}
              >
                {col.title}
              </h4>
              {col.links.map((l) => (
                <div key={l} style={{ marginBottom: 12 }}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      color: "#444",
                      fontSize: 13,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ccc";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#444";
                    }}
                  >
                    {l}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #111",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ color: "#2a2a2a", fontSize: 12, margin: 0 }}>
            © 2025 Fabedge Techform Pvt. Ltd. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {CONTACT_LINKS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                style={{
                  color: "#2a2a2a",
                  fontSize: 12,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#2a2a2a";
                }}
              >
                {c.icon} {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
