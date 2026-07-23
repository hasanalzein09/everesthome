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
      <span className="eyebrow inline-block text-gold-deep mb-3">{label}</span>
      <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl mx-auto text-foreground/70 leading-relaxed text-lg">
          {description}
        </p>
      )}
      <div className="mt-7 flex items-center justify-center gap-3">
        <span className="gold-line w-14" />
        <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
        <span className="gold-line w-14" />
      </div>
    </div>
  );
}
