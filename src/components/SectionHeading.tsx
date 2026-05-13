interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} space-y-6`}>
      {eyebrow && <span className="eyebrow block">{eyebrow}</span>}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">{title}</h2>
      {description && <p className="text-silk/60 text-lg leading-relaxed text-pretty max-w-[55ch]">{description}</p>}
    </div>
  );
}
