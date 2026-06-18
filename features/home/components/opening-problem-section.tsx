import { Building2, HelpCircle } from "lucide-react";

export function OpeningProblemSection() {
  return (
    <section className="bg-background py-section">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Phần mở đầu
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Đặt vấn đề cho bài thuyết trình
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Có ý kiến cho rằng nếu Chính phủ Việt Nam Dân chủ Cộng hòa nhượng
            bộ thêm một chút nữa thì có thể tránh được chiến tranh với Pháp.
            Nhưng đến tháng 12/1946, cuộc kháng chiến toàn quốc vẫn bùng nổ.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="rounded-2xl border border-outline-variant/70 bg-white/80 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
                <HelpCircle className="size-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  Câu hỏi trung tâm
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Vì sao chiến tranh là điều không thể tránh khỏi? Đâu là ranh
                  giới giữa hòa bình và xâm lược, giữa nhượng bộ và đầu hàng?
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-outline-variant/70 bg-surface-low p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-secondary">
                <Building2 className="size-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  Chủ thể lịch sử
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Chính phủ Việt Nam Dân chủ Cộng hòa là cơ quan hành pháp cao
                  nhất của nhà nước mới, ra mắt quốc dân tại Quảng trường Ba
                  Đình ngày 02/09/1945, do Chủ tịch Hồ Chí Minh đứng đầu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
