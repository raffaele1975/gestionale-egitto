import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const password = request.headers.get('authorization');
  const correctPassword = 'watchegypt2026';
  
  if (password !== `Basic ${btoa(`user:${correctPassword}`)}`) {
    return new NextResponse('Accesso negato', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Login"'
      }
    });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/(.*)'
};
