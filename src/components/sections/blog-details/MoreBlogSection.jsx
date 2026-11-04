import Container from "@/components/layout/Container";
import BentoBlogCard from "@/components/cards/BentoBlogCard";
import { blogData } from "@/data/blogData";

export default function MoreBlogSection({ currentSlug }) {
  // Filter out current article and show 3 other articles
  const relatedArticles = blogData.articles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container size="2xl">
        {/* Centered Display Heading */}
        <h2 className="text-center text-4xl sm:text-[84px] font-medium tracking-tight text-[#05080c] leading-none mb-12 sm:mb-16">
          More{" "}
          <span className="font-script font-normal italic tracking-normal">
            Blog
          </span>
        </h2>

        {/* 3-Column Grid reusing BentoBlogCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {relatedArticles.map((article) => (
            <BentoBlogCard
              key={article.slug || article.id}
              article={{ ...article, isFeatured: false }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

