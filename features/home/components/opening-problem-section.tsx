import Image from "next/image";
import { Building2, HelpCircle } from "lucide-react";

export function OpeningProblemSection() {
  return (
    <section className="bg-background py-section" id="dat-van-de">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
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
            <div className="mt-8 flex items-start gap-4 border-l-4 border-primary pl-5">
              <HelpCircle className="mt-1 size-6 shrink-0 text-primary" />
              <p className="font-display text-xl font-semibold leading-8 text-foreground">
                Vì sao chiến tranh không thể tránh khỏi, và đâu là giới hạn cuối
                cùng của một quốc gia đang bảo vệ nền độc lập?
              </p>
            </div>
          </div>

          <figure className="group relative min-h-[420px] overflow-hidden rounded-2xl border border-outline-variant/70 shadow-xl">
            <Image
              alt="Tư liệu minh họa Chính phủ Việt Nam Dân chủ Cộng hòa trong buổi đầu độc lập"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              src="https://res.cloudinary.com/dratbz8bh/image/upload/v1782282106/hinh-anh-bac-ho-doc-ban-tuyen-ngon-doc-lap-3-04-13-58-58_20230830201204_evybix.jpg"
            />
            <figcaption className="absolute inset-x-5 bottom-5 rounded-xl border border-white/25 bg-foreground/90 p-5 text-white shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-fixed">
                02/09/1945
              </span>
              <p className="mt-2 font-display text-xl font-semibold">
                Một nhà nước mới ra đời, vừa kiến quốc vừa bảo vệ nền độc lập.
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid border-y border-outline-variant/70 md:grid-cols-2">
          <div className="flex gap-4 py-6 md:pr-8">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
              <HelpCircle className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">
                Câu hỏi trung tâm
              </h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Ranh giới nào phân biệt hòa bình với xâm lược, nhượng bộ với đầu
                hàng?
              </p>
            </div>
          </div>

          <div className="flex gap-4 border-t border-outline-variant/70 py-6 md:border-l md:border-t-0 md:pl-8">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-secondary">
              <Building2 className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">
                Chủ thể lịch sử
              </h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Chính phủ Việt Nam Dân chủ Cộng hòa do Chủ tịch Hồ Chí Minh đứng
                đầu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
