import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { hoChiMinhGallery } from "@/features/home/data/content";

export function HoChiMinhGallery() {
  const galleryLoop = [...hoChiMinhGallery, ...hoChiMinhGallery];

  return (
    <section className="overflow-hidden bg-surface-high py-section">
      <div className="container">
        <SectionHeading
          description="Bộ ảnh chạy tự động chậm rãi. Khi rê chuột, chuyển động dừng lại để người xem đọc chú thích tư liệu."
          eyebrow="Tư liệu hình ảnh"
          title="Những hình ảnh về Bác Hồ"
        />
      </div>

      <div className="gallery-marquee mt-14">
        <div className="gallery-track flex w-max gap-6 px-6">
          {galleryLoop.map((item, index) => (
            <article
              className="gallery-card group h-[430px] w-[300px] shrink-0 overflow-hidden rounded-2xl border border-outline-variant/70 bg-white shadow-md md:h-[470px] md:w-[360px]"
              key={`${item.title}-${index}`}
            >
              <div className="relative h-[270px] overflow-hidden md:h-[310px]">
                <Image
                  alt={item.title}
                  className="gallery-image object-cover"
                  fill
                  sizes="(min-width: 768px) 360px, 300px"
                  src={item.image}
                />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-secondary-fixed px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                  {item.period}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground transition-all duration-500 group-hover:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
