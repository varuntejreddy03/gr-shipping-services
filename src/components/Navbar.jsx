import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { SERVICES } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const navLink = 'font-heading font-semibold text-sm tracking-wide uppercase text-white/80 hover:text-cyan transition-colors'
  const activeClass = 'text-cyan border-b-2 border-cyan pb-0.5'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-navy'} border-b border-cyan/20`}>
      <div className="container-max flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <div className="bg-white rounded-xl px-3 py-1.5">
            <img src="/grlogo.png" alt="GR Shipping Services" className="h-12 w-auto brightness-110" />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => `${navLink} ${isActive ? activeClass : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${navLink} ${isActive ? activeClass : ''}`}>About</NavLink>
          <div className="relative group">
            <button className={`${navLink} flex items-center gap-1`}>
              Services <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-navy-dark border border-cyan/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2 max-h-80 overflow-y-auto">
                <Link to="/services" className="block px-3 py-2 rounded-lg hover:bg-cyan/10 text-cyan text-sm font-heading font-semibold mb-1">All Services →</Link>
                {SERVICES.map(s => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-cyan/10 text-white/70 hover:text-cyan text-sm font-body transition-colors">
                    <span>{s.icon}</span> {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/ports" className={({ isActive }) => `${navLink} ${isActive ? activeClass : ''}`}>Ports</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${navLink} ${isActive ? activeClass : ''}`}>Contact</NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919652222993" className="flex items-center gap-2 text-cyan font-heading font-semibold text-sm">
            <Phone size={16} /> +91 96522 22993
          </a>
          <Link to="/contact" className="bg-cyan text-navy font-heading font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-cyan-light transition-colors">
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-cyan/20 px-4 py-6 flex flex-col gap-4">
          {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/ports', 'Ports'], ['/contact', 'Contact']].map(([path, label]) => (
            <NavLink key={path} to={path} className={({ isActive }) => `font-heading font-semibold text-base uppercase tracking-wide ${isActive ? 'text-cyan' : 'text-white/80'}`}>
              {label}
            </NavLink>
          ))}
          <a href="tel:+919652222993" className="flex items-center gap-2 text-cyan font-heading font-semibold mt-2">
            <Phone size={16} /> +91 96522 22993
          </a>
          <Link to="/contact" className="bg-cyan text-navy font-heading font-bold text-center py-3 rounded-lg">Get a Quote</Link>
        </div>
      )}
    </nav>
  )
}
