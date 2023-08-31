import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  console.log("here");
  
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // console.log(user, req.nextUrl.pathname);
  

  // if user is signed in and the current path is / redirect the user to /account
  if (user && req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/register') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== '/login' && req.nextUrl.pathname !== '/register') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/', '/login', '/register'],
}