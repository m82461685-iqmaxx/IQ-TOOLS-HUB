'use client'

import { useState } from 'react'
import { Github, Instagram, Mail, ExternalLink, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloatingCornerDock() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const socialLinks = [
    {
      id: 'portfolio',
      label: "DK's Portfolio (Founder)",
      isImage: true,
      imageSrc: '/developer_portrait.png',
      href: 'https://dk-s-profile.vercel.app/',
      highlighted: true,
      bgClass:
        'bg-white text-slate-900 border-2 border-cyan-400 hover:border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.55)] ring-2 ring-cyan-300/40',
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: Github,
      href: 'https://github.com/iqmaxxdk143-svg?tab=repositories',
      bgClass:
        'bg-slate-950 text-white border-2 border-slate-800 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/iq_maxx143/?igsh=MWZrd29ubzRnMHNmdw%3D%3D',
      bgClass:
        'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white border-2 border-pink-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.5)]',
    },
    {
      id: 'mail',
      label: 'Email',
      icon: Mail,
      href: 'mailto:iqmaxxdk143@gmail.com',
      bgClass:
        'bg-sky-600 text-white border-2 border-sky-400 hover:bg-sky-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]',
    },
  ]

  return (
    <aside
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto select-none"
      aria-label="Quick social and portfolio channels"
    >
      {/* Floating Action Pill Dock */}
      <div className="flex flex-col items-center gap-3 p-2.5 rounded-full bg-white/95 backdrop-blur-2xl border-2 border-sky-300 shadow-[0_12px_35px_rgba(14,165,233,0.25)]">
        {socialLinks.map((item) => (
          <div key={item.id} className="relative flex items-center">
            {/* Tooltip on hover */}
            <span
              className={cn(
                'absolute right-16 px-3.5 py-1.5 rounded-xl bg-slate-950 text-white font-mono text-xs font-bold whitespace-nowrap shadow-xl transition-all duration-200 pointer-events-none border border-slate-700 flex items-center gap-1.5',
                hoveredButton === item.id
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-2'
              )}
            >
              {item.highlighted && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{item.label}</span>
              <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
            </span>

            {/* Round Shape Action Button */}
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onMouseEnter={() => setHoveredButton(item.id)}
              onMouseLeave={() => setHoveredButton(null)}
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md relative overflow-hidden',
                item.bgClass,
                'hover:scale-110 active:scale-95'
              )}
              aria-label={item.label}
            >
              {item.isImage ? (
                <div className="w-full h-full p-0.5 rounded-full flex items-center justify-center bg-gradient-to-tr from-cyan-400 via-sky-300 to-blue-500">
                  <img
                    src={item.imageSrc}
                    alt="DK Portfolio"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/sub/file_00000000461c82118e64a4fee5fffb81-removebg-preview.png'
                    }}
                  />
                  {/* Active Beacon Dot */}
                  <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                </div>
              ) : (
                item.icon && <item.icon className="w-5 h-5" />
              )}
            </a>
          </div>
        ))}
      </div>
    </aside>
  )
}