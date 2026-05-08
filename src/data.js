// ─── Site-wide constants & data ───────────────────────────────────

export const NAV_LINKS = [
  "Home", "About", "Vision", "Products",
  "Tech Specs", "Services", "Projects", "Contact",
];

export const STATS = [
  { val: 200, suf: "+", label: "Repetitions" },
  { val: 30,  suf: "%", label: "Faster Cycle" },
  { val: 100, suf: "+", label: "Projects" },
  { val: 15,  suf: "+", label: "Years Experience" },
];

export const HERO_ICONS = [
  { icon: "⚙", label: "PRECISE ENGINEERING" },
  { icon: "🛡", label: "STRENGTH & DURABILITY" },
  { icon: "🏗", label: "FASTER CONSTRUCTION" },
  { icon: "♻", label: "HIGH REUSABILITY" },
];

export const VISION_PILLARS = [
  {
    icon: "💡", num: "01", title: "ENGINEERED INNOVATION",
    desc: "Advanced, future-ready formwork systems designed with innovation to drive construction efficiency and smarter outcomes.",
  },
  {
    icon: "🏛", num: "02", title: "STRUCTURAL EXCELLENCE",
    desc: "Uncompromising quality in every system we build, ensuring lasting strength, accuracy, and superior finish in every project.",
  },
  {
    icon: "⚡", num: "03", title: "ACCELERATED EXECUTION",
    desc: "Optimized solutions that streamline processes, reduce cycle time, and enable faster, on-time project delivery.",
  },
  {
    icon: "🤝", num: "04", title: "END-TO-END SUPPORT",
    desc: "Dedicated technical partnership from planning to execution — providing reliable guidance and assistance at every step.",
  },
];

export const WHY_BENEFITS = [
  { icon: "🔄", title: "150–200 REPETITIONS", desc: "High reusability ensures maximum returns and lower cost per use." },
  { icon: "⏱", title: "FASTER SLAB CYCLE", sub: "Save up to 20–30% TIME", desc: "Through quick assembly, early striking and minimal turnaround." },
  { icon: "✨", title: "BETTER FINISH", desc: "Delivers high-quality, smooth concrete finish with minimal rework and plastering." },
  { icon: "👷", title: "REDUCED LABOR DEPENDENCY", desc: "Lesser manpower required on-site, ensuring consistency, safety and better productivity." },
  { icon: "🛡", title: "STRONGER. LIGHTER. SMARTER.", desc: "High strength-to-weight ratio makes it easy to handle, safe and highly durable." },
];

export const PRODUCT_TABS = [
  {
    name: "Wall Systems", icon: "🧱",
    desc: "Modular wall panels designed for strength, precision and reusability.",
    items: ["Standard Wall Panel", "Corner Panels", "Adjustable Wall Forms", "Shear Wall Systems"],
  },
  {
    name: "Deck Systems", icon: "🏗",
    desc: "Efficient slab formwork solution for faster cycle and superior finish.",
    items: ["Deck Panels", "Drop Head", "Deck Props", "Deck Mid Beam"],
  },
  {
    name: "Beam Components", icon: "⚙",
    desc: "High-performance beams for greater spans and load capacity.",
    items: ["Beam Bottom", "Prop Length", "Rocker", "Beam Soffit"],
  },
  {
    name: "Accessories", icon: "🔧",
    desc: "Essential components that ensure safety, accuracy and efficiency on every project.",
    items: ["Aligner", "Wedge Pin", "Lifting Hook", "Panel Pin", "Tie Rod", "Ceiling Corner"],
  },
];

export const TECH_SPECS = [
  { num: "01", label: "Aluminium Extrusions Grade",             value: "T6061",                                      highlight: false },
  { num: "02", label: "Type of Treatment",                      value: "T6",                                         highlight: false },
  { num: "03", label: "Thickness of the Sheet",                 value: "4 mm – 8 mm",                               highlight: false },
  { num: "04", label: "Overall Tentative Weight of Aluminium",  value: "21.5 Kg ±1 Kg",                             highlight: false },
  { num: "05", label: "Type of Fabrication",                    value: "Extrusion + FSW + MIG (Robotic & Manual)",  highlight: true  },
  { num: "06", label: "Welding Wire Grade (Aluminium)",         value: "ER4043",                                     highlight: true  },
  { num: "07", label: "Standard Size",                          value: "2400×600mm (Wall) / 1200×600mm (Deck)",     highlight: true  },
  { num: "08", label: "Type of Stiffener Uses",                 value: "3 Types (H.U.I.)",                          highlight: false },
  { num: "09", label: "Lacquer Coating",                        value: "Polyurethane Acrylic",                      highlight: false },
  { num: "10", label: "Repetition",                             value: "150 to 200 Times",                          highlight: false },
];

export const MFG_STEPS = [
  { num: "01", title: "ADVANCED FABRICATION",   desc: "CNC-controlled cutting, punching and machining ensure dimensional accuracy and repeatability." },
  { num: "02", title: "ROBOTIC WELDING",         desc: "Robotic MIG welding for stronger joints, uniform quality and enhanced structural integrity." },
  { num: "03", title: "ALUMINIUM EXTRUSION",     desc: "High-grade aluminium billets are extruded using advanced presses to achieve superior strength and surface finish." },
  { num: "04", title: "QUALITY ASSURANCE",       desc: "Multi-level quality checks including dimensional inspection, weld integrity and surface finish." },
];

export const MFG_QUALITIES = [
  "Modern Infrastructure",
  "Highly Skilled Workforce",
  "Stringent Process Controls",
  "International Quality Standards",
];

export const SERVICES = [
  { num: "01", icon: "♻", title: "REDESIGNING OF EXISTING MATERIAL FOR RE-USE",   desc: "We analyze and redesign existing shuttering material to maximize its reusability, minimizing wastage and optimizing costs." },
  { num: "02", icon: "📋", title: "SHUTTERING MANAGEMENT",                          desc: "Shuttering Stock Management, Repair & Maintenance, Design (Column/Shear Wall/Boundary Wall) and Optimization." },
  { num: "03", icon: "👷", title: "SITE SUPERVISION",                               desc: "Our experts supervise on-site activities to ensure proper installation, usage and safety compliance at every stage." },
  { num: "04", icon: "📊", title: "PERIODICAL EVALUATION & TRAINING",              desc: "We conduct regular evaluations and training sessions to keep your team updated with best practices." },
  { num: "05", icon: "🗓", title: "ONSITE VISITS",                                  desc: "Onsite visits from trained professionals at regular intervals to review progress and ensure smooth project execution." },
];

export const SERVICE_VALUE_PROPS = [
  { icon: "📉", label: "COST OPTIMIZATION",    desc: "Reduce material wastage and overall project costs." },
  { icon: "⚡", label: "IMPROVED EFFICIENCY",  desc: "Streamlined processes ensure timely completion." },
  { icon: "✅", label: "QUALITY ASSURANCE",    desc: "Regular checks and expert supervision." },
  { icon: "🤝", label: "RELIABLE PARTNERSHIP", desc: "A committed team at every step of the project." },
];

export const PROJECTS = [
  {
    name: "M3M – JACOB",    location: "NOIDA",    tag: "High-Rise Residential",
    features: ["Iconic Design", "Premium Fenestration", "Superior Execution", "World Class Amenities"],
  },
  {
    name: "GRAND TOWERS",   location: "GURUGRAM", tag: "Commercial Complex",
    features: ["Structural Excellence", "Faster Delivery", "Quality Finish"],
  },
  {
    name: "SKY VISTA",      location: "MUMBAI",   tag: "Luxury Residential",
    features: ["Precision Formwork", "High Reusability", "Cost Optimized"],
  },
];

export const COMPARISON_ROWS = [
  { icon: "🔄", category: "REUSABILITY",         alu: "150–200 Repetitions",        conv: "10–15 Repetitions" },
  { icon: "⏱", category: "SPEED",                alu: "20–30% Faster Slab Cycle",   conv: "Slower Cycle" },
  { icon: "✨", category: "FINISH",               alu: "Better Finish",              conv: "Average Finish" },
  { icon: "👷", category: "LABOR",                alu: "Reduced Labor Dependency",   conv: "High Labor Dependency" },
  { icon: "🛡", category: "STRENGTH & DURABILITY",alu: "Stronger. Lighter. Smarter.",conv: "Heavy & Less Durable" },
  { icon: "💰", category: "COST EFFICIENCY",      alu: "Lower Cost Per Sq.Ft.",      conv: "Higher Cost Per Sq.Ft." },
];

export const CONTACT_INFO = [
  {
    label: "CORPORATE OFFICE & FACTORY",
    lines: ["Ground Floor, Khasra No.-8/20/21 & 9/16/1", "Kardarpur, Sector-63A, Gurugram", "Haryana – 122101"],
  },
  {
    label: "SURAT OFFICE",
    lines: ["25/1 Jagdish Compound Bhatar", "Char Rasta behind Gujarat Gas Station", "Surat – 395007"],
  },
];

export const CONTACT_LINKS = [
  { icon: "📞", label: "9200684443",     href: "tel:9200684443" },
  { icon: "🌐", label: "www.fabedge.in", href: "https://www.fabedge.in" },
  { icon: "✉",  label: "info@fabedge.in",href: "mailto:info@fabedge.in" },
];

export const FOOTER_COLS = [
  { title: "COMPANY",  links: ["About Us", "Our Vision", "Manufacturing", "Careers"] },
  { title: "PRODUCTS", links: ["Wall Systems", "Deck Systems", "Beam Components", "Accessories"] },
  { title: "SERVICES", links: ["Shuttering Management", "Site Supervision", "Training", "Onsite Visits"] },
];
