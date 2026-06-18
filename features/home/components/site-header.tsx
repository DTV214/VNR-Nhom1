"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/70 bg-background/88 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link
          className="font-display text-2xl font-bold tracking-tight text-primary"
          href="/#thoi-khac"
        >
          Hồ Chí Minh 1946
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item, index) => {
            const isActive =
              item.href === "/ai-usage"
                ? pathname === "/ai-usage"
                : pathname === "/" && index === 0;

            return (
              <Link
                className={
                  isActive
                    ? "border-b-2 border-primary pb-1 text-sm font-semibold text-primary"
                    : "text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                }
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild className="rounded-full px-6">
            <Link href="/#tu-lieu">Khám phá</Link>
          </Button>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-label="Mở menu"
              className="md:hidden"
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
