export default function Badge({
  text,
  children,
  variant = "primary",
  color,
  icon,
  className = "",
  disabled = true,
  ...props
}) {
  const content = text ?? children;

  const defaultIcon = (
    <svg
      viewBox="0 0 64 64"
      className="h-3.5 w-3.5 shrink-0 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinejoin="round"
        d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z"
      />
    </svg>
  );

  const renderedIcon = icon !== undefined ? icon : defaultIcon;

  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      style={color ? { color } : undefined}
      {...props}
    >
      {renderedIcon && (
        <span aria-hidden="true" className="flex items-center justify-center text-current">
          {renderedIcon}
        </span>
      )}
      <span className="inline-block text-current">{content}</span>
    </span>
  );
}

// Named alias for backwards compatibility
export { Badge as ShinyText };
