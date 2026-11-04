import Image from "next/image";
import Navbar from "@/components/layout/Navbar/Navbar";
import InsideStudioSection from "@/components/sections/InsideStudioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustedClientsSection from "@/components/sections/TrustedClientsSection";
import CreativeCollabsSection from "@/components/sections/CreativeCollabsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import BrandStoriesSection from "@/components/sections/BrandStoriesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TrackRecordSection from "@/components/sections/TrackRecordSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import ProofSection from "@/components/sections/ProofSection";
import BlogSection from "@/components/sections/BlogSection";
import EnquirySection from "@/components/sections/EnquirySection";
import Footer from "@/components/layout/Footer/Footer";

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
              src="/images/services/services-bg.jpg"
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
