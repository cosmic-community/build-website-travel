interface ContactSectionProps {
  email?: string
  location?: string
}

export default function ContactSection({ email, location }: ContactSectionProps) {
  return (
    <section className="section-padding bg-sand/40">
      <div className="container-max text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-5">
          Let&apos;s Plan Your Next Journey
        </h2>
        <p className="text-charcoal/70 leading-relaxed mb-8">
          {location
            ? `Based in ${location}, I work with travelers everywhere to craft itineraries that feel entirely their own.`
            : 'I work with travelers everywhere to craft itineraries that feel entirely their own.'}
        </p>
        {email ? (
          <a href={`mailto:${email}`} className="btn-primary">
            Email {email}
          </a>
        ) : (
          <span className="text-charcoal/50 text-sm">Contact information coming soon.</span>
        )}
      </div>
    </section>
  )
}