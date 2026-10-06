import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'CCBot',
          'Applebot-Extended'
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.itiers.com/sitemap.xml',
    host: 'https://www.itiers.com',
  };
}
