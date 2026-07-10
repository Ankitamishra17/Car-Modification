import { motion } from "framer-motion";
const STATS = [
  { value: "26+", label: "Years of excellence" },
  { value: "100%", label: "In-house craftsmanship" },
];


const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0B0B0B]">
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

      {/* HUD Scanner corner brackets */}
     
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end sm:justify-center px-5 sm:px-10 md:px-16 lg:px-24 pb-16 sm:pb-0">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[#FFFFFF] uppercase leading-[0.95] mb-5 sm:mb-6 text-[clamp(2.25rem,7vw,5.5rem)]"
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
            className="text-[#B8B8B8] text-[clamp(0.9rem,1.6vw,1.15rem)] leading-relaxed max-w-xl mb-8 sm:mb-10"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            From precision-cut Paint Protection Film (PPF) to complete
            restorations, bespoke body kits, and precision performance
            remapping—we redefine automotive excellence, one detail at a
            time.
          </motion.p>
        </div>
        {/* Stats */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.45 }}
  className="flex flex-wrap gap-8 sm:gap-12"
>
  {STATS.map((stat) => (
    <div key={stat.label} className="relative">
      <h3
        className="text-white text-4xl sm:text-5xl md:text-6xl leading-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {stat.value}
      </h3>

      <p
        className="mt-2 text-[#B8B8B8] text-sm sm:text-base uppercase tracking-wide"
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        {stat.label}
      </p>
    </div>
  ))}
</motion.div>
         
        </div>
      
    </section>
  );  
};

export default Hero;