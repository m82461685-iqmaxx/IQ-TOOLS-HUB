'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Github, ExternalLink, Terminal, ArrowDown, Sparkles, ShieldCheck, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const statusMessages = [
  'SYSTEM STATUS // ONLINE',
  'CORE MODULES // 5 ACTIVE',
  'TERMINAL PROTOCOLS // READY',
  'SECURITY LAYER // VERIFIED',
  'OPEN SOURCE // MIT LICENSED',
]

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const logoWrapperRef = useRef<HTMLDivElement>(null)
  const logoImageRef = useRef<HTMLImageElement>(null)
  const reducedMotion = useReducedMotion()
  const [statusIndex, setStatusIndex] = useState(0)

  // Interactive 3D mouse tilt for frameless logo
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !logoImageRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateX = (-y / (rect.height / 2)) * 14
    const rotateY = (x / (rect.width / 2)) * 14
    gsap.to(logoImageRef.current, {
      rotateX,
      rotateY,
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000,
    })
  }, [reducedMotion])

  const handleMouseLeave = useCallback(() => {
    if (reducedMotion || !logoImageRef.current) return
    gsap.to(logoImageRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)',
    })
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        logoWrapperRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1.0, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-portfolio-bar',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-badge',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-title-main',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-subtitle-main',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-tagline',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-cta-group',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-telemetry',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [reducedMotion])

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* 3D Ethereal Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-b from-sky-300/30 via-cyan-200/20 to-transparent rounded-full blur-[110px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 section-container max-w-5xl flex flex-col items-center text-center">
        {/* FRAMELESS FLOATING LOGO */}
        <div
          ref={logoWrapperRef}
          className="relative mb-6 group flex items-center justify-center cursor-pointer"
          style={{ perspective: '1200px' }}
        >
          {/* Multi-tier Luminous Ambient Aura behind Logo */}
          <div
            className="absolute -inset-10 rounded-full bg-gradient-to-r from-sky-400/30 via-cyan-300/40 to-blue-400/30 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow pointer-events-none"
            aria-hidden="true"
          />

          {/* Orbiting Light Rings */}
          <div
            className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full border border-dashed border-sky-400/40 animate-radar pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-sky-300/30 animate-radar pointer-events-none [animation-direction:reverse] [animation-duration:8s]"
            aria-hidden="true"
          />

          {/* PURE FRAMELESS FLOATING LOGO IMAGE */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-76 md:h-76 lg:w-88 lg:h-88 flex items-center justify-center">
            <img
              ref={logoImageRef}
              src="/Firefly.png"
              alt="IQ TOOL HUB Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(14,165,233,0.35)] drop-shadow-[0_0_60px_rgba(56,189,248,0.4)] animate-logo-frameless select-none transition-transform duration-300"
            />
          </div>
        </div>

        {/* DK's Portfolio Highlighted Link Bar on Home Screen */}
        <a
          href="https://dk-s-profile.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-portfolio-bar group mb-5 inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white/95 hover:bg-white border-2 border-sky-300 hover:border-cyan-400 backdrop-blur-2xl shadow-[0_8px_30px_rgba(14,165,233,0.18)] hover:shadow-[0_12px_35px_rgba(6,182,212,0.32)] transition-all duration-300 hover:scale-[1.03] active:scale-95"
          aria-label="Visit Deepak Kumar.S (DK's) Portfolio"
        >
          {/* Round Shape Icon inside with Deepak's Image */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-cyan-400 p-0.5 bg-gradient-to-tr from-cyan-400 via-sky-300 to-blue-500 shadow-sm flex items-center justify-center shrink-0">
            <img
              src="/developer_portrait.png"
              alt="Deepak Kumar.S"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/sub/file_00000000461c82118e64a4fee5fffb81-removebg-preview.png'
              }}
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-title text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                DK's Portfolio
              </span>
              <span className="px-1.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-cyan-600 animate-pulse" />
                FOUNDER
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-500 group-hover:text-slate-700 transition-colors">
              Deepak Kumar.S • Architect & Cyber Engineer
            </span>
          </div>

          {/* Highlighted Arrow Action Button */}
          <div className="ml-1 p-1.5 rounded-full bg-slate-950 text-white group-hover:bg-cyan-600 transition-colors shadow-xs flex items-center justify-center">
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>

        {/* System Pill Tag */}
        <div className="hero-badge mb-5 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-sky-200/80 backdrop-blur-xl shadow-sm">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" aria-hidden="true" />
          <span className="font-mono text-xs text-slate-700 uppercase tracking-widest font-semibold">
            SYSTEM // IQ-TOOL-HUB
          </span>
          <span className="text-sky-300 font-mono text-xs">|</span>
          <span className="font-mono text-xs text-sky-600 font-bold">v3.2.1</span>
        </div>

        {/* HERO TITLE (Armadira Font on Title/Highlights) */}
        <h1
          id="hero-heading"
          className="hero-title-main font-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-slate-950 uppercase leading-[1.08] mb-3 drop-shadow-sm"
        >
          IQ TOOL HUB
        </h1>

        <p className="hero-subtitle-main font-mono text-sm sm:text-base md:text-lg text-sky-700 tracking-[0.2em] uppercase font-bold mb-6">
          TUI • CLI • SECURITY • OPEN SOURCE
        </p>

        {/* Tagline description */}
        <p className="hero-tagline text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
          A growing ecosystem of terminal-first tools built for developers, security learners, and command-line enthusiasts.
        </p>

        {/* Centered CTA Buttons */}
        <div className="hero-cta-group flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <a
            href="#philosophy-functions"
            className="btn-primary group flex items-center justify-center gap-2.5 w-full sm:w-auto"
          >
            <Terminal className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-sky-400" aria-hidden="true" />
            <span>EXPLORE FUNCTIONS</span>
          </a>

          <a
            href="https://github.com/iqmaxxdk143-svg?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group flex items-center justify-center gap-2.5 w-full sm:w-auto"
          >
            <Github className="w-4 h-4 text-slate-800" aria-hidden="true" />
            <span>VIEW GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800 transition-colors" aria-hidden="true" />
          </a>
        </div>

        {/* Centered Telemetry Bar */}
        <div className="hero-telemetry inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-6 py-3 rounded-2xl bg-white/80 border border-sky-200/80 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="font-semibold">{statusMessages[statusIndex]}</span>
          </div>
          <div className="hidden sm:block w-px h-3 bg-sky-200" aria-hidden="true" />
          <div className="flex items-center gap-2 font-mono text-xs text-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
            <span>ZERO TELEMETRY</span>
          </div>
          <div className="hidden sm:block w-px h-3 bg-sky-200" aria-hidden="true" />
          <div className="flex items-center gap-2 font-mono text-xs text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span>CYBER DEFENCE ECOSYSTEM</span>
          </div>
        </div>
      </div>

      {/* Classy Scroll Down Indicator */}
      <a
        href="#tui-cli"
        className="mt-14 inline-flex flex-col items-center gap-2 text-sky-700 hover:text-sky-950 transition-colors font-mono text-xs tracking-widest font-semibold"
        aria-label="Scroll to tools showcase"
      >
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2.5s' }} aria-hidden="true" />
      </a>
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