import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { dictionaries, Locale } from "@/data/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang: Locale = (resolvedParams.lang === 'en' ? 'en' : 'es');
  const t = dictionaries[lang].meta;
  const baseUrl = "https://itiers.com";

  return {
    title: t.title,
    description: t.description,
    keywords: [
      "analítica de datos",
      "inteligencia artificial",
      "consultoría IA",
      "data analytics",
      "artificial intelligence",
      "business intelligence",
      "Mendoza Argentina",
      "IBM Watsonx",
      "agentes de IA"
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'es-AR': `${baseUrl}/es`,
        'en-US': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${baseUrl}/${lang}`,
      siteName: "Itiers Data Sense",
      locale: lang === 'en' ? 'en_US' : 'es_AR',
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang: Locale = (resolvedParams.lang === 'en' ? 'en' : 'es');

  return (
    <html lang={lang === 'en' ? 'en-US' : 'es-AR'}>
      <body className="antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <JsonLd lang={lang} />
        {/* Persistent Header / Navbar */}
        <Navbar lang={lang} />
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
