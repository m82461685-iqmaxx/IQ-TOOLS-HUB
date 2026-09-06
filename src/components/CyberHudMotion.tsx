'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Shield, Lock, Radio, Cpu, Terminal, Activity } from 'lucide-react'

export function CyberHudMotion() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating motion for HUD badges
      gsap.to('.cyber-telemetry-badge-1', {
        y: -12,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.cyber-telemetry-badge-2', {
        y: 14,
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.cyber-telemetry-badge-3', {
        y: -10,
        x: 8,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Real-time Security Integrity Laser Scanline */}
      <div className="absolute inset-x-0 h-28 pointer-events-none animate-scanline opacity-40">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent" />
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
      </div>

      {/* 2. Top-Left Holographic Security Target Lock Reticle */}
      <div className="absolute top-20 left-8 md:left-14 w-44 h-44 opacity-25 [perspective:1000px]">
        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.8"
            strokeDasharray="4 6 12 4"
          />
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1"
            strokeDasharray="18 8"
          />
          <path
            d="M 50 6 L 50 18 M 50 82 L 50 94 M 6 50 L 18 50 M 82 50 L 94 50"
            stroke="#06b6d4"
            strokeWidth="1.2"
          />
        </svg>
        <div className="absolute -bottom-5 left-0 font-mono text-[9px] text-sky-600/70 tracking-wider">
          // SEC_LOCK: 0x9AF1
        </div>
      </div>

      {/* 3. Top-Right Cyber Defense Protocol Ring */}
      <div className="absolute top-28 right-8 md:right-16 w-52 h-52 opacity-20 [perspective:1200px]">
        <svg className="w-full h-full animate-spin-reverse-slow" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1"
            strokeDasharray="8 6 24 6"
          />
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
          <polygon
            points="60,20 95,80 25,80"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.75"
            opacity="0.4"
          />
        </svg>
        <div className="absolute -top-5 right-0 font-mono text-[9px] text-cyan-600/70 tracking-wider">
          ENCRYPTION: AES-256-GCM
        </div>
      </div>

      {/* 4. Animated Circuit Flow Vectors along Margins */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 20 120 L 120 120 L 180 180 L 180 340 L 260 420"
          fill="none"
          stroke="#0284c7"
          strokeWidth="1.2"
          strokeDasharray="10 15"
          className="animate-circuit-flow"
        />
        <circle cx="260" cy="420" r="3" fill="#0284c7" />

        <path
          d="M 98% 300 L 92% 300 L 88% 360 L 88% 540 L 82% 600"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="1.2"
          strokeDasharray="8 12"
          className="animate-circuit-flow"
        />
        <circle cx="82%" cy="600" r="3" fill="#06b6d4" />
      </svg>

      {/* 5. Floating Telemetry Badges */}
      <div className="cyber-telemetry-badge-1 hidden lg:flex items-center gap-2 absolute top-[35%] left-10 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-sky-300/40 shadow-[0_4px_16px_rgba(14,165,233,0.1)] text-slate-700 text-[11px] font-mono">
        <Shield className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
        <span className="text-sky-800 font-semibold">FIREWALL:</span>
        <span className="text-emerald-600 font-bold">ARMED // 0 THREATS</span>
      </div>

      <div className="cyber-telemetry-badge-2 hidden lg:flex items-center gap-2 absolute top-[62%] right-12 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-cyan-300/40 shadow-[0_4px_16px_rgba(6,182,212,0.1)] text-slate-700 text-[11px] font-mono">
        <Activity className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
        <span className="text-sky-800 font-semibold">PACKET_SNIFFER:</span>
        <span className="text-cyan-700">INSPECTING TLS_v1.3</span>
      </div>

      <div className="cyber-telemetry-badge-3 hidden xl:flex items-center gap-2 absolute bottom-[18%] left-16 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-sky-300/40 shadow-[0_4px_16px_rgba(14,165,233,0.1)] text-slate-700 text-[11px] font-mono">
        <Lock className="w-3.5 h-3.5 text-emerald-600" />
        <span className="text-sky-800 font-semibold">ROOT_AUTH:</span>
        <span className="text-slate-600">ED25519 VERIFIED</span>
      </div>

      {/* 6. Corner Cyber Brackets */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-sky-500/50 leading-none">
        + [SEC_NODE: 01]
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-sky-500/50 leading-none text-right">
        [SYS_MONITOR: ACTIVE] +
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-sky-500/50 leading-none">
        + [HASH: SHA256_STABLE]
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-sky-500/50 leading-none text-right">
        [STREAM: 10 Gbps] +
      </div>
    </div>
  )
}
