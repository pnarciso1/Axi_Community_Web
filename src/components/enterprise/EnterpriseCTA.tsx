'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EnterpriseCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform{' '}
            <span className="text-gradient">Your Member Experience?</span>
          </h2>

          {/* Body */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            See how the PeopleCare.ai unified platform can help you reduce costs, increase retention, 
            and deliver a world-class healthcare experience. Schedule a personalized demo with one 
            of our solution experts today.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="mailto:ContactUs@peoplecare.ai?subject=Enterprise Demo Request"
              className="
                inline-block
                px-10 py-5
                text-lg font-semibold
                bg-gradient-to-r from-accent-cyan to-accent-teal
                text-deep-indigo
                rounded-xl
                hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
                transition-all duration-300
                hover:scale-105
              "
            >
              Request Your Demo
            </Link>
          </motion.div>

          {/* Contact info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white/50"
          >
            Or email us at{' '}
            <a 
              href="mailto:ContactUs@peoplecare.ai" 
              className="text-accent-cyan hover:text-accent-cyan/80 transition-colors"
            >
              ContactUs@peoplecare.ai
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
