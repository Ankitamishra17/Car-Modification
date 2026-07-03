/**
 * PPFCeramicPage — AutoLuxe
 * Full service page for PPF & Ceramic Coating
 * Assembled from split section components.
 *
 * Palette (fixed):
 *   Primary BG      #0B0B0B
 *   Secondary BG    #1A1A1A
 *   Section BG      #2A2A2A
 *   Borders         #3D3D3D
 *   Primary Text    #FFFFFF
 *   Secondary Text  #B8B8B8
 *   Accent          #8C8C8C (metallic silver)
 *
 * Type system:
 *   Main heading    Bebas Neue
 *   Title/labels     DM Sans
 *   Sub/body text    Jost
 */

import Hero from "../../components/services/service_1_2/Home";
import WhatIsIt from "../../components/services/service_1_2/WhatIsIt";
import Packages from "../../components/services/service_1_2/Packages";
import Process from "../../components/services/service_1_2/Process";
import FAQ from "../../components/services/service_1_2/Faq";
import BottomCTA from "../../components/services/service_1_2/Bottomcta";
import PPFStyles from "../../components/services/service_1_2/Style";
import BeforeAfter from "../../components/services/service_1_2/Beforeafter";

export default function PPFCeramicPage() {
  return (
    <section id="services/ppf-ceramic-coating" className="w-full bg-[#0B0B0B]">
    <PPFStyles />
      <Hero />
      <WhatIsIt />
      <Packages />
      <Process />
      <BeforeAfter />
      <FAQ />
      <BottomCTA />
    </section>
  );
}