'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';

const agents = [
  {
    name: 'Financial Intelligence',
    description: 'An AI agent that analyzes medical bills for errors, helps with insurance appeals, and finds cost-saving opportunities.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
  },
  {
    name: 'Clinical Intelligence',
    description: 'An AI agent that helps members understand their diagnosis, navigate treatment options, and manage their medical records.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
  },
  {
    name: 'Emotional Intelligence',
    description: 'An AI-powered community platform that connects members with peers for emotional support and shared experiences.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'border-rose-500/30',
    textColor: 'text-rose-400',
  },
];

export default function SolutionSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-accent-cyan font-medium mb-4 uppercase tracking-wider">
              The Solution
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Give Every Member a{' '}
              <span className="text-gradient">Dedicated AI Care Team</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              PeopleCare.ai is a comprehensive, AI-powered platform that you can offer to your members 
              under your own brand. Our platform unifies the three critical pillars of healthcare support 
              into one seamless experience, providing each member with a dedicated AI Care Team that 
              works for them 24/7.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-sm text-white/70">White-label ready for your brand</span>
            </div>
          </motion.div>

          {/* Agent Cards */}
          <div className="space-y-4">
            {agents.map((agent, index) => (
              <GlassCard
                key={agent.name}
                delay={index * 0.1}
                className="p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} border ${agent.borderColor} flex items-center justify-center flex-shrink-0 ${agent.textColor}`}>
                    {agent.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{agent.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{agent.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
