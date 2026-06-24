import { DiplomacySpider } from "@/components/ui/diplomacy-spider";
import { ProfessionalTimeline } from "@/components/ui/professional-timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { diplomacyTimeline } from "@/features/home/data/content";

export function DiplomacySection() {
  return (
    <section className="bg-background py-section" id="ngoai-giao">
      <div className="container">
        <SectionHeading
          description="Nỗ lực cứu vãn hòa bình cuối cùng trước khi chiến tranh toàn quốc bùng nổ."
          title="Hành trình ngoại giao"
        />
        <div className="mt-16">
          <DiplomacySpider items={diplomacyTimeline} />
        </div>
        <div className="mt-16 border-t border-outline-variant/70 pt-10">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Dòng thời gian tóm tắt
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold">
              Sáu bước trong nỗ lực giữ hòa bình
            </h3>
          </div>
          <ProfessionalTimeline items={diplomacyTimeline} />
        </div>
      </div>
    </section>
  );
}
