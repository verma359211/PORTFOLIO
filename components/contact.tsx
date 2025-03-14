"use client";
import React, { useState } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<string | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (data.success) {
				setSubmitStatus("Message sent successfully!");
			} else {
				setSubmitStatus("Failed to send message. Please try again.");
			}
		} catch (error) {
			setSubmitStatus("An error occurred. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="text-white py-16" id="contact-section">
			<div className="max-w-[1440px] mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16">
					{/* Left Column */}
					<div className="space-y-8">
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
							LET'S CONNECT
						</h1>

						<div className="space-y-4">
							<p className="text-gray-300">
								Say hello at{" "}
								<a
									href="mailto:vermachandan2912003@gmail.com"
									className="text-[#D0F288] hover:underline"
								>
									vermachandan2912003@gmail.com
								</a>
							</p>

							<p className="text-gray-300">
								For more info, here's my{" "}
								<Link
									href="/ChandanVerma-Resume-2024.pdf"
									target="_blank"
									className="text-[#D0F288] hover:underline"
								>
									resume
								</Link>
							</p>
						</div>

						{/* Social Links */}
						<div className="flex gap-6">
							<Link
								href="https://www.linkedin.com/in/cverma7/"
								className="text-[#D0F288] hover:text-[#bde676] transition-colors"
							>
								<Linkedin size={24} />
							</Link>
							<Link
								href="https://github.com/verma359211"
								className="text-[#D0F288] hover:text-[#bde676] transition-colors"
							>
								<Github size={24} />
							</Link>
							<Link
								href="https://x.com/verma359211"
								className="text-[#D0F288] hover:text-[#bde676] transition-colors"
							>
								<Twitter size={24} />
							</Link>
							<Link
								href="https://www.instagram.com/tatya_vinchooo/"
								className="text-[#D0F288] hover:text-[#bde676] transition-colors"
							>
								<Instagram size={24} />
							</Link>
						</div>

						{/* Copyright */}
						<div className="pt-8">
							<p className="text-gray-500">© 2023 Chandan Verma</p>
						</div>
					</div>

					{/* Right Column - Form */}
					<div>
						<form className="space-y-6" onSubmit={handleSubmit}>
							{/* Name Input */}
							<div className="space-y-2">
								<label htmlFor="name" className="text-gray-300">
									Name
								</label>
								<input
									type="text"
									id="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="John Doe"
									className="w-full p-3 bg-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D0F288] transition-all"
								/>
							</div>

							{/* Email Input */}
							<div className="space-y-2">
								<label htmlFor="email" className="text-gray-300">
									Email
								</label>
								<input
									type="email"
									id="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full p-3 bg-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D0F288] transition-all"
								/>
							</div>

							{/* Subject Input */}
							<div className="space-y-2">
								<label htmlFor="subject" className="text-gray-300">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									value={formData.subject}
									onChange={handleChange}
									className="w-full p-3 bg-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D0F288] transition-all"
								/>
							</div>

							{/* Message Input */}
							<div className="space-y-2">
								<label htmlFor="message" className="text-gray-300">
									Message
								</label>
								<textarea
									id="message"
									value={formData.message}
									onChange={handleChange}
									rows={6}
									className="w-full p-3 bg-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D0F288] transition-all resize-none"
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="bg-[#D0F288] text-black px-8 py-3 rounded-full font-medium hover:bg-[#bde676] transition-all"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Submitting..." : "SUBMIT"}
							</button>
						</form>
						{submitStatus && (
							<p className="text-gray-300 mt-4">{submitStatus}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
