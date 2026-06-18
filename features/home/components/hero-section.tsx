import Link from "next/link";
import { ChevronDown, Flame } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="hero-gradient relative flex min-h-[840px] items-center overflow-hidden pt-20"
      id="thoi-khac"
    >
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="container relative z-10 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-primary shadow-sm">
          <Flame className="size-4" />
          Tháng 12 năm 1946
        </div>
        <h1 className="mx-auto max-w-5xl text-balance font-display text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
          Nhượng bộ hay đầu hàng?
        </h1>
        <p className="mt-4 text-balance font-display text-2xl italic text-primary-container md:text-4xl">
          Lằn ranh nào cho chiến tranh?
        </p>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          Có phải chỉ cần nhượng bộ thêm một bước là có thể tránh được chiến
          tranh, hay bước lùi ấy sẽ vượt qua ranh giới của chủ quyền dân tộc?
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="rounded-xl px-9" size="lg" variant="destructive">
            <Link href="#boi-canh">Bắt đầu hành trình</Link>
          </Button>
          <Button asChild className="rounded-xl px-9" size="lg" variant="outline">
            <Link href="#ngoai-giao">Tìm hiểu thêm</Link>
          </Button>
        </div>
      </div>
      <Link
        aria-label="Cuộn đến phần bối cảnh"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-outline transition hover:text-primary"
        href="#boi-canh"
      >
        <ChevronDown className="size-10 animate-bounce" />
      </Link>
    </section>
  );
}
