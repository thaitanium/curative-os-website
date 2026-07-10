import { Check, Minus } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Pipeline',
    generic: 'Generic opportunity stages',
    curative: 'Stages that match title research, outreach, and acquisition',
  },
  {
    feature: 'Property intelligence',
    generic: 'Contacts and notes in separate records',
    curative: 'Heirs, ownership, maps, documents, and risk on one deal',
  },
  {
    feature: 'Reporting',
    generic: 'Sales metrics assembled from scratch',
    curative: 'Cash deployed, cycle time, deal score, and pipeline value',
  },
  {
    feature: 'List intake',
    generic: 'Manual field matching and cleanup',
    curative: 'Reusable mappings with duplicate-aware imports',
  },
];

export default function Problem() {
  return (
    <section className="border-b border-border bg-card/35 px-5 py-20 md:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="marketing-eyebrow">A purpose-built system</p>
            <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-tight md:text-5xl">
              Generic CRMs were not built for this work.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end">
            Curative OS keeps the property, people, title facts, outreach, and money connected so your team does not have to rebuild context in every conversation.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-[0.65fr_1fr_1.35fr] border-b border-border bg-background/70 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            <span>Workflow</span>
            <span>Generic CRM</span>
            <span className="text-accent">Curative OS</span>
          </div>
          {comparisonData.map((row) => (
            <div key={row.feature} className="grid grid-cols-[0.65fr_1fr_1.35fr] items-start border-b border-border px-4 py-4 text-sm last:border-b-0">
              <strong className="font-medium text-foreground">{row.feature}</strong>
              <span className="flex gap-2 pr-4 text-muted-foreground"><Minus className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{row.generic}</span>
              <span className="flex gap-2 text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{row.curative}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
