import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { aboutData } from "@/data/aboutData";

export default function AboutTeamSection() {
  const { team } = aboutData;

  return (
    <section
      id="team-section"
      className="relative bg-[var(--color-primary)] py-20 sm:py-28 lg:py-36 text-white overflow-hidden scroll-mt-20"
    >
      {/* Subtle Background Watermark Vector */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[-10%] w-[600px] h-auto opacity-[0.04] select-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/letterImage.svg"
          alt=""
          width={750}
          height={1064}
          className="w-full h-auto object-contain brightness-0 invert"
        />
      </div>

      <Container size="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <Badge
            text={team.badge}
            disabled
            color="#ffffff"
            className="font-medium text-xs sm:text-sm tracking-wide mb-4 !bg-white/10 !text-white border border-white/15"
          />

          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.04em] text-white">
            {team.headingPrefix}{" "}
            <span className="font-script text-[1.25em] font-normal leading-none inline-block align-baseline -rotate-2 mx-1">
              {team.headingScript}
            </span>{" "}
            {team.headingSuffix}
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.members.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col rounded-[22px] sm:rounded-[26px] bg-white/[0.04] border border-white/[0.08] p-4 sm:p-5 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-xl"
            >
              {/* Member Portrait Image */}
              <div className="relative aspect-[3/4] w-full rounded-[18px] sm:rounded-[20px] overflow-hidden bg-neutral-900 mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Social icons overlay on hover */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {member.socials.facebook && (
                    <Link
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Facebook`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </Link>
                  )}
                  {member.socials.instagram && (
                    <Link
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Instagram`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </Link>
                  )}
                  {member.socials.twitter && (
                    <Link
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on X`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors"
                    >
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Member Meta */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-border)] font-medium mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

