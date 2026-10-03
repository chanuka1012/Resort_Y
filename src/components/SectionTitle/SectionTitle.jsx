export default function SectionTitle({ eyebrow, title, subtitle, light = false, as: Tag = "h2" }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className={`mb-2 text-sm font-semibold uppercase tracking-[0.25em] ${light ? "text-white/80" : "text-terra"}`}>
          {eyebrow}
        </p>
      )}
      <Tag className="font-display text-3xl md:text-4xl">{title}</Tag>
      {subtitle && (
        <p className={`mx-auto mt-3 max-w-2xl ${light ? "text-white/80" : "opacity-75"}`}>{subtitle}</p>
      )}
    </div>
  );
}