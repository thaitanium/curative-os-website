import { AnimatedNumber, Reveal } from '@/components/motion/Reveal';

const stats = [
  { value: 21, suffix: '', label: 'Active operators in the field' },
  { value: 2, prefix: '1–', suffix: '/wk', label: 'Curative acquisitions worked' },
  { value: 5, suffix: '', label: 'Fact patterns scored per deal' },
] as const;

export default function SocialProof() {
  return (
    <section className="border-b border-border px-5 py-20 md:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <Reveal>
          <p className="marketing-eyebrow">Used in the field</p>
          <h2 className="mt-5 max-w-xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Shaped by teams working real title problems.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
            Curative OS is built alongside the researchers and acquisition
            managers using it every week to move messy titles toward a close.
            New releases ship weekly, driven by what the field actually needs.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="grid grid-cols-3 border-y border-border lg:border-y-0 lg:border-l">
          {stats.map((stat) => (
            <div key={stat.label} className="flex min-h-32 flex-col justify-center border-r border-border px-4 text-center last:border-r-0">
              <strong className="text-2xl font-semibold tabular-nums text-accent md:text-3xl">
                <AnimatedNumber value={stat.value} prefix={'prefix' in stat ? stat.prefix : ''} suffix={stat.suffix} />
              </strong>
              <span className="mt-2 text-[10px] text-muted-foreground md:text-xs">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
