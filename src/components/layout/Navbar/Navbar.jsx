import { typography } from "@/components/styles";
import HeroContent from "@/components/sections/HeroContent";
import Image from "next/image";
import Link from "next/link";
import NavbarClient from "./NavbarClient";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export default function Navbar() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-[#15171a]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/herovideo2.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/45" />

      <header className="absolute left-0 top-0 z-30 flex h-16 w-full items-center bg-[#222426]/95 px-5 text-white sm:px-8">
        <Image
          src="/images/logo.png"
          alt="Ignitex"
          width={120}
          height={50}
          style={{ width: "auto", height: "auto" }}
          priority
        />

        <p className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-medium text-white/70 min-[1200px]:block">
          Based in: <span className="text-white">Mohali, India</span>
        </p>

        <div className="ml-auto flex items-center gap-8">
          <nav
            className={`hidden min-[1200px]:flex items-center gap-9 text-sm text-white ${typography.fontFamily.primary} ${typography.fontWeight.medium}`}
          >
            <Link href="/">• Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/services">
              Projects <sup className="text-[9px]">(07)</sup>
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <NavbarClient
            items={menuItems}
            socialItems={socialItems}
            displayItemNumbering
            menuButtonColor="#ffffff"
            openMenuButtonColor="#ffffff"
            changeMenuColorOnOpen={false}
            colors={["#B497CF", "#5227FF"]}
            accentColor="#5227FF"
          />
        </div>
      </header>

      <HeroContent />
    </div>
  );
}
