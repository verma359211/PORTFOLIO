"use client";
import React from "react";
import Masonry from "react-masonry-css";

// Image data - replace with your own images
const galleryImages = [
	{
		id: 1,
		src: "https://i.pinimg.com/736x/15/1d/5b/151d5ba0e5fb5a66e51eed8fba916c3a.jpg",
		alt: "Portrait 1",
	},
	{
		id: 2,
		src: "https://i.pinimg.com/736x/a5/4d/fb/a54dfbe5b93a0e726a3586283704d09e.jpg",
		alt: "Portrait 2",
	},
	{
		id: 3,
		src: "https://i.pinimg.com/736x/ea/42/cb/ea42cb8850064be7583a1849a3532cce.jpg",
		alt: "Portrait 3",
	},
	{
		id: 4,
		src: "https://i.pinimg.com/736x/25/bb/e8/25bbe8aa53d407e1dedaa293c9152df3.jpg",
		alt: "Portrait 4",
	},
	{
		id: 5,
		src: "https://i.pinimg.com/736x/50/ce/88/50ce88d635b8c1e6a662b335b7fe938c.jpg",
		alt: "Portrait 5",
	},
	{
		id: 6,
		src: "https://i.pinimg.com/736x/60/df/82/60df82535df018288d47807f35f57953.jpg",
		alt: "Portrait 6",
	},
	{
		id: 7,
		src: "https://i.pinimg.com/736x/8a/7e/83/8a7e835498907976b985f2183753854e.jpg",
		alt: "Portrait 7",
	},
	{
		id: 8,
		src: "https://i.pinimg.com/736x/51/35/3c/51353cac082a606c196051b8bb46a025.jpg",
		alt: "Portrait 8",
	},
	{
		id: 9,
		src: "https://i.pinimg.com/736x/e3/97/87/e3978737002d6dabc9a7652d124596c6.jpg",
		alt: "Portrait 9",
	},
	{
		id: 10,
		src: "https://i.pinimg.com/736x/ad/8e/c4/ad8ec44689ee1ed6842c2e34e1890394.jpg",
		alt: "Portrait 10",
	},
	{
		id: 11,
		src: "https://i.pinimg.com/736x/67/75/80/677580c415b3f14c2fb265cddb8e45c2.jpg",
		alt: "Portrait 11",
	},
	{
		id: 12,
		src: "https://i.pinimg.com/736x/3e/59/56/3e595630cfe471655c8e30862554e3da.jpg",
		alt: "Portrait 12",
	},
	{
		id: 13,
		src: "https://i.pinimg.com/736x/04/73/67/0473672670780ec9686f7c4f041d2fae.jpg",
		alt: "Portrait 13",
	},
	{
		id: 14,
		src: "https://i.pinimg.com/736x/ec/5a/c4/ec5ac4a09b1078fd89b5b2250e2e9e81.jpg",
		alt: "Portrait 14",
	},
	{
		id: 15,
		src: "https://i.pinimg.com/736x/7d/34/1b/7d341b86cdd2e4c64228fcf4557b5527.jpg",
		alt: "Portrait 15",
	},
	{
		id: 16,
		src: "https://i.pinimg.com/736x/52/ac/b3/52acb3a067a8f493ac10d500124121e9.jpg",
		alt: "Portrait 16",
	},
	{
		id: 17,
		src: "https://i.pinimg.com/736x/7f/86/bb/7f86bba0483f40b969b2a62fab3b7bd3.jpg",
		alt: "Portrait 17",
	},
	{
		id: 18,
		src: "https://i.pinimg.com/736x/d5/07/69/d50769c4e40638ec084ae0f098e78824.jpg",
		alt: "Portrait 18",
	},
	{
		id: 19,
		src: "https://i.pinimg.com/736x/cf/63/50/cf6350a277d6f10a93e5eb5849288dd5.jpg",
		alt: "Portrait 19",
	},
	{
		id: 20,
		src: "https://i.pinimg.com/736x/7c/6e/27/7c6e2774d4b4c6996a7ca3261a928af6.jpg",
		alt: "Portrait 20",
	},
	{
		id: 21,
		src: "https://i.pinimg.com/736x/47/16/11/47161144cc76b22e19b04eecf1ac2aa9.jpg",
		alt: "Portrait 21",
	},
	{
		id: 22,
		src: "https://i.pinimg.com/736x/d8/6f/89/d86f895098d41dac2b2654c416c1aa99.jpg",
		alt: "Portrait 22",
	},
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
		<section className=" px-4 md:px-8 py-0">
			<div className="container max-w-5xl mx-auto px-4 py-0">
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
								className="w-full p-2 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
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
		</section>
	);
};

export default MasonryGallery;