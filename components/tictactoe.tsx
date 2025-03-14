"use client"
import React from 'react'
import RetroTicTacToe from './tttretro';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

function Tictactoe() {
  return (
		<section className="py-24 px-4 md:px-8 ">
			<div className="text-white flex flex-col max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between flex-1 gap-8">
					<div className="md:w-1/2 w-full">
						<RetroTicTacToe />
					</div>
					<div className="md:w-1/2 px-4 w-full  ">
						<div className="space-y-4">
							<h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-['Press_Start_2P'] text-yellow-400">
								Winner🏆
							</h1>
							<p className="text-xl md:text-3xl lg:text-5xl">gets my resume</p>
							<p className="text-lg md:text-xl text-gray-300 max-w-md pb-4">
								just kiding HERE is my resume
							</p>
						</div>

						{/* Buttons/Links */}
						<div className="flex items-center gap-4">
							<Link
								href="/ChandanVerma-Resume.pdf"
								target="_blank"
								className="bg-white text-black px-6 py-3 font-medium hover:bg-neutral-400 transition-colors flex items-center gap-2"
							>
								DOWNLOAD RESUME
							</Link>

							<div className="flex gap-4">
								<Link
									href="https://www.linkedin.com/in/cverma7/"
									className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
								>
									<Linkedin size={20} className="text-white" />
								</Link>
								<Link
									href="https://github.com/verma359211"
									className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
								>
									<Github size={20} className="text-white" />
								</Link>
								<Link
									href="mailto:vermachandan2912003@gmail.com"
									className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
								>
									<Mail size={20} className="text-white" />
								</Link>
								<Link
									href="tel:+916289220590"
									className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
								>
									<Phone size={20} className="text-white" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx global>{`
				@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

				.pixel-text {
					text-shadow: 2px 2px 0 #000;
					image-rendering: pixelated;
				}
			`}</style>
		</section>
	);
}

export default Tictactoe