import {
  Reveal,
  SectionLabel,
  SectionHeading,
  GoldDivider,
  Gold,
} from "./components/UI";
import { TECH_SPECS } from "./data";

export default function TechSpecs() {
  return (
    <section
      id="tech-specs"
      className="section-pad"
      style={{ background: "var(--cream)", padding: "100px 48px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel text="ENGINEERED FOR PRECISION" />
          <SectionHeading>
            TECHNICAL <Gold>SPECIFICATIONS</Gold>
          </SectionHeading>
          <GoldDivider />
          <p style={{ color: "#666", fontSize: 14, marginBottom: 52 }}>
            Engineered for precision. Built for performance.
          </p>
        </Reveal>

        {TECH_SPECS.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.04} direction="left">
            <SpecRow {...s} even={i % 2 === 0} />
          </Reveal>
        ))}

        <Reveal delay={0.3}>
          <div
            style={{
              marginTop: 40,
              padding: "22px 28px",
              background: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <div style={{ color: "var(--gold)", fontSize: 26 }}>🛡</div>
            <p
              style={{
                color: "#888",
                fontSize: 13,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              High-quality materials and advanced engineering ensure durability,
              accuracy and long-term value across all Fabedge formwork systems.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SpecRow({ num, label, value, highlight, even }) {
  return (
    <div
      className="spec-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "48px 56px 1fr auto",
        alignItems: "center",
        gap: 18,
        padding: "18px 22px",
        background: even ? "#fff" : "#f0ebe0",
        borderLeft: highlight
          ? "4px solid var(--gold)"
          : "4px solid transparent",
        marginBottom: 2,
        transition: "border-left-color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderLeftColor = "var(--gold)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderLeftColor = highlight
          ? "var(--gold)"
          : "transparent";
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--gold)",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "var(--condensed)",
        }}
      >
        {num}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 1, height: 36, background: "#ddd" }} />
      </div>
      <span style={{ color: "#333", fontSize: 13 }}>{label}</span>
      <span
        style={{
          color: highlight ? "var(--gold)" : "#1a1a1a",
          fontWeight: 700,
          fontSize: 13,
          textAlign: "right",
          whiteSpace: "nowrap",
          fontFamily: "var(--condensed)",
        }}
      >
        {value}
      </span>
    </div>
  );
}
