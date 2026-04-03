import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../data'
import FadeUp from '../components/FadeUp'

export default function Services() {
  return (
    <main className="pt-20">
      <section className="relative py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 border border-cyan rounded-full" />
        </div>
        <div className="container-max relative text-center">
          <FadeUp>
            <span className="font-mono text-xs text-cyan tracking-widest uppercase">What We Offer</span>
            <h1 className="font-display text-6xl md:text-8xl text-white mt-3">OUR SERVICES</h1>
            <p className="font-body text-white/50 text-xl mt-6 max-w-2xl mx-auto">
              12 core service categories covering everything your vessel needs at any Indian port.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="container-max grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.slug} delay={i * 50}>
              <Link to={`/services/${s.slug}`} className="group bg-white rounded-2xl p-8 card-glow transition-all duration-300 flex flex-col gap-4 h-full">
                <span className="text-4xl">{s.icon}</span>
                <h2 className="font-heading font-bold text-navy text-xl">{s.name}</h2>
                <p className="font-body text-steel text-sm flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {s.items.slice(0, 3).map(item => (
                    <span key={item} className="font-mono text-xs text-cyan bg-cyan/5 border border-cyan/20 px-2 py-1 rounded-full">{item}</span>
                  ))}
                  {s.items.length > 3 && (
                    <span className="font-mono text-xs text-white/40 bg-white/5 border border-white/10 px-2 py-1 rounded-full">+{s.items.length - 3} more</span>
                  )}
                </div>
                <span className="flex items-center gap-1 text-cyan text-sm font-heading font-semibold group-hover:gap-2 transition-all mt-2">
                  View Details <ArrowRight size={14} />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>
    </main>
  )
}
