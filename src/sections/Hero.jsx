import { Reveal, AnimatedCounter, SectionLabel, GoldButton, OutlineButton } from "../components/UI";
import { STATS, HERO_ICONS } from "../data";
import { scrollTo } from "../utils/hooks";

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: "var(--dark)", display: "flex", alignItems: "center",
    }}>
      <BackgroundLayers />

      {/* Main content */}
      <div style={{
        position: "relative", zIndex: 2, maxWidth: 1200,
        margin: "0 auto", padding: "130px 48px 100px", width: "100%",
      }}>
        <Reveal delay={0.05}>
          <SectionLabel text="ALUMINIUM FORMWORK SYSTEMS" />
        </Reveal>

        <Reveal delay={0.18}>
          <h1 style={{
            fontFamily: "var(--serif)", fontSize: "clamp(44px,7.5vw,100px)",
            color: "#fff", lineHeight: 1.04, margin: "0 0 20px", fontWeight: 900, letterSpacing: -2,
          }}>
            PRECISION<br />THAT BUILDS<br />
            <span style={{ color: "var(--gold)" }}>FASTER.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.32}>
          <p style={{ color: "var(--text-muted)", fontSize: "clamp(13px,1.5vw,16px)", maxWidth: 440, lineHeight: 1.85, margin: "0 0 40px" }}>
            At Fabedge Techform Pvt. Ltd., we deliver precision-engineered aluminium formwork
            systems that accelerate construction cycles while maintaining the highest standards
            of structural accuracy and finish quality.
          </p>
        </Reveal>

        <Reveal delay={0.44}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <GoldButton onClick={() => scrollTo("products")}>EXPLORE PRODUCTS</GoldButton>
            <OutlineButton onClick={() => scrollTo("contact")}>CONTACT US</OutlineButton>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.58}>
          <div style={{
            display: "flex", gap: 48, marginTop: 72, flexWrap: "wrap",
            borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 40,
          }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ color: "var(--gold)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, lineHeight: 1 }}>
                  <AnimatedCounter end={s.val} suffix={s.suf} />
                </div>
                <div style={{ color: "#555", fontSize: 10, letterSpacing: 2, marginTop: 6, fontFamily: "var(--condensed)" }}>
                  {s.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Bottom icon bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "rgba(17,17,17,0.95)", borderTop: "1px solid #1a1a1a",
        display: "flex", justifyContent: "center",
      }}>
        {HERO_ICONS.map((item, i) => (
          <div key={item.label} style={{
            flex: 1, maxWidth: 220, padding: "18px 16px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 7,
            borderRight: i < HERO_ICONS.length - 1 ? "1px solid #1e1e1e" : "none",
          }}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            <span style={{ color: "#555", fontSize: 9, letterSpacing: 2, fontFamily: "var(--condensed)" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── isolated background elements ─────────────────────────────────
function BackgroundLayers() {
  return (
    <>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #0a0b0c 55%, #1a1510 100%)",
      }} />
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
      {/* Diagonal right panel */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "44%", height: "100%",
        background: "linear-gradient(160deg, #1a1510 0%, #0d0b08 100%)",
        clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
      }} />
      {/* Gold slash */}
      <div style={{
        position: "absolute", top: 0, right: "44%",
        width: 2, height: "100%",
        background: "linear-gradient(to bottom, transparent, var(--gold), transparent)",
        transform: "rotate(-10deg) translateX(40px)",
        opacity: 0.5,
      }} />
      {/* Faint diagonal lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}>
        <line x1="10%" y1="0" x2="60%" y2="100%" stroke="var(--gold)" strokeWidth="1" />
        <line x1="30%" y1="0" x2="80%" y2="100%" stroke="var(--gold)" strokeWidth="0.5" />
      </svg>
    </>
  );
}
