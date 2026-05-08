import { useState, useEffect } from "react";

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const PHRASES = ["PRECISION.", "STRENGTH.", "EXCELLENCE.", "FABEDGE."];

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 4 + 1;
        if (next >= 100) { clearInterval(iv); setTimeout(onDone, 600); return 100; }
        return next;
      });
    }, 40);
    const ph = setInterval(() => setPhase((p) => (p + 1) % 4), 700);
    return () => { clearInterval(iv); clearInterval(ph); };
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#0d0e0f",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", zIndex: 9999,
    }}>
      {/* Animated grid */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.07 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`v${i}`} style={{
            position: "absolute", left: `${i * 10}%`, top: 0, bottom: 0,
            width: 1, background: "var(--gold)",
            animation: `gridPulse ${1 + i * 0.1}s ease-in-out infinite alternate`,
          }} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`h${i}`} style={{
            position: "absolute", top: `${i * 12.5}%`, left: 0, right: 0,
            height: 1, background: "var(--gold)",
          }} />
        ))}
      </div>

      {/* Logo SVG */}
      <div style={{ marginBottom: 32 }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <defs>
            <linearGradient id="lGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c9a84c" />
              <stop offset="100%" stopColor="#f0d080" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="72" height="72" rx="2"
            fill="none" stroke="url(#lGrad)" strokeWidth="1.5"
            strokeDasharray="288" strokeDashoffset="0"
            style={{ animation: "dashSpin 3s linear infinite" }} />
          <text x="40" y="52" textAnchor="middle"
            fill="url(#lGrad)" fontSize="34" fontWeight="900"
            fontFamily="Georgia, serif" letterSpacing="-2">FE</text>
        </svg>
      </div>

      {/* Phase text */}
      <div style={{
        color: "var(--gold)", fontSize: 12, letterSpacing: 6,
        marginBottom: 40, minHeight: 20, fontFamily: "var(--condensed)",
        transition: "opacity 0.3s",
      }}>
        {PHRASES[phase]}
      </div>

      {/* Progress bar */}
      <div style={{ width: 280, height: 2, background: "#1a1b1c", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", left: 0, top: 0, height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
          transition: "width 0.05s linear",
          boxShadow: "0 0 12px var(--gold)",
        }} />
      </div>
      <div style={{ color: "#444", fontSize: 11, marginTop: 12, letterSpacing: 2 }}>
        {Math.floor(progress)}%
      </div>
    </div>
  );
}
