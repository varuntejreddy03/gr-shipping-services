import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Mail, Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { SERVICES } from '../data'

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `font-heading font-semibold text-sm tracking-widest uppercase transition-colors duration-200 ${
      isActive ? 'text-cyan' : 'text-navy hover:text-cyan'
    }`
    
  const fontHeadingStyle = { fontFamily: '"Barlow Condensed", sans-serif' }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] border-b border-slate-200/70 bg-white/90 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-[0_10px_30px_rgba(15,23,42,0.08)]' : 'shadow-[0_6px_20px_rgba(15,23,42,0.06)]'}`}
      >
        <div className="container-max flex items-center justify-between h-18 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/grlogo.png" alt="GR Shipping Services" className="h-11 md:h-12 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2" style={fontHeadingStyle}>
            <NavLink to="/" className={navLinkClass} end>
              <span className="px-4 py-2 rounded-full border border-slate-200/80 bg-slate-50/70 shadow-sm block transition-all hover:bg-white hover:border-cyan/30 hover:text-cyan">Home</span>
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              <span className="px-4 py-2 rounded-full border border-slate-200/80 bg-slate-50/70 shadow-sm block transition-all hover:bg-white hover:border-cyan/30 hover:text-cyan">About</span>
            </NavLink>

            {/* Services Mega Menu Trigger */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-200 shadow-sm border ${
                  servicesOpen ? 'text-cyan bg-white border-cyan/30' : 'text-navy bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-cyan/30 hover:text-cyan'
                }`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-cyan' : ''}`} />
              </button>

              {/* Mega Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-white border border-navy/10 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden z-50">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-navy/5 bg-offwhite">
                    <div>
                      <p className="font-heading font-bold text-navy text-base tracking-wide">Our Services</p>
                      <p className="font-body text-navy/40 text-xs mt-0.5">12 maritime service categories</p>
                    </div>
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-1.5 text-cyan font-heading font-semibold text-xs tracking-wide hover:gap-2.5 transition-all"
                    >
                      View All <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* 2-column grid */}
                  <div className="grid grid-cols-2 gap-px bg-white shadow-sm border border-slate-200 p-px">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-5 py-3.5 bg-white hover:bg-offwhite transition-colors group"
                      >
                        <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">{s.icon}</span>
                        <div className="min-w-0">
                          <p className="font-heading font-semibold text-navy/80 group-hover:text-cyan text-sm leading-tight transition-colors truncate">{s.name}</p>
                          <p className="font-body text-navy/30 text-xs mt-0.5 truncate">{s.short.split('—')[0].split('•')[0].trim()}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-6 py-3 bg-cyan/5 border-t border-slate-200 flex items-center justify-between">
                    <span className="font-body text-navy/40 text-xs">24×7 supply at all Indian ports</span>
                    <a href="tel:+919652222993" className="font-heading font-bold text-cyan text-xs flex items-center gap-1.5 hover:text-cyan-light transition-colors">
                      <Phone size={11} /> +91 96522 22993
                    </a>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/ports" className={navLinkClass}>
              <span className="px-4 py-2 rounded-full border border-slate-200/80 bg-slate-50/70 shadow-sm block transition-all hover:bg-white hover:border-cyan/30 hover:text-cyan">Ports</span>
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              <span className="px-4 py-2 rounded-full border border-slate-200/80 bg-slate-50/70 shadow-sm block transition-all hover:bg-white hover:border-cyan/30 hover:text-cyan">Contact</span>
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a href="https://wa.me/919652222993" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/70 px-3.5 py-2 text-navy font-heading font-semibold text-sm transition-all hover:bg-white hover:border-cyan/30 hover:text-cyan" style={fontHeadingStyle}>
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> +91 96522 22993
            </a>
            <a href="mailto:info@grshipping.com" className="flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-3.5 py-2 text-navy font-heading font-semibold text-sm transition-all hover:bg-cyan/10 hover:border-cyan/30 hover:text-cyan" style={fontHeadingStyle}>
              <Mail size={15} className="text-cyan" /> info@grshipping.com
            </a>
            <div className="relative w-14 h-8 overflow-hidden pointer-events-none opacity-70" aria-hidden="true">
              <svg viewBox="0 0 64 32" className="w-full h-full">
                <circle cx="50" cy="16" r="12" fill="none" className="stroke-slate-300/80" strokeWidth="1.25" />
                <circle cx="50" cy="16" r="22" fill="none" className="stroke-slate-300/80" strokeWidth="1.25" />
              </svg>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 shadow-sm border border-slate-200/80 text-navy hover:bg-white hover:border-cyan/30 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — full screen overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-white shadow-sm border border-slate-200 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />

        {/* Panel */}
        <div className={`absolute top-16 left-0 right-0 bottom-0 overflow-y-auto transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <div className="px-4 py-6 flex flex-col gap-1">

            {[['/', 'Home', true], ['/about', 'About', false], ['/ports', 'Ports', false], ['/contact', 'Contact', false]].map(([path, label, end]) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                className={({ isActive }) =>
                  `font-heading font-bold text-lg uppercase tracking-widest px-4 py-3.5 rounded-xl transition-colors ${
                    isActive ? 'text-cyan bg-cyan/10' : 'text-navy/70 hover:text-navy hover:bg-white shadow-sm border border-slate-200'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between font-heading font-bold text-lg uppercase tracking-widest px-4 py-3.5 rounded-xl text-navy/70 hover:text-navy hover:bg-white shadow-sm border border-slate-200 transition-colors w-full"
            >
              Services
              <ChevronDown size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-cyan' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-slate-200 pl-4">
                <Link to="/services" className="font-heading font-semibold text-cyan text-sm py-2 tracking-wide">All Services →</Link>
                {SERVICES.map(s => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-3 py-2.5 text-navy/60 hover:text-navy transition-colors"
                  >
                    <span className="text-base">{s.icon}</span>
                    <span className="font-body text-sm">{s.name}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile CTA */}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-navy/5">
              <a href="https://wa.me/919652222993" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#1f8f48] font-heading font-bold py-3.5 rounded-xl">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp: +91 96522 22993
              </a>
              <a href="mailto:info@grshipping.com" className="flex items-center justify-center gap-2 bg-offwhite text-navy font-heading font-bold py-3.5 rounded-xl">
                info@grshipping.com
              </a>
              <a href="tel:+919652222993" className="flex items-center justify-center gap-2 bg-white shadow-sm border border-slate-200 border border-navy/10 text-cyan font-heading font-bold py-3.5 rounded-xl">
                <Phone size={16} /> +91 96522 22993
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
