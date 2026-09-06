'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Monitor, Terminal, Cpu, Layers, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tuiDemo = [
  { type: 'prompt', content: 'iq-tool --tui' },
  { type: 'output', content: 'â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”' },
  { type: 'output', content: 'â”‚  IQ TOOL HUB â€” TERMINAL USER INTERFACE v3.2                â”‚' },
  { type: 'output', content: 'â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤' },
  { type: 'output', content: 'â”‚  [1] NETWORK     Async port scanner & packet inspector    â”‚' },
  { type: 'output', content: 'â”‚  [2] SECURITY    TLS audit & vulnerability heuristics      â”‚' },
  { type: 'output', content: 'â”‚  [3] RECON       OSINT & subdomain enumerator              â”‚' },
  { type: 'output', content: 'â”‚  [4] AUTOMATION  Lightweight workflow & script engine      â”‚' },
  { type: 'output', content: 'â”‚  [5] UTILITIES   System metrics & hex payload helper       â”‚' },
  { type: 'output', content: 'â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤' },
  { type: 'status', content: 'STATUS // READY                                0 ERRORS      â”‚' },
  { type: 'output', content: 'â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜' },
  { type: 'prompt', content: '_' },
]

const cliDemo = [
  { type: 'prompt', content: 'iq-tool network scan --target 192.168.1.0/24 --ports 1-1000' },
  { type: 'output', content: 'â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”' },
  { type: 'output', content: 'â”‚  NETWORK SCANNER â€” SYN STEALTH PIPELINE                    â”‚' },
  { type: 'output', content: 'â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤' },
  { type: 'success', content: 'âœ” Host 192.168.1.1     â€” 22, 80, 443 [OPEN]' },
  { type: 'success', content: 'âœ” Host 192.168.1.15    â€” 22, 3306 [OPEN]' },
  { type: 'success', content: 'âœ” Host 192.168.1.42    â€” 80, 8080 [OPEN]' },
  { type: 'output', content: 'â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤' },
  { type: 'output', content: 'â”‚  SCAN COMPLETED â€” 3 hosts active, 7 ports mapped           â”‚' },
  { type: 'output', content: 'â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜' },
  { type: 'prompt', content: 'iq-tool security audit --target 192.168.1.1' },
  { type: 'warning', content: 'âš  AUDIT: TLS 1.2 legacy cipher suite detected on 443' },
  { type: 'success', content: 'âœ” PASS: Zero critical memory vulnerabilities found' },
  { type: 'prompt', content: '_' },
]

export function TerminalDemo() {
  const [activeTab, setActiveTab] = useState<'tui' | 'cli'>('tui')
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const animationTriggered = useRef(false)

  useEffect(() => {
    if (reducedMotion) {
      setVisibleLines(Array.from({ length: activeTab === 'tui' ? tuiDemo.length : cliDemo.length }, (_, i) => i))
      return
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: terminalRef.current,
        start: 'top 75%',
        onEnter: () => {
          if (!animationTriggered.current) {
            animateTerminal()
            animationTriggered.current = true
          }
        },
        onEnterBack: () => {
          if (!animationTriggered.current) {
            animateTerminal()
            animationTriggered.current = true
          }
        },
      })
    }, terminalRef)

    return () => ctx.revert()
  }, [reducedMotion])

  const animateTerminal = () => {
    const demo = activeTab === 'tui' ? tuiDemo : cliDemo
    setVisibleLines([])
    demo.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index])
      }, index * (reducedMotion ? 0 : 90))
    })
  }

  useEffect(() => {
    animationTriggered.current = false
    animateTerminal()
  }, [activeTab, reducedMotion])

  const currentDemo = activeTab === 'tui' ? tuiDemo : cliDemo
  const visibleContent = visibleLines.map((i) => currentDemo[i])

  return (
    <section
      id="tui-cli"
      className="relative py-24 lg:py-32 px-4"
      aria-labelledby="tui-cli-heading"
    >
      <div className="relative z-10 section-container">
        {/* Centered Section Header */}
        <div className="section-header">
          <span className="section-tag">// INTERACTIVE EXPERIENCE</span>
          <h2 id="tui-cli-heading" className="section-title">
            Built for the Terminal
          </h2>
          <p className="section-subtitle">
            Minimal overhead, zero runtime bloat. Complete control over your workflow straight from the shell.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Centered Tab Controls */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/80 border border-sky-200/80 backdrop-blur-xl mb-8 shadow-sm" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'tui'}
              aria-controls="tui-panel"
              id="tui-tab"
              onClick={() => setActiveTab('tui')}
              className={cn(
                'px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-2',
                activeTab === 'tui'
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-950'
              )}
            >
              <Monitor className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>TUI INTERFACE</span>
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'cli'}
              aria-controls="cli-panel"
              id="cli-tab"
              onClick={() => setActiveTab('cli')}
              className={cn(
                'px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-2',
                activeTab === 'cli'
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-950'
              )}
            >
              <Terminal className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>CLI WORKFLOW</span>
            </button>
          </div>

          {/* Terminal Showcase Window */}
          <div
            ref={terminalRef}
            className="w-full terminal-window border border-slate-800 shadow-[0_24px_80px_rgba(14,165,233,0.25)]"
            role="tabpanel"
            id={activeTab === 'tui' ? 'tui-panel' : 'cli-panel'}
            aria-labelledby={activeTab === 'tui' ? 'tui-tab' : 'cli-tab'}
          >
            <div className="terminal-header">
              <div className="terminal-dots flex gap-2">
                <span className="terminal-dot bg-red-500/80" aria-hidden="true" />
                <span className="terminal-dot bg-amber-500/80" aria-hidden="true" />
                <span className="terminal-dot bg-emerald-500/80" aria-hidden="true" />
              </div>
              <div className="terminal-title">iq-session ~ {activeTab === 'tui' ? 'tui-view' : 'cli-mode'}</div>
              <div className="w-10" />
            </div>
            
            <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[320px]">
              {visibleContent.map((line, index) => (
                <TerminalLine key={index} line={line} index={visibleLines[index]} />
              ))}
            </div>
          </div>

          {/* Centered Feature Highlights */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 w-full">
            <div className="glass-card bg-white/85 rounded-2xl p-6 text-center flex flex-col items-center border-sky-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4 shadow-sm">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-title text-base sm:text-lg font-bold text-slate-950 mb-2">Zero Dependencies</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Compiled directly to pure native binaries. Runs identically on Linux, macOS, and WSL.
              </p>
            </div>

            <div className="glass-card bg-white/85 rounded-2xl p-6 text-center flex flex-col items-center border-sky-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-title text-base sm:text-lg font-bold text-slate-950 mb-2">60 FPS TUI Render</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Hardware-accelerated terminal canvas with fluid layouts, interactive forms, and instant responsiveness.
              </p>
            </div>

            <div className="glass-card bg-white/85 rounded-2xl p-6 text-center flex flex-col items-center border-sky-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-title text-base sm:text-lg font-bold text-slate-950 mb-2">Composable CLI</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Stream stdin/stdout effortlessly. Built for automation, shell pipelines, and CI/CD security stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TerminalLine({ line, index }: { line: typeof tuiDemo[0]; index: number }) {
  const getStyle = () => {
    switch (line.type) {
      case 'prompt':
        return 'text-sky-400 font-bold'
      case 'output':
        return 'text-slate-400'
      case 'success':
        return 'text-emerald-400'
      case 'warning':
        return 'text-amber-400'
      case 'status':
        return 'text-cyan-400 font-bold'
      default:
        return 'text-slate-300'
    }
  }

  const getPrefix = () => {
    if (line.type === 'prompt') return 'â¯ '
    if (line.type === 'success' || line.type === 'warning') return '  '
    return ''
  }

  return (
    <div
      className={cn(
        'opacity-0 translate-y-1 transition-all duration-300',
        index !== undefined && 'opacity-100 translate-y-0'
      )}
    >
      <span className={getStyle()}>{getPrefix()}{line.content}</span>
      {line.type === 'prompt' && line.content === '_' && <span className="cursor-blink" aria-hidden="true" />}
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