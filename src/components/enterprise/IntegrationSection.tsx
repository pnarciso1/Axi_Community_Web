'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';

const integrations = [
  {
    title: 'Embedded Widget (SDK)',
    bestFor: 'Speed and ease of implementation',
    description: 'Easily embed our AI chat and navigation tools directly into your existing member portal or mobile app with just a few lines of code. Your members get instant access to the AI Care Team without ever leaving your digital properties.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
    textColor: 'text-violet-400',
  },
  {
    title: 'Hosted White-Label Portal',
    bestFor: 'A turnkey, fully branded solution',
    description: 'We provide a complete, standalone member portal hosted on a custom domain (e.g., support.yourcompany.com). The entire experience is branded with your logo, colors, and identity, offering a seamless extension of your brand.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    color: 'from-accent-cyan/20 to-accent-teal/20',
    borderColor: 'border-accent-cyan/30',
    textColor: 'text-accent-cyan',
  },
  {
    title: 'API-First Integration',
    bestFor: 'Deep integration and custom experiences',
    description: 'Leverage our robust suite of APIs to pull our financial, clinical, and community intelligence directly into your own proprietary applications. Build custom workflows and user experiences while our platform handles the heavy lifting on the back end.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400',
  },
];

export default function IntegrationSection() {
  return (
    <section id="integration" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent-cyan font-medium mb-4 uppercase tracking-wider">
            Flexible Integration
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built to Integrate{' '}
            <span className="text-gradient">With Your Ecosystem</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            We understand that every organization is different. That&apos;s why we designed our platform 
            to be flexible, offering a range of integration options to meet your specific technical 
            and business requirements.
          </p>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {integrations.map((integration, index) => (
            <GlassCard
              key={integration.title}
              delay={index * 0.15}
              className="p-8 h-full"
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
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${integration.color} border ${integration.borderColor} flex items-center justify-center ${integration.textColor} mb-6`}
              >
                {integration.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-2">
                {integration.title}
              </h3>

              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4`}>
                <span className="text-xs text-white/60">Best for:</span>
                <span className="text-xs text-white/80">{integration.bestFor}</span>
              </div>

              <p className="text-white/60 leading-relaxed text-sm">
                {integration.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
