import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];    

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#08101E]/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0D9488] font-mono text-sm font-bold text-[#08101E] shadow-[0_0_20px_rgba(56,189,248,0.3)]">AJ</span>
          <span className="hidden font-mono text-sm font-semibold tracking-wide text-slate-100 sm:block">anurag<span className="text-[#38BDF8]">.dev</span></span>
        </a>

        <button type="button" aria-label="Toggle navigation" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-[#38BDF8] hover:text-[#38BDF8] md:hidden">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>

        <div className={`${isOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-2 border-b border-slate-800 bg-[#08101E] px-6 py-5 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)} className="font-mono text-xs uppercase tracking-widest text-slate-400 transition hover:text-[#38BDF8]">{label}</a>
          ))}
          <a href="#resume" onClick={() => setIsOpen(false)} className="mt-2 rounded-lg border border-[#38BDF8]/60 px-4 py-2 text-center font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8] transition hover:bg-[#38BDF8] hover:text-[#08101E] md:mt-0">Resume <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;