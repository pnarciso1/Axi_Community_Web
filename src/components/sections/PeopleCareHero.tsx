'use client';

import { motion } from 'framer-motion';

const agents = [
  {
    name: 'Clinical Agent',
    description: 'Navigates Care & Records',
  },
  {
    name: 'Financial Agent',
    description: 'Analyzes Bills & Fights Denials',
  },
  {
    name: 'Community Agent',
    description: 'Connects Peers & Support',
  },
];

export default function PeopleCareHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-soft-violet/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Main Content */}
        <div className="text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            One Platform, One{' '}
            <span className="text-gradient">AI Care Team</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl sm:text-2xl text-white/60 mb-16"
          >
            Introducing Your Complete AI Care Team
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
          />

          {/* Agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 mb-12"
          >
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="text-center px-4"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {agent.name}
                </h3>
                <p className="text-white/50 text-sm sm:text-base">
                  {agent.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="w-full max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-xl sm:text-2xl font-medium text-white/80"
          >
            Integrated Intelligence.{' '}
            <span className="text-gradient">Seamless Experience.</span>
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-sm">Discover Axi Community</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
