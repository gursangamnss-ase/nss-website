import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  light: "bg-white !text-[var(--color-primary)] text-[var(--color-primary)] hover:bg-neutral-100 shadow-sm",
  dark: "bg-[var(--color-primary)] !text-white text-white hover:bg-neutral-800 shadow-sm",
  solid: "bg-[var(--color-primary)] !text-white text-white justify-center hover:bg-neutral-800 shadow-sm",
  transparent: "bg-transparent !text-[var(--color-primary)] text-[var(--color-primary)] hover:bg-black/5",
  outline: "bg-transparent border border-current text-current hover:bg-black/5",
};

const sizes = {
  sm: "pl-4 pr-1 py-1 text-xs sm:text-sm",
  md: "pl-6 pr-1.5 py-1 text-sm sm:text-base",
  lg: "pl-7 pr-2 py-2 text-base sm:text-lg",
};

const symmetricSizes = {
  sm: "px-5 py-2 text-xs sm:text-sm",
  md: "px-8 py-3 text-sm sm:text-base",
  lg: "px-9 py-3.5 text-base sm:text-lg",
};

export default function Button({
  children,
  variant = "light",
  size = "md",
  type = "button",
  className = "",
  showArrow = true,
  href,
  target,
  rel,
  onClick,
  ...props
}) {
  const isExternal = href && (href.startsWith("http://") || href.startsWith("https://") || target === "_blank");
  const computedRel = isExternal && target === "_blank" && !rel ? "noopener noreferrer" : rel;

  const sizeClasses = showArrow
    ? (sizes[size] || sizes.md)
    : (symmetricSizes[size] || symmetricSizes.md);
  const justifyClass = showArrow ? "justify-between" : "justify-center";

  const baseClasses = `group inline-flex items-center ${justifyClass} gap-3 sm:gap-4 whitespace-nowrap rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] active:scale-95 ${variants[variant] || variants.light} ${sizeClasses} ${className}`;

  const arrowIcon = showArrow && (
    <span
      aria-hidden="true"
      className={`flex items-center justify-center p-1.5 sm:p-2 rounded-full shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 ${
        variant === "light"
          ? "bg-[var(--color-primary)] text-white"
          : "bg-white text-[var(--color-primary)]"
      }`}
    >
      <ArrowRight size={16} className="stroke-current" />
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
          <span className="font-medium text-current">{children}</span>
          {arrowIcon}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses} onClick={onClick} {...props}>
        <span className="font-medium text-current">{children}</span>
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      <span className="font-medium text-current">{children}</span>
      {arrowIcon}
    </button>
  );
}
