import {
  Reveal,
  SectionLabel,
  SectionHeading,
  GoldDivider,
  Gold,
} from "./components/UI";
import { MFG_STEPS, MFG_QUALITIES } from "./data";

export default function Manufacturing() {
  return (
    <section
      id="manufacturing"
      className="section-pad"
      style={{ background: "var(--dark)", padding: "100px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          className="col-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
            marginBottom: 60,
          }}
        >
          <Reveal direction="left">
            <SectionLabel text="HOW WE BUILD" />
            <SectionHeading light size="clamp(28px,4vw,52px)">
              MANUFACTURING &<br />
              <Gold>TECHNOLOGY</Gold>
            </SectionHeading>
            <GoldDivider />
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.85,
                fontSize: 14,
              }}
            >
              Our state-of-the-art manufacturing facility combines cutting-edge
              machinery, automation and stringent quality control to deliver
              high-precision aluminium formwork systems with consistency and
              reliability.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                paddingTop: 50,
              }}
            >
              {MFG_QUALITIES.map((q) => (
                <QualityRow key={q} label={q} />
              ))}
            </div>
          </Reveal>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 2,
          }}
        >
          {MFG_STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1} direction="up">
              <StepCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityRow({ label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "11px 18px",
        border: "1px solid var(--dark-border)",
      }}
    >
      <div
        style={{
          width: 7,
          height: 7,
          background: "var(--gold)",
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          color: "#bbb",
          fontSize: 11,
          letterSpacing: 1,
          fontFamily: "var(--condensed)",
        }}
      >
        {label.toUpperCase()}
      </span>
    </div>
  );
}

function StepCard({ num, title, desc }) {
  return (
    <div
      style={{
        background: "#111",
        padding: "40px 30px",
        borderTop: "3px solid transparent",
        transition: "all 0.3s",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderTopColor = "var(--gold)";
        e.currentTarget.style.background = "#141414";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderTopColor = "transparent";
        e.currentTarget.style.background = "#111";
      }}
    >
      {/* Ghost number */}
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 18,
          color: "#1c1c1c",
          fontSize: 64,
          fontWeight: 900,
          lineHeight: 1,
          fontFamily: "var(--condensed)",
        }}
      >
        {num}
      </div>
      <div
        style={{
          color: "var(--gold)",
          fontSize: 30,
          fontWeight: 900,
          marginBottom: 18,
          fontFamily: "var(--condensed)",
        }}
      >
        {num}
      </div>
      <h3
        style={{
          color: "#fff",
          fontSize: 12,
          letterSpacing: 2,
          fontWeight: 700,
          margin: "0 0 10px",
          fontFamily: "var(--condensed)",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          width: 22,
          height: 1,
          background: "var(--gold)",
          marginBottom: 14,
        }}
      />
      <p style={{ color: "#666", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}
