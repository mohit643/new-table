import { useState } from "react";
import { Reveal, SectionLabel, SectionHeading, Gold, GoldButton } from "../components/UI";
import { CONTACT_INFO, CONTACT_LINKS } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--dark)", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel text="REACH OUT" center />
          <SectionHeading light style={{ textAlign: "center" }}>
            GET IN <Gold>TOUCH</Gold>
          </SectionHeading>
          <div style={{ width: 48, height: 2, background: "var(--gold)", margin: "16px auto 60px" }} />
        </Reveal>

        <div className="col-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>

          {/* Contact details */}
          <Reveal direction="left">
            <ContactDetails />
          </Reveal>

          {/* Form */}
          <Reveal direction="right" delay={0.15}>
            <ContactForm form={form} handle={handle} submit={submit} sent={sent} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactDetails() {
  return (
    <div>
      {CONTACT_INFO.map((info) => (
        <div key={info.label} style={{ marginBottom: 40 }}>
          <h3 style={{ color: "var(--gold)", fontSize: 10, letterSpacing: 3, margin: "0 0 8px", fontFamily: "var(--condensed)" }}>
            {info.label}
          </h3>
          <div style={{ width: 28, height: 1, background: "#2a2a2a", margin: "0 0 14px" }} />
          <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: 14, margin: 0 }}>
            {info.lines.map((line, i) => (
              <span key={i}>{line}{i < info.lines.length - 1 && <br />}</span>
            ))}
          </p>
        </div>
      ))}

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {CONTACT_LINKS.map((c) => (
          <a key={c.label} href={c.href}
            style={{
              display: "flex", alignItems: "center", gap: 14,
              color: "#bbb", textDecoration: "none", fontSize: 14,
              padding: "11px 16px", border: "1px solid var(--dark-border)",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--dark-border)"; e.currentTarget.style.color = "#bbb"; }}>
            <span>{c.icon}</span> {c.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactForm({ form, handle, submit, sent }) {
  const inputStyle = {
    width: "100%", background: "#111", border: "1px solid #2a2a2a",
    color: "#fff", padding: "13px 15px", fontSize: 13,
    fontFamily: "var(--sans)", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.3s",
  };
  const labelStyle = { color: "#555", fontSize: 9, letterSpacing: 2, display: "block", marginBottom: 7, fontFamily: "var(--condensed)" };
  const focus = (e) => { e.target.style.borderColor = "var(--gold)"; };
  const blur  = (e) => { e.target.style.borderColor = "#2a2a2a"; };

  return (
    <div>
      {sent && (
        <div style={{
          background: "#0d2a0d", border: "1px solid #2a5a2a",
          color: "#7dbd7d", padding: "13px 18px", marginBottom: 22, fontSize: 13,
        }}>
          ✓ Thank you! We will get back to you shortly.
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>NAME *</label>
          <input value={form.name} onChange={handle("name")} placeholder="Your Name"
            style={inputStyle} onFocus={focus} onBlur={blur} />
        </div>
        <div>
          <label style={labelStyle}>EMAIL *</label>
          <input value={form.email} onChange={handle("email")} placeholder="your@email.com"
            style={inputStyle} onFocus={focus} onBlur={blur} />
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>PHONE</label>
        <input value={form.phone} onChange={handle("phone")} placeholder="+91 XXXXXXXXXX"
          style={inputStyle} onFocus={focus} onBlur={blur} />
      </div>

      <div style={{ marginBottom: 22 }}>
        <label style={labelStyle}>MESSAGE</label>
        <textarea value={form.message} onChange={handle("message")}
          placeholder="Tell us about your project..." rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={focus} onBlur={blur} />
      </div>

      <GoldButton onClick={submit} full>SEND MESSAGE →</GoldButton>
    </div>
  );
}
