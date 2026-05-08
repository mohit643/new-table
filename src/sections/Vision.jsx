import { Reveal, SectionLabel, SectionHeading, GoldDivider, Gold, DotGrid } from "../components/UI";
import { VISION_PILLARS } from "../data";

export default function Vision() {
  return (
    <section id="vision" className="section-pad" style={{
      background: "var(--dark)", padding: "100px 48px", position: "relative", overflow: "hidden",
    }}>
      <DotGrid style={{ position: "absolute", top: 40, left: 40 }} />
      <DotGrid style={{ position: "absolute", bottom: 40, right: 40 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="col-2" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>

          {/* Left text */}
          <Reveal direction="left">
            <SectionLabel text="WHAT WE STAND FOR" />
            <SectionHeading light size="clamp(38px,5vw,68px)">
              OUR<br /><Gold>VISION</Gold>
            </SectionHeading>
            <GoldDivider />
            <p style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 22, fontSize: 14 }}>
              To redefine modern construction through precision-engineered formwork solutions that
              enable faster execution, superior quality, and smarter building practices.
            </p>
            <p style={{ color: "#555", lineHeight: 1.9, fontSize: 14 }}>
              We envision a future where innovation, efficiency, and structural excellence become
              the foundation of every high-rise development.
            </p>
          </Reveal>

          {/* Pillar cards */}
          <div className="col-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {VISION_PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} direction="up">
                <PillarCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({ icon, num, title, desc }) {
  return (
    <div style={{
      background: "#111", border: "1px solid var(--dark-border)",
      padding: "30px 26px", position: "relative", overflow: "hidden",
      transition: "border-color 0.3s, transform 0.3s",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--dark-border)"; e.currentTarget.style.transform = "none"; }}>
      <div style={{ position: "absolute", top: 10, right: 14, color: "#1a1a1a", fontSize: 42, fontWeight: 900, lineHeight: 1 }}>
        {num}
      </div>
      <div style={{
        width: 52, height: 52, background: "#000",
        border: "1.5px solid var(--gold)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22, marginBottom: 18,
      }}>{icon}</div>
      <h3 style={{ color: "#fff", fontSize: 12, letterSpacing: 2, fontWeight: 700, margin: "0 0 8px", fontFamily: "var(--condensed)" }}>
        {title}
      </h3>
      <div style={{ width: 28, height: 1, background: "var(--gold)", margin: "0 0 12px" }} />
      <p style={{ color: "#666", fontSize: 13, lineHeight: 1.8, margin: 0 }}>{desc}</p>
    </div>
  );
}
