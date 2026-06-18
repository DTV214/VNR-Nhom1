import Link from "next/link";
import { ArrowLeft, BadgeCheck, BrainCircuit, FileSearch, Layers } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteFooter } from "@/features/home/components/site-footer";
import { SiteHeader } from "@/features/home/components/site-header";
import { aiUsageSections, aiWorkflow } from "@/features/ai-usage/data/content";

const icons = [Layers, BrainCircuit, FileSearch, BadgeCheck];

export function AiUsagePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <section className="hero-gradient py-section">
          <div className="container">
            <Button asChild className="mb-10 rounded-full" variant="outline">
              <Link href="/#thoi-khac">
                <ArrowLeft className="size-4" />
                Về trang chính
              </Link>
            </Button>
            <SectionHeading
              description="Trang ghi chú minh bạch về cách AI được sử dụng trong quá trình dựng source frontend và tổ chức tư liệu nghiên cứu."
              eyebrow="Minh bạch quy trình"
              title="AI Usage"
            />
          </div>
        </section>

        <section className="bg-background py-section">
          <div className="container grid gap-6 md:grid-cols-2">
            {aiUsageSections.map((item, index) => {
              const Icon = icons[index];

              return (
                <Card
                  className="border-outline-variant/70 bg-white/85 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                  key={item.title}
                >
                  <CardHeader>
                    <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary-fixed text-primary">
                      <Icon className="size-7" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="dark-history-gradient py-section text-white">
          <div className="container grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary-fixed">
                Quy trình triển khai
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                AI hỗ trợ, người nghiên cứu quyết định
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                AI giúp tăng tốc phần tổ chức source và biểu đạt giao diện.
                Phần nhận định học thuật vẫn cần người nghiên cứu đọc, đối
                chiếu và chịu trách nhiệm cuối cùng.
              </p>
            </div>
            <div className="space-y-4">
              {aiWorkflow.map((step, index) => (
                <div
                  className="flex gap-4 rounded-xl border border-white/12 bg-white/6 p-5 backdrop-blur"
                  key={step}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-white/82">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
