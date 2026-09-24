'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/data/i18n';

interface LanguageSwitcherProps {
  currentLang: Locale;
}

function SpainFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg className={`${className} rounded-[2px] flex-shrink-0 border border-black/10`} viewBox="0 0 640 480" aria-hidden="true">
      <path fill="#aa151b" d="M0 0h640v480H0z"/>
      <path fill="#f1bf00" d="M0 120h640v240H0z"/>
    </svg>
  );
}

function USFlag({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg className={`${className} rounded-[2px] flex-shrink-0 border border-black/10`} viewBox="0 0 640 480" aria-hidden="true">
      <path fill="#bd3d44" d="M0 0h640v480H0z"/>
      <path stroke="#fff" strokeWidth="36.9" d="M0 55.4h640M0 129.2h640M0 203h640M0 276.9h640M0 350.8h640M0 424.6h640"/>
      <path fill="#192f5d" d="M0 0h288v258.5H0z"/>
      <g fill="#fff">
        <circle cx="48" cy="35" r="8"/>
        <circle cx="96" cy="35" r="8"/>
        <circle cx="144" cy="35" r="8"/>
        <circle cx="192" cy="35" r="8"/>
        <circle cx="240" cy="35" r="8"/>
        <circle cx="72" cy="70" r="8"/>
        <circle cx="120" cy="70" r="8"/>
        <circle cx="168" cy="70" r="8"/>
        <circle cx="216" cy="70" r="8"/>
        <circle cx="48" cy="105" r="8"/>
        <circle cx="96" cy="105" r="8"/>
        <circle cx="144" cy="105" r="8"/>
        <circle cx="192" cy="105" r="8"/>
        <circle cx="240" cy="105" r="8"/>
        <circle cx="72" cy="140" r="8"/>
        <circle cx="120" cy="140" r="8"/>
        <circle cx="168" cy="140" r="8"/>
        <circle cx="216" cy="140" r="8"/>
        <circle cx="48" cy="175" r="8"/>
        <circle cx="96" cy="175" r="8"/>
        <circle cx="144" cy="175" r="8"/>
        <circle cx="192" cy="175" r="8"/>
        <circle cx="240" cy="175" r="8"/>
        <circle cx="72" cy="210" r="8"/>
        <circle cx="120" cy="210" r="8"/>
        <circle cx="168" cy="210" r="8"/>
        <circle cx="216" cy="210" r="8"/>
      </g>
    </svg>
  );
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
      className="inline-flex items-center gap-1 rounded-[12px] bg-[#fafafa] p-1 border border-[#b2b2b2]"
      role="group"
      aria-label="Selección de idioma / Language selection"
    >
      <button
        type="button"
        onClick={() => switchLanguage('es')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff4f00] ${
          currentLang === 'es'
            ? 'bg-[#ff4f00] text-white'
            : 'text-stone-700 hover:text-stone-900 hover:bg-white'
        }`}
        aria-pressed={currentLang === 'es'}
        aria-label="Español"
        title="Español"
      >
        <SpainFlag />
        <span>ES</span>
      </button>
      <button
        type="button"
        onClick={() => switchLanguage('en')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff4f00] ${
          currentLang === 'en'
            ? 'bg-[#ff4f00] text-white'
            : 'text-stone-700 hover:text-stone-900 hover:bg-white'
        }`}
        aria-pressed={currentLang === 'en'}
        aria-label="English"
        title="English"
      >
        <USFlag />
        <span>EN</span>
      </button>
    </div>
  );
}

