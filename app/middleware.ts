import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get('accept-language')?.toLowerCase() || '';

  const isSpanish = acceptLanguage.startsWith('es') || acceptLanguage.includes('es-') || !acceptLanguage.startsWith('en');
  const targetLang = isSpanish ? 'es' : 'en';

  const response = NextResponse.next();
  const currentCookie = request.cookies.get('itiers_lang')?.value;

  if (currentCookie !== targetLang) {
    response.cookies.set('itiers_lang', targetLang, { path: '/' });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};