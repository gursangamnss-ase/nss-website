"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import BentoBlogCard from "@/components/cards/BentoBlogCard";
import Button from "@/components/ui/Button";
import { blogData } from "@/data/blogData";

export default function BlogBentoGrid() {
  const allArticles = blogData.articles;
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount(allArticles.length);
  };

  const visibleArticles = allArticles.slice(0, visibleCount);
  const hasMore = visibleCount < allArticles.length;

  return (
    <section className="bg-white pb-20 sm:pb-28">
      <Container size="2xl">
        {/* 3-Column Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleArticles.map((article) => (
            <BentoBlogCard key={article.slug || article.id} article={article} />
          ))}
        </div>

        {/* Interactive Load More Button */}
        {hasMore && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <Button
              type="button"
              variant="dark"
              showArrow={false}
              size="md"
              onClick={handleLoadMore}
              aria-label="Load more articles"
            >
              Load More
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

