import Image from "next/image";
import Container from "@/components/layout/Container";

export default function ProjectDetailHero({
  title,
  scriptTitle,
  heroImage,
  heroAspectRatio = "1844 / 853",
  alt,
}) {
  return (
    <section className="relative w-full bg-white pb-6 sm:pb-10 lg:pb-14">
      <Container size="full">
        <div
          className="relative w-full overflow-hidden bg-neutral-900 shadow-sm"
          style={{ aspectRatio: heroAspectRatio }}
        >
          <Image
            src={heroImage}
            alt={alt || `${title} ${scriptTitle} hero banner`}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />

          {/* Dark Contrast Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25"
            aria-hidden="true"
          />

          {/* Centered Display Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center text-white">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white drop-shadow-md leading-none">
              {title}{" "}
              <span className="font-script font-normal italic tracking-normal block mt-1.5 sm:mt-2 text-[1.1em]">
                {scriptTitle}
              </span>
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
