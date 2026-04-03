import { useState } from 'react'
import { PORTS } from '../data'
import FadeUp from '../components/FadeUp'
import { Clock, MapPin } from 'lucide-react'

const SERVICES_AT_PORT = ['Ship Chandling', 'Provisions', 'Deck & Engine Stores', 'Ship Repair', 'Underwater Services']

export default function Ports() {
  const [active, setActive] = useState(null)

  return (
    <main className="pt-20">
      <section className="relative py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 border border-cyan rounded-full" />
        </div>
        <div className="container-max relative text-center">
          <FadeUp>
            <span className="font-mono text-xs text-cyan tracking-widest uppercase">Coverage</span>
            <h1 className="font-display text-6xl md:text-8xl text-white mt-3">PORTS WE SERVE</h1>
            <p className="font-body text-white/50 text-xl mt-6 max-w-2xl mx-auto">
              24×7 operations across all major Indian ports. Home port: Kakinada ⭐
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Map + Cards */}
      <section className="section-pad bg-offwhite">
        <div className="container-max">
          {/* Featured Home Port */}
          <FadeUp>
            <div className="bg-navy rounded-2xl p-8 border border-cyan/30 mb-12 flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-cyan/10 border-2 border-cyan flex items-center justify-center text-3xl shrink-0">⭐</div>
              <div className="flex-1 text-center md:text-left">
                <div className="font-mono text-xs text-cyan tracking-widest uppercase mb-1">Home Port</div>
                <h2 className="font-display text-4xl text-white">KAKINADA, ANDHRA PRADESH</h2>
                <p className="font-body text-white/50 mt-2">India's premier bulk cargo port on the East Coast. Our headquarters and primary operations base since 2007.</p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <div className="flex items-center gap-2 text-cyan text-sm font-body"><Clock size={14} /> Response: &lt;30 min</div>
                <div className="flex items-center gap-2 text-white/50 text-sm font-body"><MapPin size={14} /> Andhra Pradesh</div>
              </div>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTS.filter(p => !p.home).map((port, i) => (
              <FadeUp key={port.name} delay={i * 60}>
                <div
                  className={`bg-white rounded-2xl p-6 card-glow cursor-pointer transition-all ${active === port.name ? 'border-cyan/50 shadow-cyan/20' : ''}`}
                  onClick={() => setActive(active === port.name ? null : port.name)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-navy text-xl">{port.name}</h3>
                      <p className="font-body text-steel text-sm">{port.state}</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-cyan/60 mt-1" />
                  </div>
                  <div className="flex items-center gap-2 text-steel text-xs font-body mb-3">
                    <Clock size={12} /> Response: 2–4 hours
                  </div>
                  {active === port.name && (
                    <div className="border-t border-gray-100 pt-3 mt-3">
                      <p className="font-heading text-xs text-steel uppercase tracking-wide mb-2">Services Available</p>
                      <div className="flex flex-col gap-1">
                        {SERVICES_AT_PORT.map(s => (
                          <div key={s} className="flex items-center gap-2 text-navy text-xs font-body">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan" /> {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
