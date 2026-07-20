import ClientHero from "@/components/ClientHero";
import { WorkflowBand } from "@/components/sections/WorkflowBand";
import ProductStory from "@/components/sections/ProductStory";
import { CapabilityGrid } from "@/components/sections/CapabilityGrid";
import Problem from "@/components/sections/Problem";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <ClientHero />
      <WorkflowBand />
      <ProductStory />
      <CapabilityGrid />
      <Problem />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
