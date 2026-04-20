import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg font-semibold">Dinesh Kumar J</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            BTech IT · Dindigul · © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:dineshkumar@example.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-[11px] text-muted-foreground">
          Built with React + Tailwind · Designed to ship.
        </p>
      </div>
    </footer>
  );
};
