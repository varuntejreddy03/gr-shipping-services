import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SERVICES } from '../data'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container-max py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div>
          <div className="bg-white rounded-xl px-3 py-1.5 inline-block mb-4">
            <img src="/grlogo.png" alt="GR Shipping" className="h-16 w-auto" />
          </div>
          <p className="text-slate-600 text-sm font-body leading-relaxed mb-4">
            Your trusted ship supply partner across all Indian ports. 24×7 operations, ISO 9001 certified.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <MapPin size={14} className="text-cyan shrink-0" />
            <span>All Indian Ports | Home Port: Kakinada</span>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-heading font-bold text-slate-900 text-lg mb-4 tracking-wide">QUICK LINKS</h4>
          <div className="flex flex-col gap-2">
            {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/ports', 'Ports We Serve'], ['/contact', 'Contact']].map(([path, label]) => (
              <Link key={path} to={path} className="text-slate-600 hover:text-cyan text-sm font-body transition-colors">{label}</Link>
            ))}
          </div>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-heading font-bold text-slate-900 text-lg mb-4 tracking-wide">OUR SERVICES</h4>
          <div className="flex flex-col gap-2">
            {SERVICES.map(s => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="text-slate-600 hover:text-cyan text-sm font-body transition-colors">
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-heading font-bold text-slate-900 text-lg mb-4 tracking-wide">CONTACT</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+919652222993" className="flex items-center gap-2 text-cyan hover:text-cyan-light text-sm font-body transition-colors">
              <Phone size={14} /> +91 96522 22993
            </a>
            <a href="mailto:info@grshipping.com" className="flex items-center gap-2 text-slate-600 hover:text-cyan text-sm font-body transition-colors">
              <Mail size={14} /> info@grshipping.com
            </a>
            <a href="mailto:grshipping@hotmail.com" className="flex items-center gap-2 text-slate-600 hover:text-cyan text-sm font-body transition-colors">
              <Mail size={14} /> grshipping@hotmail.com
            </a>
            <a href="https://instagram.com/gr_shipping_services" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-cyan text-sm font-body transition-colors">
              <span className="text-sm">📸</span> @gr_shipping_services
            </a>
          </div>
          <div className="mt-6 p-3 bg-danger/10 border border-danger/30 rounded-lg">
            <p className="text-danger text-xs font-heading font-semibold tracking-wide">24×7 EMERGENCY</p>
            <a href="tel:+919652222993" className="text-slate-900 font-heading font-bold text-base">+91 96522 22993</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-2 text-slate-600 text-xs font-body">
          <span>© 2025 GR Shipping Services | All Rights Reserved</span>
          <span className="font-mono text-cyan/50">ISO 9001 CERTIFIED | EST. 2007 | KAKINADA</span>
        </div>
      </div>
    </footer>
  )
}
