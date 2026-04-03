import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { SERVICES } from '../data'
import ContactForm from '../sections/ContactForm'
import FadeUp from '../components/FadeUp'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find(s => s.slug === slug)
  if (!service) return <Navigate to="/services" />

  const related = SERVICES.filter(s => s.slug !== slug).slice(0, 3)

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 border border-cyan rounded-full" />
        </div>
        <div className="container-max relative">
          <FadeUp>
            <Link to="/services" className="inline-flex items-center gap-2 text-cyan/70 hover:text-cyan font-body text-sm mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{service.icon}</span>
              <span className="font-mono text-xs text-cyan tracking-widest uppercase bg-cyan/10 border border-cyan/20 px-3 py-1.5 rounded-full">Service</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl text-white">{service.name.toUpperCase()}</h1>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-offwhite">
        <div className="container-max grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <FadeUp>
              <div className="bg-white rounded-2xl p-8 card-glow mb-8">
                <h2 className="font-heading font-bold text-navy text-2xl mb-4">Overview</h2>
                <p className="font-body text-steel leading-relaxed text-base">{service.desc}</p>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="bg-white rounded-2xl p-8 card-glow">
                <h2 className="font-heading font-bold text-navy text-2xl mb-6">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-offwhite rounded-lg">
                      <CheckCircle size={16} className="text-cyan shrink-0" />
                      <span className="font-body text-navy text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={150}>
              <div className="bg-navy rounded-2xl p-6 border border-cyan/20">
                <h3 className="font-heading font-bold text-white text-lg mb-4">Request This Service</h3>
                <p className="font-body text-white/50 text-sm mb-4">Get a quote for {service.name} at your port of call.</p>
                <Link to="/contact" className="block w-full bg-cyan text-navy font-heading font-bold text-center py-3 rounded-lg hover:bg-cyan-light transition-colors">
                  Get a Quote
                </Link>
                <a href="tel:+919652222993" className="block w-full border border-white/20 text-white font-heading font-semibold text-center py-3 rounded-lg hover:border-cyan hover:text-cyan transition-colors mt-3 text-sm">
                  📞 +91 96522 22993
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="bg-white rounded-2xl p-6 card-glow">
                <h3 className="font-heading font-bold text-navy text-lg mb-4">Related Services</h3>
                <div className="flex flex-col gap-3">
                  {related.map(s => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-offwhite transition-colors group">
                      <span className="text-xl">{s.icon}</span>
                      <span className="font-body text-steel text-sm group-hover:text-navy transition-colors">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <ContactForm preService={service.name} />
    </main>
  )
}
