import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  emoji: string;
  name: string;
  tags: string[];
  status?: "in-progress";
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    emoji: "🚧",
    name: "AI Pothole Detection",
    tags: ["AI/ML", "Computer Vision"],
    status: "in-progress",
    problem: "Indian roads are full of potholes; manual reporting is slow and error-prone.",
    approach: "Trained YOLOv9 on annotated road footage with OpenCV preprocessing and a real-time inference loop.",
    outcome: "Real-time detection with bounding-box overlay; targeting drone & dashcam deployment.",
    stack: ["YOLOv9", "Python", "OpenCV", "PyTorch"],
    github: "https://github.com/",
  },
  {
    emoji: "📊",
    name: "Student Result Dashboard",
    tags: ["Web", "Fullstack"],
    problem: "Faculty manually compiled marksheets across spreadsheets — slow and inconsistent.",
    approach: "Built a Node + Express API with MySQL schema, role-based views and clean HTML/CSS dashboard.",
    outcome: "Cut publish time from hours to minutes; supports filters, export and per-student insights.",
    stack: ["Node.js", "Express", "MySQL", "HTML/CSS"],
    github: "https://github.com/",
  },
  {
    emoji: "🐳",
    name: "Dockerized Dev Environment",
    tags: ["DevOps", "Infrastructure"],
    problem: "Onboarding new contributors took hours of `it works on my machine` debugging.",
    approach: "Containerized backend, db and tooling with Docker Compose; one-command bootstrap with seeded data.",
    outcome: "New devs run the full stack in under 60 seconds — zero local installs required.",
    stack: ["Docker", "Compose", "PostgreSQL", "Bash"],
    github: "https://github.com/",
  },
  {
    emoji: "♟️",
    name: "Chess Move Predictor",
    tags: ["AI/ML", "Data"],
    problem: "Wanted to study positional patterns from my own chess games beyond engine eval.",
    approach: "Parsed PGN dataset with Pandas, engineered positional features and trained Scikit-learn classifiers.",
    outcome: "Predicts likely next-move category with meaningful accuracy on mid-game positions.",
    stack: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    github: "https://github.com/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="border-t border-border/60 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Work"
          title="Projects, told as case studies."
          description="Each one solves a real problem. Read the Problem → Approach → Outcome — that's how I think about every build."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow sm:p-8">
                <header className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="grid h-14 w-14 place-items-center rounded-xl border border-border bg-background text-3xl"
                      aria-hidden
                    >
                      {p.emoji}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">
                        {p.name}
                      </h3>
                      <ul className="mt-1.5 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {p.status === "in-progress" && (
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                      In Progress
                    </span>
                  )}
                </header>

                <dl className="mt-6 space-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Problem
                    </dt>
                    <dd className="mt-1 text-foreground/85">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      Approach
                    </dt>
                    <dd className="mt-1 text-foreground/85">{p.approach}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      Outcome
                    </dt>
                    <dd className="mt-1 text-foreground/85">{p.outcome}</dd>
                  </div>
                </dl>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <footer className="mt-6 flex items-center gap-2 pt-4">
                  {p.github && (
                    <Button asChild size="sm" variant="outline" className="font-mono text-xs">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="mr-1 h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                  )}
                  {p.live && (
                    <Button asChild size="sm" variant="ghost" className="font-mono text-xs">
                      <a href={p.live} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1 h-3.5 w-3.5" /> Live
                      </a>
                    </Button>
                  )}
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
