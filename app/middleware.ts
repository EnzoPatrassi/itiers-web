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

  const response = NextResponse.next();

  const acceptLanguage = request.headers.get('accept-language');
  const browserLang = acceptLanguage && acceptLanguage.toLowerCase().includes('en') ? 'en' : 'es';

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