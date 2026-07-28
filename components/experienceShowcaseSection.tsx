import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
  MonitorSmartphone,
  Settings2,
  Star,
  Store,
  TrendingUp,
  UsersRound,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiElectron,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiRedis,
  SiSocketdotio,
} from "react-icons/si";
import {
  startupExperienceContent,
  type StartupContributionIcon,
  type StartupImpactIcon,
  type StartupTechnology,
} from "../lib/gtrestroShowcaseContent";
import styles from "./experienceShowcaseSection.module.css";

type SvgIcon = LucideIcon | IconType;

const contributionIcons: Record<StartupContributionIcon, LucideIcon> = {
  Code2,
  Layers3,
  Settings2,
};

const impactIcons: Record<StartupImpactIcon, LucideIcon> = {
  MonitorSmartphone,
  Zap,
  Store,
};

const technologyIcons: Record<StartupTechnology, SvgIcon> = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  MySQL: SiMysql,
  "Socket.IO": SiSocketdotio,
  Redis: SiRedis,
  Docker: SiDocker,
  Electron: SiElectron,
};

const technologyToneClasses: Record<StartupTechnology, string> = {
  React: styles.techReact,
  "Node.js": styles.techNode,
  MySQL: styles.techMysql,
  "Socket.IO": styles.techSocket,
  Redis: styles.techRedis,
  Docker: styles.techDocker,
  Electron: styles.techElectron,
};

const ExperienceShowcaseSection = () => {
  return <StartupExperienceSection />;
};

const StartupExperienceSection = () => {
  const content = startupExperienceContent;

  return (
    <section
      id={content.sectionId}
      className={styles.startupSection}
      aria-labelledby="startup-experience-heading"
    >
      <div className={styles.shell}>
        <div className={styles.layout}>
          <ExperienceNarrative />
          <CoreContributionCard />
          <FeaturedGTProjectCard />
          <FocusCard />
          <ImpactCard />
          <TechnologyStrip />
        </div>
      </div>
    </section>
  );
};

const ExperienceNarrative = () => {
  const { eyebrow, heading, supportingLine, developerIllustration } =
    startupExperienceContent;

  return (
    <div className={styles.narrativeColumn}>
      <div className={styles.narrativeCopy}>
        <p className={styles.narrativeEyebrow}>
          <span aria-hidden="true" />
          {eyebrow}
        </p>

        <h2 id="startup-experience-heading" className={styles.heading}>
          {heading.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <p className={styles.supportingLine}>{supportingLine}</p>
        <span className={styles.greenStroke} aria-hidden="true" />
      </div>

      <div className={styles.developerIllustration}>
        <Image
          src={developerIllustration.image}
          width={developerIllustration.width}
          height={developerIllustration.height}
          alt={developerIllustration.alt}
          sizes="(min-width: 1180px) 28vw, (min-width: 700px) 42vw, calc(100vw - 40px)"
          className={styles.developerImage}
        />
      </div>
    </div>
  );
};

const CoreContributionCard = () => {
  const { coreContribution } = startupExperienceContent;

  return (
    <article
      className={`${styles.card} ${styles.coreCard}`}
      aria-labelledby="startup-core-title"
    >
      <CardEyebrow
        id="startup-core-title"
        icon={UsersRound}
        label={coreContribution.eyebrow}
      />

      <ul className={styles.contributionList}>
        {coreContribution.items.map((item) => {
          const Icon = contributionIcons[item.icon];

          return (
            <li key={item.title}>
              <button
                type="button"
                className={styles.contributionItem}
                aria-label={`${item.title}. ${item.description}`}
              >
                <span className={styles.iconBubble} aria-hidden="true">
                  <Icon strokeWidth={1.9} />
                </span>
                <span className={styles.contributionText}>
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

const FeaturedGTProjectCard = () => {
  const { featuredProject } = startupExperienceContent;

  return (
    <a
      id={featuredProject.targetId}
      href={featuredProject.href}
      className={`${styles.card} ${styles.featuredCard}`}
      aria-label={featuredProject.linkLabel}
      aria-labelledby="startup-featured-title"
    >
      <div className={styles.featuredContent}>
        <CardEyebrow
          icon={Star}
          label={featuredProject.eyebrow}
          className={styles.featuredEyebrow}
        />
        <h3 id="startup-featured-title" className={styles.featuredTitle}>
          {featuredProject.title}
        </h3>
        <p className={styles.featuredSubtitle}>{featuredProject.subtitle}</p>
      </div>

      <div className={styles.dashboardFrame}>
        <Image
          src={featuredProject.image}
          width={featuredProject.width}
          height={featuredProject.height}
          alt={featuredProject.imageAlt}
          sizes="(min-width: 1180px) 40vw, (min-width: 700px) 46vw, calc(100vw - 72px)"
          className={styles.dashboardImage}
        />
      </div>

      <span className={styles.featuredArrow} aria-hidden="true">
        <ArrowRight aria-hidden="true" strokeWidth={2.5} />
      </span>
    </a>
  );
};

const FocusCard = () => {
  const { focus } = startupExperienceContent;

  return (
    <article
      className={`${styles.focusCard} ${styles.card}`}
      aria-labelledby="startup-focus-title"
    >
      <div className={styles.focusCopy}>
        <p id="startup-focus-title" className={styles.focusEyebrow}>
          {focus.eyebrow}
        </p>

        <ul className={styles.focusList}>
          {focus.items.map((item) => (
            <li key={item}>
              <CheckCircle2 aria-hidden="true" strokeWidth={2.6} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.focusIllustration}>
        <Image
          src={focus.illustration}
          width={focus.width}
          height={focus.height}
          alt={focus.alt}
          sizes="(min-width: 1180px) 15vw, (min-width: 700px) 28vw, 54vw"
          className={styles.focusImage}
        />
      </div>
    </article>
  );
};

const ImpactCard = () => {
  const { impact } = startupExperienceContent;

  return (
    <article
      className={`${styles.card} ${styles.impactCard}`}
      aria-labelledby="startup-impact-title"
    >
      <CardEyebrow
        id="startup-impact-title"
        icon={TrendingUp}
        label={impact.eyebrow}
      />

      <ul className={styles.impactList}>
        {impact.items.map((item) => {
          const Icon = impactIcons[item.icon];

          return (
            <li key={item.title} className={styles.impactItem}>
              <span className={styles.iconBubble} aria-hidden="true">
                <Icon strokeWidth={1.8} />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

const TechnologyStrip = () => {
  const { technologies } = startupExperienceContent;

  return (
    <aside className={styles.techStrip} aria-label="GT Restro technology stack">
      <ul className={styles.techList}>
        {technologies.map((technology) => {
          const Icon = technologyIcons[technology];

          return (
            <li key={technology}>
              <span
                className={styles.techItem}
                tabIndex={0}
                aria-label={technology}
              >
                <Icon
                  aria-hidden="true"
                  className={`${styles.techIcon} ${technologyToneClasses[technology]}`}
                />
                <span>{technology}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const CardEyebrow = ({
  icon: Icon,
  label,
  id,
  className,
}: {
  icon: LucideIcon;
  label: string;
  id?: string;
  className?: string;
}) => (
  <p id={id} className={`${styles.cardEyebrow} ${className ?? ""}`}>
    <Icon aria-hidden="true" strokeWidth={2} />
    {label}
  </p>
);

export default ExperienceShowcaseSection;
