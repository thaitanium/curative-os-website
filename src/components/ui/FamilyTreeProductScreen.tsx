import { FileText, GitFork, Plus, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

interface FamilyTreeProductScreenProps {
  className?: string;
}

interface PersonNodeProps {
  name: string;
  relationship: string;
  status: "Living" | "Deceased" | "Unknown";
  selected?: boolean;
  documents?: number;
}

const statusStyles = {
  Living: "border-emerald-500/45 bg-emerald-500/[0.08] text-emerald-300",
  Deceased: "border-red-500/45 bg-red-500/[0.08] text-red-300",
  Unknown: "border-amber-500/45 bg-amber-500/[0.08] text-amber-300",
} as const;

function PersonNode({
  name,
  relationship,
  status,
  selected = false,
  documents = 0,
}: PersonNodeProps) {
  return (
    <article
      className={cn(
        "min-w-0 rounded border bg-card px-2 py-1.5",
        statusStyles[status],
        selected && "ring-1 ring-sky-400 ring-offset-1 ring-offset-[#0a0d0c]",
      )}
    >
      <div className="flex items-start gap-1.5">
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-current/10 text-[5px] font-bold">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[6.5px] font-semibold text-foreground">
            {name}
          </p>
          <p className="mt-0.5 truncate text-[5px] text-muted-foreground">
            {relationship}
          </p>
          <div className="mt-1 flex items-center gap-1 text-[4.5px]">
            <span className="rounded-full border border-current/25 px-1 py-0.5">
              {status}
            </span>
            {documents > 0 && (
              <span className="flex items-center gap-0.5 text-muted-foreground">
                <FileText className="h-1.5 w-1.5" aria-hidden="true" />
                {documents}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function FamilyTreeProductScreen({
  className,
}: FamilyTreeProductScreenProps) {
  return (
    <div
      className={cn(
        "product-window aspect-[1.55/1] overflow-hidden rounded-lg border border-border bg-[#0a0d0c]",
        className,
      )}
    >
      <div className="flex h-8 items-center justify-between border-b border-border bg-card px-3">
        <div className="flex items-center gap-2">
          <GitFork className="h-2.5 w-2.5 text-accent" aria-hidden="true" />
          <span className="text-[6px] font-bold uppercase tracking-[0.1em] text-accent">
            Family Tree
          </span>
          <span className="text-[5px] text-muted-foreground">
            214 Willow Bend · Evelyn Carter Estate
          </span>
        </div>
        <span className="rounded border border-border bg-background px-1.5 py-0.5 text-[4.5px] text-muted-foreground">
          Fictional sample
        </span>
      </div>

      <div className="flex h-10 items-center justify-between border-b border-border px-3">
        <div>
          <p className="text-[8px] font-semibold">Carter family</p>
          <p className="mt-0.5 text-[5px] text-muted-foreground">
            Tennessee · 7 people · 6 relationships
          </p>
        </div>
        <div className="flex gap-1.5">
          <span className="inline-flex h-5 items-center gap-1 rounded border border-accent/40 bg-accent/10 px-2 text-[5px] font-semibold text-accent">
            <Plus className="h-2 w-2" aria-hidden="true" />
            Add person
          </span>
          <span className="inline-flex h-5 items-center gap-1 rounded bg-accent px-2 text-[5px] font-semibold text-accent-foreground">
            <GitFork className="h-2 w-2" aria-hidden="true" />
            Add relationship
          </span>
        </div>
      </div>

      <div className="grid h-[calc(100%-4.5rem)] grid-cols-[1fr_30%]">
        <main className="product-map relative min-w-0 border-r border-border px-4 py-3">
          <div className="mx-auto max-w-[92%]">
            <p className="text-center text-[5px] text-muted-foreground">
              Evelyn Carter&apos;s immediate family
            </p>
            <div className="mx-auto mt-2 h-px w-[75%] bg-border" />
            <div className="grid grid-cols-3 gap-2">
              <PersonNode
                name="Thomas Carter"
                relationship="Spouse"
                status="Deceased"
                documents={1}
              />
              <PersonNode
                name="Evelyn Carter"
                relationship="Owner of record"
                status="Deceased"
                selected
                documents={3}
              />
              <PersonNode
                name="Grace Bennett"
                relationship="Sibling"
                status="Deceased"
                documents={1}
              />
            </div>
            <div className="mx-auto h-4 w-px bg-border" />
            <p className="text-center text-[5.5px] font-semibold">
              Grace Bennett&apos;s children
            </p>
            <div className="mx-auto mt-1 h-px w-[68%] bg-border" />
            <div className="grid grid-cols-3 gap-2">
              <PersonNode
                name="Amelia Bennett"
                relationship="Possible heir"
                status="Living"
                documents={1}
              />
              <PersonNode
                name="Noah Bennett"
                relationship="Possible heir"
                status="Living"
              />
              <PersonNode
                name="Clara Reed"
                relationship="Possible heir"
                status="Deceased"
                documents={2}
              />
            </div>
          </div>
        </main>

        <aside className="p-2.5">
          <p className="text-[5px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Selected person
          </p>
          <h3 className="mt-1 text-[9px] font-semibold">Evelyn Carter</h3>
          <span className="mt-1 inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-1.5 py-0.5 text-[5px] text-red-300">
            Deceased
          </span>
          <div className="mt-3 border-b border-border pb-2 text-[5.5px]">
            <p className="text-muted-foreground">Born</p>
            <p className="mt-0.5">March 8, 1941</p>
          </div>
          <div className="border-b border-border py-2 text-[5.5px]">
            <p className="text-muted-foreground">Died</p>
            <p className="mt-0.5">November 12, 2024</p>
          </div>
          <div className="mt-2 flex items-center gap-1 text-[5.5px] text-muted-foreground">
            <UserRound className="h-2.5 w-2.5 text-accent" aria-hidden="true" />
            3 reviewed sources attached
          </div>
        </aside>
      </div>
    </div>
  );
}
