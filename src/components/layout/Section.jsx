const spacingClasses = {
  none: "",
  xs: "py-8 lg:py-10",
  sm: "py-12 lg:py-16",
  md: "py-16 lg:py-20",
  lg: "py-20 lg:py-24",
  xl: "py-24 lg:py-32",
  "2xl": "py-32 lg:py-40",
};

const backgroundClasses = {
  transparent: "bg-transparent",
  white: "bg-white text-[var(--color-primary)]",
  light: "bg-[var(--color-secondary)] text-[var(--color-primary)]",
  dark: "bg-[var(--color-primary)] text-white",
  darkSoft: "bg-[var(--color-surface-dark)] text-white",
  glass: "bg-white/5 backdrop-blur-xl text-white",
};

export default function Section({
  children,
  id,
  spacing = "lg",
  background = "transparent",
  className = "",
  ...props
}) {
  return (
    <section
      id={id}
      className={`${spacingClasses[spacing] || ""} ${backgroundClasses[background] || ""} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
