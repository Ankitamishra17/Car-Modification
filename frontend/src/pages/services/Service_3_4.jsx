import Style from "../../components/services/service_3_4/Style";
import Home from "../../components/services/service_3_4/Home";
import Whatisit from "../../components/services/service_3_4/Whatisit";
import Packages from "../../components/services/service_3_4/Packages";
import Process from "../../components/services/service_3_4/Process";
import BeforeAfter from "../../components/services/service_3_4/Beforeafter";
import FAQ from "../../components/services/service_3_4/Faq";
import BottomCTA from "../../components/services/service_3_4/Bottomcta";

export default function RefurbishRestorePage() {
  return (
    <section id="service/refurbish-vehicle-restore" className="w-full bg-[#0B0B0B]">
      <Style />
      <Home />
      <Whatisit />
      <Packages />
      <Process />
      <BeforeAfter />
      <FAQ />
      <BottomCTA />
    </section>
  );
}