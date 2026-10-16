import { ArrowRight } from "lucide-react";

const variants = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
  solid: "bg-black text-white justify-center",
  transparent: "bg-transparent text-black",
};

export default function Button({
  children,
  variant = "light",
  type = "button",
  className = "",
  showArrow = true,
}) {
    // console.log("show", children, showArrow);
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-between gap-3 whitespace-nowrap rounded-full pl-6 pr-1.5 py-0.5 transition-all duration-300 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>

      {showArrow && (
        <span
          className={`flex items-center justify-center p-2 rounded-full shrink-0
            ${variant === "light" ? "bg-black text-white" : "bg-white text-black"}
          `}
        >
          <ArrowRight size={18} />
        </span>
      )}
    </button>
  );
}