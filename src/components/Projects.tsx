function ProjectIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    image: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    cart: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    camera: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    zap: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    home: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  };
  return <>{icons[icon]}</>;
}

const projects = [
  {
    title: "Image Captioning Website",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    description: "AI-powered platform that generates descriptive captions for uploaded images using deep learning models.",
    url: "https://imcu-gulf.vercel.app/",
    gradient: "from-blue-500 to-cyan-500",
    icon: "image",
  },
  {
    title: "E-Commerce Website",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    description: "Full-featured online store with product catalog, cart management, and seamless checkout experience.",
    url: "https://jaay-s-attire-428r.vercel.app/",
    gradient: "from-purple-500 to-pink-500",
    icon: "cart",
  },
  {
    title: "Cloudinary Photo App",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    description: "Photo management app leveraging Cloudinary for image uploads, transformations, and responsive delivery.",
    url: "https://store-memories-tan.vercel.app/",
    gradient: "from-green-500 to-emerald-500",
    icon: "camera",
  },
  {
    title: "IT Services Provider",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    description: "Modern landing page for an IT services company showcasing solutions and consulting expertise.",
    url: "https://machknowsoftt-y5x6.vercel.app/",
    gradient: "from-orange-500 to-red-500",
    icon: "zap",
  },
  {
    title: "Rental Price Predictor",
    tech: ["Python", "Streamlit", "Scikit-Learn"],
    description: "ML-powered tool that predicts rental prices based on property features, location, and market trends.",
    url: "https://rental-price-predictor-ndcrdftmyutrvwve9yjdkr.streamlit.app/",
    altUrl: "https://rental-price-predictor.vercel.app/",
    gradient: "from-violet-500 to-indigo-500",
    icon: "home",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          Portfolio
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Featured Projects
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
              <span className="relative transition-transform duration-500 group-hover:scale-110">
                <ProjectIcon icon={project.icon} />
              </span>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                {project.title}
              </h3>
              <p className="mb-4 min-h-[2.5rem] text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition-all duration-200 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-900/30 dark:text-indigo-300 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">
                Live Demo
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
