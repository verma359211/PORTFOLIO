import Image from "next/image";
import {
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  ChefHat,
  Package,
  QrCode,
  Rocket,
  ShoppingCart,
  TrendingUp,
  UserRound,
  Users,
  Utensils,
} from "lucide-react";
import {
  SiExpress,
  SiMysql,
  SiNodedotjs,
  SiPwa,
  SiReact,
  SiSocketdotio,
} from "react-icons/si";
import styles from "./experienceShowcaseSection.module.css";

const EXPERIENCE_CONTENT = {
  sectionId: "experience",
  heading: "First year building GT Restro product experience",
  caseStudyHref: "#gtrestro-case-study",
  assets: {
    logo: {
      src: "/assets/experience/gtrestro-original-logo.webp",
      width: 1200,
      height: 1258,
      alt: "GT Restro original fork and leaf logo",
    },
    journeyTeam: {
      src: "/assets/experience/journey-team-illustration.webp",
      width: 2200,
      height: 1444,
    },
    handshake: {
      src: "/assets/experience/focus-handshake-illustration.webp",
      width: 1800,
      height: 1342,
    },
    puzzleHand: {
      src: "/assets/experience/timeline-puzzle-hand.webp",
      width: 1200,
      height: 812,
    },
    contributionTeam: {
      src: "/assets/experience/contribution-team-illustration.webp",
      width: 1900,
      height: 1273,
    },
    reflectionAvatar: {
      src: "/assets/experience/developer-reflection-avatar.webp",
      width: 900,
      height: 900,
      alt: "Developer reflection avatar",
    },
    dashboardLaptop: {
      src: "/assets/experience/gtrestro-dashboard-laptop.webp",
      width: 1900,
      height: 1110,
      alt: "GT Restro dashboard shown on a laptop",
    },
  },
  journey: {
    eyebrow: "1 YEAR JOURNEY",
    headingStart: "1 year. Real learning.",
    headingMiddle: "Building",
    headingAccent: "GT Restro.",
    description:
      "From idea to impact — I spent my first year building a real restaurant SaaS product and sharpening my full stack skills.",
  },
  focus: {
    eyebrow: "PORTFOLIO FOCUS",
    lines: [
      "Build real products.",
      "Solve real problems.",
      "Showcase real skills.",
    ],
  },
  timeline: {
    eyebrow: "TIMELINE",
    startLabel: "MAR 2024",
    endLabel: "PRESENT",
    duration: "12",
    durationCopy: ["Months", "of Building"],
    footer: "Learn. Build. Iterate. Ship.",
  },
  project: {
    eyebrow: "FEATURED PROJECT",
    title: "GT Restro",
    subtitle: "Restaurant SaaS / POS Platform",
    description:
      "A full stack platform I helped build for restaurant operations, billing, kitchen workflow, inventory, QR ordering, analytics and more.",
    modules: [
      "POS",
      "Inventory",
      "Kitchen",
      "Orders",
      "QR Ordering",
      "Analytics",
      "Staff",
      "More",
    ],
  },
  contribution: {
    eyebrow: "MY CONTRIBUTION",
    heading: ["What this project", "says about my skills"],
    statements: [
      "Built and shipped real product features",
      "Improved full stack problem solving",
      "Designed reusable systems and data flows",
      "Developed product thinking and ownership",
    ],
  },
  techStack: {
    eyebrow: "TECH STACK",
    technologies: ["React", "Node.js", "Express", "MySQL", "Socket.IO", "PWA"],
  },
  reflection: {
    eyebrow: "WHAT I GAINED",
    text: "This first year taught me how to build for real users, think in systems, and ship features that matter.",
  },
  nextStep: {
    eyebrow: "NEXT STEP",
    copy: "Continuing to build stronger products and grow as a full stack developer.",
    cta: "View Case Study",
  },
  stats: {
    statement: "Learning. Building. Shipping.",
    support: "Turning first-year experience into stronger products.",
    metrics: [
      { value: "1", label: "Year of Building" },
      { value: "10+", label: "Core Modules" },
      { value: "Real", label: "Product Experience" },
      { value: "Growing", label: "Every Day" },
    ],
  },
};

const moduleIcons = [
  Package,
  Boxes,
  ChefHat,
  ShoppingCart,
  QrCode,
  BarChart3,
  UserRound,
  Utensils,
];

const contributionIcons = [BarChart3, Package, Boxes, UserRound];
const statIcons = [Users, Rocket, BriefcaseBusiness, TrendingUp];

const techIcons = [
  { icon: SiReact, className: styles.techReact },
  { icon: SiNodedotjs, className: styles.techNode },
  { icon: SiExpress, className: styles.techExpress },
  { icon: SiMysql, className: styles.techMysql },
  { icon: SiSocketdotio, className: styles.techSocket },
  { icon: SiPwa, className: styles.techPwa },
];

const Eyebrow = ({ children }: { children: string }) => (
  <p className={styles.eyebrow}>
    <span aria-hidden="true" />
    {children}
  </p>
);

const ExperienceShowcaseSection = () => {
  const { assets } = EXPERIENCE_CONTENT;

  return (
    <section
      id={EXPERIENCE_CONTENT.sectionId}
      className={styles.experienceSection}
      aria-labelledby="experience-showcase-heading"
    >
      <div className={styles.inner}>
        <h2
          id="experience-showcase-heading"
          className={styles.screenReaderOnly}
        >
          {EXPERIENCE_CONTENT.heading}
        </h2>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.journeyCard}`}>
            <div className={styles.journeyCopy}>
              <Eyebrow>{EXPERIENCE_CONTENT.journey.eyebrow}</Eyebrow>
              <h3 className={styles.journeyHeading}>
                {EXPERIENCE_CONTENT.journey.headingStart}
                <br />
                {EXPERIENCE_CONTENT.journey.headingMiddle}{" "}
                <span>{EXPERIENCE_CONTENT.journey.headingAccent}</span>
              </h3>
              <p className={styles.journeyDescription}>
                {EXPERIENCE_CONTENT.journey.description}
              </p>
            </div>
            <div className={styles.journeyImageWrap} aria-hidden="true">
              <Image
                src={assets.journeyTeam.src}
                width={assets.journeyTeam.width}
                height={assets.journeyTeam.height}
                alt=""
                sizes="(min-width: 1180px) 42vw, (min-width: 700px) 44vw, 90vw"
                className={styles.illustrationImage}
              />
            </div>
          </article>

          <article
            className={`${styles.card} ${styles.darkCard} ${styles.focusCard}`}
          >
            <Eyebrow>{EXPERIENCE_CONTENT.focus.eyebrow}</Eyebrow>
            <p className={styles.focusText}>
              {EXPERIENCE_CONTENT.focus.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <Image
              src={assets.handshake.src}
              width={assets.handshake.width}
              height={assets.handshake.height}
              alt=""
              sizes="(min-width: 1180px) 28vw, (min-width: 700px) 58vw, 88vw"
              className={styles.focusImage}
              aria-hidden="true"
            />
            <span className={styles.focusLine} aria-hidden="true" />
          </article>

          <article className={`${styles.card} ${styles.timelineCard}`}>
            <Eyebrow>{EXPERIENCE_CONTENT.timeline.eyebrow}</Eyebrow>
            <div className={styles.timelinePanel}>
              <div className={styles.timelineDates}>
                <span>{EXPERIENCE_CONTENT.timeline.startLabel}</span>
                <span aria-hidden="true" />
                <span>{EXPERIENCE_CONTENT.timeline.endLabel}</span>
              </div>
              <div className={styles.timelineBody}>
                <p className={styles.duration}>
                  <span>{EXPERIENCE_CONTENT.timeline.duration}</span>
                  <span>
                    {EXPERIENCE_CONTENT.timeline.durationCopy.map((line) => (
                      <em key={line}>{line}</em>
                    ))}
                  </span>
                </p>
                <Image
                  src={assets.puzzleHand.src}
                  width={assets.puzzleHand.width}
                  height={assets.puzzleHand.height}
                  alt=""
                  sizes="(min-width: 1180px) 15vw, (min-width: 700px) 22vw, 46vw"
                  className={styles.timelineImage}
                  aria-hidden="true"
                />
              </div>
              <p className={styles.timelineFooter}>
                {EXPERIENCE_CONTENT.timeline.footer}
              </p>
            </div>
          </article>

          <article className={`${styles.card} ${styles.projectCard}`}>
            <Eyebrow>{EXPERIENCE_CONTENT.project.eyebrow}</Eyebrow>
            <div className={styles.projectHeader}>
              <Image
                src={assets.logo.src}
                width={assets.logo.width}
                height={assets.logo.height}
                alt={assets.logo.alt}
                sizes="90px"
                className={styles.projectLogo}
              />
              <div>
                <h3>{EXPERIENCE_CONTENT.project.title}</h3>
                <p>{EXPERIENCE_CONTENT.project.subtitle}</p>
              </div>
            </div>
            <p className={styles.projectDescription}>
              {EXPERIENCE_CONTENT.project.description}
            </p>
            <div className={styles.moduleGrid} aria-label="GT Restro modules">
              {EXPERIENCE_CONTENT.project.modules.map((module, index) => {
                const Icon = moduleIcons[index];

                return (
                  <span className={styles.modulePill} key={module}>
                    <Icon aria-hidden="true" strokeWidth={1.9} />
                    {module}
                  </span>
                );
              })}
            </div>
          </article>

          <article className={`${styles.card} ${styles.contributionCard}`}>
            <Eyebrow>{EXPERIENCE_CONTENT.contribution.eyebrow}</Eyebrow>
            <h3>
              {EXPERIENCE_CONTENT.contribution.heading.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
            <ul className={styles.contributionList}>
              {EXPERIENCE_CONTENT.contribution.statements.map(
                (statement, index) => {
                  const Icon = contributionIcons[index];

                  return (
                    <li key={statement}>
                      <Icon aria-hidden="true" strokeWidth={1.8} />
                      {statement}
                    </li>
                  );
                },
              )}
            </ul>
            <Image
              src={assets.contributionTeam.src}
              width={assets.contributionTeam.width}
              height={assets.contributionTeam.height}
              alt=""
              sizes="(min-width: 1180px) 22vw, (min-width: 700px) 46vw, 86vw"
              className={styles.contributionImage}
              aria-hidden="true"
            />
          </article>

          <article className={`${styles.card} ${styles.techCard}`}>
            <Eyebrow>{EXPERIENCE_CONTENT.techStack.eyebrow}</Eyebrow>
            <div className={styles.techGrid} aria-label="Technology stack used">
              {EXPERIENCE_CONTENT.techStack.technologies.map((tech, index) => {
                const Icon = techIcons[index].icon;

                return (
                  <div className={styles.techItem} key={tech}>
                    <Icon
                      aria-hidden="true"
                      className={`${styles.techIcon} ${techIcons[index].className}`}
                    />
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </article>

          <article
            className={`${styles.card} ${styles.darkCard} ${styles.reflectionCard}`}
          >
            <Eyebrow>{EXPERIENCE_CONTENT.reflection.eyebrow}</Eyebrow>
            <div className={styles.reflectionBody}>
              <Image
                src={assets.reflectionAvatar.src}
                width={assets.reflectionAvatar.width}
                height={assets.reflectionAvatar.height}
                alt={assets.reflectionAvatar.alt}
                sizes="92px"
                className={styles.avatarImage}
              />
              <blockquote>
                <span aria-hidden="true">“</span>
                {EXPERIENCE_CONTENT.reflection.text}
              </blockquote>
            </div>
            <div className={styles.reflectionDots} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </article>

          <article
            id="gtrestro-case-study"
            className={`${styles.card} ${styles.nextStepCard}`}
          >
            <div className={styles.nextStepCopy}>
              <Eyebrow>{EXPERIENCE_CONTENT.nextStep.eyebrow}</Eyebrow>
              <p>{EXPERIENCE_CONTENT.nextStep.copy}</p>
              <a
                href={EXPERIENCE_CONTENT.caseStudyHref}
                className={styles.caseStudyLink}
                aria-label="View GT Restro case study"
              >
                {EXPERIENCE_CONTENT.nextStep.cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <Image
              src={assets.dashboardLaptop.src}
              width={assets.dashboardLaptop.width}
              height={assets.dashboardLaptop.height}
              alt={assets.dashboardLaptop.alt}
              sizes="(min-width: 1180px) 22vw, (min-width: 700px) 52vw, 88vw"
              className={styles.laptopImage}
            />
          </article>

          <aside
            className={styles.statsStrip}
            aria-label="Experience highlights"
          >
            <Rocket
              aria-hidden="true"
              className={styles.statsRocket}
              strokeWidth={1.7}
            />
            <div className={styles.statsIntro}>
              <p>{EXPERIENCE_CONTENT.stats.statement}</p>
              <span>{EXPERIENCE_CONTENT.stats.support}</span>
            </div>
            <div className={styles.statsGrid}>
              {EXPERIENCE_CONTENT.stats.metrics.map((metric, index) => {
                const Icon = statIcons[index];

                return (
                  <div className={styles.statItem} key={metric.label}>
                    <Icon aria-hidden="true" strokeWidth={1.8} />
                    <p>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </p>
                  </div>
                );
              })}
            </div>
            <span className={styles.morePill}>More coming soon</span>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcaseSection;
