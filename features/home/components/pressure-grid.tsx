import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { icons, type IconName } from "@/features/home/components/icon-map";
import { pressureCards } from "@/features/home/data/content";

export function PressureGrid() {
  return (
    <section className="bg-surface-low py-section" id="boi-canh">
      <div className="container">
        <SectionHeading title="Thế ngàn cân treo sợi tóc" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pressureCards.map((item) => {
            const Icon = icons[item.icon as IconName];

            return (
              <Card
                className="group overflow-hidden border-outline-variant/70 bg-white/90 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                key={item.title}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    alt={item.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    src={item.image}
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary-fixed text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-8" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
