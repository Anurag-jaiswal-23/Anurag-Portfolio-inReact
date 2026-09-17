const Contact = () => {
	return (
		<section
			id="contact"
			className="relative overflow-hidden bg-[#08101E] px-6 py-20 text-[#F8FAFC] sm:px-10 lg:px-16"
		>
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

			<div className="relative mx-auto max-w-6xl">
				<div className="mb-12 max-w-2xl">
					<p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-[#38BDF8]">
						Let&apos;s connect
					</p>
					<h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
						Have a project in mind?
					</h2>
					<p className="mt-5 leading-7 text-[#94A3B8]">
						I&apos;m open to opportunities, collaborations, and conversations about
						building meaningful digital experiences.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div className="rounded-2xl border border-[#1E293B] bg-[#0E1B2E]/80 p-6 shadow-2xl shadow-cyan-950/20 sm:p-8">
						<div className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#0D9488]">
							<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#0D9488] shadow-[0_0_14px_#0D9488]" />
							Status: open to work
						</div>
						<div className="space-y-6 text-sm">
							<a className="group block" href="mailto:hello@example.com">
								<span className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#94A3B8]">Email</span>
								<span className="text-[#F8FAFC] transition-colors group-hover:text-[#38BDF8]">jaiswalanurag848@gmial.com</span>
							</a>
							<div>
								<span className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#94A3B8]">Location</span>
								<span>Prayagraj, Uttar Pradesh, India</span>
							</div>
						</div>
					</div>

					<form className="rounded-2xl border border-[#1E293B] bg-[#0E1B2E]/80 p-6 sm:p-8">
						<div className="grid gap-5 sm:grid-cols-2">
							<label className="text-sm text-[#94A3B8]">
								Name
								<input type="text" name="name" required placeholder="Your name" className="mt-2 w-full rounded-lg border border-[#1E293B] bg-[#08101E] px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-slate-600 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]" />
							</label>
							<label className="text-sm text-[#94A3B8]">
								Email
								<input type="email" name="email" required placeholder="you@example.com" className="mt-2 w-full rounded-lg border border-[#1E293B] bg-[#08101E] px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-slate-600 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]" />
							</label>
						</div>
						<label className="mt-5 block text-sm text-[#94A3B8]">
							Message
							<textarea name="message" required rows="5" placeholder="Tell me about your project..." className="mt-2 w-full resize-none rounded-lg border border-[#1E293B] bg-[#08101E] px-4 py-3 text-[#F8FAFC] outline-none transition placeholder:text-slate-600 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]" />
						</label>
						<button type="submit" className="mt-6 rounded-lg bg-[#38BDF8] px-6 py-3 font-semibold text-[#08101E] transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25">
							Send message <span aria-hidden="true">→</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
