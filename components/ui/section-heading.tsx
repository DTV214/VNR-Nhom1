import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-bold leading-tight md:text-5xl",
          inverse ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mx-auto mt-4 max-w-3xl text-pretty text-base leading-7 md:text-lg",
            inverse ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
