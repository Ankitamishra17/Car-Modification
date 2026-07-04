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
    breadcrumb: "Services / PPF",

    title: "PAINT PROTECTION",
    highlight: "THAT LASTS.",

    description:
      "PPF guards your paint from stone chips, road debris and scratches.",

    image: "/banner/ppf.png",

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

    heading: "WHAT HAPPENS TO YOUR CAR?",

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
    slug: "ceramic-coating",
    href: "/services/ceramic-coating",

    name: "CERAMIC COATING",
    breadcrumb: "Services / Ceramic Coating",

    title: "CERAMIC SHINE",
    highlight: "FOREVER.",

    description:
      "Advanced ceramic coating for gloss and hydrophobic protection.",

    image: "/banner/ceramic.png",

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
    slug: "restore",
    href: "/services/restore",

    name: "RESTORE",
    breadcrumb: "Services / Restore",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/restore.png",

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
      slug: "refurbish",
      href: "/services/refurbish",
   

    name: "REFURBISH",
    breadcrumb: "Services / Refurbish",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/refurbish.png",

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

    name: "UPHOLSTERY ",
    breadcrumb: "Services / Upholstery",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/upholstery.png",
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

    name: "PAINTS",
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

    name: "CAR BODY KITS",
    breadcrumb: "Services / Car Body Kits",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/body kits.png",
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

    name: "EXHAUST",
    breadcrumb: "Services / Exhaust",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/exhaust.png",
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

    name: "TUNING & MAPPING",
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

    name: "ACCESSORIES",
    breadcrumb: "Services / Accessories",

    title: "BRING IT BACK",
    highlight: "TO LIFE.",

    description:
      "Complete restoration for classic and modern vehicles.",

    image: "/banner/accessories.png",
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