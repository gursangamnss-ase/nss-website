import Image from "next/image";

/**
 * ImageCard - Reusable image card component with gradient overlay,
 * typography (title/name, subtitle/role), and optional children.
 */
export default function ImageCard({
  image,
  alt = "",
  name,
  title,
  role,
  subtitle,
  aspectRatio = "",
  className = "",
  imageClassName = "",
  sizes = "(max-width: 640px) 180px, (max-width: 1024px) 250px, 300px",
  priority = false,
  onClick,
  children,
}) {
  const displayTitle = name || title;
  const displaySubtitle = role || subtitle;

  return (
    <article
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[16px] border border-white/10 bg-[#0c1017] shadow-xl select-none ${aspectRatio} ${className}`}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={alt || displayTitle || "Card image"}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${imageClassName}`}
          />
        </div>
      )}

      {/* Dark Gradient Overlay for text readability */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/35 to-transparent transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Bottom Info Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 flex flex-col justify-end">
        {displayTitle && (
          <h3 className="text-[17px] sm:text-[19px] lg:text-[20px] font-bold tracking-tight text-white leading-snug">
            {displayTitle}
          </h3>
        )}

        {displaySubtitle && (
          <p className="mt-0.5 text-xs sm:text-[13px] font-normal text-[#aaa9ad] tracking-normal">
            {displaySubtitle}
          </p>
        )}

        {children}
      </div>
    </article>
  );
}
