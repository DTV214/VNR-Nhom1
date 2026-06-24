import { Ban, CheckCircle2, Handshake, XCircle } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { redLinePoints } from "@/features/home/data/content";

export function RedLineSection() {
  return (
    <section className="dark-history-gradient py-section text-white" id="lan-ranh-do">
      <div className="container">
        <SectionHeading
          description="Nhượng bộ là chiến thuật để bảo toàn lực lượng; đầu hàng là từ bỏ quyền tự quyết. Lằn ranh đỏ của năm 1946 chính là chủ quyền."
          inverse
          title="Định nghĩa lằn ranh đỏ"
        />

        <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/15">
          <div className="red-line-glow absolute left-1/2 top-0 hidden h-full w-0.5 bg-primary md:block" />
          <div className="grid md:grid-cols-2">
            <div className="p-8 transition-colors hover:bg-white/5 md:p-12">
              <h3 className="flex items-center gap-4 font-display text-4xl font-bold text-secondary-fixed">
                <Handshake className="size-10" />
                Nhượng bộ
              </h3>
              <p className="mt-6 text-lg leading-8 text-white/75">
                Là giải pháp ngoại giao khôn khéo: lùi một bước để bảo toàn lực
                lượng, củng cố chính quyền non trẻ và chuẩn bị lâu dài cho nền
                độc lập.
              </p>
              <ul className="mt-8 space-y-4">
                {redLinePoints.compromise.map((point) => (
                  <li className="flex items-start gap-3" key={point}>
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary-fixed" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/15 p-8 text-left transition-colors hover:bg-white/5 md:border-l md:border-t-0 md:p-12 md:text-right">
              <h3 className="flex items-center gap-4 font-display text-4xl font-bold text-primary md:justify-end">
                <span>Đầu hàng</span>
                <Ban className="size-10" />
              </h3>
              <p className="mt-6 text-lg leading-8 text-white/75">
                Là sự từ bỏ chủ quyền thiêng liêng, chấp nhận thân phận thuộc
                địa và đi ngược lại khát vọng độc lập đã được nhân dân lựa chọn.
              </p>
              <ul className="mt-8 space-y-4">
                {redLinePoints.surrender.map((point) => (
                  <li
                    className="flex items-start gap-3 md:justify-end"
                    key={point}
                  >
                    <span>{point}</span>
                    <XCircle className="mt-1 size-5 shrink-0 text-primary" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur md:p-10">
          <h3 className="font-display text-3xl font-bold">
            Hòa bình thực sự vs. xâm lược
          </h3>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Hòa bình thực sự phải dựa trên tôn trọng độc lập, toàn vẹn lãnh
            thổ và quyền tự quyết. Khi Pháp lập Chính phủ Nam Kỳ tự trị, dùng
            vũ lực và tối hậu thư để áp đặt ý chí, hành động đó đã chuyển từ
            đàm phán sang xâm lược.
          </p>
          <div className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-display text-xl font-semibold shadow-2xl">
            Lằn ranh đỏ chính là chủ quyền
          </div>
        </div>
      </div>
    </section>
  );
}
