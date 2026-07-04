import React from 'react';
import { motion } from 'framer-motion';

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
              Since 2020
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

