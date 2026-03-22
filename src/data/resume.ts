import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Code2,
  Layout,
  Database,
  Server,
  Terminal,
  Cpu,
  GitMerge,
  Users,
} from 'lucide-react';

export const resumeData = {
  personal: {
    name: "Zak Ream",
    title: "Senior Software Engineer — React & Full-Stack Systems",
    location: "Wilmington, DE (Greater Philadelphia Area)",
    contact: {
      phone: "724 549 9905",
      email: "zream720@gmail.com",
      linkedin: "https://linkedin.com/in/ream720/",
      github: "https://github.com/ream720"
    },
    summary: "I build across systems — connecting UI, APIs, and real-world problems into working software. From frontend architecture to AI-assisted workflows, I focus on shipping complete, scalable solutions."
  },
  skills: [
    {
      category: "Frontend",
      icon: Layout,
      items: ["React", "TypeScript", "JavaScript (ES6+)", "React Router"]
    },
    {
      category: "State Management",
      icon: Database,
      items: ["Zustand", "TanStack Query", "Redux patterns"]
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Java (Spring Boot)", "REST APIs", "Node.js", "ASP.NET / MVC exposure"]
    },
    {
      category: "Data",
      icon: GitMerge,
      items: ["Oracle SQL", "MongoDB", "Relational schema design", "Data querying"]
    },
    {
      category: "Architecture",
      icon: Cpu,
      items: ["Nx monorepos", "Modular frontend design", "Shared packages", "MFE architecture", "API contract design"]
    },
    {
      category: "UI & Styling",
      icon: Code2,
      items: ["Tailwind CSS", "Theming systems", "Component libraries", "CVA", "Material UI"]
    },
    {
      category: "Testing",
      icon: Terminal,
      items: ["Vitest", "React Testing Library", "Cypress", "Playwright", "JUnit"]
    },
    {
      category: "DevOps & Delivery",
      icon: Cpu,
      items: ["CI/CD pipelines (Jenkins)", "Docker", "Kubernetes", "AWS", "GCP"]
    },
    {
      category: "Process",
      icon: Users,
      items: ["Agile/Scrum", "Estimation", "Cross-functional collaboration", "Code reviews"]
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "TA Instruments (Waters Corporation)",
      location: "Wilmington, DE - Hybrid",
      period: "2025 – Present",
      description: "Core contributor on a 3-person UI team building a NextGen SaaS platform using React and TypeScript within an Nx monorepo.",
      achievements: [
        "Own end-to-end delivery of complex features — from problem definition and system design through implementation, testing, and production deployment",
        "Design and scale shared UI systems and component libraries used across multiple applications",
        "Build high-performance, data-driven user interfaces, including real-time visualization workflows for complex domain-specific problems",
        "Define API contracts and collaborate closely with backend engineers to support complex, cross-system product workflows",
        "Designed and implemented AI-assisted development workflows, improving feature delivery speed by ~30–50%",
        "Built structured workspace context systems and agent-driven tooling for code generation, debugging, and cross-layer system analysis",
        "Established engineering standards (linting, formatting, pre-push validation) to improve code quality and reduce regressions",
        "Drive frontend architecture decisions and establish best practices across the platform"
      ]
    },
    {
      role: "Software Engineer II",
      company: "JP Morgan Chase & Co.",
      location: "Wilmington, DE - Hybrid",
      period: "2022 – 2024",
      description: "Delivered customer-facing React and Angular applications integrated with enterprise Java-based backend services.",
      achievements: [
        "Played a key role in frontend modernization (Angular → React) within a microservices architecture",
        "Defined API contracts and data flows across distributed services",
        "Built reusable, accessible component systems to improve development speed and UI consistency",
        "Improved CI/CD reliability and testing stability to support consistent production delivery"
      ]
    },
    {
      role: "Software Engineer",
      company: "PNC",
      location: "Pittsburgh, PA / Tampa, FL - Remote",
      period: "2019 – 2022",
      description: "Delivered full-stack banking features across Angular frontends and Spring Boot microservices backed by MongoDB.",
      achievements: [
        "Developed micro-applications for high-net-worth customers within a microservices architecture",
        "Maintained 85%+ unit test coverage under strict quality gates",
        "Built foundational experience across frontend, backend, and data layers in production systems"
      ]
    }
  ],
  education: {
    degree: "Bachelor of Science, Computer Science – Software Engineering",
    school: "Indiana University of Pennsylvania"
  }
};
