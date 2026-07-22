'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Is there a setup fee?',
    answer:
      'No setup fees. You can start your 7-day trial immediately with a card on file. Cancel anytime before the trial ends to avoid being charged.',
  },
  {
    question: 'Can I import deals from my existing CRM or county lists?',
    answer:
      'Yes. The import wizard accepts CSV, XLSX, and even ACCDB (Microsoft Access) files — the format most county tax rolls arrive in. Upload, map your columns to CRM fields, set the stage and card title, and go. Leads are deduplicated by address, and blank or formula-filled spreadsheet rows are filtered out automatically.',
  },
  {
    question: 'What are Smart Lists?',
    answer:
      "Smart Lists are live working queues built from the deals already on your boards — they never copy or move anything. Starter lists like My follow-ups, Family research needed, and Active legal come built in, and on the Team plan you can save your own lists with custom match rules and filters. When deal data changes, the lists update themselves.",
  },
  {
    question: 'How do Family Trees work, and which plan includes them?',
    answer:
      'Family Trees are on the Team plan. You map the owner of record and every relative around them — spouses, children, grandchildren — across multiple generations, with living, deceased, and unknown status color-coded. Attach deeds, wills, probate files, and obituaries as evidence on each person, mark possible heirs, verify relationships, and merge duplicates without losing history.',
  },
  {
    question: 'Can I track lawsuits and legal work on a deal?',
    answer:
      'Yes. Legal Matters lives in the Financials + Legal workspace on every deal. Each matter tracks its litigation stage, suit types, parties, your attorney, opposing counsel, deadlines, and an append-only timeline of filings, hearings, and attorney communications. One deal can carry multiple matters, each with its own case number and timeline.',
  },
  {
    question: "What's the difference between the Sales Inbox and Outreach?",
    answer:
      'The Sales Inbox is your team-wide communication queue — calls, texts, emails, and voicemails grouped by person and deal, with views for Needs reply, Unread, and each channel. Outreach is the per-deal section where you log calls, emails, and iMessages. The inbox tells you what to work next; Outreach records what happened on a specific deal.',
  },
  {
    question: 'How does the AI underwriting work?',
    answer:
      'Curative OS uses a bring-your-own-API-key model — connect Claude, OpenAI, Gemini, Grok, Mistral, or DeepSeek in Settings. The AI scores each deal 1–10 with full reasoning, using your custom fields, notes, call transcripts, and any reference files you upload. The same key powers AI document analysis, which reads deeds and probate files and suggests field updates you approve before they apply. You can override any AI output — your call wins.',
  },
  {
    question: 'Can I call and text from Curative OS?',
    answer:
      'You can record calls in the browser or upload audio, and the AI transcribes and summarizes every conversation automatically. iMessages send through your own Mac — pair it once in Settings → Integrations and send texts straight from a deal. Inbound calling and texting through a connected phone provider surface in the Sales Inbox.',
  },
  {
    question: 'How does skip tracing work?',
    answer:
      'Select leads in a list, click Skip Trace, review the cost estimate, and confirm. Returned phone numbers, emails, and addresses link automatically to the deal and appear as suggestions in the Outreach composer — with litigator and Do Not Call indicators flagged, and DNC numbers excluded from suggestions. Skip trace is metered per lookup and billed through your workspace.',
  },
  {
    question: 'Does Curative OS work for other real estate models?',
    answer:
      "Curative OS is purpose-built for curative investing — properties with messy titles, unpaid taxes, and missing heirs. If you're doing traditional fix & flip, wholesale, or rental workflows, it will work, but we've optimized specifically for curative deal flow.",
  },
  {
    question: 'What happens to my data when I cancel?',
    answer:
      'Your data belongs to you. Boards and lead lists export to CSV or JSON anytime, and you can leave penalty-free. Deleted records sit in the Trash for 30 days before permanent removal.',
  },
  {
    question: "What's coming next on the roadmap?",
    answer:
      'An automation builder (tags are already wired for it), full phone and SMS provider sending from the Sales Inbox, deeper AI research assistance on Family Trees, and a mobile app. We ship every week — check the changelog to see what just landed.',
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
