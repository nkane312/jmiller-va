'use client';
import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';
import Image from 'next/image';

export default function Contact() {
	return (
		<div className="bg-linear-to-tl from-mauve-950 via-mauve-900 to-mauve-950">
			<Navigation />
			<main className="min-h-screen px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">About</h1>
				</div>
				<div className="w-full h-px bg-zinc-800" />
				<div className="container flex items-center justify-center px-4 mx-auto">
					<div className="mx-auto grid w-full grid-cols-1 gap-8 sm:mt-0 md:grid-cols-12 lg:gap-16">
						<div className="md:col-span-3">
							<Image
								className="h-auto w-full rounded-md"
								width={300}
								height={300}
								alt="Jonathan Miller Headshot"
								src="/images/headshot.png"
								unoptimized={true}
							/>
						</div>
						<div className="md:col-span-9">
							<Card>
								<div className="z-10 flex flex-col items-center border border-zinc-600 rounded-md p-6">
									<p className="mb-4 text-xl font-normal text-zinc-100">
										Jonathan Miller, voice actor with a background in commercial content production,
										audio and video editing, and creative storytelling. My interests include
										commercial voiceover, animation, and video game character performance.
									</p>

									<p className="mb-4 text-xl font-normal text-zinc-100">
										Through previous professional roles, I&rsquo;ve independently produced
										informational and promotional content for businesses, handling everything from
										voiceover recording and audio editing to video production and final delivery.
										I&rsquo;ve also worked in talent coordination and team management, giving me
										experience with both the creative and organizational sides of production.
									</p>

									<p className="mb-4 text-xl font-normal text-zinc-100">
										My performance background includes acting and modeling training, voiceover
										coaching, background work in a major motion picture, and commercial casting
										experience.
									</p>

									<p className="mb-4 text-xl font-normal text-zinc-100">
										Outside of production, I&rsquo;ve been passionate about storytelling and
										character creation since discovering Dungeons & Dragons at eight years old. That
										interest, alongside my love of video games, continues to inspire my approach to
										character performance and worldbuilding
									</p>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
