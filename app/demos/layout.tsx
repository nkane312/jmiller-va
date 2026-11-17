export default function DemosLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-linear-to-tl from-mauve-950 via-mauve-900 to-mauve-950">{children}</div>
	);
}
