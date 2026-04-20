import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Clock, Download, Github, Linkedin, Mail, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  opportunity: z.enum(["internship", "fulltime", "freelance", "collab", "other"], {
    errorMap: () => ({ message: "Pick an opportunity type" }),
  }),
  message: z.string().trim().min(10, "Tell me a bit more (10+ chars)").max(1000),
});

type FormValues = z.infer<typeof schema>;

const initial: FormValues = {
  name: "",
  email: "",
  opportunity: "internship",
  message: "",
};

export const Contact = () => {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      parsed.error.errors.forEach((err) => {
        const k = err.path[0] as keyof FormValues;
        fieldErrors[k] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    // No backend yet — simulate.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setValues(initial);
    toast.success("Thanks! I'll get back to you within 24 hours.");
  };

  return (
    <section id="contact" className="border-t border-border/60 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Contact"
          title="Let's build something real."
          description="I'm actively looking for internships and entry-level roles where I can ship, learn from senior engineers, and contribute from day one."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-card sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-[11px] uppercase tracking-widest">
                    Name
                  </Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jane Recruiter"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-[11px] uppercase tracking-widest">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-mono text-[11px] uppercase tracking-widest">
                  Opportunity Type
                </Label>
                <Select
                  value={values.opportunity}
                  onValueChange={(v) => update("opportunity", v as FormValues["opportunity"])}
                >
                  <SelectTrigger aria-invalid={!!errors.opportunity}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="fulltime">Full-time</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="collab">Collaboration</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.opportunity && (
                  <p className="text-xs text-destructive">{errors.opportunity}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-mono text-[11px] uppercase tracking-widest">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell me about the role, team or project..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-primary font-mono text-xs uppercase tracking-widest text-primary-foreground shadow-glow hover:bg-primary/90 sm:w-auto"
              >
                {submitting ? "Sending…" : (
                  <>
                    Send Message <Send className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" />
                Usually responds within 24 hours.
              </p>
            </form>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                // direct links
              </p>

              <a
                href="mailto:dineshkumar@example.com"
                className="group flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3 transition-all hover:border-primary/40 hover:text-primary"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span className="font-mono text-sm">Email</span>
                </span>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
                  →
                </span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3 transition-all hover:border-primary/40 hover:text-primary"
              >
                <span className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4" />
                  <span className="font-mono text-sm">LinkedIn</span>
                </span>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
                  →
                </span>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3 transition-all hover:border-primary/40 hover:text-primary"
              >
                <span className="flex items-center gap-3">
                  <Github className="h-4 w-4" />
                  <span className="font-mono text-sm">GitHub</span>
                </span>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
                  →
                </span>
              </a>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-2 border-primary/40 bg-primary/5 font-mono text-xs uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-1 h-4 w-4" /> Download Resume
                </a>
              </Button>

              <div className="mt-auto pt-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  // currently
                </p>
                <p className="mt-2 text-sm">
                  Open to <span className="text-primary">internships</span> and entry-level
                  roles in Fullstack, DevOps, Cloud and AI/ML.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
