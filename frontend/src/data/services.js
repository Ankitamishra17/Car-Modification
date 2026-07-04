import { Shield, Droplets, Zap, Clock } from "lucide-react";

export const SERVICES = [
  {
    slug: "paint-protection-film",
    href: "/services/paint-protection-film",

    name: "PPF",
    breadcrumb: "Services / PPF",

    title: "INVISIBLE",
    highlight: "PROTECTION.",

    description:
      "True protection should never be seen. Our Paint Protection Film creates an almost imperceptible barrier that preserves your vehicle's finish against everyday driving conditions while maintaining exceptional optical clarity.",

    image: "/banner/ppf.png",

    whatIsIt: {
      subtitle: "Invisible Protection",

      heading: "PRECISION ENGINEERED. PROFESSIONALLY INSTALLED.",

      tabs: [
        {
          id: "ppf",
          label: "Paint Protection Film",

          features: [
            {
              icon: Shield,
              title: "Virtually Invisible Finish",
              desc: "Ultra-clear film protects your vehicle without changing the appearance of the original paint.",
            },
            {
              icon: Zap,
              title: "Impact Resistance",
              desc: "Defends against stone chips, road debris, scratches and everyday surface abrasions.",
            },
            {
              icon: Droplets,
              title: "Self-Healing Technology",
              desc: "Minor swirl marks disappear with heat while the hydrophobic surface repels water and dirt.",
            },
            {
              icon: Clock,
              title: "Long-Term Protection",
              desc: "Engineered to preserve paintwork against UV exposure, oxidation and environmental contamination.",
            },
          ],
        },

        {
          id: "installation",
          label: "Installation Process",

          features: [
            {
              icon: Shield,
              title: "Precision-Cut Patterns",
              desc: "Every panel is digitally cut for exceptional accuracy and seamless coverage.",
            },
            {
              icon: Droplets,
              title: "Hand Finished",
              desc: "Certified technicians carefully install and finish every edge by hand.",
            },
            {
              icon: Zap,
              title: "Optical Clarity",
              desc: "Maintains the factory appearance while delivering virtually invisible protection.",
            },
            {
              icon: Clock,
              title: "Premium Materials",
              desc: "High-performance films designed for exceptional durability and lasting performance.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Protection Packages",

      heading: "CHOOSE YOUR LEVEL OF PROTECTION.",

      packages: [
        {
          name: "Essential Front",
          type: "Front-End PPF",
          price: "OMR 180",
          duration: "1 Day",
          highlight: false,

          features: [
            "Front bumper protection",
            "Partial bonnet coverage",
            "Headlamp protection",
            "Mirror protection",
          ],
        },

        {
          name: "Performance Shield",
          type: "Extended PPF Coverage",
          price: "OMR 420",
          duration: "2 Days",
          highlight: true,

          features: [
            "Complete front-end protection",
            "A-pillars & roof edge",
            "Door edge protection",
            "Self-healing hydrophobic film",
          ],
        },

        {
          name: "Signature Protection",
          type: "Full Body PPF",
          price: "OMR 850",
          duration: "4–5 Days",
          highlight: false,

          features: [
            "Complete vehicle coverage",
            "Precision-cut premium film",
            "UV & chemical resistance",
            "Maximum paint preservation",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Installation Process",

      heading: "PRECISION IN EVERY DETAIL.",

      process: [
        {
          step: "01",
          title: "Vehicle Assessment",
          desc: "Every panel is carefully inspected to determine the perfect protection strategy.",
        },
        {
          step: "02",
          title: "Surface Preparation",
          desc: "The paintwork is thoroughly washed, decontaminated and prepared to ensure flawless adhesion.",
        },
        {
          step: "03",
          title: "Precision Cutting",
          desc: "Film patterns are digitally cut to match your vehicle with exceptional accuracy.",
        },
        {
          step: "04",
          title: "Expert Installation",
          desc: "Certified technicians hand-install each section following the natural contours of the vehicle.",
        },
        {
          step: "05",
          title: "Final Inspection",
          desc: "Every installation undergoes a meticulous quality inspection before delivery.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Gallery",

      heading: "INVISIBLE PROTECTION. VISIBLE PERFECTION.",

      images: [
        "https://images.pexels.com/photos/10126665/pexels-photo-10126665.jpeg",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "PROTECT YOUR VEHICLE FOR YEARS TO COME.",

      description:
        "Book a consultation with our certified specialists and discover the ideal Paint Protection Film solution tailored to your vehicle.",

      buttonText: "Book a Consultation",

      buttonLink: "/contact",

      phone: "+080-77976595",
    },
  },

  {
    slug: "ceramic-coating",
    href: "/services/ceramic-coating",

    name: "CERAMIC COATING",
    breadcrumb: "Services / Ceramic Coating",

    title: "CERAMIC",
    highlight: "PERFECTION.",

    description:
      "A ceramic coating should enhance rather than conceal. Our advanced ceramic protection systems create a molecular barrier that intensifies gloss, enriches colour depth, and preserves every surface with exceptional durability.",
    image: "/banner/ceramic.png",

    whatIsIt: {
      subtitle: "Advanced Protection",

      heading: "BRILLIANCE. PROTECTION. ELEGANCE.",

      tabs: [
        {
          id: "ceramic",
          label: "Ceramic Coating",

          features: [
            {
              icon: Shield,
              title: "Advanced Molecular Barrier",
              desc: "Creates an invisible protective layer against oxidation, UV exposure and environmental contaminants.",
            },
            {
              icon: Droplets,
              title: "Hydrophobic Performance",
              desc: "Repels water, dirt and road grime, making maintenance effortless.",
            },
            {
              icon: Zap,
              title: "Enhanced Gloss",
              desc: "Deepens colour and delivers an exceptional showroom-quality finish.",
            },
            {
              icon: Clock,
              title: "Long-Term Protection",
              desc: "Preserves paintwork while maintaining lasting brilliance for years.",
            },
          ],
        },

        {
          id: "complete-care",
          label: "Complete Vehicle Care",

          features: [
            {
              icon: Shield,
              title: "Multi-Surface Protection",
              desc: "Protects paint, wheels, glass, leather, dashboard components and interior trims.",
            },
            {
              icon: Droplets,
              title: "Tailored Application",
              desc: "Every ceramic coating package is selected according to your vehicle and driving lifestyle.",
            },
            {
              icon: Zap,
              title: "Chemical Resistance",
              desc: "Defends against chemical stains, oxidation and environmental fallout.",
            },
            {
              icon: Clock,
              title: "Luxury Finish",
              desc: "Designed to preserve the refined appearance of your vehicle with minimal maintenance.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Protection Packages",

      heading: "CHOOSE YOUR CERAMIC PROTECTION.",

      packages: [
        {
          name: "Essential Ceramic",
          type: "Exterior Paint Protection",
          price: "OMR 120",
          duration: "1 Day",
          highlight: false,

          features: [
            "Single-layer ceramic coating",
            "Enhanced gloss & colour depth",
            "Hydrophobic paint protection",
            "UV & oxidation resistance",
          ],
        },

        {
          name: "Performance Ceramic",
          type: "Multi-Surface Protection",
          price: "OMR 220",
          duration: "2 Days",
          highlight: true,

          features: [
            "Multi-layer ceramic coating",
            "Paint, wheels & glass protection",
            "Chemical & environmental resistance",
            "Long-lasting hydrophobic finish",
          ],
        },

        {
          name: "Signature Ceramic",
          type: "Complete Vehicle Protection",
          price: "OMR 350",
          duration: "2–3 Days",
          highlight: false,

          features: [
            "Complete exterior ceramic coating",
            "Glass, wheels, leather & interior trim protection",
            "Maximum gloss enhancement",
            "Tailored application for your vehicle",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Application Process",

      heading: "PERFECTION IN EVERY LAYER.",

      process: [
        {
          step: "01",
          title: "Vehicle Inspection",
          desc: "Every surface is carefully assessed before selecting the ideal ceramic protection system.",
        },
        {
          step: "02",
          title: "Surface Preparation",
          desc: "The vehicle is washed, decontaminated and prepared to ensure maximum coating performance.",
        },
        {
          step: "03",
          title: "Paint Refinement",
          desc: "Paint imperfections are corrected to achieve exceptional gloss and flawless bonding.",
        },
        {
          step: "04",
          title: "Ceramic Application",
          desc: "The ceramic coating is meticulously applied to every selected surface with precision.",
        },
        {
          step: "05",
          title: "Curing & Inspection",
          desc: "The coating cures under controlled conditions before a comprehensive quality inspection.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Gallery",

      heading: "LASTING BRILLIANCE. EVERY DETAIL.",

      images: [
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "ELEVATE YOUR VEHICLE'S FINISH.",

      description:
        "Book a consultation with our ceramic coating specialists and experience long-lasting gloss, protection and effortless maintenance.",

      buttonText: "Book a Consultation",

      buttonLink: "/contact",

      phone: "+080-77976595",
    },
  },

  {
    slug: "restore",
    href: "/services/restore",

    name: "RESTORE",
    breadcrumb: "Services / Restore",

    title: "PAINT",
    highlight: "PERFECTION.",

    description:
      "Before protection comes perfection. Our paint correction process restores clarity, depth and flawless reflections by carefully refining every painted surface.",

    image: "/banner/restore.png",

    whatIsIt: {
      subtitle: "Surface Refinement",

      heading: "RESTORE CLARITY. REVEAL TRUE DEPTH.",

      tabs: [
        {
          id: "paint-correction",
          label: "Paint Correction",

          features: [
            {
              icon: Shield,
              title: "Swirl Mark Removal",
              desc: "Safely removes swirl marks, light scratches and holograms while preserving the paint.",
            },
            {
              icon: Droplets,
              title: "Oxidation & Water Spot Removal",
              desc: "Eliminates oxidation, water spotting and surface contamination for a cleaner finish.",
            },
            {
              icon: Zap,
              title: "Enhanced Gloss & Depth",
              desc: "Restores exceptional clarity, colour depth and mirror-like reflections.",
            },
            {
              icon: Clock,
              title: "Precision Refinement",
              desc: "Each stage is carefully measured to maximise results while maintaining paint integrity.",
            },
          ],
        },

        {
          id: "process",
          label: "Professional Refinement",

          features: [
            {
              icon: Shield,
              title: "Machine Polishing",
              desc: "Multi-stage machine polishing tailored to the condition of your vehicle.",
            },
            {
              icon: Droplets,
              title: "Paint Preservation",
              desc: "Only the minimum amount of clear coat is refined to maintain long-term durability.",
            },
            {
              icon: Zap,
              title: "Expert Assessment",
              desc: "Every vehicle receives an individual correction plan based on paint condition.",
            },
            {
              icon: Clock,
              title: "Protection Ready",
              desc: "Creates the perfect foundation for ceramic coating or Paint Protection Film.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Correction Packages",

      heading: "CHOOSE YOUR LEVEL OF REFINEMENT.",

      packages: [
        {
          name: "Essential Correction",
          type: "Single-Stage Polish",
          price: "OMR 90",
          duration: "1 Day",
          highlight: false,

          features: [
            "Light swirl mark removal",
            "Gloss enhancement",
            "Surface refinement",
            "Paint preparation",
          ],
        },

        {
          name: "Precision Correction",
          type: "Multi-Stage Paint Correction",
          price: "OMR 180",
          duration: "2 Days",
          highlight: true,

          features: [
            "Swirl & hologram removal",
            "Oxidation correction",
            "Enhanced colour depth",
            "Mirror-like finish",
          ],
        },

        {
          name: "Signature Refinement",
          type: "Complete Paint Restoration",
          price: "OMR 320",
          duration: "3 Days",
          highlight: false,

          features: [
            "Comprehensive paint correction",
            "Maximum clarity & reflections",
            "Surface perfection",
            "Ready for ceramic coating or PPF",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Correction Process",

      heading: "PERFECTION THROUGH PRECISION.",

      process: [
        {
          step: "01",
          title: "Paint Inspection",
          desc: "Every panel is inspected under specialist lighting to identify defects and paint condition.",
        },
        {
          step: "02",
          title: "Surface Preparation",
          desc: "The vehicle is washed, decontaminated and prepared for machine refinement.",
        },
        {
          step: "03",
          title: "Paint Correction",
          desc: "Swirl marks, oxidation, holograms and imperfections are safely removed through multi-stage polishing.",
        },
        {
          step: "04",
          title: "Surface Refinement",
          desc: "The finish is refined to maximise clarity, gloss and reflection without compromising paint integrity.",
        },
        {
          step: "05",
          title: "Final Inspection",
          desc: "The corrected finish is inspected to ensure exceptional depth, clarity and a flawless result.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Transformation",

      heading: "FROM IMPERFECTION TO PERFECTION.",

      images: [
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "RESTORE THE TRUE BEAUTY OF YOUR PAINT.",

      description:
        "Book a consultation with our paint correction specialists and experience exceptional clarity, depth and flawless reflections.",

      buttonText: "Book a Consultation",

      buttonLink: "/contact",

      phone: "+080-77976595",
    },
  },

  {
    slug: "refurbish",
    href: "/services/refurbish",

    name: "REFURBISH",
    breadcrumb: "Services / Refurbish",

    title: "VEHICLE",
    highlight: "RESTORATION.",

    description:
      "Every automobile carries its own history. Our restoration programme revives ageing and neglected vehicles while preserving their originality, craftsmanship and timeless character.",

    image: "/banner/refurbish.png",

    whatIsIt: {
      subtitle: "Rinascita",

      heading: "RESTORE THE PAST. PRESERVE THE FUTURE.",

      tabs: [
        {
          id: "restoration",
          label: "Vehicle Restoration",

          features: [
            {
              icon: Shield,
              title: "Comprehensive Restoration",
              desc: "From paint restoration to interior refurbishment, every element is carefully renewed to its finest condition.",
            },
            {
              icon: Droplets,
              title: "Surface & Trim Renewal",
              desc: "Exterior trims, mouldings and detailed finishes are restored while preserving their authentic appearance.",
            },
            {
              icon: Zap,
              title: "Interior Refurbishment",
              desc: "Seats, leather, dashboard, upholstery and interior components are revitalised with meticulous craftsmanship.",
            },
            {
              icon: Clock,
              title: "Protective Finishing",
              desc: "Every restored surface receives professional protection to preserve its beauty for years to come.",
            },
          ],
        },

        {
          id: "craftsmanship",
          label: "Our Philosophy",

          features: [
            {
              icon: Shield,
              title: "Respect for Heritage",
              desc: "Each restoration honours the original engineering and character of the vehicle.",
            },
            {
              icon: Droplets,
              title: "Individual Approach",
              desc: "Every project is planned according to the vehicle's condition, age and restoration requirements.",
            },
            {
              icon: Zap,
              title: "Authentic Restoration",
              desc: "We restore rather than replace wherever possible, preserving originality and authenticity.",
            },
            {
              icon: Clock,
              title: "Timeless Results",
              desc: "Our objective is never to alter the character of the automobile—but to reveal it once again.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Restoration Packages",

      heading: "CHOOSE YOUR RESTORATION PROGRAMME.",

      packages: [
        {
          name: "Essential Revival",
          type: "Exterior Restoration",
          price: "OMR 180",
          duration: "2 Days",
          highlight: false,

          features: [
            "Paint restoration",
            "Exterior trim renewal",
            "Surface refinement",
            "Protective finish",
          ],
        },

        {
          name: "Heritage Restore",
          type: "Interior & Exterior",
          price: "OMR 350",
          duration: "3–4 Days",
          highlight: true,

          features: [
            "Paint & trim restoration",
            "Interior refurbishment",
            "Leather conditioning",
            "Complete detailing",
          ],
        },

        {
          name: "Signature Rinascita",
          type: "Complete Vehicle Restoration",
          price: "OMR 650",
          duration: "5–7 Days",
          highlight: false,

          features: [
            "Complete vehicle restoration",
            "Interior & exterior refinement",
            "Protective treatments",
            "Authentic finish preservation",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Restoration Process",

      heading: "REVIVING EVERY DETAIL.",

      process: [
        {
          step: "01",
          title: "Vehicle Assessment",
          desc: "A comprehensive inspection evaluates the vehicle's condition and restoration requirements.",
        },
        {
          step: "02",
          title: "Preparation",
          desc: "The vehicle is carefully cleaned, dismantled where required and prepared for restoration.",
        },
        {
          step: "03",
          title: "Restoration Work",
          desc: "Paint, trim, interior materials and detailing elements are meticulously restored.",
        },
        {
          step: "04",
          title: "Surface Refinement",
          desc: "Every restored surface is refined to achieve exceptional consistency and factory-inspired quality.",
        },
        {
          step: "05",
          title: "Final Preservation",
          desc: "Protective treatments are applied before a final quality inspection ensures outstanding results.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Transformation",

      heading: "REVIVING AUTOMOTIVE HERITAGE.",
      images: [
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "BRING YOUR AUTOMOBILE BACK TO ITS FINEST FORM.",

      description:
        "Book a consultation with our restoration specialists and discover how we can preserve the originality, craftsmanship and heritage of your vehicle.",

      buttonText: "Book a Consultation",

      buttonLink: "/contact",

      phone: "+080-77976595",
    },
  },
  {
    slug: "upholstery",
    href: "/services/upholstery",

    name: "UPHOLSTERY ",
    breadcrumb: "Services / Upholstery",

    title: "INTERIOR",
    highlight: "PERFECTION.",

    description:
      "Luxury is experienced from within. Our interior restoration and upholstery services revive leather, Alcantara, fine fabrics and trim while preserving their original elegance and craftsmanship.",

    image: "/banner/upholstery.png",
    whatIsIt: {
      subtitle: "L'Interno",

      heading: "RESTORE COMFORT. PRESERVE LUXURY.",

      tabs: [
        {
          id: "upholstery",
          label: "Interior Restoration",

          features: [
            {
              icon: Shield,
              title: "Leather Restoration",
              desc: "Premium leather is carefully cleaned, restored and conditioned to recover its natural appearance and softness.",
            },
            {
              icon: Droplets,
              title: "Deep Cleaning",
              desc: "Seats, carpets, headliners and interior surfaces are thoroughly cleaned using specialist techniques.",
            },
            {
              icon: Zap,
              title: "Trim Refinement",
              desc: "Interior trims, dashboard panels and decorative finishes are restored with meticulous attention to detail.",
            },
            {
              icon: Clock,
              title: "Long-Term Protection",
              desc: "Professional conditioning and protective treatments preserve interior materials against daily wear and ageing.",
            },
          ],
        },

        {
          id: "materials",
          label: "Premium Materials",

          features: [
            {
              icon: Shield,
              title: "Leather & Alcantara Care",
              desc: "Specialist restoration techniques designed specifically for premium leather and Alcantara surfaces.",
            },
            {
              icon: Droplets,
              title: "Fine Fabric Treatment",
              desc: "Luxury fabrics are cleaned and protected while maintaining their original texture and appearance.",
            },
            {
              icon: Zap,
              title: "Original Character",
              desc: "Every procedure is carried out to preserve the authentic look and feel of the vehicle's interior.",
            },
            {
              icon: Clock,
              title: "Tailored Restoration",
              desc: "Each interior receives an individual restoration programme based on its materials and condition.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Interior Packages",

      heading: "CHOOSE YOUR RESTORATION PACKAGE.",

      packages: [
        {
          name: "Essential Interior",
          type: "Deep Interior Care",
          price: "OMR 80",
          duration: "1 Day",
          highlight: false,

          features: [
            "Complete interior cleaning",
            "Leather conditioning",
            "Dashboard & trim care",
            "Fabric protection",
          ],
        },

        {
          name: "Premium Upholstery",
          type: "Interior Restoration",
          price: "OMR 180",
          duration: "2 Days",
          highlight: true,

          features: [
            "Leather restoration",
            "Alcantara treatment",
            "Seat & trim refurbishment",
            "Protective conditioning",
          ],
        },

        {
          name: "Signature Interior",
          type: "Complete Cabin Restoration",
          price: "OMR 320",
          duration: "3 Days",
          highlight: false,

          features: [
            "Complete interior restoration",
            "Leather, fabric & Alcantara care",
            "Dashboard & trim refinement",
            "Long-lasting interior protection",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Restoration Process",

      heading: "CRAFTED FOR LASTING COMFORT.",

      process: [
        {
          step: "01",
          title: "Interior Assessment",
          desc: "Every material is carefully inspected to determine the appropriate restoration process.",
        },
        {
          step: "02",
          title: "Deep Cleaning",
          desc: "Leather, Alcantara, fabrics and trims are thoroughly cleaned using specialist products.",
        },
        {
          step: "03",
          title: "Material Restoration",
          desc: "Damaged or worn interior surfaces are restored while preserving their original appearance.",
        },
        {
          step: "04",
          title: "Conditioning & Protection",
          desc: "Premium conditioners and protective treatments nourish materials and improve durability.",
        },
        {
          step: "05",
          title: "Final Inspection",
          desc: "Every interior is inspected to ensure exceptional comfort, finish and craftsmanship.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Transformation",

      heading: "LUXURY BEGINS INSIDE.",

      images: [
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "RESTORE THE LUXURY OF YOUR INTERIOR.",

      description:
        "Book a consultation with our upholstery specialists and discover a tailored restoration programme for your vehicle's interior.",

      buttonText: "Book a Consultation",

      buttonLink: "/contact",

      phone: "+080-77976595",
    },
  },
  {
    slug: "paints",
    href: "/services/paints",

    name: "PAINTS",
    breadcrumb: "Services / Paints",

    title: "AUTOMOTIVE",
    highlight: "REFINISHING.",

    description:
      "Refinishing is as much an art as it is a science. Every surface is meticulously prepared, refinished and colour-matched to manufacturer standards for an impeccable factory-quality finish.",

    image: "/banner/paint.png",
    whatIsIt: {
      subtitle: "Carrozzeria",

      heading: "PERFECT COLOUR. FLAWLESS FINISH.",

      tabs: [
        {
          id: "refinishing",
          label: "Paint Refinishing",

          features: [
            {
              icon: Shield,
              title: "Precision Colour Matching",
              desc: "Every paint formula is matched to exact manufacturer specifications for seamless repairs.",
            },
            {
              icon: Droplets,
              title: "Premium Surface Preparation",
              desc: "Every panel is carefully prepared to ensure flawless adhesion and a long-lasting finish.",
            },
            {
              icon: Zap,
              title: "Factory-Quality Finish",
              desc: "Advanced refinishing techniques restore exceptional gloss, clarity and uniformity.",
            },
            {
              icon: Clock,
              title: "Lasting Durability",
              desc: "Professional paint systems deliver outstanding resistance against weathering and daily wear.",
            },
          ],
        },

        {
          id: "craftsmanship",
          label: "Our Process",

          features: [
            {
              icon: Shield,
              title: "Local & Complete Repairs",
              desc: "From minor panel repairs to complete vehicle repainting, every project receives the same meticulous attention.",
            },
            {
              icon: Droplets,
              title: "Advanced Paint Systems",
              desc: "Premium refinishing products ensure exceptional colour consistency and finish quality.",
            },
            {
              icon: Zap,
              title: "Attention to Detail",
              desc: "Every surface is refined and inspected to achieve an original factory-inspired appearance.",
            },
            {
              icon: Clock,
              title: "Seamless Results",
              desc: "The objective is simple—an immaculate finish that appears entirely original.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Refinishing Packages",

      heading: "CHOOSE YOUR REFINISHING SERVICE.",

      packages: [
        {
          name: "Panel Refresh",
          type: "Local Paint Repair",
          price: "OMR 70",
          duration: "1 Day",
          highlight: false,

          features: [
            "Single panel refinishing",
            "Precision colour matching",
            "Minor scratch & chip repair",
            "Factory-quality finish",
          ],
        },

        {
          name: "Precision Refinish",
          type: "Multi-Panel Refinishing",
          price: "OMR 180",
          duration: "2–3 Days",
          highlight: true,

          features: [
            "Multiple panel refinishing",
            "Advanced paint preparation",
            "Manufacturer colour matching",
            "High-gloss finish",
          ],
        },

        {
          name: "Signature Carrozzeria",
          type: "Complete Vehicle Repaint",
          price: "OMR 650",
          duration: "5–7 Days",
          highlight: false,

          features: [
            "Complete vehicle repaint",
            "Premium paint system",
            "Factory-standard refinishing",
            "Exceptional gloss & durability",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Refinishing Process",

      heading: "CRAFTED TO FACTORY STANDARDS.",

      process: [
        {
          step: "01",
          title: "Vehicle Assessment",
          desc: "Every panel is inspected to determine repair requirements and colour specifications.",
        },
        {
          step: "02",
          title: "Surface Preparation",
          desc: "Damaged areas are repaired, sanded and carefully prepared before refinishing begins.",
        },
        {
          step: "03",
          title: "Colour Matching",
          desc: "Paint is mixed and matched precisely to manufacturer colour standards.",
        },
        {
          step: "04",
          title: "Paint Application",
          desc: "Professional refinishing techniques ensure a smooth, uniform and flawless finish.",
        },
        {
          step: "05",
          title: "Final Finishing",
          desc: "The surface is polished, refined and inspected to deliver an immaculate factory-quality appearance.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Refinishing Results",

      heading: "A FINISH THAT LOOKS ORIGINAL.",

      images: [
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "RESTORE YOUR VEHICLE'S ORIGINAL FINISH.",

      description:
        "Book a consultation with our refinishing specialists and experience precision colour matching, exceptional craftsmanship and a flawless factory-quality finish.",

      buttonText: "Book a Consultation",

      buttonLink: "/contact",

      phone: "+080-77976595",
    },
  },
  {
    slug: "car-body-kits",
    href: "/services/car-body-kits",

    name: "CAR BODY KITS",
    breadcrumb: "Services / Car Body Kits",

    title: "CUSTOM BODY",
    highlight: "STYLING.",
    description:
      "Automotive individuality should complement exceptional design. Our bespoke body styling solutions integrate aerodynamic components, carbon fibre enhancements and exterior modifications with factory-level precision.",

    image: "/banner/body kits.png",
    whatIsIt: {
      subtitle: "Designo",
      heading: "STYLE WITH PRECISION. PERFORMANCE WITH PURPOSE.",
      tabs: [
        {
          id: "body-styling",
          label: "Custom Styling",
          features: [
            {
              icon: Shield,
              title: "Aerodynamic Components",
              desc: "Carefully selected splitters, diffusers, spoilers and aerodynamic enhancements designed for seamless integration.",
            },
            {
              icon: Droplets,
              title: "Carbon Fibre Enhancements",
              desc: "Premium carbon fibre components installed with exceptional attention to fitment and finish.",
            },
            {
              icon: Zap,
              title: "Bespoke Exterior Modifications",
              desc: "Tailored styling packages created to reflect the individuality of your vehicle.",
            },
            {
              icon: Clock,
              title: "Factory-Level Precision",
              desc: "Every component is aligned and installed to exacting standards for an original-equipment appearance.",
            },
          ],
        },
        {
          id: "craftsmanship",
          label: "Installation Quality",
          features: [
            {
              icon: Shield,
              title: "Precision Alignment",
              desc: "Panels, lips and extensions are fitted with meticulous attention to proportion and symmetry.",
            },
            {
              icon: Droplets,
              title: "Integrated Design",
              desc: "Modifications are selected to complement the vehicle's original design language.",
            },
            {
              icon: Zap,
              title: "Premium Finishing",
              desc: "Every installation is refined to achieve a cohesive, factory-inspired result.",
            },
            {
              icon: Clock,
              title: "Attention to Detail",
              desc: "From mounting hardware to panel gaps, every detail is carefully inspected before delivery.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Styling Packages",
      heading: "CHOOSE YOUR DESIGNO PACKAGE.",
      packages: [
        {
          name: "Essential Aero",
          type: "Exterior Enhancement",
          price: "OMR 150",
          duration: "1 Day",
          highlight: false,
          features: [
            "Front lip installation",
            "Rear spoiler installation",
            "Precision alignment",
            "Factory-style fitment",
          ],
        },
        {
          name: "Performance Design",
          type: "Carbon Fibre Package",
          price: "OMR 350",
          duration: "2 Days",
          highlight: true,
          features: [
            "Carbon fibre splitters",
            "Side skirt enhancements",
            "Rear diffuser installation",
            "Premium finishing",
          ],
        },
        {
          name: "Signature Designo",
          type: "Complete Body Styling",
          price: "OMR 750",
          duration: "3–5 Days",
          highlight: false,
          features: [
            "Complete body styling package",
            "Carbon fibre enhancements",
            "Bespoke exterior modifications",
            "Factory-level integration",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Styling Process",
      heading: "DESIGNED WITH ABSOLUTE PRECISION.",
      process: [
        {
          step: "01",
          title: "Design Consultation",
          desc: "We discuss styling objectives, component selection and the overall aesthetic direction of the vehicle.",
        },
        {
          step: "02",
          title: "Fitment Planning",
          desc: "Every component is measured and prepared to ensure precise integration with the vehicle.",
        },
        {
          step: "03",
          title: "Professional Installation",
          desc: "Aerodynamic and carbon fibre components are installed using factory-level fitting techniques.",
        },
        {
          step: "04",
          title: "Alignment & Refinement",
          desc: "Panel gaps, proportions and alignment are carefully adjusted for a seamless appearance.",
        },
        {
          step: "05",
          title: "Final Inspection",
          desc: "Every detail is inspected to ensure exceptional fitment, finish and visual balance.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Designo Results",
      heading: "INDIVIDUALITY CRAFTED TO PERFECTION.",

      images: [
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "TRANSFORM YOUR VEHICLE'S PRESENCE.",
      description:
        "Book a consultation with our styling specialists and discover a bespoke body styling solution tailored to your vehicle.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      phone: "+080-77976595",
    },
  },
  {
    slug: "exhaust",
    href: "/services/exhaust",

    name: "EXHAUST",
    breadcrumb: "Services / Exhaust",

    title: "PERFORMANCE",
    highlight: "ENGINEERED.",

    description:
      "Performance is measured as much by refinement as by power. Our engineering solutions deliver enhanced responsiveness, precision and driving enjoyment without compromising everyday reliability.",

    image: "/banner/exhaust.png",
    whatIsIt: {
      subtitle: "Prestazioni",

      heading: "ENGINEERED FOR POWER. REFINED FOR EVERYDAY.",

      tabs: [
        {
          id: "performance",
          label: "Performance Engineering",

          features: [
            {
              icon: Shield,
              title: "ECU Calibration",
              desc: "Precision engine mapping improves power delivery, throttle response and overall driving performance.",
            },
            {
              icon: Droplets,
              title: "Premium Exhaust Systems",
              desc: "Performance exhaust upgrades enhance airflow while delivering a refined and distinctive exhaust note.",
            },
            {
              icon: Zap,
              title: "Intake Upgrades",
              desc: "High-performance intake systems improve engine breathing for increased efficiency and responsiveness.",
            },
            {
              icon: Clock,
              title: "Reliable Performance",
              desc: "Every enhancement is engineered to maintain long-term reliability and everyday usability.",
            },
          ],
        },

        {
          id: "engineering",
          label: "Engineering Solutions",

          features: [
            {
              icon: Shield,
              title: "Tailored Upgrades",
              desc: "Performance solutions are carefully selected to suit each vehicle and driving style.",
            },
            {
              icon: Droplets,
              title: "Balanced Performance",
              desc: "Every modification is designed to enhance performance without sacrificing refinement.",
            },
            {
              icon: Zap,
              title: "Professional Installation",
              desc: "Components are installed and calibrated with exceptional technical precision.",
            },
            {
              icon: Clock,
              title: "Everyday Usability",
              desc: "Performance gains are delivered while preserving comfort, drivability and dependability.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Performance Packages",

      heading: "CHOOSE YOUR PERFORMANCE UPGRADE.",

      packages: [
        {
          name: "Essential Performance",
          type: "ECU Optimization",
          price: "OMR 180",
          duration: "1 Day",
          highlight: false,

          features: [
            "ECU calibration",
            "Improved throttle response",
            "Performance diagnostics",
            "Professional tuning",
          ],
        },

        {
          name: "Performance Plus",
          type: "Exhaust & Intake",
          price: "OMR 450",
          duration: "2 Days",
          highlight: true,

          features: [
            "Premium exhaust system",
            "Performance air intake",
            "ECU optimization",
            "Enhanced engine response",
          ],
        },

        {
          name: "Signature Prestazioni",
          type: "Complete Performance Package",
          price: "OMR 850",
          duration: "3–4 Days",
          highlight: false,

          features: [
            "Custom ECU calibration",
            "Performance exhaust",
            "Premium intake upgrade",
            "Complete performance tuning",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Engineering Process",

      heading: "PRECISION IN EVERY MODIFICATION.",

      process: [
        {
          step: "01",
          title: "Vehicle Assessment",
          desc: "We evaluate the vehicle's condition, performance goals and compatibility before recommending upgrades.",
        },
        {
          step: "02",
          title: "Performance Planning",
          desc: "Suitable ECU mapping, exhaust and intake solutions are selected for balanced performance.",
        },
        {
          step: "03",
          title: "Professional Installation",
          desc: "All components are installed using manufacturer-approved procedures and precision engineering techniques.",
        },
        {
          step: "04",
          title: "Calibration & Testing",
          desc: "Engine systems are calibrated and tested to ensure optimal power delivery and smooth operation.",
        },
        {
          step: "05",
          title: "Quality Verification",
          desc: "Every upgrade undergoes comprehensive inspection and road testing before vehicle delivery.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Performance Results",

      heading: "POWER. PRECISION. REFINEMENT.",

      images: [
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "UNLOCK YOUR VEHICLE'S TRUE PERFORMANCE.",

      description:
        "Book a consultation with our performance specialists and discover bespoke engineering solutions tailored to your vehicle and driving style.",

      buttonText: "Book a Consultation",

      buttonLink: "/contact",

      phone: "+080-77976595",
    },
  },
  {
    slug: "tuning-mapping",
    href: "/services/tuning-mapping",

    name: "TUNING & MAPPING",
    breadcrumb: "Services / Tuning & Mapping",

    title: "LA",
    highlight: "BOUTIQUE.",

    description:
      "Our boutique reflects the same standards as our workshop, offering a carefully curated collection of premium detailing products, maintenance solutions and automotive accessories.",

    image: "/banner/mapping.png",
    whatIsIt: {
      subtitle: "La Boutique",

      heading: "PREMIUM PRODUCTS. PROFESSIONAL RESULTS.",

      tabs: [
        {
          id: "detailing",
          label: "Detailing Products",

          features: [
            {
              icon: Shield,
              title: "Professional Grade Products",
              desc: "Only detailing products trusted and used within our own studio become part of our collection.",
            },
            {
              icon: Droplets,
              title: "Maintenance Solutions",
              desc: "Premium shampoos, cleaners and protection products designed to preserve your vehicle between visits.",
            },
            {
              icon: Zap,
              title: "Paint & Surface Care",
              desc: "Specialist maintenance products that help maintain gloss, protection and showroom-quality finishes.",
            },
            {
              icon: Clock,
              title: "Trusted Performance",
              desc: "Every product is selected for long-lasting performance and exceptional quality.",
            },
          ],
        },

        {
          id: "accessories",
          label: "Premium Accessories",

          features: [
            {
              icon: Shield,
              title: "Curated Collection",
              desc: "A carefully selected range of premium automotive accessories for discerning enthusiasts.",
            },
            {
              icon: Droplets,
              title: "Studio Approved",
              desc: "Every accessory is tested and approved by our detailing professionals.",
            },
            {
              icon: Zap,
              title: "Quality Materials",
              desc: "Premium craftsmanship ensures durability, functionality and elegant design.",
            },
            {
              icon: Clock,
              title: "Complete Vehicle Care",
              desc: "Everything required to maintain your vehicle to professional standards.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Collections",

      heading: "CHOOSE YOUR CARE COLLECTION.",

      packages: [
        {
          name: "Essential Care",
          type: "Maintenance Kit",
          price: "OMR 35",
          duration: "Take Home",
          highlight: false,

          features: [
            "Premium car shampoo",
            "Microfiber towel",
            "Quick detail spray",
            "Tyre dressing",
          ],
        },

        {
          name: "Studio Collection",
          type: "Professional Detailing Kit",
          price: "OMR 85",
          duration: "Take Home",
          highlight: true,

          features: [
            "Ceramic maintenance spray",
            "Interior cleaner",
            "Glass cleaner",
            "Professional applicators",
          ],
        },

        {
          name: "Signature Boutique",
          type: "Luxury Care Collection",
          price: "OMR 160",
          duration: "Take Home",
          highlight: false,

          features: [
            "Complete detailing kit",
            "Premium accessories",
            "Professional maintenance products",
            "Luxury storage case",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Our Selection",

      heading: "ONLY THE BEST MAKES THE COLLECTION.",

      process: [
        {
          step: "01",
          title: "Product Evaluation",
          desc: "Every product is tested extensively within our professional detailing studio.",
        },
        {
          step: "02",
          title: "Quality Selection",
          desc: "Only products meeting our highest standards become part of our boutique.",
        },
        {
          step: "03",
          title: "Professional Recommendation",
          desc: "We recommend products tailored to your vehicle and maintenance routine.",
        },
        {
          step: "04",
          title: "Customer Guidance",
          desc: "Our specialists explain correct application techniques for the best results.",
        },
        {
          step: "05",
          title: "Long-Term Care",
          desc: "Maintain professional-quality finishes between every visit to our studio.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Our Collection",

      heading: "PROFESSIONAL PRODUCTS. CURATED FOR ENTHUSIASTS.",

      images: [
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "DISCOVER OUR BOUTIQUE COLLECTION.",

      description:
        "Explore our range of premium detailing products, maintenance solutions and automotive accessories trusted by our own professionals.",

      buttonText: "Visit Our Boutique",

      buttonLink: "/contact",

      phone: "+080-77976595",
    },
  },
  {
    slug: "accessories",
    href: "/services/accessories",

    name: "ACCESSORIES",
    breadcrumb: "Services / Accessories",

    title: "DETTAGLI AUTO",
    highlight: "ACADEMY.",

    description:
      "Knowledge preserves craftsmanship. Our academy provides professional training in automotive detailing, protective coatings and business development for the next generation of skilled craftsmen.",

    image: "/banner/accessories.png",
    whatIsIt: {
      subtitle: "Accademia Dettagli Auto",

      heading: "LEARN. MASTER. EXCEL.",

      tabs: [
        {
          id: "technical-training",
          label: "Professional Training",

          features: [
            {
              icon: Shield,
              title: "PPF Installation",
              desc: "Comprehensive training in precision Paint Protection Film installation using professional techniques.",
            },
            {
              icon: Droplets,
              title: "Ceramic Coatings",
              desc: "Master the preparation, application and maintenance of advanced ceramic coating systems.",
            },
            {
              icon: Zap,
              title: "Paint Correction",
              desc: "Develop machine polishing skills to safely eliminate paint defects while preserving finish quality.",
            },
            {
              icon: Clock,
              title: "Interior Restoration",
              desc: "Learn specialist restoration techniques for leather, Alcantara, fabrics and premium interior materials.",
            },
          ],
        },

        {
          id: "academy",
          label: "Academy Programme",

          features: [
            {
              icon: Shield,
              title: "Since 1999",
              desc: "Built upon decades of professional detailing experience and proven workshop practices.",
            },
            {
              icon: Droplets,
              title: "Hands-On Learning",
              desc: "Practical training with real vehicles under the supervision of experienced instructors.",
            },
            {
              icon: Zap,
              title: "Business Development",
              desc: "Gain practical knowledge to establish and grow a successful detailing business.",
            },
            {
              icon: Clock,
              title: "Craftsmanship First",
              desc: "Our programmes develop skilled craftsmen—not simply technicians.",
            },
          ],
        },
      ],
    },

    packagesSection: {
      subtitle: "Training Programmes",

      heading: "CHOOSE YOUR LEARNING PATH.",

      packages: [
        {
          name: "Foundation Course",
          type: "Professional Detailing",
          price: "OMR 180",
          duration: "2 Days",
          highlight: false,

          features: [
            "Paint correction fundamentals",
            "Interior detailing",
            "Professional product knowledge",
            "Certificate of completion",
          ],
        },

        {
          name: "Professional Academy",
          type: "PPF & Ceramic Training",
          price: "OMR 450",
          duration: "5 Days",
          highlight: true,

          features: [
            "PPF installation",
            "Ceramic coating systems",
            "Machine polishing",
            "Hands-on practical training",
          ],
        },

        {
          name: "Master Craftsman",
          type: "Complete Academy Programme",
          price: "OMR 850",
          duration: "10 Days",
          highlight: false,

          features: [
            "Complete detailing curriculum",
            "Business development",
            "Advanced restoration techniques",
            "Professional certification",
          ],
        },
      ],
    },
    processSection: {
      subtitle: "Learning Journey",

      heading: "BUILDING THE NEXT GENERATION OF CRAFTSMEN.",

      process: [
        {
          step: "01",
          title: "Consultation",
          desc: "Assess your experience and recommend the most suitable training programme.",
        },
        {
          step: "02",
          title: "Theory",
          desc: "Understand detailing principles, materials and professional workshop practices.",
        },
        {
          step: "03",
          title: "Hands-On Training",
          desc: "Practice every technique on real vehicles using professional equipment.",
        },
        {
          step: "04",
          title: "Advanced Skills",
          desc: "Master specialist services including PPF, ceramic coatings and restoration.",
        },
        {
          step: "05",
          title: "Certification",
          desc: "Complete your training with practical assessment and professional certification.",
        },
      ],
    },
    gallerySection: {
      subtitle: "Academy",

      heading: "WHERE KNOWLEDGE BECOMES CRAFTSMANSHIP.",

      images: [
        "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

        "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    ctaSection: {
      title: "BEGIN YOUR PROFESSIONAL JOURNEY.",

      description:
        "Join the Dettagli Auto Academy and learn from experienced professionals through comprehensive hands-on training programmes.",

      buttonText: "Enroll Today",

      buttonLink: "/contact",

      phone: "+080-77976595",
    },
  },
];
