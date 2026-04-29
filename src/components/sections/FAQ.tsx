'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Is there a setup fee?',
    answer:
      "No setup fees. You can start your 14-day free trial immediately. No credit card required. When your trial ends, you'll have the choice to upgrade to Solo, Team, or Agency pricing.",
  },
  {
    question: 'Can I import deals from my existing CRM?',
    answer:
      'Yes. We support CSV imports with field mapping. If you have a custom CRM, we can help you export to CSV and import into Curative OS with your columns mapped.',
  },
  {
    question: 'What happens to my data when I cancel?',
    answer:
      "Your data belongs to you. We'll export your deals, audit logs, and everything else to CSV or JSON. You can leave anytime, penalty-free.",
  },
  {
    question: 'Does Curative OS work for other real estate models?',
    answer:
      "Curative OS is purpose-built for curative investing. If you're doing traditional fix & flip, wholesale, or rental workflows, it will work, but we've optimized specifically for title cloud strategies.",
  },
  {
    question: 'Can my team use it offline?',
    answer:
      'The web app requires an internet connection. A mobile app with offline sync is on the roadmap. For now, the mobile web experience is fully functional on iOS and Android devices.',
  },
  {
    question: 'How secure is Curative OS?',
    answer:
      'We use industry-standard encryption (AES-256 at rest, TLS in transit), regular security audits, and role-based access controls. Agency tier includes SOC 2 compliance certification.',
  },
  {
    question: 'Can I integrate Curative OS with other tools?',
    answer:
      'Solo and Team plans support Zapier and native integrations with Slack and email. Agency tier includes API access for custom integrations and webhooks.',
  },
  {
    question: "What's your support process?",
    answer:
      'Solo tier includes email support (24-hour response). Team tier gets priority support with video walkthrough onboarding. Agency tier includes a dedicated account manager and SLA guarantees.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-card py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            {"Can't find what you're looking for? "}
            <a href="mailto:hello@curativeos.com" className="text-accent font-semibold hover:underline">
              Contact our team.
            </a>
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="border border-border rounded-lg overflow-hidden bg-background"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 hover:bg-card transition-colors"
              >
                <h3 className="text-left font-semibold text-foreground text-lg">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border"
                  >
                    <p className="p-6 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
