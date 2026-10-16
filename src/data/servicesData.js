import { PenTool, Code2, LayoutGrid, Megaphone } from "lucide-react";

export const servicesData = [
  {
    id: "brand-identity",
    number: "(01)",
    title: "Brand identity design",
    description:
      "We craft distinctive brand identities that speak louder than words. We design bold brand identities that capture your mission and connect across every touchpoint.",
    features: [
      "Logo design",
      "Typography",
      "Color palette",
      "Brand guidelines",
      "Visual language",
    ],
    duration: "2 - 4 weeks",
    image: "/images/services/brand-identity.jpg",
    imageAlt: "Cosmetics brand identity bottle packaging mockup",
    icon: PenTool,
  },
  {
    id: "framer-development",
    number: "(02)",
    title: "Framer development",
    description:
      "We build clean, fast, and responsive Framer websites — designed to look great and perform flawlessly from launch.",
    features: [
      "Custom web design",
      "CMS integration",
      "Animations & Interactions",
      "Responsive Layouts",
      "SEO setup",
    ],
    duration: "3 - 5 weeks",
    image: "/images/services/framer-development.jpg",
    imageAlt: "Framer development design canvas and responsive layout preview",
    icon: Code2,
  },
  {
    id: "ui-ux-strategy",
    number: "(03)",
    title: "UI/UX strategy",
    description:
      "We design intuitive, functional interfaces that deliver seamless and engaging user experiences.",
    features: [
      "Wireframes",
      "User journey mapping",
      "Mobile optimization",
      "Interactive prototypes",
      "Usability testing",
    ],
    duration: "2.5 - 3 weeks",
    image: "/images/services/ui-ux-strategy.jpg",
    imageAlt: "Modern digital interface product mockup",
    icon: LayoutGrid,
  },
  {
    id: "creative-campaigns",
    number: "(04)",
    title: "Creative campaigns",
    description:
      "We bring bold ideas to life with creative campaigns that capture attention, drive engagement, and deliver results.",
    features: [
      "Campaign strategy",
      "Copy & Visuals",
      "Ad creatives",
      "Social media assets",
      "Performance optimization",
    ],
    duration: "1 - 2 weeks",
    image: "/images/services/creative-campaigns.jpg",
    imageAlt: "Creative campaigns marketing and brand showcase",
    icon: Megaphone,
  },
];
