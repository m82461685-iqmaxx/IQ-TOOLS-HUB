'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface LogoPartProps {
  index: number
  totalParts: number
  src: string
  alt: string
  reassembled?: boolean
  onReassembleComplete?: () => void
}

export function LogoParts({ index, totalParts, src, alt, reassembled, onReassembleComplete }: LogoPartProps) {
  const partRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!partRef.current) return

    if (reassembled && !isAnimating) {
      setIsAnimating(true)
      gsap.fromTo(
        partRef.current,
        {
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 300,
          rotation: (Math.random() - 0.5) * 180,
          scale: 0.6,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: index * 0.06,
          ease: 'power3.out',
          onComplete: () => {
            if (index === totalParts - 1 && onReassembleComplete) {
              onReassembleComplete()
            }
          },
        }
      )
    }
  }, [reassembled, index, totalParts, isAnimating, onReassembleComplete])

  return (
    <div
      ref={partRef}
      className={cn(
        'absolute inset-0 transition-all duration-500',
        reassembled ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        clipPath: `polygon(${
          (index / totalParts) * 100
        }% 0, ${((index + 1) / totalParts) * 100}% 0, ${((index + 1) / totalParts) * 100}% 100%, ${
          (index / totalParts) * 100
        }% 100%)`,
      }}
      aria-hidden={reassembled ? 'false' : 'true'}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        aria-hidden="true"
      />
    </div>
  )
}

interface AnimatedLogoProps {
  src?: string
  alt?: string
  parts?: number
  triggerSelector?: string
  className?: string
  priority?: boolean
  showAura?: boolean
}

export function AnimatedLogo({
  src = '/Firefly.png',
  alt = 'IQ TOOL HUB',
  parts = 5,
  triggerSelector = '#main-content',
  className = '',
  showAura = false,
}: AnimatedLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [reassembled, setReassembled] = useState(false)
  const [disassembled, setDisassembled] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setReassembled(true)
      return
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerSelector,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          
          if (progress > 0.1 && !disassembled) {
            setDisassembled(true)
          }
          
          if (progress > 0.3 && !reassembled) {
            setReassembled(true)
          }
        },
        onLeaveBack: () => {
          setDisassembled(false)
          setReassembled(false)
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [reducedMotion, triggerSelector, disassembled])

  return (
    <div
      ref={containerRef}
      className={cn('relative inline-flex items-center justify-center', className)}
      aria-label={alt}
    >
      {showAura && (
        <div
          className="absolute inset-0 -z-10 rounded-full bg-cyan-400/20 blur-2xl animate-logo-aura pointer-events-none"
          aria-hidden="true"
        />
      )}

      {!disassembled && !reassembled && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        />
      )}
      
      {disassembled && !reassembled && (
        <>
          {[...Array(parts)].map((_, i) => (
            <LogoPartProps
              key={i}
              index={i}
              totalParts={parts}
              src={src}
              alt={`${alt} part ${i + 1}`}
              reassembled={false}
            />
          ))}
        </>
      )}
      
      {reassembled && (
        <>
          {[...Array(parts)].map((_, i) => (
            <LogoPartProps
              key={i}
              index={i}
              totalParts={parts}
              src={src}
              alt={`${alt} part ${i + 1}`}
              reassembled={true}
              onReassembleComplete={i === parts - 1 ? () => {} : undefined}
            />
          ))}
        </>
      )}
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

const LogoPartProps = LogoParts as typeof LogoParts & { displayName?: string }
LogoPartProps.displayName = 'LogoPart'