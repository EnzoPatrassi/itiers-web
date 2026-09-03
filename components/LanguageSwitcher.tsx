'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/data/i18n';

interface LanguageSwitcherProps {
  currentLang: Locale;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: Locale) => {
    if (newLang === currentLang) return;
    
    if (!pathname) {
      router.push(`/${newLang}`);
      return;
    }

    // Replace locale prefix in pathname
    const segments = pathname.split('/');
    if (segments[1] === 'es' || segments[1] === 'en') {
      segments[1] = newLang;
      router.push(segments.join('/') || `/${newLang}`);
    } else {
      router.push(`/${newLang}${pathname}`);
    }
  };

  return (
    <div 
      className="inline-flex items-center rounded-lg bg-slate-100 p-1 border border-slate-200"
      role="group"
      aria-label="Selección de idioma / Language selection"
    >
      <button
        type="button"
        onClick={() => switchLanguage('es')}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
          currentLang === 'es'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
        }`}
        aria-pressed={currentLang === 'es'}
        aria-label="Español (es-AR)"
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => switchLanguage('en')}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
          currentLang === 'en'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
        }`}
        aria-pressed={currentLang === 'en'}
        aria-label="English (en-US)"
      >
        EN
      </button>
    </div>
  );
}
