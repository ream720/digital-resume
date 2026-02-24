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
  Cpu 
} from 'lucide-react';

export const resumeData = {
  personal: {
    name: "Zak Ream",
    title: "Senior Frontend Engineer",
    location: "Wilmington, DE (Greater Philadelphia Area)",
    contact: {
      phone: "724 549 9905",
      email: "zream720@gmail.com",
      linkedin: "https://linkedin.com/in/ream720/",
      github: "https://github.com/ream720"
    },
    summary: "Senior Frontend Engineer with 7 years of experience building production React and TypeScript applications across fintech and SaaS platforms. Experienced designing scalable frontend architectures, reusable component systems, and performant data-driven interfaces. Comfortable operating in both structured enterprise environments and fast-moving product teams, with strong ownership of feature delivery, code quality, and engineering standards."
  },
  skills: [
    {
      category: "Frontend",
      icon: Layout,
      items: ["React", "TypeScript", "JavaScript ES6", "React Router"]
    },
    {
      category: "State Management",
      icon: Database,
      items: ["Zustand", "TanStack Query", "Redux patterns"]
    },
    {
      category: "UI & Styling",
      icon: Code2,
      items: ["Tailwind CSS", "Theming systems", "Component libraries", "CVA", "Material UI"]
    },
    {
      category: "Architecture",
      icon: Server,
      items: ["Nx monorepos", "Modular frontend design", "Shared packages", "MFE architecture"]
    },
    {
      category: "Testing",
      icon: Terminal,
      items: ["Vitest", "React Testing Library", "Playwright", "Cypress", "JUnit", "Snapshot & Contract testing"]
    },
    {
      category: "DevOps & Backend",
      icon: Cpu,
      items: ["CI/CD pipelines", "Docker", "Kubernetes", "AWS", "Node.js", "Spring Boot", "GraphQL"]
    }
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "TA Instruments (Waters Corporation)",
      location: "Wilmington, DE - Hybrid",
      period: "2025 – Present",
      description: "Core frontend contributor on a 3-person UI team building NextGen scientific SaaS platform using React and TypeScript within an Nx monorepo architecture.",
      achievements: [
        "Design and maintain scalable UI systems and shared component libraries consumed across multiple applications",
        "Develop high-performance real-time data visualizations using D3 and WebGL (Pixi.js)",
        "Build and evolve server-state (TanStack Query) and client state (Zustand) solutions to support complex domain workflows",
        "Contribute to architectural discussions and frontend best practices across the team",
        "Established unified linting/formatting standards and implemented pre-push validation to reduce regressions",
        "Spearheaded adoption of AI-assisted development tooling to improve engineering efficiency",
        "Own full lifecycle of features from cross-functional planning through implementation, testing, and deployment"
      ]
    },
    {
      role: "Software Engineer II",
      company: "JP Morgan Chase & Co.",
      location: "Wilmington, DE - Hybrid",
      period: "2022 – 2024",
      description: "Delivered React and Angular applications supporting enterprise-scale financial platforms.",
      achievements: [
        "Contributed to frontend modernization initiatives and modular architecture improvements",
        "Built reusable, accessible component systems aligned with design standards",
        "Implemented automated testing and CI/CD improvements",
        "Collaborated with backend teams on REST and GraphQL integrations"
      ]
    },
    {
      role: "Software Engineer",
      company: "PNC",
      location: "Pittsburgh, PA / Tampa, FL - Remote",
      period: "2019 – 2022",
      description: "Developed full-stack banking micro-application for high-net-worth customers.",
      achievements: [
        "Built Angular frontends integrated with Spring Boot microservices",
        "Maintained 85% unit test coverage under strict quality gates",
        "Contributed to MongoDB schema design and production release coordination"
      ]
    }
  ],
  education: {
    degree: "Bachelor of Science, Computer Science – Software Engineering",
    school: "Indiana University of Pennsylvania"
  }
};
