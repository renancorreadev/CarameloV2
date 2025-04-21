import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import "../styles/fonts.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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

      </head>
      <body className={inter.className}>
        {children}
        <Script src="/js/main-app.js" strategy="afterInteractive" />
        <Script src="/js/page.js" strategy="afterInteractive" />
        <Script src="/js/javascript_01.js" strategy="afterInteractive" />
        <Script src="/js/javascript_02.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
