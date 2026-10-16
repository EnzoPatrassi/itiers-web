import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Idiomas soportados por tu web
const locales = ['es', 'en'];
const defaultLocale = 'es';

// Función para obtener el idioma preferido del navegador del usuario
function getLocale(request: NextRequest): string {
  // Revisa si ya tiene una cookie de idioma guardada previamente
  const cookieLang = request.cookies.get('itiers_lang')?.value;
  if (cookieLang && locales.includes(cookieLang)) {
    return cookieLang;
  }

  // Si no hay cookie, lee la cabecera 'accept-language' que envía el navegador con la región/idioma
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  // Analiza las preferencias (ej: "en-US,en;q=0.9,es;q=0.8")
  const preferredLang = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim().substring(0, 2))
    .find((lang) => locales.includes(lang));

  return preferredLang || defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Evita interferir con archivos estáticos, imágenes de la carpeta public, o rutas de API
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return;
  }

  // Verifica si la ruta actual ya tiene un idioma válido (/es o /en)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Si entra a la raíz ("/") o cualquier otra ruta sin idioma, detecta y redirige
  const locale = getLocale(request);
  
  // Redirige al usuario a su idioma correspondiente (ej: /es o /en)
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

// Configuración de las rutas donde actúa el middleware
export const config = {
  matcher: [
    // Excluye archivos internos y de API
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};