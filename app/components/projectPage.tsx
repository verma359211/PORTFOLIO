import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedProjects = () => {
  const projects = [
		{
			id: 1,
			title: "Featured Project Name",
			category: "Conceptual Work",
			description:
				"A detailed description of your featured project. Explain the key features and technologies used in the project. This can be multiple lines long.",
			year: "2024",
			role: "Front-end Developer",
			image: "/image/project.jpg",
			demoUrl: "#",
			githubUrl: "#",
		},
		{
			id: 2,
			title: "Featured Project Name",
			category: "Conceptual Work",
			description:
				"A detailed description of your featured project. Explain the key features and technologies used in the project. This can be multiple lines long.",
			year: "2024",
			role: "Front-end Developer",
			image: "/image/project.jpg",
			demoUrl: "#",
			githubUrl: "#",
		},
		{
			id: 3,
			title: "Featured Project Name",
			category: "Conceptual Work",
			description:
				"A detailed description of your featured project. Explain the key features and technologies used in the project. This can be multiple lines long.",
			year: "2024",
			role: "Front-end Developer",
			image: "/image/project.jpg",
			demoUrl: "#",
			githubUrl: "#",
		},
	];

  return (
		<section className="py-16 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-5xl mb-4">FEATURED PROJECTS</h2>
				<p className="text-gray-300 mb-12">
					Here are some of the selected projects that showcase my passion for
					front-end development.
				</p>

				<div className="space-y-16">
					{projects.map((project) => (
						<div key={project.id} className="bg-neutral-900 rounded-lg p-6">
							<div className="grid md:grid-cols-2 gap-8">
								<div className="relative aspect-video overflow-hidden rounded-lg">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="hover:scale-105 transition-transform duration-300"
									/>
								</div>

								<div className="space-y-4">
									<div className="text-sm text-gray-400">
										{project.category}
									</div>
									<h3 className="text-2xl font-semibold">{project.title}</h3>
									<p className="text-gray-300">{project.description}</p>

									<div className="space-y-2">
										<h4 className="text-lg font-medium mt-6">PROJECT INFO</h4>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<p className="text-gray-400">Year</p>
												<p>{project.year}</p>
											</div>
											<div>
												<p className="text-gray-400">Role</p>
												<p>{project.role}</p>
											</div>
										</div>
									</div>

									<div className="flex gap-4 pt-4">
										<Link
											href={project.demoUrl}
											className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
										>
											LIVE DEMO
											<svg
												className="w-4 h-4 ml-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</Link>
										<Link
											href={project.githubUrl}
											className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
										>
											SEE ON GITHUB
											<svg
												className="w-5 h-5 ml-2"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;