'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { CyberSecurityCanvas } from './CyberSecurityCanvas'
import { CyberHudMotion } from './CyberHudMotion'

gsap.registerPlugin(ScrollTrigger)

export function ThemeFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      // 3D floating drift animations for ambient depth lighting
      gsap.to('.vfx-orb-1', {
        y: '+=40',
        x: '-=25',
        rotation: 360,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.vfx-orb-2', {
        y: '-=50',
        x: '+=35',
        rotation: -360,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div
      ref={containerRef}
      className={cn(
        'fixed inset-0 -z-10 pointer-events-none overflow-hidden',
        'transition-colors duration-1000'
      )}
      aria-hidden="true"
    >
      {/* 1. Base Gradient Canvas: Pure White -> Celestial Cybersecurity Blue */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 18%, #E0F2FE 45%, #BAE6FD 75%, #7DD3FC 100%)',
        }}
      />

      {/* 2. Ethereal Depth Lighting Orbs */}
      <div
        className="vfx-orb-1 absolute top-[15%] left-[10%] w-[650px] h-[650px] rounded-full blur-[120px] pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(14,165,233,0.15) 50%, transparent 75%)',
        }}
      />
      <div
        className="vfx-orb-2 absolute top-[50%] right-[5%] w-[800px] h-[800px] rounded-full blur-[140px] pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(125,211,252,0.5) 0%, rgba(56,189,248,0.2) 60%, transparent 80%)',
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] w-[900px] h-[700px] rounded-full blur-[150px] pointer-events-none opacity-65"
        style={{
          background:
            'radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(3,105,161,0.12) 60%, transparent 80%)',
        }}
      />

      {/* 3. High-Performance Cyber Security Interactive Canvas */}
      {!reducedMotion && <CyberSecurityCanvas />}

      {/* 4. Cyber Security HUD Motion Overlays & Telemetry */}
      {!reducedMotion && <CyberHudMotion />}

      {/* 5. Fine Tech Micro-Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.10)_1px,transparent_1px)] [background-size:36px_36px] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-100/10 to-sky-300/20 pointer-events-none" />
    </div>
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
