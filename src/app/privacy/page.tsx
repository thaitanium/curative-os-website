import type { Metadata } from 'next';
import Footer from '@/components/sections/Footer';
import Nav from '@/components/sections/Nav';
import PrivacyContent from './privacy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Curative OS',
  description: 'Privacy Policy for Curative OS — how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Nav />
      <section className="w-full bg-background pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">
              Effective Date: May 4, 2026 &nbsp;·&nbsp; Last Updated: May 4, 2026
            </p>
          </div>
          <PrivacyContent />
        </div>
      </section>
      <Footer />
    </main>
  );
}
