
import profile from '../assets/profile.jpg'

const Hero = () => {

  return (
    <section id="home"  className="relative isolate overflow-hidden bg-[#08101E] px-6 py-24 text-[#F8FAFC] sm:px-10 lg:px-20 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-teal-400/20 bg-teal-400/5 px-4 py-2 font-mono text-xs tracking-[0.18em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400 shadow-[0_0_12px_#0D9488]" />
            OPEN TO WORK
          </div>

          <p className="mb-4 font-mono text-sm tracking-[0.3em] text-cyan-400">
            AMBITIOUS · PERSISTENT · CURIOUS
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Hi, I&apos;m <span className="text-cyan-400">Anurag Jaiswal.</span>
          </h1>
          <h2 className="mt-6 text-2xl font-semibold text-slate-300 sm:text-4xl">
            Full-Stack Developer
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#94A3B8] sm:text-lg">
            I build intelligent, reliable digital experiences by combining data,
            machine learning, and modern web technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-[#38BDF8] px-6 py-3 font-semibold text-[#08101E] transition hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]">
              View Projects <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] border border-cyan-400/20 rotate-6" />
          <div className="absolute -inset-4 rounded-[2rem] border border-teal-400/20 -rotate-6" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-[#0E1B2E]/80 p-3 shadow-2xl shadow-cyan-950/40">
            <img
              src={profile}
              alt="Anurag Jaiswal introduction"
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-0 left-7 rounded-lg border border-cyan-400/20 bg-[#08101E]/90 px-4 py-3 font-mono text-xs text-cyan-300 backdrop-blur">
              &lt; building the future /&gt;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
