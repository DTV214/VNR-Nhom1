import Image from "next/image";
import { ShieldAlert } from "lucide-react";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlitchVaultCard } from "@/components/ui/glitch-vault-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ultimatumCards } from "@/features/home/data/content";

export function UltimatumSection() {
  return (
    <section className="bg-background py-section">
      <div className="container">
        <SectionHeading
          description="Ngày 18 và sáng 19/12/1946, Pháp gửi liên tiếp tối hậu thư với ba yêu cầu đánh thẳng vào khả năng tự vệ và quyền quản lý Thủ đô."
          eyebrow="Tối hậu thư"
          title="Khi lằn ranh bị giẫm đạp"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ultimatumCards.map((item, index) => (
            <GlitchVaultCard
              className="group overflow-hidden border-primary/20 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              key={item.title}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={item.image}
                />
              </div>
              <CardHeader className="pb-4">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    {item.tag}
                  </span>
                  <ShieldAlert className="size-8 text-primary/45" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-medium leading-7 text-foreground/80 md:text-[17px]">
                  {item.description}
                </p>
                <div className="mt-6 h-1.5 rounded-full bg-primary-fixed">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${(index + 1) * 32}%` }}
                  />
                </div>
              </CardContent>
            </GlitchVaultCard>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-primary/20 bg-primary-fixed/70 p-6 text-center">
          <p className="text-lg leading-8 text-foreground">
            Giao quyền an ninh và tước vũ khí tự vệ đồng nghĩa với việc giải
            tán bộ máy bảo vệ chính quyền. Nhượng bộ đến đây không còn là hòa
            hoãn, mà là bị buộc phải đầu hàng.
          </p>
        </div>
      </div>
    </section>
  );
}
