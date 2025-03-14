import Link from "next/link";

const Header = () => {
	return (
		<header className="bg-neutral-950 sticky top-0 z-50 py-4 px-6 flex items-center justify-between">
			<div className="text-xl ">
				<Link href="/">Home</Link>
			</div>
			<nav className="space-x-6">
				<Link href="/">Work</Link>
				<Link href="/">About</Link>
				<Link href="#contact-section">Contact</Link>
			</nav>
		</header>
	);
};

export default Header;
