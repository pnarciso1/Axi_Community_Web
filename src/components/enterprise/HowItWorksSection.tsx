'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '1',
    title: 'A New Bill Arrives',
    agent: 'Financial Agent',
    agentColor: 'text-blue-400',
    description: 'The Financial Agent automatically scans a member\'s new medical bill, detects a $1,500 coding error, and flags it for appeal.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bgColor: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    step: '2',
    title: 'Clinical Context is Applied',
    agent: 'Clinical Agent',
    agentColor: 'text-emerald-400',
    description: 'The Clinical Agent, recognizing the bill is for a recent diabetes-related procedure, cross-references the member\'s care plan to ensure all services were medically necessary and covered.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    bgColor: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    step: '3',
    title: 'Proactive Support is Offered',
    agent: 'Community Agent',
    agentColor: 'text-rose-400',
    description: 'The Community Agent, aware of the member\'s recent diagnosis, sends a notification: "We\'re handling the bill error. In the meantime, would you like to join our \'Living with Diabetes\' support group?"',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    bgColor: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'border-rose-500/30',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent-cyan font-medium mb-4 uppercase tracking-wider">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Integrated Intelligence{' '}
            <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Our platform&apos;s true power lies in how its three intelligent agents work together. 
            They share context and communicate in real-time to provide a proactive, holistic 
            support experience that no human-only team can match.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-emerald-500/50 to-rose-500/50" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`
                    inline-block p-6 rounded-2xl
                    bg-gradient-to-br ${step.bgColor}
                    border ${step.borderColor}
                    backdrop-blur-sm
                  `}>
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className={`text-sm font-medium ${step.agentColor}`}>
                        {step.agent}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step number */}
                <div className="relative flex-shrink-0">
                  <div className={`
                    w-14 h-14 rounded-full
                    bg-gradient-to-br ${step.bgColor}
                    border-2 ${step.borderColor}
                    flex items-center justify-center
                    text-white font-bold text-lg
                    shadow-lg
                  `}>
                    {step.step}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
