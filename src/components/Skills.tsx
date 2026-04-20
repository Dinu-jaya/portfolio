import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type Level = "comfortable" | "learning" | "exploring";

const dotClass: Record<Level, string> = {
  comfortable: "bg-[hsl(var(--success))]",
  learning: "bg-accent",
  exploring: "bg-primary",
};

interface Skill {
  name: string;
  level: Level;
}

interface Category {
  title: string;
  tag: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Languages",
    tag: "lang",
    skills: [
      { name: "Python", level: "comfortable" },
      { name: "JavaScript", level: "comfortable" },
      { name: "Java", level: "comfortable" },
      { name: "C", level: "comfortable" },
      { name: "SQL", level: "comfortable" },
    ],
  },
  {
    title: "Frontend & Backend",
    tag: "web",
    skills: [
      { name: "React", level: "comfortable" },
      { name: "Node.js", level: "comfortable" },
      { name: "Express", level: "comfortable" },
      { name: "HTML / CSS", level: "comfortable" },
      { name: "REST APIs", level: "comfortable" },
    ],
  },
  {
    title: "DevOps & Cloud",
    tag: "ops",
    skills: [
      { name: "Git", level: "comfortable" },
      { name: "Docker", level: "comfortable" },
      { name: "Linux", level: "comfortable" },
      { name: "Azure", level: "learning" },
      { name: "CI/CD", level: "exploring" },
    ],
  },
  {
    title: "AI / ML",
    tag: "ai",
    skills: [
      { name: "YOLOv9", level: "learning" },
      { name: "OpenCV", level: "learning" },
      { name: "Pandas", level: "comfortable" },
      { name: "Scikit-learn", level: "learning" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="border-t border-border/60 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Stack"
          title="Tools I reach for."
          description="Honest about where I am — comfortable with fundamentals, actively leveling up cloud and AI/ML."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">{cat.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    /{cat.tag}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-2.5 py-1.5 font-mono text-xs"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${dotClass[s.level]}`} />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
