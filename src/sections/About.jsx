import { Reveal, SectionLabel, SectionHeading, GoldDivider, Gold } from "../components/UI";

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--cream)", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="col-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Text */}
          <Reveal direction="left">
            <SectionLabel text="OUR STORY" />
            <SectionHeading>ABOUT <Gold>US</Gold></SectionHeading>
            <GoldDivider />
            <p style={para}>
              At <strong>Fabedge Techform Pvt. Ltd.</strong>, we believe modern construction demands
              more than speed — it demands precision, reliability, and engineered excellence.
            </p>
            <p style={para}>
              Specializing in advanced aluminium formwork systems, Fabedge delivers solutions
              designed to accelerate construction cycles while maintaining the highest standards
              of structural accuracy and finish quality.
            </p>
            <p style={para}>
              Our systems are built to optimize execution on-site, reduce material wastage,
              improve efficiency, and enable faster project delivery — ultimately saving both
              time and cost for developers and contractors.
            </p>
            <p style={{ ...para, marginBottom: 28 }}>
              Driven by innovation and a commitment to quality, we partner with builders across
              India to support high-rise and large-scale developments with dependable,
              performance-focused formwork solutions.
            </p>
            <div style={{ borderTop: "1px solid #ddd", paddingTop: 22 }}>
              <p style={{ color: "#1a1a1a", fontWeight: 700, fontSize: 15, margin: 0 }}>
                At Fabedge, every system is engineered with one goal:
              </p>
              <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: 15, margin: "4px 0 0" }}>
                to build stronger, smarter, and faster.
              </p>
            </div>
          </Reveal>

          {/* Visual */}
          <Reveal direction="right" delay={0.18}>
            <AboutVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const para = { color: "#555", lineHeight: 1.9, marginBottom: 18, fontSize: 14 };

function AboutVisual() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        background: "linear-gradient(135deg, #1a1510 0%, #2d2419 100%)",
        aspectRatio: "3/4", position: "relative", overflow: "hidden",
        clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)",
      }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(201,168,76,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        {/* Illustration */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <svg width="200" height="240" viewBox="0 0 200 240" style={{ opacity: 0.65 }}>
            <rect x="20" y="20" width="70" height="100" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            <rect x="110" y="20" width="70" height="100" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            <rect x="20" y="130" width="70" height="90" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            <rect x="110" y="130" width="70" height="90" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            <line x1="20" y1="20" x2="90" y2="120" stroke="var(--gold)" strokeWidth="0.5" opacity="0.4" />
            <line x1="90" y1="20" x2="20" y2="120" stroke="var(--gold)" strokeWidth="0.5" opacity="0.4" />
            <line x1="110" y1="20" x2="180" y2="120" stroke="var(--gold)" strokeWidth="0.5" opacity="0.4" />
            <circle cx="90" cy="70" r="4" fill="var(--gold)" />
            <circle cx="110" cy="70" r="4" fill="var(--gold)" />
            <line x1="90" y1="70" x2="110" y2="70" stroke="var(--gold)" strokeWidth="2" />
            <circle cx="90" cy="175" r="4" fill="var(--gold)" />
            <circle cx="110" cy="175" r="4" fill="var(--gold)" />
            <line x1="90" y1="175" x2="110" y2="175" stroke="var(--gold)" strokeWidth="2" />
          </svg>
          <p style={{ color: "var(--gold)", fontSize: 10, letterSpacing: 4, marginTop: 20, fontFamily: "var(--condensed)" }}>
            PRECISION ENGINEERED
          </p>
        </div>
        <div style={{ position: "absolute", top: 0, right: 0, width: 3, height: "60%", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
      </div>

      {/* Floating badge */}
      <div style={{
        position: "absolute", bottom: -20, left: -20,
        background: "var(--gold)", padding: "16px 24px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      }}>
        <div style={{ fontSize: 22, fontWeight: 900, color: "#000", fontFamily: "var(--condensed)" }}>150–200</div>
        <div style={{ fontSize: 10, letterSpacing: 2, color: "#333" }}>REPETITIONS</div>
      </div>
    </div>
  );
}
