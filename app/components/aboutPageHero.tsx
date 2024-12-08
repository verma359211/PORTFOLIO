import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutPageHero = () => {
	return (
		<div className="text-white py-16 max-w-[1440px] mx-auto px-6">
			<section className="mb-20">
				<h2 className="text-5xl font-bold mb-8">ABOUT ME</h2>
				<div className="max-w-2xl mb-8">
					<p className="text-xl mb-4">
						just a newbie developer trying to make the web a little less broken,
						one line of code at a time
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
					<button className="bg-[#D3E97A] text-black px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-[#bde676] transition-colors">
						<a
							href="/ChandanVerma-Resume-2024.pdf"
							target="_blank"
							className="flex items-center space-x-2"
							download
						>
							<span>DOWNLOAD RESUME</span>
							<span>•</span>
						</a>
					</button>
				</div>
				<div className="w-full h-screen">
					<div className="relative w-full h-full rounded-3xl overflow-hidden">
						<Image
							src="/image/groupPhoto.jpg"
							alt="Group headshot"
							layout="fill"
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
