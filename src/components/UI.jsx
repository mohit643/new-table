import { useInView, useCounter } from "../utils/hooks";

// ─── Reveal ───────────────────────────────────────────────────────
const TRANSFORMS = {
  up:    "translateY(44px)",
  down:  "translateY(-44px)",
  left:  "translateX(-44px)",
  right: "translateX(44px)",
  scale: "scale(0.88)",
};

export function Reveal({ children, delay = 0, direction = "up", className = "", style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : TRANSFORMS[direction],
        transition: `opacity 0.72s ease ${delay}s, transform 0.72s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── AnimatedCounter ──────────────────────────────────────────────
export function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [ref, count] = useCounter(end, duration);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── SectionLabel ─────────────────────────────────────────────────
export function SectionLabel({ text, center = false }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      marginBottom: 18,
      justifyContent: center ? "center" : "flex-start",
    }}>
      <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
      <span style={{ color: "var(--gold)", fontSize: 10, letterSpacing: 4, fontFamily: "var(--condensed)" }}>
        {text}
      </span>
      {center && <div style={{ width: 28, height: 1, background: "var(--gold)" }} />}
    </div>
  );
}

// ─── GoldDivider ──────────────────────────────────────────────────
export function GoldDivider({ width = 48, margin = "16px 0 28px" }) {
  return <div style={{ width, height: 2, background: "var(--gold)", margin }} />;
}

// ─── SectionHeading ───────────────────────────────────────────────
export function SectionHeading({ children, light = false, size = "clamp(30px,5vw,58px)" }) {
  return (
    <h2 style={{
      fontFamily: "var(--serif)",
      fontSize: size,
      color: light ? "#fff" : "#1a1a1a",
      margin: 0, fontWeight: 900, lineHeight: 1.1,
    }}>
      {children}
    </h2>
  );
}

// ─── Gold text span ───────────────────────────────────────────────
export function Gold({ children }) {
  return <span style={{ color: "var(--gold)" }}>{children}</span>;
}

// ─── GoldButton ───────────────────────────────────────────────────
export function GoldButton({ children, onClick, full = false }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "var(--gold)", color: "#000", border: "none",
        padding: "14px 36px", fontSize: 11, letterSpacing: 3,
        fontFamily: "var(--condensed)", cursor: "pointer", fontWeight: 800,
        transition: "all 0.3s", width: full ? "100%" : "auto",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "var(--gold-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "none"; }}
    >
      {children}
    </button>
  );
}

// ─── OutlineButton ────────────────────────────────────────────────
export function OutlineButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent", color: "#fff",
        border: "1px solid rgba(255,255,255,0.2)",
        padding: "14px 36px", fontSize: 11, letterSpacing: 3,
        fontFamily: "var(--condensed)", cursor: "pointer",
        transition: "all 0.3s",
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; }}
    >
      {children}
    </button>
  );
}

// ─── CornerAccents ────────────────────────────────────────────────
export function CornerAccents({ size = 20, color = "var(--gold)" }) {
  const s = { position: "absolute", width: size, height: size };
  const b = `2px solid ${color}`;
  return (
    <>
      <div style={{ ...s, top: 12, left: 12, borderTop: b, borderLeft: b }} />
      <div style={{ ...s, bottom: 12, right: 12, borderBottom: b, borderRight: b }} />
    </>
  );
}

// ─── DotGrid ──────────────────────────────────────────────────────
export function DotGrid({ style = {} }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(5, 8px)", gap: 12, opacity: 0.3, ...style,
    }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} style={{ width: 3, height: 3, background: "var(--gold)", borderRadius: "50%" }} />
      ))}
    </div>
  );
}
