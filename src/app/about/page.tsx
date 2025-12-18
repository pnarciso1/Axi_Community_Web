'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';
import Footer from '@/components/sections/Footer';

// Team members
const teamMembers = [
  {
    name: 'Parshant Jain',
    role: 'CEO & Founder',
    credentials: 'MBA, MD',
    bio: 'CSO at Medarcus Health Data, Former Head of Product at McKinsey, 3X Co-Founder of Doctor Insta, Simplify Reality, and Medarcus.',
    image: '/visuals/parshant-jain.jpeg',
  },
  {
    name: 'Paolo Narciso',
    role: 'CPO & Founder',
    credentials: 'ME, MPS, PhD',
    bio: 'Former head of product at AARP Foundation, 3x Co-Founder of Cloud Health, 531 Networks, and Open Integrity.',
    image: '/visuals/paolo-narciso.jpeg',
  },
  {
    name: 'Suruchi Kothari',
    role: 'CSO',
    credentials: 'MBA, MD',
    bio: 'Board Certified Physician, Ex Chief of Staff to CEO at Agilon Health, Pear VC fellow, Venture Partner at GoingVC.',
    image: '/visuals/suruchi-kothari.jpeg',
  },
  {
    name: 'Abbey Vandersall',
    role: 'COO',
    credentials: 'MD, MS',
    bio: 'Board Certified Physician, VP of Quality and Clinical Services at AMSURG, former Chief of Staff at Envision Healthcare.',
    image: '/visuals/abbey-vandersall.jpeg',
  },
  {
    name: 'Maribeth Pawlak',
    role: 'Head of Communities',
    credentials: '',
    bio: 'Former critical care nurse and nurse practitioner. Brings people, science, and advocacy together through compassionate communication.',
    image: '/visuals/Mb pic.jpg',
  },
  {
    name: 'Jim Sliney Jr',
    role: 'Head Patient Advocate',
    credentials: 'RMA, BCPA',
    bio: 'Board Certified Patient Advocate, Columbia University graduate. Works closely with patients in clinical, research, and advocacy settings.',
    image: '/visuals/jim-sliney.jpg',
  },
  {
    name: 'Janhvi Patel',
    role: 'Advisor',
    credentials: '',
    bio: 'Healthcare commercialization and product strategy Executive. Ex-CVS Health, MSK Cancer Center, Cota, and IBM.',
    image: '/visuals/janhvi-patel.jpeg',
  },
];

const values = [
  {
    icon: '💙',
    title: 'Empathy First',
    description: 'We understand because we\'ve been there. Every decision is made with our community\'s hearts in mind.',
  },
  {
    icon: '🌊',
    title: 'Calm in the Storm',
    description: 'Health challenges are stressful enough. Our platform is designed to be a peaceful sanctuary.',
  },
  {
    icon: '🤝',
    title: 'Connection is Medicine',
    description: 'We believe that finding your people can be as healing as any treatment.',
  },
  {
    icon: '🔒',
    title: 'Privacy & Safety',
    description: 'Your health data is sacred. We treat it with the utmost care and security.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10"
            >
              <Image
                src="/visuals/AxiAvatar.png"
                alt="Axi"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-sm text-white/70">Our Story</span>
            </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Building the{' '}
            <span className="text-gradient">community</span> we wished we had
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Axi Community was born from personal experience with chronic illness and a 
            deep belief that no one should have to navigate their health journey alone.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our{' '}
                <span className="text-gradient">Mission</span>
              </h2>

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Living with a chronic or rare condition can feel incredibly isolating. 
                  Between doctor appointments, symptom flares, and the emotional toll, 
                  it&apos;s easy to feel like you&apos;re swimming alone in an endless ocean.
                </p>
                <p>
                  We created Axi Community to be the liferaft we all needed—a place 
                  where patients and caregivers can find their people, track their health, 
                  and feel genuinely supported.
                </p>
                <p className="text-white font-semibold">
                  Because we believe that connection is medicine.
                </p>
              </div>

              <GlassCard className="mt-8 p-6" hover={false}>
                <div className="flex gap-4 items-start">
                  <span className="text-4xl">🌊</span>
                  <div>
                    <p className="text-white/90 italic mb-2">
                      &quot;The mission isn&apos;t just to build an app—it&apos;s to create a sanctuary 
                      where healing can happen through human connection.&quot;
                    </p>
                    <p className="text-sm text-white/50">— The Axi Team</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative element */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-accent-cyan/20 via-soft-violet/20 to-accent-teal/20 rounded-full" />
              
              <GlassCard className="relative p-8" hover={false}>
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-gradient">1 in 3</p>
                    <p className="text-white/60 mt-2">Americans live with a chronic condition</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="text-center">
                    <p className="text-6xl font-bold text-gradient">53M+</p>
                    <p className="text-white/60 mt-2">Caregivers in the United States</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="text-center">
                    <p className="text-6xl font-bold text-gradient">75%</p>
                    <p className="text-white/60 mt-2">Report feeling isolated in their journey</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our{' '}
              <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard
                key={value.title}
                delay={index * 0.1}
                className="p-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.2 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-soft-violet/20 border border-white/10 flex items-center justify-center text-2xl mb-4"
                >
                  {value.icon}
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet the{' '}
              <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Passionate individuals united by a shared mission to transform healthcare through connection
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member, index) => (
              <GlassCard
                key={member.name}
                delay={index * 0.1}
                className="p-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-accent-cyan/30 to-soft-violet/30 border-2 border-white/20"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                
                <p className="text-accent-cyan text-sm">
                  {member.role}
                </p>
                {member.credentials && (
                  <p className="text-white/50 text-xs mb-3">
                    {member.credentials}
                  </p>
                )}
                {!member.credentials && <div className="mb-3" />}
                
                <p className="text-white/60 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </GlassCard>
            ))}
          </div>
          
          {/* Second row - 3 members centered */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
            {teamMembers.slice(4).map((member, index) => (
              <GlassCard
                key={member.name}
                delay={(index + 4) * 0.1}
                className="p-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index + 4) * 0.1 }}
                  className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-accent-cyan/30 to-soft-violet/30 border-2 border-white/20"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                
                <p className="text-accent-cyan text-sm">
                  {member.role}
                </p>
                {member.credentials && (
                  <p className="text-white/50 text-xs mb-3">
                    {member.credentials}
                  </p>
                )}
                {!member.credentials && <div className="mb-3" />}
                
                <p className="text-white/60 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Axolotl Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12" hover={false}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Image
                src="/visuals/AxiAvatar.png"
                alt="Axi"
                width={96}
                height={96}
                className="object-contain mx-auto mb-6"
              />
              
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why an{' '}
                <span className="text-gradient">Axolotl</span>?
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-6">
                The axolotl is one of nature&apos;s most remarkable creatures. Known for their 
                incredible regenerative abilities, they can heal and regrow parts of themselves 
                that other animals cannot. They&apos;re also gentle, curious, and thrive in 
                calm waters.
              </p>
              
              <p className="text-white/70 leading-relaxed">
                We chose the axolotl as our mascot because it embodies what we hope for 
                our community: resilience, healing, curiosity, and the ability to thrive 
                even in challenging conditions. Just like you.
              </p>
            </motion.div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </>
  );
}

