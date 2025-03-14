import React from "react";
import Header from "../components/header";
import HeroSection from "../components/hero";
// import FeaturedProjects from "../components/projectPage";
import AboutSection from "../components/aboutSection";
import MasonryGallery from "../components/gallary";
import ContactSection from "../components/contact";
import TicTacToe from "../components/ttt";
import RetroTicTacToe from "../components/tttretro";
// import ImageSlideshow from "../components/photo";
import ProjectsSection from "../components/ProjectsSection";
import Tictactoe from "@/../components/tictactoe";


export default function Home() {
	return (
		<React.StrictMode>
			<div>
				<Header />
				<HeroSection />
				{/* <section className="py-12">
					<LogoCarousel />
				</section> */}
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
