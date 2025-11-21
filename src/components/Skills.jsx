export default function Skills() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Design Systems', level: 88 },
    { name: 'Framer Motion', level: 82 },
    { name: 'Three.js', level: 70 },
  ]

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Skills</h2>
        <p className="mt-2 text-blue-100/90 max-w-2xl">A balanced toolkit spanning front‑end engineering, product thinking, and creative technology.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{s.name}</p>
                <span className="text-xs text-blue-100/80">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
