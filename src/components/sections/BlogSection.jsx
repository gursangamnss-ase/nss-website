import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/cards/BlogCard";
import { blogData } from "@/data/blogData";

export default function BlogSection() {
  const {
    badge,
    titlePrefix,
    titleScript,
    titleSuffix,
    buttonText,
    buttonLink,
    articles,
  } = blogData;

  return (
    <Section
      id="journal"
      spacing="none"
      background="white"
      className="bg-white py-20 sm:py-28 lg:py-32 text-[#05080c] select-none"
    >
      <Container size="2xl">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
          {/* Left Column: Heading & CTA */}
          <div className="lg:w-[440px] xl:w-[480px] shrink-0 lg:sticky lg:top-28">
            {/* Pre-title Badge */}
            <div className="mb-6">
              <Badge
                text={badge}
                disabled
                color="#05080c"
                className="text-xs sm:text-[13px] font-medium tracking-wide text-[#05080c]"
              />
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#05080c]">
              <span className="block">{titlePrefix}</span>
              <span className="block">
                <span className="font-script font-normal text-[1.18em] tracking-normal inline-block pr-2">
                  {titleScript}
                </span>
                {titleSuffix}
              </span>
            </h2>

            {/* Button */}
            <div className="mt-8 sm:mt-10">
              <Link href={buttonLink || "#"}>
                <Button variant="dark" className="pl-6 pr-1.5 py-1 text-[14px]">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Blog Cards */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-5 w-full max-w-[740px]">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
