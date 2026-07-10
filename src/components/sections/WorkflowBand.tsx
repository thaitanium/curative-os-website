import { ArrowRight, BadgeCheck, BrainCircuit, MessageSquare, Search, Upload } from 'lucide-react';

const workflow = [
  { label: 'Import', icon: Upload },
  { label: 'Research', icon: Search },
  { label: 'Outreach', icon: MessageSquare },
  { label: 'Underwrite', icon: BrainCircuit },
  { label: 'Close', icon: BadgeCheck },
];

export function WorkflowBand() {
  return (
    <section id="workflow" className="border-b border-border bg-card/40 px-5 py-12 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          From first list to cleared title
        </p>
        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {workflow.map(({ label, icon: Icon }, index) => (
            <div key={label} className="flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {label}
              </span>
              {index < workflow.length - 1 && <ArrowRight className="hidden h-3.5 w-3.5 text-border sm:block" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
