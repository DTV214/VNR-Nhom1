"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type FlipWordsProps = {
  words: string[];
  interval?: number;
  className?: string;
};

export function FlipWords({
  words,
  interval = 2600,
  className,
}: FlipWordsProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (words.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setVisible(true);
      }, 260);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, words.length]);

  return (
    <span
      aria-live="polite"
      className={cn(
        "inline-block min-w-[9.5rem] text-left text-secondary-fixed transition-all duration-300 md:min-w-[12rem]",
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        className,
      )}
    >
      {words[index]}
    </span>
  );
}
