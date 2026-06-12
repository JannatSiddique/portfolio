const skillCategories = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "Python", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Bootstrap"],
  },
  {
    label: "Backend & APIs",
    skills: ["REST APIs", "Laravel", "Express.js", "FastAPI"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "Docker", "Redis", "MySQL"],
  },
  {
    label: "AI & ML",
    skills: ["Python", "Streamlit", "Scikit-Learn", "Pandas"],
  },
  {
    label: "Other",
    skills: ["Agile", "Testing", "CI/CD", "Accessibility"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          Expertise
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Skills & Technologies
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => (
          <div
            key={cat.label}
            className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
