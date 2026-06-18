import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { escalationEvents } from "@/features/home/data/content";

export function EscalationSection() {
  return (
    <section className="bg-surface-low py-section">
      <div className="container">
        <SectionHeading
          description="Trước các tối hậu thư ngày 18-19/12/1946 là một chuỗi hành động quân sự khiến xung đột từ nguy cơ biến thành hiện thực."
          eyebrow="Đỉnh điểm tháng 12/1946"
          title="Khi căng thẳng bị đẩy đến giới hạn"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {escalationEvents.map((event) => (
            <article
              className="overflow-hidden rounded-2xl border border-outline-variant/70 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              key={event.title}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  alt={event.title}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={event.image}
                />
              </div>
              <div className="p-7">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  {event.date}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">
                  {event.title}
                </h3>
                <p className="mt-4 line-clamp-3 leading-7 text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
