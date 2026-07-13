import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // 1. Aquí recibes los datos del formulario
        const email = credentials.email as string;
        const password = credentials.password as string;

        // 2. Aquí llamarías a tu base de datos (PostgreSQL/MySQL)
        // const user = await db.user.findUnique({ where: { email } });
        
        // 3. Validación (simulada)
        // if (!user || !bcrypt.compareSync(password, user.password)) {
        //    return null; // El login falla
        // }

        // 4. Si todo está bien, devuelve el objeto del usuario
        return { id: "1", name: "Usuario", email };
      }
    }),
  ],
});
