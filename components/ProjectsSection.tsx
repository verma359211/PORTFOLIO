// components/ProjectsSection.tsx
import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	githubUrl: string;
    demoUrl: string;
    isGif?:boolean
}

const ProjectsSection: React.FC = () => {
	// Example projects data - in a real app, this might come from an API or CMS
	const projects: Project[] = [
		{
			id: "1",
			title: "Banana type",
			description:
				"A fast-paced multiplayer typing race where speed is king! Type faster than your rivals, climb the leaderboard, and don’t slip—only the quickest fingers win! 🏆⌨️💨",
			imageUrl:
				"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTdnZ3c2cHRkczhxcDI2ZHcya3c3eTViZ25vYWFqYnkwc3hqeXYwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8TF4cqmmLbqCScazmf/giphy.gif",
			githubUrl: "https://github.com/verma359211/bananatype",
			demoUrl: "https://bananatype.vercel.app/",
			isGif: true,
		},
		{
			id: "2",
			title: "E-Commerce Platform",
			description:
				"A sleek e-commerce platform for selling clothing, built with Next.js, Tailwind CSS and MERN stack. It features secure authentication, a smooth cart system, and Razorpay integration for hassle-free payments. 🚀🛍️",
			imageUrl: "/image/e-com_Demo.png",
			githubUrl: "https://github.com/verma359211/e-com",
			demoUrl: "https://e-com-roan-three.vercel.app/",
			isGif: false,
		},
		{
			id: "3",
			title: "Whispr",
			description:
				"Wishpr is an anonymous messaging app built with the MERN stack. Create an account to get your unique shareable link — anyone with the link can send you anonymous messages. Clean UI, secure auth, and zero identity reveal. 🔐💌",
			imageUrl: "/image/whispr.png",
			githubUrl: "https://github.com/verma359211/Whispr",
			demoUrl: "https://whispr-ecru.vercel.app/",
			isGif: false,
		},
		{
			id: "4",
			title: "Bug Traking system",
			description:
				"Interactive weather dashboard with forecasts and historical data visualization.",
			imageUrl:
				"https://user-images.githubusercontent.com/6929121/87441911-486bf600-c611-11ea-9d45-94c215733cf7.png",
			githubUrl: "",
			demoUrl: "",
		},
		// Add more projects as needed
	];

	return (
		<section className="py-2 px-4 md:px-16">
			<div className="max-w-7xl container mx-auto px-4">
				<h2 className="text-5xl mb-4">FEATURED PROJECTS</h2>
				<p className="text-gray-300 mb-12">
					Here are some of the selected projects that showcase my passion for
					front-end development.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imageUrl={project.imageUrl}
							githubUrl={project.githubUrl}
							demoUrl={project.demoUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
