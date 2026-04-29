'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { SOP } from '@/data/sops';
import { sops } from '@/data/sops';
import Footer from '@/components/sections/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SOPDetailContent({ sop }: { sop: SOP }) {
  const sopIndex = parseInt(sop.id.split('-')[1]) - 1;
  const prevSop = sopIndex > 0 ? sops[sopIndex - 1] : null;
  const nextSop = sopIndex < sops.length - 1 ? sops[sopIndex + 1] : null;

  return (
    <main className="w-full overflow-x-hidden">
      {/* Breadcrumb */}
      <section className="w-full bg-background pt-8 pb-4 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/sops"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>←</span>
            <span>Back to SOPs</span>
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="w-full bg-background pt-16 md:pt-24 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold mb-6"
          >
            {sop.id.split('-')[1]}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
          >
            {sop.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {sop.description}
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="w-full bg-card py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sop.steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="rounded-xl border border-border bg-background p-8 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-base text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why It Matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 rounded-xl border border-border bg-background p-8"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Why It Matters</h2>
            <p className="text-base text-muted-foreground">{sop.whyItMatters}</p>
          </motion.div>

          {/* Pro Tip */}
          {sop.proTip && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 rounded-xl border border-accent/50 bg-accent/5 p-8"
            >
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">💡</span>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Pro Tip</h3>
                  <p className="text-base text-muted-foreground">{sop.proTip}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Prev / Next navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-between"
          >
            {prevSop && (
              <Link
                href={`/sops/${prevSop.slug}`}
                className="inline-flex items-center space-x-2 text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                <span>←</span>
                <span>{prevSop.title}</span>
              </Link>
            )}
            {nextSop && (
              <Link
                href={`/sops/${nextSop.slug}`}
                className="inline-flex items-center space-x-2 text-accent font-semibold hover:text-accent/80 transition-colors ml-auto"
              >
                <span>{nextSop.title}</span>
                <span>→</span>
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
