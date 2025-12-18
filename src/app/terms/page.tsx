'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';

export default function TermsOfService() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
              <Image
                src="/visuals/AxiAvatar.png"
                alt="Axi"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-sm text-white/70">Legal</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            
            <p className="text-white/60">
              Last updated: December 17, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12" hover={false}>
            <div className="prose prose-invert max-w-none space-y-8">
              
              {/* Agreement */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                <p className="text-white/70 leading-relaxed">
                  Welcome to Axi Community! By accessing or using our website, mobile application, or any of our services 
                  (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you 
                  do not agree to these Terms, please do not use our Service.
                </p>
              </div>

              {/* Description of Service */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Axi Community is a health management and community platform that provides:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>An AI companion (Axi) to help track symptoms, medications, and health journaling</li>
                  <li>Community spaces (&quot;Campfires&quot;) for connecting with others who share similar health conditions</li>
                  <li>Tools to generate health reports for healthcare providers</li>
                  <li>Support resources for patients and caregivers</li>
                </ul>
              </div>

              {/* Medical Disclaimer */}
              <div className="bg-soft-violet/10 border border-soft-violet/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">⚠️ Important Medical Disclaimer</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  <strong className="text-white">Axi Community is NOT a medical service.</strong> Our Service is intended for 
                  informational and community support purposes only. It does not provide medical advice, diagnosis, or treatment.
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Always consult qualified healthcare providers for medical decisions</li>
                  <li>Never disregard professional medical advice because of information from our Service</li>
                  <li>In case of emergency, contact emergency services immediately</li>
                  <li>Axi is an AI assistant, not a medical professional</li>
                </ul>
              </div>

              {/* Eligibility */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Eligibility</h2>
                <p className="text-white/70 leading-relaxed">
                  You must be at least 13 years old to use our Service. If you are under 18, you must have parental 
                  or guardian consent. By using our Service, you represent that you meet these requirements and have 
                  the authority to enter into these Terms.
                </p>
              </div>

              {/* Account Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Account Responsibilities</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  When you create an account, you agree to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Not share your account with others</li>
                </ul>
              </div>

              {/* Community Guidelines */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Community Guidelines</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Our community is built on empathy, respect, and support. When participating in Campfires or any 
                  community features, you agree to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li><strong>Be Respectful:</strong> Treat all members with kindness and respect</li>
                  <li><strong>Be Supportive:</strong> Offer encouragement, not medical advice</li>
                  <li><strong>Be Honest:</strong> Share genuine experiences without exaggeration</li>
                  <li><strong>Protect Privacy:</strong> Do not share others&apos; personal information</li>
                  <li><strong>Stay On Topic:</strong> Keep discussions relevant to health and wellness</li>
                </ul>

                <h3 className="text-lg font-semibold text-accent-cyan mt-6 mb-2">Prohibited Conduct</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  You may not:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Harass, bully, or intimidate other users</li>
                  <li>Post false, misleading, or harmful health information</li>
                  <li>Impersonate healthcare professionals</li>
                  <li>Spam, advertise, or promote products/services</li>
                  <li>Share graphic, violent, or inappropriate content</li>
                  <li>Attempt to exploit or harm vulnerable individuals</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  The Service, including its design, features, content, and the Axi character, are owned by 
                  Axi Community and protected by intellectual property laws. You may not copy, modify, distribute, 
                  or create derivative works without our written permission.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Content you create and share through the Service remains yours, but you grant us a license to 
                  use, display, and distribute it within the Service to provide our features.
                </p>
              </div>

              {/* Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Privacy</h2>
                <p className="text-white/70 leading-relaxed">
                  Your privacy is important to us. Please review our{' '}
                  <Link href="/privacy" className="text-accent-cyan hover:underline">Privacy Policy</Link>{' '}
                  to understand how we collect, use, and protect your information. By using our Service, you 
                  consent to our privacy practices.
                </p>
              </div>

              {/* Disclaimers */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Disclaimers</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
                  EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>The Service will be uninterrupted or error-free</li>
                  <li>The Service will meet your specific requirements</li>
                  <li>Information provided through Axi is complete or accurate</li>
                  <li>Any health improvements will result from using the Service</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-white/70 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AXI COMMUNITY SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF 
                  HEALTH, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                <p className="text-white/70 leading-relaxed">
                  We may suspend or terminate your access to the Service at any time, with or without cause, 
                  including for violations of these Terms. You may also delete your account at any time. Upon 
                  termination, your right to use the Service will immediately cease.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                <p className="text-white/70 leading-relaxed">
                  We may modify these Terms at any time. We will notify you of material changes by posting the 
                  updated Terms and revising the &quot;Last updated&quot; date. Your continued use of the Service after 
                  changes constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                <p className="text-white/70 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of 
                  Delaware, United States, without regard to its conflict of law provisions.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-white/5 rounded-xl">
                  <p className="text-white/70">
                    <strong className="text-white">Axi Community</strong><br />
                    Email: Contactus@Peoplecare.ai<br />
                  </p>
                </div>
              </div>

            </div>
          </GlassCard>

          {/* Back Link */}
          <div className="text-center mt-8">
            <Link 
              href="/"
              className="text-accent-cyan hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

