const stats = [
  { number: '21', label: 'Active operators' },
  { number: '$5M', label: 'Portfolio target' },
  { number: '1–2/wk', label: 'Curative acquisitions' },
];

export default function SocialProof() {
  return (
    <section className="border-b border-border px-5 py-20 md:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <p className="marketing-eyebrow">Used in the field</p>
          <h2 className="mt-5 max-w-xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Built alongside Flow Property Group.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
            The operating system is shaped by the same researchers and acquisition teams using it to move real title problems toward a close.
          </p>
        </div>
        <div className="grid grid-cols-3 border-y border-border lg:border-y-0 lg:border-l">
          {stats.map((stat) => (
            <div key={stat.label} className="flex min-h-32 flex-col justify-center border-r border-border px-4 text-center last:border-r-0">
              <strong className="text-2xl font-semibold tabular-nums text-accent md:text-3xl">{stat.number}</strong>
              <span className="mt-2 text-[10px] text-muted-foreground md:text-xs">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
