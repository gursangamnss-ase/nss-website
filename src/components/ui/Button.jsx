import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  light: "bg-white !text-[var(--color-primary)] text-[var(--color-primary)] hover:bg-neutral-100",
  dark: "bg-[var(--color-primary)] !text-white text-white hover:bg-neutral-900",
  solid: "bg-[var(--color-primary)] !text-white text-white justify-center hover:bg-neutral-900",
  transparent: "bg-transparent !text-[var(--color-primary)] text-[var(--color-primary)] hover:bg-black/5",
};

export default function Button({
  children,
  variant = "light",
  type = "button",
  className = "",
  showArrow = true,
  href,
  onClick,
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-between gap-3 whitespace-nowrap rounded-full pl-6 pr-1.5 py-0.5 transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${variants[variant] || variants.light} ${className}`;

  const arrowIcon = showArrow && (
    <span
      aria-hidden="true"
      className={`flex items-center justify-center p-2 rounded-full shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 ${
        variant === "light"
          ? "bg-[var(--color-primary)] text-white"
          : "bg-white text-[var(--color-primary)]"
      }`}
    >
      <ArrowRight size={18} className="stroke-current" />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${baseClasses}`} onClick={onClick} {...props}>
        <span className="font-semibold text-current">{children}</span>
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`group ${baseClasses}`}
      onClick={onClick}
      {...props}
    >
      <span className="font-semibold text-current">{children}</span>
      {arrowIcon}
    </button>
  );
}
