import {
  Shield,
  Droplets,
  Zap,
  Clock,
} from "lucide-react";

export const SERVICES = [
  {
  slug: "ppf",
  href: "/services/ppf",

  name: "PPF",
  breadcrumb: "Services / Paint Protection Film",

  title: "PAINT PROTECTION",
  highlight: "REDEFINED.",

  description:
    "True protection should never be seen. Our Paint Protection Film creates an almost invisible shield that preserves your vehicle's finish against everyday damage while maintaining flawless clarity.",

  image: "/banner/ppf.png",

  whatIsIt: {
    subtitle: "Invisible Protection",
    heading: "ENGINEERED TO PRESERVE EVERY DETAIL.",

    tabs: [
      {
        id: "ppf",
        label: "Paint Protection Film",

        features: [
          {
            icon: Shield,
            title: "Virtually Invisible Protection",
            desc: "An ultra-clear protective film that preserves your vehicle's original paint without altering its appearance.",
          },
          {
            icon: Zap,
            title: "Stone Chip & Debris Resistance",
            desc: "Protects against stone chips, road debris, surface abrasions, and daily driving hazards.",
          },
          {
            icon: Droplets,
            title: "Self-Healing & Hydrophobic",
            desc: "Heat-activated self-healing technology removes light scratches while the hydrophobic surface repels water and contaminants.",
          },
          {
            icon: Clock,
            title: "Long-Term Paint Preservation",
            desc: "Provides lasting protection against UV exposure, environmental contamination, and paint deterioration.",
          },
        ],
      },

      {
        id: "craftsmanship",
        label: "Precision Installation",

        features: [
          {
            icon: Shield,
            title: "Precision-Cut Film",
            desc: "Every film is digitally precision-cut for an accurate fit with minimal trimming.",
          },
          {
            icon: Droplets,
            title: "Hand-Finished Detailing",
            desc: "Each edge is carefully wrapped and hand-finished by certified technicians.",
          },
          {
            icon: Zap,
            title: "Factory Finish Preservation",
            desc: "Maintains exceptional optical clarity while protecting the originality of your factory paint.",
          },
          {
            icon: Clock,
            title: "Certified Installation",
            desc: "Installed with meticulous attention to detail for a seamless, premium finish.",
          },
        ],
      },
    ],
  },

  packagesSection: {
    subtitle: "Protection Packages",

    heading: "SELECT THE RIGHT LEVEL OF COVERAGE.",

    packages: [
      {
        name: "Front Impact Protection",
        type: "Partial PPF",
        price: "₹18,000",
        duration: "1 Day",
        highlight: false,

        features: [
          "Front bumper protection",
          "Bonnet leading edge",
          "Mirror protection",
          "High-impact area coverage",
        ],
      },

      {
        name: "Complete Vehicle Protection",
        type: "Full Body PPF",
        price: "₹55,000",
        duration: "2–3 Days",
        highlight: true,

        features: [
          "Full body Paint Protection Film",
          "Self-healing technology",
          "Hydrophobic finish",
          "Long-term paint preservation",
        ],
      },
    ],
  },

  processSection: {
    subtitle: "Installation Process",

    heading: "PRECISION IN EVERY STEP.",

    process: [
      {
        step: "01",
        title: "Vehicle Assessment",
        desc: "We carefully inspect every panel to evaluate paint condition before installation.",
      },
      {
        step: "02",
        title: "Surface Preparation",
        desc: "The vehicle undergoes thorough washing, decontamination, and paint cleansing for a flawless surface.",
      },
      {
        step: "03",
        title: "Precision Film Cutting",
        desc: "PPF is digitally precision-cut to perfectly match your vehicle's contours.",
      },
      {
        step: "04",
        title: "Expert Installation",
        desc: "Certified technicians hand-install each panel with exceptional precision and edge finishing.",
      },
      {
        step: "05",
        title: "Final Inspection",
        desc: "Every installation is carefully inspected to ensure flawless alignment, clarity, and finish.",
      },
    ],
  },

  gallerySection: {
    subtitle: "Gallery",

    heading: "INVISIBLE PROTECTION. VISIBLE PERFECTION.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },

  ctaSection: {
    title: "PROTECT YOUR PAINT. PRESERVE ITS PERFECTION.",

    description:
      "Book a consultation with our certified specialists and discover the ideal Paint Protection Film solution for your vehicle.",

    buttonText: "Book a Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
},

  {
  slug: "ceramic-coating",
  href: "/services/ceramic-coating",

  name: "Ceramic Coating",
  breadcrumb: "Services / Ceramic Coating",

  title: "CERAMIC PROTECTION",
  highlight: "PERFECTED.",

  description:
    "A ceramic coating should enhance rather than conceal. Our advanced ceramic protection systems intensify gloss, enrich colour depth, and provide long-lasting protection against everyday elements.",

  image: "/banner/ceramic.png",

  whatIsIt: {
    subtitle: "Advanced Protection",
    heading: "ENGINEERED FOR LASTING BRILLIANCE.",

    tabs: [
      {
        id: "ceramic",
        label: "Ceramic Coating",

        features: [
          {
            icon: Shield,
            title: "Advanced Molecular Barrier",
            desc: "Creates an invisible protective layer that shields paint against oxidation, UV rays, and environmental contaminants.",
          },
          {
            icon: Droplets,
            title: "Hydrophobic Performance",
            desc: "Water, dirt, and road grime effortlessly slide away, making maintenance significantly easier.",
          },
          {
            icon: Zap,
            title: "Enhanced Gloss & Colour Depth",
            desc: "Intensifies paint clarity, richness, and depth for a refined, showroom-quality finish.",
          },
          {
            icon: Clock,
            title: "Long-Term Protection",
            desc: "Professional ceramic technology designed to preserve your vehicle's appearance for years.",
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
            desc: "Protection extends beyond paint to wheels, glass, leather, dashboard components, and interior trims.",
          },
          {
            icon: Droplets,
            title: "Chemical & UV Resistance",
            desc: "Defends against harsh chemicals, oxidation, UV exposure, and environmental fallout.",
          },
          {
            icon: Zap,
            title: "Tailored Application",
            desc: "Every ceramic coating is selected and applied according to your vehicle and driving lifestyle.",
          },
          {
            icon: Clock,
            title: "Effortless Maintenance",
            desc: "Keeps your vehicle cleaner for longer while reducing washing time and preserving its finish.",
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
        type: "Paint Protection",
        price: "₹18,000",
        duration: "1 Day",
        highlight: false,

        features: [
          "Exterior ceramic coating",
          "Enhanced gloss finish",
          "Hydrophobic protection",
          "Paint surface protection",
        ],
      },

      {
        name: "Complete Ceramic Care",
        type: "Full Vehicle Protection",
        price: "₹55,000",
        duration: "2 Days",
        highlight: true,

        features: [
          "Paint ceramic coating",
          "Wheel & glass protection",
          "Leather & interior treatment",
          "Complete vehicle preservation",
        ],
      },
    ],
  },

  processSection: {
    subtitle: "Application Process",

    heading: "CRAFTED FOR A PERFECT FINISH.",

    process: [
      {
        step: "01",
        title: "Vehicle Inspection",
        desc: "Every surface is carefully assessed to determine the preparation required before coating.",
      },
      {
        step: "02",
        title: "Surface Preparation",
        desc: "The vehicle undergoes a complete wash, decontamination, and paint cleansing process.",
      },
      {
        step: "03",
        title: "Paint Refinement",
        desc: "Paint imperfections are corrected to ensure maximum bonding and exceptional gloss.",
      },
      {
        step: "04",
        title: "Ceramic Application",
        desc: "Our ceramic coating is carefully applied panel by panel with meticulous attention to detail.",
      },
      {
        step: "05",
        title: "Curing & Final Inspection",
        desc: "The coating is allowed to cure before a comprehensive quality inspection ensures a flawless finish.",
      },
    ],
  },

  gallerySection: {
    subtitle: "Gallery",

    heading: "EXCEPTIONAL GLOSS. LASTING PROTECTION.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },

  ctaSection: {
    title: "EXPERIENCE LASTING BRILLIANCE.",

    description:
      "Book a consultation with our specialists to discover the ideal ceramic coating solution tailored to your vehicle and lifestyle.",

    buttonText: "Book a Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
},
  {
  slug: "restore",
  href: "/services/restore",

  name: "Restore",
  breadcrumb: "Services / Vehicle Restoration",

  title: "VEHICLE RESTORATION",
  highlight: "REIMAGINED.",

  description:
    "Every automobile carries its own history. Our restoration programme revives ageing and neglected vehicles while preserving their originality, craftsmanship, and timeless character.",

  image: "/banner/restore.jpg",

  whatIsIt: {
    subtitle: "Craftsmanship",
    heading: "RESTORING HISTORY. PRESERVING ORIGINALITY.",

    tabs: [
      {
        id: "restoration",
        label: "Vehicle Restoration",

        features: [
          {
            icon: Shield,
            title: "Comprehensive Restoration",
            desc: "Complete restoration services designed to return your vehicle to its finest condition.",
          },
          {
            icon: Droplets,
            title: "Paint Restoration",
            desc: "Revives faded finishes, removes imperfections, and restores the original brilliance of your paintwork.",
          },
          {
            icon: Zap,
            title: "Interior Refurbishment",
            desc: "Leather, upholstery, trims, and cabin components are restored with exceptional attention to detail.",
          },
          {
            icon: Clock,
            title: "Authentic Preservation",
            desc: "Every restoration respects the vehicle's original design, heritage, and engineering.",
          },
        ],
      },

      {
        id: "craftsmanship",
        label: "Our Approach",

        features: [
          {
            icon: Shield,
            title: "Individual Assessment",
            desc: "Every restoration project begins with a detailed evaluation tailored to the vehicle's condition.",
          },
          {
            icon: Droplets,
            title: "Trim & Surface Renewal",
            desc: "Exterior trims, chrome, plastics, and detailing elements are carefully renewed.",
          },
          {
            icon: Zap,
            title: "Protective Finishing",
            desc: "Restored surfaces receive professional protection to preserve their appearance for years to come.",
          },
          {
            icon: Clock,
            title: "Respect for Heritage",
            desc: "Our objective is never to alter the character of the automobile—but to reveal it once again.",
          },
        ],
      },
    ],
  },

  packagesSection: {
    subtitle: "Restoration Packages",

    heading: "CHOOSE THE RIGHT RESTORATION PROGRAMME.",

    packages: [
      {
        name: "Essential Revival",
        type: "Exterior Restoration",
        price: "₹18,000",
        duration: "1–2 Days",
        highlight: false,

        features: [
          "Paint restoration",
          "Trim rejuvenation",
          "Exterior detailing",
          "Protective finish",
        ],
      },

      {
        name: "Complete Heritage",
        type: "Full Vehicle Restoration",
        price: "₹55,000",
        duration: "3–5 Days",
        highlight: true,

        features: [
          "Complete paint restoration",
          "Interior refurbishment",
          "Trim & surface renewal",
          "Premium protective treatments",
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
        title: "Detailed Assessment",
        desc: "We inspect every aspect of the vehicle to understand its condition and restoration requirements.",
      },
      {
        step: "02",
        title: "Preparation",
        desc: "The vehicle is thoroughly cleaned, decontaminated, and prepared for restoration work.",
      },
      {
        step: "03",
        title: "Restoration",
        desc: "Paint, trim, interior surfaces, and detailing elements are meticulously restored.",
      },
      {
        step: "04",
        title: "Refinement",
        desc: "Every component is carefully refined to achieve a cohesive, factory-inspired finish.",
      },
      {
        step: "05",
        title: "Final Preservation",
        desc: "Protective treatments are applied before a comprehensive quality inspection ensures exceptional results.",
      },
    ],
  },

  gallerySection: {
    subtitle: "Gallery",

    heading: "REVIVING AUTOMOTIVE HERITAGE.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },

  ctaSection: {
    title: "RESTORE YOUR VEHICLE'S ORIGINAL CHARACTER.",

    description:
      "Consult with our restoration specialists and discover how we can return your automobile to a condition worthy of its heritage.",

    buttonText: "Book a Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
},
  
  {
      slug: "refurbish",
      href: "/services/refurbish",
   

    name: "Refurbish",
    breadcrumb: "Services / Refurbish",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/restore.jpg",

     whatIsIt: {
      subtitle: "What's the difference",
      heading: "PPF OR CERAMIC — OR BOTH?",

      tabs: [
        {
          id: "ppf",
          label: "Paint Protection Film",

          features: [
            {
              icon: Shield,
              title: "Self-Healing Film",
              desc: "Minor scratches and swirl marks disappear on their own under heat.",
            },
            {
              icon: Droplets,
              title: "Hydrophobic Surface",
              desc: "Water, mud, and road grime bead off instantly.",
            },
            {
              icon: Zap,
              title: "UV & Chemical Resistance",
              desc: "Blocks UV rays and resists chemicals.",
            },
            {
              icon: Clock,
              title: "10-Year Warranty",
              desc: "Backed by a decade-long manufacturer warranty.",
            },
          ],
        },

        {
          id: "ceramic",
          label: "Ceramic Coating",

          features: [
            {
              icon: Shield,
              title: "9H Hardness Rating",
              desc: "Forms a glass-hard protective layer.",
            },
            {
              icon: Droplets,
              title: "Permanent Hydrophobics",
              desc: "Repels water and dirt effortlessly.",
            },
            {
              icon: Zap,
              title: "Showroom Gloss",
              desc: "Enhances paint depth and clarity.",
            },
            {
              icon: Clock,
              title: "5-Year Protection",
              desc: "Professional protection that lasts years.",
            },
          ],
        },
      ],
    },
    
  packagesSection: {
    subtitle: "Pricing",

    heading:
      "CHOOSE YOUR LEVEL OF PROTECTION.",

    packages: [
      {
        name: "Essential Shield",
        type: "Ceramic Coating",
        price: "₹18,000",
        duration: "1 Day",
        highlight: false,

        features: [
          "Full exterior paint coating",
          "1-year warranty",
          "Hydrophobic treatment",
        ],
      },

      {
        name: "Guard Pro",
        type: "PPF + Ceramic",
        price: "₹55,000",
        duration: "2-3 Days",
        highlight: true,

        features: [
          "Partial PPF",
          "Full ceramic coating",
          "5-year warranty",
        ],
      },
    ],
  },
   processSection: {
    subtitle: "How it works",

    heading: "WHAT HAPPENS TO YOUR CAR.",

    process: [
      {
        step: "01",
        title: "Inspection",
        desc: "We examine every panel under lighting to document existing damage before we touch the car."
      },
      {
        step: "02",
        title: "Decontamination",
        desc: "Clay bar, iron fallout removal, and a full paint decontamination wash."
      },
      {
        step: "03",
        title: "Paint Correction",
        desc: "Swirls and scratches are polished out so the protective layer bonds to a perfect surface."
      },
      {
        step: "04",
        title: "Application",
        desc: "Film or coating is applied in our climate-controlled studio, panel by panel."
      },
      {
        step: "05",
        title: "Curing & QC",
        desc: "The car cures fully before a final quality inspection under LED lighting."
      }
    ]
  },
   gallerySection: {
    subtitle: "Results",

    heading: "BEFORE & AFTER THE STUDIO.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  ctaSection: {
    title: "READY TO PROTECT YOUR PAINT?",

    description:
      "Book a free consultation — we'll inspect your car and recommend the right package.",

    buttonText: "Book Free Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
  },
  {
    slug: "upholstery",
    href: "/services/upholstery",

    name: "Upholstery ",
    breadcrumb: "Services / Upholstery",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/restore.jpg",
     whatIsIt: {
      subtitle: "What's the difference",
      heading: "PPF OR CERAMIC — OR BOTH?",

      tabs: [
        {
          id: "ppf",
          label: "Paint Protection Film",

          features: [
            {
              icon: Shield,
              title: "Self-Healing Film",
              desc: "Minor scratches and swirl marks disappear on their own under heat.",
            },
            {
              icon: Droplets,
              title: "Hydrophobic Surface",
              desc: "Water, mud, and road grime bead off instantly.",
            },
            {
              icon: Zap,
              title: "UV & Chemical Resistance",
              desc: "Blocks UV rays and resists chemicals.",
            },
            {
              icon: Clock,
              title: "10-Year Warranty",
              desc: "Backed by a decade-long manufacturer warranty.",
            },
          ],
        },

        {
          id: "ceramic",
          label: "Ceramic Coating",

          features: [
            {
              icon: Shield,
              title: "9H Hardness Rating",
              desc: "Forms a glass-hard protective layer.",
            },
            {
              icon: Droplets,
              title: "Permanent Hydrophobics",
              desc: "Repels water and dirt effortlessly.",
            },
            {
              icon: Zap,
              title: "Showroom Gloss",
              desc: "Enhances paint depth and clarity.",
            },
            {
              icon: Clock,
              title: "5-Year Protection",
              desc: "Professional protection that lasts years.",
            },
          ],
        },
      ],
    },
    
  packagesSection: {
    subtitle: "Pricing",

    heading:
      "CHOOSE YOUR LEVEL OF PROTECTION.",

    packages: [
      {
        name: "Essential Shield",
        type: "Ceramic Coating",
        price: "₹18,000",
        duration: "1 Day",
        highlight: false,

        features: [
          "Full exterior paint coating",
          "1-year warranty",
          "Hydrophobic treatment",
        ],
      },

      {
        name: "Guard Pro",
        type: "PPF + Ceramic",
        price: "₹55,000",
        duration: "2-3 Days",
        highlight: true,

        features: [
          "Partial PPF",
          "Full ceramic coating",
          "5-year warranty",
        ],
      },
    ],
  },
   processSection: {
    subtitle: "How it works",

    heading: "WHAT HAPPENS TO YOUR CAR.",

    process: [
      {
        step: "01",
        title: "Inspection",
        desc: "We examine every panel under lighting to document existing damage before we touch the car."
      },
      {
        step: "02",
        title: "Decontamination",
        desc: "Clay bar, iron fallout removal, and a full paint decontamination wash."
      },
      {
        step: "03",
        title: "Paint Correction",
        desc: "Swirls and scratches are polished out so the protective layer bonds to a perfect surface."
      },
      {
        step: "04",
        title: "Application",
        desc: "Film or coating is applied in our climate-controlled studio, panel by panel."
      },
      {
        step: "05",
        title: "Curing & QC",
        desc: "The car cures fully before a final quality inspection under LED lighting."
      }
    ]
  },
   gallerySection: {
    subtitle: "Results",

    heading: "BEFORE & AFTER THE STUDIO.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  ctaSection: {
    title: "READY TO PROTECT YOUR PAINT?",

    description:
      "Book a free consultation — we'll inspect your car and recommend the right package.",

    buttonText: "Book Free Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
  },
  {
    slug: "paints",
    href: "/services/paints",

    name: "Paints",
    breadcrumb: "Services / Paints",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/paint.png",
     whatIsIt: {
      subtitle: "What's the difference",
      heading: "PPF OR CERAMIC — OR BOTH?",

      tabs: [
        {
          id: "ppf",
          label: "Paint Protection Film",

          features: [
            {
              icon: Shield,
              title: "Self-Healing Film",
              desc: "Minor scratches and swirl marks disappear on their own under heat.",
            },
            {
              icon: Droplets,
              title: "Hydrophobic Surface",
              desc: "Water, mud, and road grime bead off instantly.",
            },
            {
              icon: Zap,
              title: "UV & Chemical Resistance",
              desc: "Blocks UV rays and resists chemicals.",
            },
            {
              icon: Clock,
              title: "10-Year Warranty",
              desc: "Backed by a decade-long manufacturer warranty.",
            },
          ],
        },

        {
          id: "ceramic",
          label: "Ceramic Coating",

          features: [
            {
              icon: Shield,
              title: "9H Hardness Rating",
              desc: "Forms a glass-hard protective layer.",
            },
            {
              icon: Droplets,
              title: "Permanent Hydrophobics",
              desc: "Repels water and dirt effortlessly.",
            },
            {
              icon: Zap,
              title: "Showroom Gloss",
              desc: "Enhances paint depth and clarity.",
            },
            {
              icon: Clock,
              title: "5-Year Protection",
              desc: "Professional protection that lasts years.",
            },
          ],
        },
      ],
    },
    
  packagesSection: {
    subtitle: "Pricing",

    heading:
      "CHOOSE YOUR LEVEL OF PROTECTION.",

    packages: [
      {
        name: "Essential Shield",
        type: "Ceramic Coating",
        price: "₹18,000",
        duration: "1 Day",
        highlight: false,

        features: [
          "Full exterior paint coating",
          "1-year warranty",
          "Hydrophobic treatment",
        ],
      },

      {
        name: "Guard Pro",
        type: "PPF + Ceramic",
        price: "₹55,000",
        duration: "2-3 Days",
        highlight: true,

        features: [
          "Partial PPF",
          "Full ceramic coating",
          "5-year warranty",
        ],
      },
    ],
  },
   processSection: {
    subtitle: "How it works",

    heading: "WHAT HAPPENS TO YOUR CAR.",

    process: [
      {
        step: "01",
        title: "Inspection",
        desc: "We examine every panel under lighting to document existing damage before we touch the car."
      },
      {
        step: "02",
        title: "Decontamination",
        desc: "Clay bar, iron fallout removal, and a full paint decontamination wash."
      },
      {
        step: "03",
        title: "Paint Correction",
        desc: "Swirls and scratches are polished out so the protective layer bonds to a perfect surface."
      },
      {
        step: "04",
        title: "Application",
        desc: "Film or coating is applied in our climate-controlled studio, panel by panel."
      },
      {
        step: "05",
        title: "Curing & QC",
        desc: "The car cures fully before a final quality inspection under LED lighting."
      }
    ]
  },
   gallerySection: {
    subtitle: "Results",

    heading: "BEFORE & AFTER THE STUDIO.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  ctaSection: {
    title: "READY TO PROTECT YOUR PAINT?",

    description:
      "Book a free consultation — we'll inspect your car and recommend the right package.",

    buttonText: "Book Free Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
  },
  {
    slug: "car-body-kits",
    href: "/services/car-body-kits",

    name: "Car Body Kits",
    breadcrumb: "Services / Car Body Kits",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/restore.jpg",
     whatIsIt: {
      subtitle: "What's the difference",
      heading: "PPF OR CERAMIC — OR BOTH?",

      tabs: [
        {
          id: "ppf",
          label: "Paint Protection Film",

          features: [
            {
              icon: Shield,
              title: "Self-Healing Film",
              desc: "Minor scratches and swirl marks disappear on their own under heat.",
            },
            {
              icon: Droplets,
              title: "Hydrophobic Surface",
              desc: "Water, mud, and road grime bead off instantly.",
            },
            {
              icon: Zap,
              title: "UV & Chemical Resistance",
              desc: "Blocks UV rays and resists chemicals.",
            },
            {
              icon: Clock,
              title: "10-Year Warranty",
              desc: "Backed by a decade-long manufacturer warranty.",
            },
          ],
        },

        {
          id: "ceramic",
          label: "Ceramic Coating",

          features: [
            {
              icon: Shield,
              title: "9H Hardness Rating",
              desc: "Forms a glass-hard protective layer.",
            },
            {
              icon: Droplets,
              title: "Permanent Hydrophobics",
              desc: "Repels water and dirt effortlessly.",
            },
            {
              icon: Zap,
              title: "Showroom Gloss",
              desc: "Enhances paint depth and clarity.",
            },
            {
              icon: Clock,
              title: "5-Year Protection",
              desc: "Professional protection that lasts years.",
            },
          ],
        },
      ],
    },
    
  packagesSection: {
    subtitle: "Pricing",

    heading:
      "CHOOSE YOUR LEVEL OF PROTECTION.",

    packages: [
      {
        name: "Essential Shield",
        type: "Ceramic Coating",
        price: "₹18,000",
        duration: "1 Day",
        highlight: false,

        features: [
          "Full exterior paint coating",
          "1-year warranty",
          "Hydrophobic treatment",
        ],
      },

      {
        name: "Guard Pro",
        type: "PPF + Ceramic",
        price: "₹55,000",
        duration: "2-3 Days",
        highlight: true,

        features: [
          "Partial PPF",
          "Full ceramic coating",
          "5-year warranty",
        ],
      },
    ],
  },
   processSection: {
    subtitle: "How it works",

    heading: "WHAT HAPPENS TO YOUR CAR.",

    process: [
      {
        step: "01",
        title: "Inspection",
        desc: "We examine every panel under lighting to document existing damage before we touch the car."
      },
      {
        step: "02",
        title: "Decontamination",
        desc: "Clay bar, iron fallout removal, and a full paint decontamination wash."
      },
      {
        step: "03",
        title: "Paint Correction",
        desc: "Swirls and scratches are polished out so the protective layer bonds to a perfect surface."
      },
      {
        step: "04",
        title: "Application",
        desc: "Film or coating is applied in our climate-controlled studio, panel by panel."
      },
      {
        step: "05",
        title: "Curing & QC",
        desc: "The car cures fully before a final quality inspection under LED lighting."
      }
    ]
  },
   gallerySection: {
    subtitle: "Results",

    heading: "BEFORE & AFTER THE STUDIO.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  ctaSection: {
    title: "READY TO PROTECT YOUR PAINT?",

    description:
      "Book a free consultation — we'll inspect your car and recommend the right package.",

    buttonText: "Book Free Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
  },
  {
    slug: "exhaust",
    href: "/services/exhaust",

    name: "Exhaust",
    breadcrumb: "Services / Exhaust",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/restore.jpg",
     whatIsIt: {
      subtitle: "What's the difference",
      heading: "PPF OR CERAMIC — OR BOTH?",

      tabs: [
        {
          id: "ppf",
          label: "Paint Protection Film",

          features: [
            {
              icon: Shield,
              title: "Self-Healing Film",
              desc: "Minor scratches and swirl marks disappear on their own under heat.",
            },
            {
              icon: Droplets,
              title: "Hydrophobic Surface",
              desc: "Water, mud, and road grime bead off instantly.",
            },
            {
              icon: Zap,
              title: "UV & Chemical Resistance",
              desc: "Blocks UV rays and resists chemicals.",
            },
            {
              icon: Clock,
              title: "10-Year Warranty",
              desc: "Backed by a decade-long manufacturer warranty.",
            },
          ],
        },

        {
          id: "ceramic",
          label: "Ceramic Coating",

          features: [
            {
              icon: Shield,
              title: "9H Hardness Rating",
              desc: "Forms a glass-hard protective layer.",
            },
            {
              icon: Droplets,
              title: "Permanent Hydrophobics",
              desc: "Repels water and dirt effortlessly.",
            },
            {
              icon: Zap,
              title: "Showroom Gloss",
              desc: "Enhances paint depth and clarity.",
            },
            {
              icon: Clock,
              title: "5-Year Protection",
              desc: "Professional protection that lasts years.",
            },
          ],
        },
      ],
    },
    
  packagesSection: {
    subtitle: "Pricing",

    heading:
      "CHOOSE YOUR LEVEL OF PROTECTION.",

    packages: [
      {
        name: "Essential Shield",
        type: "Ceramic Coating",
        price: "₹18,000",
        duration: "1 Day",
        highlight: false,

        features: [
          "Full exterior paint coating",
          "1-year warranty",
          "Hydrophobic treatment",
        ],
      },

      {
        name: "Guard Pro",
        type: "PPF + Ceramic",
        price: "₹55,000",
        duration: "2-3 Days",
        highlight: true,

        features: [
          "Partial PPF",
          "Full ceramic coating",
          "5-year warranty",
        ],
      },
    ],
  },
   processSection: {
    subtitle: "How it works",

    heading: "WHAT HAPPENS TO YOUR CAR.",

    process: [
      {
        step: "01",
        title: "Inspection",
        desc: "We examine every panel under lighting to document existing damage before we touch the car."
      },
      {
        step: "02",
        title: "Decontamination",
        desc: "Clay bar, iron fallout removal, and a full paint decontamination wash."
      },
      {
        step: "03",
        title: "Paint Correction",
        desc: "Swirls and scratches are polished out so the protective layer bonds to a perfect surface."
      },
      {
        step: "04",
        title: "Application",
        desc: "Film or coating is applied in our climate-controlled studio, panel by panel."
      },
      {
        step: "05",
        title: "Curing & QC",
        desc: "The car cures fully before a final quality inspection under LED lighting."
      }
    ]
  },
   gallerySection: {
    subtitle: "Results",

    heading: "BEFORE & AFTER THE STUDIO.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  ctaSection: {
    title: "READY TO PROTECT YOUR PAINT?",

    description:
      "Book a free consultation — we'll inspect your car and recommend the right package.",

    buttonText: "Book Free Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
  },
  {
    slug: "tuning-mapping",
    href: "/services/tuning-mapping",

    name: "Tuning & Mapping",
    breadcrumb: "Services / Tuning & Mapping",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/mapping.png",
     whatIsIt: {
      subtitle: "What's the difference",
      heading: "PPF OR CERAMIC — OR BOTH?",

      tabs: [
        {
          id: "ppf",
          label: "Paint Protection Film",

          features: [
            {
              icon: Shield,
              title: "Self-Healing Film",
              desc: "Minor scratches and swirl marks disappear on their own under heat.",
            },
            {
              icon: Droplets,
              title: "Hydrophobic Surface",
              desc: "Water, mud, and road grime bead off instantly.",
            },
            {
              icon: Zap,
              title: "UV & Chemical Resistance",
              desc: "Blocks UV rays and resists chemicals.",
            },
            {
              icon: Clock,
              title: "10-Year Warranty",
              desc: "Backed by a decade-long manufacturer warranty.",
            },
          ],
        },

        {
          id: "ceramic",
          label: "Ceramic Coating",

          features: [
            {
              icon: Shield,
              title: "9H Hardness Rating",
              desc: "Forms a glass-hard protective layer.",
            },
            {
              icon: Droplets,
              title: "Permanent Hydrophobics",
              desc: "Repels water and dirt effortlessly.",
            },
            {
              icon: Zap,
              title: "Showroom Gloss",
              desc: "Enhances paint depth and clarity.",
            },
            {
              icon: Clock,
              title: "5-Year Protection",
              desc: "Professional protection that lasts years.",
            },
          ],
        },
      ],
    },
    
  packagesSection: {
    subtitle: "Pricing",

    heading:
      "CHOOSE YOUR LEVEL OF PROTECTION.",

    packages: [
      {
        name: "Essential Shield",
        type: "Ceramic Coating",
        price: "₹18,000",
        duration: "1 Day",
        highlight: false,

        features: [
          "Full exterior paint coating",
          "1-year warranty",
          "Hydrophobic treatment",
        ],
      },

      {
        name: "Guard Pro",
        type: "PPF + Ceramic",
        price: "₹55,000",
        duration: "2-3 Days",
        highlight: true,

        features: [
          "Partial PPF",
          "Full ceramic coating",
          "5-year warranty",
        ],
      },
    ],
  },
   processSection: {
    subtitle: "How it works",

    heading: "WHAT HAPPENS TO YOUR CAR.",

    process: [
      {
        step: "01",
        title: "Inspection",
        desc: "We examine every panel under lighting to document existing damage before we touch the car."
      },
      {
        step: "02",
        title: "Decontamination",
        desc: "Clay bar, iron fallout removal, and a full paint decontamination wash."
      },
      {
        step: "03",
        title: "Paint Correction",
        desc: "Swirls and scratches are polished out so the protective layer bonds to a perfect surface."
      },
      {
        step: "04",
        title: "Application",
        desc: "Film or coating is applied in our climate-controlled studio, panel by panel."
      },
      {
        step: "05",
        title: "Curing & QC",
        desc: "The car cures fully before a final quality inspection under LED lighting."
      }
    ]
  },
   gallerySection: {
    subtitle: "Results",

    heading: "BEFORE & AFTER THE STUDIO.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  ctaSection: {
    title: "READY TO PROTECT YOUR PAINT?",

    description:
      "Book a free consultation — we'll inspect your car and recommend the right package.",

    buttonText: "Book Free Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
  },
  {
    slug: "accessories",
    href: "/services/accessories",

    name: "Accessories",
    breadcrumb: "Services / Accessories",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/restore.jpg",
     whatIsIt: {
      subtitle: "What's the difference",
      heading: "PPF OR CERAMIC — OR BOTH?",

      tabs: [
        {
          id: "ppf",
          label: "Paint Protection Film",

          features: [
            {
              icon: Shield,
              title: "Self-Healing Film",
              desc: "Minor scratches and swirl marks disappear on their own under heat.",
            },
            {
              icon: Droplets,
              title: "Hydrophobic Surface",
              desc: "Water, mud, and road grime bead off instantly.",
            },
            {
              icon: Zap,
              title: "UV & Chemical Resistance",
              desc: "Blocks UV rays and resists chemicals.",
            },
            {
              icon: Clock,
              title: "10-Year Warranty",
              desc: "Backed by a decade-long manufacturer warranty.",
            },
          ],
        },

        {
          id: "ceramic",
          label: "Ceramic Coating",

          features: [
            {
              icon: Shield,
              title: "9H Hardness Rating",
              desc: "Forms a glass-hard protective layer.",
            },
            {
              icon: Droplets,
              title: "Permanent Hydrophobics",
              desc: "Repels water and dirt effortlessly.",
            },
            {
              icon: Zap,
              title: "Showroom Gloss",
              desc: "Enhances paint depth and clarity.",
            },
            {
              icon: Clock,
              title: "5-Year Protection",
              desc: "Professional protection that lasts years.",
            },
          ],
        },
      ],
    },
    
  packagesSection: {
    subtitle: "Pricing",

    heading:
      "CHOOSE YOUR LEVEL OF PROTECTION.",

    packages: [
      {
        name: "Essential Shield",
        type: "Ceramic Coating",
        price: "₹18,000",
        duration: "1 Day",
        highlight: false,

        features: [
          "Full exterior paint coating",
          "1-year warranty",
          "Hydrophobic treatment",
        ],
      },

      {
        name: "Guard Pro",
        type: "PPF + Ceramic",
        price: "₹55,000",
        duration: "2-3 Days",
        highlight: true,

        features: [
          "Partial PPF",
          "Full ceramic coating",
          "5-year warranty",
        ],
      },
    ],
  },
   processSection: {
    subtitle: "How it works",

    heading: "WHAT HAPPENS TO YOUR CAR.",

    process: [
      {
        step: "01",
        title: "Inspection",
        desc: "We examine every panel under lighting to document existing damage before we touch the car."
      },
      {
        step: "02",
        title: "Decontamination",
        desc: "Clay bar, iron fallout removal, and a full paint decontamination wash."
      },
      {
        step: "03",
        title: "Paint Correction",
        desc: "Swirls and scratches are polished out so the protective layer bonds to a perfect surface."
      },
      {
        step: "04",
        title: "Application",
        desc: "Film or coating is applied in our climate-controlled studio, panel by panel."
      },
      {
        step: "05",
        title: "Curing & QC",
        desc: "The car cures fully before a final quality inspection under LED lighting."
      }
    ]
  },
   gallerySection: {
    subtitle: "Results",

    heading: "BEFORE & AFTER THE STUDIO.",

    images: [
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800",

      "https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  ctaSection: {
    title: "READY TO PROTECT YOUR PAINT?",

    description:
      "Book a free consultation — we'll inspect your car and recommend the right package.",

    buttonText: "Book Free Consultation",

    buttonLink: "/contact",

    phone: "+919876543210",
  },
  },
  
];