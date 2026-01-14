'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';

const challenges = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: 'High Support Burden',
    description: 'Your teams spend countless hours answering repetitive questions about benefits, bills, and in-network providers, leading to burnout and high operational costs.',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'Low Member Engagement',
    description: 'When members are confused and frustrated, they disengage from their health, leading to poor adherence, worse outcomes, and higher downstream costs.',
    color: 'from-rose-500/20 to-red-500/20',
    borderColor: 'border-rose-500/30',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
    ),
    title: 'Member Churn',
    description: 'A negative healthcare experience is a leading driver of dissatisfaction. For ICHRA providers and health plans, this translates directly to member churn and lost revenue.',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
  },
];

export default function ChallengeSection() {
  return (
    <section className="relative py-24 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-rose-400 font-medium mb-4 uppercase tracking-wider">
            The Challenge
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Members Are Lost.{' '}
            <span className="text-gradient">Your Support Teams Are Overwhelmed.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Today&apos;s healthcare ecosystem is a maze of disconnected systems, confusing bills, and complex 
            care plans. This fragmentation creates a poor member experience and drives significant 
            operational costs for your organization.
          </p>
        </motion.div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <GlassCard
              key={challenge.title}
              delay={index * 0.15}
              className="p-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.15,
                  type: 'spring',
                  stiffness: 200,
                }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${challenge.color} border ${challenge.borderColor} flex items-center justify-center text-white/80 mb-6`}
              >
                {challenge.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3">
                {challenge.title}
              </h3>

              <p className="text-white/60 leading-relaxed">
                {challenge.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
