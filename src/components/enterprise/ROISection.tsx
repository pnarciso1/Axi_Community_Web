'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Reduce Operational Costs',
    description: 'Automate up to 70% of inbound member support queries, freeing up your human teams to focus on high-value, complex cases.',
    highlight: '70%',
    highlightLabel: 'query automation',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Increase Member Retention',
    description: 'A seamless, supportive healthcare experience is a powerful differentiator. Our B2C platform boasts a 91% 30-day retention rate.',
    highlight: '91%',
    highlightLabel: '30-day retention',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Improve Health Outcomes',
    description: 'By guiding members to the right care, improving adherence, and providing emotional support, our platform helps lower downstream costs.',
    highlight: null,
    highlightLabel: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Drive Engagement',
    description: 'A single, easy-to-use platform for all healthcare needs encourages members to actively participate in managing their health and finances.',
    highlight: null,
    highlightLabel: null,
  },
];

export default function ROISection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-violet/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-soft-violet font-medium mb-4 uppercase tracking-wider">
            ROI
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Better Outcomes for Your Members.{' '}
            <span className="text-gradient">Better Results for Your Business.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Investing in a better member experience isn&apos;t just the right thing to do—it&apos;s the 
            smart thing to do. The PeopleCare.ai platform delivers a clear and measurable return 
            on investment.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <GlassCard
              key={benefit.title}
              delay={index * 0.1}
              className="p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-soft-violet/20 border border-white/10 flex items-center justify-center flex-shrink-0 text-accent-cyan">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-white text-lg">{benefit.title}</h3>
                    {benefit.highlight && (
                      <div className="px-3 py-1 rounded-full bg-accent-cyan/20 border border-accent-cyan/30">
                        <span className="text-sm font-bold text-accent-cyan">{benefit.highlight}</span>
                        <span className="text-xs text-accent-cyan/70 ml-1">{benefit.highlightLabel}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
