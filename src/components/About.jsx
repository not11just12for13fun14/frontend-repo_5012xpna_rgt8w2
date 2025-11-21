export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(56,189,248,0.15),transparent_50%),radial-gradient(600px_circle_at_90%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-blue-100/90">
              I’m a product-minded engineer focused on crafting fast, thoughtful experiences. My work spans full‑stack web, design systems, and creative tooling. I thrive where code meets creativity.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-blue-100/90">
                <p className="font-semibold text-white">Focus</p>
                <p>Front-end architecture, UX, design systems</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-blue-100/90">
                <p className="font-semibold text-white">Values</p>
                <p>Curiosity, clarity, kindness, craft</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-blue-100/90">
                <p className="font-semibold text-white">Currently</p>
                <p>Building playful tools with modern stacks</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-blue-100/90">
                <p className="font-semibold text-white">Location</p>
                <p>Remote • Open to opportunities</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Design Systems', desc: 'Reusable UI kits, tokens, accessibility first' },
                { title: 'Front-end Engineering', desc: 'React, animations, performance, SSR' },
                { title: 'Creative Tech', desc: '3D, shaders, interactions, prototyping' },
                { title: 'Product Strategy', desc: 'Discovery, roadmaps, fast iteration' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5">
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="mt-2 text-sm text-blue-100/90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
