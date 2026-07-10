import { ArrowRight, Check } from 'lucide-react';

const tierDefs = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For solo operators and focused acquisition teams.',
    features: ['Up to 5 user seats', 'Up to 5 pipeline boards', 'Custom fields and stages', 'CSV import wizard', 'Reminders and notes', 'AI underwriting with your API key'],
    planSlug: 'starter',
    highlighted: false,
  },
  {
    name: 'Team',
    price: '$99',
    period: '/month',
    description: 'For teams coordinating research, outreach, and cash.',
    features: ['Everything in Starter', 'Up to 10 user seats', 'Cash events and KPI dashboard', 'iMessage outreach', 'Field presets', 'Board-level permissions'],
    planSlug: 'team',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    period: '',
    description: 'For agencies and multi-workspace operators.',
    features: ['Everything in Team', 'Unlimited user seats', 'Agency management', 'Priority support', 'Early roadmap access', 'White-glove onboarding'],
    planSlug: null,
    highlighted: false,
  },
] as const;

export default function Pricing() {
  const crmUrl = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://app.curativeos.com';

  return (
    <section id="pricing" className="border-b border-border bg-card/35 px-5 py-20 md:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="marketing-eyebrow">Simple pricing</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-5xl">Choose the workspace that fits your operation.</h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">Start with a 7-day trial. No setup fee, and no charge when you cancel before the trial ends.</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {tierDefs.map((tier) => {
            const href = tier.planSlug ? `${crmUrl}/signup?plan=${tier.planSlug}` : 'mailto:hello@curativeos.com';
            return (
              <article key={tier.name} className={`relative flex min-h-[480px] flex-col rounded-lg border p-6 ${tier.highlighted ? 'border-accent/60 bg-accent/[0.06]' : 'border-border bg-background/60'}`}>
                {tier.highlighted && <span className="absolute right-4 top-4 rounded border border-accent/30 bg-accent/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-accent">Most popular</span>}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                <p className="mt-7 flex items-baseline gap-2"><strong className="text-4xl font-semibold tracking-tight">{tier.price}</strong><span className="text-sm text-muted-foreground">{tier.period}</span></p>
                <a href={href} className={`mt-7 inline-flex h-10 items-center justify-center gap-2 rounded-md border text-sm font-semibold transition-colors ${tier.highlighted ? 'border-accent bg-accent text-accent-foreground hover:bg-accent/90' : 'border-border bg-card hover:border-accent/50'}`}>
                  {tier.planSlug ? 'Start 7-day trial' : 'Contact sales'}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <ul className="mt-7 space-y-3 border-t border-border pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-foreground/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{feature}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
