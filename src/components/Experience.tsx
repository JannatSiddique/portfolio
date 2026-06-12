const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Godaitec Pvt. Ltd.",
    period: "Sept 2025 - Present",
    tech: "React, TypeScript, Laravel, PHP, Redux, Tailwind CSS, Redis",
    highlights: [
      "Built a scalable SaaS logistics platform with React, TypeScript & Tailwind CSS",
      "Designed reusable modular UI components with component-driven architecture",
      "Optimized performance via Google Lighthouse — improved Core Web Vitals & accessibility",
      "Implemented Redis caching for database queries, cutting response times",
      "Built cross-origin auth with BroadcastChannel API, cookie sessions & CORS",
      "Developed automated email workflows validated with MailHog",
      "Role-based rendering across Invoice, Payment & Ledger dashboards",
    ],
  },
  {
    role: "Software Engineer Apprentice",
    company: "Godaitec Pvt. Ltd.",
    period: "June 2025 - Aug 2025",
    tech: "React, Express.js, Tailwind CSS, Material UI, Cypress, TestRail",
    highlights: [
      "Revamped a logistics portal with a modern React-based frontend",
      "Built an attendance management app with React, Tailwind & Express.js",
      "Designed RESTful APIs with Express.js for full-stack integration",
      "Applied test case design, defect tracking & QA workflows with TestRail",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Godaitec Pvt. Ltd.",
    period: "March 2025 - May 2025",
    tech: "React, JavaScript, Bootstrap, WordPress, Git",
    highlights: [
      "Built responsive UIs with HTML, CSS, Bootstrap & JavaScript",
      "Used Git for version control and team-based collaboration",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          Career
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Work Experience
        </h2>
      </div>
      <div className="relative space-y-0">
        {experiences.map((exp, i) => (
          <div key={i} className="relative flex gap-8 pb-12 last:pb-0">
            <div className="flex flex-col items-center">
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              {i < experiences.length - 1 && (
                <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-indigo-400 to-indigo-200 dark:from-indigo-600 dark:to-indigo-900" />
              )}
            </div>
            <div className="flex-1 rounded-2xl border border-zinc-200 bg-white p-6 card-hover dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 sm:mt-0 dark:bg-indigo-950/50 dark:text-indigo-300">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {exp.period}
                </span>
              </div>
              <p className="mb-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {exp.company}
              </p>
              <p className="mb-4 text-xs text-zinc-400 dark:text-zinc-500">
                {exp.tech}
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
