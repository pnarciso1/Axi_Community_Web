import PeopleCareHero from '@/components/sections/PeopleCareHero';
import Hero from '@/components/sections/Hero';
import WhySection from '@/components/sections/WhySection';
import AxiSection from '@/components/sections/AxiSection';
import CaregiversSection from '@/components/sections/CaregiversSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <PeopleCareHero />
      <Hero />
      <WhySection />
      <AxiSection />
      <CaregiversSection />
      <Footer />
    </>
  );
}
