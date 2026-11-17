import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar/Navbar";
import InsideStudioSection from "@/components/sections/InsideStudioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustedClientsSection from "@/components/sections/TrustedClientsSection";
import Footer from "@/components/layout/Footer/Footer";

// Lazy-load below-the-fold sections for optimal mobile performance and minimal Total Blocking Time (TBT)
const CreativeCollabsSection = dynamic(() => import("@/components/sections/CreativeCollabsSection"));
const FeaturedProjectsSection = dynamic(() => import("@/components/sections/FeaturedProjectsSection"));
const BrandStoriesSection = dynamic(() => import("@/components/sections/BrandStoriesSection"));
const WhyChooseSection = dynamic(() => import("@/components/sections/WhyChooseSection"));
const TrackRecordSection = dynamic(() => import("@/components/sections/TrackRecordSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const TeamSection = dynamic(() => import("@/components/sections/TeamSection"));
const ProofSection = dynamic(() => import("@/components/sections/ProofSection"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));
const EnquirySection = dynamic(() => import("@/components/sections/EnquirySection"));

export const metadata = {
  title: "NetSquare Softwares | Digital Product & Creative Agency",
  description:
    "Crafting impactful brands, digital products, and high-performance websites with precision strategy and modern design.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <InsideStudioSection />

        {/* Services & Clients */}
        <section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/images/services/services-bg.webp"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          </div>

          <div className="relative z-10">
            <ServicesSection />
            <TrustedClientsSection />
          </div>
        </section>

        {/* Ideas & Execution (Creative Collabs) */}
        <CreativeCollabsSection />

        {/* Featured Projects Slider */}
        <FeaturedProjectsSection />

        {/* Brand Stories (From concept to launch) */}
        <BrandStoriesSection />

        {/* Why Brands Trust Us (Bento Grid) */}
        <WhyChooseSection />

        {/* Our Track Record (Metrics that Prove value) */}
        <TrackRecordSection />

        {/* The proof is in their words (Testimonials) */}
        <TestimonialsSection />

        {/* Talent with purpose (Team Section) */}
        <TeamSection />

        {/* Proof that Speaks volumes (Case Studies) */}
        <ProofSection />

        {/* Insights & Inspiration (Explore our Latest journal) */}
        <BlogSection />

        {/* Enquiry / Contact CTA Section */}
        <EnquirySection />
      </main>

      <Footer />
    </>
  );
}
