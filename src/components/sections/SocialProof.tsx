'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    number: '21',
    label: 'Operators',
  },
  {
    number: '$5M',
    label: 'On Track',
  },
  {
    number: '1–2/wk',
    label: 'Curative Acquisitions',
  },
];

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

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function SocialProof() {
  return (
    <section className="w-full bg-background py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Trusted by
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Flow Property Group
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            The team that pioneered curative investing uses Curative OS as
            their operating system.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:border-accent transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
