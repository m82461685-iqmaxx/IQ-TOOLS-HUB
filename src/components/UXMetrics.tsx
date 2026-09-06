'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  { label: 'VISUAL HIERARCHY', value: 96, color: '#0284c7' },
  { label: 'NAVIGATION CLARITY', value: 95, color: '#0369a1' },
  { label: 'TERMINAL RESPONSIVENESS', value: 98, color: '#2563eb' },
  { label: 'INTERACTION QUALITY', value: 94, color: '#059669' },
  { label: 'SECURITY FOCUS', value: 97, color: '#d97706' },
  { label: 'ACCESSIBILITY (WCAG)', value: 92, color: '#4f46e5' },
]

export function UXMetrics() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({})

  useEffect(() => {
    if (reducedMotion) {
      metrics.forEach((m) => {
        setAnimatedValues((prev) => ({ ...prev, [m.label]: m.value }))
      })
      return
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => animateMetrics(),
        onEnterBack: () => animateMetrics(),
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  const animateMetrics = () => {
    metrics.forEach((metric, i) => {
      gsap.to({ value: 0 }, {
        value: metric.value,
        duration: 1.4,
        delay: i * 0.08,
        ease: 'power3.out',
        onUpdate: function () {
          setAnimatedValues((prev) => ({ ...prev, [metric.label]: Math.round(this.targets()[0].value) }))
        },
      })
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-4"
      aria-labelledby="metrics-heading"
    >
      <div className="relative z-10 section-container">
        {/* Centered Section Header */}
        <div className="section-header">
          <span className="section-tag">// QUALITY BENCHMARKS</span>
          <h2 id="metrics-heading" className="section-title">
            Engineering Design Targets
          </h2>
          <p className="section-subtitle">
            Internal craftsmanship benchmarks for speed, clarity, ergonomics, and accessibility.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Centered Metrics Radial Gauges Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-card bg-white/85 rounded-2xl p-6 text-center flex flex-col items-center border-sky-200/80 shadow-sm"
              >
                <div className="relative w-24 h-24 mb-4">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="rgba(14,165,233,0.12)"
                      strokeWidth="6"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke={metric.color}
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={2 * Math.PI * 40 * (1 - (animatedValues[metric.label] || 0) / 100)}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-title text-2xl font-bold font-mono text-slate-950">
                      {animatedValues[metric.label] || 0}%
                    </span>
                  </div>
                </div>

                <h3 className="font-title text-xs font-bold text-sky-900 uppercase tracking-widest">
                  {metric.label}
                </h3>
              </div>
            ))}
          </div>

          {/* Centered Disclaimer Pill */}
          <div className="glass-card bg-white/80 rounded-2xl p-4 px-6 text-center flex items-center justify-center gap-3 text-slate-600 font-mono text-xs border-sky-200/80 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Target specifications adhere to WCAG 2.1 AA accessibility standards.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}