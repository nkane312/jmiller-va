import Link from 'next/link';

type Demo = {
	slug: string;
	published: boolean;
	title: string;
	description: string;
	date: Date;
};

type Props = {
	demo: Demo;
};

export const Article: React.FC<Props> = ({ demo }) => {
	return (
		<Link href={`/demos/${demo.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{demo.published ? (
							<time dateTime={new Date(demo.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, {
									dateStyle: 'medium',
								}).format(new Date(demo.date))}
							</time>
						) : null}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{demo.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{demo.description}
				</p>
			</article>
		</Link>
	);
};
