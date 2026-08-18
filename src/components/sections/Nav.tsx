import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Curative OS home">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-accent/40 bg-accent/10 text-xs font-bold text-accent">
            C
          </span>
          <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground">
            Curative OS
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/#product" className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
            Product
          </a>
          <Link
            href="/sops"
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Resources
          </Link>
          <Link
            href="/pricing"
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://app.curativeos.com" className="hidden text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Log In
          </a>
          <a
            href="https://app.curativeos.com/signup?plan=starter"
            className="press inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-md border border-accent bg-accent px-3.5 text-xs font-semibold text-accent-foreground hover:bg-accent/90"
          >
            Start free trial
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}
