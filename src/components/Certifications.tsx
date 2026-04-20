import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Award, BookOpen, Plus } from "lucide-react";

interface Cert {
  name: string;
  issuer: string;
  status: "in-progress" | "completed";
  icon: React.ElementType;
}

const certs: Cert[] = [
  {
    name: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    status: "in-progress",
    icon: Award,
  },
  {
    name: "GitHub Foundations",
    issuer: "GitHub",
    status: "in-progress",
    icon: BookOpen,
  },
];

export const Certifications = () => {
  return (
    <section id="certs" className="border-t border-border/60 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Learning"
          title="Always shipping, always learning."
          description="Certifications I'm actively pursuing alongside my coursework and projects."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.name} delay={i * 100}>
                <div className="group flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium leading-tight">{c.name}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {c.issuer}
                    </p>
                    <span
                      className={`mt-3 inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        c.status === "in-progress"
                          ? "border-accent/40 bg-accent/10 text-accent"
                          : "border-[hsl(var(--success))]/40 bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]"
                      }`}
                    >
                      {c.status === "in-progress" ? "In Progress" : "Completed"}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={certs.length * 100}>
            <div className="flex h-full items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-card/40 p-5 font-mono text-xs text-muted-foreground">
              <Plus className="h-4 w-4" /> More on the way
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
