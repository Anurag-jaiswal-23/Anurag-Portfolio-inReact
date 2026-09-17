const Footer = () => {
	return (
		<footer className="border-t border-slate-800 bg-[#08101E] px-6 py-10 text-slate-400 sm:px-10 lg:px-16">
			<div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
				<div>
					<a href="#home" className="font-mono text-lg font-bold tracking-wide text-slate-100">
						<span className="text-sky-400">&lt;</span>Portfolio<span className="text-sky-400">/&gt;</span>
					</a>
					<p className="mt-3 max-w-sm text-sm leading-6">
						Building intelligent, reliable, and impactful digital experiences.
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-5 text-sm">
					<a href="#about" className="transition-colors hover:text-sky-400">About</a>
					<a href="#projects" className="transition-colors hover:text-sky-400">Projects</a>
					<a href="#contact" className="transition-colors hover:text-sky-400">Contact</a>
					<a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-sky-400">GitHub</a>
					<a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-sky-400">LinkedIn</a>
				</div>
			</div>

			<div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-slate-800 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
				<p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
				<p className="font-mono uppercase tracking-wider text-slate-500">Designed &amp; built with purpose</p>
			</div>
		</footer>
	);
};

export default Footer;
