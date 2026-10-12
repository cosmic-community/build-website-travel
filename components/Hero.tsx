import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  imageUrl?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero({ title, subtitle, imageUrl, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative h-[85vh] min-h-[560px] flex items-end overflow-hidden">
      {imageUrl ? (
        <img
          src={`${imageUrl}?w=2400&h=1600&fit=crop&auto=format,compress`}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-clay to-charcoal" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

      <div className="relative container-max w-full px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream max-w-3xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-cream/85 text-lg md:text-xl max-w-xl leading-relaxed">{subtitle}</p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="bg-cream/10 border border-cream/40 text-cream px-8 py-3 text-sm uppercase tracking-wide hover:bg-cream/20 transition-colors duration-300"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}