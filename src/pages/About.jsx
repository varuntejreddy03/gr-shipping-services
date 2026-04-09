import FadeUp from '../components/FadeUp'
import { CheckCircle } from 'lucide-react'

const TIMELINE = [
  { year: '2007', event: 'GR Shipping Services founded in Kakinada, Andhra Pradesh' },
  { year: '2010', event: 'Expanded to all major East Coast Indian ports' },
  { year: '2013', event: 'Launched underwater inspection & repair division' },
  { year: '2016', event: 'Achieved ISO 9001 quality management certification' },
  { year: '2019', event: 'Expanded to West Coast ports — Mumbai, Kandla, Kochi' },
  { year: '2025', event: '500+ vessels served, 18+ years of maritime excellence' },
]

const VALUES = [
  { icon: '⚡', title: 'Speed', desc: 'Sub-30-minute emergency response. No delays, no excuses.' },
  { icon: '🏆', title: 'Quality', desc: 'ISO 9001 certified processes. Every supply meets international standards.' },
  { icon: '💰', title: 'Value', desc: 'Competitive pricing with complete port documentation included.' },
]

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 border border-cyan rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-cyan rounded-full" />
        </div>
        <div className="container-max relative text-center">
          <FadeUp>
            <span className="font-mono text-xs text-cyan tracking-widest uppercase">Our Story</span>
            <h1 className="font-display text-6xl md:text-8xl text-slate-900 mt-3">ABOUT GR SHIPPING</h1>
            <p className="font-body text-slate-600 text-xl mt-6 max-w-2xl mx-auto">
              18+ years of maritime excellence, headquartered in Kakinada, serving every Indian port 24×7.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-offwhite">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" alt="Kakinada Port" className="rounded-2xl w-full object-cover aspect-video" />
          </FadeUp>
          <FadeUp delay={150}>
            <span className="font-mono text-xs text-cyan tracking-widest uppercase">Est. 2007</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-2 mb-6">BUILT ON THE SHORES OF KAKINADA</h2>
            <p className="font-body text-steel leading-relaxed mb-4">
              GR Shipping Services was founded in 2007 in Kakinada — one of India's most strategically important bulk cargo ports on the East Coast. What began as a focused ship chandling operation has grown into a comprehensive maritime services company covering all major Indian ports.
            </p>
            <p className="font-body text-steel leading-relaxed mb-6">
              Today, we are a trusted partner for vessel operators, fleet managers, and ship captains across the globe. Our team of experienced maritime professionals ensures that every vessel calling at any Indian port receives the highest quality supplies, repairs, and services — on time, every time.
            </p>
            <blockquote className="border-l-4 border-cyan pl-6 py-2">
              <p className="font-accent italic text-navy text-lg leading-relaxed">
                "To provide the most satisfactory service and become the best ship supply company in India."
              </p>
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <FadeUp className="text-center mb-16">
            <h2 className="font-display text-5xl text-slate-900">OUR JOURNEY</h2>
          </FadeUp>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-cyan/20" />
            {TIMELINE.map((t, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="flex gap-6 mb-8 relative">
                  <div className="w-12 h-12 rounded-full bg-cyan/10 border border-slate-200 flex items-center justify-center shrink-0 z-10">
                    <span className="font-mono text-cyan text-xs font-bold">{t.year.slice(2)}</span>
                  </div>
                  <div className="bg-white-mid border border-slate-200 rounded-xl p-4 flex-1">
                    <span className="font-mono text-cyan text-xs">{t.year}</span>
                    <p className="font-body text-slate-600 text-sm mt-1">{t.event}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-offwhite">
        <div className="container-max">
          <FadeUp className="text-center mb-16">
            <h2 className="font-display text-5xl text-navy">OUR CORE VALUES</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 card-glow text-center">
                  <div className="text-5xl mb-4">{v.icon}</div>
                  <h3 className="font-display text-3xl text-navy mb-3">{v.title}</h3>
                  <p className="font-body text-steel">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ISO */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="bg-white-mid border border-gold/20 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center shrink-0">
                <span className="font-display text-gold text-2xl">ISO</span>
              </div>
              <div>
                <h3 className="font-display text-3xl text-slate-900 mb-2">ISO 9001:2015 CERTIFIED</h3>
                <p className="font-body text-slate-600 leading-relaxed">
                  Our ISO 9001:2015 certification demonstrates our commitment to quality management. Every process — from order receipt to delivery — follows documented procedures ensuring consistent, high-quality service delivery across all Indian ports.
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                {['Quality Processes', 'Documented Procedures', 'Continuous Improvement', 'Customer Focus'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-slate-600 text-sm font-body">
                    <CheckCircle size={14} className="text-gold" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
