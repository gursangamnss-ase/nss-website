import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import CareerHeroSection from "@/components/sections/career/CareerHeroSection";
import CareerWhyChooseSection from "@/components/sections/career/CareerWhyChooseSection";
import CareerLifeSection from "@/components/sections/career/CareerLifeSection";
import CareerJobOpeningsSection from "@/components/sections/career/CareerJobOpeningsSection";
import CareerHiringProcessSection from "@/components/sections/career/CareerHiringProcessSection";
import CareerApplicationSection from "@/components/sections/career/CareerApplicationSection";

export default function CareerPage() {
    return (
        <>
            <Navbar isHome={false} activePath="/career" />

            <main id="main-content">
                <CareerHeroSection />

                <CareerWhyChooseSection />

                <CareerLifeSection />

                <CareerJobOpeningsSection />

                <CareerHiringProcessSection />

                <CareerApplicationSection />
            </main>

            <Footer />
        </>
    );
}