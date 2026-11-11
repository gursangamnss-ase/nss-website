import Container from "@/components/layout/Container";
import ProjectCard from "@/components/cards/ProjectCard";
import { projectData } from "@/data/projectData";

export default function MoreProjectsSection({ relatedProjectIds = [] }) {
  // Find related projects by ID, fallback to other projects in list
  const relatedProjects = projectData.projects
    .filter((p) => relatedProjectIds.includes(p.id))
    .slice(0, 2);

  const fallbackProjects = projectData.projects.slice(0, 2);
  const projectsToDisplay =
    relatedProjects.length > 0 ? relatedProjects : fallbackProjects;

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container size="2xl">
        <h2 className="text-4xl sm:text-[86px] font-medium tracking-tight text-[var(--color-primary)] leading-tight text-center mb-12 sm:mb-16">
          More{" "}
          <span className="font-script font-normal italic tracking-normal">
            Projects
          </span>
        </h2>

        {/* Responsive Grid: 1 col on mobile/tablet, 2 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projectsToDisplay.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

