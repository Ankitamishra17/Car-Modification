import React from 'react';
import { motion } from 'framer-motion';

// ===== ABOUT HERO SECTION =====
// export function AboutHero() {
//   return (
//     <section className="relative w-full bg-[#0A0A0A] pt-32 pb-20 px-5 sm:px-8 lg:px-10 overflow-hidden">
//       {/* Gradient accent top */}
//       <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
      
//       <div className="mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase mb-6" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
//             La Nostra Storia
//           </p>
          
//           <h1 className="text-5xl md:text-6xl font-light text-[#F5EBE0] mb-8 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
//             Our <span className="text-[#D4AF37] font-medium">Story</span>
//           </h1>
          
//           <p className="text-lg text-[#F5EBE0]/70 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
//             Every remarkable automobile tells a story. Our purpose is to preserve it.
//           </p>
//         </motion.div>

//         {/* Decorative line */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="mt-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
//         />
//       </div>
//     </section>
//   );
// }

// ===== FOUNDER STORY SECTION =====
// export function FounderStory() {
//   return (
//     <section className="w-full bg-[#0A0A0A] py-20 px-5 sm:px-8 lg:px-10">
//       <div className="mx-auto max-w-6xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left: Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <p className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
//               Craftsmanship Since 1999
//             </p>
            
//             <h2 className="text-4xl font-light text-[#F5EBE0]" style={{ fontFamily: "Georgia, serif" }}>
//               Founded in <span className="text-[#D4AF37]">2020</span>, Built on <span className="text-[#D4AF37]">Decades</span> of Excellence
//             </h2>

//             <div className="space-y-4 text-[#F5EBE0]/75 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
//               <p>
//                 Dettagli Auto was born from a lifelong passion for automotive craftsmanship and the pursuit of perfection. While the company itself is contemporary, its foundations were laid over two decades earlier.
//               </p>
              
//               <p>
//                 Behind the brand stands <span className="text-[#D4AF37] font-medium">Sheikh Yasir</span>, whose journey in the automotive detailing industry began in 1999. Throughout more than twenty-five years of experience across international markets, including the Middle East, he has cultivated a philosophy founded upon precision, discipline and respect for the automobile.
//               </p>
              
//               <p className="italic text-[#D4AF37]/90">
//                 "At Dettagli Auto, detailing is not regarded as a service—it is considered a craft."
//               </p>
//             </div>
//           </motion.div>

//           {/* Right: Image placeholder - replace with actual founder image */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative h-[500px] rounded-xl overflow-hidden border border-[#D4AF37]/20 bg-[#1A1A1A] flex items-center justify-center"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#0A0A0A]" />
//             <div className="relative z-10 text-center text-[#F5EBE0]/40">
//               <p className="text-sm">Founder Image</p>
//               <p className="text-xs mt-2 text-[#D4AF37]">Sheikh Yasir</p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ===== MILESTONES SECTION =====
// export function MilestoneStats() {
//   const stats = [
//     { number: '9,000+', label: 'Automobiles Detailed', subtext: 'Since 2020' },
//     { number: '25+', label: 'Years of Experience', subtext: 'Since 1999' },
//     { number: '2', label: 'Continents', subtext: 'Middle East & Asia' },
//   ];

//   return (
//     <section className="w-full bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] py-20 px-5 sm:px-8 lg:px-10">
//       <div className="mx-auto max-w-6xl">
//         {/* Top accent */}
//         <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-20" />

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={stat.number}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.15, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-center space-y-3 py-8"
//             >
//               <h3 className="text-5xl md:text-6xl font-light text-[#D4AF37]" style={{ fontFamily: "Georgia, serif" }}>
//                 {stat.number}
//               </h3>
//               <p className="text-lg text-[#F5EBE0] font-medium" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
//                 {stat.label}
//               </p>
//               <p className="text-sm text-[#F5EBE0]/50">{stat.subtext}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom accent */}
//         <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-20" />
//       </div>
//     </section>
//   );
// }

// ===== CRAFTSMANSHIP PHILOSOPHY SECTION =====
// export function CraftsmanshipPhilosophy() {
//   return (
//     <section className="w-full bg-[#0A0A0A] py-24 px-5 sm:px-8 lg:px-10 relative overflow-hidden">
//       {/* Background accent */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37] via-transparent to-transparent" />
//       </div>

//       <div className="mx-auto max-w-5xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center space-y-8"
//         >
//           <p className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
//             Our Philosophy
//           </p>

//           <h2 className="text-5xl md:text-6xl font-light text-[#F5EBE0] leading-tight" style={{ fontFamily: "Georgia, serif" }}>
//             Every vehicle entrusted to our studio is approached <span className="text-[#D4AF37]">individually</span>, without compromise or haste.
//           </h2>

//           <div className="space-y-6 pt-8">
//             <p className="text-lg text-[#F5EBE0]/75 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
//               Each surface is examined, every material understood, and every procedure executed with meticulous attention to detail. From paint correction and ceramic protection to Paint Protection Film and complete vehicle restoration, every stage reflects our commitment to excellence.
//             </p>

//             {/* Featured Italian phrase */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               viewport={{ once: true }}
//               className="pt-12 border-t border-[#D4AF37]/20 space-y-4"
//             >
//               <p className="text-5xl md:text-6xl font-light text-[#D4AF37] italic" style={{ fontFamily: "Georgia, serif" }}>
//                 L'eccellenza è nei dettagli.
//               </p>
//               <p className="text-xl text-[#F5EBE0] font-light" style={{ fontFamily: "Georgia, serif" }}>
//                 Excellence resides in the details.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// ===== VALUES SECTION =====
// export function ValuesSection() {
//   const values = [
//     {
//       title: 'Precision',
//       description: 'Every measurement, every movement, every application demands exactitude. Perfection is found in precision.'
//     },
//     {
//       title: 'Authenticity',
//       description: 'We honor the authentic character of every automobile, preserving what makes it unique while enhancing its brilliance.'
//     },
//     {
//       title: 'Respect',
//       description: 'Every vehicle carries a story. We approach each with the reverence and respect it deserves.'
//     },
//     {
//       title: 'Timelessness',
//       description: 'True luxury is not defined by trends, but by work that endures and appreciates with time.'
//     },
//   ];

//   return (
//     <section className="w-full bg-[#1A1A1A] py-20 px-5 sm:px-8 lg:px-10">
//       <div className="mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-16 text-center"
//         >
//           <p className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase mb-4" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
//             What We Stand For
//           </p>
//           <h2 className="text-4xl font-light text-[#F5EBE0]" style={{ fontFamily: "Georgia, serif" }}>
//             Our Core <span className="text-[#D4AF37]">Values</span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
//           {values.map((value, i) => (
//             <motion.div
//               key={value.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.12, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="space-y-3 pb-8 border-b border-[#D4AF37]/10"
//             >
//               <h3 className="text-2xl text-[#D4AF37] font-medium" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
//                 {value.title}
//               </h3>
//               <p className="text-[#F5EBE0]/70 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
//                 {value.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// ===== EXPERIENCE SECTION =====
export function ExperienceCallout() {
  return (
    <section className="w-full bg-[#0A0A0A] py-24 px-5 sm:px-8 lg:px-10 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#D4AF37] via-transparent to-[#D4AF37]" />

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-light text-[#F5EBE0]" style={{ fontFamily: "Georgia, serif" }}>
            We believe that <span className="text-[#D4AF37]">preserving</span> a vehicle is about more than maintaining its appearance.
          </h2>

          <p className="text-xl text-[#F5EBE0]/75 leading-relaxed max-w-3xl mx-auto pt-6" style={{ fontFamily: "Georgia, serif" }}>
            It is about safeguarding its character, protecting its value and honouring the engineering behind every automobile, whether it is a cherished daily driver, a grand tourer, a supercar or a collector's masterpiece.
          </p>

          <div className="pt-12">
            <p className="text-[#D4AF37] text-sm font-medium tracking-widest uppercase" style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}>
              Since 1999
            </p>
            <p className="text-3xl md:text-4xl font-light text-[#F5EBE0] mt-3" style={{ fontFamily: "Georgia, serif" }}>
              Because perfection is never accidental.
            </p>
            <div className="flex flex-col items-center gap-2 mt-4 text-[#F5EBE0]/70" style={{ fontFamily: "Georgia, serif" }}>
              <p>It is crafted.</p>
              <p>It is refined.</p>
              <p>It is preserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== FINAL CTA SECTION =====
export function FinalCTA() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] py-20 px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light text-[#F5EBE0]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Benvenuti a Dettagli Auto.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl text-[#F5EBE0]/75"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Welcome to Dettagli Auto.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          href="/contact"
          className="inline-block mt-8 px-8 py-4 rounded-full border border-[#D4AF37] text-[#D4AF37] text-base font-medium transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          style={{ fontFamily: "'Bai Jamjuree', sans-serif" }}
        >
          Experience Excellence
        </motion.a>
      </div>
    </section>
  );
}


// ===== MAIN ABOUT PAGE =====
export default function AboutPage() {
  return (
    <main className="w-full bg-[#0A0A0A]">
      <AboutHero />
      <FounderStory />
      <MilestoneStats />
      <CraftsmanshipPhilosophy />
      <ValuesSection />
      <ExperienceCallout />
      <FinalCTA />
    </main>
  );
}

