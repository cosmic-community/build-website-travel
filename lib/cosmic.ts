import { createBucketClient } from '@cosmicjs/sdk'
import type { About, Guide, Service } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getAbout(): Promise<About | null> {
  try {
    const response = await cosmic.objects
      .find({ type: 'about' })
      .props(['id', 'slug', 'title', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)
    const objects = response.objects as About[]
    return objects[0] || null
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch about information')
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'slug', 'title', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)
    return response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch services')
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'services', slug })
      .props(['id', 'slug', 'title', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)
    return (response.object as Service) || null
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch service')
  }
}

export async function getGuides(): Promise<Guide[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'guides' })
      .props(['id', 'slug', 'title', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)
    const guides = response.objects as Guide[]
    return guides.sort((a, b) => {
      const dateA = new Date(a.created_at || '').getTime()
      const dateB = new Date(b.created_at || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch guides')
  }
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'guides', slug })
      .props(['id', 'slug', 'title', 'metadata', 'type', 'created_at', 'modified_at'])
      .depth(1)
    return (response.object as Guide) || null
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch guide')
  }
}