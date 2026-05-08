import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data";
import { useScrollSpy, scrollTo } from "../../utils/hooks";
import { GoldButton } from "../UI";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // convert nav link text → section id
  const ids = NAV_LINKS.map((l) => l.toLowerCase().replace(/ /g, "-"));
  const active = useScrollSpy(ids);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (link) => {
    scrollTo(link.toLowerCase().replace(/ /g, "-"));
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 48px" : "22px 48px",
          background: scrolled ? "rgba(10,11,12,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <Logo onClick={() => scrollTo("home")} />

        {/* Desktop links */}
        <div
          className="desktop-only"
          style={{ display: "flex", gap: 28, alignItems: "center" }}
        >
          {NAV_LINKS.map((l) => {
            const id = l.toLowerCase().replace(/ /g, "-");
            const isActive = active === id;
            return (
              <button
                key={l}
                onClick={() => handleNav(l)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: isActive ? "var(--gold)" : "#bbb",
                  fontSize: 10,
                  letterSpacing: 2,
                  fontFamily: "var(--condensed)",
                  padding: "4px 0",
                  borderBottom: isActive
                    ? "1px solid var(--gold)"
                    : "1px solid transparent",
                  transition: "all 0.3s",
                }}
              >
                {l.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="desktop-only">
          <GoldButton onClick={() => scrollTo("contact")}>
            GET A QUOTE
          </GoldButton>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "1px solid var(--gold)",
            color: "var(--gold)",
            width: 38,
            height: 38,
            cursor: "pointer",
            fontSize: 16,
            display: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 65,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10,11,12,0.98)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            padding: "40px 30px",
            gap: 24,
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#ddd",
                fontSize: 18,
                letterSpacing: 3,
                fontFamily: "var(--condensed)",
                textAlign: "left",
                borderBottom: "1px solid #1e1e1e",
                paddingBottom: 18,
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
          <GoldButton
            onClick={() => {
              scrollTo("contact");
              setMenuOpen(false);
            }}
            full
          >
            GET A QUOTE
          </GoldButton>
        </div>
      )}
    </>
  );
}

function Logo({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          border: "1.5px solid var(--gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--serif)",
          fontWeight: 900,
          color: "var(--gold)",
          fontSize: 16,
        }}
      >
        FE
      </div>
      <div>
        <div
          style={{
            color: "#fff",
            fontFamily: "var(--serif)",
            fontSize: 14,
            letterSpacing: 3,
            fontWeight: 700,
          }}
        >
          FAB<span style={{ color: "var(--gold)" }}>E</span>DGE
        </div>
        <div style={{ color: "#666", fontSize: 8, letterSpacing: 3 }}>
          TECHFORM PVT LTD
        </div>
      </div>
    </div>
  );
}
