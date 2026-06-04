import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Latency Alert Dashboard — Real-time API Performance Monitoring',
  description: 'Monitor API response times across multiple endpoints and get smart alerts when latency spikes before your customers notice.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bd4899b3-8630-45b4-b3fb-41635a68d94b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
