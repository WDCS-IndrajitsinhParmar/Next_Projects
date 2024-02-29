import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from "zod";
 
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
    async authorize(credentials){
        let usertoken
        const parsedCredentials = z
        .object({ username: z.string().min(3), password: z.string().min(6) })
        .safeParse(credentials);
        if(parsedCredentials.success){
            usertoken = await LoginUser();
            if(!usertoken) return null;
        }
        return {
            name:usertoken
        };
    }
  })],
});