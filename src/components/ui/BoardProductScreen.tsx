import {
  Clock3,
  FileText,
  Gauge,
  LayoutDashboard,
  Layers3,
  MessageSquare,
  Plus,
  Settings2,
  Upload,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface BoardProductScreenProps {
  className?: string;
}

interface PreviewCard {
  address: string;
  owner: string;
  score: number;
  initials: string;
  active?: boolean;
}

interface PreviewColumn {
  name: string;
  count: number;
  cards: PreviewCard[];
}

const columns: PreviewColumn[] = [
  {
    name: 'New',
    count: 14,
    cards: [
      { address: '6232 Skylight Dr', owner: 'Sarah Johnson', score: 92, initials: 'PT' },
      { address: '4207 Brawer Farm Dr', owner: 'Justin Moodie', score: 81, initials: 'RJ' },
    ],
  },
  {
    name: 'Researching',
    count: 8,
    cards: [
      { address: '119 Holly Ave', owner: 'Warren Linda', score: 86, initials: 'PT', active: true },
      { address: '8000 Cullen Blvd', owner: 'Giles Gladys', score: 77, initials: 'AM' },
    ],
  },
  {
    name: 'Contracted',
    count: 5,
    cards: [
      { address: '534 E Charles St', owner: 'Dorothy Lee', score: 89, initials: 'RJ' },
    ],
  },
];

export function BoardProductScreen({ className }: BoardProductScreenProps) {
  return (
    <div className={cn('product-window aspect-[1.55/1] w-full overflow-hidden rounded-tl-lg border border-border bg-[#0a0d0c]', className)}>
      <div className="flex h-8 items-center gap-1.5 border-b border-border bg-card px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-muted" />
        <span className="h-1.5 w-1.5 rounded-full bg-muted" />
        <span className="h-1.5 w-1.5 rounded-full bg-muted" />
        <span className="ml-3 grid h-4 w-48 place-items-center rounded border border-border text-[5px] text-muted-foreground">
          app.curativeos.com/boards/acquisitions
        </span>
      </div>
      <div className="grid h-[calc(100%-2rem)] grid-cols-[44px_1fr]">
        <aside className="flex flex-col items-center gap-4 border-r border-border bg-card/50 py-3 text-muted-foreground" aria-label="Product preview navigation">
          <span className="grid h-6 w-6 place-items-center rounded bg-accent/15 text-[9px] font-bold text-accent">C</span>
          <LayoutDashboard className="h-3 w-3" aria-hidden="true" />
          <Layers3 className="h-3 w-3 text-accent" aria-hidden="true" />
          <Upload className="h-3 w-3" aria-hidden="true" />
          <Settings2 className="h-3 w-3" aria-hidden="true" />
        </aside>
        <div className="min-w-0 p-4">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-[6px] font-bold uppercase tracking-[0.12em] text-accent">Acquisitions</p>
              <h2 className="mt-1 text-[13px] font-semibold">Virginia tax sale pipeline</h2>
            </div>
            <span className="inline-flex h-6 items-center gap-1 rounded bg-accent px-2 text-[7px] font-bold text-accent-foreground">
              <Plus className="h-2.5 w-2.5" aria-hidden="true" />
              New lead
            </span>
          </header>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ['Active value', '$2.36M'],
              ['Open leads', '143'],
              ['Needs attention', '7'],
            ].map(([label, value]) => (
              <div key={label} className="rounded border border-border bg-card/60 px-2 py-2">
                <p className="text-[5px] uppercase tracking-[0.08em] text-muted-foreground">{label}</p>
                <p className="mt-1 text-[10px] font-semibold tabular-nums">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {columns.map((column) => (
              <section key={column.name} className="rounded border border-border bg-background/70 p-1.5">
                <h3 className="flex items-center justify-between text-[6px] font-semibold">
                  {column.name}
                  <span className="text-muted-foreground">{column.count}</span>
                </h3>
                <div className="mt-1.5 space-y-1.5">
                  {column.cards.map((card) => (
                    <article key={card.address} className={cn('rounded border border-border bg-card p-2', card.active && 'border-accent/50 bg-accent/[0.08]')}>
                      <p className="truncate text-[7px] font-semibold">{card.address}</p>
                      <p className="mt-1 truncate text-[5.5px] text-muted-foreground">{card.owner} · Score {card.score}</p>
                      <footer className="mt-2 flex items-center gap-1.5 text-muted-foreground">
                        <Gauge className="h-2 w-2" aria-hidden="true" />
                        {card.score % 2 === 0 ? <Clock3 className="h-2 w-2" aria-hidden="true" /> : <FileText className="h-2 w-2" aria-hidden="true" />}
                        {card.active && <MessageSquare className="h-2 w-2" aria-hidden="true" />}
                        <span className="ml-auto grid h-3.5 w-3.5 place-items-center rounded-full bg-accent/15 text-[4.5px] font-bold text-accent">{card.initials}</span>
                      </footer>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
