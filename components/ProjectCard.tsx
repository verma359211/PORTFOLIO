// components/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	githubUrl: string;
    demoUrl: string;
    isGif?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	imageUrl,
	githubUrl,
    demoUrl,
    isGif = false,
}) => {
	return (
		<div className="group bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
			<div className="relative h-48 w-full overflow-hidden">
				{isGif ? (
					// For GIFs, we use a standard img tag as Next.js Image optimization can sometimes break GIFs
					<img
						src={imageUrl}
						alt={title}
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
					/>
				) : (
					// For static images, use Next.js Image component
					<Image
						src={imageUrl}
						alt={title}
						fill
						className="object-cover group-hover:scale-110 transition-transform duration-300"
						unoptimized
					/>
				)}
			</div>
			<div className="p-6 flex flex-col flex-grow">
				<h3 className="text-2xl mb-2 text-white">{title}</h3>
				<p className="text-gray-200 mb-4 flex-grow">{description}</p>
				<div className="flex space-x-4 mt-auto">
					<Link
						href={githubUrl}
						className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							className="w-5 h-5 mr-2"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
						</svg>
						GitHub
					</Link>
					<Link
						href={demoUrl}
						className="flex items-center justify-center px-4 py-2 bg-[#D3E97A] text-black rounded-md hover:bg-[#bde676] transition-colors duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							className="w-5 h-5 mr-2"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							<path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
						</svg>
						Live Demo
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
