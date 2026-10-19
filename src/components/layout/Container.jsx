const sizes = {
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[1440px]",
  "1440": "max-w-[1440px]",
  full: "max-w-full",
};

export default function Container({
  children,
  size = "xl",
  className = "",
}) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizes[size] || sizes.xl} ${className}`}
    >
      {children}
    </div>
  );
}