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

  // Light Sections
  white: "bg-white text-primary",
  light: "bg-secondary text-primary",

  // Dark Sections
  dark: "bg-primary text-white",

  // Optional variations
  darkSoft: "bg-[#101317] text-white",
  glass: "bg-white/5 backdrop-blur-xl text-white",
};

export default function Section({
  children,
  id,
  spacing = "lg",
  background = "transparent",
  className = "",
}) {
  return (
    <section
      id={id}
      className={`
        ${spacingClasses[spacing]}
        ${backgroundClasses[background]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}