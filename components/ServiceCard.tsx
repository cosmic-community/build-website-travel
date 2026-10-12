import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const image = service.metadata?.image
  const summary = getMetafieldValue(service.metadata?.summary)
  const fee = getMetafieldValue(service.metadata?.planning_fee)

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white border border-sand/80 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        {image && (
          <img
            src={`${image.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-charcoal mb-2">{service.title}</h3>
        {summary && <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{summary}</p>}
        {fee && (
          <span className="inline-block text-xs uppercase tracking-wide text-clay font-medium">{fee}</span>
        )}
      </div>
    </Link>
  )
}