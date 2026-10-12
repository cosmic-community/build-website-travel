import type { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Services | Build Website Travel',
  description: 'Personalized travel planning services, from full itinerary design to on-the-ground support.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-clay mb-4">Services</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            Travel Planning, Tailored to You
          </h1>
          <p className="text-charcoal/70 leading-relaxed">
            Every journey begins with a conversation. Explore the ways I can help design, plan, and support your
            next trip.
          </p>
        </div>

        {services.length === 0 ? (
          <p className="text-charcoal/60">Services are coming soon.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}