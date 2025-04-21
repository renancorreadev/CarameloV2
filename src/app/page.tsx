'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const DynamicHomePage = dynamic(
  () => import('@/features/HomePage/Page').then((mod) => mod.default),
  { ssr: false }
)

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="loading-spinner">Carregando...</div>
  }

  return (
    <React.Fragment>
      <main className="min-h-screen bg-[#0A0A0A]">
        <DynamicHomePage />
      </main>
    </React.Fragment>
  )
}
