"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Flame } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { heroSlides } from "@/features/home/data/content";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="relative flex min-h-[820px] items-center overflow-hidden bg-foreground pt-20"
      id="thoi-khac"
    >
      {heroSlides.map((slide, index) => (
        <div
          aria-hidden={activeSlide !== index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            activeSlide === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          key={slide.caption}
        >
          <Image
            alt={slide.alt}
            className="object-cover"
            fill
            priority={index === 0}
            sizes="100vw"
            src={slide.image}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,8,7,0.96)_0%,rgba(28,15,13,0.82)_48%,rgba(25,15,13,0.48)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-4xl text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white shadow-lg backdrop-blur-md">
          <Flame className="size-4" />
          Tháng 12 năm 1946
        </div>
        <h1 className="hero-text-shadow max-w-4xl text-balance font-display text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          Nhượng bộ hay đầu hàng?
        </h1>
        <p className="hero-text-shadow mt-4 text-balance font-display text-2xl italic text-primary-fixed md:text-4xl">
          Lằn ranh nào cho chiến tranh?
        </p>
        <p className="hero-text-shadow mt-8 max-w-3xl text-lg font-medium leading-8 text-white/90 md:text-xl">
          Có phải chỉ cần nhượng bộ thêm một bước là có thể tránh được chiến
          tranh, hay bước lùi ấy sẽ vượt qua ranh giới của chủ quyền dân tộc?
        </p>
        <p className="hero-text-shadow mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-white/80 md:text-base">
          Một hành trình của{" "}
          <FlipWords words={["hòa bình", "chủ quyền", "lựa chọn lịch sử"]} />
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
          <Button asChild className="rounded-xl px-9" size="lg" variant="destructive">
            <Link href="#boi-canh">Bắt đầu hành trình</Link>
          </Button>
          <Button asChild className="rounded-xl border-white/40 bg-black/20 px-9 text-white shadow-lg backdrop-blur-sm hover:bg-white hover:text-foreground" size="lg" variant="outline">
            <Link href="#ngoai-giao">Tìm hiểu thêm</Link>
          </Button>
        </div>
        </div>

        <div className="absolute bottom-24 right-6 hidden max-w-xs rounded-xl border border-white/20 bg-black/30 p-4 text-right shadow-lg backdrop-blur-md lg:block">
          <p className="text-sm font-semibold leading-6 text-white/90">
            {heroSlides[activeSlide].caption}
          </p>
          <div className="mt-4 flex justify-end gap-2">
            {heroSlides.map((slide, index) => (
              <button
                aria-label={`Xem ảnh ${index + 1}: ${slide.caption}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeSlide === index
                    ? "w-10 bg-secondary-container"
                    : "w-4 bg-white/40 hover:bg-white/70"
                }`}
                key={slide.caption}
                onClick={() => setActiveSlide(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
      <Link
        aria-label="Cuộn đến phần bối cảnh"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-white/70 transition hover:text-white"
        href="#boi-canh"
      >
        <ChevronDown className="size-10 animate-bounce" />
      </Link>
    </section>
  );
}
