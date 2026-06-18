import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";
import { diplomacyTimeline } from "@/features/home/data/content";

export function DiplomacySection() {
  return (
    <section className="bg-background py-section" id="ngoai-giao">
      <div className="container">
        <SectionHeading
          description="Nỗ lực cứu vãn hòa bình cuối cùng trước khi chiến tranh toàn quốc bùng nổ."
          title="Hành trình ngoại giao"
        />
        <Timeline className="mt-16" items={diplomacyTimeline} />
      </div>
    </section>
  );
}
