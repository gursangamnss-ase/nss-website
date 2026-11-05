import Image from "next/image";
import Link from "next/link";

export default function BentoBlogCard({ article }) {
  const { title, date, readTime, isFeatured, badge, image, link } = article;

  if (isFeatured) {
    return (
      <Link
        href={link || "#"}
        className="group relative flex flex-col justify-end overflow-hidden rounded-[20px] sm:rounded-[24px] min-h-[380px] sm:min-h-[440px] p-3.5 sm:p-5 bg-neutral-900 shadow-sm transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-2"
      >
        {/* Background Image with Zoom-Out Hover */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
          className="object-cover object-center transition-transform duration-700 ease-out scale-105 group-hover:scale-100"
        />

        {/* Subtle Gradient Shadow for Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
          aria-hidden="true"
        />

        {/* Floating Bottom Info Pill Card */}
        <div className="relative z-10 w-full rounded-[16px] sm:rounded-[18px] bg-white p-5 sm:p-6 shadow-md transition-all duration-300">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
              {badge || "Featured post"}
            </span>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--color-text-secondary)]">
              <span>{date}</span>
              <span
                className="size-1 rounded-full bg-neutral-400 inline-block shrink-0"
                aria-hidden="true"
              />
              <span>{readTime}</span>
            </div>
          </div>

          <h2 className="mt-3 text-xl sm:text-2xl font-medium tracking-tight text-[var(--color-primary)] leading-snug group-hover:text-neutral-600 transition-colors">
            {title}
          </h2>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={link || "#"}
      className="group flex flex-col justify-between rounded-[20px] sm:rounded-[24px] bg-[var(--color-surface)] p-3 sm:p-3.5 shadow-sm transition-all duration-300 hover:shadow-md col-span-1"
    >
      {/* Top Image Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] sm:rounded-[16px] bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out scale-105 group-hover:scale-100"
        />
      </div>

      {/* Bottom Content Area */}
      <div className="flex flex-col flex-1 justify-between p-3 sm:p-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--color-text-secondary)] mb-2">
          <span>{date}</span>
          <span
            className="size-1 rounded-full bg-neutral-400 inline-block shrink-0"
            aria-hidden="true"
          />
          <span>{readTime}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[var(--color-primary)] leading-snug group-hover:text-neutral-600 transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}

