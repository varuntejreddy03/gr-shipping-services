import StatCounter from '../components/StatCounter'
import { STATS } from '../data'

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-slate-200 py-10">
      <div className="container-max grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {STATS.map((s, i) => (
          <StatCounter key={i} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  )
}
