import type { Metadata } from 'next'
import Markdown from '@/components/Markdown'
import ContactSection from '@/components/ContactSection'
import { getAbout, getMetafieldValue } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'About | Build Website Travel',
  description: 'Meet your independent travel advisor and learn about the philosophy behind every itinerary.',
}

export default async function AboutPage() {
  const about = await getAbout()

  if (!about) {
    return (
      <div className="section-padding text-center">
        <p className="text-charcoal/60">About information is coming soon.</p>
      </div>
    )
  }

  const { portrait } = about.metadata
  const headline = getMetafieldValue(about.metadata.headline) || about.title
  const intro = getMetafieldValue(about.metadata.intro)
  const bio = getMetafieldValue(about.metadata.bio)
  const location = getMetafieldValue(about.metadata.location)
  const email = getMetafieldValue(about.metadata.contact_email)

  return (
    <>
      <section className="section-padding">
        <div className="container-max grid gap-16 md:grid-cols-2 items-start">
          {portrait && (
            <img
              src={`${portrait.imgix_url}?w=1200&h=1500&fit=crop&auto=format,compress`}
              alt={about.title}
              className="w-full h-[560px] object-cover"
            />
          )}
          <div>
            <p className="text-xs uppercase tracking-widest text-clay mb-4">About</p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              {headline}
            </h1>
            {intro && <p className="text-charcoal/70 text-lg leading-relaxed mb-8">{intro}</p>}
            {bio && <Markdown content={bio} />}

            <div className="mt-10 space-y-2 text-sm text-charcoal/70">
              {location && <p>📍 {location}</p>}
              {email && (
                <p>
                  <a href={`mailto:${email}`} className="text-clay hover:underline">
                    {email}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactSection email={email || undefined} location={location || undefined} />
    </>
  )
}