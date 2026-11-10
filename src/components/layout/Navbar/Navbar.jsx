import HeroContent from "@/components/sections/HeroContent";
import Image from "next/image";
import Link from "next/link";
import NavbarClient from "./NavbarClient";
import { projectData } from "@/data/projectData";

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

const projectCountBadge = `(${String(projectData.projects.length).padStart(2, "0")})`;

const desktopNavLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Projects", href: "/project", badge: projectCountBadge },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ isHome = true, activePath = "/" }) {
  const isLinkActive = (href) => {
    if (href === "/") return activePath === "/";
    return activePath === href || activePath.startsWith(`${href}/`);
  };

  const headerContent = (
    <header
      className={`left-0 top-0 z-30 flex w-full items-center px-5 sm:px-8 ${
        isHome
          ? "absolute h-16 bg-[var(--color-surface-nav)]/95 text-white"
          : "relative h-20 bg-transparent text-[var(--color-primary)]"
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
          {desktopNavLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active
                    ? isHome
                      ? "font-semibold text-white"
                      : "font-semibold text-[var(--color-primary)]"
                    : isHome
                    ? "text-white/80 hover:text-white"
                    : "text-neutral-600 hover:text-[var(--color-primary)]"
                }`}
              >
                {active ? `• ${item.label}` : item.label}
                {item.badge && <sup className="text-[9px] ml-0.5">{item.badge}</sup>}
              </Link>
            );
          })}
        </nav>

        <NavbarClient
          items={menuItems}
          socialItems={socialItems}
          displayItemNumbering
          menuButtonColor={isHome ? "var(--color-text-white)" : "var(--color-primary)"}
          openMenuButtonColor="var(--color-text-white)"
          changeMenuColorOnOpen={false}
          colors={["var(--color-accent-lavender)", "var(--color-accent-purple)"]}
          accentColor="var(--color-accent-purple)"
        />
      </div>
    </header>
  );

  if (!isHome) {
    return headerContent;
  }

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[var(--color-surface-hero)]">
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
