import { Link } from 'react-router-dom'
import { Phone, ChevronDown, Anchor, Shield, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80)' }}
      />
      {/* Gradient overlay — stronger on mobile for readability */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.97) 0%, rgba(13,27,46,0.88) 50%, rgba(13,27,46,0.97) 100%)' }} />

      {/* Animated cyan grid lines — desktop only */}
      <div className="absolute inset-0 opacity-[0.03] hidden md:block"
        style={{ backgroundImage: 'linear-gradient(#00C2E0 1px, transparent 1px), linear-gradient(90deg, #00C2E0 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full border border-cyan/10 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-1/4 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full border border-cyan/10 -translate-y-1/2 translate-x-1/3" />

      <div className="relative container-max pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col">

        {/* Badge */}
        <div className="inline-flex self-start items-center gap-2 bg-cyan/10 border border-cyan/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan animate-pulse shrink-0" />
          <span className="font-mono text-[10px] md:text-xs text-cyan tracking-widest">ISO 9001 CERTIFIED | 24×7 OPERATIONS | EST. 2007</span>
        </div>

        {/* Headline — tighter on mobile */}
        <h1 className="font-display text-[52px] leading-[0.95] md:text-8xl lg:text-9xl text-white mb-5 md:mb-6 max-w-5xl">
          YOUR TRUSTED{' '}
          <span className="text-gradient">SHIP SUPPLY</span>{' '}
          PARTNER
        </h1>

        {/* Subheadline */}
        <p className="font-body text-sm md:text-xl text-white/60 max-w-2xl mb-8 md:mb-10 leading-relaxed">
          Ship Chandler • Provisions • Stores • Repairs • Underwater Services —{' '}
          <span className="text-cyan font-semibold">24×7</span> from Kakinada to Every Indian Port
        </p>

        {/* CTAs — full width on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
          <Link
            to="/contact"
            className="bg-cyan text-navy font-heading font-bold text-sm md:text-base px-6 md:px-8 py-4 rounded-xl hover:bg-cyan-light transition-all hover:shadow-lg hover:shadow-cyan/30 text-center"
          >
            Request a Supply Quote
          </Link>
          <Link
            to="/services"
            className="border-2 border-white/30 text-white font-heading font-bold text-sm md:text-base px-6 md:px-8 py-4 rounded-xl hover:border-cyan hover:text-cyan transition-all text-center"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Mobile trust pills */}
        <div className="flex flex-wrap gap-2 mb-8 md:hidden">
          {[
            { icon: <Shield size={11} />, label: 'ISO 9001 Certified' },
            { icon: <Clock size={11} />, label: '24×7 Available' },
            { icon: <Anchor size={11} />, label: 'All Indian Ports' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <span className="text-cyan">{icon}</span>
              <span className="font-heading text-[11px] text-white/70 font-semibold tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        {/* Available now card */}
        <div className="inline-flex self-start items-center gap-3 bg-navy-dark/80 backdrop-blur border border-white/10 rounded-xl px-4 py-3">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="font-heading font-semibold text-white text-xs md:text-sm">Available Now —</span>
          <a href="tel:+919652222993" className="text-cyan font-heading font-bold text-xs md:text-sm flex items-center gap-1.5">
            <Phone size={12} /> +91 96522 22993
          </a>
        </div>

        {/* Mobile bottom stats strip */}
        <div className="grid grid-cols-3 gap-2 mt-8 md:hidden">
          {[['500+', 'Vessels'], ['18+', 'Years'], ['13+', 'Ports']].map(([val, label]) => (
            <div key={label} className="bg-white/5 border border-cyan/10 rounded-xl py-3 text-center">
              <div className="font-display text-2xl text-cyan leading-none">{val}</div>
              <div className="font-heading text-[10px] text-white/40 tracking-widest mt-0.5 uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20">
        <span className="font-body text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
