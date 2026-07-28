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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <div
      className="px-[var(--page-gutter)] py-20 text-[#0a3028] md:py-24"
      id="contact-section"
    >
      <div className="mx-auto max-w-[1540px]">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              LET&apos;S CONNECT
            </h1>

            <div className="pl-12 space-y-4">
              <p className="text-[#56635d]">
                Say hello at{" "}
                <a
                  href="mailto:vermachandan2912003@gmail.com"
                  className="text-[#D0F288] hover:underline"
                >
                  vermachandan2912003@gmail.com
                </a>
              </p>

              <p className="text-[#56635d]">
                For more info, here&apos;s my{" "}
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
            <div className="pl-12 flex gap-6">
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
            <div className="pl-12 pt-8">
              <p className="text-gray-500">© 2023 Chandan Verma</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-[#405049]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-md border border-[#0a3028]/15 bg-[#fffaf4]/85 p-3 text-[#0a3028] shadow-sm transition-all placeholder:text-[#78837e] focus:outline-none focus:ring-2 focus:ring-[#0a5a43]"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-[#405049]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#0a3028]/15 bg-[#fffaf4]/85 p-3 text-[#0a3028] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0a5a43]"
                />
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-[#405049]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#0a3028]/15 bg-[#fffaf4]/85 p-3 text-[#0a3028] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0a5a43]"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[#405049]">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full resize-none rounded-md border border-[#0a3028]/15 bg-[#fffaf4]/85 p-3 text-[#0a3028] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0a5a43]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="rounded-full bg-[#0a5a43] px-8 py-3 font-medium text-white transition-all hover:bg-[#003e32]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </form>
            {submitStatus && (
              <p className="mt-4 text-[#56635d]">{submitStatus}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
