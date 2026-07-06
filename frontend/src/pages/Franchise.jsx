import FormSection from "../components/franchise/FormSection";
import HeroSection from "../components/franchise/HeroSectcion";
import Ideas from "../components/franchise/Ideas";
import OurProcess from "../components/franchise/OurProcess";
// import OurStory from "../components/franchise/OurStory";
import WhyChoose from "../components/franchise/WhyChoose";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <OurProcess/>
    <Ideas />
    {/* <OurStory/> */}
    <WhyChoose/>
    <FormSection/>
    </>
  );
}