import Link from "next/link";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "404 - Page Not Found | NetSquare Softwares",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar isHome={false} />

      <main id="main-content" className="flex-1 flex items-center justify-center py-24 sm:py-32">
        <Container size="2xl" className="text-center px-4">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <Badge
              text="Error 404"
              color="var(--color-primary)"
              className="font-medium text-xs sm:text-sm tracking-wide mb-6"
            />

            {/* Display Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[var(--color-primary)] mb-6">
              Page not{" "}
              <span className="font-script text-[1.25em] font-normal leading-none inline-block align-baseline -rotate-2">
                Found
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] font-normal max-w-lg mb-10 leading-relaxed">
              The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
            </p>

            {/* Action Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--color-primary)] px-8 py-3.5 text-sm sm:text-base font-medium text-white hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] shadow-sm"
            >
              <span>Return to Homepage</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

