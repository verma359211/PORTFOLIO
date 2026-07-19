import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  DatabaseZap,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFramer,
  SiGithub,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  portfolioProjects,
  projectsClosingLinks,
  type PortfolioProject,
} from "../lib/projectsShowcaseData";
import styles from "./projectsShowcaseSection.module.css";

type TechIconComponent = IconType | LucideIcon;

const TECH_ICONS: Record<string, TechIconComponent> = {
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Stripe: SiStripe,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  "GitHub API": SiGithub,
  "Express.js": SiExpress,
  "Socket.IO": SiSocketdotio,
  Python: SiPython,
  LangChain: SiLangchain,
  FAISS: DatabaseZap,
  OpenAI: SiOpenai,
  FastAPI: SiFastapi,
};

const ProjectsShowcaseSection = () => {
  return (
    <section
      id="projects"
      className={styles.projectsSection}
      aria-labelledby="projects-heading"
    >
      <div className={styles.inner}>
        <ProjectsIntro />

        <div className={styles.cardsGrid}>
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          <ProjectsClosingCard />
        </div>
      </div>
    </section>
  );
};

const ProjectsIntro = () => (
  <div className={styles.introGrid}>
    <div className={styles.introCopy}>
      <div className={styles.labelRow}>
        <p className={styles.sectionLabel}>PROJECTS</p>
        <span className={styles.dotRail} aria-hidden="true" />
      </div>

      <h2 id="projects-heading" className={styles.heading}>
        <span>THINGS I BUILD</span>
        <span>
          SOLVE <mark>REAL</mark> PROBLEMS.
        </span>
      </h2>

      <p className={styles.supportingText}>
        A collection of projects where I turn ideas into useful, scalable and
        impactful solutions.
      </p>
    </div>

    <div className={styles.decoration} aria-hidden="true">
      <span className={styles.purpleSquare} />
      <span className={styles.limeSquare}>
        <span />
      </span>
      <span className={styles.dotPattern} />
      <span className={styles.lineMarkOne} />
      <span className={styles.lineMarkTwo} />
      <span className={styles.lineMarkThree} />
    </div>
  </div>
);

const ProjectCard = ({ project }: { project: PortfolioProject }) => (
  <article
    className={styles.projectCard}
    aria-labelledby={`${project.id}-title`}
  >
    <ProjectPreview project={project} />
    <ProjectDetails project={project} />
  </article>
);

const ProjectPreview = ({ project }: { project: PortfolioProject }) => (
  <div
    className={`${styles.projectPreview} ${
      styles[`accent${capitalize(project.accent)}`]
    }`}
  >
    <span className={styles.projectNumber}>{project.number}</span>
    <Image
      src={project.image}
      alt={project.imageAlt}
      width={1600}
      height={1000}
      sizes="(min-width: 1280px) 25vw, (min-width: 700px) 44vw, calc(100vw - 40px)"
      className={`${styles.previewImage} ${
        project.imageFit === "contain" ? styles.fitContain : styles.fitCover
      }`}
    />
  </div>
);

const ProjectDetails = ({ project }: { project: PortfolioProject }) => (
  <div className={styles.projectDetails}>
    <p className={styles.detailNumber}>PROJECT {project.number}</p>
    <h3 id={`${project.id}-title`} className={styles.projectTitle}>
      {project.title}
    </h3>
    <p className={styles.projectType}>{project.type}</p>
    <p className={styles.projectDescription}>{project.description}</p>

    <ProjectActions project={project} />

    <div className={styles.techBlock}>
      <p className={styles.techLabel}>TECH STACK</p>
      <div
        className={styles.techGrid}
        aria-label={`${project.title} tech stack`}
      >
        {project.technologies.map((technology) => (
          <TechBadge key={technology} name={technology} />
        ))}
      </div>
    </div>
  </div>
);

const ProjectActions = ({ project }: { project: PortfolioProject }) => {
  const actions = [
    {
      key: "github",
      href: project.githubUrl,
      label: "GitHub",
      ariaLabel: `View ${project.title} source code on GitHub`,
      Icon: Code2,
    },
    {
      key: "live",
      href: project.liveUrl,
      label: project.liveLabel,
      ariaLabel: `${project.liveLabel} for ${project.title}`,
      Icon: ExternalLink,
    },
  ];

  return (
    <div className={styles.actions}>
      {actions.map(({ key, href, label, ariaLabel, Icon }) =>
        href ? (
          <a
            key={key}
            href={href}
            className={styles.actionButton}
            aria-label={ariaLabel}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon aria-hidden="true" strokeWidth={2.4} />
            {label}
          </a>
        ) : (
          <span
            key={key}
            className={`${styles.actionButton} ${styles.disabledAction}`}
            aria-disabled="true"
            title={`${label} URL not configured yet`}
          >
            <Icon aria-hidden="true" strokeWidth={2.4} />
            {label}
          </span>
        ),
      )}
    </div>
  );
};

const TechBadge = ({ name }: { name: string }) => {
  const Icon = TECH_ICONS[name] ?? Code2;

  return (
    <span className={styles.techBadge} aria-label={name} title={name}>
      <Icon className={styles.techIcon} aria-hidden="true" />
      <span className={styles.techName}>{name}</span>
    </span>
  );
};

const ProjectsClosingCard = () => (
  <aside
    className={styles.closingCard}
    aria-labelledby="projects-closing-title"
  >
    <div>
      <p id="projects-closing-title" className={styles.closingTitle}>
        <span>BUILT WITH CURIOSITY.</span>
        <span>SOLVED WITH CODE.</span>
      </p>
      <p className={styles.closingCopy}>
        More project links and case studies can drop in here as soon as the URLs
        are ready.
      </p>
    </div>

    <div className={styles.closingActions}>
      <ClosingAction
        href={projectsClosingLinks.viewAllUrl}
        label="VIEW ALL PROJECTS"
      />
      <ClosingAction
        href={projectsClosingLinks.githubUrl}
        label="SEE MORE ON GITHUB"
      />
    </div>

    <span className={styles.closingArrow} aria-hidden="true">
      <ArrowUpRight strokeWidth={2.8} />
    </span>
  </aside>
);

const ClosingAction = ({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) =>
  href ? (
    <a
      href={href}
      className={styles.closingButton}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
    >
      {label}
      <ArrowUpRight aria-hidden="true" strokeWidth={2.5} />
    </a>
  ) : (
    <span
      className={`${styles.closingButton} ${styles.disabledClosingButton}`}
      aria-disabled="true"
      title={`${label} URL not configured yet`}
    >
      {label}
      <ArrowUpRight aria-hidden="true" strokeWidth={2.5} />
    </span>
  );

const capitalize = (value: string) =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

export default ProjectsShowcaseSection;
