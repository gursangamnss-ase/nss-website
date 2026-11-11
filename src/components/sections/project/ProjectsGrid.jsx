"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/Button";
import { projectData } from "@/data/projectData";

const INITIAL_COUNT = 4;

export default function ProjectsGrid() {
  const { projects } = projectData;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount(projects.length);
  };

  return (
    <section className="bg-white pb-24 sm:pb-32">
      <Container size="2xl" className="relative z-10">
        {/* Responsive Grid: 1 col on mobile and tablet (768px), 2 cols on desktop (1024px+) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center pt-12 sm:pt-16">
            <Button
              type="button"
              variant="dark"
              showArrow={false}
              size="md"
              onClick={handleLoadMore}
              aria-label="Load more projects"
            >
              Load More
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
