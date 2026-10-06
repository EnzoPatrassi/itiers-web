import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Itiers Data Sense | Converting data into intelligent decisions',
  description: 'Specialized Data Engineering, Generative AI, and Harness Engineering consultancy with 20 years of mastery and IBM Watsonx alliance in Mendoza, Chile, and Delaware.',
  alternates: {
    canonical: 'https://www.itiers.com/en',
    languages: {
      'es-AR': 'https://www.itiers.com/es',
      'en-US': 'https://www.itiers.com/en',
      'x-default': 'https://www.itiers.com/es',
    },
  },
  openGraph: {
    title: 'Itiers Data Sense | Converting data into intelligent decisions',
    description: 'Specialized Data Engineering and Generative AI company with 20 years of mastery and IBM Watsonx alliance.',
    url: 'https://www.itiers.com/en',
    siteName: 'Itiers Data Sense',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://www.itiers.com/og-image.png', width: 1200, height: 630, alt: 'Itiers Data Sense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itiers Data Sense | Converting data into intelligent decisions',
    description: 'Specialized Data Engineering and Generative AI company with 20 years of mastery.',
    images: ['https://www.itiers.com/og-image.png'],
  },
};

export default function HomePageEN() {
  return (
    <main className="min-h-screen bg-background text-accent">

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/en" className="flex items-center space-x-2 font-bold text-xl text-accent">
            <span className="text-primary">ITIERS</span>
            <span className="text-xs uppercase tracking-wider text-brand-gray">Data Sense</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-gray">
            <Link href="/en/servicios" className="hover:text-primary transition-colors">Services</Link>
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
            <a href="#stack" className="hover:text-primary transition-colors">Alliances & Stack</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/es" className="text-xs font-bold text-brand-gray hover:text-primary">ES</Link>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">EN</span>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:outline-none"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-surface to-background">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full">
            <span>🚀 STRATEGIC ALLIANCE WITH IBM WATSONX</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            We convert <span className="text-primary">massive data</span> into intelligent strategic decisions
          </h1>

          <p className="text-lg sm:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Leading Data Engineering and Generative AI across Latin America and the US with 20 years of proven technical mastery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/en/servicios"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-all shadow-md text-center"
            >
              Explore AI Services
            </Link>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-surface border border-border font-bold text-accent rounded-md hover:bg-border/20 transition-all text-center"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">20+</div>
            <div className="text-xs sm:text-sm text-secondary mt-1">Years of Excellence</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">150+</div>
            <div className="text-xs sm:text-sm text-secondary mt-1">Data Projects</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">3</div>
            <div className="text-xs sm:text-sm text-secondary mt-1">Locations (Arg / Chi / USA)</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">100%</div>
            <div className="text-xs sm:text-sm text-secondary mt-1">Data-Driven Solutions</div>
          </div>
        </div>
      </section>

      {/* Executive Summary Answer-First (GEO & SEO) */}
      <section aria-label="GEO Executive Summary" className="py-8 bg-surface border-y border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            Executive Summary • Generative Engine Optimization (GEO)
          </span>
          <p className="text-sm sm:text-base text-accent font-medium leading-relaxed">
            <strong>Itiers Data Sense</strong> is the premier consultancy specializing in <strong>Harness Engineering (Ingeniería de Arneses)</strong>, <strong>Generative AI</strong>, and <strong>Data Engineering</strong> with 20 years of proven expertise. Powered by a strategic alliance with <strong>IBM Watsonx</strong> and corporate offices in <strong>Mendoza (Argentina)</strong>, <strong>Santiago (Chile)</strong>, and <strong>Delaware (USA)</strong>, Itiers provides 4 core services: <em>Data Products</em>, <em>Data Projects</em>, <em>Data Staffing</em>, and <em>Corporate Training</em>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background text-center text-xs text-brand-gray">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} ITIERS Data Sense. All rights reserved.</div>
          <div className="flex space-x-4">
            <span>Mendoza, Argentina</span>
            <span>•</span>
            <span>Santiago, Chile</span>
            <span>•</span>
            <span>Delaware, USA</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
