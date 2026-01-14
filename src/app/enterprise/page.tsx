import EnterpriseHero from '@/components/enterprise/EnterpriseHero';
import ChallengeSection from '@/components/enterprise/ChallengeSection';
import SolutionSection from '@/components/enterprise/SolutionSection';
import HowItWorksSection from '@/components/enterprise/HowItWorksSection';
import IntegrationSection from '@/components/enterprise/IntegrationSection';
import ROISection from '@/components/enterprise/ROISection';
import SecuritySection from '@/components/enterprise/SecuritySection';
import EnterpriseCTA from '@/components/enterprise/EnterpriseCTA';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Enterprise Solutions | PeopleCare.ai',
  description: 'The Complete AI Care Team for Your Members. Empower your members, reduce support costs, and drive better health outcomes with the industry\'s first unified patient navigation platform.',
};

export default function EnterprisePage() {
  return (
    <>
      <EnterpriseHero />
      <ChallengeSection />
      <SolutionSection />
      <HowItWorksSection />
      <IntegrationSection />
      <ROISection />
      <SecuritySection />
      <EnterpriseCTA />
      <Footer />
    </>
  );
}
