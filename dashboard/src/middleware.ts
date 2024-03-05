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
import { auth } from "./auth"


export default auth((req: any)=>{
  const { nextUrl } = req;
  const isLoggedIn = !!req?.auth;
  const role = req?.auth?.user?.role;
  const isOnDashboard = nextUrl.pathname.startsWith('/dash');
  const isOnProduct = nextUrl.pathname.startsWith('/product')

  if(isLoggedIn && role=='admin' && !isOnDashboard ){
    return Response.redirect(new URL('/dash',nextUrl));
  }
 else if(!isLoggedIn && (isOnProduct || isOnDashboard)){
    return Response.redirect(new URL('/login',nextUrl));
  }
  else if(isLoggedIn && role=='user' && !isOnProduct){
    return Response.redirect(new URL('/product',nextUrl));
  }

})
 
// export default NextAuth(authConfig).auth;


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
