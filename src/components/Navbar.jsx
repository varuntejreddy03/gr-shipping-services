import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { SERVICES } from '../data'

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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container-max flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/grlogo.png" alt="GR Shipping Services" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1" style={fontHeadingStyle}>
            <NavLink to="/" className={navLinkClass} end>
              <span className="px-4 py-2 rounded-lg hover:bg-white shadow-sm border border-slate-200 block transition-colors">Home</span>
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              <span className="px-4 py-2 rounded-lg hover:bg-white shadow-sm border border-slate-200 block transition-colors">About</span>
            </NavLink>

            {/* Services Mega Menu Trigger */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-200 hover:bg-white shadow-sm border border-slate-200 ${
                  servicesOpen ? 'text-cyan bg-white shadow-sm border border-slate-200' : 'text-navy hover:text-cyan'
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
              <span className="px-4 py-2 rounded-lg hover:bg-white shadow-sm border border-slate-200 block transition-colors">Ports</span>
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              <span className="px-4 py-2 rounded-lg hover:bg-white shadow-sm border border-slate-200 block transition-colors">Contact</span>
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919652222993" className="flex items-center gap-2 text-navy hover:text-cyan font-heading font-semibold text-sm transition-colors" style={fontHeadingStyle}>
              <Phone size={15} className="text-cyan" /> +91 96522 22993
            </a>
            <Link
              to="/contact"
              className="bg-cyan text-navy font-heading font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-cyan-light transition-all hover:shadow-lg hover:shadow-cyan/25"
              style={fontHeadingStyle}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200 border border-navy/10 text-navy hover:bg-white shadow-sm border border-slate-200 transition-colors"
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
        <div className={`absolute top-20 left-0 right-0 bottom-0 overflow-y-auto transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
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
              <a href="tel:+919652222993" className="flex items-center justify-center gap-2 bg-white shadow-sm border border-slate-200 border border-navy/10 text-cyan font-heading font-bold py-3.5 rounded-xl">
                <Phone size={16} /> +91 96522 22993
              </a>
              <Link to="/contact" className="bg-cyan text-navy font-heading font-bold text-center py-3.5 rounded-xl hover:bg-cyan-light transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
