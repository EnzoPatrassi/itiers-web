import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar archivos estáticos, imágenes, favicon y rutas de API
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Detectar el idioma del navegador mediante la cabecera 'accept-language'
  const acceptLanguage = request.headers.get('accept-language');
  const browserLang = acceptLanguage && acceptLanguage.toLowerCase().includes('en') ? 'en' : 'es';

  // Si no hay cookie o la cookie no coincide con la preferencia actual del navegador, la actualizamos
  const currentCookie = request.cookies.get('itiers_lang')?.value;
  if (!currentCookie) {
    response.cookies.set('itiers_lang', browserLang, { path: '/', maxAge: 31536000 });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
