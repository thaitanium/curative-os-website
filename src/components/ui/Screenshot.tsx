import Image from 'next/image';
import { clsx } from 'clsx';

/**
 * Browser-chrome frame around a real product screenshot.
 * Screenshots are captured at 1600x1000 from the live CRM demo workspace.
 */
export function Screenshot({
  src,
  alt,
  className,
  priority = false,
  width = 1600,
  height = 1000,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <figure
      className={clsx(
        'product-window overflow-hidden rounded-lg border border-border bg-card',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-background/80 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="ml-3 hidden rounded border border-border bg-card px-2 py-0.5 text-[9px] text-muted-foreground sm:inline">
          app.curativeos.com
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="block w-full"
      />
    </figure>
  );
}
