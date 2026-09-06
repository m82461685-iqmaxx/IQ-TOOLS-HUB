'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Github, Instagram, Send, ArrowRight, Terminal } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const contactMethods = [
  {
    icon: Mail,
    label: 'Direct Email',
    value: 'iqmaxxdk143@gmail.com',
    href: 'mailto:iqmaxxdk143@gmail.com',
    color: '#0284c7',
    description: 'Best for project inquiries, technical collaborations, and questions',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'iqmaxxdk143-svg',
    href: 'https://github.com/iqmaxxdk143-svg?tab=repositories',
    color: '#0f172a',
    description: 'Issues, pull requests, contributions, and tool repositories',
    external: true,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@iq_maxx143',
    href: 'https://www.instagram.com/iq_maxx143/?igsh=MWZrd29ubzRnMHNmdw%3D%3D',
    color: '#e1306c',
    description: 'Updates, developer insights, and terminal tool previews',
    external: true,
  },
]

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [animationTriggered, setAnimationTriggered] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  useEffect(() => {
    if (reducedMotion) {
      setAnimationTriggered(true)
      return
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          if (!animationTriggered) {
            animateEntrance()
            setAnimationTriggered(true)
          }
        },
        onEnterBack: () => {
          if (!animationTriggered) {
            animateEntrance()
            setAnimationTriggered(true)
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion, animationTriggered])

  const animateEntrance = () => {
    gsap.fromTo(
      '.contact-card',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    )
    gsap.fromTo(
      '.cta-card',
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', delay: 0.3 }
    )
  }

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setEmailSent(true)
    setTimeout(() => setEmailSent(false), 3000)
    window.location.href = 'mailto:iqmaxxdk143@gmail.com'
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 px-4"
      aria-labelledby="contact-heading"
    >
      <div className="relative z-10 section-container">
        <div className="section-header">
          <span className="section-tag">// DIRECT CHANNELS</span>
          <h2 id="contact-heading" className="section-title">
            Connect with IQ TOOL HUB
          </h2>
          <p className="section-subtitle">
            Have an idea, project, collaboration, or question? Reach out through any channel below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                onClick={method.label.includes('Email') ? handleEmailClick : undefined}
                className={cn(
                  'contact-card relative glass-card bg-white/85 rounded-2xl p-6 border-sky-200/80 group overflow-hidden',
                  'flex flex-col items-center text-center transition-all duration-300 shadow-sm',
                  'hover:border-sky-400 hover:shadow-md'
                )}
              >
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 bg-sky-50 border border-sky-200 shadow-sm">
                  <method.icon className="w-7 h-7" style={{ color: method.color }} aria-hidden="true" />
                </div>

                <h3 className="font-title text-base font-bold text-slate-950 mb-1">{method.label}</h3>
                <p className="font-mono text-xs text-sky-700 font-bold mb-3">{method.value}</p>
                <p className="text-slate-600 text-xs leading-relaxed flex-1">{method.description}</p>

                <div className="mt-4 flex items-center gap-2 text-sky-700 font-bold group-hover:text-sky-950 transition-colors">
                  <span className="font-mono text-xs">OPEN</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>

          <div className="cta-card relative glass-panel-strong bg-white/90 rounded-3xl p-8 lg:p-12 border-sky-300/80 text-center overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-600" aria-hidden="true" />

            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-sky-600" aria-hidden="true" />
                <h3 className="font-title text-2xl lg:text-3xl font-bold text-slate-950">Send a Message</h3>
              </div>

              <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed text-sm">
                Direct email for project proposals, security research collaborations, or just to say hello.
              </p>

              <a
                href="mailto:iqmaxxdk143@gmail.com"
                onClick={handleEmailClick}
                className={cn(
                  'btn-primary group inline-flex items-center gap-3 w-full sm:w-auto justify-center',
                  emailSent && 'bg-emerald-600 hover:bg-emerald-700 cursor-default'
                )}
              >
                {emailSent ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Opening mail client...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                    <span>SEND EMAIL</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </>
                )}
              </a>

              {emailSent && (
                <p className="mt-4 text-emerald-600 font-mono text-sm animate-in font-bold">Check your mail client â†’</p>
              )}

              <div className="mt-8 pt-8 border-t border-sky-100">
                <p className="text-sky-800 text-sm font-mono font-semibold">
                  iqmaxxdk143@gmail.com
                </p>
              </div>
            </div>
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