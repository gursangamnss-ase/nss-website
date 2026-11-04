import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import BlogHeroSection from "@/components/sections/blog/BlogHeroSection";
import BlogBentoGrid from "@/components/sections/blog/BlogBentoGrid";
import EnquirySection from "@/components/sections/EnquirySection";

export const metadata = {
  title: "Explore Our Blog | NetSquare Softwares",
  description:
    "Insights, design strategies, and development thoughts from the team at NetSquare Softwares.",
  openGraph: {
    title: "Explore Our Blog | NetSquare Softwares",
    description:
      "Insights, design strategies, and development thoughts from the team at NetSquare Softwares.",
  },
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation header with transparent background & dark controls */}
      <Navbar isHome={false} activePath="/blog" />

      <main id="main-content" className="flex-1">
        {/* Blog Hero Section with decorative monogram watermark */}
        <BlogHeroSection />

        {/* 3-Column Bento Grid with Featured Post & Interactive Load More */}
        <BlogBentoGrid />

        {/* Reused Enquiry CTA Section */}
        <EnquirySection />
      </main>

      {/* Reused Dark Footer */}
      <Footer />
    </div>
  );
}

