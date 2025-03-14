import React from 'react'
import Link from "next/link";

function Capabilities() {
	const capabilities = [
		"HTML",
		"CSS",
		"JAVASCRIPT",
		"JQUERY",
		"ACCESSIBILITY",
		"FIGMA",
		"TAILWIND CSS",
	];

	/* 	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add your form submission logic here
	}; */

	return (
		<div className=" text-white py-16 max-w-[1440px] mx-auto px-6">
			<h2 className="text-5xl font-bold mb-8">MY CAPABILITIES</h2>
			<p className="text-gray-300 mb-8 max-w-2xl">
				I am always looking to add more skills. Morbi egestas neque eu blandit
				fermentum. Nulls ac lobortis ligula. Pellentesque ac ex et purus
				faucibus tristique ut et dolor.
			</p>
			<div className="flex flex-wrap gap-4">
				{capabilities.map((skill) => (
					<span
						key={skill}
						className="px-6 py-2 rounded-full border border-gray-700 text-sm hover:bg-gray-900 transition-colors"
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
}

export default Capabilities
