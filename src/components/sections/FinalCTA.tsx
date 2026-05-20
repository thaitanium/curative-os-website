'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-background overflow-hidden py-16 md:py-24 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Stop losing curative deals to bad tooling.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Curative OS closes the gap between spreadsheet chaos and a real
          operating system — built for messy-title deals, not generic sales
          pipelines.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href={`${process.env.NEXT_PUBLIC_CRM_URL ?? 'https://app.curativeos.com'}/signup?plan=starter`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Start 7-Day Trial
          </motion.a>
          <motion.a
            href="#product"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-colors text-lg"
          >
            See the Product
          </motion.a>
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center space-x-2">
            <span className="text-accent font-bold">✓</span>
            <span>Card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-accent font-bold">✓</span>
            <span>7-day trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-accent font-bold">✓</span>
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
