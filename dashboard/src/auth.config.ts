import { NextAuthConfig } from "next-auth";

export const authConfig={
    // pages:{
    //     signIn:"/login",
    // },
    // callbacks:{
    //     authorized({auth, request:{nextUrl}}){
    //         // console.log(auth,"fddddd")
    //         const isLoggedIn =  auth?.user;
    //         const isOnDashboard = nextUrl.pathname.startsWith('/dash');
    //         if(isOnDashboard){
    //             if(isLoggedIn) return true;
    //             return false;
    //         }
    //         else if(isLoggedIn){
    //             return Response.redirect(new URL('/dash',nextUrl))
    //         }
    //         return true;
    //     }
    // },
    providers:[],
}satisfies NextAuthConfig;