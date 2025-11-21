import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(900px_circle_at_90%_20%,rgba(56,189,248,0.15),transparent_50%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-100/70">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-sm text-blue-100/70">Built with care • Responsive by default</div>
        </div>
      </footer>
    </div>
  )
}

export default App
