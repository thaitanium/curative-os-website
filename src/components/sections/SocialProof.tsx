'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    number: '22',
    label: 'Team Members',
  },
  {
    number: '1–2/wk',
    label: 'Curative Acquisitions',
  },
  {
    number: '160+',
    label: 'Deals Closed',
  },
  {
    number: '$1B',
    label: 'Target Exit',
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
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Powered By
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Flow Property Group
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curative OS is the operating system behind one of the most active curative
            investing teams in the country.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
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
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border border-border p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">RL</span>
              </div>
            </div>
            <div className="flex-grow">
              <blockquote className="text-lg md:text-xl text-foreground italic mb-4">
                "Flow Property Group runs curative acquisitions at scale. Curative OS keeps
                our 22-person team aligned, every deal moving, and nothing falling through
                the cracks. It was built for exactly how we operate."
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">Robert Lee</p>
                <p className="text-sm text-muted-foreground">
                  Founder, Flow Property Group
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Used by investors and teams across the US
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm text-muted-foreground">Flow Property Group</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm text-muted-foreground">Curative Investor Cohort 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm text-muted-foreground">Independent Operators</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
