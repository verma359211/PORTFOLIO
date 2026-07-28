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
import styles from "./page.module.css";

export default function Home() {
  return (
    <React.StrictMode>
      <main className={styles.pageSurface}>
        <div className={styles.heroExperienceFlow}>
          <PortfolioHero />
          <ExperienceShowcaseSection />
        </div>
        <ProjectsShowcaseSection />
        <section className={styles.logoBand} aria-label="Technology stack">
          <Component />
        </section>
        {/* <FeaturedProjects /> */}
        <Tictactoe />
        <AboutSection />
        <div className={styles.galleryWindow}>
          <div className="absolute top-0 w-full animate-scroll">
            {/* Duplicate the gallery for seamless looping */}
            <MasonryGallery />
            <MasonryGallery />
          </div>
        </div>
        {/* <MasonryGallery /> */}
        <ContactSection />
      </main>
    </React.StrictMode>
  );
}
