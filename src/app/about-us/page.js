import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import AboutGallerySection from "@/components/sections/about/AboutGallerySection";
import AboutVisionSection from "@/components/sections/about/AboutVisionSection";
import AboutMilestonesSection from "@/components/sections/about/AboutMilestonesSection";
import AboutImpactSection from "@/components/sections/about/AboutImpactSection";
import FaqSection from "@/components/sections/contact/FaqSection";
import EnquirySection from "@/components/sections/EnquirySection";
import { aboutData } from "@/data/aboutData";

export const metadata = {
  title: aboutData.metadata.title,
  description: aboutData.metadata.description,
  openGraph: aboutData.metadata.openGraph,
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation header with transparent background & active /about-us indicator */}
      <Navbar isHome={false} activePath="/about-us" />

      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <AboutHeroSection />

        {/* 2. Studio 3x3 Photo Gallery (Sticky background layer) */}
        <AboutGallerySection />

        {/* 3-8. Subsequent Sections floating and sliding over the sticky gallery */}
        <div className="relative z-20 bg-white">
          {/* 3. Vision & Mission Bento Grid with Animated Metric Counters */}
          <AboutVisionSection />

          {/* 4. Milestones & Industry Awards */}
          <AboutMilestonesSection />

          {/* 5. Visionary Impact, Client Marquee & Wide Studio Banner */}
          <AboutImpactSection />

          {/* 6. Reusable FAQ Section */}
          <FaqSection
            items={aboutData.faqs}
            badgeText="Have questions?"
            headingLightText="Find"
            headingScriptText="The"
            headingEndText="answers"
            layout="split"
          />

          {/* 8. Reusable Enquiry / Contact CTA Section */}
          <EnquirySection />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

