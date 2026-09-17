import React from "react";

const skillGroups = [
  {
    title: "Languages",
    icon: "</>",
    skills: [  "HTML5" ,"CSS3","JavaScript", "Python", "Java", "SQL", ],
  },
  {
    title: "Web Development",
    icon: "⌘",
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: "⚙",
    skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <style>{`
				.skills-section { background: #08101e; color: #f8fafc; padding: 96px 7%; position: relative; overflow: hidden; }
				.skills-section:before { content: ''; position: absolute; inset: 0; opacity: .22; pointer-events: none; background-image: linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px); background-size: 42px 42px; mask-image: linear-gradient(to bottom, #000, transparent 85%); }
				.skills-inner { max-width: 1180px; margin: auto; position: relative; }
				.skills-kicker { color: #38bdf8; font: 700 12px/1.2 monospace; letter-spacing: .2em; text-transform: uppercase; margin: 0 0 15px; }
				.skills-title { font: 800 clamp(2rem, 4vw, 3.3rem)/1.1 Inter, sans-serif; margin: 0; letter-spacing: -.04em; }
				.skills-title span { color: #38bdf8; }
				.skills-intro { color: #94a3b8; max-width: 600px; line-height: 1.7; margin: 18px 0 48px; }
				.skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
				.skill-card { background: rgba(14,27,46,.78); border: 1px solid #1e293b; border-radius: 14px; padding: 25px 22px; transition: .25s ease; backdrop-filter: blur(8px); }
				.skill-card:hover { border-color: #38bdf8; transform: translateY(-5px); box-shadow: 0 12px 32px rgba(56,189,248,.12); }
				.skill-icon { color: #38bdf8; font: 700 20px monospace; height: 38px; display: block; }
				.skill-card h3 { font-size: 17px; margin: 4px 0 20px; }
				.skill-list { display: flex; flex-wrap: wrap; gap: 9px; padding: 0; margin: 0; list-style: none; }
				.skill-list li { color: #cbd5e1; background: rgba(56,189,248,.08); border: 1px solid rgba(56,189,248,.2); border-radius: 999px; font: 12px monospace; padding: 8px 11px; }
				@media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
				@media (max-width: 540px) { .skills-section { padding: 70px 6%; } .skills-grid { grid-template-columns: 1fr; } }
			`}</style>
      <div className="skills-inner">
        <p className="skills-kicker">03 / Technical Stack</p>
        <h2 className="skills-title" id="skills-title">Skills that turn ideas into <span>impact.</span></h2>
        <p className="skills-intro">
          A practical toolkit spanning intelligent systems, modern web development, and data-driven problem solving.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-icon" aria-hidden="true">{group.icon}</span>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
