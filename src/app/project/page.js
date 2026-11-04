import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ProjectHeroSection from "@/components/sections/project/ProjectHeroSection";
import ProjectsGrid from "@/components/sections/project/ProjectsGrid";
import EnquirySection from "@/components/sections/EnquirySection";
import { projectData } from "@/data/projectData";

export const metadata = {
  title: projectData.metadata.title,
  description: projectData.metadata.description,
  openGraph: {
    title: projectData.metadata.title,
    description: projectData.metadata.description,
  },
};

export default function ProjectPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation header with transparent background & active project indicator */}
      <Navbar isHome={false} activePath="/project" />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <ProjectHeroSection />

        {/* 2-Column Grid with Load More */}
        <ProjectsGrid />

        {/* Reused Enquiry Section */}
        <EnquirySection />
      </main>

      {/* Dark Footer */}
      <Footer />
    </div>
  );
}

