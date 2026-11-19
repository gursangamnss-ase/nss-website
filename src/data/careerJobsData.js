export const careerJobsHeader = {
    badge: "Job Openings",
    titleLine1: "Current",
    ampersand: "/images/letterImage.svg",
    titleLine2: "Opportunities",
    yearTag: "Open Positions 2026",
    description:
        "Join our multidisciplinary team of engineers, designers, and innovators building next-generation digital products. We offer high-ownership projects, modern toolchains, and accelerated career progression.",
};

const careerJobsData = [
    {
        id: 1,
        title: "Full Stack Developer",
        category: "Web Development",
        location: "Hybrid",
        type: "Full-time",
        image: "/career/jobs/full-stack.webp",
        icon: "code",
        description:
            "Build scalable web applications across frontend and backend systems while working closely with designers and product teams.",
        responsibilities: [
            "Develop responsive web applications using Next.js and React",
            "Build and maintain robust REST and GraphQL APIs",
            "Work with relational and document databases",
            "Collaborate closely with UI/UX designers and product managers",
        ],
        requirements: [
            "Strong TypeScript and JavaScript fundamentals",
            "Production experience with React, Next.js, and Node.js",
            "Solid understanding of relational databases and ORMs",
            "Experience with modern Git workflows and CI/CD pipelines",
        ],
    },

    {
        id: 2,
        title: "Frontend Developer",
        category: "Web Development",
        location: "On-site",
        type: "Full-time",
        image: "/career/jobs/frontend.webp",
        icon: "desktop",
        description:
            "Create responsive, accessible, and high-performance interfaces using modern frontend technologies.",
        responsibilities: [
            "Build reusable, accessible React and Tailwind CSS components",
            "Convert Figma designs into pixel-perfect, responsive interfaces",
            "Optimize frontend performance and Core Web Vitals",
            "Collaborate with UI/UX designers on micro-interactions and motion",
        ],
        requirements: [
            "Deep proficiency in HTML, CSS, JavaScript, and TypeScript",
            "Hands-on experience with modern React, Tailwind CSS, and Framer Motion",
            "Firm grasp of responsive design, accessibility (WCAG), and browser APIs",
            "Keen eye for layout consistency, micro-animations, and design details",
        ],
    },

    {
        id: 3,
        title: "Backend Developer",
        category: "Web Development",
        location: "Hybrid",
        type: "Full-time",
        image: "/career/jobs/backend.webp",
        icon: "server",
        description:
            "Design reliable backend systems, APIs, databases, and services that power modern digital products.",
        responsibilities: [
            "Design, develop, and maintain high-throughput backend services and APIs",
            "Architect robust data models across PostgreSQL, Redis, and MongoDB",
            "Implement enterprise authentication, rate-limiting, and security protocols",
            "Optimize database queries, indexing, and overall backend latency",
        ],
        requirements: [
            "Strong experience with Node.js, Express, Fastify, or Python/Go",
            "Proficiency with SQL/NoSQL databases and data caching layers",
            "Solid background in API architecture, authentication, and microservices",
            "Strong analytical and systems-level problem solving ability",
        ],
    },

    {
        id: 4,
        title: "AI Engineer",
        category: "Artificial Intelligence",
        location: "On-site",
        type: "Full-time",
        image: "/career/jobs/ai.webp",
        icon: "chip",
        description:
            "Work on intelligent systems and AI-powered solutions that solve practical business and product challenges.",
        responsibilities: [
            "Develop agentic AI workflows and LLM-powered application features",
            "Experiment with state-of-the-art embedding, RAG, and fine-tuning pipelines",
            "Integrate model endpoints into customer-facing production web apps",
            "Monitor evaluation metrics, hallucination rates, and prompt performance",
        ],
        requirements: [
            "Strong Python and modern AI/LLM API integration experience",
            "Working knowledge of vector databases, embeddings, and RAG architectures",
            "Experience deploying production AI systems with latency/cost optimization",
            "Passion for staying on the cutting edge of generative AI and agent frameworks",
        ],
    },

    {
        id: 5,
        title: "UI/UX Designer",
        category: "Digital UI/UX",
        location: "On-site",
        type: "Full-time",
        image: "/career/jobs/uiux.webp",
        icon: "design",
        description:
            "Design intuitive digital experiences that combine usability, visual clarity, and strong product thinking.",
        responsibilities: [
            "Create comprehensive wireframes, user journeys, and high-fidelity prototypes",
            "Design modern web and mobile product interfaces with clean aesthetic rhythm",
            "Maintain and expand scalable design systems and component libraries in Figma",
            "Partner with frontend engineers to ensure design fidelity in production",
        ],
        requirements: [
            "Proven portfolio showcasing web/mobile UI design and structured UX processes",
            "Advanced mastery of Figma, auto-layout, component variants, and interactive prototyping",
            "Solid grasp of usability heuristics, typography, visual hierarchy, and color theory",
            "Strong communication skills and empathy for both users and engineering constraints",
        ],
    },

    {
        id: 6,
        title: "Mobile App Developer",
        category: "Mobile Engineering",
        location: "Hybrid",
        type: "Full-time",
        image: "/career/jobs/mobile-app.webp",
        icon: "mobile",
        description:
            "Build cross-platform iOS and Android applications with native-quality performance, fluid gestures, and modern UI.",
        responsibilities: [
            "Develop cross-platform mobile apps using React Native or Flutter",
            "Implement native device integrations, push notifications, and offline caching",
            "Collaborate with backend engineers to consume REST and WebSocket APIs",
            "Deploy, manage, and optimize builds across Apple App Store and Google Play",
        ],
        requirements: [
            "Demonstrated experience building and shipping React Native / Flutter apps",
            "Familiarity with iOS/Android platform guidelines and App Store submission workflows",
            "Solid understanding of mobile state management and offline-first data synchronization",
            "Strong attention to 60fps animations, touch feedback, and device responsiveness",
        ],
    },

    {
        id: 7,
        title: "DevOps & Cloud Engineer",
        category: "Cloud Infrastructure",
        location: "Remote",
        type: "Full-time",
        image: "/career/jobs/devops.webp",
        icon: "cloud",
        description:
            "Architect resilient cloud infrastructure, automated CI/CD pipelines, and observability frameworks for web apps.",
        responsibilities: [
            "Manage containerized workloads using Docker, Kubernetes, and serverless runtimes",
            "Build automated GitHub Actions CI/CD deployment pipelines",
            "Configure cloud infrastructure on AWS, Google Cloud, and Vercel with Terraform",
            "Implement logging, monitoring, and proactive alerting with Datadog/Prometheus",
        ],
        requirements: [
            "Hands-on experience with AWS / GCP cloud ecosystems and Docker containerization",
            "Proficiency in CI/CD automation, shell scripting, and infrastructure-as-code",
            "Knowledge of cloud security, DNS management, and edge caching (Cloudflare)",
            "Strong focus on system uptime, reliability engineering, and zero-downtime deploys",
        ],
    },

    {
        id: 8,
        title: "QA Automation Engineer",
        category: "Quality Assurance",
        location: "On-site",
        type: "Full-time",
        image: "/career/jobs/qa-automation.webp",
        icon: "check",
        description:
            "Ensure software stability, performance, and bug-free releases through automated testing suites and quality controls.",
        responsibilities: [
            "Author end-to-end and integration automated test suites with Playwright/Cypress",
            "Establish continuous automated testing within GitHub Actions deployment cycles",
            "Conduct exploratory, cross-browser, and regression testing on client platforms",
            "Work closely with developers to reproduce, triage, and verify bug resolutions",
        ],
        requirements: [
            "Experience developing automated test suites for modern web applications",
            "Familiarity with testing frameworks such as Playwright, Cypress, or Jest",
            "Understanding of test-driven methodologies, API testing, and performance profiling",
            "Disciplined attention to detail and passion for bulletproof product quality",
        ],
    },
];

export default careerJobsData;
