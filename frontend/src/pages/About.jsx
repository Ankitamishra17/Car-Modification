import React from "react";
// import AboutPage from "../components/about/About";
import  AboutHero  from "../components/about/AboutHero";
import FounderStory from "../components/about/FounderStory"
import MilestoneStats from "../components/about/MilestoneStats"
import CraftsmanshipPhilosophy from "../components/about/CraftsmanshipPhilosophy"
import ValuesSection from "../components/about/ValuesSection"
function About() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <MilestoneStats />
      <CraftsmanshipPhilosophy />
      <ValuesSection />
     
    </>
  );
}

export default About;
