export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          About
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Who I Am
        </h2>
      </div>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Associate Software Engineer with <strong className="text-zinc-900 dark:text-white">1.5 years</strong> of
            professional experience building scalable SaaS applications using
            React.js, TypeScript, Laravel, PHP, and REST APIs. Skilled in
            front-end and back-end development, API integration, authentication,
            Redis caching, email automation, and delivering MVPs from concept
            to production.
          </p>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            With <strong className="text-zinc-900 dark:text-white">3+ years</strong>{' '}overall in web development including
            practice projects, I&apos;m currently exploring AI agents and
            machine learning, because I believe in staying ahead with emerging
            technologies.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["React", "TypeScript", "Laravel", "Next.js", "Python", "AI Agents"].map((tech) => (
              <span key={tech} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-zinc-50 to-indigo-50 p-8 dark:from-zinc-900 dark:to-indigo-950/20 border border-zinc-200 dark:border-zinc-800">
          <h3 className="mb-6 text-lg font-semibold text-zinc-900 dark:text-white">
            Quick Facts
          </h3>
          <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-white">Education</p>
                <p>BS Software Engineering — Jinnah University for Women</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-white">Experience</p>
                <p>1.5 years at Godaitec Pvt. Ltd.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-white">Certifications</p>
                <p>AWS Cloud Foundations & QA Fundamentals</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-white">Currently Learning</p>
                <p>AI Agents & Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
