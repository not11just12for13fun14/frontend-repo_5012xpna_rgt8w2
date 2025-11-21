import { useState } from 'react'
import Navbar from './components/Navbar'
import Section3D from './components/Section3D'

function App() {
  // Shared helpers
  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openLink = (url) => window.open(url, '_blank')

  // Utility: map Spline object names to actions
  const makeSplineHandler = (map) => (e) => {
    try {
      const name = e?.target?.name || e?.target?.id || ''
      // Debug: see what object was clicked
      if (name) console.debug('[Spline click]', name)
      const action = map[name]
      if (!action) return
      const [type, value] = action
      switch (type) {
        case 'scroll':
          scrollToId(value)
          break
        case 'link':
          openLink(value)
          break
        case 'toggleAbout':
          setShowAboutMore((v) => !v)
          break
        case 'openProject':
          setOpenProject((cur) => (cur === value ? null : value))
          break
        case 'skillTab':
          setSkillTab(value)
          break
        case 'email':
          window.open(`mailto:${value}`)
          break
        default:
          break
      }
    } catch (err) {
      console.warn('Spline handler error', err)
    }
  }

  // About state
  const [showAboutMore, setShowAboutMore] = useState(false)

  // Projects state
  const [openProject, setOpenProject] = useState(null)

  // Skills state
  const [skillTab, setSkillTab] = useState('frontend')

  // Contact state
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus('Thanks! I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(900px_circle_at_90%_20%,rgba(56,189,248,0.15),transparent_50%)]" />

      <Navbar />

      <main className="relative">
        {/* HOME */}
        <Section3D
          id="home"
          title="Welcome"
          subtitle="An immersive, 3D‑first portfolio experience"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          onMouseDown={makeSplineHandler({
            ProjectsButton: ['scroll', 'projects'],
            ContactButton: ['scroll', 'contact'],
            AboutButton: ['scroll', 'about'],
            AboutToggle: ['toggleAbout'],
          })}
        >
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => scrollToId('projects')} className="pointer-events-auto inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white font-medium shadow-lg shadow-blue-600/30 hover:brightness-110">
              View Projects
            </button>
            <button onClick={() => scrollToId('contact')} className="pointer-events-auto inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">
              Contact Me
            </button>
            <button onClick={() => setShowAboutMore(true) || scrollToId('about')} className="pointer-events-auto inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">
              About Me
            </button>
          </div>
        </Section3D>

        {/* ABOUT */}
        <Section3D
          id="about"
          title="About"
          subtitle="A quick snapshot of who I am and what I love to build"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          onMouseDown={makeSplineHandler({
            ReadMore: ['toggleAbout'],
            ViewSkills: ['scroll', 'skills'],
          })}
        >
          <div className="space-y-3 max-w-2xl">
            <p className="text-blue-100/90">I craft delightful, performant interfaces and solid APIs. I enjoy 3D interactions, thoughtful motion, and clean code.</p>
            {showAboutMore && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-blue-100/90">
                Previously, I led front‑end at a startup, shipped design systems, and built realtime dashboards. In my free time, I tinker with Spline scenes and WebGL.
              </div>
            )}
            <div className="flex gap-3">
              <button onClick={() => setShowAboutMore((v) => !v)} className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white font-medium shadow-lg shadow-blue-600/30 hover:brightness-110">
                {showAboutMore ? 'Show less' : 'Read more'}
              </button>
              <button onClick={() => scrollToId('skills')} className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">
                View Skills
              </button>
            </div>
          </div>
        </Section3D>

        {/* PROJECTS */}
        <Section3D
          id="projects"
          title="Projects"
          subtitle="Selected work told through playful 3D backdrops"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          onMouseDown={makeSplineHandler({
            Card1: ['openProject', 'p1'],
            Card2: ['openProject', 'p2'],
            Card3: ['openProject', 'p3'],
            CaseStudy: ['scroll', 'contact'],
          })}
        >
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { key: 'p1', name: '3D Portfolio', desc: 'Spline + React + Tailwind', link: 'https://github.com/' },
              { key: 'p2', name: 'Realtime Dashboard', desc: 'WebSockets + Charts', link: 'https://github.com/' },
              { key: 'p3', name: 'AI Helper', desc: 'FastAPI + Vector Search', link: 'https://github.com/' },
            ].map((p) => (
              <div key={p.key} className={`rounded-xl border transition-colors ${openProject === p.key ? 'border-cyan-400/50 bg-cyan-400/5' : 'border-white/10 bg-white/5'}`}>
                <button
                  onClick={() => setOpenProject(openProject === p.key ? null : p.key)}
                  className="w-full text-left p-4"
                >
                  <div className="font-semibold text-white">{p.name}</div>
                  <div className="text-sm text-blue-100/80">{p.desc}</div>
                </button>
                {openProject === p.key && (
                  <div className="px-4 pb-4 pt-0 text-sm text-blue-100/90 space-y-2">
                    <p>Quick notes about the build, stack, and impact. Ask me for a deep‑dive!</p>
                    <div className="flex gap-2">
                      <a href={p.link} target="_blank" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1.5 text-white text-sm shadow-lg shadow-blue-600/30 hover:brightness-110">Open</a>
                      <button onClick={() => scrollToId('contact')} className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-white text-sm hover:bg-white/10">Request case study</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section3D>

        {/* SKILLS */}
        <Section3D
          id="skills"
          title="Skills"
          subtitle="Tools, stacks, and specialties — visualized in 3D"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          onMouseDown={makeSplineHandler({
            TabFrontend: ['skillTab', 'frontend'],
            TabBackend: ['skillTab', 'backend'],
            TabDevOps: ['skillTab', 'devops'],
          })}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'frontend', label: 'Frontend' },
                { id: 'backend', label: 'Backend' },
                { id: 'devops', label: 'DevOps' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSkillTab(t.id)}
                  className={`rounded-lg px=3 py-1.5 text-sm border ${skillTab === t.id ? 'bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent text-white' : 'bg-white/5 border-white/15 text-white hover:bg-white/10'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {(
                skillTab === 'frontend'
                  ? [
                      ['React / Vite', 95],
                      ['Tailwind CSS', 90],
                      ['Framer Motion', 85],
                    ]
                  : skillTab === 'backend'
                  ? [
                      ['FastAPI', 90],
                      ['MongoDB', 85],
                      ['Auth / REST', 80],
                    ]
                  : [
                      ['CI/CD', 80],
                      ['Docker', 75],
                      ['Cloud', 70],
                    ]
              ).map(([label, pct]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1"><span>{label}</span><span>{pct}%</span></div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section3D>

        {/* CONTACT */}
        <Section3D
          id="contact"
          title="Contact"
          subtitle="Say hello — the form lives in the panel on top of the scene"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          onMouseDown={makeSplineHandler({
            EmailButton: ['email', 'you@email.com'],
            LinkedInButton: ['link', 'https://www.linkedin.com'],
          })}
        >
          <div className="grid lg:grid-cols-2 gap-5 max-w-3xl">
            <div>
              <p className="text-blue-100/90">Have a project, role, or idea in mind? Drop a note and I’ll reply within a day.</p>
              {status && <p className="mt-3 text-sm text-cyan-300">{status}</p>}
              <div className="mt-3 flex gap-2">
                <button onClick={() => window.open('mailto:you@email.com')} className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white hover:bg-white/10">
                  Email
                </button>
                <button onClick={() => window.open('https://www.linkedin.com', '_blank')} className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white hover:bg-white/10">
                  LinkedIn
                </button>
              </div>
            </div>

            <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-blue-100/90">Name</label>
                  <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-blue-100/90">Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="name@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-blue-100/90">Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={onChange} required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell me about your idea..." />
                </div>
              </div>
              <div className="mt-3">
                <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-white font-medium shadow-lg shadow-blue-600/30 hover:brightness-110 w-full sm:w-auto">Send</button>
              </div>
            </form>
          </div>
        </Section3D>
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-100/70">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-sm text-blue-100/70">3D‑first design • Responsive by default</div>
        </div>
      </footer>
    </div>
  )
}

export default App
