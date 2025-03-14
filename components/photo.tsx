"use client";
import React, { useState, useEffect } from "react";

interface ImageSlideshowProps {
	images: string[];
	height?: string;
	width?: string;
}

const getRandomPosition = () => {
    const positions = [
			"top-0 left-0",
			"top-0 right-0",
			"bottom-0 left-0",
			"bottom-0 right-0",
			"top-1/4 left-1/4",
			"top-1/3 right-1/3",
			"bottom-1/4 right-1/4",
			"bottom-1/3 left-1/3",
			"top-1/2 left-1/2",
			"top-5 left-5",
			"bottom-5 right-5",
			"top-10 left-10",
			"bottom-10 right-10",
			"top-1/5 right-1/5",
			"bottom-1/5 left-1/5",
		];
	return positions[Math.floor(Math.random() * positions.length)];
};

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
	images = [],
	height = "h-screen",
	width = "w-full",
}) => {
	const [currentImages, setCurrentImages] = useState<
		{ src: string; id: number; position: string }[]
	>([]);
	const [imageId, setImageId] = useState(0);

	useEffect(() => {
		if (images.length === 0) return;

		const intervalId = setInterval(() => {
			setCurrentImages((prev) => {
				const newImage = {
					src: images[imageId % images.length],
					id: imageId,
					position: getRandomPosition(),
				};
				setImageId((prevId) => prevId + 1);
				return [...prev, newImage].slice(-images.length); // Keep only the last 5 images(not any more)
			});
		}, 2000);

		return () => clearInterval(intervalId);
	}, [images, imageId]);

	return (
		<div className={`relative ${width} ${height} overflow-hidden`}>
			{currentImages.map(({ src, id, position }) => (
				<img
					key={id}
					src={src}
					alt={`Slide ${id}`}
					className={`absolute ${position} object-contain max-w-[100%] max-h-[100%] h-auto opacity-0 transition-opacity duration-1000 ease-in-out`}
					onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
				/>
			))}
		</div>
	);
};

export default ImageSlideshow;
