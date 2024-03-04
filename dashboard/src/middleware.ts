// import type { NextRequest } from 'next/server'
 
// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get('token')?.value;

//   if (currentUser && !request.nextUrl.pathname.startsWith('/dash')) {
//     return Response.redirect(new URL('/dash', request.url))
//   }
 
//   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
//     return Response.redirect(new URL('/login', request.url))
//   }
// }
 
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { auth } from "./auth"

// const {auth} = NextAuth(authConfig);

export default auth((req: any)=>{
  const { nextUrl } = req;
  const isLoggedIn = req.auth;
  const role = req?.auth.user.role;
  console.log(req.auth, "jefdkasjfkasd")
  const isOnDashboard = nextUrl.pathname.startsWith('/dash');
  if(isOnDashboard){
      if(isLoggedIn) return true;
      return false;
  }
  else if(isLoggedIn){
      return Response.redirect(new URL('/dash',nextUrl))
  }
  return true;
})
 
// export default NextAuth(authConfig).  auth;


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}