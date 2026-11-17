import { notFound } from 'next/navigation';
import data from '../../content/demos/demo-list.json';
import { Navigation } from '@/app/components/Navigation';
// import Image from 'next/image';
import { Suspense } from 'react';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
	const demos = [];
	demos.push(data.demos);

	const demoSlugs = demos[0].map((demo) => {
		return { slug: demo.slug };
	});
	return demoSlugs;
}

export default async function PostPage({ params }: { params: Params }) {
	const { slug } = await params;

	const demos = [];
	demos.push(data.demos);
	const demo = demos[0].find((demo) => demo.slug === slug);

	if (!demo) {
		notFound();
	}

	return (
		<div className="min-h-screen">
			<Navigation />
			<main className="relative min-h-screen bg-linear-to-tl from-mauve-950 via-mauve-900 to-mauve-950">
				<Suspense
					fallback={
						<div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
							Loading...
						</div>
					}
				>
					<div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
						<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
							<div className="mx-auto max-w-2xl lg:mx-0">
								<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
									{demo.title}
								</h1>
								{demo.published ? (
									<p className="mt-6 text-lg leading-8 text-zinc-300">
										<time dateTime={new Date(demo.date).toISOString()}>
											{Intl.DateTimeFormat(undefined, {
												dateStyle: 'medium',
											}).format(new Date(demo.date))}
										</time>
									</p>
								) : null}

								<p className="mt-6 text-lg leading-8 text-zinc-300">{demo.description}</p>
							</div>

							<div className="mx-auto mt-10 w-full max-w-2xl lg:mx-0">
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
							</div>
						</div>
					</div>
					{/* <div className="bg-zinc-50 px-4 py-12 mx-auto flex justify-center">
						<Image
							className="rounded-md border border-zinc-200"
							width={800}
							height={800}
							alt={'Screenshot of ' + demo.title}
							src={'/' + demo.slug + '.png'}
						/>
					</div> */}
				</Suspense>
			</main>
		</div>
	);
}
