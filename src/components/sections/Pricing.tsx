'use client';

import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For solo operators or small teams just getting started.',
    features: [
      'Up to 5 user seats',
      'Boards + custom stages',
      'Custom fields (11 types)',
      'CSV import wizard',
      'Deal reminders',
      'AI underwriting (BYOAPI)',
      'Basic permissions',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Team',
    price: '$99',
    period: '/month',
    description: 'For growing teams running multiple acquisition managers.',
    features: [
      'Everything in Starter',
      'Up to 10 user seats',
      'Cash Events panel',
      'KPI dashboard',
      'iMessage outreach from deals',
      'Field presets',
      'Team management',
      'Board-level permissions',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    period: '',
    description: 'For larger teams and multi-LLC operators.',
    features: [
      'Everything in Team',
      'Unlimited user seats',
      'Priority support',
      'Early access to roadmap features',
      'White-glove onboarding',
    ],
    cta: 'Talk to Us',
    highlighted: false,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Pricing() {
  return (
    <section className="w-full bg-card py-16 md:py-24 px-4">
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No setup fees. No surprises. Cancel anytime. All plans include a 14-day free
            trial.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              className={`relative rounded-xl border transition-all duration-300 p-8 flex flex-col ${
                tier.highlighted
                  ? 'border-accent bg-background scale-105 md:scale-110 shadow-xl'
                  : 'border-border bg-card hover:border-accent'
              }`}
            >
              {/* Recommended badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {tier.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6">
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground ml-2">{tier.period}</span>
                </div>
              </div>

              {/* CTA button */}
              <motion.a
                href={
                  tier.name === 'Starter'
                    ? 'https://app.curativeos.com/signup?plan=starter'
                    : tier.name === 'Team'
                      ? 'https://app.curativeos.com/signup?plan=team'
                      : 'mailto:hello@curativeos.com'
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all block text-center ${
                  tier.highlighted
                    ? 'bg-accent text-accent-foreground hover:opacity-90'
                    : 'border border-muted bg-transparent text-foreground hover:bg-card'
                }`}
              >
                {tier.cta}
              </motion.a>

              {/* Features list */}
              <ul className="space-y-4 flex-grow">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start space-x-3 text-sm text-foreground"
                  >
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All plans include 14 days free. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
