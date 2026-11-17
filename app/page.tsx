import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
// import Particles from "./components/particles";

const navigation = [
	{ name: 'Bio', href: '/bio', target: '_self' },
	{ name: 'Demos', href: '/demos', target: '_self' },
	{ name: 'Contact', href: '/contact', target: '_self' },
];

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-linear-to-tl from-mauve-950 via-mauve-900 to-mauve-950">
			<nav className="my-16 animate-fade-in">
				<div className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-300 text-zinc-200 font-semibold hover:text-yellow-200 hover:underline"
							target={item.target}
						>
							{item.name}
						</Link>
					))}
				</div>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			{/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}
			<div className="px-4 py-12 mx-auto flex flex-col w-full justify-between items-center">
				<div className="flex-1">
					<Image
						className="rounded-md"
						width={300}
						height={300}
						alt="Jonathan Miller Headshot"
						src="/images/headshot.png"
						unoptimized={true}
					/>
				</div>
				<div className="flex-1">
					<h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
						Jonathan Miller
					</h1>
				</div>
				<div className="my-16 flex-1 text-center animate-fade-in">
					<h2 className="text-2xl font-bold text-zinc-100 ">Voice Actor</h2>
				</div>
			</div>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
		</main>
	);
}
