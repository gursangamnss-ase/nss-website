import Badge from "@/components/ui/Badge";

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
  headingTag: HeadingTag = "h2",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCentered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {badge && (
        <Badge
          text={badge}
          icon={badgeIcon}
          className="text-xs sm:text-sm font-medium text-[var(--color-primary)] mb-4"
        />
      )}

      {title && (
        <HeadingTag className="text-[clamp(2.5rem,6.5vw,5rem)] font-medium leading-[1.08] tracking-[-0.04em] text-[var(--color-primary)]">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="font-script font-normal italic tracking-normal inline-block align-baseline">
                {highlight}
              </span>
            </>
          )}
        </HeadingTag>
      )}

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

