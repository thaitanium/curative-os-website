import ClientHero from '@/components/ClientHero';
import Problem from '@/components/sections/Problem';
import FeaturePillars from '@/components/sections/FeaturePillars';
import SocialProof from '@/components/sections/SocialProof';
import Pricing from '@/components/sections/Pricing';
import Roadmap from '@/components/sections/Roadmap';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <ClientHero />
      <Problem />
      <FeaturePillars />
      <SocialProof />
      <Pricing />
      <Roadmap />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
