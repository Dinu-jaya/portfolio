import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-hero pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden />
      <div className="container">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-[hsl(var(--success))] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--success))]" />
            </span>
            Open to Internships · Summer 2026
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Dinesh <span className="text-gradient">Kumar J</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-5 max-w-2xl font-mono text-base text-muted-foreground sm:text-lg">
            <span className="text-primary">{">"}</span> Fullstack · DevOps · Cloud · AI/ML
            <span className="ml-1 inline-block h-4 w-[2px] translate-y-0.5 bg-primary animate-blink" />
          </p>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
            3rd-year IT student turning ideas into shipped, production-grade
            projects — from AI vision systems to dockerized backends. I build
            things that actually run.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary font-mono text-xs uppercase tracking-widest text-primary-foreground shadow-glow hover:bg-primary/90"
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-transparent font-mono text-xs uppercase tracking-widest hover:border-primary hover:text-primary"
            >
              <a href="#contact">
                <Mail className="mr-1 h-4 w-4" /> Hire Me
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={520}>
          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Location
              </dt>
              <dd className="mt-1 text-sm">Coimbatore, TN</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Studying
              </dt>
              <dd className="mt-1 text-sm">BTech IT · Year 3</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Status
              </dt>
              <dd className="mt-1 text-sm text-[hsl(var(--success))]">Available</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
};
