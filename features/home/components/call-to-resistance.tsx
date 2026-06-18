import { Quote } from "lucide-react";

export function CallToResistance() {
  return (
    <section className="bg-secondary-fixed/40 py-section">
      <div className="container max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border-l-8 border-secondary bg-white p-8 shadow-xl md:p-16">
          <Quote className="absolute left-6 top-6 size-20 text-secondary/12" />
          <blockquote className="relative z-10 text-balance font-display text-2xl font-semibold italic leading-relaxed text-foreground md:text-4xl">
            “Chúng ta muốn hòa bình, chúng ta phải nhân nhượng. Nhưng chúng ta
            càng nhân nhượng, thực dân Pháp càng lấn tới, vì chúng quyết tâm
            cướp nước ta một lần nữa! Chúng ta thà hy sinh tất cả, chứ nhất
            định không chịu mất nước, nhất định không chịu làm nô lệ. Hỡi đồng
            bào! Chúng ta phải đứng lên!...”
          </blockquote>
          <div className="relative z-10 mt-8 text-center">
            <cite className="font-display text-2xl font-semibold not-italic text-primary">
              Chủ tịch Hồ Chí Minh
            </cite>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Lời kêu gọi Toàn quốc kháng chiến, tối 19/12/1946
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
