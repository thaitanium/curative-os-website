import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import FeaturePillars from '@/components/sections/FeaturePillars';
import SocialProof from '@/components/sections/SocialProof';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Problem />
      <FeaturePillars />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
