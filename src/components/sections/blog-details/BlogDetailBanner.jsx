import Image from "next/image";
import Container from "@/components/layout/Container";

export default function BlogDetailBanner({ post }) {
  const { image, alt, title } = post;

  return (
    <section className="bg-white pt-8 sm:pt-10 lg:pt-[60px] pb-10 sm:pb-14 lg:pb-16">
      <Container size="2xl">
        <div className="mx-auto max-w-[1020px] px-2 sm:px-4">
          <div className="relative aspect-[1920/850] w-full overflow-hidden rounded-[10px] md:rounded-[16px] bg-neutral-900 shadow-sm">
            <Image
              src={image}
              alt={alt || title}
              fill
              sizes="(max-width: 1020px) 100vw, 1020px"
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}


