import { Star } from 'lucide-react'
import FadeUp from '../components/FadeUp'

const TESTIMONIALS = [
  {
    quote: 'GR Shipping delivered our provisions and deck stores within 4 hours of arrival at Kakinada. Exceptional service, complete documentation, no delays.',
    name: 'Capt. Rajesh Kumar',
    vessel: 'MV Pacific Star',
    company: 'Pacific Shipping Lines',
    port: 'Kakinada',
    flag: '🇮🇳',
  },
  {
    quote: 'Their underwater inspection team is world-class. CCTV recording, NDT testing, full report within 24 hours. We use GR Shipping at every Indian port call.',
    name: 'Capt. Andreas Mueller',
    vessel: 'MV Hamburg Express',
    company: 'Hapag-Lloyd',
    port: 'Visakhapatnam',
    flag: '🇩🇪',
  },
  {
    quote: 'Best ship chandler in India. Competitive pricing, SOLAS compliant LSA equipment, and their 24×7 emergency response is genuinely 24×7.',
    name: 'Capt. James O\'Brien',
    vessel: 'MV Celtic Spirit',
    company: 'Irish Continental Group',
    port: 'Mumbai',
    flag: '🇮🇪',
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-max">
        <FadeUp className="text-center mb-16">
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">Social Proof</span>
          <h2 className="font-display text-5xl md:text-6xl text-navy mt-2">TRUSTED BY CAPTAINS WORLDWIDE</h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 card-glow h-full flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#D4A843" className="text-gold" />)}
                </div>
                <p className="font-accent italic text-steel text-base leading-relaxed flex-1">"{t.quote}"</p>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-lg">{t.flag}</div>
                  <div>
                    <div className="font-heading font-bold text-navy text-sm">{t.name}</div>
                    <div className="font-body text-steel text-xs">{t.vessel} · {t.company}</div>
                    <div className="font-mono text-xs text-cyan">{t.port}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
