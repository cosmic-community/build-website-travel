import type { Metadata } from 'next'
import ContactSection from '@/components/ContactSection'
import { getAbout, getMetafieldValue } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Contact | Build Website Travel',
  description: 'Get in touch to start planning your next journey.',
}

export default async function ContactPage() {
  const about = await getAbout()
  const email = getMetafieldValue(about?.metadata?.contact_email)
  const location = getMetafieldValue(about?.metadata?.location)

  return (
    <section className="section-padding">
      <div className="container-max max-w-3xl text-center mb-4">
        <p className="text-xs uppercase tracking-widest text-clay mb-4">Contact</p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
          Start the Conversation
        </h1>
        <p className="text-charcoal/70 leading-relaxed">
          Share a little about where you&apos;d like to go, and I&apos;ll follow up to begin planning your trip.
        </p>
      </div>
      <ContactSection email={email || undefined} location={location || undefined} />
    </section>
  )
}