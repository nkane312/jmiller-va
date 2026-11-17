type Demo = {
	slug: string;
	published: boolean;
	title: string;
	description: string;
	date?: Date;
};

type Props = {
	demo: Demo;
};

export type { Demo, Props };
