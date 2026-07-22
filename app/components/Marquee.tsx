interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div
      className="marquee relative overflow-hidden bg-foreground py-4 select-none"
      aria-hidden="true"
    >
      <div className="marquee-track items-center gap-0">
        {row.map((item, index) => (
          <span
            key={index}
            className="flex items-center whitespace-nowrap text-sm sm:text-base font-semibold tracking-wide text-white/80"
          >
            <span className="px-6">{item}</span>
            <span className="text-[#e8a87c] text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
