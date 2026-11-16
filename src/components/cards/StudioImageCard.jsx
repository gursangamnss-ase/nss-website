import Image from "next/image";

export default function StudioImageCard({
  image,
  imageAlt,
  avatar,
  title,
  subtitle,
  className = "",
}) {
  return (
    <article
      className={`relative w-full rounded-[16px] sm:rounded-[24px] border border-black/[0.05] bg-white p-2 pb-10 sm:p-3 sm:pb-14 shadow-[0_4px_24px_rgba(0,0,0,0.06)] ${className}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-[12px] sm:rounded-[18px]">
        <Image
          src={image}
          alt={imageAlt || title || "Studio photograph"}
          fill
          sizes="(max-width: 640px) calc(100vw - 40px), 640px"
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2.5 sm:gap-3 whitespace-nowrap rounded-full bg-white py-1.5 pl-1.5 pr-4 sm:py-2 sm:pl-2 sm:pr-5 shadow-[0_2px_14px_rgba(5,8,12,0.1)] border border-black/[0.04]">
        <div className="relative size-9 sm:size-11 shrink-0 overflow-hidden rounded-full border border-[var(--color-accent-orange)]">
          <Image
            src={avatar}
            alt=""
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>

        <div className="leading-tight text-left">
          <p className="text-sm font-semibold text-[var(--color-primary)]">
            {title}
          </p>
          <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
