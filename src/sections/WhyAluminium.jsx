import {
  Reveal,
  SectionLabel,
  SectionHeading,
  GoldDivider,
  Gold,
} from "../components/UI";
import { WHY_BENEFITS } from "../data";

export default function WhyAluminium() {
  return (
    <section
      id="why-aluminium"
      className="section-pad"
      style={{ background: "var(--cream)", padding: "100px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel text="THE SMART CHOICE" />
          <SectionHeading>
            WHY <Gold>ALUMINIUM</Gold>
            <br />
            FORMWORK?
          </SectionHeading>
          <GoldDivider />
          <p
            style={{
              color: "#666",
              fontSize: 14,
              maxWidth: 480,
              lineHeight: 1.8,
              marginBottom: 56,
            }}
          >
            Engineered for modern construction. Built for speed, precision and
            long-term value.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 24,
          }}
        >
          {WHY_BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} direction="up">
              <BenefitCard {...b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, sub, desc }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "32px 24px",
        borderBottom: "3px solid transparent",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        transition: "all 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderBottomColor = "var(--gold)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderBottomColor = "transparent";
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 18 }}>{icon}</div>
      <h3
        style={{
          color: "#1a1a1a",
          fontSize: 12,
          letterSpacing: 1,
          fontWeight: 800,
          margin: "0 0 6px",
          fontFamily: "var(--condensed)",
        }}
      >
        {title}
      </h3>
      {sub && (
        <p
          style={{
            color: "var(--gold)",
            fontWeight: 700,
            fontSize: 14,
            margin: "0 0 8px",
          }}
        >
          {sub}
        </p>
      )}
      <p style={{ color: "#777", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}
