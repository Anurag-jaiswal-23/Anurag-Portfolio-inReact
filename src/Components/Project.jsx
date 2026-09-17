import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio showcasing skills, experience, and featured work.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "#",
  },
  {
    title: "Task Manager",
    description:
      "A clean task management app for organizing daily goals and tracking progress.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "E-commerce Store",
    description:
      "A modern shopping experience with product browsing, filtering, and a cart flow.",
    technologies: ["React", "API", "Responsive UI"],
    link: "#",
  },
];

function Project() {
  return (
    <section
      id="projects"
      className="bg-[#08101E] px-6 py-20 text-[#F8FAFC] sm:px-10 lg:px-16"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-[#38BDF8]">
          My work
        </p>
        <h2 id="projects-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#94A3B8]">
          Here are a few projects I have built using modern web technologies.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className="group rounded-2xl border border-[#1E293B] bg-[#0E1B2E]/80 p-7 shadow-lg shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/60 hover:shadow-[#38BDF8]/10"
              key={project.title}
            >
              <div className="flex h-full flex-col">
                <span className="font-mono text-sm text-[#38BDF8]">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-semibold text-[#F8FAFC]">{project.title}</h3>
                <p className="mt-4 leading-7 text-[#94A3B8]">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 px-3 py-1 font-mono text-xs text-[#38BDF8]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  className="mt-auto pt-8 font-medium text-[#38BDF8] transition hover:text-[#F8FAFC]"
                  aria-label={`View ${project.title}`}
                >
                  View project <span className="ml-1 inline-block transition group-hover:translate-x-1" aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
