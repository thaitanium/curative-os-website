import {
  Bot,
  FileSearch,
  GitFork,
  KanbanSquare,
  MessageSquareText,
  Scale,
  Upload,
  WalletCards,
} from "lucide-react";

const capabilities = [
  {
    icon: KanbanSquare,
    title: "Flexible deal pipelines",
    description:
      "Build custom boards, stages, card titles, owners, outcomes, and views around your acquisition process.",
  },
  {
    icon: GitFork,
    title: "Visual Family Trees",
    description:
      "Map relatives and possible heirs, track life status, attach evidence, and keep every relationship reviewable.",
  },
  {
    icon: Scale,
    title: "Legal matter tracking",
    description:
      "See parties, suit types, counsel, deadlines, litigation stage, and an append-only matter timeline at a glance.",
  },
  {
    icon: FileSearch,
    title: "Documents that stay connected",
    description:
      "Keep deeds, wills, probate files, title reports, and supporting evidence with the deal and the right person.",
  },
  {
    icon: Bot,
    title: "AI-assisted underwriting",
    description:
      "Score curative risk with structured reasoning while your team remains in control of every decision.",
  },
  {
    icon: MessageSquareText,
    title: "Outreach and activity",
    description:
      "Centralize messages, call context, notes, reminders, and the history of how a deal moved forward.",
  },
  {
    icon: WalletCards,
    title: "Cash and portfolio visibility",
    description:
      "Log deployed and returned cash while dashboards surface pipeline value, revenue, and conversion health.",
  },
  {
    icon: Upload,
    title: "Fast list intake",
    description:
      "Import county and tax lists, map fields, catch errors, and turn raw spreadsheets into workable leads.",
  },
] as const;

export function CapabilityGrid() {
  return (
    <section
      aria-labelledby="capability-grid-title"
      className="border-b border-border bg-card/25 px-5 py-20 md:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="marketing-eyebrow">One connected workspace</p>
            <h2
              id="capability-grid-title"
              className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl"
            >
              Built for the full curative deal.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-muted-foreground lg:justify-self-end">
            From the first county list through heir research, legal resolution,
            outreach, and cash tracking—your team works from the same source of
            truth.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="bg-background p-6 transition-colors hover:bg-card"
              >
                <span className="grid h-9 w-9 place-items-center rounded-md border border-accent/25 bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {capability.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
