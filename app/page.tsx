import React from "react";
// import FeaturedProjects from "../components/projectPage";
import AboutSection from "../components/aboutSection";
import MasonryGallery from "../components/gallary";
import ContactSection from "../components/contact";
// import ImageSlideshow from "../components/photo";
import Tictactoe from "@/../components/tictactoe";
import Component from "../components/logocarousel";
import PortfolioHero from "../components/portfolioHero";
import ExperienceShowcaseSection from "../components/experienceShowcaseSection";
import ProjectsShowcaseSection from "../components/projectsShowcaseSection";
import PageMotion from "../components/pageMotion";
import styles from "./page.module.css";
import ThemePreview from "../components/themePreview";
import EngineeringShowcase from "../components/engineeringShowcase";
import VisitorFeedback from "../components/visitorFeedback";

const SHOW_IMAGE_SLIDESHOW = false;

export default function Home() {
  return (
    <React.StrictMode>
      <ThemePreview className={styles.pageSurface}>
        <PageMotion />
        <div className={styles.heroExperienceFlow}>
          <PortfolioHero />
          <ExperienceShowcaseSection />
        </div>
        <section id="projects" aria-label="Personal projects">
          <EngineeringShowcase />
          <ProjectsShowcaseSection />
        </section>
        <section
          className={styles.logoBand}
          aria-label="Technology stack"
          data-section-reveal
        >
          <Component />
        </section>
        {/* <FeaturedProjects /> */}
        <Tictactoe />
        <AboutSection />
        {SHOW_IMAGE_SLIDESHOW && (
          <div className={styles.galleryWindow}>
            <div className="absolute top-0 w-full animate-scroll">
              {/* Duplicate the gallery for seamless looping */}
              <MasonryGallery />
              <MasonryGallery />
            </div>
          </div>
        )}
        {/* <MasonryGallery /> */}
        <ContactSection />
        <VisitorFeedback />
      </ThemePreview>
    </React.StrictMode>
  );
}
