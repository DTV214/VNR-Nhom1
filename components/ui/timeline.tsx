import Image from "next/image";

import { cn } from "@/lib/utils";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  image?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-4 top-0 hidden h-full w-px bg-outline-variant md:left-1/2 md:block" />
      <div className="space-y-10 md:space-y-14">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              className="relative grid items-center gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-8"
              key={item.title}
            >
              <div
                className={cn(
                  "overflow-hidden rounded-lg border border-outline-variant/70 bg-card shadow-sm",
                  isEven
                    ? "md:col-start-1 md:text-right"
                    : "md:col-start-3 md:text-left",
                )}
              >
                {item.image ? (
                  <div className="relative aspect-[16/9]">
                    <Image
                      alt={item.title}
                      className="object-cover"
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      src={item.image}
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <span className="font-display text-xl font-semibold text-primary">
                    {item.date}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="absolute left-3 top-7 hidden size-3 rounded-full bg-primary shadow-glow md:static md:col-start-2 md:block" />
            </article>
          );
        })}
      </div>
    </div>
  );
}
