'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/guides', label: 'Guides' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-sand">
      <div className="container-max flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <Link href="/" className="font-serif text-xl md:text-2xl tracking-tight text-charcoal">
          Build Website Travel
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wide text-charcoal/80 hover:text-clay transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 bg-charcoal transition-transform duration-200 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`h-0.5 bg-charcoal transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 bg-charcoal transition-transform duration-200 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-6 border-t border-sand bg-cream">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-sm uppercase tracking-wide text-charcoal/80 hover:text-clay transition-colors duration-200 border-b border-sand/60 last:border-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}