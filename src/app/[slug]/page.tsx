import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CITY_DATA, ALL_SLUGS } from './cityData'
import CityPage from './CityPage'

// Maps URL slug → city key
// URL:  /tempo-traveller-in-kanpur  →  city key: kanpur
function getCityFromSlug(slug: string): string | null {
  const prefix = 'tempo-traveller-in-'
  if (slug.startsWith(prefix)) {
    const cityKey = slug.replace(prefix, '')
    return CITY_DATA[cityKey] ? cityKey : null
  }
  return null
}

// Generates all 14 static pages at build time
export function generateStaticParams() {
  return ALL_SLUGS.map(cityKey => ({
    slug: `tempo-traveller-in-${cityKey}`
  }))
}

// Per-page SEO metadata
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const cityKey = getCityFromSlug(params.slug)
  if (!cityKey) return {}
  const city = CITY_DATA[cityKey]
  return {
    title: city.metaTitle,
    description: city.metaDesc,
    keywords: city.metaKeywords,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDesc,
      type: 'website',
    },
    alternates: {
      canonical: `https://yatratravelindia.com/tempo-traveller-in-${city.slug}`,
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const cityKey = getCityFromSlug(params.slug)
  if (!cityKey) notFound()
  const city = CITY_DATA[cityKey]
  return <CityPage city={city} />
}
