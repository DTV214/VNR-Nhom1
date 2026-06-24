"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Maximize2, Minimize2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type InfiniteGridItem = {
  image: string;
  title: string;
  period: string;
  description: string;
};

type InfiniteImageGridProps = {
  items: InfiniteGridItem[];
};

const columns = 7;
const rows = 5;
const cellWidth = 340;
const cellHeight = 330;
const worldWidth = columns * cellWidth;
const worldHeight = rows * cellHeight;

function wrap(value: number, size: number) {
  return ((value % size) + size) % size;
}

export function InfiniteImageGrid({ items }: InfiniteImageGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: -155, y: -120 });
  const [dragging, setDragging] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const cells = Array.from({ length: columns * rows }, (_, index) => ({
    ...items[index % items.length],
    index,
  }));

  useEffect(() => {
    const syncFullscreenState = () => {
      setFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener("fullscreenchange", syncFullscreenState);
    return () => document.removeEventListener("fullscreenchange", syncFullscreenState);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = { active: true, x: event.clientX, y: event.clientY };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) {
      return;
    }

    const deltaX = event.clientX - dragRef.current.x;
    const deltaY = event.clientY - dragRef.current.y;
    dragRef.current.x = event.clientX;
    dragRef.current.y = event.clientY;
    setOffset((current) => ({
      x: current.x + deltaX,
      y: current.y + deltaY,
    }));
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current.active = false;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await containerRef.current.requestFullscreen();
  };

  return (
    <div
      className="relative h-[620px] overflow-hidden border-y border-outline-variant/70 bg-[#211715] md:h-[700px] md:rounded-2xl md:border"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <Button
        aria-label={fullscreen ? "Thoát toàn màn hình" : "Xem toàn màn hình"}
        className="absolute right-4 top-4 z-30 rounded-full border-white/20 bg-black/40 text-white hover:bg-white hover:text-foreground"
        onClick={toggleFullscreen}
        size="icon"
        title={fullscreen ? "Thoát toàn màn hình" : "Xem toàn màn hình"}
        type="button"
        variant="outline"
      >
        {fullscreen ? <Minimize2 /> : <Maximize2 />}
      </Button>

      <div
        aria-label="Không gian tư liệu hình ảnh về Chủ tịch Hồ Chí Minh"
        className={`absolute inset-0 select-none touch-none ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerCancel={handlePointerUp}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        role="region"
      >
        {cells.map((item) => {
          const column = item.index % columns;
          const row = Math.floor(item.index / columns);
          const x = wrap(column * cellWidth + offset.x + cellWidth, worldWidth) - cellWidth;
          const y = wrap(row * cellHeight + offset.y + cellHeight, worldHeight) - cellHeight;

          return (
            <article
              className="group absolute h-[305px] w-[315px] overflow-hidden rounded-lg border border-white/15 bg-white shadow-2xl transition-shadow duration-300 hover:z-20 hover:shadow-[0_18px_55px_rgba(0,0,0,0.48)]"
              key={`${item.title}-${item.index}`}
              style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
              tabIndex={0}
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  alt={item.title}
                  className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105"
                  fill
                  sizes="315px"
                  src={item.image}
                />
              </div>
              <div className="relative h-[125px] bg-white px-5 py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                  {item.period}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold leading-7 text-foreground">
                  {item.title}
                </h3>
                <p className="pointer-events-none absolute inset-0 translate-y-full bg-white px-5 py-4 text-base font-medium leading-6 text-foreground/80 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
