import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
// import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import Header from "@/../components/header"
import ContactSection from "@/../components/contact";
import AboutPageHero from "@/../components/aboutPageHero";
import Capabilities from "@/../components/capabilities";
// import Footer from "@/../components/footer";

export const metadata: Metadata = { title: "About Chandan | an ongoing experiment", alternates: { canonical: "/about" } };

const AboutPage = () => {
	
	return (
		<div>
			<Header />
			<AboutPageHero />
			<Capabilities />
			<ContactSection />
			{/* <Footer /> */}
		</div>
	);
};

export default AboutPage;
