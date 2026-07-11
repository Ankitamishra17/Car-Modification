import { motion } from "framer-motion";

const STATS = [
  { value: "26+", label: "Years of excellence" },
  { value: "100%", label: "In-house craftsmanship" },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0B0B0B] ">
      {/* Background Image - responsive */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(max-width: 767px)" srcSet="/banner/mobile2.png" />
        <img
          src="/banner/banner.png"
          alt="Dettagli Auto - Precision Detailing"
          className="w-full h-full object-cover object-center"
        />
      </picture>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/20" />

      {/* Content */}
      <div
        className="relative z-10 min-h-screen w-full flex  flex-col items-center lg:items-start justify-start lg:justify-center text-center lg:text-left px-5 sm:px-10 md:px-16 lg:px-8 xl:px-20 pt-25 xs:pt-25 sm:pt-28 md:pt-32 lg:pt-0 pb-20
        [@media(max-width:767px)_and_(max-height:700px)]:pt-25
        [@media(max-width:767px)_and_(min-height:701px)_and_(max-height:1000px)]:pt-58
        "
      >
        <div className="max-w-3xl flex flex-col items-center lg:items-start">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6"
          >
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#FFFFFF] uppercase leading-[0.95] mb-5 sm:mb-6 md:mb-10 text-[clamp(2.25rem,7vw,5.5rem)]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            L&rsquo;arte della perfezione
            <br />
            su ogni dettaglio
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#B8B8B8] text-[clamp(0.9rem,1.6vw,1.15rem)] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-10 md:mb-14"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            From precision-cut Paint Protection Film (PPF) to complete
            restorations, bespoke body kits, and precision performance
            remapping—we redefine automotive excellence, one detail at a
            time.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-nowrap justify-center lg:justify-start gap-6 sm:gap-12 w-full"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="relative text-center lg:text-left shrink-0">
                <h3
                  className="text-white text-3xl sm:text-5xl md:text-6xl leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {stat.value}
                </h3>

                <p
                  className="mt-2 text-[#B8B8B8] text-xs sm:text-base uppercase tracking-wide whitespace-nowrap"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;