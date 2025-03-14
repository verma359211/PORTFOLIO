import React from 'react'
import RetroTicTacToe from './tttretro';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

function Tictactoe() {
  return (
		<section className="py-24 px-4 md:px-8 ">
			<div className="text-white flex flex-col max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between flex-1 gap-8">
					<div className="md:w-1/2 w-full">
						<RetroTicTacToe />
					</div>
					<div className="md:w-1/2 px-4 space-y-6 w-full ">
						<div className="space-y-4">
							<h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight">
								Winner🏆 gets my resume
							</h1>
							<p className="text-lg md:text-xl text-gray-300 max-w-md">
								just kiding HERE is my resume
							</p>
						</div>

						{/* Buttons/Links */}
						<div className="flex items-center gap-4">
							<Link
								href="#contact-section"
								className="bg-[#D3E97A] text-black px-6 py-3 rounded-full font-medium hover:bg-[#bde676] transition-colors flex items-center gap-2"
							>
								DOWNLOAD RESUME
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
				</div>
			</div>
		</section>
	);
}

export default Tictactoe