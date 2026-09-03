import type { Locale } from '@/data/i18n';

interface JsonLdProps {
  lang?: Locale;
}

export default function JsonLd({ lang = 'es' }: JsonLdProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Itiers Data Sense',
    'alternateName': 'Itiers',
    'url': 'https://itiers.com',
    'logo': 'https://itiers.com/logo.png',
    'description':
      lang === 'en'
        ? 'Itiers is a consulting firm specializing in data analytics and artificial intelligence based in Mendoza, Argentina.'
        : 'Itiers es una consultora especializada en analítica de datos e inteligencia artificial con sede en Mendoza, Argentina.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Mendoza',
      'addressRegion': 'Mendoza',
      'addressCountry': 'AR',
      'streetAddress': 'Av. Belgrano 1234, Ciudad de Mendoza'
    },
    'location': {
      '@type': 'Place',
      'name': 'Mendoza, Argentina',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Mendoza',
        'addressCountry': 'Argentina'
      }
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
      'Machine Learning'
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
