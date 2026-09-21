import type { Locale } from '@/data/i18n';

interface JsonLdProps {
  lang?: Locale;
}

export default function JsonLd({ lang = 'es' }: JsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://itiers.com';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        'name': 'Itiers Data Sense',
        'alternateName': 'Itiers',
        'url': baseUrl,
        'logo': `${baseUrl}/logo.png`,
        'description':
          lang === 'en'
            ? 'Itiers is a consulting firm specializing in data analytics, cloud architecture, and artificial intelligence based in Mendoza, Argentina.'
            : 'Itiers es una consultora especializada en analítica de datos, arquitectura cloud e inteligencia artificial con sede en Mendoza, Argentina.',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Mendoza',
          'addressRegion': 'Mendoza',
          'addressCountry': 'AR',
          'streetAddress': 'Av. Belgrano 1234, Ciudad de Mendoza'
        },
        'areaServed': ['Argentina', 'Chile', 'United States', 'Latin America'],
        'knowsAbout': [
          'Data Analytics',
          'Artificial Intelligence',
          'Business Intelligence',
          'Data Engineering',
          'Cloud Computing',
          'AI Agents',
          'Generative AI',
          'Machine Learning',
          'Harness Engineering'
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'email': 'contacto@itiers.com',
          'telephone': '+54-9-261-000-0000',
          'contactType': 'customer service',
          'availableLanguage': ['Spanish', 'English']
        },
        'sameAs': [
          'https://linkedin.com/company/itiers'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        'url': baseUrl,
        'name': 'Itiers',
        'publisher': {
          '@id': `${baseUrl}/#organization`
        },
        'inLanguage': ['es', 'en']
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
