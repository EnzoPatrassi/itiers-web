import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://itiers-web.vercel.app';
  const routes = ['', '/servicios', '/casos', '/contacto', '/nosotros', '/que-hacemos', '/soluciones'];
  const locales = ['es', 'en'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            'es-AR': `${baseUrl}/es${route}`,
            'en-US': `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
