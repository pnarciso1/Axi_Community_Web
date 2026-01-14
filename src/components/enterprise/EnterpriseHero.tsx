'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EnterpriseHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-soft-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-accent-cyan/10 border border-accent-cyan/20"
          >
            <span className="text-sm text-accent-cyan font-medium">Enterprise Solutions</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            The Complete{' '}
            <span className="text-gradient">AI Care Team</span>
            <br />
            for Your Members
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Empower your members, reduce support costs, and drive better health outcomes with the 
            industry&apos;s first unified patient navigation platform. PeopleCare.ai integrates financial, 
            clinical, and emotional support into a single, white-label solution for your organization.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="mailto:ContactUs@peoplecare.ai?subject=Enterprise Demo Request"
              className="
                px-8 py-4
                text-base font-semibold
                bg-gradient-to-r from-accent-cyan to-accent-teal
                text-deep-indigo
                rounded-xl
                hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                transition-all duration-300
                hover:scale-105
              "
            >
              Request a Demo
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#integration"
              className="
                px-6 py-4
                text-base font-medium
                text-white/70
                hover:text-accent-cyan
                transition-colors duration-300
                flex items-center gap-2
              "
            >
              Learn about our integration options
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-accent-cyan/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
