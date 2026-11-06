import HeroContent from "@/components/sections/HeroContent";
import Image from "next/image";
import Link from "next/link";
import NavbarClient from "./NavbarClient";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about-us" },
  { label: "Projects", ariaLabel: "View our projects", link: "/project" },
  { label: "Blog", ariaLabel: "View our blog", link: "/blog" },
  { label: "Services", ariaLabel: "View our services", link: "/#services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export default function Navbar({ isHome = true, activePath = "/" }) {
  const headerContent = (
    <header
      className={`relative left-0 top-0 z-30 flex w-full items-center px-5 sm:px-8 ${
        isHome
          ? "absolute h-16 bg-[var(--color-surface-nav)]/95 text-white"
          : "h-20 bg-transparent text-[var(--color-primary)]"
      }`}
    >
      <Link
        href="/"
        aria-label="NetSquare Softwares home"
        className="flex items-center"
      >
        <Image
          src="/images/logo.png"
          alt="NetSquare Softwares"
          width={130}
          height={48}
          className="h-15 w-auto object-contain"
          priority
        />
      </Link>

      <p
        className={`absolute left-1/2 hidden -translate-x-1/2 text-base min-[1200px]:block ${
          isHome ? "font-medium text-white/70" : "font-normal text-neutral-500"
        }`}
      >
        Based in:{" "}
        <span
          className={
            isHome ? "text-white" : "font-medium text-[var(--color-primary)]"
          }
        >
          Mohali, India
        </span>
      </p>

      <div className="ml-auto flex items-center gap-8">
        <nav
          aria-label="Main navigation"
          className={`hidden min-[1200px]:flex items-center gap-9 text-sm font-geist font-medium ${
            isHome ? "text-white" : "text-[var(--color-primary)]"
          }`}
        >
          <Link
            href="/"
            className={`transition-colors ${
              activePath === "/"
                ? isHome
                  ? "font-semibold text-white"
                  : "font-semibold text-black"
                : isHome
                ? "text-white/80 hover:text-white"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            {activePath === "/" ? "• Home" : "Home"}
          </Link>
          <Link
            href="/about-us"
            className={`transition-colors ${
              activePath === "/about-us"
                ? isHome
                  ? "font-semibold text-white"
                  : "font-semibold text-black"
                : isHome
                ? "text-white/80 hover:text-white"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            {activePath === "/about-us" ? "• About us" : "About us"}
          </Link>
          <Link
            href="/project"
            className={`transition-colors ${
              activePath === "/project" || activePath.startsWith("/project/")
                ? isHome
                  ? "font-semibold text-white"
                  : "font-semibold text-black"
                : isHome
                ? "hover:text-white/80"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            {activePath === "/project" || activePath.startsWith("/project/") ? "• Projects " : "Projects "}
            <sup className="text-[9px]">(07)</sup>
          </Link>
          <Link
            href="/blog"
            className={`transition-colors ${
              activePath === "/blog" || activePath.startsWith("/blog/")
                ? isHome
                  ? "font-semibold text-white"
                  : "font-semibold text-black"
                : isHome
                ? "hover:text-white/80"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            {activePath === "/blog" || activePath.startsWith("/blog/") ? "• Blog" : "Blog"}
          </Link>
          <Link
            href="/contact"
            className={`transition-colors ${
              activePath === "/contact"
                ? isHome
                  ? "font-semibold text-white"
                  : "font-semibold text-black"
                : isHome
                ? "text-white/80 hover:text-white"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            {activePath === "/contact" ? "• Contact" : "Contact"}
          </Link>
        </nav>

        <NavbarClient
          items={menuItems}
          socialItems={socialItems}
          displayItemNumbering
          menuButtonColor={isHome ? "#ffffff" : "#05080c"}
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen={false}
          colors={["#B497CF", "#5227FF"]}
          accentColor="#5227FF"
        />
      </div>
    </header>
  );

  if (!isHome) {
    return headerContent;
  }

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[#15171a]">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/herovideo2.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/45" aria-hidden="true" />

      {headerContent}

      <HeroContent />
    </div>
  );
}
