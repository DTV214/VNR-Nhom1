import { PlayCircle } from "lucide-react";

import { diplomacyVideo } from "@/features/home/data/content";

export function VideoArchiveBanner() {
  return (
    <section className="bg-surface-high py-section">
      <div className="container">
        <div className="mx-auto max-w-6xl rounded-2xl border border-outline-variant/70 bg-white/72 p-4 shadow-2xl shadow-primary/10 backdrop-blur md:p-6">
          <div className="group relative overflow-hidden rounded-xl border border-white/80 bg-black shadow-xl">
            <video
              aria-label={diplomacyVideo.title}
              className="h-auto w-full bg-black object-contain"
              controls
              loop
              muted
              playsInline
              preload="metadata"
              src={diplomacyVideo.src}
            />
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/35 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white opacity-95 backdrop-blur">
              <PlayCircle className="size-4" />
              Video tư liệu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
