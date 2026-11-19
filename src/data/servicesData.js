import {
  Globe2,
  Smartphone,
  Megaphone,
  Lightbulb,
  Bot,
  LayoutGrid,
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
    ],
    duration: "3 - 5 weeks",
    image: "/images/services/web-development.webp",
    imageAlt:
      "Modern high-performance website design and web development showcase",
    icon: Globe2,
  },

  {
    id: "mobile-development",
    number: "(02)",
    title: "Mobile App Development",
    description:
      "We develop innovative and user-friendly mobile applications for Android and iOS, designed to keep your business connected with customers anytime, anywhere.",
    features: [
      "Android & iOS development",
      "Custom mobile app design",
      "API integration",
      "Push notifications",
    ],
    duration: "4 - 8 weeks",
    image: "/images/services/mobile-development.webp",
    imageAlt:
      "Modern mobile application development for Android and iOS platforms",
    icon: Smartphone,
  },

  {
    id: "ai-development",
    number: "(03)",
    title: "AI Development",
    description:
      "We build intelligent AI solutions, LLM integrations and custom machine learning models that automate workflows, drive actionable insights and transform digital interactions.",
    features: [
      "Custom LLM & AI agent development",
      "Intelligent workflow automation",
      "Predictive analytics & ML models",
      "Conversational AI & smart chatbots",
    ],
    duration: "4 - 8 weeks",
    image: "/images/services/ai.png",
    imageAlt:
      "Modern artificial intelligence and machine learning solution showcase",
    icon: Bot,
  },

  {
    id: "digital-marketing",
    number: "(04)",
    title: "Digital Marketing",
    description:
      "We help businesses build a strong digital presence through strategic marketing, SEO and engaging campaigns that increase visibility, attract audiences and drive meaningful growth.",
    features: [
      "SEO & content strategy",
      "Social media marketing",
      "Paid advertising",
      "Campaign management",
    ],
    duration: "4 - 12 weeks",
    image: "/images/services/Digital-marketing.png",
    imageAlt:
      "Digital marketing strategy and growth campaign visual",
    icon: Megaphone,
  },

  {
    id: "ui-ux-development",
    number: "(05)",
    title: "UI/UX Development",
    description:
      "We create intuitive interfaces and engaging user experiences that combine visual appeal, functionality and simplicity to make every digital interaction meaningful.",
    features: [
      "UI/UX design",
      "Wireframes & user flows",
      "Interactive prototypes",
      "Design systems",
    ],
    duration: "2 - 4 weeks",
    image: "/images/services/uiux.png",
    imageAlt:
      "Modern UI/UX interface design and user experience showcase",
    icon: Lightbulb,
  },

  {
    id: "cms-framework",
    number: "(06)",
    title: "CMS Framework",
    description:
      "We engineer scalable headless CMS platforms and modular content architectures that empower teams to publish effortlessly, manage assets and deliver high-speed web experiences.",
    features: [
      "Headless CMS development",
      "Custom CMS integrations & migrations",
      "Structured content modeling",
      "Multi-platform API publishing",
    ],
    duration: "3 - 6 weeks",
    image: "/images/services/CMS.png",
    imageAlt:
      "Modern headless CMS framework and content management dashboard showcase",
    icon: LayoutGrid,
  },
];
