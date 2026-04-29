'use client';

import { motion } from 'framer-motion';

const mockCards = [
  { id: 1, title: 'Houston Tax Sale 2026', stage: 'Leads', value: '$145K' },
  { id: 2, title: 'Distressed Estate', stage: 'Leads', value: '$89K' },
  { id: 3, title: '3 Acres w/ Title Issues', stage: 'Researching', value: '$230K' },
  { id: 4, title: 'Pre-Foreclosure Package', stage: 'Pre-Qualified', value: '$340K' },
  { id: 5, title: 'Commercial Fix & Flip', stage: 'Sold', value: '+$67K Profit' },
];

const stages = ['Leads', 'Researching', 'Pre-Qualified', 'Sold'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
  hover: {
    y: -4,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
    transition: { duration: 0.2 },
  },
};

export default function AnimatedBoard() {
  return (
    <div className="relative w-full h-full bg-card rounded-xl border border-border p-6 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Board content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground">Your Deals Board</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Houston Properties · 14 deals tracked · $2.3M deployed
          </p>
        </div>

        {/* Kanban grid */}
        <motion.div
          className="grid grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stages.map((stage) => (
            <div key={stage} className="flex flex-col space-y-3">
              {/* Stage header */}
              <div className="flex items-center space-x-2">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase">
                  {stage}
                </h4>
                <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  {mockCards.filter((c) => c.stage === stage).length}
                </span>
              </div>

              {/* Cards column */}
              <div className="flex flex-col gap-3">
                {mockCards
                  .filter((card) => card.stage === stage)
                  .map((card) => (
                    <motion.div
                      key={card.id}
                      className="bg-background border border-border rounded-lg p-3 cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md transition-all"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <p className="text-sm font-semibold text-foreground line-clamp-2">
                        {card.title}
                      </p>
                      <p className="text-xs text-accent font-semibold mt-2">
                        {card.value}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          className="mt-6 pt-4 border-t border-border grid grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Conversion
            </p>
            <p className="text-base font-semibold text-foreground mt-1">32%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Avg Cash Cycle
            </p>
            <p className="text-base font-semibold text-foreground mt-1">47 days</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              ROI
            </p>
            <p className="text-base font-semibold text-accent mt-1">3.2x</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
