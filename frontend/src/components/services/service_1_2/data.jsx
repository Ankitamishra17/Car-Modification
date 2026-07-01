import { Shield, Droplets, Zap, Clock } from "lucide-react";

export const HERO_IMAGE =
  "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=1600";

export const PPF_FEATURES = [
  { icon: Shield, title: "Self-Healing Film", desc: "Minor scratches and swirl marks disappear on their own under heat." },
  { icon: Droplets, title: "Hydrophobic Surface", desc: "Water, mud, and road grime bead off instantly — less washing, more shine." },
  { icon: Zap, title: "UV & Chemical Resistance", desc: "Blocks UV rays and resists fuel spills, bird droppings, and tree sap." },
  { icon: Clock, title: "10-Year Warranty", desc: "Our PPF installations come backed by a full decade of manufacturer warranty." },
];

export const CERAMIC_FEATURES = [
  { icon: Shield, title: "9H Hardness Rating", desc: "Forms a glass-hard layer that repels contaminants and resists micro-scratching." },
  { icon: Droplets, title: "Permanent Hydrophobics", desc: "Nano-ceramic bonds to paint at a molecular level for lasting water-repellency." },
  { icon: Zap, title: "Showroom Gloss", desc: "Enhances paint depth and clarity — your car looks freshly detailed, always." },
  { icon: Clock, title: "5-Year Protection", desc: "One professional application that lasts years, not weeks." },
];

export const PACKAGES = [
  {
    name: "Essential Shield",
    type: "Ceramic Coating",
    price: "₹18,000",
    duration: "1 day",
    features: [
      "Full exterior paint coating",
      "1-year manufacturer warranty",
      "Hydrophobic treatment",
      "Post-install care guide",
    ],
    highlight: false,
  },
  {
    name: "Guard Pro",
    type: "PPF + Ceramic",
    price: "₹55,000",
    duration: "2–3 days",
    features: [
      "Partial PPF (hood, fenders, bumper)",
      "Full-body ceramic coating",
      "5-year PPF warranty",
      "3-year ceramic warranty",
      "Annual inspection included",
    ],
    highlight: true,
  },
  {
    name: "Full Armour",
    type: "Full PPF",
    price: "₹1,20,000+",
    duration: "4–5 days",
    features: [
      "Full-body PPF wrap",
      "Self-healing film",
      "10-year manufacturer warranty",
      "Lifetime studio support",
      "Free annual re-inspection",
    ],
    highlight: false,
  },
];

export const PROCESS = [
  { step: "01", title: "Inspection", desc: "We examine every panel under lighting to document existing damage before we touch the car." },
  { step: "02", title: "Decontamination", desc: "Clay bar, iron fallout removal, and a full paint decontamination wash." },
  { step: "03", title: "Paint Correction", desc: "Swirls and scratches are polished out so the protective layer bonds to a perfect surface." },
  { step: "04", title: "Application", desc: "Film or coating is applied in our climate-controlled studio, panel by panel." },
  { step: "05", title: "Curing & QC", desc: "The car cures fully before a final quality inspection under LED lighting." },
];

export const FAQS = [
  { q: "How long does PPF installation take?", a: "Partial PPF (hood, bumper, mirrors) takes 1 day. A full-body wrap takes 4–5 days depending on the vehicle." },
  { q: "Can PPF be removed later?", a: "Yes. High-quality PPF peels cleanly off paint when removed professionally — no adhesive residue or damage." },
  { q: "Is ceramic coating the same as a wax?", a: "No. Wax sits on top of paint and washes off. Ceramic coating bonds chemically to the clear coat and lasts years." },
  { q: "Do I still need to wash my car after coating?", a: "Yes, but much less often. Coated paint repels dirt, so a quick rinse removes most contamination." },
];