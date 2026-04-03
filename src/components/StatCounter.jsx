import { useEffect, useRef, useState } from 'react'

export default function StatCounter({ value, label }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const isNum = /^\d+/.test(value)
        if (!isNum) { setDisplay(value); return }
        const num = parseInt(value)
        const suffix = value.replace(/^\d+/, '')
        let start = 0
        const step = Math.ceil(num / 60)
        const timer = setInterval(() => {
          start += step
          if (start >= num) { setDisplay(num + suffix); clearInterval(timer) }
          else setDisplay(start + suffix)
        }, 25)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl text-cyan">{display}</div>
      <div className="font-heading text-sm text-white/50 tracking-widest uppercase mt-1">{label}</div>
    </div>
  )
}
