import Navbar from './components/Navbar'
import Section3D from './components/Section3D'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(900px_circle_at_90%_20%,rgba(56,189,248,0.15),transparent_50%)]" />

      <Navbar />

      <main className="relative">
        <Section3D
          id="home"
          title="Welcome"
          subtitle="An immersive, 3D‑first portfolio experience"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
        />
        <Section3D
          id="about"
          title="About"
          subtitle="A quick snapshot of who I am and what I love to build"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
        />
        <Section3D
          id="projects"
          title="Projects"
          subtitle="Selected work told through playful 3D backdrops"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
        />
        <Section3D
          id="skills"
          title="Skills"
          subtitle="Tools, stacks, and specialties — visualized in 3D"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
        />
        <Section3D
          id="contact"
          title="Contact"
          subtitle="Say hello — the form lives in the panel on top of the scene"
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
        />
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
