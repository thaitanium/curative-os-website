import { CalendarClock, Check, FileText, Scale, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

interface LegalMattersProductScreenProps {
  className?: string;
}

const milestones = [
  ["May 06", "Petition filed"],
  ["Jun 14", "All parties served"],
  ["Jul 08", "Discovery opened"],
] as const;

export function LegalMattersProductScreen({
  className,
}: LegalMattersProductScreenProps) {
  return (
    <div
      className={cn(
        "product-window aspect-[1.55/1] overflow-hidden rounded-lg border border-border bg-[#0a0d0c]",
        className,
      )}
    >
      <div className="flex h-8 items-center justify-between border-b border-border bg-card px-3">
        <div className="flex items-center gap-2">
          <Scale className="h-2.5 w-2.5 text-accent" aria-hidden="true" />
          <span className="text-[6px] font-bold uppercase tracking-[0.1em] text-accent">
            Financials + Legal
          </span>
          <span className="text-[5px] text-muted-foreground">
            214 Willow Bend · Evelyn Carter Estate
          </span>
        </div>
        <span className="rounded border border-border bg-background px-1.5 py-0.5 text-[4.5px] text-muted-foreground">
          Fictional sample
        </span>
      </div>

      <div className="grid h-[calc(100%-2rem)] grid-cols-[21%_1fr_23%]">
        <aside className="border-r border-border p-2.5">
          <p className="text-[5px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Deal details
          </p>
          {[
            ["Acquisition price", "$42,500"],
            ["Estimated value", "$186,000"],
            ["Net deployed", "$8,750"],
            ["County", "Williamson, TN"],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-border/70 py-2">
              <p className="text-[5px] text-muted-foreground">{label}</p>
              <p className="mt-0.5 text-[6.5px] font-medium">{value}</p>
            </div>
          ))}
        </aside>

        <main className="min-w-0 p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[5px] font-bold uppercase tracking-[0.08em] text-accent">
                Legal matters
              </p>
              <h2 className="mt-1 text-[9px] font-semibold">
                Juniper Ridge v. Bennett Estate
              </h2>
            </div>
            <span className="rounded-full border border-violet-400/40 bg-violet-400/10 px-2 py-1 text-[5px] font-semibold text-violet-300">
              Discovery
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            {["Quiet title", "Partition suit"].map((type) => (
              <span
                key={type}
                className="rounded border border-amber-400/35 bg-amber-400/[0.07] px-1.5 py-0.5 text-[5px] text-amber-300"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded border border-border bg-card/60 p-2">
              <p className="text-[5px] text-muted-foreground">Our party</p>
              <p className="mt-1 text-[6.5px] font-medium">
                Juniper Ridge Acquisitions
              </p>
              <p className="mt-1 text-[5px] text-muted-foreground">
                Property claimant
              </p>
            </div>
            <div className="rounded border border-border bg-card/60 p-2">
              <p className="text-[5px] text-muted-foreground">Opposing party</p>
              <p className="mt-1 text-[6.5px] font-medium">
                Bennett Estate heirs
              </p>
              <p className="mt-1 text-[5px] text-muted-foreground">
                Three represented parties
              </p>
            </div>
          </div>

          <div className="mt-2 rounded border border-border p-2">
            <div className="flex items-center gap-1.5">
              <UserRound
                className="h-2.5 w-2.5 text-accent"
                aria-hidden="true"
              />
              <p className="text-[6px] font-semibold">
                Maya Patel · Reddick &amp; Cole
              </p>
            </div>
            <p className="mt-1 text-[5px] text-muted-foreground">
              maya.patel@example.com · (615) 555-0147
            </p>
          </div>

          <div className="mt-2 flex items-center gap-1.5 rounded border border-amber-500/30 bg-amber-500/[0.06] p-2">
            <CalendarClock
              className="h-2.5 w-2.5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-[5px]">
              <strong className="block text-foreground">
                Next deadline · Aug 21
              </strong>
              <span className="text-muted-foreground">
                Document production due
              </span>
            </p>
          </div>
        </main>

        <aside className="border-l border-border p-2.5">
          <p className="text-[5px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Matter timeline
          </p>
          <div className="mt-3 space-y-3">
            {milestones.map(([date, title], index) => (
              <div key={title} className="grid grid-cols-[14px_1fr] gap-1.5">
                <span className="grid h-3.5 w-3.5 place-items-center rounded-full border border-accent/40 bg-accent/10">
                  {index < 2 ? (
                    <Check className="h-2 w-2 text-accent" aria-hidden="true" />
                  ) : (
                    <FileText
                      className="h-2 w-2 text-accent"
                      aria-hidden="true"
                    />
                  )}
                </span>
                <div>
                  <p className="text-[5.5px] font-medium">{title}</p>
                  <p className="mt-0.5 text-[4.5px] text-muted-foreground">
                    {date}, 2026
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded border border-accent/25 bg-accent/[0.05] p-2">
            <p className="text-[5px] font-semibold text-accent">
              Current position
            </p>
            <p className="mt-1 text-[5px] leading-relaxed text-muted-foreground">
              Title evidence exchanged. Waiting on heirship affidavits from
              opposing counsel.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
