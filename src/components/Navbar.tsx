'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, Menu, X, ExternalLink, GraduationCap, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#home', label: 'HOME' },
  { href: '#tui-cli', label: 'TUI / CLI' },
  { href: '#security-core', label: 'SECURITY' },
  { href: '#github', label: 'REPOSITORIES' },
  { href: '#philosophy-functions', label: 'PHILOSOPHY & FUNCTIONS' },
  { href: '#about', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl border-b-2 border-sky-200/90 shadow-[0_8px_30px_rgba(14,165,233,0.12)]'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Frameless Brand Logo with Holographic Transition Effects */}
          <Link
            href="#home"
            className="flex items-center gap-3 group select-none relative"
            aria-label="IQ TOOL HUB Home"
          >
            {/* Holographic Glowing Aura Ring behind Topbar Logo */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/30 via-cyan-400/40 to-blue-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />
              {/* Rotating Mini Security Reticle */}
              <div
                className="absolute -inset-1 rounded-full border border-dashed border-sky-400/50 opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />
              <img
                src="/Firefly.png"
                alt="IQ TOOL HUB"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(14,165,233,0.4)] transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-title text-xl sm:text-2xl font-bold tracking-wider text-slate-950 group-hover:text-sky-600 transition-colors">
                IQ TOOL HUB
              </span>
              <span className="hidden sm:block font-mono text-[9px] text-sky-600/75 tracking-widest uppercase -mt-1 font-semibold group-hover:text-sky-500 transition-colors">
                // CYBER SECURITY
              </span>
            </div>
          </Link>

          {/* Nav Items & Thick Taskbar Button */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/80 border-2 border-sky-200/80 shadow-xs">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider text-slate-800 font-bold',
                    'transition-all duration-200 hover:text-sky-600 hover:bg-sky-50',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* DK's Portfolio Highlighted Action Button */}
            <a
              href="https://dk-s-profile.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs rounded-2xl flex items-center gap-2 border-2 border-cyan-400 bg-white hover:border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 font-bold text-slate-900 hover:scale-105 active:scale-95 group font-mono"
              aria-label="DK's Portfolio"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden border border-cyan-400 p-0.5 bg-cyan-100 flex items-center justify-center shrink-0">
                <img
                  src="/developer_portrait.png"
                  alt="DK"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/sub/file_00000000461c82118e64a4fee5fffb81-removebg-preview.png'
                  }}
                />
              </div>
              <span className="group-hover:text-cyan-700 transition-colors">DK'S PORTFOLIO</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-cyan-600 transition-colors" />
            </a>

            {/* Thick Taskbar Action Button */}
            <a
              href="https://github.com/iqmaxxdk143-svg?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-2.5 !text-xs !rounded-2xl flex items-center gap-2 border-2 border-slate-900 shadow-md hover:shadow-lg"
            >
              <Github className="w-4 h-4 text-sky-400" aria-hidden="true" />
              <span>GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
            </a>
          </nav>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center gap-2.5">
            <a
              href="https://github.com/iqmaxxdk143-svg?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-950 text-white border-2 border-slate-900 shadow-sm flex items-center justify-center"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4 text-sky-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border-2 border-sky-200 text-slate-800 hover:text-slate-950 shadow-sm flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-menu"
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-500 ease-in-out border-t-2 border-sky-200/80 bg-white/95 backdrop-blur-3xl',
            mobileMenuOpen ? 'max-h-[85vh] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col items-center gap-5 px-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16">
                <img
                  src="/Firefly.png"
                  alt="IQ TOOL HUB"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(14,165,233,0.4)]"
                />
              </div>
              <span className="font-title text-xl font-bold text-slate-950 tracking-wider">
                IQ TOOL HUB
              </span>
              <p className="text-sky-700 text-xs font-mono tracking-widest uppercase font-bold">
                TUI Ã¢â‚¬Â¢ CLI Ã¢â‚¬Â¢ SECURITY Ã¢â‚¬Â¢ OPEN SOURCE
              </p>
            </div>

            <div className="w-full border-t border-sky-200 my-1" />

            <div className="w-full flex flex-col items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-sm font-mono tracking-wider text-slate-900 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all font-bold border border-transparent hover:border-sky-200"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/iqmaxxdk143-svg?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full justify-center mt-3 !py-3.5"
              >
                <Github className="w-4 h-4 mr-2 text-sky-400" />
                OPEN GITHUB
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-60" />
              </a>
            </div>

            <div className="w-full border-t border-sky-200 my-1" />

            <a
              href="https://dk-s-profile.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-50 hover:bg-cyan-100 border border-cyan-300 text-xs font-mono text-slate-800 transition-colors shadow-sm group"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden border border-cyan-400">
                <img
                  src="/developer_portrait.png"
                  alt="DK"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/sub/file_00000000461c82118e64a4fee5fffb81-removebg-preview.png'
                  }}
                />
              </div>
              <span className="font-bold group-hover:text-cyan-800">DEEPAK KUMAR.S (DK)</span>
              <span className="text-cyan-400">â€¢</span>
              <span className="text-cyan-700 font-bold">PORTFOLIO</span>
              <ExternalLink className="w-3 h-3 text-cyan-600 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}