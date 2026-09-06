'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Github, Mail, Instagram, Terminal, Code2, Shield, Server, 
  GraduationCap, Award, Sparkles, Cpu, Activity, RefreshCw, 
  Maximize2, X, CheckCircle2, Lock, Globe, ExternalLink
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const focusAreas = [
  { icon: Terminal, label: 'TUI Engineering', desc: 'Crafting high-speed terminal UI frameworks with Ratatui, Bubble Tea, and interactive buffers.' },
  { icon: Code2, label: 'CLI Architecture', desc: 'Composability-first UNIX pipelines, POSIX standards, and modular command-line toolchains.' },
  { icon: Shield, label: 'Cybersecurity Tools', desc: 'Heuristic packet inspection, automated vulnerability scanning, and cryptographic audit suites.' },
  { icon: Server, label: 'Kernel & Systems', desc: 'Low-overhead C/Rust binary optimization, memory profiling, and socket networking.' },
  { icon: Github, label: 'Open Source Vision', desc: 'Developing public tooling for independent researchers, CTF players, and sysadmins.' },
]

const links = [
  { icon: Globe, label: "DK's Portfolio", href: 'https://dk-s-profile.vercel.app/' },
  { icon: Github, label: 'GitHub Repositories', href: 'https://github.com/iqmaxxdk143-svg?tab=repositories' },
  { icon: Mail, label: 'Email Contact', href: 'mailto:iqmaxxdk143@gmail.com' },
  { icon: Instagram, label: 'Instagram Profile', href: 'https://www.instagram.com/iq_maxx143/?igsh=MWZrd29ubzRnMHNmdw%3D%3D' },
]

const compilerLogs = [
  'compiling iq-tui-core v3.2.1 [opt-level=3] ... OK',
  'linking libsec-audit.so dynamic symbols ... OK',
  'generating ratatui dual-buffer layout ... READY',
  'mounting POSIX stream pipeline ... ACTIVE',
  'validating SHA-256 cryptographic keys ... VERIFIED',
  'all 5 CLI binaries loaded into environment ... 100%',
]

export function Developer() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [loadProgress, setLoadProgress] = useState(88)
  const [logIndex, setLogIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const reducedMotion = useReducedMotion()

  // 3D Mouse Parallax for Big Portrait
  const handlePortraitMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !portraitRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateX = (-y / (rect.height / 2)) * 12
    const rotateY = (x / (rect.width / 2)) * 12
    gsap.to(portraitRef.current, {
      rotateX,
      rotateY,
      scale: 1.02,
      duration: 0.35,
      ease: 'power2.out',
      transformPerspective: 1200,
    })
  }, [reducedMotion])

  const handlePortraitLeave = useCallback(() => {
    if (reducedMotion || !portraitRef.current) return
    gsap.to(portraitRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)',
    })
  }, [reducedMotion])

  // Live tool loading simulation ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % compilerLogs.length)
      setLoadProgress((prev) => (prev >= 100 ? 82 : prev + 3))
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  const triggerToolReload = () => {
    setIsLoading(true)
    setLoadProgress(15)
    let p = 15
    const int = setInterval(() => {
      p += 17
      if (p >= 100) {
        setLoadProgress(100)
        setIsLoading(false)
        clearInterval(int)
      } else {
        setLoadProgress(p)
      }
    }, 180)
  }

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 px-4 overflow-hidden"
      aria-labelledby="developer-heading"
    >
      {/* 3D Floating Ambient Light Background Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-sky-200/40 blur-[140px]" />
        <div className="absolute bottom-10 -left-20 w-[600px] h-[600px] rounded-full bg-cyan-200/40 blur-[140px]" />
      </div>

      <div className="relative z-10 section-container">
        {/* Centered Section Header */}
        <div className="section-header">
          <span className="section-tag">// ARCHITECT & FOUNDER PROFILE</span>
          <h2 id="developer-heading" className="section-title">
            Meet The Creator Behind IQ TOOL HUB
          </h2>
          <p className="section-subtitle">
            Crafting high-speed terminal user interfaces, zero-bloat CLI pipelines, and cybersecurity toolcraft.
          </p>
        </div>

        {/* MAIN BIG PICTURE & 3D FLOATING BARS SHOWCASE */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT: BIG PICTURE WITH 3D FLOATING DEPTH (No Boxy Frame) */}
            <div
              className="lg:col-span-5 flex flex-col items-center"
              onMouseMove={handlePortraitMove}
              onMouseLeave={handlePortraitLeave}
              style={{ perspective: '1200px' }}
            >
              <div
                ref={portraitRef}
                onClick={() => setModalOpen(true)}
                className="relative group cursor-pointer w-full max-w-sm sm:max-w-md flex items-center justify-center p-2 transition-transform duration-300"
                style={{ transformStyle: 'preserve-3d' }}
                title="Click to expand 3D Founder View"
              >
                {/* 3D Ethereal Ambient Halo behind portrait */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-sky-400/30 via-cyan-300/40 to-blue-500/30 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow" />

                {/* Orbiting 3D Cyber Radar Ring */}
                <div className="absolute inset-0 m-auto w-72 h-72 sm:w-88 sm:h-88 rounded-full border border-dashed border-sky-400/50 animate-radar pointer-events-none" />

                {/* THE BIG PICTURE */}
                <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 md:w-92 md:h-[460px] flex items-center justify-center">
                  <img
                    src="/developer_portrait.png"
                    alt="Deepak Kumar.S - IQ MAXX"
                    className="w-full h-full object-contain filter drop-shadow-[0_25px_40px_rgba(14,165,233,0.35)] drop-shadow-[0_0_50px_rgba(56,189,248,0.3)] select-none transition-all duration-500 group-hover:scale-[1.03]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      if (!target.src.endsWith('/sub/file_00000000461c82118e64a4fee5fffb81-removebg-preview.png')) {
                        target.src = '/sub/file_00000000461c82118e64a4fee5fffb81-removebg-preview.png'
                      }
                    }}
                  />

                  {/* Expand badge */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-2xl bg-white/90 border border-sky-200 text-sky-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 font-mono text-xs font-bold">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>EXPAND</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-sky-800 font-semibold bg-white/70 px-4 py-1.5 rounded-full border border-sky-200 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
                <span>CLICK PICTURE FOR 3D CINEMATIC VIEW</span>
              </div>
            </div>

            {/* RIGHT: 3D VFX FLOATING DETAIL BARS */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              
              {/* 3D FLOATING BAR 1: CSE(CYBER SECURITY) */}
              <div className="vfx-3d-bar glass-card p-6 rounded-3xl border-sky-200/80 bg-gradient-to-r from-white/90 via-sky-50/80 to-white/95 shadow-[0_15px_35px_rgba(14,165,233,0.12)]">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-300 flex items-center justify-center text-sky-600 shadow-sm">
                      <Shield className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-sky-600 uppercase">
                        SPECIALIZATION // DOMAIN
                      </span>
                      <h3 className="font-title text-xl sm:text-2xl font-bold text-slate-950 tracking-wider">
                        CSE(CYBER SECURITY )
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold border border-sky-300 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-sky-600" />
                    VERIFIED CORE
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Focused on computer science engineering with deep offensive/defensive cybersecurity specializations, packet manipulation, cryptography, and secure command-line tool architectures.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700">
                  <span className="px-2.5 py-1 rounded-lg bg-sky-100/70 border border-sky-200">Heuristics</span>
                  <span className="px-2.5 py-1 rounded-lg bg-sky-100/70 border border-sky-200">TLS Audit</span>
                  <span className="px-2.5 py-1 rounded-lg bg-sky-100/70 border border-sky-200">Kernel Hooks</span>
                  <span className="px-2.5 py-1 rounded-lg bg-sky-100/70 border border-sky-200">Zero-Exploit Logic</span>
                </div>
              </div>

              {/* 3D FLOATING BAR 2: IQ MAXX (FOUNDER) */}
              <div className="vfx-3d-bar glass-card p-6 rounded-3xl border-sky-200/80 bg-gradient-to-r from-white/90 via-sky-50/80 to-white/95 shadow-[0_15px_35px_rgba(14,165,233,0.12)]">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-300 flex items-center justify-center text-blue-600 shadow-sm">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase">
                        LEADERSHIP // CREATOR
                      </span>
                      <h3 className="font-title text-xl sm:text-2xl font-bold text-slate-950 tracking-wider">
                        IQ MAXX (founder)
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold border border-blue-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    FOUNDER CLEARANCE
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  <strong className="text-slate-900">Deepak Kumar.S</strong> is the lead architect and founder of the IQ TOOL HUB ecosystem. Championing minimalist, terminal-first software built with zero bloat and pure performance.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !px-4 !py-1.5 !text-xs flex items-center gap-2 font-semibold"
                    >
                      <link.icon className="w-3.5 h-3.5 text-slate-800" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* 3D FLOATING BAR 3: TUI & CLI TOOL LOADING */}
              <div className="vfx-3d-bar glass-card p-6 rounded-3xl border-sky-300/90 bg-slate-950 text-white shadow-[0_20px_45px_rgba(14,165,233,0.25)]">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                      <Cpu className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                        LIVE COMPILER ENGINE
                      </span>
                      <h4 className="font-title text-lg sm:text-xl font-bold text-white tracking-wider">
                        TUI & CLI TOOL LOADING
                      </h4>
                    </div>
                  </div>

                  <button
                    onClick={triggerToolReload}
                    disabled={isLoading}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-sky-300 transition-all active:scale-95 flex items-center gap-1 text-xs font-mono"
                    title="Reload Tool Pipeline"
                  >
                    <RefreshCw className={cn('w-3.5 h-3.5', isLoading && 'animate-spin')} />
                    <span className="hidden sm:inline">COMPILE</span>
                  </button>
                </div>

                {/* Animated Progress Bar */}
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">PIPELINE SYNCHRONIZATION</span>
                    <span className="text-sky-400 font-bold">{loadProgress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 transition-all duration-300 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                      style={{ width: `${loadProgress}%` }}
                    />
                  </div>
                </div>

                {/* Real-time Compiler Log Output */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-sky-300 flex items-center gap-2 overflow-hidden">
                  <span className="text-emerald-400">Ã¢ÂÂ¯</span>
                  <span className="truncate">{compilerLogs[logIndex]}</span>
                  <span className="cursor-blink" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Technical Focus Grid */}
        <div className="w-full glass-card rounded-3xl p-8 border-sky-200/80 mb-8 bg-white/85 shadow-sm">
          <h4 className="font-title text-xl sm:text-2xl font-bold text-slate-950 text-center mb-6">
            Core Engineering Competencies
          </h4>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area) => (
              <div
                key={area.label}
                className="p-5 rounded-2xl bg-white/80 border border-sky-100 text-center flex flex-col items-center hover:border-sky-300 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-3">
                  <area.icon className="w-5 h-5" />
                </div>
                <h5 className="font-title text-base font-bold text-slate-950 mb-1.5">{area.label}</h5>
                <p className="text-slate-600 text-xs leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Terminal Bio Card */}
        <div className="w-full terminal-window border border-slate-800">
          <div className="terminal-header">
            <div className="terminal-dots flex gap-2">
              <span className="terminal-dot bg-red-500/80" />
              <span className="terminal-dot bg-amber-500/80" />
              <span className="terminal-dot bg-emerald-500/80" />
            </div>
            <div className="terminal-title">iq-maxx ~ developer.bio</div>
            <div className="w-10" />
          </div>

          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
            <div className="text-sky-400 font-bold">Ã¢ÂÂ¯ iq-founder --full-profile</div>
            <div className="mt-2 text-slate-300">  FOUNDER:     Deepak Kumar.S (IQ MAXX)</div>
            <div className="text-slate-300">  DISCIPLINE:  CSE (CYBER SECURITY)</div>
            <div className="text-slate-300">  PLATFORM:    IQ TOOL HUB (TUI / CLI Ecosystem)</div>
            <div className="text-slate-300">  SYSTEMS:     Linux Ã¢â‚¬Â¢ FreeBSD Ã¢â‚¬Â¢ UNIX Pipelines Ã¢â‚¬Â¢ POSIX</div>
            <div className="text-slate-300">  CORE GOAL:   Deliver fast, secure, minimalist developer tooling to the world.</div>
            <div className="mt-3 text-sky-400 cursor-blink">Ã¢ÂÂ¯ _</div>
          </div>
        </div>
      </div>

      {/* 3D EXPANDED CINEMATIC MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-2xl animate-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-gradient-to-b from-white via-sky-50 to-white rounded-3xl p-6 sm:p-10 border border-sky-300 shadow-[0_30px_90px_rgba(14,165,233,0.3)] overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Modal Big Picture with 3D Aura */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 flex-shrink-0 flex items-center justify-center">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-sky-400/40 via-cyan-300/40 to-blue-500/40 blur-2xl opacity-80 animate-pulse-glow" />
                <img
                  src="/developer_portrait.png"
                  alt="Deepak Kumar.S"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(14,165,233,0.4)]"
                />
              </div>

              {/* Modal Details */}
              <div className="flex flex-col gap-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold border border-sky-300 w-fit">
                  <Shield className="w-3.5 h-3.5 text-sky-600" />
                  <span>CSE(CYBER SECURITY )</span>
                </div>

                <h3 className="font-title text-3xl sm:text-4xl font-bold text-slate-950 tracking-wider">
                  DEEPAK KUMAR.S
                </h3>
                <p className="font-mono text-sm text-sky-700 font-bold uppercase tracking-wider">
                  IQ MAXX (founder) Ã¢â‚¬Â¢ LEAD TOOL ENGINEER
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Deepak Kumar.S (IQ MAXX) is dedicated to crafting minimalist, ultra-fast terminal tools and cybersecurity utilities. With expertise spanning low-level system development, network protocol inspection, and high-performance TUI design, he is building the next era of command-line tools.
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 text-white font-mono text-xs space-y-1.5 border border-slate-800">
                  <div className="text-sky-400 font-bold">SYSTEM // TUI & CLI STATUS</div>
                  <div className="text-slate-300">STATUS: ACTIVE & COMPILING</div>
                  <div className="text-slate-300">REPOSITORY: github.com/iqmaxxdk143-svg</div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !px-5 !py-2.5 !text-xs flex items-center gap-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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