import { Hammer, Sparkles, PaintBucket, ShieldCheck, Clock, Wrench } from "lucide-react";

export const HERO_IMAGE =
  "https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1600";

export const BODYWORK_FEATURES = [
  { icon: Hammer, title: "Dent & Panel Repair", desc: "Paintless dent removal and panel straightening restore factory-flat surfaces." },
  { icon: PaintBucket, title: "Rust Treatment", desc: "Corroded panels are cut, treated, and refinished before rust can spread further." },
  { icon: Wrench, title: "Frame Correction", desc: "Structural alignment brings bent or misaligned frames back to OEM spec." },
  { icon: Clock, title: "Fast Turnaround", desc: "Most bodywork jobs are completed within 3–5 days without cutting corners." },
];

export const RESTORE_FEATURES = [
  { icon: Sparkles, title: "Full Repaint", desc: "Multi-stage refinishing brings back factory-grade colour depth and gloss." },
  { icon: ShieldCheck, title: "Interior Refurbishment", desc: "Seats, dashboard, and trim are repaired, recoloured, or replaced to look new." },
  { icon: PaintBucket, title: "Rubber & Trim Renewal", desc: "Weatherstripping, badges, and chrome trim are restored or swapped out." },
  { icon: Clock, title: "Showroom Finish", desc: "Every restored vehicle leaves the studio detailed to a showroom standard." },
];

export const PACKAGES = [
  {
    name: "Refresh",
    type: "Cosmetic Refurbish",
    price: "₹25,000",
    duration: "2–3 days",
    features: [
      "Minor dent & scratch repair",
      "Single-panel repaint",
      "Interior deep clean",
      "Trim & rubber touch-up",
    ],
    highlight: false,
  },
  {
    name: "Complete Restore",
    type: "Bodywork + Interior",
    price: "₹85,000",
    duration: "7–10 days",
    features: [
      "Multi-panel dent & rust repair",
      "Full exterior repaint",
      "Seat & dashboard refurbishment",
      "New rubber seals & trim",
      "Post-restore inspection",
    ],
    highlight: true,
  },
  {
    name: "Showroom Rebuild",
    type: "Full Vehicle Restoration",
    price: "₹2,00,000+",
    duration: "3–4 weeks",
    features: [
      "Complete body & frame correction",
      "Full strip-down repaint",
      "Ground-up interior rebuild",
      "Mechanical inspection & tune-up",
      "Lifetime studio support",
    ],
    highlight: false,
  },
];

export const PROCESS = [
  { step: "01", title: "Assessment", desc: "A full inspection identifies bodywork, rust, and interior damage before we quote." },
  { step: "02", title: "Strip & Repair", desc: "Damaged panels are removed, straightened, or replaced; rust is cut out completely." },
  { step: "03", title: "Refinishing", desc: "Primer, colour, and clear coat are applied in stages inside a controlled booth." },
  { step: "04", title: "Interior Rebuild", desc: "Seats, dash, and trim are repaired or replaced to match the restored exterior." },
  { step: "05", title: "Final Inspection", desc: "Every panel and surface is checked under LED lighting before handover." },
];

export const FAQS = [
  { q: "Can you restore a vehicle with heavy rust damage?", a: "Yes. We cut out affected panels completely and refabricate or replace them rather than covering rust over." },
  { q: "Will the repainted colour match the original exactly?", a: "We colour-match using the manufacturer's paint code, then blend adjoining panels so the finish is seamless." },
  { q: "How long does a full restoration take?", a: "A complete ground-up restoration typically takes 3–4 weeks depending on the extent of damage." },
  { q: "Do you handle interior restoration too?", a: "Yes — seat reupholstery, dashboard repair, and trim replacement are all done in-house." },
];