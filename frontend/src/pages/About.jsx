import React from "react";
// import AboutPage from "../components/about/About";
import  AboutHero  from "../components/about/AboutHero";
import FounderStory from "../components/about/FounderStory"
import MilestoneStats from "../components/about/MilestoneStats"
import CraftsmanshipPhilosophy from "../components/about/CraftsmanshipPhilosophy"
import ValuesSection from "../components/about/ValuesSection"
import ExperienceCallout from "../components/about/ExperienceCallout";
import CDATASection from "../components/about/CTASection"
function About() {
  return (
    <>
    <section id="about-us">
      <AboutHero />
      <FounderStory />
      <MilestoneStats />
      <CraftsmanshipPhilosophy />
      <ValuesSection />
      <ExperienceCallout/>
      <CDATASection/>
    </section>
    </>
  );
}

export default About;
