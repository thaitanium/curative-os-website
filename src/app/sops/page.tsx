'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { sops } from '@/data/sops';
import Footer from '@/components/sections/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function SOPsPage() {
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
            Standard Operating Procedures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Step-by-step guides to master Curative OS. From board setup to advanced
            compliance management.
          </motion.p>
        </div>
      </section>

      {/* SOPs Grid */}
      <section className="w-full bg-card py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sops.map((sop) => (
              <motion.div
                key={sop.id}
                variants={cardVariants}
                className="group relative rounded-xl border border-border bg-background p-8 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                {/* SOP number */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold mb-4">
                  {sop.id.split('-')[1]}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {sop.title}
                </h3>

                {/* Summary */}
                <p className="text-base text-muted-foreground mb-4">
                  {sop.summary}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {sop.description}
                </p>

                {/* Link */}
                <Link
                  href={`/sops/${sop.slug}`}
                  className="inline-flex items-center space-x-2 text-accent font-semibold hover:text-accent/80 transition-colors group-hover:space-x-3"
                >
                  <span>Learn more</span>
                  <motion.span
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
