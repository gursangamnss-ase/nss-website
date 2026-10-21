import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data/footerData";

/* Social Icon SVG components */
function SocialIcon({ type }) {
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 50 50" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.583 45.313h.834c1.562 0 2.343 0 2.891-.398q.267-.194.46-.461c.399-.548.399-1.33.399-2.892V28.386h2.5c1.562 0 2.343 0 2.891-.398a2 2 0 0 0 .46-.46c.399-.548.399-1.33.399-2.892v-.399c0-1.562 0-2.344-.398-2.891a2.1 2.1 0 0 0-.461-.461c-.548-.398-1.329-.398-2.891-.398h-2.5v-4.774c0-.97 0-1.456.158-1.84.212-.51.617-.915 1.128-1.127.383-.158.868-.158 1.839-.158.97 0 1.456 0 1.839-.159.51-.211.916-.617 1.127-1.127.159-.383.159-.869.159-1.84V7.929c0-1.08 0-1.619-.196-2.038a2.08 2.08 0 0 0-1.007-1.007c-.419-.196-.959-.196-2.038-.196-3.778 0-5.667 0-7.133.684a7.3 7.3 0 0 0-3.526 3.527c-.684 1.465-.684 3.354-.684 7.132v4.456h-2.5c-1.562 0-2.343 0-2.89.398a2.1 2.1 0 0 0-.462.46c-.398.548-.398 1.33-.398 2.892v.4c0 1.562 0 2.343.398 2.89q.195.267.461.462c.548.397 1.329.397 2.891.397h2.5v13.177c0 1.563 0 2.344.398 2.892q.194.267.461.46c.548.398 1.33.398 2.891.398" />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 50 50" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.688 22.5c0-7.421 0-11.132 1.89-13.733a9.9 9.9 0 0 1 2.189-2.19c2.601-1.89 6.312-1.89 13.733-1.89h5c7.421 0 11.132 0 13.733 1.89.84.61 1.58 1.35 2.19 2.19 1.89 2.601 1.89 6.312 1.89 13.733v5c0 7.421 0 11.132-1.89 13.733a9.9 9.9 0 0 1-2.19 2.19c-2.6 1.89-6.312 1.89-13.733 1.89h-5c-7.421 0-11.132 0-13.733-1.89a9.9 9.9 0 0 1-2.19-2.19c-1.89-2.6-1.89-6.312-1.89-13.733zm10.937-2.188c.863 0 1.563.7 1.563 1.563v12.5a1.563 1.563 0 0 1-3.125 0v-12.5c0-.863.7-1.563 1.562-1.563m7.292 0c.863 0 1.562.7 1.562 1.563v.471a8.7 8.7 0 0 1 5.6-2.034 5.86 5.86 0 0 1 5.858 5.86v8.203a1.563 1.563 0 0 1-3.124 0v-8.203a2.734 2.734 0 0 0-2.735-2.735 5.6 5.6 0 0 0-5.599 5.6v5.338a1.563 1.563 0 0 1-3.125 0v-12.5c0-.863.7-1.563 1.563-1.563m-7.292-2.604a2.083 2.083 0 1 0 0-4.166 2.083 2.083 0 0 0 0 4.166" />
      </svg>
    );
  }
  if (type === "twitter") {
    return (
      <svg viewBox="0 0 50 50" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M42.467 11.217a2.604 2.604 0 0 0-3.683-3.683l-12.521 12.52 3.286 4.08zM20.45 25.867l3.286 4.08-12.52 12.52a2.604 2.604 0 0 1-3.683-3.683z" />
        <path d="M10.945 6.771c-2.244 0-3.366 0-3.835.59-.147.185-.25.4-.301.63-.166.735.538 1.61 1.946 3.357L33.593 42.18c.368.457.552.686.794.83q.12.07.252.12c.264.098.557.098 1.144.098h3.271c2.245 0 3.367 0 3.836-.59.146-.185.249-.4.3-.629.166-.736-.537-1.61-1.945-3.357L16.407 7.819c-.369-.457-.553-.685-.795-.83a1.6 1.6 0 0 0-.251-.12c-.264-.098-.558-.098-1.145-.098h-3.27Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 50 50" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M27.5 4.688h-5c-7.421 0-11.132 0-13.733 1.89a9.9 9.9 0 0 0-2.19 2.189c-1.89 2.601-1.89 6.312-1.89 13.733v5c0 7.421 0 11.132 1.89 13.733.61.84 1.35 1.58 2.19 2.19 2.601 1.89 6.312 1.89 13.733 1.89h5c7.421 0 11.132 0 13.733-1.89a9.9 9.9 0 0 0 2.19-2.19c1.89-2.6 1.89-6.312 1.89-13.733v-5c0-7.421 0-11.132-1.89-13.733a9.9 9.9 0 0 0-2.19-2.19c-2.6-1.89-6.312-1.89-13.733-1.89ZM33.333 25a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0m3.125-9.375a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167" />
    </svg>
  );
}

export default function Footer() {
  const { brand, mainLinks, contact, socials, copyright, privacyHref } = footerData;

  const leftSocials = socials.slice(0, 2);
  const rightSocials = socials.slice(2, 4);

  return (
    <footer className="relative overflow-hidden bg-[#05080c] text-white pt-24 sm:pt-32 pb-12">
      {/* Background Image & Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={footerData.bgImage}
          alt="Footer background texture"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Content Top: Brand Box & Navigation / Contact */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          {/* Left Brand Info (Normal column, no card, no white bg, increased logo size) */}
          <div className="flex flex-col gap-4 max-w-[380px]">
            <Link href="/" className="inline-block">
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={280}
                height={80}
                className="h-auto w-[230px] sm:w-[270px] object-contain"
                priority
              />
            </Link>
            <p className="text-sm text-[#aaa9ad] leading-relaxed">
              {brand.description}
            </p>
          </div>

          {/* Right Area: Main Links & Contact */}
          <div className="flex-1 flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-24 justify-end w-full">
            {/* Main Links (2 columns) */}
            <div className="min-w-[280px]">
              <p className="text-lg font-medium text-[#aaa9ad] tracking-wide mb-5">
                Main links
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
                {mainLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className={`text-base sm:text-[17px] font-medium transition-colors duration-200 ${
                      idx === 0
                        ? "text-white hover:text-white/80"
                        : "text-[#aaa9ad] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Get in Touch & Offline */}
            <div className="flex flex-col gap-8">
              {/* Phone & Email */}
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium text-[#aaa9ad] tracking-wide">
                  Get in touch
                </p>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="text-lg sm:text-xl font-medium text-white hover:text-white/80 transition-colors"
                >
                  {contact.phoneLabel}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg sm:text-xl font-medium text-white hover:text-white/80 transition-colors break-all"
                >
                  {contact.email}
                </a>
              </div>

              {/* Offline studio address */}
              <div className="flex flex-col gap-1.5">
                <p className="text-lg font-medium text-[#aaa9ad] tracking-wide">
                  {contact.offlineTitle}
                </p>
                <p className="text-base font-medium text-white">
                  {contact.companyTitle}
                </p>
                <p className="text-xs sm:text-sm text-[#aaa9ad] leading-relaxed">
                  {contact.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Center: Social Icons 2-2 Grid (Replaces Ignitex Logo) */}
        <div className="pt-16 sm:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
            {/* Left Column (Facebook, LinkedIn) */}
            <div className="flex flex-col">
              {leftSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-white/30 transition-colors"
                >
                  <div className="flex items-center gap-3.5 text-[#aaa9ad] group-hover:text-white transition-colors">
                    <SocialIcon type={social.type} />
                    <span className="text-base font-medium tracking-tight">
                      {social.name}
                    </span>
                  </div>
                  <div className="text-[#aaa9ad] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M1.5 6H14m0 0L9 1m5 5-5 5"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Right Column (Twitter/X, Instagram) */}
            <div className="flex flex-col">
              {rightSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-white/10 hover:border-white/30 transition-colors"
                >
                  <div className="flex items-center gap-3.5 text-[#aaa9ad] group-hover:text-white transition-colors">
                    <SocialIcon type={social.type} />
                    <span className="text-base font-medium tracking-tight">
                      {social.name}
                    </span>
                  </div>
                  <div className="text-[#aaa9ad] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M1.5 6H14m0 0L9 1m5 5-5 5"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content Bottom: Divider & Rights */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#aaa9ad]">
          <p>{copyright}</p>
          <Link
            href={privacyHref}
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
