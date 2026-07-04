import About from "../components/home/About";
import Blog from "../components/home/Blog";
import CTA from "../components/home/CTA";
import Franchise from "../components/home/Franchise";
import Hero from "../components/home/Home";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Blog />
    <Franchise />
    <CTA />
    <Testimonials/>
    </>
  );
}