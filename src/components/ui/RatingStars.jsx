import { Star } from "lucide-react";

const variants = {
  dark: {
    active: "var(--color-primary)",
    inactive: "var(--color-border-light)",
  },
  light: {
    active: "var(--color-text-white)",
    inactive: "rgba(255, 255, 255, 0.25)",
  },
  muted: {
    active: "var(--color-text-secondary)",
    inactive: "var(--color-border-light)",
  },
};

export default function RatingStars({
  rating = 5,
  outOf = 5,
  size = 18,
  variant = "dark",
  className = "",
}) {
  const palette = variants[variant] || variants.dark;

  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      aria-label={`Rating ${rating} out of ${outOf} stars`}
    >
      {Array.from({ length: outOf }).map((_, index) => {
        const filled = index < Math.floor(rating);

        return (
          <Star
            key={index}
            size={size}
            strokeWidth={1.5}
            fill={filled ? palette.active : palette.inactive}
            color={filled ? palette.active : palette.inactive}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
