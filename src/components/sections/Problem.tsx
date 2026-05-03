'use client';

import { motion } from 'framer-motion';

const comparisonData = [
  {
    feature: 'Pipeline Stages',
    generic: '"Opportunity stages" built for sales',
    curative: 'Boards keyed to your workflow: Leads → Researching → Pre-Qualified → Research Call → Qualified',
  },
  {
    feature: 'Heir Tracking',
    generic: 'No heir or family tracking',
    curative: 'Track heirs, ownership history, and probate status per deal',
  },
  {
    feature: 'Reporting',
    generic: 'Generic dashboards built for SaaS sales',
    curative: 'Cash deployed, cash returned, AI scores, KPI tiles — in one view',
  },
  {
    feature: 'KPI Dashboard',
    generic: 'Build your own reports from scratch',
    curative: 'KPI dashboard built for curative metrics out of the box',
  },
  {
    feature: 'List Import',
    generic: 'Import takes hours of column matching',
    curative: '3-step CSV wizard — upload a county tax list and start in 2 minutes',
  },
  {
    feature: 'Deal Scoring',
    generic: 'Manual deal scoring or generic templates',
    curative: 'Proprietary AI underwriting trained on curative deal criteria',
  },
  {
    feature: 'Cash Tracking',
    generic: 'No cash tracking — lives in spreadsheets',
    curative: 'Cash Events panel tracks every dollar deployed and returned per deal',
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
            Generic CRMs weren't built for this.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When you're buying properties with unpaid taxes, missing heirs, and
            title clouds — a generic sales CRM isn't just inconvenient. It's
            actively working against you.
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
          The curative workflow ships with the software. No retrofitting. No
          bending the tool to fit the work.
        </motion.p>
      </div>
    </section>
  );
}
