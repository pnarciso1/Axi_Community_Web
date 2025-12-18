'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';

const caregiverFeatures = [
  {
    icon: '💜',
    title: 'Dedicated Support Spaces',
    description: 'Caregivers get their own private communities to share experiences and support each other.',
  },
  {
    icon: '📱',
    title: 'Care Coordination',
    description: 'Keep track of appointments, medications, and symptoms for your loved one—all in one place.',
  },
  {
    icon: '🌱',
    title: 'Self-Care Reminders',
    description: 'Axi gently reminds you to take care of yourself too. You can\'t pour from an empty cup.',
  },
];

export default function CaregiversSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-violet/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-soft-violet/10 border border-soft-violet/20"
            >
              <span className="text-lg">💗</span>
              <span className="text-sm text-soft-violet">For Caregivers</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              You care for them.{' '}
              <span className="text-gradient">We care for you.</span>
            </h2>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Being a caregiver is one of the most challenging and rewarding roles. 
              Axi Community provides a space where you can connect with others who 
              understand your journey, and tools to help manage your caregiving responsibilities.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <GlassCard className="p-4 text-center" hover={false}>
                <p className="text-3xl font-bold text-gradient">53M+</p>
                <p className="text-sm text-white/50">Caregivers in the US</p>
              </GlassCard>
              <GlassCard className="p-4 text-center" hover={false}>
                <p className="text-3xl font-bold text-gradient">24hrs</p>
                <p className="text-sm text-white/50">Average weekly caregiving</p>
              </GlassCard>
            </div>
          </motion.div>

          {/* Features */}
          <div className="space-y-4">
            {caregiverFeatures.map((feature, index) => (
              <GlassCard
                key={feature.title}
                delay={index * 0.1}
                className="p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-soft-violet/20 to-accent-cyan/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
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

