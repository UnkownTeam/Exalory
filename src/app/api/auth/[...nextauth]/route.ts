import { nextProviders } from "@/constants";
import NextAuth from "next-auth/next";

const handler = NextAuth(nextProviders);

export { handler as GET, handler as POST };
