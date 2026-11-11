import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ProjectCard({ project }) {
  const { title, scriptTitle, tags, image, href, alt } = project;

  return (
    <article className="group flex flex-col gap-4">
      {/* Clickable Image Box with Hover Zoom & Centered Title */}
      <Link
        href={href}
        className="relative aspect-[16/7.3] w-full overflow-hidden rounded-[20px] sm:rounded-[26px] bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-label={`View details for ${title} ${scriptTitle}`}
      >
        <Image
          src={image}
          alt={alt || `${title} ${scriptTitle}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay for Text Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15 transition-opacity duration-300 group-hover:opacity-90"
          aria-hidden="true"
        />

        {/* Centered Display Title Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center text-white pointer-events-none">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-white drop-shadow-sm leading-tight">
            {title}
            <span className="font-script font-normal italic tracking-normal block mt-1 text-[1.1em]">
              {scriptTitle}
            </span>
          </h3>
        </div>
      </Link>

      {/* Card Footer: Category Tags & Details Link */}
      <div className="flex items-center justify-between gap-3 px-1 pt-1">
        {/* Category Pill Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-[var(--color-pill-bg)] px-3.5 py-1.5 text-sm md:text-base font-medium text-[var(--color-primary)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details Button (without bg) */}
        <Button
          href={href}
          variant="link"
          size="sm"
          className="shrink-0"
        >
          View details
        </Button>
      </div>
    </article>
  );
}

