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
            <a href="https://wa.me/919652222993" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-cyan text-sm font-body transition-colors">
              <span className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-2.5 h-2.5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </span>
              +91 96522 22993 (WhatsApp)
            </a>
            <a href="skype:live:grshipping?chat" className="flex items-center gap-2 text-slate-600 hover:text-cyan text-sm font-body transition-colors">
              <span className="w-4 h-4 rounded-full bg-[#00AFF0] text-white text-[10px] font-bold leading-none flex items-center justify-center shrink-0">S</span>
              live:grshipping
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
