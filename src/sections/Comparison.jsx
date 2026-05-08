import { Reveal, SectionLabel, SectionHeading, GoldDivider, Gold } from "../components/UI";
import { COMPARISON_ROWS } from "../data";

export default function Comparison() {
  return (
    <section className="section-pad" style={{ background: "var(--cream)", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel text="SMARTER TECHNOLOGY" />
          <SectionHeading>
            ALUMINIUM FORMWORK<br />
            <Gold>VS</Gold> CONVENTIONAL FORMWORK
          </SectionHeading>
          <GoldDivider />
          <p style={{ color: "#666", fontSize: 14, marginBottom: 48 }}>Smarter technology. Superior results.</p>
        </Reveal>

        {/* Column headers */}
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr 1fr", gap: 0, marginBottom: 4 }}>
            <div style={{ background: "#1a1a1a", padding: "14px 22px", color: "var(--gold)", fontSize: 12, fontWeight: 700, letterSpacing: 2, fontFamily: "var(--condensed)" }}>
              ALUMINIUM FORMWORK
            </div>
            <div style={{ background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#000", fontSize: 10, fontWeight: 900 }}>VS</span>
            </div>
            <div style={{ background: "#ccc", padding: "14px 22px", color: "#555", fontSize: 11, letterSpacing: 2, fontFamily: "var(--condensed)" }}>
              CONVENTIONAL
            </div>
            <div style={{ padding: "14px 22px", color: "#888", fontSize: 10, letterSpacing: 2, textAlign: "center", fontFamily: "var(--condensed)" }}>
              CATEGORY
            </div>
          </div>
        </Reveal>

        {/* Rows */}
        {COMPARISON_ROWS.map((r, i) => (
          <Reveal key={r.category} delay={i * 0.06}>
            <CompRow {...r} even={i % 2 === 0} />
          </Reveal>
        ))}

        {/* Footer banner */}
        <Reveal delay={0.3}>
          <div style={{ marginTop: 20, background: "#1a1a1a", padding: "20px 28px", display: "flex", gap: 36, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ color: "var(--gold)", fontSize: 12, fontWeight: 700, letterSpacing: 2, fontFamily: "var(--condensed)" }}>
              ✓ THE CLEAR CHOICE
            </div>
            {["FASTER EXECUTION", "SUPERIOR QUALITY", "LONG-TERM SAVINGS", "SUSTAINABLE SOLUTION"].map(t => (
              <div key={t} style={{ color: "#555", fontSize: 9, letterSpacing: 2, fontFamily: "var(--condensed)" }}>{t}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CompRow({ icon, category, alu, conv, even }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr 1fr", gap: 0, marginBottom: 2 }}>
      <div style={{
        background: "#fff", padding: "16px 22px",
        borderLeft: "3px solid var(--gold)",
        color: "#1a1a1a", fontWeight: 700, fontSize: 13,
      }}>{alu}</div>
      <div style={{ background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#333", fontSize: 14 }}>{icon}</span>
      </div>
      <div style={{
        background: even ? "#eee" : "#e8e4da",
        padding: "16px 22px", color: "#666", fontSize: 12,
      }}>{conv}</div>
      <div style={{
        background: "#f5f0e8", padding: "16px 22px",
        color: "#999", fontSize: 9, letterSpacing: 2,
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", fontFamily: "var(--condensed)",
      }}>{category}</div>
    </div>
  );
}
