import Link from 'next/link';
import Image from 'next/image';
import data from './content/demos/demo-list.json';
import { Card } from './components/Card';
// import Particles from "./components/particles";

const navigation = [
	{ name: 'About', href: '/about', target: '_self' },
	{ name: 'Demos', href: '/demos', target: '_self' },
	{ name: 'Contact', href: '/contact', target: '_self' },
];

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-linear-to-tl from-mauve-950 via-mauve-900 to-mauve-950">
			<div className="my-2 hidden md:block">
				<h1 className="py-3.5 px-0.5 z-10 text-5xl font-bold text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-7xl whitespace-nowrap bg-clip-text ">
					Jonathan Miller
				</h1>
			</div>
			<nav className="my-4 animate-fade-in">
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
			<div className="px-4 py-2 md:py-8 mx-auto flex flex-col w-full justify-between items-center">
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

				<div className="sm:block md:hidden my-2 flex-1 text-center animate-fade-in">
					<h1 className="text-2xl font-bold text-zinc-100 ">Jonathan Miller</h1>
				</div>
				<div className="hidden md:block my-2 flex-1 text-center animate-fade-in">
					<h2 className="text-2xl font-bold text-zinc-100 ">Voice Actor</h2>
				</div>
			</div>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<section className="w-full max-w-5xl px-6 py-2 md:py-8" aria-labelledby="demos-heading">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{data.demos.map((demo) => (
						<Card key={demo.slug}>
							<article className="relative h-full w-full p-6">
								<h3 className="mb-4 text-2xl font-bold text-zinc-100 font-display">{demo.title}</h3>
								<audio
									controls
									preload="metadata"
									className="w-full"
									aria-label={`${demo.title} audio`}
								>
									<source src={`/audio/${demo.audio}`} type="audio/mpeg" />
									Your browser does not support audio playback.{' '}
									<a href={`/audio/${demo.audio}`}>Download the audio file</a>.
								</audio>
							</article>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}
