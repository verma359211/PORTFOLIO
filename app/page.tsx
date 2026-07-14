import React from "react";
// import FeaturedProjects from "../components/projectPage";
import AboutSection from "../components/aboutSection";
import MasonryGallery from "../components/gallary";
import ContactSection from "../components/contact";
// import ImageSlideshow from "../components/photo";
import ProjectsSection from "../components/ProjectsSection";
import Tictactoe from "@/../components/tictactoe";
import Component from "../components/logocarousel";
import PortfolioHero from "../components/portfolioHero";
import StartupPosShowcase from "../components/startupPosShowcase";

export default function Home() {
  return (
    <React.StrictMode>
      <div className="">
        <PortfolioHero />
        <StartupPosShowcase />
        <section className="overflow-hidden pb-6">
          <Component />
        </section>
        {/* <FeaturedProjects /> */}
        <ProjectsSection />
        <Tictactoe />
        <AboutSection />
        <div className="relative h-[70vh] overflow-hidden">
          <div className="absolute top-0 w-full animate-scroll">
            {/* Duplicate the gallery for seamless looping */}
            <MasonryGallery />
            <MasonryGallery />
          </div>
        </div>
        {/* <MasonryGallery /> */}
        <ContactSection />
      </div>
    </React.StrictMode>
  );
}
