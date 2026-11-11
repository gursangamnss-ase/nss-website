import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  light: "bg-white !text-[var(--color-primary)] text-[var(--color-primary)] hover:bg-neutral-100 shadow-sm",
  dark: "bg-[var(--color-primary)] !text-white text-white hover:bg-neutral-800 shadow-sm",
  solid: "bg-[var(--color-primary)] !text-white text-white justify-center hover:bg-neutral-800 shadow-sm",
  transparent: "bg-transparent !text-[var(--color-primary)] text-[var(--color-primary)] hover:bg-black/5",
  outline: "bg-transparent border border-current text-current hover:bg-black/5",
  link: "bg-transparent !text-[var(--color-primary)] text-[var(--color-primary)] hover:bg-transparent shadow-none",
};

const sizes = {
  sm: "pl-4 pr-1 py-1 text-xs sm:text-sm",
  md: "pl-5 sm:pl-6 pr-1 sm:pr-1.5 py-1 text-sm sm:text-base",
  lg: "pl-6 sm:pl-7 pr-1.5 sm:pr-2 py-1.5 text-base sm:text-lg",
};

const symmetricSizes = {
  sm: "px-6 py-2.5 text-xs sm:text-sm",
  md: "px-8 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base",
  lg: "px-9 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg",
};

const linkSizes = {
  sm: "px-0 py-0.5 text-xs sm:text-sm gap-2",
  md: "px-0 py-1 text-sm sm:text-base gap-2.5",
  lg: "px-0 py-1.5 text-base sm:text-lg gap-3",
};

const iconSizes = {
  sm: "size-7 sm:size-8",
  md: "size-8 sm:size-9",
  lg: "size-9 sm:size-10",
};

const arrowSvgSizes = {
  sm: 14,
  md: 15,
  lg: 17,
};

export default function Button({
  children,
  variant = "light",
  size = "md",
  type = "button",
  className = "",
  showArrow = true,
  circleArrow,
  href,
  target,
  rel,
  onClick,
  disabled,
  ...props
}) {
  const isExternal = href && (href.startsWith("http://") || href.startsWith("https://") || target === "_blank");
  const computedRel = isExternal && target === "_blank" && !rel ? "noopener noreferrer" : rel;
  const isLinkVariant = variant === "link";
  const hasCircle = circleArrow !== undefined ? circleArrow : !isLinkVariant;

  let sizeClasses;
  if (isLinkVariant) {
    sizeClasses = linkSizes[size] || linkSizes.md;
  } else if (showArrow) {
    sizeClasses = sizes[size] || sizes.md;
  } else {
    sizeClasses = symmetricSizes[size] || symmetricSizes.md;
  }

  const justifyClass = showArrow ? (isLinkVariant ? "justify-start" : "justify-between") : "justify-center";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer active:scale-[0.98]";

  // Pill container has overflow-hidden so the animation moves through the entire height of the button
  const baseClasses = `group inline-flex items-center ${justifyClass} gap-3 sm:gap-4 whitespace-nowrap rounded-full overflow-hidden transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${disabledClasses} ${variants[variant] || variants.light} ${sizeClasses} ${className}`;

  // Arrow animation: circle badge for pill buttons, or sleek naked arrow for link variant
  const arrowIcon = showArrow && (
    hasCircle ? (
      <span
        aria-hidden="true"
        className={`relative flex items-center justify-center ${iconSizes[size] || iconSizes.md} rounded-full shrink-0 overflow-hidden transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] scale-100 group-hover:scale-[0.85] ${
          variant === "light"
            ? "bg-[var(--color-primary)] text-white"
            : "bg-white text-[var(--color-primary)]"
        }`}
      >
        {/* Active Arrow: shoots right and scales down to 0.8 */}
        <ArrowRight
          size={arrowSvgSizes[size] || 15}
          className="absolute transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] translate-x-0 scale-100 opacity-100 group-hover:translate-x-[220%] group-hover:scale-[0.8] group-hover:opacity-0 stroke-current"
        />
        {/* Incoming Arrow: starts large at scale 1.2 on left, shoots into center at scale 1 */}
        <ArrowRight
          size={arrowSvgSizes[size] || 15}
          className="absolute transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] -translate-x-[220%] scale-[1.2] opacity-0 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 stroke-current"
        />
      </span>
    ) : (
      <span
        aria-hidden="true"
        className="relative inline-flex items-center justify-center size-4 sm:size-4.5 shrink-0 overflow-hidden"
      >
        {/* Active Naked Arrow */}
        <ArrowRight
          size={arrowSvgSizes[size] || 15}
          className="absolute transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] translate-x-0 scale-100 opacity-100 group-hover:translate-x-[200%] group-hover:scale-[0.8] group-hover:opacity-0 stroke-current"
        />
        {/* Incoming Naked Arrow */}
        <ArrowRight
          size={arrowSvgSizes[size] || 15}
          className="absolute transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] -translate-x-[200%] scale-[1.2] opacity-0 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 stroke-current"
        />
      </span>
    )
  );

  // Framer-exact dual-layer vertical text roll:
  // - Outgoing text: normal scale (1) -> scales down to 0.8 as it glides up
  // - Incoming text: starts below at scale 1.2 -> scales down to normal (1) as it glides up into center
  // - Uses full button height for complete top/bottom movement
  const textContent = (
    <span className="relative flex items-center justify-center leading-tight font-medium text-current select-none">
      {/* Active Text: glides up and scales down from 1 to 0.8 */}
      <span className="inline-block transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] origin-center translate-y-0 scale-100 opacity-100 group-hover:-translate-y-[160%] group-hover:scale-[0.8] group-hover:opacity-0">
        {children}
      </span>
      {/* Incoming Text: starts below at scale 1.2, glides up to center at scale 1 */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] origin-center translate-y-[160%] scale-[1.2] opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none"
      >
        {children}
      </span>
    </span>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={computedRel}
          className={baseClasses}
          onClick={onClick}
          {...props}
        >
          {textContent}
          {arrowIcon}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses} onClick={onClick} {...props}>
        {textContent}
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {textContent}
      {arrowIcon}
    </button>
  );
}
