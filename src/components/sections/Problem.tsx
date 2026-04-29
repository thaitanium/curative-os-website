'use client';

import { motion } from 'framer-motion';

const comparisonData = [
  {
    feature: 'Deal Scoring',
    generic: 'Generic fields, manual scoring',
    curative: 'AI Underwriting (1-10 score + reasoning)',
  },
  {
    feature: 'Cash Tracking',
    generic: 'One-off notes in notes field',
    curative: 'Deployed → Returned events with cycle tracking',
  },
  {
    feature: 'Board Setup',
    generic: 'Generic stage names, broad fields',
    curative: 'Curative-specific stages, card templates',
  },
  {
    feature: 'Team Playbook',
    generic: 'Playbook lives in Slack, email, spreadsheets',
    curative: 'SOPs built into the platform',
  },
  {
    feature: 'Deal Handoff',
    generic: 'Deals slip between research & sales',
    curative: 'Move deal across boards with audit trail',
  },
  {
    feature: 'Reporting',
    generic: 'Scattered metrics, unclear KPIs',
    curative: 'Real-time conversion funnel + ROI dashboard',
  },
];

export default function Problem() {
  return (
    <section className="w-full bg-card py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Generic CRMs Bend to the Deal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Off-the-shelf CRMs force you to bend your workflow to fit their design.
            Curative OS is built around how you actually work.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">
                  Feature
                </th>
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground">
                  Generic CRM
                </th>
                <th className="text-left py-4 px-4 font-semibold text-accent">
                  Curative OS
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-border hover:bg-background transition-colors"
                >
                  <td className="py-4 px-4 font-semibold text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{row.generic}</td>
                  <td className="py-4 px-4 text-foreground font-medium text-accent">
                    ✓ {row.curative}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Your deal flow is unique. Your CRM should be too. Curative OS meets you where
          you are.
        </motion.p>
      </div>
    </section>
  );
}
