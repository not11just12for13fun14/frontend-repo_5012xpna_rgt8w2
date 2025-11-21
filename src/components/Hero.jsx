import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="py-16">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-blue-100">
              Tech • Portfolio • Interactive • Modern
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              A playful, modern space to showcase your craft
            </h1>
            <p className="mt-4 text-blue-100/90 max-w-xl">
              I blend engineering, design, and a love for emerging tech to build delightful, accessible products. Dive into my world—projects, process, and personality.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-600/30 hover:brightness-110">
                Explore Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
    </section>
  )
}
