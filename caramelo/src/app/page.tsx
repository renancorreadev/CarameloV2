import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Story } from '@/components/Story'
import { Listing } from '@/components/Listing'
import { Footer } from '@/components/Footer'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <Hero />
      <Story />
      <Listing />
      <Footer />
      
      <Script src="/js/main-app.js" strategy="afterInteractive" />
      <Script src="/js/page.js" strategy="afterInteractive" />
      <Script src="/js/javascript_01.js" strategy="afterInteractive" />
      <Script src="/js/javascript_02.js" strategy="afterInteractive" />
    </main>
  )
} 