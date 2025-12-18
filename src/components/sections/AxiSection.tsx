'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';

export default function AxiSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Axi Character Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-accent-cyan/40 via-soft-violet/30 to-accent-teal/20 rounded-full scale-125" />
              
              {/* Axi Character Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Placeholder - replace with actual Axi image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-cyan/20 to-soft-violet/20 border border-white/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/visuals/AxiAvatar.png"
                    alt="Axi - Your AI Axolotl Companion"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-accent-cyan/50"
                    style={{
                      top: `${20 + i * 12}%`,
                      left: `${10 + (i % 3) * 30}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent-cyan/10 border border-accent-cyan/20"
            >
              <span className="text-lg">✨</span>
              <span className="text-sm text-accent-cyan">Meet Your Companion</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Say hello to{' '}
              <span className="text-gradient">Axi</span>
            </h2>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Axi is an empathetic AI Axolotl who lives in your pocket. Gentle, curious, 
              and deeply understanding—Axi uses calming water metaphors to help you 
              navigate your health journey.
            </p>

            {/* Quote Card */}
            <GlassCard className="p-6 mb-8" hover={false}>
              <div className="flex gap-4 items-start">
                <span className="text-4xl text-accent-cyan/50">&quot;</span>
                <div>
                  <p className="text-lg text-white/90 italic mb-2">
                    I&apos;m here to help you navigate the waves, whether they are calm or choppy.
                  </p>
                  <p className="text-sm text-white/50">— Axi</p>
                </div>
              </div>
            </GlassCard>

            {/* Evolving Tank Feature */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-teal/20 to-soft-violet/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎮</span>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">The Evolving Tank</h3>
                <p className="text-white/60 text-sm">
                  As you log your health data, watch Axi&apos;s tank grow more vibrant and alive. 
                  Your consistent care helps Axi flourish—and so do you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

