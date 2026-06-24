"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Clock3,
  Handshake,
  Images,
  Landmark,
  Menu,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navItems } from "@/features/home/data/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState("/#thoi-khac");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref("/ai-usage");
      return;
    }

    const sectionItems = navItems.filter((item) => item.href.startsWith("/#"));
    let animationFrame = 0;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.34;
      let current = sectionItems[0]?.href ?? "/#thoi-khac";

      sectionItems.forEach((item) => {
        const id = item.href.split("#")[1];
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= marker) {
          current = item.href;
        }
      });

      setActiveHref(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const dockIcons = [Clock3, Landmark, Handshake, ShieldCheck, Images, Sparkles];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/70 bg-background/88 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link
          className="shrink-0 font-display text-xl font-bold tracking-tight text-primary xl:text-2xl"
          href="/#thoi-khac"
        >
          Nhóm 1-VNR202
        </Link>

        <nav className="hidden items-center gap-1 rounded-2xl border border-outline-variant/70 bg-white/80 p-1.5 shadow-lg shadow-primary/5 lg:flex">
          {navItems.map((item, index) => {
            const Icon = dockIcons[index];
            const isActive = activeHref === item.href;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`group relative inline-flex h-11 items-center gap-2 rounded-xl px-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-fixed hover:text-primary ${
                  isActive ? "bg-primary text-white shadow-md" : "text-muted-foreground"
                }`}
                href={item.href}
                key={item.href}
              >
                <Icon className="size-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                {item.label}
                <span
                  className={`absolute -bottom-2 left-1/2 h-1 -translate-x-1/2 rounded-full bg-secondary-container transition-all duration-300 ${
                    isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-label="Mở menu"
              className="lg:hidden"
              size="icon"
              variant="ghost"
            >
              <Menu className="size-6 text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Điều hướng</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navItems.map((item) => (
              <DropdownMenuItem asChild key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
