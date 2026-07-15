import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { saltAndHashPassword } from "@/utils/password"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers:[
    Credentials({
      credentials:{
        email: {label: "Email", type: "email", placeholder: "example@example.com"},
        password: {label: "Password", type: "password", placeholder: "********"},
      }
    })
  ]
})