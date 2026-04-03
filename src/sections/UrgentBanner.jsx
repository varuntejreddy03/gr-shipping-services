import { Phone } from 'lucide-react'

export default function UrgentBanner() {
  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-danger animate-ping" style={{ animationDuration: '3s' }} />
      </div>
      <div className="container-max text-center relative">
        <div className="inline-block bg-danger/10 border border-danger/30 rounded-full px-4 py-1.5 mb-6">
          <span className="font-mono text-xs text-danger tracking-widest uppercase">Emergency Response</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl text-white mb-4">URGENT SUPPLY NEEDED?</h2>
        <p className="font-body text-white/60 text-xl mb-8">We respond in under <span className="text-danger font-semibold">30 minutes.</span></p>
        <a
          href="tel:+919652222993"
          className="inline-flex items-center gap-4 bg-danger text-white font-heading font-bold text-xl px-10 py-5 rounded-xl hover:bg-red-600 transition-all hover:shadow-2xl hover:shadow-danger/30 group"
        >
          <Phone size={24} className="group-hover:animate-bounce" />
          Call Now: +91 96522 22993
        </a>
      </div>
    </section>
  )
}
