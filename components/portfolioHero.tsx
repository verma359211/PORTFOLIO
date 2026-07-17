"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./portfolioHero.module.css";

const HERO_ASSETS = {
  artwork: "/assets/hero/chandan-developer-fisheye.webp",
  projectCover: "/assets/hero/gtrestro-project-cover.webp",
};

const HERO_LINKS = {
  work: "#work-section",
  about: "#about-section",
  experience: "#experience",
  contact: "#contact-section",
};

const GT_RESTRO_CASE_STUDY_HREF = "#gtrestro-case-study";

const NAV_ITEMS = [
  { label: "Work", href: HERO_LINKS.work },
  { label: "About", href: HERO_LINKS.about },
  { label: "Experience", href: HERO_LINKS.experience },
  { label: "Contact", href: HERO_LINKS.contact },
];

const PortfolioHero = () => {
  return (
    <section
      className={styles.portfolioHero}
      aria-labelledby="portfolio-hero-title"
    >
      <HeroGrid />
      <PortfolioHeader />

      <div className={styles.heroStage}>
        <div className={styles.createWord} aria-hidden="true">
          CREATE
        </div>

        <HeroIntroduction />
        <HeroArtwork />

        <div className={styles.nameBlock}>
          <span className={styles.copyright}>©2026</span>
          <h1 id="portfolio-hero-title" className={styles.name}>
            <span>CHANDAN</span>
            <br />
            <span>VERMA</span>
          </h1>
        </div>

        <div className={styles.cards}>
          <FeaturedProjectCard />
          <ContactProjectCard />
        </div>
      </div>
    </section>
  );
};

const HeroGrid = () => (
  <div className={styles.gridBackdrop} aria-hidden="true">
    <span className={`${styles.crosshair} ${styles.crosshairOne}`} />
    <span className={`${styles.crosshair} ${styles.crosshairTwo}`} />
    <span className={`${styles.crosshair} ${styles.crosshairThree}`} />
    <span className={`${styles.crosshair} ${styles.crosshairFour}`} />
    <span className={`${styles.crosshair} ${styles.crosshairFive}`} />
    <span className={`${styles.crosshair} ${styles.crosshairSix}`} />
  </div>
);

const PortfolioHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Chandan Verma home">
        CV
      </Link>

      <nav className={styles.nav} aria-label="Primary navigation">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className={styles.navLink}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href={HERO_LINKS.work} className={styles.mobileWorkLink}>
        Work
      </Link>

      <div className={styles.menuWrap}>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="portfolio-hero-menu"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        {isMenuOpen && (
          <nav
            id="portfolio-hero-menu"
            className={styles.menuPanel}
            aria-label="Menu navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.menuPanelLink}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

const HeroIntroduction = () => (
  <div className={styles.intro}>
    <p className={styles.role}>
      <span className={styles.roleDot} aria-hidden="true" />
      <span>
        FULL STACK DEVELOPER &
        <br />
        PRODUCT BUILDER
      </span>
    </p>

    <p className={styles.introCopy}>
      I build thoughtful digital products
      <br />
      with code, design,
      <br />
      and systems thinking —
      <br />
      from idea to impact.
    </p>
  </div>
);

const HeroArtwork = () => (
  <div className={styles.artworkWrap}>
    <div className={styles.artworkHalo} aria-hidden="true" />
    <Image
      src={HERO_ASSETS.artwork}
      alt="Illustration of Chandan working at a multi-screen development desk"
      width={2400}
      height={2400}
      priority
      sizes="(min-width: 1280px) 48vw, (min-width: 768px) 62vw, calc(100vw - 40px)"
      className={styles.artworkImage}
    />
  </div>
);

const FeaturedProjectCard = () => (
  <Link
    href={GT_RESTRO_CASE_STUDY_HREF}
    className={styles.projectCard}
    aria-label="View GT Restro case study"
  >
    <div className={styles.projectCardHeader}>
      <span>GT Restro</span>
      <span className={styles.dots} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
    </div>

    <div className={styles.projectImageWrap}>
      <Image
        src={HERO_ASSETS.projectCover}
        alt="GT Restro restaurant SaaS and POS platform interface preview"
        fill
        sizes="(min-width: 1180px) 22vw, (min-width: 768px) 45vw, calc(100vw - 72px)"
        className={styles.projectImage}
      />
    </div>

    <div className={styles.projectFooter}>
      <span className={styles.projectDot} aria-hidden="true" />
      <div>
        <p className={styles.projectTitle}>GT Restro</p>
        <p className={styles.projectCategory}>Restaurant SaaS / POS Platform</p>
      </div>
      <ArrowUpRight
        className={styles.projectArrow}
        size={28}
        strokeWidth={1.8}
      />
    </div>
  </Link>
);

const ContactProjectCard = () => (
  <Link href={HERO_LINKS.contact} className={styles.contactCard}>
    <span className={styles.spark} aria-hidden="true">
      ✶
    </span>
    <p className={styles.contactText}>
      Let&apos;s build something meaningful together.
    </p>
    <span className={styles.contactDivider} aria-hidden="true" />
    <span className={styles.contactAction}>
      START A PROJECT
      <ArrowUpRight
        className={styles.contactArrow}
        size={30}
        strokeWidth={1.8}
      />
    </span>
  </Link>
);

export default PortfolioHero;
