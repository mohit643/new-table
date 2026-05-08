import { useState } from "react";
import "./styles.css";

// ── Core components ───────────────────────────────────────────────
import Loader  from "./components/Loader";
import Navbar  from "./components/Navbar";
import Footer  from "./components/Footer";

// ── Page sections (one per file) ──────────────────────────────────
import Hero           from "./sections/Hero";
import About          from "./sections/About";
import Vision         from "./sections/Vision";
import WhyAluminium   from "./sections/WhyAluminium";
import Products       from "./sections/Products";
import TechSpecs      from "./sections/TechSpecs";
import Manufacturing  from "./sections/Manufacturing";
import Services       from "./sections/Services";
import Projects       from "./sections/Projects";
import Comparison     from "./sections/Comparison";
import Contact        from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      {!loading && (
        <div style={{ animation: "fadeIn 0.8s ease" }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Vision />
            <WhyAluminium />
            <Products />
            <TechSpecs />
            <Manufacturing />
            <Services />
            <Projects />
            <Comparison />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
