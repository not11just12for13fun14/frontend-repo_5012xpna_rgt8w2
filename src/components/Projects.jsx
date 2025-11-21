import { useState } from 'react'

const demoProjects = [
  {
    title: 'Motion Studio',
    tags: ['React', 'Framer Motion', 'Design'],
    desc: 'A lightweight animation toolkit and component library for building fluid interfaces.',
    link: '#',
  },
  {
    title: 'Realtime Canvas',
    tags: ['WebGL', 'Collaboration', 'DX'],
    desc: 'Collaborative drawing and prototyping canvas powered by modern graphics APIs.',
    link: '#',
  },
  {
    title: 'Dev Notes',
    tags: ['Next.js', 'Markdown', 'OpenAI'],
    desc: 'Personal knowledge garden with semantic search and fast publishing pipeline.',
    link: '#',
  },
]

export default function Projects() {
  const [active, setActive] = useState(0)

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_80%_0%,rgba(14,165,233,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Projects</h2>
            <p className="mt-2 text-blue-100/90 max-w-2xl">A mix of experiments and production work that highlights craft, performance, and playful interactions.</p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {demoProjects.map((p, i) => (
            <button
              key={p.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5 text-left transition-all hover:scale-[1.01] ${active === i ? 'ring-2 ring-cyan-400/40' : ''}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{p.title}</p>
                <span className="text-xs text-cyan-300/80">View</span>
              </div>
              <p className="mt-2 text-sm text-blue-100/90">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-blue-100/90">{t}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
