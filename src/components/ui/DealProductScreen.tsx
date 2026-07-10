import { FileText, Home, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DealProductScreenProps {
  className?: string;
}

export function DealProductScreen({ className }: DealProductScreenProps) {
  return (
    <div className={cn('product-window aspect-[1.55/1] overflow-hidden rounded-lg border border-border bg-[#0a0d0c]', className)}>
      <div className="flex h-8 items-center gap-2 border-b border-border bg-card px-3">
        <span className="text-[6px] font-bold uppercase tracking-[0.1em] text-accent">Deal workspace</span>
        <span className="text-[6px] text-muted-foreground">Property intelligence</span>
      </div>
      <header className="flex h-12 items-center justify-between border-b border-border px-3">
        <div>
          <p className="text-[5px] uppercase text-muted-foreground">Sales</p>
          <h2 className="mt-1 text-[9px] font-semibold">6232 Skylight Dr, Memphis, TN</h2>
        </div>
        <span className="inline-flex h-6 items-center gap-1 rounded bg-accent px-2 text-[6px] font-bold text-accent-foreground">
          <Phone className="h-2.5 w-2.5" aria-hidden="true" />
          Start outreach
        </span>
      </header>
      <div className="grid h-[calc(100%-5rem)] grid-cols-[0.75fr_1.55fr_0.85fr]">
        <aside className="border-r border-border p-2.5">
          <p className="text-[6px] font-bold uppercase tracking-[0.08em] text-muted-foreground">Property</p>
          {[
            ['Assessed value', '$235,013'],
            ['Tax delinquency', '$18,420'],
            ['Primary owner', 'Sarah Johnson'],
            ['County', 'Shelby, TN'],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-border/70 py-2">
              <p className="text-[5px] text-muted-foreground">{label}</p>
              <p className="mt-1 text-[7px] font-medium">{value}</p>
            </div>
          ))}
        </aside>
        <main className="p-2.5">
          <div className="product-map grid h-[60%] place-items-center rounded border border-border text-center">
            <div>
              <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <p className="mt-2 text-[6px] text-muted-foreground">6232 Skylight Dr</p>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-[22px_1fr] gap-2 rounded border border-border p-2">
            <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-accent/15 text-[5px] font-bold text-accent">PT</span>
            <p className="text-[6px] leading-[1.45] text-muted-foreground">
              <strong className="block text-foreground">Phillip Thai · Today, 9:42 AM</strong>
              Spoke with Sarah. Open to reviewing an offer after the title report.
            </p>
          </div>
        </main>
        <aside className="border-l border-border p-2.5">
          <p className="text-[6px] font-bold uppercase tracking-[0.08em] text-muted-foreground">Next action</p>
          <div className="mt-2 grid grid-cols-[20px_1fr] gap-2 rounded border border-amber-500/30 bg-amber-500/[0.06] p-2">
            <Phone className="h-3 w-3 text-amber-400" aria-hidden="true" />
            <p className="text-[6px]"><strong className="block">Call Sarah</strong><span className="text-[5px] text-muted-foreground">Today, 2:30 PM</span></p>
          </div>
          <p className="mt-4 text-[6px] font-bold uppercase tracking-[0.08em] text-muted-foreground">Deal health</p>
          <span className="mt-2 inline-flex rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[5px] font-semibold text-accent">Strong</span>
          <p className="mt-4 text-[6px] font-bold uppercase tracking-[0.08em] text-muted-foreground">Documents</p>
          <div className="mt-2 flex items-center gap-2 text-[6px]"><FileText className="h-3 w-3 text-muted-foreground" aria-hidden="true" />Title report.pdf</div>
          <div className="mt-2 flex items-center gap-2 text-[6px]"><Home className="h-3 w-3 text-muted-foreground" aria-hidden="true" />Property record</div>
        </aside>
      </div>
    </div>
  );
}
