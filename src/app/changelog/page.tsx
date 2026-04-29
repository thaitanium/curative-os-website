'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/sections/Footer';

export default function ChangelogPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header */}
      <section className="w-full bg-background pt-24 md:pt-32 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
          >
            Changelog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We ship weekly. Full changelog coming soon.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-card py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-border bg-background p-12 text-center"
          >
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Building in Public</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We&apos;re shipping improvements to Curative OS every week. Check back soon for a
              detailed list of all updates, features, and fixes.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
