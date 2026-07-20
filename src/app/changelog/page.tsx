"use client";

import { motion } from "framer-motion";
import { FileText, GitFork, Scale } from "lucide-react";
import Footer from "@/components/sections/Footer";

const releaseHighlights = [
  {
    icon: GitFork,
    title: "Visual Family Trees",
    description:
      "Build a relationship map around the owner of record, connect relatives in one workflow, distinguish living and deceased people, and attach reviewed evidence to the right person.",
  },
  {
    icon: Scale,
    title: "Structured Legal Matters",
    description:
      "Track suit types, parties, attorneys, litigation stage, deadlines, and meaningful case updates without reducing the legal picture to a checklist.",
  },
  {
    icon: FileText,
    title: "Connected evidence and documents",
    description:
      "Associate deeds, wills, probate files, title reports, and other supporting documents with the deal and Family Tree people they support.",
  },
] as const;

export default function ChangelogPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header */}
      <section className="w-full bg-background pt-24 md:pt-32 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
          >
            Changelog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Product updates for teams resolving difficult title.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-card py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-border bg-background p-6 md:p-10"
          >
            <div className="flex flex-col gap-3 border-b border-border pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="marketing-eyebrow">July 20, 2026</p>
                <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
                  Family intelligence and legal tracking
                </h2>
              </div>
              <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                Major release
              </span>
            </div>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground">
              This release gives curative teams a clearer way to understand who
              is connected to a property and where each legal matter stands—all
              inside the deal workspace.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {releaseHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <section
                    key={highlight.title}
                    className="rounded-lg border border-border bg-card/40 p-5"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-md border border-accent/25 bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {highlight.description}
                    </p>
                  </section>
                );
              })}
            </div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
