'use client'

import { useMemo, useState } from 'react'
import type { Guide } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import GuideCard from '@/components/GuideCard'

interface GuidesExplorerProps {
  guides: Guide[]
}

const REGIONS = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania']

export default function GuidesExplorer({ guides }: GuidesExplorerProps) {
  const [selectedRegion, setSelectedRegion] = useState('All')

  const filteredGuides = useMemo(() => {
    if (selectedRegion === 'All') return guides
    return guides.filter((guide) => getMetafieldValue(guide.metadata?.region) === selectedRegion)
  }, [guides, selectedRegion])

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12">
        {REGIONS.map((region) => (
          <button
            key={region}
            type="button"
            onClick={() => setSelectedRegion(region)}
            className={`px-5 py-2 text-xs uppercase tracking-wide border transition-colors duration-200 ${
              selectedRegion === region
                ? 'bg-charcoal text-cream border-charcoal'
                : 'bg-transparent text-charcoal/70 border-sand hover:border-charcoal'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {filteredGuides.length === 0 ? (
        <p className="text-charcoal/60 text-center py-20">No guides found for this region yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      )}
    </div>
  )
}