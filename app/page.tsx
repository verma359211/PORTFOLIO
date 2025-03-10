import Header from "./components/header";
import FeaturedProjects from "./components/projectPage";
import HeroSection from "./components/hero";
import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contact";
import React from "react";
import MasonryGallery from "./components/gallary";


export default function Home() {
	return (
		<React.StrictMode>
			<div>
				<Header />
				<HeroSection />
				<FeaturedProjects />
				<AboutSection />
				<MasonryGallery />
				<ContactSection />
			</div>
		</React.StrictMode>
	);
}
