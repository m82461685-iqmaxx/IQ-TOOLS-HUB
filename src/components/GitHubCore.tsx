'use client'

import { useRef, useEffect, useState } from 'react'
import { Github, ExternalLink, Star, GitFork, Eye, Code, Download, Terminal, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const repoStats = [
  { icon: Star, label: 'Stars', value: '100% Free' },
  { icon: GitFork, label: 'License', value: 'MIT Open' },
  { icon: Eye, label: 'Tracking', value: 'Zero Spyware' },
  { icon: Code, label: 'Architecture', value: 'Native CLI' },
]

export function GitHubCore() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const copyInstallCmd = () => {
    navigator.clipboard.writeText('git clone https://github.com/iqmaxxdk143-svg/IQ-TUI-CLI-TOOLS-HUB.git')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      ref={sectionRef}
      id="github"
      className="relative py-24 lg:py-32 px-4"
      aria-labelledby="github-heading"
    >
      <div className="relative z-10 section-container">
        {/* Centered Section Header */}
        <div className="section-header">
          <span className="section-tag">// OPEN SOURCE REPOSITORY</span>
          <h2 id="github-heading" className="section-title">
            The Core Is Open
          </h2>
          <p className="section-subtitle">
            Transparent, auditable, and community-driven. Explore the source repository on GitHub.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Centered Main Repository Showcase Card */}
          <div className="w-full glass-card bg-white/85 rounded-3xl p-8 sm:p-12 border-sky-200/80 text-center flex flex-col items-center relative overflow-hidden mb-12 shadow-sm">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 mb-6">
              <Github className="w-4 h-4 text-sky-600" />
              <span className="font-mono text-xs text-sky-900 font-semibold">iqmaxxdk143-svg / IQ-TUI-CLI-TOOLS-HUB</span>
            </div>

            <h3 className="font-title text-2xl sm:text-4xl font-bold text-slate-950 mb-3 tracking-wider">
              IQ-TUI-CLI-TOOLS-HUB
            </h3>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
              Complete terminal ecosystem with built-in modules for network reconnaissance, TLS security auditing, and rich interactive TUI dashboards.
            </p>

            {/* Repository Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mb-8">
              {repoStats.map((stat) => (
                <div key={stat.label} className="p-3.5 rounded-xl bg-white border border-sky-100 text-center shadow-xs">
                  <div className="font-title font-bold text-sm text-slate-950 mb-1">{stat.value}</div>
                  <div className="text-[10px] text-sky-700 font-mono uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <a
              href="https://github.com/iqmaxxdk143-svg?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2.5 !px-8 !py-3.5"
            >
              <Github className="w-4 h-4 text-sky-400" />
              <span>VIEW REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Quick Clone Terminal Box */}
          <div className="w-full glass-panel bg-white/85 rounded-2xl p-6 sm:p-8 border-sky-200/80 shadow-sm flex flex-col items-center text-center">
            <h4 className="font-title text-base sm:text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky-600" />
              <span>Quick Clone & Build</span>
            </h4>

            <div className="w-full max-w-2xl flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto shadow-md">
              <span className="text-sky-400 select-none font-bold">â¯</span>
              <code className="flex-1 text-left select-all text-sky-200">git clone https://github.com/iqmaxxdk143-svg/IQ-TUI-CLI-TOOLS-HUB.git</code>
              <button
                onClick={copyInstallCmd}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all flex items-center gap-1.5 shrink-0"
                aria-label="Copy clone command"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">COPIED</span>
                  </>
                ) : (
                  <span>COPY</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}