'use client';

import { motion } from 'framer-motion';
import WaitlistForm from '@/components/ui/WaitlistForm';

const roadmapItems = [
  {
    title: 'Litigation Hold',
    description: 'Lock editing on active litigation deals — one toggle, full protection.',
  },
  {
    title: 'Family Tree Tracker',
    description: 'Map heirs, relationships, and ownership history per deal.',
  },
  {
    title: 'Deceased Owner Identification',
    description: 'Find deceased owners through an integrated data source.',
  },
  {
    title: 'Automation Workflow Sequences',
    description: 'Trigger follow-ups, stage moves, and reminders automatically.',
  },
  {
    title: 'Advanced Reporting',
    description:
      'Revenue, property costs, P&L, heir payouts per deal, cash conversion cycles, and balance sheets.',
  },
  {
    title: 'Curative Research API',
    description: 'Public API to run the full curative research process programmatically.',
  },
  {
    title: 'Telephone, SMS & Email',
    description: 'Full outreach suite — call, text, and email from the deal page.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Roadmap() {
  return (
    <section id="waitlist" className="w-full bg-background py-16 md:py-24 px-4">
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
            Roadmap
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What's coming next.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curative OS ships every week. Here's what's in the pipeline.
          </p>
        </motion.div>

        {/* Roadmap grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roadmapItems.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="rounded-xl border border-border bg-card p-6 hover:border-accent transition-colors"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                  In development
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Curative Research AI Agent — Add-on Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-accent bg-card p-8 md:p-12 overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-grow">
              <div className="inline-flex items-center space-x-2 mb-4">
                <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
                  Add-On · Coming Soon
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Research a lead in minutes. Not hours.
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                The Curative Research Engine runs your full due diligence
                automatically — tax assessor, probate filings, district clerk
                documents, CAD data, and deceased owner identification — so you
                know if a deal is worth pursuing before you pick up the phone.
              </p>
            </div>
            <div className="lg:flex-shrink-0 w-full lg:w-80">
              <WaitlistForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
