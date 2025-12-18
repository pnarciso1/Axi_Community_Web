'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import WaitlistForm from '@/components/ui/WaitlistForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10"
            >
              <Image
                src="/visuals/AxiAvatar.png"
                alt="Axi"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm text-white/70">Coming soon to iOS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Healing happens{' '}
              <span className="text-gradient">better, together.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Meet Axi—your AI health companion who connects you to the community 
              you&apos;ve been looking for. Because connection is medicine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              id="waitlist"
              className="flex justify-center lg:justify-start"
            >
              <WaitlistForm variant="hero" />
            </motion.div>
          </motion.div>

          {/* Right Content - iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-accent-cyan/30 via-soft-violet/20 to-accent-cyan/10 rounded-full scale-150" />
              
              {/* iPhone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-black rounded-[3rem] p-3 shadow-2xl border border-white/20">
                {/* Screen */}
                <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-deep-indigo to-deep-purple overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl" />
                  
                  {/* App Content */}
                  <div className="h-full pt-10 px-4 pb-4 flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-4">
                      <p className="text-white/50 text-xs">Today</p>
                      <p className="text-white font-semibold">Check-in with Axi</p>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="flex-1 space-y-3 overflow-hidden">
                      {/* Axi Message */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-2 items-end"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-cyan/50 to-soft-violet/50 flex items-center justify-center overflow-hidden">
                          <Image
                            src="/visuals/AxiAvatar.png"
                            alt="Axi"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="max-w-[75%] glass rounded-2xl rounded-bl-md px-3 py-2">
                          <p className="text-sm text-white/90">
                            Good morning! 🌊 How are your waters flowing today?
                          </p>
                        </div>
                      </motion.div>
                      
                      {/* User Message */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex justify-end"
                      >
                        <div className="max-w-[75%] bg-accent-cyan/30 border border-accent-cyan/30 rounded-2xl rounded-br-md px-3 py-2">
                          <p className="text-sm text-white/90">
                            Feeling a bit rough, had some nausea this morning
                          </p>
                        </div>
                      </motion.div>
                      
                      {/* Axi Response */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                        className="flex gap-2 items-end"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-cyan/50 to-soft-violet/50 flex items-center justify-center overflow-hidden">
                          <Image
                            src="/visuals/AxiAvatar.png"
                            alt="Axi"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="max-w-[75%] glass rounded-2xl rounded-bl-md px-3 py-2">
                          <p className="text-sm text-white/90">
                            I&apos;ve logged that for you 💙 Would you like to connect with someone who understands?
                          </p>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Input Bar */}
                    <div className="mt-3 flex gap-2">
                      <div className="flex-1 bg-white/10 rounded-full px-4 py-2 text-sm text-white/40">
                        Message Axi...
                      </div>
                      <div className="w-10 h-10 rounded-full bg-accent-cyan/30 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-accent-cyan/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

