import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Story } from '@/components/Story'

import { Footer } from '@/components/Footer'

import Script from 'next/script'
import Head from 'next/head'
import { MarqueeBanner } from '@/components/MarqueeBanner'
import { MarqueeMemes } from '@/components/MarqueeMemes'
import { Listing } from '@/components/Listing'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </Head>
      <main className="min-h-screen bg-[#0A0A0A]">
        <Header />
        <Hero />
        <MarqueeBanner />
        <Story />
        <MarqueeMemes />
        <Listing />
        <Footer />
        
        <Script src="/js/main-app.js" strategy="afterInteractive" />
        <Script src="/js/page.js" strategy="afterInteractive" />
        <Script src="/js/javascript_01.js" strategy="afterInteractive" />
        <Script src="/js/javascript_02.js" strategy="afterInteractive" />
      </main>
    </>
  )
}
