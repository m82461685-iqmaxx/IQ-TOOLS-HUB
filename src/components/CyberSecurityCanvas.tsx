'use client'

import { useRef, useEffect } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  type: 'firewall' | 'sentinel' | 'cipher' | 'gateway' | 'honeypot'
  label: string
  pulse: number
  pulseSpeed: number
  alpha: number
}

interface Packet {
  sourceIndex: number
  targetIndex: number
  progress: number
  speed: number
  color: string
}

interface CryptoToken {
  x: number
  y: number
  vy: number
  text: string
  alpha: number
  size: number
}

const CYBER_TOKENS = [
  '0x7F2A',
  'SHA-256',
  'AES-GCM-256',
  'RSA-4096',
  'PORT:443',
  'TLS_v1.3',
  '01001101',
  'SYN-ACK',
  'PKT_ALLOW',
  'SIG_OK',
  'SSH_ECDSA',
  'FIREWALL:ON',
  'CHACHA20',
  'ED25519',
  'MEM_GUARD',
  'PACKET_INSPECT',
  'SEC_RULE:PASS',
  'IPV6_TUNNEL',
  'HASH_VERIFIED',
  '0xDEADBEEF',
  'SANDBOX_OK',
]

export function CyberSecurityCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
      mouse.targetX = -1000
      mouse.targetY = -1000
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    // Resize handler
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      initNodes()
    }

    window.addEventListener('resize', handleResize)

    // Initialize Cyber Nodes
    const nodeTypes: Array<Node['type']> = ['firewall', 'sentinel', 'cipher', 'gateway', 'honeypot']
    const nodeLabels = ['FW_NODE', 'SNTL_01', 'AES_HUB', 'GW_PROXY', 'HONEY_POT', 'SEC_TRACE']
    let nodes: Node[] = []
    let packets: Packet[] = []
    let cryptoTokens: CryptoToken[] = []

    const initNodes = () => {
      const count = Math.min(Math.floor((width * height) / 28000), 55)
      nodes = []
      for (let i = 0; i < count; i++) {
        const type = nodeTypes[i % nodeTypes.length]
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: 2.5 + Math.random() * 2,
          baseRadius: 2.5 + Math.random() * 2,
          type,
          label: nodeLabels[i % nodeLabels.length],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          alpha: 0.4 + Math.random() * 0.4,
        })
      }

      // Initialize crypto tokens
      cryptoTokens = []
      const tokenCount = Math.min(Math.floor(width / 70), 24)
      for (let i = 0; i < tokenCount; i++) {
        cryptoTokens.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vy: 0.2 + Math.random() * 0.4,
          text: CYBER_TOKENS[Math.floor(Math.random() * CYBER_TOKENS.length)],
          alpha: 0.12 + Math.random() * 0.22,
          size: 9 + Math.floor(Math.random() * 3),
        })
      }
    }

    initNodes()

    // Spawn dynamic data packet across connections
    const maybeSpawnPacket = (i: number, j: number) => {
      if (packets.length > 25) return
      if (Math.random() < 0.015) {
        packets.push({
          sourceIndex: i,
          targetIndex: j,
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
          color: Math.random() > 0.5 ? '#0284c7' : '#06b6d4',
        })
      }
    }

    // Radar scanning configuration
    let radarAngle = 0
    const radarCenter = { x: 0, y: 0 }

    // Hexagon background matrix parameters
    const hexRadius = 38
    const hexHeight = hexRadius * Math.sqrt(3)

    const drawHex = (cx: number, cy: number, r: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + Math.PI / 6
        const hx = cx + r * Math.cos(angle)
        const hy = cy + r * Math.sin(angle)
        if (i === 0) ctx.moveTo(hx, hy)
        else ctx.lineTo(hx, hy)
      }
      ctx.closePath()
    }

    let time = 0

    // Animation Loop
    const render = () => {
      time += 0.015
      ctx.clearRect(0, 0, width, height)

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1
      mouse.y += (mouse.targetY - mouse.y) * 0.1

      // 1. Draw Subtle Hexagonal Cyber Grid Pattern
      ctx.save()
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.035)'
      ctx.lineWidth = 0.75
      const cols = Math.ceil(width / (hexRadius * 1.5)) + 1
      const rows = Math.ceil(height / hexHeight) + 1

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const cx = c * hexRadius * 1.5
          const cy = r * hexHeight + ((c % 2) * hexHeight) / 2
          drawHex(cx, cy, hexRadius - 1)
          ctx.stroke()
        }
      }
      ctx.restore()

      // 2. Draw Floating Cryptographic Hex & Opcode Tokens
      ctx.save()
      ctx.font = '10px "JetBrains Mono", monospace'
      for (const token of cryptoTokens) {
        token.y -= token.vy
        if (token.y < -20) {
          token.y = height + 20
          token.x = Math.random() * width
          token.text = CYBER_TOKENS[Math.floor(Math.random() * CYBER_TOKENS.length)]
        }

        ctx.fillStyle = `rgba(2, 132, 199, ${token.alpha})`
        ctx.fillText(token.text, token.x, token.y)
      }
      ctx.restore()

      // 3. Update & Draw Cyber Defense Nodes & Circuit Links
      const maxDistance = 145

      // Node connections & Packet spawning
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDistance) {
            const linkAlpha = (1 - dist / maxDistance) * 0.22
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(14, 165, 233, ${linkAlpha})`
            ctx.lineWidth = 1
            ctx.stroke()

            maybeSpawnPacket(i, j)
          }
        }

        // Connect nearby nodes to Mouse cursor (Defense Shield forcefield)
        if (mouse.active) {
          const mdx = a.x - mouse.x
          const mdy = a.y - mouse.y
          const mDist = Math.hypot(mdx, mdy)
          const mouseFieldRadius = 170

          if (mDist < mouseFieldRadius) {
            const mAlpha = (1 - mDist / mouseFieldRadius) * 0.4
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`
            ctx.lineWidth = 1.2
            ctx.setLineDash([4, 4])
            ctx.stroke()
            ctx.setLineDash([])

            // Gentle magnetic repulsion
            const force = (1 - mDist / mouseFieldRadius) * 0.4
            a.vx += (mdx / mDist) * force * 0.2
            a.vy += (mdy / mDist) * force * 0.2
          }
        }
      }

      // Update & Draw Packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p]
        pkt.progress += pkt.speed

        if (pkt.progress >= 1) {
          packets.splice(p, 1)
          continue
        }

        const source = nodes[pkt.sourceIndex]
        const target = nodes[pkt.targetIndex]
        if (!source || !target) {
          packets.splice(p, 1)
          continue
        }

        const px = source.x + (target.x - source.x) * pkt.progress
        const py = source.y + (target.y - source.y) * pkt.progress

        ctx.save()
        ctx.beginPath()
        ctx.arc(px, py, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = pkt.color
        ctx.shadowColor = pkt.color
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.restore()
      }

      // Render Nodes
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        // Bounce on boundaries
        if (node.x < 20) {
          node.x = 20
          node.vx *= -1
        } else if (node.x > width - 20) {
          node.x = width - 20
          node.vx *= -1
        }
        if (node.y < 20) {
          node.y = 20
          node.vy *= -1
        } else if (node.y > height - 20) {
          node.y = height - 20
          node.vy *= -1
        }

        // Dampen velocity to prevent runaway speeds
        node.vx *= 0.99
        node.vy *= 0.99
        if (Math.abs(node.vx) < 0.1) node.vx = (Math.random() - 0.5) * 0.4
        if (Math.abs(node.vy) < 0.1) node.vy = (Math.random() - 0.5) * 0.4

        node.pulse += node.pulseSpeed
        const currentPulse = Math.sin(node.pulse)
        const nodeRadius = node.baseRadius + currentPulse * 0.8

        ctx.save()
        // Outer glow halo
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius * 2.8, 0, Math.PI * 2)
        ctx.fillStyle =
          node.type === 'firewall'
            ? 'rgba(2, 132, 199, 0.08)'
            : node.type === 'cipher'
            ? 'rgba(16, 185, 129, 0.08)'
            : 'rgba(6, 182, 212, 0.08)'
        ctx.fill()

        // Inner solid core
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle =
          node.type === 'firewall'
            ? '#0284c7'
            : node.type === 'cipher'
            ? '#059669'
            : '#0ea5e9'
        ctx.shadowColor = '#38bdf8'
        ctx.shadowBlur = 6
        ctx.fill()

        // Mini node label
        ctx.font = '8px "JetBrains Mono", monospace'
        ctx.fillStyle = 'rgba(3, 105, 161, 0.55)'
        ctx.fillText(node.label, node.x + 8, node.y + 3)
        ctx.restore()
      }

      // 4. Draw Corner Cyber Threat Sonar Radar
      radarCenter.x = width - 110
      radarCenter.y = height - 110
      const radarRadius = 80

      radarAngle += 0.025
      if (radarAngle > Math.PI * 2) radarAngle = 0

      ctx.save()
      ctx.translate(radarCenter.x, radarCenter.y)

      // Outer rings
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.18)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(0, 0, radarRadius, 0, Math.PI * 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(0, 0, radarRadius * 0.65, 0, Math.PI * 2)
      ctx.setLineDash([3, 3])
      ctx.stroke()
      ctx.setLineDash([])

      ctx.beginPath()
      ctx.arc(0, 0, radarRadius * 0.35, 0, Math.PI * 2)
      ctx.stroke()

      // Crosshairs
      ctx.beginPath()
      ctx.moveTo(-radarRadius - 6, 0)
      ctx.lineTo(radarRadius + 6, 0)
      ctx.moveTo(0, -radarRadius - 6)
      ctx.lineTo(0, radarRadius + 6)
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.12)'
      ctx.stroke()

      // Radar Sweep Cone
      const sweepGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radarRadius)
      sweepGradient.addColorStop(0, 'rgba(6, 182, 212, 0.25)')
      sweepGradient.addColorStop(1, 'rgba(14, 165, 233, 0.0)')

      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.arc(0, 0, radarRadius, radarAngle - 0.5, radarAngle)
      ctx.closePath()
      ctx.fillStyle = sweepGradient
      ctx.fill()

      // Rotating Sweep Line
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(radarRadius * Math.cos(radarAngle), radarRadius * Math.sin(radarAngle))
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.7)'
      ctx.lineWidth = 1.5
      ctx.shadowColor = '#06b6d4'
      ctx.shadowBlur = 8
      ctx.stroke()

      // Radar Status Label
      ctx.font = '8px "JetBrains Mono", monospace'
      ctx.fillStyle = 'rgba(2, 132, 199, 0.6)'
      ctx.fillText('THREAT_RADAR // ACTIVE', -radarRadius, radarRadius + 16)

      ctx.restore()

      // 5. Interactive Mouse Cyber Defense Reticle
      if (mouse.active) {
        ctx.save()
        ctx.translate(mouse.x, mouse.y)

        // Outer rotating dashed shield ring
        ctx.rotate(time * 0.6)
        ctx.strokeStyle = 'rgba(14, 165, 233, 0.35)'
        ctx.lineWidth = 1.2
        ctx.setLineDash([6, 6])
        ctx.beginPath()
        ctx.arc(0, 0, 28, 0, Math.PI * 2)
        ctx.stroke()

        // Inner counter-rotating ring
        ctx.rotate(-time * 1.2)
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.45)'
        ctx.setLineDash([3, 4])
        ctx.beginPath()
        ctx.arc(0, 0, 16, 0, Math.PI * 2)
        ctx.stroke()

        // Center dot
        ctx.setLineDash([])
        ctx.beginPath()
        ctx.arc(0, 0, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = '#0284c7'
        ctx.shadowColor = '#38bdf8'
        ctx.shadowBlur = 6
        ctx.fill()

        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ opacity: 0.92 }}
    />
  )
}
