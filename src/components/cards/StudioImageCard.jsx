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
      className={`relative w-full rounded-[10px] border border-white bg-[#f7f7f6] p-1.5 pb-12 shadow-[0_0_0_1px_rgba(5,8,12,0.04)] sm:p-2 sm:pb-16 ${className}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-[7px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) calc(100vw - 40px), 640px"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_2px_12px_rgba(5,8,12,0.08)] sm:bottom-3 sm:gap-3 sm:py-2 sm:pl-2 sm:pr-5">
        <div className="relative size-8 shrink-0 overflow-hidden rounded-full border border-[#ef6f38] sm:size-11 sm:border-2">
          <Image
            src={avatar}
            alt=""
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>

        <div className="leading-tight">
          <p className="text-[10px] font-semibold text-[#05080c] sm:text-sm">
            {title}
          </p>
          <p className="mt-0.5 text-[8px] text-[#5b5b5b] sm:text-[11px]">
            {subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
