import { useState } from 'react'
import { Send, Mail } from 'lucide-react'
import { SERVICES } from '../data'
import FadeUp from '../components/FadeUp'

export default function ContactForm({ preService = '' }) {
  const [form, setForm] = useState({ name: '', vessel: '', port: '', service: preService, message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = 'w-full bg-offwhite border border-gray-200 focus:border-cyan focus:outline-none rounded-lg px-4 py-3 font-body text-navy text-sm transition-colors'
  const labelClass = 'font-heading text-xs text-steel uppercase tracking-widest mb-1.5 block'

  return (
    <section className="section-pad bg-navy">
      <div className="container-max">
        <FadeUp className="text-center mb-16">
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mt-2">SEND AN INQUIRY</h2>
        </FadeUp>

        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/20">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-heading font-bold text-navy text-2xl mb-2">Inquiry Sent!</h3>
                  <p className="font-body text-steel">We'll respond within 30 minutes. For urgent needs, call +91 96522 22993</p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Your Name</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Capt. John Smith" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Vessel Name</label>
                      <input name="vessel" value={form.vessel} onChange={handle} placeholder="MV Example" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Port of Call</label>
                      <input name="port" value={form.port} onChange={handle} placeholder="Kakinada" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Service Required</label>
                      <select name="service" value={form.service} onChange={handle} className={inputClass}>
                        <option value="">Select service...</option>
                        {SERVICES.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Describe your requirements..." className={inputClass + ' resize-none'} />
                  </div>
                  <button type="submit" className="w-full bg-cyan text-navy font-heading font-bold text-base py-4 rounded-lg hover:bg-cyan-light transition-all flex items-center justify-center gap-2">
                    <Send size={16} /> Send Inquiry
                  </button>
                  <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-gray-100">
                    {['info@grshipping.com', 'grshipping@hotmail.com'].map(e => (
                      <a key={e} href={`mailto:${e}`} className="flex items-center gap-2 text-steel hover:text-cyan text-xs font-body transition-colors">
                        <Mail size={12} /> {e}
                      </a>
                    ))}
                  </div>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
