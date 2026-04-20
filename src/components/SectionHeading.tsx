import { Reveal } from "@/components/Reveal";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({ eyebrow, title, description }: Props) => {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
        )}
      </div>
    </Reveal>
  );
};
