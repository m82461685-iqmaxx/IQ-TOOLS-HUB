import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const armadira = localFont({
  src: '../../public/font/ArmadiraCapitalText-E4wjr.otf',
  variable: '--font-armadira',
  display: 'swap',
})

const goody = localFont({
  src: '../../public/font/Goody.ttf',
  variable: '--font-goody',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'IQ TOOL HUB | Terminal-First Ecosystem • TUI • CLI • Security',
  description: 'A growing minimalist ecosystem of terminal-first tools built for developers, security learners, and command-line enthusiasts.',
  keywords: ['TUI', 'CLI', 'terminal tools', 'open source', 'security tools', 'developer tools', 'command line', 'minimalism'],
  authors: [{ name: 'IQ TOOL HUB' }],
  creator: 'DEEPAK KUMAR.S',
  publisher: 'IQ TOOL HUB',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/iqmaxxdk143-svg?tab=repositories',
    title: 'IQ TOOL HUB | TUI • CLI • SECURITY',
    description: 'A growing ecosystem of terminal-first tools built for developers, security learners, and command-line enthusiasts.',
    siteName: 'IQ TOOL HUB',
    images: [{ url: '/Firefly.png', width: 1200, height: 630, alt: 'IQ TOOL HUB' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IQ TOOL HUB | TUI • CLI • SECURITY',
    description: 'A growing ecosystem of terminal-first tools built for developers, security learners, and command-line enthusiasts.',
    images: ['/Firefly.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${armadira.variable} ${goody.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/Firefly.png" type="image/png" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="min-h-screen bg-white text-slate-800 antialiased selection:bg-sky-500/25 selection:text-sky-950">
        {children}
      </body>
    </html>
  )
}