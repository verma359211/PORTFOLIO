import React from "react";
import Link from "next/link";
import x from "@/../public/image/hero.jpg"
// import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

const HeroSection = () => {
	return (
		<section className="py-4 px-4 md:px-8">
			<div className="min-h-screen text-white flex flex-col max-w-7xl mx-auto">
				{/* Main Content */}
				<div className="flex flex-col lg:flex-row items-center justify-between flex-1 gap-12">
					{/* Left Content */}
					<div className="lg:w-1/2 space-y-6">
						<div className="space-y-4">
							<h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
								HI, I AM
								<br />
								CHANDAN VERMA.
							</h1>
							<p className="text-lg md:text-xl text-gray-300 max-w-md">
								just a newbie developer trying to make the web a little less
								broken, one line of code at a time
							</p>
						</div>

						{/* Buttons/Links */}
						<div className="flex items-center gap-4">
							<Link
								href="#contact-section"
								className="bg-[#D3E97A] text-black px-6 py-3 rounded-full font-medium hover:bg-[#bde676] transition-colors flex items-center gap-2"
							>
								CONTACT ME
								<span className="w-2 h-2 bg-black rounded-full"></span>
							</Link>

							<div className="flex gap-4">
								<Link
									href="https://www.linkedin.com/in/cverma7/"
									className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
								>
									<Linkedin size={20} className="text-[#D3E97A]" />
								</Link>
								<Link
									href="https://github.com/verma359211"
									className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
								>
									<Github size={20} className="text-[#D3E97A]" />
								</Link>
							</div>
						</div>
					</div>

					{/* Right Content - Image */}
					<div className="lg:w-1/2 relative">
						<div className="w-full aspect-square max-w-lg rounded-3xl overflow-hidden bg-gray-200">
							<Image
								src="/image/hero.jpg"
								alt="Professional headshot"
								width={600}
								height={600}
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
