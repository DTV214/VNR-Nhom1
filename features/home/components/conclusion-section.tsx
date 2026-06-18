import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cloudinaryImage } from "@/features/home/data/content";

export function ConclusionSection() {
  return (
    <section className="bg-background py-section">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-balance font-display text-4xl font-bold leading-tight md:text-5xl">
            Sự lựa chọn lịch sử
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Chiến tranh bùng nổ vào tháng 12/1946 không phải do Việt Nam thiếu
            thiện chí ngoại giao, mà bởi thực dân Pháp không muốn có một nền
            hòa bình dựa trên sự tôn trọng chủ quyền.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Nếu Việt Nam nhượng bộ thêm trước tối hậu thư, điều nhận được
            không phải là hòa bình mà là sự tự sát dân tộc, mất quyền tự quyết
            và để bộ máy chính quyền bị xóa bỏ. Vì vậy, cuộc chiến bảo vệ Tổ
            quốc là điều không thể tránh khỏi.
          </p>
          <Button asChild className="mt-8 rounded-xl" size="lg">
            <Link href="#thoi-khac">
              Trở lại mốc mở đầu
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
        <div className="relative">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
            <Image
              alt="Minh họa khí thế Toàn quốc kháng chiến"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src={cloudinaryImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent" />
          </div>
          <div className="relative -mt-10 ml-auto max-w-sm rounded-2xl bg-primary p-6 text-white shadow-xl md:-mr-6">
            <p className="italic leading-7">
              “Hà Nội bốc cháy, cả nước đứng lên. Một dân tộc nhỏ bé dám đứng
              lên chống lại đế quốc to.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
