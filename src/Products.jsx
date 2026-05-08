import { useState } from "react";
import {
  Reveal,
  SectionLabel,
  SectionHeading,
  GoldDivider,
  Gold,
  CornerAccents,
} from "./components/UI";
import { PRODUCT_TABS } from "./data";

export default function Products() {
  const [active, setActive] = useState(0);
  const tab = PRODUCT_TABS[active];

  return (
    <section
      id="products"
      className="section-pad"
      style={{ background: "var(--dark)", padding: "100px 48px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel text="WHAT WE OFFER" />
          <SectionHeading light>
            PRODUCT <Gold>ECOSYSTEM</Gold>
          </SectionHeading>
          <GoldDivider />
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 14,
              maxWidth: 500,
              lineHeight: 1.8,
              marginBottom: 48,
            }}
          >
            A complete range of high-performance aluminium formwork components
            for faster, smarter construction.
          </p>
        </Reveal>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid var(--dark-border)",
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {PRODUCT_TABS.map((t, i) => (
            <TabBtn
              key={t.name}
              label={t.name}
              icon={t.icon}
              active={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Tab content */}
        <div
          className="col-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <Reveal direction="left" key={`text-${active}`}>
            <h3
              style={{
                color: "#fff",
                fontFamily: "var(--serif)",
                fontSize: "clamp(22px,3vw,34px)",
                margin: "0 0 14px",
              }}
            >
              {tab.name}
            </h3>
            <GoldDivider width={40} margin="0 0 18px" />
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.9,
                marginBottom: 32,
                fontSize: 15,
              }}
            >
              {tab.desc}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {tab.items.map((item) => (
                <ItemTag key={item} label={item} />
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} key={`img-${active}`}>
            <ProductVisual icon={tab.icon} name={tab.name} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TabBtn({ label, icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "14px 26px",
        fontSize: 10,
        letterSpacing: 2,
        fontFamily: "var(--condensed)",
        color: active ? "var(--gold)" : "#555",
        borderBottom: active
          ? "2px solid var(--gold)"
          : "2px solid transparent",
        transition: "all 0.3s",
      }}
    >
      {icon} {label.toUpperCase()}
    </button>
  );
}

function ItemTag({ label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 16px",
        background: "#111",
        border: "1px solid var(--dark-border)",
      }}
    >
      <div
        style={{
          width: 5,
          height: 5,
          background: "var(--gold)",
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <span style={{ color: "#bbb", fontSize: 12 }}>{label}</span>
    </div>
  );
}

function ProductVisual({ icon, name }) {
  return (
    <div
      style={{
        background: "#111",
        border: "1px solid var(--dark-border)",
        aspectRatio: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ fontSize: 90, opacity: 0.07, position: "absolute" }}>
        {icon}
      </div>
      <div style={{ fontSize: 60 }}>{icon}</div>
      <p
        style={{
          color: "#444",
          fontSize: 11,
          letterSpacing: 3,
          marginTop: 20,
          fontFamily: "var(--condensed)",
        }}
      >
        {name.toUpperCase()}
      </p>
      <CornerAccents />
    </div>
  );
}
