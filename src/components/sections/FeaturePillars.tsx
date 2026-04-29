'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: 1,
    title: 'Smart Boards',
    description:
      'Kanban boards built for curative deal flow. Drag & drop from Leads → Researching → Pre-Qualified → Sold. One click to move deals across teams.',
    miniSop: 'SOP: Set up your first board in 90 seconds',
    slug: 'set-up-first-board',
  },
  {
    number: 2,
    title: 'AI Underwriting',
    description:
      'Score deals 1-10 with reasoning. The AI learns from your data, gets sharper every run, and you can override any time.',
    miniSop: 'SOP: Score a deal with AI Underwriting',
    slug: 'score-deal-ai-underwriting',
  },
  {
    number: 3,
    title: 'Cash Conversion Tracking',
    description:
      'Log every dollar in and out. See cash cycles, ROI per deal, and team performance in real time.',
    miniSop: 'SOP: Track cash on a deal',
    slug: 'track-cash-on-deal',
  },
  {
    number: 4,
    title: 'Team Playbook',
    description:
      'SOPs live inside the app, not Slack. New hires see the exact process on day one. No onboarding tax.',
    miniSop: 'SOP: Configure your dashboard for standup',
    slug: 'configure-dashboard-standup',
  },
  {
    number: 5,
    title: 'Built-In Compliance',
    description:
      'Litigation holds, audit trails on every edit, deal movement tracking, and field-level permissions.',
    miniSop: 'SOP: Manage a litigation hold',
    slug: 'manage-litigation-hold',
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for Curative Investing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five core pillars that make deal tracking, team alignment, and scaling
            inevitable.
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
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {pillar.title}
              </h3>

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
