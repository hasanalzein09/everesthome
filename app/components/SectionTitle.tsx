interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">
        {label}
      </span>
      <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl mx-auto text-foreground/70 leading-relaxed text-lg">
          {description}
        </p>
      )}
      <span className="mt-6 inline-block h-1 w-16 rounded-full bg-accent/70" />
    </div>
  );
}
