'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';

const features = [
  {
    icon: '🔥',
    title: 'Never Swim Alone',
    description: 'Join specific "Campfires" for conditions like Gastroparesis, Myasthenia Gravis, and Cancer. Find your people who truly understand.',
  },
  {
    icon: '📝',
    title: 'Your Gentle Scribe',
    description: 'Axi helps you log meds, symptoms, and journals just by chatting naturally. No boring forms—just conversation.',
  },
  {
    icon: '📊',
    title: 'Doctor-Ready Reports',
    description: 'Turn your daily chats into clinical summaries for your provider in one click. Finally be heard at appointments.',
  },
];

export default function WhySection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why{' '}
            <span className="text-gradient">Axi Community</span>?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Living with a chronic or rare condition is isolating. We believe connection is medicine.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <GlassCard
              key={feature.title}
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
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-soft-violet/20 border border-white/10 flex items-center justify-center text-3xl mb-6"
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

