import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<div className="py-6 border-t border-gray-800">
			<div className="flex justify-between items-center">
				<p className="text-sm text-gray-400">© 2023 Robert Garcia</p>
				<div className="flex space-x-6">
					<Link
						href="https://linkedin.com"
						className="text-gray-400 hover:text-[#D3E97A]"
					>
						<Linkedin size={20} />
					</Link>
					<Link
						href="https://github.com"
						className="text-gray-400 hover:text-[#D3E97A]"
					>
						<Github size={20} />
					</Link>
					<Link
						href="https://twitter.com"
						className="text-gray-400 hover:text-[#D3E97A]"
					>
						<Twitter size={20} />
					</Link>
					<Link
						href="https://instagram.com"
						className="text-gray-400 hover:text-[#D3E97A]"
					>
						<Instagram size={20} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
