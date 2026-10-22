import Image from "next/image";
import Navbar from "@/components/layout/Navbar/Navbar";
import InsideStudioSection from "@/components/sections/InsideStudioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustedClientsSection from "@/components/sections/TrustedClientsSection";
import CreativeCollabsSection from "@/components/sections/CreativeCollabsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import BrandStoriesSection from "@/components/sections/BrandStoriesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import EnquirySection from "@/components/sections/EnquirySection";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
      </section>
      <InsideStudioSection />

      {/* Services & Clients */}
      <section className="relative overflow-hidden bg-[#05080c] text-white">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/services/services-bg.jpg"
            alt="Services and Clients background"
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

      {/* The proof is in their words (Testimonials) */}
      <TestimonialsSection />

      {/* Talent with purpose (Team Section) */}
      <TeamSection />

      {/* Enquiry / Contact CTA Section */}
      <EnquirySection />

      {/* Footer */}
      <Footer />
    </>
  );
}


{/* <Button variant="light" className="w-64">
        Let's work together
      </Button>
      <Button variant="dark" showArrow={false} className="w-40">
        View our work
      </Button>
      <RatingStars
        rating={5}
        variant="dark"
      />
      <RatingStars
        rating={5}
        variant="light"
      />
      <RatingStars
        rating={4}
        variant="dark"
      />
      <RatingStars
        rating={5}
        variant="light"
        size={24}
      />

      <Rating
        image="/images/clutch.svg"
        imageAlt="Clutch"
        rating={4.9}
        reviews={250}
        sizes={100}
        boxSize="h-10 w-10"
        className="w-65"
      />

      <Rating
        image="/images/designrush.svg"
        imageAlt="DesignRush"
        rating={5.0}
        reviews={186}
        sizes={60}
        boxSize="h-15 w-15"
        className="w-65"
      />

      <ShinyText
        text="Shiny Text Effect"
        speed={2}
        delay={0}
        variant="primary"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
      />


      <FeatureCard
        title="Discover & Define"
        image="/images/compass.svg"
        imageAlt="Compass"
        description="We dive deep into your goals, audience, and brand to uncover insights and define a clear direction."
        badge={<Badge>✦ ✦ ✦</Badge>}
        className="w-100"
      />
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
        delay={0}
      /> */}
