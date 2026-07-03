import { useParams } from "react-router-dom";
import { SERVICES } from "../../data/services";
import ServiceHero from "../../components/common/ServiceHero";
import WhatIsIt from "../../components/common/Whatisit";
import Packages from "../../components/common/Packages";
import Process from "../../components/common/Process";
import BeforeAfter from "../../components/common/BeforeAfter";
import CTASection from "../../components/common/CTASection"


export default function ServicePage() {
  const { slug } = useParams();

  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <>
      <ServiceHero
        image={service.image}
        breadcrumb={service.breadcrumb}
        title={service.title}
        highlight={service.highlight}
        description={service.description}
      />

      <WhatIsIt
        subtitle={service.whatIsIt.subtitle}
        heading={service.whatIsIt.heading}
        tabs={service.whatIsIt.tabs}
      />
      <Packages
        {...service.packagesSection}
/>
          <Process 
            {...service.processSection}
          />
          <BeforeAfter {...service.gallerySection} />
       
         
          <CTASection {...service.ctaSection} />
    </>
  );
}
