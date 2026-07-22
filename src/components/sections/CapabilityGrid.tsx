import {
  Bot,
  FileSearch,
  GitFork,
  Inbox,
  KanbanSquare,
  ListChecks,
  PhoneCall,
  Scale,
  ScanSearch,
  Upload,
  UserSearch,
  WalletCards,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

const capabilities = [
  {
    icon: KanbanSquare,
    title: 'Flexible deal pipelines',
    description:
      'Custom boards, stages, card titles with color logic, saved views, and quick actions built around your acquisition process.',
  },
  {
    icon: ListChecks,
    title: 'Smart Lists',
    description:
      'Live working queues — My follow-ups, Family research needed, Active legal, and your own saved lists — that update themselves.',
  },
  {
    icon: Inbox,
    title: 'Sales Inbox',
    description:
      'Calls, texts, emails, and voicemails grouped by person and deal, with required outcomes and follow-ups built in.',
  },
  {
    icon: GitFork,
    title: 'Visual Family Trees',
    description:
      'Map heirs across generations, track life status, attach evidence, and keep every relationship reviewable.',
  },
  {
    icon: Scale,
    title: 'Legal matter tracking',
    description:
      'Suit types, parties, counsel, deadlines, litigation stage, and an append-only matter timeline at a glance.',
  },
  {
    icon: WalletCards,
    title: 'Cash and portfolio visibility',
    description:
      'Log deployed and returned cash while dashboards surface pipeline value, revenue, and conversion health.',
  },
  {
    icon: Bot,
    title: 'AI-assisted underwriting',
    description:
      'Score curative risk 1–10 with structured reasoning from your fields, notes, call transcripts, and reference files.',
  },
  {
    icon: ScanSearch,
    title: 'AI document analysis',
    description:
      'Read deeds, wills, and probate files with OCR, surface risks and conflicts, and apply suggested field updates you approve.',
  },
  {
    icon: PhoneCall,
    title: 'Calls, texts, and transcripts',
    description:
      'Record calls in the browser, get AI transcripts and summaries, and send iMessages through your own Mac.',
  },
  {
    icon: UserSearch,
    title: 'Skip tracing',
    description:
      'Look up owner contact info from lead data, with DNC and litigator flags, linked straight into the Outreach composer.',
  },
  {
    icon: FileSearch,
    title: 'Documents that stay connected',
    description:
      'Keep deeds, wills, probate files, and title reports with the deal — and linked as evidence to the right person.',
  },
  {
    icon: Upload,
    title: 'Fast list intake',
    description:
      'Import CSV, XLSX, and ACCDB county lists, map fields, catch errors, and turn raw spreadsheets into workable leads.',
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
          <Reveal>
            <p className="marketing-eyebrow">One connected workspace</p>
            <h2
              id="capability-grid-title"
              className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl"
            >
              Built for the full curative deal.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground lg:justify-self-end">
              From the first county list through heir research, legal
              resolution, outreach, and cash tracking—your team works from the
              same source of truth.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.05}
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <StaggerItem key={capability.title} className="h-full">
                <article className="h-full bg-background p-6 transition-colors hover:bg-card">
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
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
