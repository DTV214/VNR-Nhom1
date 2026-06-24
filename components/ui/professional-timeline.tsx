type ProfessionalTimelineItem = {
  date: string;
  title: string;
  description: string;
};

type ProfessionalTimelineProps = {
  items: ProfessionalTimelineItem[];
};

export function ProfessionalTimeline({ items }: ProfessionalTimelineProps) {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="relative grid min-w-[1120px] grid-cols-6 gap-6 pt-9">
        <div className="absolute left-[8%] right-[8%] top-[45px] h-px bg-outline-variant" />
        {items.map((item, index) => (
          <article className="relative pt-8" key={item.title}>
            <span className="absolute left-1/2 top-0 z-10 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-[10px] font-bold text-white shadow">
              {index + 1}
            </span>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                {item.date}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold leading-7">
                {item.title}
              </h3>
              <p className="mt-3 text-base font-medium leading-7 text-foreground/75">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
