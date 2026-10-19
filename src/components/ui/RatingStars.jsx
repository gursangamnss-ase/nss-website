import { Star } from "lucide-react";
import { colors } from "@/components/styles";

const variants = {
  dark: {
    active: colors.text.primary,
    inactive: colors.border.light,
  },

  light: {
    active: colors.common.white,
    inactive: "rgba(255,255,255,.25)",
  },

  muted: {
    active: colors.text.secondary,
    inactive: colors.border.light,
  },
};
export default function RatingStars({
  rating = 5,
  outOf = 5,
  size = 18,
  variant = "dark",
  className = "",
}) {
  const colors = variants[variant];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: outOf }).map((_, index) => {
        const filled = index < Math.floor(rating);

        return (
          <Star
            key={index}
            size={size}
            strokeWidth={1.5}
            fill={filled ? colors.active : colors.inactive}
            color={filled ? colors.active : colors.inactive}
          />
        );
      })}
    </div>
  );
}