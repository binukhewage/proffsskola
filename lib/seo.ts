import type { Metadata } from 'next';
import { business, courses, faqs } from './data';

export function metadata(title: string, description: string, path = ''): Metadata {
  const url = `${business.url}${path}`;
  return {
    title,
    description,
    applicationName: business.name,
    authors: [{ name: business.name, url: business.url }],
    creator: business.name,
    publisher: business.name,
    category: 'Trafikskola',
    keywords: [
      'trafikskola Järfälla',
      'trafikskola Jakobsberg',
      'körlektioner',
      'intensivkurs',
      'Riskettan',
      'Risktvåan',
      'B-körkort',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        'sv-SE': url,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'sv_SE',
      url,
      siteName: business.name,
      title,
      description,
      images: [
        {
          url: '/images/proffs-car.jpg',
          width: 1200,
          height: 896,
          alt: 'Proffs Trafikskolas utbildningsbil',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/proffs-car.jpg'],
    },
  };
}
export const localBusiness = {
  '@type': ['LocalBusiness', 'Organization'],
  '@id': `${business.url}/#school`,
  name: business.name,
  legalName: business.legalName,
  url: business.url,
  telephone: business.tel,
  email: business.email,
  description: business.description,
  image: `${business.url}/images/proffs-car.jpg`,
  logo: `${business.url}/images/proffslogga-black.png`,
  priceRange: '299-22099 SEK',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.street,
    postalCode: business.postal,
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: business.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.latitude,
    longitude: business.longitude,
  },
  areaServed: business.serviceAreas.map((name) => ({ '@type': 'City', name })),
  knowsLanguage: business.languages,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: business.tel,
      email: business.email,
      contactType: 'customer service',
      areaServed: 'SE',
      availableLanguage: business.languages,
    },
  ],
  sameAs: business.socials.map((x) => x[1]),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    '@id': `${business.url}/#offer-catalog`,
    name: 'Körkortsutbildningar hos Proffs Trafikskola',
    itemListElement: courses.map((course) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        '@id': `${business.url}/${course.slug}#service`,
        name: course.name,
        description: course.description,
        provider: { '@id': `${business.url}/#school` },
      },
      price: course.price,
      priceCurrency: 'SEK',
      url: `${business.url}/${course.slug}`,
    })),
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '16:00' },
  ],
};
export function faqSchema(items = faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
export function pageSchema(slug: string, title: string) {
  const url = slug ? `${business.url}/${slug}` : business.url;
  return [
    {
      '@type': 'WebPage',
      '@id': `${url}#page`,
      url,
      name: title,
      inLanguage: 'sv-SE',
      isPartOf: { '@id': `${business.url}/#website` },
      about: { '@id': `${business.url}/#school` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${business.url}/images/proffs-car.jpg`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Start', item: business.url },
        { '@type': 'ListItem', position: 2, name: title, item: url },
      ],
    },
  ];
}
export function serviceSchema(slug: string, name: string, price?: number) {
  return {
    '@type': 'Service',
    '@id': `${business.url}/${slug}#service`,
    name,
    serviceType: name,
    description: `${name} hos ${business.name} i Järfälla, nära Jakobsberg och Barkarby.`,
    provider: { '@id': `${business.url}/#school` },
    areaServed: business.serviceAreas,
    url: `${business.url}/${slug}`,
    ...(price
      ? {
          offers: {
            '@type': 'Offer',
            price,
            priceCurrency: 'SEK',
            availability: 'https://schema.org/InStock',
            url: business.shop,
          },
        }
      : {}),
  };
}
