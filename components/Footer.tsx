import Link from 'next/link'
import { getAbout, getMetafieldValue } from '@/lib/cosmic'

export default async function Footer() {
  const about = await getAbout()
  const email = getMetafieldValue(about?.metadata?.contact_email)
  const location = getMetafieldValue(about?.metadata?.location)

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-max px-6 md:px-12 lg:px-24 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl mb-3">Build Website Travel</h3>
          <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
            Independent travel advisory crafting personalized itineraries and curated destination guides.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-cream/50 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-cream/80 hover:text-clay-light transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-cream/80 hover:text-clay-light transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-cream/80 hover:text-clay-light transition-colors">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-cream/80 hover:text-clay-light transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-cream/50 mb-4">Get in Touch</h4>
          {email && (
            <a
              href={`mailto:${email}`}
              className="block text-sm text-cream/80 hover:text-clay-light transition-colors mb-2"
            >
              {email}
            </a>
          )}
          {location && <p className="text-sm text-cream/60">{location}</p>}
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/40">
        &copy; {new Date().getFullYear()} Build Website Travel. All rights reserved.
      </div>
    </footer>
  )
}