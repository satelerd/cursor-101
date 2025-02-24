import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth')
  const isAuthPath = request.nextUrl.pathname.startsWith('/(auth)')
  const isProtectedPath = request.nextUrl.pathname.startsWith('/(protected)')

  // Si no hay cookie de auth y es una ruta protegida, redirigir a login
  if (!authCookie && isProtectedPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Si hay cookie de auth y es una ruta de auth, redirigir a dashboard
  if (authCookie && isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}