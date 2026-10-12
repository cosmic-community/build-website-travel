import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs uppercase tracking-widest text-clay mb-4">404</p>
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Page Not Found</h1>
      <p className="text-charcoal/70 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  )
}