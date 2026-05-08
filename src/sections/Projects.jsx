import { Reveal, SectionLabel, SectionHeading, GoldDivider, Gold } from "../components/UI";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ background: "var(--dark)", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel text="OUR WORK" />
          <SectionHeading light>FEATURED <Gold>PROJECTS</Gold></SectionHeading>
          <GoldDivider />
          <p style={{ color: "var(--text-muted)", fontSize: 14, maxWidth: 480, lineHeight: 1.8, marginBottom: 52 }}>
            Where Architecture Meets Aspirations. We partner with India's leading developers
            to deliver precision formwork at scale.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12} direction="up">
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ name, location, tag, features }) {
  return (
    <div style={{
      background: "#111", border: "1px solid var(--dark-border)",
      overflow: "hidden", transition: "all 0.3s",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--dark-border)"; e.currentTarget.style.transform = "none"; }}>

      <ProjectThumb tag={tag} />

      <div style={{ padding: "22px 26px" }}>
        <h3 style={{ color: "var(--gold)", fontFamily: "var(--serif)", fontSize: 20, margin: "0 0 4px" }}>
          {name}
        </h3>
        <p style={{ color: "#444", fontSize: 10, letterSpacing: 3, margin: "0 0 18px", fontFamily: "var(--condensed)" }}>
          {location}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {features.map((f) => (
            <span key={f} style={{
              border: "1px solid #222", color: "#666",
              padding: "3px 9px", fontSize: 10, letterSpacing: 1, fontFamily: "var(--condensed)",
            }}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectThumb({ tag }) {
  return (
    <div style={{
      aspectRatio: "16/10", background: "linear-gradient(135deg, #1a1510, #2d2419)",
      position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />
      {/* Building silhouette SVG */}
      <svg width="120" height="100" viewBox="0 0 120 100" style={{ opacity: 0.4 }}>
        <rect x="10" y="30" width="20" height="70" fill="var(--gold)" opacity="0.3" />
        <rect x="35" y="10" width="25" height="90" fill="var(--gold)" opacity="0.5" />
        <rect x="65" y="20" width="20" height="80" fill="var(--gold)" opacity="0.4" />
        <rect x="90" y="40" width="20" height="60" fill="var(--gold)" opacity="0.3" />
        {[0,1,2,3].map(row => [0,1,2].map(col => (
          <rect key={`${row}-${col}`} x={36 + col * 7} y={14 + row * 12} width={4} height={7}
            fill="var(--gold)" opacity="0.6" />
        )))}
      </svg>
      <div style={{ position: "absolute", top: 14, left: 14, background: "var(--gold)", padding: "4px 10px" }}>
        <span style={{ color: "#000", fontSize: 8, letterSpacing: 2, fontWeight: 800, fontFamily: "var(--condensed)" }}>
          {tag.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
