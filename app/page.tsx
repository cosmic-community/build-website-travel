import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import GuideCard from '@/components/GuideCard'
import ContactSection from '@/components/ContactSection'
import { getAbout, getGuides, getMetafieldValue, getServices } from '@/lib/cosmic'

export default async function HomePage() {
  const [about, services, guides] = await Promise.all([
    getAbout(),
    getServices(),
    getGuides(),
  ])

  const heroGuide = guides[0]
  const featuredServices = services.slice(0, 3)
  const latestGuides = guides.slice(0, 3)

  const headline = getMetafieldValue(about?.metadata?.headline) || 'Travel, Thoughtfully Planned'
  const intro = getMetafieldValue(about?.metadata?.intro)
  const email = getMetafieldValue(about?.metadata?.contact_email)
  const location = getMetafieldValue(about?.metadata?.location)

  return (
    <>
      <Hero
        title={headline}
        subtitle={intro || undefined}
        imageUrl={heroGuide?.metadata?.featured_image?.imgix_url}
        primaryCta={{ label: 'Explore Guides', href: '/guides' }}
        secondaryCta={{ label: 'Get in Touch', href: '/contact' }}
      />

      {about && (
        <section className="section-padding">
          <div className="container-max grid gap-12 md:grid-cols-2 items-center">
            {about.metadata?.portrait && (
              <div className="order-2 md:order-1">
                <img
                  src={`${about.metadata.portrait.imgix_url}?w=1200&h=1500&fit=crop&auto=format,compress`}
                  alt={about.title}
                  className="w-full h-[520px] object-cover"
                />
              </div>
            )}
            <div className="order-1 md:order-2">
              <p className="text-xs uppercase tracking-widest text-clay mb-4">About the Advisor</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-snug">
                {about.title}
              </h2>
              {intro && <p className="text-charcoal/70 leading-relaxed mb-8">{intro}</p>}
              <Link href="/about" className="btn-secondary">
                More About Me
              </Link>
            </div>
          </div>
        </section>
      )}

      {featuredServices.length > 0 && (
        <section className="section-padding bg-sand/30">
          <div className="container-max">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-clay mb-3">What I Offer</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Featured Services</h2>
              </div>
              <Link
                href="/services"
                className="text-sm uppercase tracking-wide text-charcoal hover:text-clay transition-colors"
              >
                View All Services &rarr;
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {latestGuides.length > 0 && (
        <section className="section-padding">
          <div className="container-max">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-clay mb-3">Where To Next</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Latest Destination Guides</h2>
              </div>
              <Link
                href="/guides"
                className="text-sm uppercase tracking-wide text-charcoal hover:text-clay transition-colors"
              >
                View All Guides &rarr;
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection email={email || undefined} location={location || undefined} />
    </>
  )
}