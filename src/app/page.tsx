'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SecurityCoreUnlock } from '@/components/SecurityCoreUnlock'
import { TerminalDemo } from '@/components/TerminalDemo'
import { GitHubCore } from '@/components/GitHubCore'
import { Philosophy } from '@/components/Philosophy'
import { Developer } from '@/components/Developer'
import { UXMetrics } from '@/components/UXMetrics'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ThemeFlow } from '@/components/ThemeFlow'
import { FloatingCornerDock } from '@/components/FloatingCornerDock'

export default function Home() {
  return (
    <>
      <ThemeFlow />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <SecurityCoreUnlock />
        <TerminalDemo />
        <GitHubCore />
        <Philosophy />
        <Developer />
        <UXMetrics />
        <Contact />
      </main>
      <Footer />
      <FloatingCornerDock />
    </>
  )
}