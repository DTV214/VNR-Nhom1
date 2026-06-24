"use client";

import { useState } from "react";
import Image from "next/image";
import { Handshake } from "lucide-react";

import { cn } from "@/lib/utils";

type DiplomacyItem = {
  date: string;
  title: string;
  description: string;
  image?: string;
};

type DiplomacySpiderProps = {
  items: DiplomacyItem[];
};

const positions = [
  { left: 18, top: 24 },
  { left: 50, top: 13 },
  { left: 81, top: 25 },
  { left: 84, top: 67 },
  { left: 55, top: 85 },
  { left: 18, top: 69 },
];

export function DiplomacySpider({ items }: DiplomacySpiderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <div className="overflow-hidden rounded-2xl border border-outline-variant/70 bg-[#211715] text-white shadow-xl">
      <div className="relative hidden min-h-[650px] overflow-hidden md:block">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <svg
          aria-hidden="true"
          className="absolute inset-0 size-full"
          preserveAspectRatio="none"
          viewBox="0 0 1000 650"
        >
          {positions.map((position, index) => (
            <line
              className={cn(
                "transition-all duration-500",
                activeIndex === index
                  ? "stroke-[#fea619] stroke-[3]"
                  : "stroke-white/15 stroke-[1.5]",
              )}
              key={`center-${index}`}
              x1="500"
              x2={position.left * 10}
              y1="325"
              y2={position.top * 6.5}
            />
          ))}
          {positions.map((position, index) => {
            const next = positions[(index + 1) % positions.length];
            return (
              <line
                className="stroke-white/10 stroke-[1]"
                key={`ring-${index}`}
                x1={position.left * 10}
                x2={next.left * 10}
                y1={position.top * 6.5}
                y2={next.top * 6.5}
              />
            );
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex size-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-primary-fixed/40 bg-[#312220] p-5 text-center shadow-[0_0_45px_rgba(185,28,28,0.32)]">
          <Handshake className="size-8 text-secondary-container" />
          <strong className="mt-3 font-display text-xl">Ngoại giao 1946</strong>
          <span className="mt-1 text-xs leading-5 text-white/60">
            Hòa để tiến
          </span>
        </div>

        {items.map((item, index) => {
          const position = positions[index];
          const active = activeIndex === index;

          return (
            <button
              aria-pressed={active}
              className={cn(
                "group absolute z-20 w-36 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-300 hover:-translate-y-[54%]",
                active ? "scale-105" : "opacity-80 hover:opacity-100",
              )}
              key={item.title}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              style={{ left: `${position.left}%`, top: `${position.top}%` }}
              type="button"
            >
              <span
                className={cn(
                  "relative mx-auto block size-24 overflow-hidden rounded-2xl border-2 bg-white shadow-xl transition-all duration-300",
                  active
                    ? "border-secondary-container shadow-[0_0_28px_rgba(254,166,25,0.32)]"
                    : "border-white/20 group-hover:border-primary-fixed/70",
                )}
              >
                {item.image ? (
                  <Image
                    alt=""
                    className="object-cover"
                    fill
                    sizes="96px"
                    src={item.image}
                  />
                ) : null}
              </span>
              <span className="mt-3 block text-xs font-bold uppercase tracking-[0.14em] text-secondary-fixed">
                {item.date}
              </span>
              <span className="mt-1 block font-display text-base font-semibold leading-6 text-white">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 p-4 md:hidden">
        {items.map((item, index) => (
          <button
            className={cn(
              "flex items-center gap-4 rounded-xl border p-3 text-left transition-colors",
              activeIndex === index
                ? "border-secondary-container bg-white/10"
                : "border-white/10 bg-white/5",
            )}
            key={item.title}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-white">
              {item.image ? <Image alt="" className="object-cover" fill sizes="64px" src={item.image} /> : null}
            </span>
            <span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-secondary-fixed">
                {item.date}
              </span>
              <strong className="mt-1 block font-display text-lg">{item.title}</strong>
            </span>
          </button>
        ))}
      </div>

      <div className="border-t border-white/10 bg-black/15 px-6 py-7 md:px-10">
        <div className="grid gap-3 md:grid-cols-[180px_1fr] md:items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-secondary-fixed">
              {activeItem.date}
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold">{activeItem.title}</h3>
          </div>
          <p className="max-w-3xl text-base font-medium leading-8 text-white/80 md:text-lg">
            {activeItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
