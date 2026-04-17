import { Link } from 'react-router-dom'
import { Phone, ChevronDown, Anchor, Shield, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-64px)] md:min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/heroimagee.jpeg')",
          backgroundPosition: '66% center'
        }}
      />
      {/* Gradient overlay tuned lighter while keeping text readable */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.68) 0%, rgba(13,27,46,0.45) 52%, rgba(13,27,46,0.78) 100%)' }} />
      <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.34) 0%, rgba(13,27,46,0.18) 35%, rgba(13,27,46,0.74) 100%)' }} />

      {/* Animated cyan grid lines — desktop only */}
      <div className="absolute inset-0 opacity-[0.03] hidden md:block"
        style={{ backgroundImage: 'linear-gradient(#00C2E0 1px, transparent 1px), linear-gradient(90deg, #00C2E0 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative container-max px-3 sm:px-4 md:px-0 pt-20 pb-12 md:pt-36 md:pb-24 flex flex-col">

          {/* Headline — tighter on mobile */}
        <h1 
          className="font-display text-[40px] sm:text-[48px] leading-[0.92] md:text-8xl lg:text-9xl text-white mb-4 md:mb-6 max-w-[14rem] sm:max-w-xl md:max-w-5xl"
          style={{ fontFamily: '"Bebas Neue", cursive' }}
        >
          YOUR TRUSTED{' '}
          <span className="text-gradient">SHIP SUPPLY</span>{' '}
          PARTNER
        </h1>

        {/* Subheadline */}
        <p 
          className="font-body text-[13px] sm:text-sm md:text-xl text-white/85 max-w-[18rem] sm:max-w-xl md:max-w-2xl mb-6 md:mb-10 leading-relaxed"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          Ship Chandler • Provisions • Stores • Repairs • Underwater Services —{' '}
          <span className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-2 py-0.5 text-white font-heading font-bold tracking-wide align-middle">
            24×7
          </span>{' '}
          across all Indian ports
        </p>

        {/* CTAs — full width on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-12 w-full sm:w-auto max-w-xl">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-cyan text-navy font-heading font-bold text-sm md:text-base px-6 md:px-8 py-3.5 rounded-xl hover:bg-cyan-light transition-all hover:shadow-lg hover:shadow-cyan/30 text-center"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            Request a Supply Quote
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto border-2 border-white/20 text-white font-heading font-bold text-sm md:text-base px-6 md:px-8 py-3.5 rounded-xl hover:border-cyan hover:bg-cyan/10 hover:text-cyan transition-all text-center"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            Explore Our Services
          </Link>
        </div>

        {/* Mobile trust pills */}
        <div className="flex flex-wrap gap-2 mb-6 md:hidden max-w-xl">
          {[
            { icon: <Shield size={11} />, label: 'ISO 9001 Certified' },
            { icon: <Clock size={11} />, label: '24×7 Available' },
            { icon: <Anchor size={11} />, label: 'All Indian Ports' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 bg-white/95 shadow-sm border border-slate-200 rounded-full px-3 py-1.5">
              <span className="text-cyan">{icon}</span>
              <span className="font-heading text-[10px] text-slate-600 font-semibold tracking-wide">{label}</span>
            </div>
          ))}
        </div>

        {/* Available now card */}
        <div className="inline-flex self-start max-w-full items-center gap-3 bg-navy-light/40 backdrop-blur border border-white/10 rounded-xl px-4 py-3 mb-1">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="font-heading font-semibold text-white/90 text-xs md:text-sm">Available Now —</span>
          <a href="tel:+919652222993" className="text-cyan font-heading font-bold text-xs md:text-sm flex items-center gap-1.5">
            <Phone size={12} /> +91 96522 22993
          </a>
        </div>

        {/* Mobile bottom stats strip */}
        <div className="grid grid-cols-3 gap-2 mt-6 md:hidden max-w-xl">
          {[['500+', 'Vessels'], ['18+', 'Years'], ['13+', 'Ports']].map(([val, label]) => (
            <div key={label} className="bg-white shadow-sm border border-slate-200 rounded-xl py-3 text-center">
              <div className="font-display text-2xl text-cyan leading-none">{val}</div>
              <div className="font-heading text-[10px] text-slate-600 tracking-widest mt-0.5 uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
        <span className="font-body text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
