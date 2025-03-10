"use client";
import React from "react";
import Masonry from "react-masonry-css";

// Image data - replace with your own images
const galleryImages = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Landscape 1",
	},
	{ id: 2, src: "/image/hero.jpg", alt: "Portrait 1" },
	{ id: 3, src: "/image/groupPhoto.jpg", alt: "Landscape 2" },
	{ id: 4, src: "/image/random.jpg", alt: "Portrait 2" },
	{ id: 5, src: "/image/project.jpg", alt: "Landscape 3" },
	{ id: 6, src: "/image/hero.jpg", alt: "Portrait 3" },
];

const MasonryGallery: React.FC = () => {
	// Breakpoints for responsive masonry layout
	const breakpointColumnsObj = {
		default: 3,
		1100: 3,
		700: 2,
		500: 1,
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
				{/* Gallery */}
			</h2>

			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{galleryImages.map((image) => (
					<div key={image.id} className="relative mb-4 cursor-pointer group">
						<img
							src={image.src}
							alt={image.alt}
							className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
				))}
			</Masonry>

			<style jsx global>{`
				.my-masonry-grid {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					margin-left: -30px;
					width: auto;
				}
				.my-masonry-grid_column {
					padding-left: 30px;
					background-clip: padding-box;
				}
				.my-masonry-grid_column > div {
					margin-bottom: 30px;
				}
			`}</style>
		</div>
	);
};

export default MasonryGallery;