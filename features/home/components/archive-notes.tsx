import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { icons, type IconName } from "@/features/home/components/icon-map";
import { archiveNotes } from "@/features/home/data/content";

export function ArchiveNotes() {
  return (
    <section className="bg-surface-high py-16">
      <div className="container grid gap-6 md:grid-cols-3">
        {archiveNotes.map((note) => {
          const Icon = icons[note.icon as IconName];

          return (
            <Card
              className="border-outline-variant/70 bg-white/65 backdrop-blur"
              key={note.title}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon className="size-6 text-primary" />
                  {note.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {note.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
