import Link from 'next/link'
import type { Guide } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface GuideCardProps {
  guide: Guide
}

export default function GuideCard({ guide }: GuideCardProps) {
  const image = guide.metadata?.featured_image
  const destination = getMetafieldValue(guide.metadata?.destination)
  const region = getMetafieldValue(guide.metadata?.region)
  const summary = getMetafieldValue(guide.metadata?.summary)

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block bg-white border border-sand/80 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        {image && (
          <img
            src={`${image.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
            alt={guide.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {region && (
          <span className="absolute top-4 left-4 bg-charcoal/80 text-cream text-xs uppercase tracking-wide px-3 py-1">
            {region}
          </span>
        )}
      </div>
      <div className="p-6">
        {destination && <p className="text-xs uppercase tracking-widest text-clay mb-2">{destination}</p>}
        <h3 className="font-serif text-xl text-charcoal mb-2">{guide.title}</h3>
        {summary && <p className="text-charcoal/70 text-sm leading-relaxed">{summary}</p>}
      </div>
    </Link>
  )
}