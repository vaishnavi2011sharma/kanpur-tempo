import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CITY_DATA, ALL_SLUGS } from './cityData'
import CityPage from './CityPage'

/* Tells Next.js which slugs to pre-render at build time */
export function generateStaticParams() {
  return ALL_SLUGS.map(slug => ({ city: slug }))
}

/* Per-city SEO metadata */
export async function generateMetadata(
  { params }: { params: { city: string } }
): Promise<Metadata> {
  const city = CITY_DATA[params.city]
  if (!city) return {}
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
      canonical: `https://yatratravelindia.com/tempo-traveller/${city.slug}`,
    },
  }
}

export default function Page({ params }: { params: { city: string } }) {
  const city = CITY_DATA[params.city]
  if (!city) notFound()
  return <CityPage city={city} />
}
