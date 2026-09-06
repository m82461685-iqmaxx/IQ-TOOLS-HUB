'use client'

import { Github, Instagram, Mail, ExternalLink, Terminal, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 border-t border-sky-200/80 bg-white/85 backdrop-blur-xl overflow-hidden" role="contentinfo">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-32 bg-gradient-to-b from-sky-400/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Logo & Brand Header */}
        <Link href="#home" className="group flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6" aria-label="IQ TOOL HUB Home">
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img
              src="/Firefly.png"
              alt="IQ TOOL HUB Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(14,165,233,0.35)]"
            />
          </div>
          <span className="font-title text-2xl tracking-[0.25em] text-slate-950 font-bold group-hover:text-sky-600 transition-colors">
            IQ TOOL HUB
          </span>
        </Link>

        {/* Minimalist Subtext */}
        <p className="text-slate-600 text-sm max-w-lg leading-relaxed mb-8">
          The next-generation terminal ecosystem built for security researchers, automation engineers, and command-line purists.
        </p>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs font-mono text-sky-800">
          <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 flex items-center gap-1.5 font-semibold">
            <Terminal className="w-3 h-3 text-sky-600" /> TUI / CLI
          </span>
          <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 flex items-center gap-1.5 font-semibold">
            <Shield className="w-3 h-3 text-blue-600" /> SECURITY CORE
          </span>
          <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3 h-3 text-emerald-600" /> ZERO-BLOAT
          </span>
        </div>

        {/* Navigation Links Grid (Centered) */}
        <div className="w-full max-w-2xl py-8 border-y border-sky-200/80 mb-10">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-semibold">
              <li>
                <a href="#home" className="text-slate-600 hover:text-slate-950 transition-colors duration-200">
                  Overview
                </a>
              </li>
              <li>
                <a href="#tui-cli" className="text-slate-600 hover:text-slate-950 transition-colors duration-200">
                  Terminal Engine
                </a>
              </li>
              <li>
                <a href="#security-core" className="text-slate-600 hover:text-slate-950 transition-colors duration-200">
                  Security
                </a>
              </li>
              <li>
                <a href="#github" className="text-slate-600 hover:text-slate-950 transition-colors duration-200">
                  Repositories
                </a>
              </li>
              <li>
                <a href="#philosophy-functions" className="text-slate-600 hover:text-slate-950 transition-colors duration-200">
                  Philosophy & Functions
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-600 hover:text-slate-950 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-slate-950 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Links & System Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 pt-2 text-xs text-slate-600 font-mono">
          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-700 font-semibold">ALL SYSTEMS OPERATIONAL</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/iqmaxxdk143-svg?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-slate-700 hover:text-slate-950 hover:border-sky-400 hover:bg-sky-50 shadow-xs transition-all duration-300"
              aria-label="GitHub Repositories"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/iq_maxx143/?igsh=MWZrd29ubzRnMHNmdw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-slate-700 hover:text-slate-950 hover:border-sky-400 hover:bg-sky-50 shadow-xs transition-all duration-300"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:iqmaxxdk143@gmail.com"
              className="w-9 h-9 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-slate-700 hover:text-slate-950 hover:border-sky-400 hover:bg-sky-50 shadow-xs transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div>
            <span className="font-semibold">Â© {currentYear} IQ TOOL HUB. BY IQ MAXX.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}