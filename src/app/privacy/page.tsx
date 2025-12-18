'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';

export default function PrivacyPolicy() {
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
              Privacy <span className="text-gradient">Policy</span>
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
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-white/70 leading-relaxed">
                  At Axi Community (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we understand that your health information 
                  is deeply personal. We are committed to protecting your privacy and being transparent about 
                  how we collect, use, and safeguard your information. This Privacy Policy explains our practices 
                  regarding the information we collect through our website and mobile application.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                
                <h3 className="text-lg font-semibold text-accent-cyan mb-2">Information You Provide</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                  <li><strong>Account Information:</strong> Email address, name, and profile information when you sign up for early access or create an account.</li>
                  <li><strong>Health Information:</strong> Symptoms, medications, journal entries, and other health-related data you choose to log through Axi.</li>
                  <li><strong>Community Interactions:</strong> Posts, comments, and messages shared within Campfire communities.</li>
                  <li><strong>Communications:</strong> Information you provide when contacting our support team.</li>
                </ul>

                <h3 className="text-lg font-semibold text-accent-cyan mb-2">Information Collected Automatically</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers.</li>
                  <li><strong>Usage Data:</strong> How you interact with our app, features used, and time spent.</li>
                  <li><strong>Log Data:</strong> IP address, browser type, and access times.</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Provide and personalize your Axi experience</li>
                  <li>Connect you with relevant Campfire communities based on your conditions</li>
                  <li>Generate health reports and insights for you and your healthcare providers</li>
                  <li>Send important updates about our service and your early access status</li>
                  <li>Improve our app and develop new features</li>
                  <li>Ensure the safety and security of our community</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* How We Protect Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">How We Protect Your Information</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Your health data deserves the highest level of protection. We implement:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols.</li>
                  <li><strong>Access Controls:</strong> Strict access controls limit who can view your information.</li>
                  <li><strong>Secure Infrastructure:</strong> Our systems are hosted on secure, HIPAA-compliant cloud infrastructure.</li>
                  <li><strong>Regular Audits:</strong> We conduct regular security assessments and vulnerability testing.</li>
                  <li><strong>Employee Training:</strong> All team members receive privacy and security training.</li>
                </ul>
              </div>

              {/* Sharing Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Sharing Your Information</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We do <strong>not</strong> sell your personal information. We may share information only in these circumstances:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li><strong>With Your Consent:</strong> When you explicitly choose to share health reports with your healthcare providers.</li>
                  <li><strong>Community Features:</strong> Information you post in Campfires is visible to other community members.</li>
                  <li><strong>Service Providers:</strong> Trusted partners who help us operate our service, bound by strict confidentiality agreements.</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect the safety of our users.</li>
                </ul>
              </div>

              {/* Your Rights and Choices */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights and Choices</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  You have control over your information:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data at any time.</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information.</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and associated data.</li>
                  <li><strong>Export:</strong> Download your health data in a portable format.</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                <p className="text-white/70 leading-relaxed">
                  We retain your information for as long as your account is active or as needed to provide you services. 
                  If you request account deletion, we will delete your personal information within 30 days, except where 
                  we are required to retain it for legal or regulatory purposes.
                </p>
              </div>

              {/* Children&apos;s Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
                <p className="text-white/70 leading-relaxed">
                  Axi Community is not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If you believe we have collected information from 
                  a child under 13, please contact us immediately.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                <p className="text-white/70 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes 
                  by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you 
                  to review this policy periodically.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

