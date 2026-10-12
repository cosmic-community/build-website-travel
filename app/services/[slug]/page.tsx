// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Markdown from '@/components/Markdown'
import { getMetafieldValue, getServiceBySlug } from '@/lib/cosmic'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const { image } = service.metadata
  const summary = getMetafieldValue(service.metadata.summary)
  const details = getMetafieldValue(service.metadata.details)
  const fee = getMetafieldValue(service.metadata.planning_fee)

  return (
    <article>
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        {image ? (
          <img
            src={`${image.imgix_url}?w=2400&h=1400&fit=crop&auto=format,compress`}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-clay to-charcoal" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
        <div className="relative container-max px-6 md:px-12 lg:px-24 pb-14">
          <h1 className="font-serif text-4xl md:text-6xl text-cream max-w-3xl">{service.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-16 md:grid-cols-3">
          <div className="md:col-span-2">
            {summary && <p className="text-charcoal/70 text-lg leading-relaxed mb-8">{summary}</p>}
            {details && <Markdown content={details} />}
          </div>

          <div>
            <div className="border border-sand p-8 bg-sand/20">
              <p className="text-xs uppercase tracking-widest text-clay mb-3">Planning Fee</p>
              <p className="font-serif text-2xl text-charcoal mb-6">{fee || 'Contact for pricing'}</p>
              <Link href="/contact" className="btn-primary w-full text-center">
                Start Planning
              </Link>
            </div>
            <Link
              href="/services"
              className="block mt-6 text-sm uppercase tracking-wide text-charcoal/60 hover:text-clay transition-colors"
            >
              &larr; All Services
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}