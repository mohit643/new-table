import {
  Reveal,
  SectionLabel,
  SectionHeading,
  GoldDivider,
  Gold,
} from "./components/UI";
import { SERVICES, SERVICE_VALUE_PROPS } from "./data";

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ background: "var(--cream)", padding: "100px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel text="WHAT WE DO" />
          <SectionHeading>
            OUR <Gold>SERVICES</Gold>
          </SectionHeading>
          <GoldDivider />
          <p
            style={{
              color: "#666",
              fontSize: 14,
              maxWidth: 500,
              lineHeight: 1.8,
              marginBottom: 52,
            }}
          >
            End-to-end shuttering solutions that enhance efficiency, reduce
            costs and ensure superior execution on-site.
          </p>
        </Reveal>

        {/* Service rows */}
        <div style={{ display: "grid", gap: 14, marginBottom: 56 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.07} direction="left">
              <ServiceRow {...s} />
            </Reveal>
          ))}
        </div>

        {/* Value bar */}
        <Reveal delay={0.25}>
          <ValueBar />
        </Reveal>
      </div>
    </section>
  );
}

function ServiceRow({ num, icon, title, desc }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "70px 60px 1fr",
        alignItems: "center",
        gap: 22,
        background: "#fff",
        padding: "26px 30px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        borderRight: "3px solid transparent",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderRightColor = "var(--gold)";
        e.currentTarget.style.transform = "translateX(5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderRightColor = "transparent";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div
        style={{
          background: "#1a1a1a",
          width: 52,
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--gold)",
          fontWeight: 900,
          fontSize: 14,
          fontFamily: "var(--condensed)",
        }}
      >
        {num}
      </div>
      <div style={{ fontSize: 26, textAlign: "center" }}>{icon}</div>
      <div>
        <h3
          style={{
            color: "#1a1a1a",
            fontSize: 12,
            letterSpacing: 1,
            fontWeight: 800,
            margin: "0 0 7px",
            fontFamily: "var(--condensed)",
          }}
        >
          {title}
        </h3>
        <p style={{ color: "#777", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

function ValueBar() {
  return (
    <div style={{ background: "#1a1a1a", padding: "36px 40px" }}>
      <p
        style={{
          color: "var(--gold)",
          fontSize: 10,
          letterSpacing: 4,
          textAlign: "center",
          marginBottom: 28,
          fontFamily: "var(--condensed)",
        }}
      >
        ⟪ ADDING VALUE AT EVERY STEP ⟫
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 28,
        }}
      >
        {SERVICE_VALUE_PROPS.map((v) => (
          <div key={v.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 26, marginBottom: 10 }}>{v.icon}</div>
            <div
              style={{
                color: "var(--gold)",
                fontSize: 10,
                letterSpacing: 2,
                fontWeight: 700,
                marginBottom: 7,
                fontFamily: "var(--condensed)",
              }}
            >
              {v.label}
            </div>
            <div style={{ color: "#666", fontSize: 12, lineHeight: 1.6 }}>
              {v.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
