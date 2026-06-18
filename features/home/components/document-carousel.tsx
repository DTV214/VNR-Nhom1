import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { documentSlides } from "@/features/home/data/content";

export function DocumentCarousel() {
  return (
    <section className="bg-surface-low py-section" id="tu-lieu">
      <div className="container">
        <SectionHeading
          description="Khu vực này đã sẵn cấu trúc để thay bằng ảnh Cloudinary thật, metadata tư liệu hoặc trích đoạn phân tích."
          title="Tư liệu trực quan"
        />
        <Carousel
          className="mx-auto mt-14 max-w-5xl"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {documentSlides.map((slide) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={slide.title}>
                <article className="overflow-hidden rounded-2xl border border-outline-variant/70 bg-white shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      alt={slide.title}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      src={slide.image}
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
                      {slide.label}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold">
                      {slide.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {slide.description}
                    </p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
