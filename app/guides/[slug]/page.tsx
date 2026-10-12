// app/guides/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Markdown from '@/components/Markdown'
import { getGuideBySlug, getMetafieldValue } from '@/lib/cosmic'

interface GuidePageProps {
  params: Promise<{ slug: string }>
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params
  const guide = await getGuideBySlug(slug)

  if (!guide) {
    notFound()
  }

  const { featured_image } = guide.metadata
  const destination = getMetafieldValue(guide.metadata.destination)
  const region = getMetafieldValue(guide.metadata.region)
  const summary = getMetafieldValue(guide.metadata.summary)
  const content = getMetafieldValue(guide.metadata.content)
  const bestTime = getMetafieldValue(guide.metadata.best_time_to_visit)

  return (
    <article>
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        {featured_image ? (
          <img
            src={`${featured_image.imgix_url}?w=2400&h=1500&fit=crop&auto=format,compress`}
            alt={guide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-clay to-charcoal" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
        <div className="relative container-max px-6 md:px-12 lg:px-24 pb-14">
          {region && (
            <span className="inline-block bg-cream/90 text-charcoal text-xs uppercase tracking-wide px-3 py-1 mb-4">
              {region}
            </span>
          )}
          <h1 className="font-serif text-4xl md:text-6xl text-cream max-w-3xl">{guide.title}</h1>
          {destination && <p className="text-cream/80 mt-3 text-lg">{destination}</p>}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-16 md:grid-cols-3">
          <div className="md:col-span-2">
            {summary && <p className="text-charcoal/70 text-lg leading-relaxed mb-8">{summary}</p>}
            {content && <Markdown content={content} />}
          </div>

          <div>
            {bestTime && (
              <div className="border border-sand p-8 bg-sand/20 mb-6">
                <p className="text-xs uppercase tracking-widest text-clay mb-3">Best Time to Visit</p>
                <p className="text-charcoal leading-relaxed">{bestTime}</p>
              </div>
            )}
            <Link href="/contact" className="btn-primary w-full text-center block">
              Plan This Trip
            </Link>
            <Link
              href="/guides"
              className="block mt-6 text-sm uppercase tracking-wide text-charcoal/60 hover:text-clay transition-colors"
            >
              &larr; All Guides
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}