import React from "react";
import Link from "next/link";

const AboutSection = () => {
	return (
		<div className="text-white p-6 ">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Left Column - Title */}
					<div>
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
							ABOUT ME
						</h1>
					</div>

					{/* Right Column - Content */}
					<div className="space-y-8">
						{/* Main Highlights */}
						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-medium leading-relaxed">
								just a newbie developer trying to make the web a little less
								broken, one line of code at a time
							</h2>
						</div>

						{/* Detailed Description */}
						<p className="text-gray-400 text-lg leading-relaxed">
							I’m the kind of person who dives into challenges headfirst, learns
							along the way, and has a bit of fun while doing it. Whether it’s
							solving a tricky problem or crafting something new, I’m always up
							for a good adventure. I believe in creating with purpose and
							making things that not only work but make a difference. So take a
							look around, my work speaks for itself!
						</p>

						{/* More About Me Link */}
						<Link href="/about" className="inline-block group">
							<span className="text-[#D0F288] border-b-2 border-transparent group-hover:border-[#D0F288] transition-all duration-300">
								MORE ABOUT ME
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
