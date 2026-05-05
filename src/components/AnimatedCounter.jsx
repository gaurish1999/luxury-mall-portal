import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2000 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(parseFloat(start.toFixed(1)))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  const formatted = Number.isInteger(value) ? Math.floor(display) : display.toFixed(1)

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
