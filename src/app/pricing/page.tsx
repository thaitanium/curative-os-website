import type { Metadata } from 'next';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Pricing | Curative OS',
  description:
    'Simple, transparent pricing for Curative OS. Starter, Team, and Enterprise plans. Start with a 7-day trial.',
};

export default function PricingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="w-full bg-background pt-24 md:pt-32 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Pricing Built for Growth
          </h1>
          <p className="text-lg text-muted-foreground">
            Start free. Scale as you grow. No surprises.
          </p>
        </div>
      </section>
      <Pricing />
      <Footer />
    </main>
  );
}
