"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import BentoBlogCard from "@/components/cards/BentoBlogCard";
import { blogData } from "@/data/blogData";

export default function BlogBentoGrid() {
  const allArticles = blogData.articles;
  const [visibleCount, setVisibleCount] = useState(5);

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
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

