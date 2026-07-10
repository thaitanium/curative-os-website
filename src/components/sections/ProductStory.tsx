import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { BoardProductScreen } from '@/components/ui/BoardProductScreen';
import { DealProductScreen } from '@/components/ui/DealProductScreen';

const stories = [
  {
    number: '01',
    label: 'Pipeline',
    title: 'Know what moves next.',
    description: 'See the stage, score, owner, reminders, and supporting documents before you open a lead.',
    bullets: ['Compose card titles from your fields', 'Prioritize overdue work at a glance', 'Move deals without losing context'],
    href: '/sops/set-up-first-board',
    linkLabel: 'Explore boards',
    screen: 'board',
  },
  {
    number: '02',
    label: 'Deal intelligence',
    title: 'Understand the property before the call.',
    description: 'Bring research, ownership, maps, notes, and underwriting together in a workspace built around the property.',
    bullets: ['Map the exact property location', 'See note authorship and edit history', 'Keep source documents attached'],
    href: '/sops/score-deal-ai-underwriting',
    linkLabel: 'Explore deal details',
    screen: 'deal',
  },
] as const;

export default function ProductStory() {
  return (
    <section id="product" aria-labelledby="product-story-title">
      <header className="border-b border-border px-5 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="marketing-eyebrow">Product walkthrough</p>
            <h2 id="product-story-title" className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">
              Every piece of the deal, in one place.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-muted-foreground lg:justify-self-end">
            Follow the complete workflow through the exact screens where your team researches properties, moves leads, and records decisions.
          </p>
        </div>
      </header>

      {stories.map((story, index) => (
        <article key={story.number} className={index % 2 === 1 ? 'border-b border-border bg-card/35' : 'border-b border-border'}>
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
            <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
              <span className="text-xs font-semibold text-muted-foreground">{story.number}</span>
              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.12em] text-accent">{story.label}</p>
              <h3 className="mt-3 max-w-md text-balance text-3xl font-semibold leading-tight md:text-4xl">{story.title}</h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{story.description}</p>
              <ul className="mt-6 space-y-3">
                {story.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link href={story.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80">
                {story.linkLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className={index % 2 === 1 ? 'lg:order-1' : undefined}>
              <div className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <span className="text-accent">Product screen</span>
                {story.screen === 'board' ? 'Boards' : 'Deal details'}
              </div>
              {story.screen === 'board' ? <BoardProductScreen className="rounded-lg shadow-[0_26px_80px_rgba(0,0,0,0.38)]" /> : <DealProductScreen className="shadow-[0_26px_80px_rgba(0,0,0,0.38)]" />}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
