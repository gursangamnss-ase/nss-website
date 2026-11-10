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
  shopraftaar: {
    slug: "shopraftaar",
    title: "Raftaar",
    scriptTitle: "E-Commerce",
    heroImage: "/projects/shopraftaar/hero.png",
    overview: {
      badge: "Overview",
      description:
        "Raftaar is an Australian-based Punjabi streetwear brand combining cultural heritage with modern fashion and contemporary streetwear. The brand offers premium oversized T-shirts, heavyweight hoodies, and handcrafted Punjabi-inspired carry bags. Netsquare Softwares developed a responsive e-commerce website with organized product collections, detailed product pages, and a streamlined shopping experience.",
      meta: [
        { label: "Client:", value: "Raftaar" },
        { label: "Year:", value: "2026" },
        { label: "Category:", value: "Fashion & Apparel / Punjabi Streetwear" },
        { label: "Location:", value: "Australia" },
      ],
      liveSiteUrl: "https://shopraftaar.com/",
      liveSiteLabel: "View live site",
    },
    showcaseImage: "/projects/shopraftaar/showcase.png",
    challenge: {
      badge: "The Challenge",
      description:
        "Raftaar needed a modern e-commerce platform that could showcase its products while effectively communicating its Punjabi heritage and brand identity. The website also needed to provide customers with a smooth and easy online shopping experience.",
      bullets: [
        "Showcasing Punjabi heritage fused with modern streetwear aesthetics",
        "Clear organization of product lines across hoodies, oversized tees, and tote bags",
        "Smooth, mobile-first product discovery and interactive lookbooks",
        "Streamlined shopping cart and checkout flows to maximize conversion",
      ],
    },
    solution: {
      badge: "The Solution",
      description:
        "Netsquare Softwares developed a responsive e-commerce website with organized product collections, detailed product pages, and a streamlined shopping experience. The design combines modern aesthetics with Raftaar's cultural identity and premium streetwear positioning.",
    },
    gallery: [
      "/projects/shopraftaar/gallery-1.png",
      "/projects/shopraftaar/gallery-2.png",
      "/projects/shopraftaar/gallery-3.png",
    ],
    results: {
      badge: "The Result",
      description:
        "The website provides Raftaar with a professional online storefront to showcase its collections, connect with customers, and sell its Punjabi-inspired streetwear products online.",
      stats: [
        { count: "17", symbol: "+", label: "Products Available" },
        { count: "3", symbol: "", label: "Main Product Collections" },
        { count: "100", symbol: "%", label: "Responsive Streetwear Storefront" },
      ],
    },
    feedback: {
      badge: "Client feedback",
      quote:
        "Working with Netsquare Softwares was a great experience for Raftaar. The team understood our vision and created a modern e-commerce website that beautifully combines our Punjabi heritage with contemporary streetwear. The website gives us a professional platform to showcase our products and connect with our customers.",
      author: "Raftaar Team",
      role: "Client",
      avatar: "/images/testimonials/sarah-jenkins.jpg",
    },
    relatedProjectIds: ["nova-wallet", "pulse-ui"],
  },
  mannbros: {
    slug: "mannbros",
    title: "Mann Bros",
    scriptTitle: "Leasing",
    heroImage: "/projects/mannbros/hero.png",
    overview: {
      badge: "Overview",
      description:
        "Mann Bros Leasing is an internal management platform designed to manage trailer leasing and related business operations. The system provides different access levels for Super Admin, Admin, Manager, and Staff to handle day-to-day operations efficiently. Netsquare Softwares developed a comprehensive, role-based platform that centralizes operational workflows and fleet tracking.",
      meta: [
        { label: "Client:", value: "Mann Bros Leasing LLC" },
        { label: "Year:", value: "2026" },
        { label: "Category:", value: "Trailer Leasing / Fleet & Operations Management" },
        { label: "Location:", value: "United States" },
      ],
      liveSiteUrl: "https://www.mannbrosleasing.com/",
      liveSiteLabel: "View live site",
    },
    showcaseImage: "/projects/mannbros/showcase.png",
    challenge: {
      badge: "The Challenge",
      description:
        "Mann Bros Leasing needed a centralized system to manage its leasing operations, trailer information, staff activities, and administrative processes. Different user roles also required controlled access to the features and information relevant to their responsibilities.",
      bullets: [
        "Unifying disparate spreadsheets and manual leasing records into one platform",
        "Configuring granular role-based permissions for Super Admin, Admin, Manager, and Staff",
        "Managing trailer lifecycle, leasing terms, security deposits, and payment tracking",
        "Ensuring real-time visibility into revenue, overdue balances, and fleet utilization",
      ],
    },
    solution: {
      badge: "The Solution",
      description:
        "Netsquare Softwares developed a role-based management platform with separate access and permissions for Super Admin, Admin, Manager, and Staff. The system centralizes operational activities and helps the team manage trailer and leasing-related processes through a single, intuitive platform.",
    },
    gallery: [
      "/projects/mannbros/gallery-1.png",
      "/projects/mannbros/gallery-2.png",
      "/projects/mannbros/gallery-3.png",
    ],
    results: {
      badge: "The Result",
      description:
        "The platform provides Mann Bros Leasing with a structured internal system for managing business operations, improving coordination between different teams, and maintaining controlled access across user roles.",
      stats: [
        { count: "4", symbol: "", label: "Role-Based Access Levels" },
        { count: "100", symbol: "%", label: "Centralized Leasing & Trailer Management" },
        { count: "24", symbol: "/7", label: "Secure Admin & Staff Operations" },
      ],
    },
    feedback: {
      badge: "Client feedback",
      quote:
        "Working with Netsquare Softwares was a great experience. The team understood our operational requirements and developed a structured management system that helps our Super Admin, Admin, Managers, and Staff handle their responsibilities efficiently.",
      author: "Mann Bros Leasing Team",
      role: "Client",
      avatar: "/images/testimonials/daniel-rios.jpg",
    },
    relatedProjectIds: ["shopraftaar", "nova-wallet"],
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

