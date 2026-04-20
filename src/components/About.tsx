import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const legend = [
  { dot: "bg-[hsl(var(--success))]", label: "Comfortable" },
  { dot: "bg-accent", label: "Learning" },
  { dot: "bg-primary", label: "Exploring" },
];

export const About = () => {
  return (
    <section id="about" className="border-t border-border/60 py-24 sm:py-32">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title="A builder who thinks in systems." />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                I'm a 3rd-year Information Technology student who treats every
                project like a real product. I learn fast, ship faster, and care
                about the parts most people skip — clean architecture, observability,
                and the user actually using the thing.
              </p>
              <p>
                Years of competitive chess trained me to think several moves ahead —
                I bring that same strategic patience to debugging gnarly systems and
                designing backends that don't fall over.
              </p>
              <p className="text-muted-foreground">
                Currently sharpening my edge in <span className="text-primary">DevOps</span>,{" "}
                <span className="text-primary">cloud-native development</span> and{" "}
                <span className="text-primary">applied AI/ML</span> — and looking for a
                team where I can contribute and grow.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                // skills legend
              </p>
              <ul className="mt-4 space-y-3">
                {legend.map((l) => (
                  <li key={l.label} className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${l.dot}`} />
                    <span className="font-mono text-sm">{l.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  // quick facts
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>📍 Coimbatore, Tamil Nadu</li>
                  <li>🎓 BTech IT · 3rd Year</li>
                  <li>♟️ Strategic thinker, chess-trained</li>
                  <li>⚡ Ships projects end-to-end</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
