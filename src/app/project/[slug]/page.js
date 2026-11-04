import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import EnquirySection from "@/components/sections/EnquirySection";
import ProjectDetailHero from "@/components/sections/project-details/ProjectDetailHero";
import ProjectOverviewSection from "@/components/sections/project-details/ProjectOverviewSection";
import {
  ProjectShowcaseBanner,
  ProjectGalleryGrid,
} from "@/components/sections/project-details/ProjectGallerySection";
import ProjectChallengeSolution from "@/components/sections/project-details/ProjectChallengeSolution";
import ProjectResultsSection from "@/components/sections/project-details/ProjectResultsSection";
import ProjectFeedbackSection from "@/components/sections/project-details/ProjectFeedbackSection";
import MoreProjectsSection from "@/components/sections/project-details/MoreProjectsSection";
import { getProjectBySlug } from "@/data/projectDetailsData";
import { projectData } from "@/data/projectData";

export async function generateStaticParams() {
  return projectData.projects.map((p) => ({
    slug: p.href.replace("/project/", ""),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | NetSquare Softwares",
    };
  }

  return {
    title: `${project.title} ${project.scriptTitle} | NetSquare Softwares Case Study`,
    description: project.overview?.description?.slice(0, 160),
    openGraph: {
      title: `${project.title} ${project.scriptTitle} | NetSquare Softwares`,
      description: project.overview?.description?.slice(0, 160),
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation header with no background & current text colors */}
      <Navbar isHome={false} activePath="/project" />

      <main id="main-content" className="flex-1">
        {/* Project Hero Banner */}
        <ProjectDetailHero
          title={project.title}
          scriptTitle={project.scriptTitle}
          heroImage={project.heroImage}
        />

        {/* Overview & Metadata Section */}
        <ProjectOverviewSection overview={project.overview} />

        {/* Full-Width Showcase Banner */}
        <ProjectShowcaseBanner
          image={project.showcaseImage}
          alt={`${project.title} showcase visual`}
        />

        {/* The Challenge & The Solution Section */}
        <ProjectChallengeSolution
          challenge={project.challenge}
          solution={project.solution}
        />

        {/* Visual Gallery Grid */}
        <ProjectGalleryGrid images={project.gallery} />

        {/* Impact Results & Metrics */}
        <ProjectResultsSection results={project.results} />

        {/* Client Feedback Testimonial */}
        <ProjectFeedbackSection feedback={project.feedback} />

        {/* More Related Projects */}
        <MoreProjectsSection relatedProjectIds={project.relatedProjectIds} />

        {/* Reused Enquiry CTA Section */}
        <EnquirySection />
      </main>

      {/* Dark Reused Footer */}
      <Footer />
    </div>
  );
}

