import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../data'
import FadeUp from '../components/FadeUp'

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-max">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-cyan tracking-widest uppercase">What We Do</span>
            <h2 className="font-display text-5xl md:text-6xl text-navy mt-2">END-TO-END MARITIME SOLUTIONS</h2>
            <p className="font-body text-steel text-lg mt-4 max-w-2xl mx-auto">
              Everything your vessel needs — delivered fast, priced right, documented correctly.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.slug} delay={i * 50}>
              <Link
                to={`/services/${s.slug}`}
                className="group bg-white rounded-xl p-6 card-glow transition-all duration-300 flex flex-col gap-3 h-full"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="font-heading font-bold text-navy text-lg leading-tight">{s.name}</h3>
                <p className="font-body text-steel text-sm flex-1">{s.short}</p>
                <span className="flex items-center gap-1 text-cyan text-sm font-heading font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
