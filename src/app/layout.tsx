import { EventEmitter } from 'events'
EventEmitter.defaultMaxListeners = 20

import type { Metadata } from "next";
import { Inter } from "next/font/google";
// styles
import '@rainbow-me/rainbowkit/styles.css';
import "@/styles/core/flag-icon.min.css";

import "@/styles/global.css";
import "@/styles/fonts.css";
import "@/styles/broccoli.css";

import Script from "next/script";
import { AppProviders } from "@/providers/AppProviders";
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Caramelo",
  description: "Caramelo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/global.css" />
      </head>
      <body className={inter.className}>
        <AppProviders>
          <Header />
            {children}
          <Footer />
          <Script src="/js/main-app.js" strategy="afterInteractive" />
          <Script src="/js/page.js" strategy="afterInteractive" />
          <Script src="/js/javascript_01.js" strategy="afterInteractive" />
          <Script src="/js/javascript_02.js" strategy="afterInteractive" />
        </AppProviders>
      </body>
    </html>
  );
}
