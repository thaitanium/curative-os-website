'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: 1,
    title: 'Underwrite',
    tagline: 'Score deals in seconds, not in your head',
    description:
      'Proprietary AI underwriting trained on curative deal criteria. Get a 1-10 score with full reasoning. Bring your own API key — Curative OS provides the reference files so the AI understands curative risk the way operators do.',
    miniSop: 'SOP: Score a deal with AI Underwriting',
    slug: 'score-deal-ai-underwriting',
  },
  {
    number: 2,
    title: 'Track Cash',
    tagline: "Know your numbers before your accountant does",
    description:
      'Log every dollar deployed and returned per deal with the Cash Events panel. See cash conversion cycles across your portfolio. KPI dashboard surfaces pipeline value, win rate, average deal size, and monthly revenue.',
    miniSop: 'SOP: Track cash on a deal',
    slug: 'track-cash-on-deal',
  },
  {
    number: 3,
    title: 'Pipeline',
    tagline: 'Boards that match how curative deals move',
    description:
      'Custom stages for your playbook (Leads → Researching → Pre-Qualified → Sold). Drag-and-drop kanban, terminal flags, archived boards. Compose card titles from up to 3 fields — address + owner name at a glance.',
    miniSop: 'SOP: Set up your first board in 90 seconds',
    slug: 'set-up-first-board',
  },
  {
    number: 4,
    title: 'Intake',
    tagline: 'Get a county list working in 2 minutes',
    description:
      'Upload a tax-delinquency CSV, map columns with a searchable picker, hit import. Field presets so the second import is one click. Dedupe-aware — no duplicate cards, no cleanup after import.',
    miniSop: 'SOP: Import a tax-delinquency list',
    slug: 'import-tax-delinquency-list',
  },
  {
    number: 5,
    title: 'Outreach',
    tagline: 'Work a deal without leaving the board',
    description:
      'Send iMessages straight from the deal page — auto-attached to the right contact. Reminders bucket into Overdue / Today / Tomorrow / Upcoming. Notes + activity feed captures everything you did and why.',
    miniSop: 'SOP: Move a deal across boards',
    slug: 'move-deal-across-boards',
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

const pilllarVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FeaturePillars() {
  return (
    <section id="product" className="w-full bg-background py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Five pillars. Built for curative.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Score deals, track cash, run the pipeline, import lists, and reach
            owners — all in one operating system built for messy-title deals.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={pilllarVariants}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-accent hover:bg-background transition-all duration-300"
            >
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold mb-4 group-hover:scale-110 transition-transform">
                {pillar.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors uppercase tracking-wide">
                {pillar.title}
              </h3>

              {/* Tagline */}
              <p className="text-sm font-semibold text-foreground/90 mb-3 leading-snug">
                {pillar.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {pillar.description}
              </p>

              {/* Mini SOP link */}
              <div className="pt-4 border-t border-border">
                <Link
                  href={`/sops/${pillar.slug}`}
                  className="text-xs font-semibold text-accent hover:text-accent/80 transition-colors inline-flex items-center space-x-2"
                >
                  <span>{pillar.miniSop}</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Each pillar comes with step-by-step SOPs to get your team aligned in hours,
            not weeks.
          </p>
          <motion.a
            href="/sops"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>See all 8 SOPs</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
