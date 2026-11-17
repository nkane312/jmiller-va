import Link from 'next/link';
import React from 'react';
import data from '../content/demos/demo-list.json';
import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';

export default function DemosPage() {
	return (
		<div className="relative pb-16">
			<Navigation />
			<main className="w-screen h-screen overflow-hidden px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Demos</h1>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					{data.demos.map((demo) => (
						<Card key={demo.slug}>
							<Link href={`/demos/${demo.slug}`}>
								<article className="relative w-full h-full p-4 md:p-8">
									<div className="flex items-center justify-between gap-2">
										<div className="text-xs text-zinc-100">
											{demo.published ? (
												<time dateTime={new Date(demo.date).toISOString()}>
													{Intl.DateTimeFormat(undefined, {
														dateStyle: 'medium',
													}).format(new Date(demo.date))}
												</time>
											) : null}
										</div>
									</div>

									<h2
										id="featured-post"
										className="mt-4 mb-8 text-3xl font-bold text-zinc-100 group-hover:text-yellow-100 sm:text-4xl font-display"
									>
										{demo.title}
									</h2>
									{demo.description !== '[description]' ? (
										<p className="mt-4 font-semibold leading-8 duration-150 text-zinc-200 group-hover:text-zinc-100 mb-7">
											{demo.description}
										</p>
									) : null}
									<div className="absolute bottom-4 md:bottom-8">
										<p className="hidden text-zinc-200 hover:text-zinc-100 lg:block">
											View more <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								</article>
							</Link>
						</Card>
					))}
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />
			</main>
		</div>
	);
}
