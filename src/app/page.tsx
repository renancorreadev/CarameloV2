import Script from "next/script";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Script src="/js/main-app.js" strategy="afterInteractive" />
      <Script src="/js/page.js" strategy="afterInteractive" />
      <Script src="/js/javascript_01.js" strategy="afterInteractive" />
      <Script src="/js/javascript_02.js" strategy="afterInteractive" />

      <main className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-center text-4xl font-bold text-orange-500 mb-4">Caramelo</h2>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
          <p className="text-gray-700">Testando classes do Tailwind</p>
        </div>
      </main>
    </React.Fragment>
  );
}
