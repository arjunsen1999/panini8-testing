import { makeRequest } from '@/lib/api';
// import { NextRequest  } from 'next/server';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { toast } from 'react-toastify';
import Cookie from "js-cookie";
import { setCookie } from '@/lib/setCookie';

declare module 'next-auth' {
    interface Session {
      user: {
        id: string;
        name: string;
        firstName: string;
        lastName: string;
        email: string;
        image: string;
        locale: string;
      } | undefined;
      accessToken: string | undefined; // Add this line
     sGoalId : any 
    }
  
    interface JWT {
      id: string;
      name: string;
      firstName: string;
      lastName: string;
      email: string;
      picture: string;
      locale: string;
      accessToken: string; // Add this line
      sGoalId : any
    }
  }

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          image: profile.picture,
          locale: profile.locale,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.picture = user.image;
        token.locale = user.locale;
        token.accessToken = user.accessToken; // Add this line
        token.sGoalId = user.sGoalId; // Add this line
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.locale = token.locale;
        session.accessToken = token.accessToken; // Add this line
        session.sGoalId = token.sGoalId
      }
      return session;
    },
    async signIn({ user }: any) {
      const { firstName, lastName, id, email } = user;
      const data = { googleId: id, firstname: firstName, lastname: lastName, email };

      try {
        const res = await makeRequest("POST", "/api/v1/user/google-login", data);
        const accessToken = res?.data?.accessToken;
        const goalId = res?.data?.sGoalId;
 
        // Set the access token in a cookie

        console.log('User authenticated -:', res.data);
        user.accessToken = accessToken; // Add this line
        user.sGoalId = goalId;
        return true;
      } catch (error: any) {
        console.error('Error authenticating user:', error);
        return false;
      }
    },
  },
  debug: true,
};

const handler: any = (req : any, res : any) => NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };
