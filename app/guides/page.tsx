import type { Metadata } from 'next'
import GuidesExplorer from '@/components/GuidesExplorer'
import { getGuides } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Destination Guides | Build Website Travel',
  description: 'Curated destination guides covering Europe, Asia, the Americas, Africa, and Oceania.',
}

export default async function GuidesPage() {
  const guides = await getGuides()

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-clay mb-4">Destination Guides</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            Inspiration for Your Next Trip
          </h1>
          <p className="text-charcoal/70 leading-relaxed">
            Browse hand-crafted guides by region, each built from firsthand experience and insider knowledge.
          </p>
        </div>

        <GuidesExplorer guides={guides} />
      </div>
    </section>
  )
}