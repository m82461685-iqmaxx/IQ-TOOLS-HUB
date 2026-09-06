'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hammer, BookOpen, Share2, Quote, Cpu, Terminal, Shield, Zap, Network, Layers } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  {
    id: 'build',
    icon: Hammer,
    title: 'BUILD',
    subtitle: 'ENGINEER USEFUL SOFTWARE',
    description: 'Craft purposeful terminal-first utilities that address genuine workflow bottlenecks with extreme speed and zero bloat.',
    color: '#0284c7',
  },
  {
    id: 'learn',
    icon: BookOpen,
    title: 'LEARN',
    subtitle: 'PRACTICAL EXPERIMENTATION',
    description: 'Deconstruct network protocols, security heuristics, and system kernels through hands-on terminal tool interaction.',
    color: '#2563eb',
  },
  {
    id: 'share',
    icon: Share2,
    title: 'SHARE',
    subtitle: 'OPEN SOURCE ETHOS',
    description: 'Empower the developer and cybersecurity communities with transparent, permissively licensed open source software.',
    color: '#059669',
  },
]

const coreFunctions = [
  {
    id: 'fn-engine',
    icon: Cpu,
    title: 'Core Engine Functions',
    tag: 'SYSTEM / KERNEL',
    desc: 'High-throughput async execution pipeline built for zero-allocation command parsing and rapid terminal responses.',
  },
  {
    id: 'fn-sec',
    icon: Shield,
    title: 'Security & Audit Matrix',
    tag: 'DEFENSE / HEURISTICS',
    desc: 'Automated vulnerability reconnaissance, port heuristics, and live packet stream analysis without third-party dependencies.',
  },
  {
    id: 'fn-tui',
    icon: Terminal,
    title: 'TUI & CLI Dispatchers',
    tag: 'INTERFACE / WORKFLOW',
    desc: 'Ergonomic terminal user interfaces featuring interactive keyboard navigation, real-time gauges, and modular CLI commands.',
  },
  {
    id: 'fn-net',
    icon: Network,
    title: 'Network Protocol Probing',
    tag: 'TRANSPORT / SOCKETS',
    desc: 'Low-level TCP/UDP socket telemetry, DNS health inspection, and encrypted tunnel verification utilities.',
  },
  {
    id: 'fn-speed',
    icon: Zap,
    title: 'Zero-Latency Execution',
    tag: 'PERFORMANCE / OPTIMIZATION',
    desc: 'Sub-millisecond startup times optimized for developer pipelines, security scripts, and CI/CD automated test suites.',
  },
  {
    id: 'fn-modular',
    icon: Layers,
    title: 'Modular Tool Extensibility',
    tag: 'ARCHITECTURE / PLUGINS',
    desc: 'Clean composable interface allowing custom CLI subcommands and specialized cybersecurity modules to be plugged in effortlessly.',
  },
]

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  return (
    <section
      ref={sectionRef}
      id="philosophy-functions"
      className="relative py-24 lg:py-32 px-4"
      aria-labelledby="philosophy-heading"
    >
      <div className="relative z-10 section-container">
        {/* Centered Section Header */}
        <div className="section-header">
          <span className="section-tag">// ARCHITECTURE & PRINCIPLES</span>
          <h2 id="philosophy-heading" className="section-title">
            Philosophy & Functions
          </h2>
          <p className="section-subtitle">
            The foundational engineering philosophy and high-performance functional architecture powering the IQ Tool Hub ecosystem.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Section 1: Three Core Principles */}
          <div className="w-full mb-6 text-center">
            <span className="font-mono text-xs text-sky-700 tracking-widest uppercase font-bold px-3 py-1 rounded-full bg-sky-100/70 border border-sky-200 inline-block mb-3">
              Part 1: Core Tenets
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-bold text-slate-950 tracking-wide">
              The Terminal First Manifesto
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 w-full mb-16">
            {principles.map((principle) => (
              <article
                key={principle.id}
                className="glass-card bg-white/85 rounded-3xl p-8 text-center flex flex-col items-center group border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-sky-50 border border-sky-200 group-hover:scale-110 transition-transform duration-400 shadow-sm"
                >
                  <principle.icon className="w-7 h-7 text-sky-600" />
                </div>

                <h4 className="font-title text-2xl font-bold text-slate-950 mb-1 tracking-wider">
                  {principle.title}
                </h4>

                <div className="font-mono text-[10px] text-sky-700 tracking-widest font-bold uppercase mb-4">
                  {principle.subtitle}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>

          {/* Section 2: Functional Capabilities Grid */}
          <div className="w-full mb-6 text-center">
            <span className="font-mono text-xs text-blue-700 tracking-widest uppercase font-bold px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 inline-block mb-3">
              Part 2: Functional Architecture
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-bold text-slate-950 tracking-wide">
              Engine Functions & Capabilities
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
            {coreFunctions.map((fn) => (
              <div
                key={fn.id}
                className="glass-card bg-white/85 rounded-3xl p-6 text-left flex flex-col group border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-50 border border-sky-200 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <fn.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <span className="font-mono text-[9px] text-sky-800 font-bold uppercase px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200">
                    {fn.tag}
                  </span>
                </div>

                <h4 className="font-title text-lg font-bold text-slate-950 mb-2 tracking-wide group-hover:text-sky-600 transition-colors">
                  {fn.title}
                </h4>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {fn.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Manifesto Quote Card */}
          <div className="w-full max-w-3xl glass-card bg-gradient-to-r from-white via-sky-50 to-white rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center relative overflow-hidden border-sky-200/80 shadow-sm">
            <Quote className="w-8 h-8 text-sky-500/50 mb-4" />
            <blockquote className="font-title text-xl sm:text-2xl font-bold text-slate-950 tracking-wide max-w-2xl leading-relaxed mb-4">
              "The best interface is the one that gets out of your way. Fast, composable, and terminal-first."
            </blockquote>
            <cite className="font-mono text-xs text-sky-700 font-semibold uppercase tracking-widest not-italic">
              â€” IQ TOOL HUB MANIFESTO
            </cite>
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