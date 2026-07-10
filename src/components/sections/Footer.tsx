import Link from 'next/link';

const productLinks = [
  { label: 'Product', href: '/#product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'SOPs', href: '/sops' },
  { label: 'Changelog', href: '/changelog' },
];

const companyLinks = [
  { label: 'Contact', href: 'mailto:hello@curativeos.com' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="bg-background px-5 py-12 md:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_0.75fr_0.75fr]">
        <div>
          <Link href="/" className="flex w-fit items-center gap-2.5" aria-label="Curative OS home">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-accent/40 bg-accent/10 text-xs font-bold text-accent">C</span>
            <strong className="text-sm font-semibold">Curative OS</strong>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">The operating system for teams resolving messy title and moving properties toward acquisition.</p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">Product</h3>
          <ul className="mt-4 space-y-3">{productLinks.map((link) => <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">Company</h3>
          <ul className="mt-4 space-y-3">{companyLinks.map((link) => <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link></li>)}</ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Curative OS. All rights reserved.</p>
        <p>Built for curative real estate investing.</p>
      </div>
    </footer>
  );
}
