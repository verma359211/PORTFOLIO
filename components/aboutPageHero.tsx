import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RESUME_URL } from "../lib/portfolioLinks";

const AboutPageHero = () => {
	return (
		<div className="text-white py-16 max-w-[1440px] mx-auto px-6">
			<section className="mb-20">
				<h1 className="text-5xl font-bold mb-8">ABOUT ME</h1>
				<div className="max-w-2xl mb-8">
					<p className="text-xl mb-4">
						I’m Chandan Verma, a full-stack developer and product builder
						building useful software, from the interface to the systems behind it.
					</p>
					{/* <p className="text-xl mb-8">Has B.tech CSE background.</p> */}
					<p className="text-gray-300 mb-8">
						I’m the kind of person who dives into challenges headfirst, learns
						along the way, and has a bit of fun while doing it. Whether it’s
						solving a tricky problem or crafting something new, I’m always up
						for a good adventure. I believe in creating with purpose and making
						things that not only work but make a difference. So take a look
						around, my work speaks for itself!
					</p>
						<a
							href={RESUME_URL}
							target="_blank"
							className="bg-[#D3E97A] text-black px-6 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-[#bde676] transition-colors"
							rel="noopener noreferrer"
						>
							<span>VIEW RESUME</span>
							<span>•</span>
						</a>
				</div>
				<div className="w-full h-screen">
					<div className="relative w-full h-full rounded-3xl overflow-hidden">
						<Image
							src="/image/groupPhoto.jpg"
							alt="Group headshot"
							fill
							sizes="(max-width: 1440px) 100vw, 1440px"
							className="object-cover"
							priority
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPageHero;
