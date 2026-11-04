import Image from "next/image";
import Container from "@/components/layout/Container";

export default function ProjectDetailHero({ title, scriptTitle, heroImage, alt }) {
  return (
    <section className="relative w-full bg-white pb-10 sm:pb-14">
      <Container size="full">
        <div className="relative aspect-[16/9] md:aspect-[21/9] min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] w-full overflow-hidden bg-neutral-900 shadow-sm">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-white drop-shadow-md leading-none">
              {title}{" "}
              <span className="font-script font-normal italic tracking-normal block mt-2 text-[1.1em]">
                {scriptTitle}
              </span>
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
