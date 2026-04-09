import FadeUp from '../components/FadeUp'

const BADGES = [
  { label: 'ISO 9001:2015', sub: 'Quality Certified', color: 'text-gold border-gold/30 bg-gold/5' },
  { label: 'SOLAS', sub: 'Compliant', color: 'text-cyan border-slate-200 bg-cyan/5' },
  { label: 'MARPOL', sub: 'Compliant', color: 'text-cyan border-slate-200 bg-cyan/5' },
  { label: 'MLC 2006', sub: 'Compliant', color: 'text-cyan border-slate-200 bg-cyan/5' },
  { label: 'ISSA', sub: 'Member', color: 'text-slate-600 border-slate-200 bg-white shadow-sm border border-slate-200' },
]

export default function CertBadges() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="container-max">
        <FadeUp className="flex flex-wrap justify-center gap-4">
          {BADGES.map((b) => (
            <div key={b.label} className={`flex flex-col items-center px-8 py-4 rounded-xl border ${b.color}`}>
              <span className="font-display text-2xl">{b.label}</span>
              <span className="font-body text-xs opacity-70 mt-0.5">{b.sub}</span>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
