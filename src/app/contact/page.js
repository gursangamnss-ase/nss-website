import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";
import FaqSection from "@/components/sections/contact/FaqSection";
import { contactData } from "@/data/contactData";

export const metadata = {
  title: contactData.metadata.title,
  description: contactData.metadata.description,
  openGraph: {
    title: contactData.metadata.title,
    description: contactData.metadata.description,
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Existing navigation header with no background and current text color */}
      <Navbar isHome={false} activePath="/contact" />

      <main id="main-content" className="flex-1">
        {/* Hero Section with Contact Info & Form */}
        <ContactHeroSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Dark Footer */}
      <Footer />
    </div>
  );
}
