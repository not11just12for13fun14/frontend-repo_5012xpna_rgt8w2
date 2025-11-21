import Spline from '@splinetool/react-spline'

export default function Section3D({ id, title, subtitle, scene, children }) {
  return (
    <section id={id} className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex min-h-screen items-end sm:items-center justify-start">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto inline-flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl px-5 py-5 shadow-2xl shadow-black/30">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">{title}</h2>
              {subtitle && (
                <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl">{subtitle}</p>
              )}
            </div>
            {children && (
              <div className="mt-1">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/40" />
    </section>
  )
}
