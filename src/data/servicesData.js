import {
  Globe2,
  Smartphone,
  Megaphone,
  Lightbulb,
} from "lucide-react";

export const servicesData = [
  {
    id: "web-development",
    number: "(01)",
    title: "Web Development",
    description:
      "We create modern, responsive and high performing websites that strengthen your online presence, deliver seamless user experiences and help your business grow.",
    features: [
      "Custom website development",
      "Responsive web design",
      "CMS integration",
      "Performance optimization",
      "SEO-friendly development",
    ],
    duration: "3 - 5 weeks",
    image: "/images/services/web-development.png",
    imageAlt:
      "Modern high-performance website design and web development showcase",
    icon: Globe2,
  },

  {
    id: "mobile-development",
    number: "(02)",
    title: "Mobile Development",
    description:
      "We develop innovative and user-friendly mobile applications for Android and iOS, designed to keep your business connected with customers anytime, anywhere.",
    features: [
      "Android & iOS development",
      "Custom mobile app design",
      "API integration",
      "Push notifications",
      "App performance optimization",
    ],
    duration: "4 - 8 weeks",
    image: "/images/services/mobile-development.png",
    imageAlt:
      "Modern mobile application development for Android and iOS platforms",
    icon: Smartphone,
  },

  {
    id: "digital-marketing",
    number: "(03)",
    title: "Digital Marketing",
    description:
      "We help businesses build a strong digital presence through strategic marketing, SEO and engaging campaigns that increase visibility, attract audiences and drive meaningful growth.",
    features: [
      "SEO & content strategy",
      "Social media marketing",
      "Paid advertising",
      "Campaign management",
      "Performance analytics",
    ],
    duration: "4 - 12 weeks",
    image: "/images/services/digital-marketing.png",
    imageAlt:
      "Digital marketing strategy and growth campaign visual",
    icon: Megaphone,
  },

  {
    id: "ui-ux-development",
    number: "(04)",
    title: "UI/UX Development",
    description:
      "We create intuitive interfaces and engaging user experiences that combine visual appeal, functionality and simplicity to make every digital interaction meaningful.",
    features: [
      "UI/UX design",
      "Wireframes & user flows",
      "Interactive prototypes",
      "Design systems",
      "Usability optimization",
    ],
    duration: "2 - 4 weeks",
    image: "/images/services/ui-ux-development.png",
    imageAlt:
      "Modern UI/UX interface design and user experience showcase",
    icon: Lightbulb,
  },
];