import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { SERVICES } from '../data'
import FadeUp from '../components/FadeUp'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', vesselType: '', port: '', service: '', urgency: 'Normal', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  const inputClass = 'w-full bg-offwhite border border-gray-200 focus:border-cyan focus:outline-none rounded-lg px-4 py-3 font-body text-navy text-sm transition-colors'
  const labelClass = 'font-heading text-xs text-steel uppercase tracking-widest mb-1.5 block'

  return (
    <main className="pt-20">
      <section className="relative py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 border border-cyan rounded-full" />
        </div>
        <div className="container-max relative text-center">
          <FadeUp>
            <span className="font-mono text-xs text-cyan tracking-widest uppercase">Reach Us</span>
            <h1 className="font-display text-6xl md:text-8xl text-white mt-3">CONTACT US</h1>
            <p className="font-body text-white/50 text-xl mt-6">Available 24×7, 365 days. We respond in under 30 minutes.</p>
          </FadeUp>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-danger py-4">
        <div className="container-max flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="font-heading font-bold text-white text-lg">🚨 URGENT? CALL NOW:</span>
          <a href="tel:+919652222993" className="font-display text-white text-2xl hover:text-white/80 transition-colors">+91 96522 22993</a>
        </div>
      </div>

      <section className="section-pad bg-offwhite">
        <div className="container-max grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeUp>
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5">
              <h2 className="font-heading font-bold text-navy text-2xl mb-6">Submit an Inquiry</h2>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-heading font-bold text-navy text-2xl mb-2">Inquiry Sent!</h3>
                  <p className="font-body text-steel">We'll respond within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Capt. John Smith" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Company / Vessel</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="MV Example / Shipping Co." className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Vessel Type</label>
                      <input name="vesselType" value={form.vesselType} onChange={handle} placeholder="Bulk Carrier / Tanker..." className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Port of Call</label>
                      <input name="port" value={form.port} onChange={handle} placeholder="Kakinada" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Service Required</label>
                      <select name="service" value={form.service} onChange={handle} className={inputClass}>
                        <option value="">Select service...</option>
                        {SERVICES.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Urgency Level</label>
                      <select name="urgency" value={form.urgency} onChange={handle} className={inputClass}>
                        <option value="Normal">Normal</option>
                        <option value="Urgent">Urgent</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Describe your requirements..." className={inputClass + ' resize-none'} />
                  </div>
                  <button type="submit" className="w-full bg-cyan text-navy font-heading font-bold text-base py-4 rounded-lg hover:bg-cyan-light transition-all flex items-center justify-center gap-2">
                    <Send size={16} /> Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </FadeUp>

          {/* Contact Details */}
          <FadeUp delay={150}>
            <div className="flex flex-col gap-6">
              {[
                { icon: <Phone size={20} />, label: 'Phone (24×7)', value: '+91 96522 22993', href: 'tel:+919652222993', color: 'text-cyan' },
                { icon: <Mail size={20} />, label: 'Email', value: 'info@grshipping.com', href: 'mailto:info@grshipping.com', color: 'text-cyan' },
                { icon: <Mail size={20} />, label: 'Email (Alt)', value: 'grshipping@hotmail.com', href: 'mailto:grshipping@hotmail.com', color: 'text-cyan' },
                { icon: <MapPin size={20} />, label: 'Home Port', value: 'Kakinada, Andhra Pradesh, India', href: null, color: 'text-white/70' },
                { icon: <Clock size={20} />, label: 'Availability', value: '24×7, 365 Days a Year', href: null, color: 'text-white/70' },
                { icon: <span className="text-base">📸</span>, label: 'Instagram', value: '@gr_shipping_services', href: 'https://instagram.com/gr_shipping_services', color: 'text-cyan' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-navy rounded-xl p-5 border border-cyan/10">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-heading text-xs text-white/40 uppercase tracking-widest">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className={`font-body font-semibold ${item.color} hover:opacity-80 transition-opacity`}>{item.value}</a>
                    ) : (
                      <span className={`font-body font-semibold ${item.color}`}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
