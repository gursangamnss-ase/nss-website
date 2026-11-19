const sizes = {
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[1440px]",
  full: "max-w-full",
};

export default function Container({
  children,
  size = "2xl",
  className = "",
}) {
  const isFull = size === "full";
  const combinedClassName = `mx-auto w-full ${isFull ? "px-0" : "px-4 sm:px-6 lg:px-8"} ${sizes[size] || sizes["2xl"]} ${className}`.replace(/\s+/g, " ").trim();

  return (
    <div
      className={combinedClassName}
    >
      {children}
    </div>
  );
}
