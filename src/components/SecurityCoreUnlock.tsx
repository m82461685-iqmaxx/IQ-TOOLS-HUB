'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck, Zap, Terminal, Lock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const unlockStages = [
  { percent: 0, label: 'LOCKED // STANDBY', message: 'CORE SYSTEM STANDBY', module: null },
  { percent: 20, label: 'NETWORK MODULE // UNLOCKED', message: 'NETWORK SCANNING MODULE ACTIVE', module: 'NETWORK' },
  { percent: 40, label: 'TUI ENGINE // UNLOCKED', message: 'TUI INTERFACE ENGINE ENGAGED', module: 'TUI ENGINE' },
  { percent: 60, label: 'CLI TOOLCHAIN // UNLOCKED', message: 'COMPOSABLE CLI PIPELINE READY', module: 'CLI TOOLCHAIN' },
  { percent: 80, label: 'SECURITY MODULE // UNLOCKED', message: 'SECURITY AUDITING CORE LOADED', module: 'SECURITY' },
  { percent: 100, label: 'GITHUB CORE // COMPLETE', message: 'FULL OPEN SOURCE CORE READY', module: 'GITHUB CORE' },
]

export function SecurityCoreUnlock() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const coreRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (reducedMotion) {
      setCurrentStage(unlockStages.length - 1)
      setProgress(100)
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const prog = Math.round(self.progress * 100)
            setProgress(prog)

            const stageIndex = unlockStages.findIndex(
              (stage, i) => prog < (unlockStages[i + 1]?.percent ?? 101)
            )
            if (stageIndex !== -1 && stageIndex !== currentStage) {
              setCurrentStage(stageIndex)
            }
          },
        },
      })

      tl.fromTo(
        '.unlock-progress-ring',
        { strokeDashoffset: 2 * Math.PI * 160 },
        { strokeDashoffset: 0, duration: 1, ease: 'none' }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion, currentStage])

  const current = unlockStages[currentStage]
  const isUnlocked = currentStage > 0

  return (
    <section
      ref={sectionRef}
      id="security-core"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4"
      aria-labelledby="unlock-heading"
    >
      <div className="relative z-10 section-container w-full max-w-4xl flex flex-col items-center">
        {/* Centered Section Header */}
        <div className="section-header">
          <span className="section-tag">// ARCHITECTURE MATRIX</span>
          <h2 id="unlock-heading" className="section-title">
            Scroll to Unlock the Ecosystem
          </h2>
          <p className="section-subtitle">
            Dynamic scroll synchronization. Each depth level activates core subsystem modules in real-time.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-8">
          {/* Interactive Dial */}
          <div ref={coreRef} className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px]" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <defs>
                <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
              </defs>

              {/* Background Static Outer Ring */}
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="rgba(14,165,233,0.15)"
                strokeWidth="2"
                strokeDasharray="4 8"
              />

              {/* Dynamic Laser Progress Ring */}
              <circle
                className="unlock-progress-ring"
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 160}
                strokeDashoffset={2 * Math.PI * 160 * (1 - progress / 100)}
                transform="rotate(-90 200 200)"
                filter="url(#coreGlow)"
              />

              {/* Node Spoke Lines & Particles */}
              {[0, 72, 144, 216, 288].map((angle, i) => {
                const rad = ((angle - 90) * Math.PI) / 180
                const unlocked = progress >= (i + 1) * 20
                const x = 200 + 160 * Math.cos(rad)
                const y = 200 + 160 * Math.sin(rad)
                return (
                  <g key={i}>
                    <line
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke={unlocked ? '#0284c7' : 'rgba(14,165,233,0.2)'}
                      strokeWidth={unlocked ? 2 : 1}
                      opacity={unlocked ? 0.9 : 0.3}
                      className="transition-all duration-500"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r={unlocked ? 8.5 : 5}
                      fill={unlocked ? '#0284c7' : '#e0f2fe'}
                      stroke={unlocked ? '#ffffff' : 'rgba(14,165,233,0.4)'}
                      strokeWidth={2}
                      filter={unlocked ? 'url(#coreGlow)' : 'none'}
                      className="transition-all duration-500"
                    />
                  </g>
                )
              })}

              {/* Center Core Hub */}
              <circle
                cx="200"
                cy="200"
                r={46 + (progress / 100) * 14}
                fill="#ffffff"
                stroke={isUnlocked ? '#0284c7' : 'rgba(14,165,233,0.3)'}
                strokeWidth={isUnlocked ? 3 : 1.5}
                filter="url(#coreGlow)"
                className="transition-all duration-500"
              />

              <text
                x="200"
                y="207"
                textAnchor="middle"
                className="font-title font-bold fill-slate-950 tracking-widest transition-all duration-300"
                style={{ fontSize: `${28 + (progress / 100) * 10}px` }}
              >
                IQ
              </text>
            </svg>
          </div>

          {/* Centered Telemetry Progress Card */}
          <div className="w-full max-w-md text-center flex flex-col items-center">
            <div className="w-full glass-card rounded-2xl p-6 sm:p-8 border-sky-200/80 bg-white/90 text-center shadow-sm">
              <div className="font-mono text-xs text-sky-800 uppercase tracking-widest font-bold mb-3">
                {current.label}
              </div>
              
              <div className="font-title text-4xl sm:text-5xl font-bold font-mono tabular-nums text-slate-950 mb-4">
                {progress < 10 ? '0' + progress : progress}%
              </div>

              <div className="h-2.5 bg-sky-100 rounded-full overflow-hidden w-full border border-sky-200">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(14,165,233,0.6)]"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Core unlock progress"
                />
              </div>
            </div>

            {/* Subsystem State Counters */}
            <div className="mt-5 grid grid-cols-3 gap-3 w-full text-center">
              {[
                { label: 'ACTIVE RINGS', value: Math.min(5, Math.floor(progress / 20) + 1) },
                { label: 'SIGNAL SYNC', value: `${Math.min(100, progress)}%` },
                { label: 'CORE NODES', value: Math.min(5, Math.floor(progress / 20)) },
              ].map((stat) => (
                <div key={stat.label} className="glass-card bg-white/80 rounded-xl p-3.5 border-sky-200/70 shadow-sm">
                  <div className="text-xl font-bold font-mono text-slate-950">{stat.value}</div>
                  <div className="text-[10px] text-sky-700 uppercase font-mono tracking-wider font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {current.module && (
              <div className="mt-5 p-3.5 w-full glass-card rounded-xl border-sky-300 bg-sky-50/90 shadow-sm animate-in">
                <div className="flex items-center justify-center gap-2.5 text-sky-950 font-mono text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" aria-hidden="true" />
                  <span>{current.message}</span>
                </div>
              </div>
            )}
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