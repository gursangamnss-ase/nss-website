import { projectData } from "./projectData";

export const projectDetailsData = {
  nova: {
    slug: "nova",
    title: "Nova",
    scriptTitle: "Wallet",
    heroImage: "/projects/project2.jpg",
    overview: {
      badge: "Overview",
      description:
        "Nova Wallet, a rapidly growing crypto-finance app, reached out for a complete redesign of its platform. Their existing interface lacked clarity and failed to match the expectations of modern crypto users. We aimed to craft a sleek, intuitive, and secure experience tailored for both new and experienced traders.",
      meta: [
        { label: "Client:", value: "BlockNova Inc." },
        { label: "Year:", value: "2025" },
        { label: "Category:", value: "UI/UX Design / Web App" },
        { label: "Location:", value: "San Francisco, CA" },
      ],
      liveSiteUrl: "https://example.com",
      liveSiteLabel: "View live site",
    },
    showcaseImage: "/projects/project1.jpg",
    challenge: {
      badge: "The Challenge",
      description:
        "As user numbers grew, so did confusion. Nova Wallet’s interface was cluttered, with inconsistent icons, complex user flows, and a dated look. Security cues were poorly communicated, and users had low trust during transactions.",
      bullets: [
        "Complex onboarding, discouraging new users",
        "Visual design not aligned with blockchain credibility",
        "Poor mobile responsiveness",
        "Weak CTA placement and conversion",
      ],
    },
    solution: {
      badge: "The Solution",
      description:
        "We conducted competitor analysis and user testing, then rebuilt the UI with clarity and minimalism in mind. Security indicators were prioritized, typography was modernized, and we implemented adaptive layouts for mobile. We also introduced a consistent component library.",
    },
    gallery: [
      "/images/case-studies/client-3.jpg",
      "/images/case-studies/client-4.jpg",
      "/images/case-studies/desert-campaign.jpg",
    ],
    results: {
      badge: "The Result",
      description:
        "User confidence rose dramatically, with a drop in abandonment during key transactions. Nova now stands out in a crowded space with a bold, secure, and scalable interface.",
      stats: [
        { count: "48", symbol: "%", label: "Increase in completed sign-ups" },
        { count: "3.2", symbol: "x", label: "Boost in daily active users" },
        { count: "65", symbol: "%", label: "Faster mobile navigation" },
      ],
    },
    feedback: {
      badge: "Client feedback",
      quote:
        "They made crypto feel approachable. The design is stunning and the UX feels effortless.",
      author: "Jared Lin",
      role: "Product Manager",
      avatar: "/images/testimonials/daniel-rios.jpg",
    },
    relatedProjectIds: ["echo-studio", "pulse-ui"],
  },
};

export function getProjectBySlug(slug) {
  if (projectDetailsData[slug]) {
    return projectDetailsData[slug];
  }

  // Fallback for other slugs in projectData.projects
  const base = projectData.projects.find(
    (p) => p.href === `/project/${slug}` || p.id === slug,
  );

  if (!base) return null;

  return {
    slug,
    title: base.title,
    scriptTitle: base.scriptTitle,
    heroImage: base.image,
    overview: {
      badge: "Overview",
      description: `${base.title} ${base.scriptTitle} was designed to deliver standout storytelling, modern responsive layouts, and seamless digital interaction.`,
      meta: [
        { label: "Client:", value: `${base.title} Studios` },
        { label: "Year:", value: "2025" },
        { label: "Category:", value: base.tags.join(" / ") },
        { label: "Location:", value: "San Francisco, CA" },
      ],
      liveSiteUrl: "https://example.com",
      liveSiteLabel: "View live site",
    },
    showcaseImage: base.image,
    challenge: {
      badge: "The Challenge",
      description:
        "Building a unified visual language and user journey that scales across mobile and desktop devices.",
      bullets: [
        "Modernizing legacy user experience",
        "Streamlining user journeys and interaction cues",
        "Ensuring rapid performance across all viewports",
      ],
    },
    solution: {
      badge: "The Solution",
      description:
        "We designed a modular design system and focused typography hierarchy to enhance clarity and user engagement.",
    },
    gallery: [
      "/images/case-studies/client-1.jpg",
      "/images/case-studies/client-2.jpg",
      "/images/case-studies/client-3.jpg",
    ],
    results: {
      badge: "The Result",
      description:
        "Achieved noticeable improvements in user retention, speed metrics, and brand credibility.",
      stats: [
        { count: "54", symbol: "%", label: "Increase in user engagement" },
        { count: "2.8", symbol: "x", label: "Higher conversion rate" },
        { count: "40", symbol: "%", label: "Faster load times" },
      ],
    },
    feedback: {
      badge: "Client feedback",
      quote:
        "A transformative digital experience that exceeded our expectations in aesthetic and function.",
      author: "Alex Morgan",
      role: "Design Lead",
      avatar: "/images/testimonials/daniel-rios.jpg",
    },
    relatedProjectIds: ["nova-wallet", "echo-studio"].filter(
      (id) => id !== base.id,
    ),
  };
}

