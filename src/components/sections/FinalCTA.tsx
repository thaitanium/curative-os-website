import { ArrowRight, Check } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="border-b border-border bg-[#0d1512] px-5 py-20 md:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="marketing-eyebrow">Ready to work the deal?</p>
          <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Run the full curative workflow in one operating system.
          </h2>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
            {['7-day trial', 'No setup fee', 'Cancel before billing'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />{item}</span>
            ))}
          </div>
        </div>
        <a href="https://app.curativeos.com/signup?plan=starter" className="press inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-accent bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-accent/90">
          Start your 7-day trial
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
