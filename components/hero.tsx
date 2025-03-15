import React from "react";
import Link from "next/link";
import x from "@/../public/image/hero.jpg"
// import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import TicTacToe from "./ttt";
import ImageSlideshow from "./photo";

const HeroSection = () => {
	const images = [
		"https://i.pinimg.com/736x/15/1d/5b/151d5ba0e5fb5a66e51eed8fba916c3a.jpg",
		"https://i.pinimg.com/736x/a5/4d/fb/a54dfbe5b93a0e726a3586283704d09e.jpg",
		"https://i.pinimg.com/736x/ea/42/cb/ea42cb8850064be7583a1849a3532cce.jpg",
		"https://i.pinimg.com/736x/25/bb/e8/25bbe8aa53d407e1dedaa293c9152df3.jpg",
		"https://i.pinimg.com/736x/50/ce/88/50ce88d635b8c1e6a662b335b7fe938c.jpg",
		"https://i.pinimg.com/736x/60/df/82/60df82535df018288d47807f35f57953.jpg",
		"https://i.pinimg.com/736x/8a/7e/83/8a7e835498907976b985f2183753854e.jpg",
		"https://i.pinimg.com/736x/79/b7/61/79b761266ee372d5d9b6ff9c66c70cbc.jpg",
		"https://i.pinimg.com/736x/e3/97/87/e3978737002d6dabc9a7652d124596c6.jpg",
		"https://i.pinimg.com/736x/ad/8e/c4/ad8ec44689ee1ed6842c2e34e1890394.jpg",
		"https://i.pinimg.com/736x/67/75/80/677580c415b3f14c2fb265cddb8e45c2.jpg",
		"https://i.pinimg.com/736x/3e/59/56/3e595630cfe471655c8e30862554e3da.jpg",
		"https://i.pinimg.com/736x/04/73/67/0473672670780ec9686f7c4f041d2fae.jpg",
		"https://i.pinimg.com/736x/ec/5a/c4/ec5ac4a09b1078fd89b5b2250e2e9e81.jpg",
		"https://i.pinimg.com/736x/7d/34/1b/7d341b86cdd2e4c64228fcf4557b5527.jpg",
		"https://i.pinimg.com/736x/52/ac/b3/52acb3a067a8f493ac10d500124121e9.jpg",
		"https://i.pinimg.com/736x/7f/86/bb/7f86bba0483f40b969b2a62fab3b7bd3.jpg",
		"https://i.pinimg.com/736x/d5/07/69/d50769c4e40638ec084ae0f098e78824.jpg",
		"https://i.pinimg.com/736x/cf/63/50/cf6350a277d6f10a93e5eb5849288dd5.jpg",
		"https://i.pinimg.com/736x/7c/6e/27/7c6e2774d4b4c6996a7ca3261a928af6.jpg",
		"https://i.pinimg.com/736x/47/16/11/47161144cc76b22e19b04eecf1ac2aa9.jpg",
		"https://i.pinimg.com/736x/d8/6f/89/d86f895098d41dac2b2654c416c1aa99.jpg",
		"https://i.pinimg.com/736x/51/35/3c/51353cac082a606c196051b8bb46a025.jpg",
	];
	return (
		<section className="py-12  px-4 md:px-8">
			<div className="text-white flex flex-col max-w-7xl mx-auto">
				{/* Main Content */}
				<div className="flex flex-col lg:flex-row items-center justify-between flex-1 gap-8">
					{/* Left Content */}
					<div className="lg:w-1/3 space-y-6 w-full">
						<div className="space-y-4">
							<h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
								HI, I AM
								<br />
								CHANDAN VERMA
							</h1>
							<p className="text-lg md:text-2xl text-gray-200 max-w-md">
								SDE in Progress:
								<br />
								Pushing Code, Pulling Opportunities 🔥
							</p>
						</div>

						{/* Buttons/Links */}
						<div className="flex items-center gap-4">
							<Link
								href="#contact-section"
								className="bg-[#D3E97A] text-black px-4 sm:px-6 py-3 rounded-full font-medium hover:bg-[#bde676] transition-colors flex items-center gap-2"
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
								<Link
									href="mailto:vermachandan2912003@gmail.com"
									className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
								>
									<Mail size={20} className="text-[#D3E97A]" />
								</Link>
								<Link
									href="tel:+916289220590"
									className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
								>
									<Phone size={20} className="text-[#D3E97A]" />
								</Link>
							</div>
						</div>
					</div>
					{/* Right Content - Image */}
					<div className="lg:w-2/3 w-full ">
						{/* <div className="w-full aspect-square max-w-lg rounded-3xl overflow-hidden bg-gray-200">
							<Image
								src="/image/hero.jpg"
								alt="Professional headshot"
								width={600}
								height={600}
								className="object-cover"
								priority
							/>
						</div> */}
						<div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] overflow-hidden">
							<ImageSlideshow images={images} height="h-full" width="w-full" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
