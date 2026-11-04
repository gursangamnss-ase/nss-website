import Container from "@/components/layout/Container";

export default function BlogDetailHeader({ post }) {
  const { title, date, readTime } = post;

  return (
    <section className="bg-white pt-10 lg:pt-35 pb-0">
      <Container size="2xl">
        <div className="mx-auto max-w-[1020px] px-2 sm:px-4 text-center">
          <h1 className="text-[42px] sm:text-[60px] md:text-[68px] lg:text-[84px] font-medium tracking-[-0.04em] text-[#05080c] leading-[1.1] px-5">
            {title}
          </h1>

          <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3 text-[15px] sm:text-[17px] md:text-[18px] font-medium tracking-[-0.02em] text-[#5b5b5b]">
            <time dateTime={date}>{date}</time>
            <span
              className="size-1.5 rounded-full bg-[#5b5b5b] inline-block shrink-0"
              aria-hidden="true"
            />
            <span>{readTime}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}


