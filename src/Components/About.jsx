const About = () => {
	const highlights = [
		{ value: "2022–2025", label: "United Institute of Management" },
		{ value: "Coursework", label: "Bachelor of Computer Applications" },
		{ value: "Open", label: "To opportunities" },
	];

	const skills = [
		"Python",
		"JavaScript",
		"React",
		"Node.js",
		"Express.js",
		"MongoDB",
		"HTML",
		"CSS",
		"SQL",
	];

	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className="relative overflow-hidden bg-[#08101E] px-6 py-20 text-[#F8FAFC] sm:px-10 lg:px-20"
		>
			<div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(56,189,248,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,.12)_1px,transparent_1px)] [background-size:48px_48px]" />

			<div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
				<div>
					<p className="mb-4 font-mono text-sm uppercase tracking-[.3em] text-[#38BDF8]">
						// About me
					</p>
					<h2 id="about-heading" className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
						Building useful technology with curiosity and purpose.
					</h2>
					<p className="mt-6 max-w-2xl text-base leading-8 text-[#94A3B8]">
						I&apos;m Anurag Jaiswal, an aspiring full-stack developer. I enjoy turning complex problems into clean, reliable products—from intelligent data solutions to thoughtful web experiences.
					</p>
					<p className="mt-4 max-w-2xl text-base leading-8 text-[#94A3B8]">
						My foundation in computer applications, hands-on projects, and collaborative leadership continues to shape the way I learn, build, and contribute.
					</p>

					<div className="mt-8 grid gap-3 sm:grid-cols-3">
						{highlights.map((item) => (
							<div key={item.label} className="rounded-xl border border-[#1E293B] bg-[#0E1B2E]/70 p-4">
								<p className="font-mono text-sm font-semibold text-[#38BDF8]">{item.value}</p>
								<p className="mt-2 text-xs leading-5 text-[#94A3B8]">{item.label}</p>
							</div>
						))}
					</div>
				</div>

				<div className="rounded-2xl border border-[#1E293B] bg-[#0E1B2E]/80 p-6 shadow-[0_0_40px_rgba(56,189,248,.08)] backdrop-blur-sm sm:p-8">
					<div className="mb-6 flex items-center gap-3">
						<span className="h-3 w-3 animate-pulse rounded-full bg-[#0D9488] shadow-[0_0_14px_#0D9488]" />
						<span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">Currently learning & building</span>
					</div>
					<h3 className="text-2xl font-semibold">My technical toolkit</h3>
					<div className="mt-6 flex flex-wrap gap-3">
						{skills.map((skill) => (
							<span key={skill} className="rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/[.08] px-4 py-2 font-mono text-sm text-[#BAE6FD]">
								{skill}
							</span>
						))}
					</div>
					<div className="mt-8 border-t border-[#1E293B] pt-6">
						<p className="text-sm leading-7 text-[#94A3B8]">
							Beyond code, I enjoy creating videos , exploring new technologies. I&apos;m always eager to learn and collaborate on innovative solutions.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
