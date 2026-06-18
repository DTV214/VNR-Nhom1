import Image from "next/image";

import { cloudinaryImage } from "@/features/home/data/content";

export function ContextSection() {
  return (
    <section className="relative overflow-hidden bg-surface-high py-section">
      <div className="absolute -right-24 top-1/2 hidden size-96 -translate-y-1/2 rounded-full border border-primary/10 md:block" />
      <div className="container relative grid items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
          <Image
            alt="Tư liệu minh họa bối cảnh lịch sử Việt Nam năm 1946"
            className="object-cover"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            src={cloudinaryImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Bối cảnh chiến tranh
          </p>
          <h2 className="text-balance font-display text-4xl font-bold leading-tight md:text-5xl">
            Âm mưu quay lại thống trị và giới hạn của hòa bình
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Khó khăn lớn nhất của chính quyền cách mạng là âm mưu quay lại
            thống trị của thực dân Pháp. Ngay ngày 02/09/1945, quân Pháp gây
            hấn ở Sài Gòn - Chợ Lớn; đêm 22 rạng sáng 23/09/1945, Pháp nổ súng
            đánh chiếm Sài Gòn - Chợ Lớn, buộc quân dân Nam Bộ đứng lên kháng
            chiến.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Bên cạnh đó, các lực lượng phản động tay sai tìm cách phá Việt Minh
            và lật đổ chính quyền, làm cho nhiệm vụ giữ nước và xây dựng nhà
            nước mới diễn ra trong thế bị bao vây nhiều phía.
          </p>
          <div className="mt-8 rounded-r-xl border-l-4 border-primary bg-white/65 p-6 shadow-sm backdrop-blur">
            <p className="text-lg italic leading-8 text-primary">
              Hòa bình chỉ có ý nghĩa khi độc lập, chủ quyền và quyền tự quyết
              của dân tộc được bảo toàn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
