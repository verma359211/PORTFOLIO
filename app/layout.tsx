import type { Metadata } from "next";
import { ShootingStars } from "@/../components/ui/shooting-stars";
import { StarsBackground } from "@/../components/ui/stars-background";

import "./globals.css";
// import { Bebas_Neue } from "@next/font/google";

// export const bebasNeue = Bebas_Neue({
// 	subsets: ["latin"],
// 	weight: "400",
// });

export const metadata: Metadata = {
	title: "vermaji ka PORTFOLIO",
	description: "Generated by chandan verma",
	icons: {
		icon: "/favicon.ico", // Path to your favicon file
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" className="text-white">
			<head>
				<meta name="description" content="Portfolio of Chandan Verma" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Explicit favicon link */}
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<ShootingStars className="fixed inset-0 -z-10 bg-cover bg-center" />
				<StarsBackground className="fixed inset-0 -z-10 bg-cover bg-center" />
				{children}
			</body>
		</html>
	);
}
