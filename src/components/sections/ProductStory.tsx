import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { Screenshot } from '@/components/ui/Screenshot';

const stories = [
  {
    number: '01',
    label: 'Pipeline',
    title: 'Know what moves next.',
    description:
      'Kanban boards with stages that match curative work — not generic sales steps. Card titles, colored pills, and quick actions are composed from your own fields.',
    bullets: [
      'Compose card titles from up to 3 fields with color logic',
      'Saved views for every filter combination',
      'Won, Lost, and terminal stages feed your KPIs',
    ],
    href: '/sops/set-up-first-board',
    linkLabel: 'Explore boards',
    screenshot: 'board.png',
    screenshotAlt: 'Curative OS kanban board with colored deal cards across pipeline stages',
    screenLabel: 'Boards',
    screenshotWidth: 1600,
    screenshotHeight: 1000,
    frameClass: '',
    planBadge: null,
  },
  {
    number: '02',
    label: 'Smart Lists',
    title: 'Always know what to work next.',
    description:
      'Live working queues built from the deals already on your boards. When deal data changes, list membership updates automatically — nothing to rebuild, nothing to copy.',
    bullets: [
      'Starter lists: My follow-ups, New & unworked, No response, Family research needed, Active legal',
      'Save reusable workspace lists with match rules and filters',
      'Signal columns show why each deal is in the queue',
    ],
    href: '/sops/work-a-smart-list',
    linkLabel: 'Explore Smart Lists',
    screenshot: 'smart-lists.png',
    screenshotAlt: 'Curative OS Smart List showing a live filtered queue of deals',
    screenLabel: 'Smart Lists',
    screenshotWidth: 1600,
    screenshotHeight: 1000,
    frameClass: '',
    planBadge: null,
  },
  {
    number: '03',
    label: 'Sales Inbox',
    title: 'Every conversation, one queue.',
    description:
      'Calls, texts, emails, and voicemails grouped by person and deal. Your team works the conversation — not five different tools — and every touch lands on the deal timeline.',
    bullets: [
      'Views for Needs reply, Unread, Calls, Texts, and Voicemails',
      'Required call outcomes keep history honest',
      'Assign conversations and schedule follow-ups in place',
    ],
    href: '/sops/run-the-sales-inbox',
    linkLabel: 'Explore the Sales Inbox',
    screenshot: 'sales-inbox.png',
    screenshotAlt: 'Curative OS Sales Inbox grouping calls, texts, and voicemails by person and deal',
    screenLabel: 'Sales Inbox',
    screenshotWidth: 1600,
    screenshotHeight: 1000,
    frameClass: '',
    planBadge: null,
  },
  {
    number: '04',
    label: 'Family Tree',
    title: 'Turn heir research into a living map.',
    description:
      'Build a multi-generation relationship map around the owner of record. Track living, deceased, and unknown at a glance, attach evidence to every person, and see exactly which branches still need work.',
    bullets: [
      'Two-parent lineages, descendants, and verified relationships',
      'Attach deeds, wills, probate files, and obituaries as evidence',
      'Merge duplicates and archive without losing history',
    ],
    href: '/sops/build-a-family-tree',
    linkLabel: 'Explore Family Trees',
    screenshot: 'family-tree.png',
    screenshotAlt: 'Curative OS Family Tree mapping a deceased owner, heirs, and descendants with life-status colors',
    screenLabel: 'Family Tree',
    screenshotWidth: 1864,
    screenshotHeight: 1107,
    frameClass: '',
    planBadge: 'Team plan',
  },
  {
    number: '05',
    label: 'Legal Matters',
    title: 'Know where every matter stands.',
    description:
      'Track lawsuits and claims with the depth they deserve — litigation stage, suit types, parties, counsel, deadlines, and an append-only timeline of filings and hearings.',
    bullets: [
      'Multiple matters per deal, each with its own timeline',
      'Attorney and opposing counsel details stay connected',
      'Status colors surface active and urgent matters instantly',
    ],
    href: '/sops/track-legal-matters',
    linkLabel: 'Explore legal tracking',
    screenshot: 'legal-matters.png',
    screenshotAlt: 'Curative OS Legal Matters panel showing a quiet title action with stage, parties, and timeline',
    screenLabel: 'Legal Matters',
    screenshotWidth: 672,
    screenshotHeight: 917,
    frameClass: 'mx-auto lg:max-w-[620px]',
    planBadge: null,
  },
  {
    number: '06',
    label: 'Financials',
    title: 'Log every dollar on the deal.',
    description:
      'Cash Events track what you actually deployed and what came back — purchase, cure costs, closing costs, proceeds — with a running Net Deployed total that feeds your dashboard KPIs.',
    bullets: [
      'Deployed vs. Returned with notes on every event',
      'Net Deployed always current on the deal',
      'Cash allocated and deal cycle time roll up to the dashboard',
    ],
    href: '/sops/track-cash-on-deal',
    linkLabel: 'Explore cash tracking',
    screenshot: 'cash-events.png',
    screenshotAlt: 'Curative OS Cash Events panel with deployed and returned entries and a net deployed total',
    screenLabel: 'Cash Events',
    screenshotWidth: 1600,
    screenshotHeight: 1000,
    frameClass: '',
    planBadge: null,
  },
] as const;

const gallery = [
  {
    screenshot: 'deal-overview.png',
    alt: 'Curative OS deal overview with outreach, notes, reminders, and documents',
    title: 'The deal workspace',
    description: 'Outreach, notes, reminders, documents, and AI underwriting around one property.',
  },
  {
    screenshot: 'dashboard.png',
    alt: 'Curative OS dashboard with KPI tiles and conversion funnel',
    title: 'Dashboard & KPIs',
    description: 'Pipeline value, outcomes, cash allocated, and the conversion funnel for any board.',
  },
  {
    screenshot: 'import.png',
    alt: 'Curative OS import wizard mapping spreadsheet columns to CRM fields',
    title: 'Import wizard',
    description: 'CSV, XLSX, and ACCDB intake with column mapping and duplicate-aware imports.',
  },
  {
    screenshot: 'underwriting.png',
    alt: 'Curative OS AI Underwriting panel with an 8 out of 10 heat score, reasoning, and flagged risks',
    title: 'AI Underwriting',
    description: 'A 1\u201310 heat score with reasoning and flagged risks, powered by your own AI key.',
    width: 672,
    height: 467,
  },
] as const;

export default function ProductStory() {
  return (
    <section id="product" aria-labelledby="product-story-title">
      <header className="border-b border-border px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <Reveal>
            <p className="marketing-eyebrow">Product walkthrough</p>
            <h2
              id="product-story-title"
              className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl"
            >
              Every piece of the deal, in one place.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground lg:justify-self-end">
              These are the real screens where teams research heirs, work
              conversations, track legal, and record every dollar on a curative
              deal.
            </p>
          </Reveal>
        </div>
      </header>

      {stories.map((story, index) => (
        <article
          key={story.number}
          className={
            index % 2 === 1
              ? 'border-b border-border bg-card/35'
              : 'border-b border-border'
          }
        >
          <div
            className={`mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 lg:items-center lg:gap-20 lg:px-12 lg:py-28 ${
              // `order` flips which side each item renders on but NOT which grid
              // track it occupies, so the track sizes have to flip with it —
              // otherwise the screenshot lands in the narrow column and the
              // max-w-md copy leaves the wide column half empty.
              index % 2 === 1
                ? 'lg:grid-cols-[1.32fr_0.68fr]'
                : 'lg:grid-cols-[0.68fr_1.32fr]'
            }`}
          >
            <Reveal
              direction={index % 2 === 1 ? 'left' : 'right'}
              className={index % 2 === 1 ? 'lg:order-2' : undefined}
            >
              <span className="text-xs font-semibold text-muted-foreground">
                {story.number}
              </span>
              <p className="mt-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
                {story.label}
                {story.planBadge && (
                  <span className="rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[9px] font-bold normal-case tracking-normal text-accent">
                    {story.planBadge}
                  </span>
                )}
              </p>
              <h3 className="mt-3 max-w-md text-balance text-3xl font-semibold leading-tight md:text-4xl">
                {story.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
                {story.description}
              </p>
              <ul className="mt-6 space-y-3">
                {story.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href={story.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                {story.linkLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
            <Reveal
              direction={index % 2 === 1 ? 'right' : 'left'}
              delay={0.1}
              className={index % 2 === 1 ? 'lg:order-1' : undefined}
            >
              <div className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <span className="text-accent">Product screen</span>
                {story.screenLabel}
              </div>
              <Screenshot
                src={`/screenshots/${story.screenshot}`}
                alt={story.screenshotAlt}
                width={story.screenshotWidth}
                height={story.screenshotHeight}
                className={`shadow-[0_26px_80px_rgba(0,0,0,0.38)] ${story.frameClass}`.trim()}
              />
            </Reveal>
          </div>
        </article>
      ))}

      <div className="border-b border-border bg-card/35 px-5 py-20 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="marketing-eyebrow">And the rest of the workspace</p>
            <h3 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-4xl">
              From raw county list to closed deal.
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
            {gallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <Screenshot
                  src={`/screenshots/${item.screenshot}`}
                  alt={item.alt}
                  width={'width' in item ? item.width : 1600}
                  height={'height' in item ? item.height : 1000}
                  className="shadow-[0_18px_50px_rgba(0,0,0,0.32)]"
                />
                <h4 className="mt-4 text-base font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
