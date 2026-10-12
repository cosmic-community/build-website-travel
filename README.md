# Build Website Travel

![App Preview](https://imgix.cosmicjs.com/655f2310-c5cc-11f1-9185-df2983a733a2-autopilot-photo-1488646953014-85cb44e25828-1791761708983.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

An elegant, image-led website for an independent travel advisor, built with Next.js and powered by Cosmic.

## Features

- 🏔️ Image-led homepage with hero, About intro, featured services, and latest guides
- 🧭 Services index and detail pages (summary, markdown details, planning fee, image)
- 🗺️ Destination Guides index with a region filter (Europe, Asia, Americas, Africa, Oceania)
- 📖 Guide detail pages with destination, markdown content, and best time to visit
- 👋 About page with headline, intro, bio, portrait, location, and contact email
- ✉️ Contact section built from the About object's contact email
- 📱 Fully responsive, editorial travel-magazine aesthetic with generous whitespace

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6acc1cfc23bfa78d7d9fa6f0&clone_repository=6acc362d23bfa78d7d9fa986)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> build a website for a travel advisor similar in style to hilly.nyc. include an about, services and guides page with two guides.

### Code Generation Prompt

> Build a Next.js application for a company website called "Build Website Travel". The content is managed in Cosmic CMS with the following object types: about, services, guides. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: An elegant, image-led website for an independent travel advisor. Pages: Home (hero, intro from the About object, featured services, latest destination guides, contact call-to-action); Services index and detail pages (summary, details, planning fee, image); Destination Guides index with region filter (Europe, Asia, Americas, Africa, Oceania) and guide detail pages (destination, summary, rich-text content, best time to visit, featured image); About page (headline, intro, bio, portrait, location, contact email); Contact section using the contact email. Rich-text fields should render markdown. Responsive, polished, editorial travel-magazine aesthetic with generous whitespace and large photography.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) with `@tailwindcss/typography`
- [Cosmic](https://www.cosmicjs.com/docs) headless CMS
- [react-markdown](https://github.com/remarkjs/react-markdown) for rendering rich-text content

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed
- A Cosmic account and bucket with `about`, `services`, and `guides` object types

### Installation

```bash
bun install
```

Create your environment variables (see the Environment Variables section in your dashboard) with:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all guides
const { objects: guides } = await cosmic.objects
  .find({ type: 'guides' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single service by slug
const { object: service } = await cosmic.objects
  .findOne({ type: 'services', slug: 'full-itinerary-design' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app reads directly from your Cosmic bucket's `about`, `services`, and `guides` object types. See [Cosmic docs](https://www.cosmicjs.com/docs) for details on managing your content model and objects. Rich-text fields (service details, guide content, advisor bio) are rendered as markdown using `react-markdown`.

## Deployment Options

### Vercel

1. Push this repository to GitHub
2. Import the project into [Vercel](https://vercel.com/)
3. Add the `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` environment variables
4. Deploy

### Netlify

1. Push this repository to GitHub
2. Import the project into [Netlify](https://www.netlify.com/)
3. Set the build command to `bun run build` and publish directory to `.next`
4. Add the required environment variables
5. Deploy
<!-- README_END -->