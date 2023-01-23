import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="w-full bg-black text-white p-0.5  fixed">
			<div className="flex py-0 px-16 justify-between items-center h-20">
				<div className="flex items-center gap-4 md:gap-10 font-semibold">
					<img
						src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
						alt="logo"
						className="w-16 p-4"
					/>
					<Link href="/">Product</Link>
					<Link href="/">Our Story</Link>
					<Link href="/">Resources</Link>
				</div>
				<button className="bg-blue-600 rounded-lg px-9 py-4 font-semibold hover:shadow-white hover:shadow-md">Book a demo</button>
			</div>
		</nav>
	);
};

export default Navbar;
