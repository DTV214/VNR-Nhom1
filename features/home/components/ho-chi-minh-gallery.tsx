import { InfiniteImageGrid } from "@/components/ui/infinite-image-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { hoChiMinhGallery } from "@/features/home/data/content";

export function HoChiMinhGallery() {
  return (
    <section className="overflow-hidden bg-surface-high py-section" id="hinh-anh-bac-ho">
      <div className="container">
        <SectionHeading
          description="Một không gian lưu trữ mở, kết nối hình ảnh với những dấu mốc trong hành trình hoạt động và tư tưởng của Chủ tịch Hồ Chí Minh."
          eyebrow="Tư liệu hình ảnh"
          title="Những hình ảnh về Bác Hồ"
        />
      </div>
      <div className="mt-14 md:container">
        <InfiniteImageGrid items={hoChiMinhGallery} />
      </div>
    </section>
  );
}
