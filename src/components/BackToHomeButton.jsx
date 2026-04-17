import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackToHomeButton() {
  const location = useLocation()

  if (location.pathname === '/') {
    return null
  }

  return (
    <Link
      to="/"
      className="fixed z-[90] left-3 md:left-6 top-[84px] md:top-[94px] inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3 py-2 text-navy font-heading font-semibold text-xs md:text-sm shadow-lg shadow-slate-900/10 hover:bg-white hover:border-cyan/40 hover:text-cyan transition-all"
      aria-label="Back to home"
    >
      <ArrowLeft size={14} /> Home
    </Link>
  )
}
