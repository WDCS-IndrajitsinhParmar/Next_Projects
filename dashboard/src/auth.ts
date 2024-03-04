import NextAuth, { NextAuthConfig } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from "zod";
import { cookies } from 'next/headers';
 
async function LoginUser(){
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
          }),
      }).then(res=>res.json());
      const token = response.token
      cookies().set("token", token, {httpOnly:true})
      return {
        name: token
      };
    } catch (error) {
        console.log(" error", error)
        throw new Error("Failed to fetch user")
    }
    
  }

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    name:"credentials",
    async authorize(credentials){
      try {
        const res = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: "mor_2314",
              password: "83r5^_"
            }),
        });
        let user = {
          name: "xyz",
          age: 23,
          role:"user"
        }
        const token = await res.json();
        if(token){
          return user
        }else{
          return null;
        }
    }catch (error) {
      console.error("Error in authorize:", error);
      return null;
    }
  } 
})],
callbacks:{
  jwt:async ({token,user})=>{
    if(user){
      token.role = user?.role;
    }
    // console.log(token,"kjgfkg")
    return token;
  },
  session: async({session,token})=>{
    if(session?.user){
      session.user.role = token.role;
    }
    return session;
  }
}
}satisfies NextAuthConfig)