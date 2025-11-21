import { useState } from 'react'

export default function Contact() {
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
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-2 text-blue-100/90 max-w-xl">Have a project, role, or idea in mind? Drop a note and I’ll reply within a day.</p>
            {status && <p className="mt-4 text-sm text-cyan-300">{status}</p>}
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6">
            <div className="grid sm:grid-cols-2 gap-4">
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
            <div className="mt-4">
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-white font-medium shadow-lg shadow-blue-600/30 hover:brightness-110 w-full sm:w-auto">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
