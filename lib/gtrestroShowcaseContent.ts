export const STARTUP_EXPERIENCE_CASE_STUDY_HREF = "#gtrestro-case-study";

export const startupExperienceContent = {
  sectionId: "experience",
  eyebrow: "1 YEAR OF BUILDING",
  heading: ["Building", "Better", "Every Day."],
  supportingLine: "Ideas. Code. Systems. Impact.",
  developerIllustration: {
    image: "/assets/startup-experience/startup-developer-illustration.webp",
    fallback: "/assets/startup-experience/startup-developer-illustration.png",
    width: 2200,
    height: 1845,
    alt: "Illustration of a developer building software at a laptop",
  },
  coreContribution: {
    eyebrow: "CORE CONTRIBUTION",
    items: [
      {
        title: "Full-stack feature delivery",
        description:
          "Built production features across frontend, backend and shared workflows.",
        icon: "Code2",
      },
      {
        title: "Shared platform architecture",
        description:
          "Worked across cloud web, Electron desktop and shared backend services.",
        icon: "Layers3",
      },
      {
        title: "System thinking for operations",
        description:
          "Designed around restaurant workflows, reliability and day-to-day use.",
        icon: "Settings2",
      },
    ],
  },
  featuredProject: {
    eyebrow: "FEATURED PROJECT",
    title: "GT RESTRO",
    subtitle: "Restaurant SaaS / POS Platform",
    image: "/assets/startup-experience/gtrestro-dashboard-preview.webp",
    fallback: "/assets/startup-experience/gtrestro-dashboard-preview.png",
    imageAlt: "GT Restro restaurant SaaS dashboard",
    width: 2400,
    height: 1124,
    href: STARTUP_EXPERIENCE_CASE_STUDY_HREF,
    targetId: "gtrestro-case-study",
    linkLabel: "View the GT Restro case study",
  },
  focus: {
    eyebrow: "WHAT I FOCUSED ON",
    items: [
      "Offline-first data synchronisation",
      "Reliable payment webhook processing",
      "Real-time multi-device coordination",
      "Cross-device printing workflows",
      "Shared backend across multiple platforms",
      "Cloud media and CDN optimisation",
    ],
    illustration: "/assets/startup-experience/focus-target-illustration.webp",
    fallback: "/assets/startup-experience/focus-target-illustration.png",
    width: 1400,
    height: 1551,
    alt: "Target illustration representing focused product execution",
  },
  impact: {
    eyebrow: "IMPACT",
    items: [
      {
        title: "Web, Desktop & Mobile",
        description:
          "A shared product experience delivered across cloud, Electron and mobile clients.",
        icon: "MonitorSmartphone",
      },
      {
        title: "Real-time Coordination",
        description:
          "Live operational updates across orders, kitchen workflows and connected devices.",
        icon: "Zap",
      },
      {
        title: "Built for Restaurant Operations",
        description:
          "Production workflows designed around real teams and daily operational use.",
        icon: "Store",
      },
    ],
  },
  technologies: [
    "React",
    "Node.js",
    "MySQL",
    "Socket.IO",
    "Redis",
    "Docker",
    "Electron",
  ],
} as const;

export type StartupContributionIcon =
  (typeof startupExperienceContent.coreContribution.items)[number]["icon"];

export type StartupImpactIcon =
  (typeof startupExperienceContent.impact.items)[number]["icon"];

export type StartupTechnology =
  (typeof startupExperienceContent.technologies)[number];
