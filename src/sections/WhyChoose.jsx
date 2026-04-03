import { CheckCircle, Mail } from 'lucide-react'
import FadeUp from '../components/FadeUp'

const USPS = [
  'Headquartered in Kakinada — India\'s premier bulk cargo port',
  '18+ years of specialized marine industry experience',
  'ISO 9001 certified quality management system',
  '24×7 availability — no delay, no excuses',
  'SOLAS & MARPOL compliant supplies',
  'Competitive pricing with complete port documentation',
]

export default function WhyChoose() {
  return (
    <section className="section-pad bg-navy">
      <div className="container-max grid lg:grid-cols-5 gap-12 items-center">
        <FadeUp className="lg:col-span-2">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Port operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-navy-dark/80 backdrop-blur rounded-xl p-4 border border-cyan/20">
              <div className="font-display text-3xl text-cyan">18+</div>
              <div className="font-heading text-white text-sm tracking-wide">YEARS OF MARITIME EXCELLENCE</div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={150} className="lg:col-span-3">
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mt-2 mb-8">
            THE GR SHIPPING<br />
            <span className="text-gradient">ADVANTAGE</span>
          </h2>

          <div className="flex flex-col gap-4 mb-8">
            {USPS.map((usp, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-cyan shrink-0 mt-0.5" />
                <span className="font-body text-white/80">{usp}</span>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {['info@grshipping.com', 'grshipping@hotmail.com'].map(email => (
              <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 bg-navy-mid border border-cyan/20 rounded-xl px-4 py-3 hover:border-cyan/50 transition-colors">
                <Mail size={16} className="text-cyan" />
                <span className="font-body text-white/70 text-sm">{email}</span>
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
