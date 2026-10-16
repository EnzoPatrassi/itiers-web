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

  // Opcional: si quieres asegurar que la cookie de idioma exista por defecto
  const response = NextResponse.next();
  if (!request.cookies.has('itiers_lang')) {
    const acceptLanguage = request.headers.get('accept-language');
    const defaultLang = acceptLanguage && acceptLanguage.toLowerCase().startsWith('es') ? 'es' : 'en';
    response.cookies.set('itiers_lang', defaultLang);
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};