import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Build Website Travel | Independent Travel Advisor',
  description:
    'Bespoke travel planning and curated destination guides from an independent travel advisor. Personalized itineraries, expert advice, and unforgettable journeys.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>%E2%9C%88%EF%B8%8F</text></svg>"
        />
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6acc1cfc23bfa78d7d9fa6ee"></script>
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}