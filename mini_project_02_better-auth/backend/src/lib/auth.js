import "dotenv/config"
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { expo } from "@better-auth/expo";
import {prisma} from './db.js'

export const auth = betterAuth({
    plugins: [expo()],
   database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),

    emailAndPassword: { 
        enabled: true, 
  },

  trustedOrigins: [
        "mobile://",
        
        // Development mode - Expo's exp:// scheme with local IP ranges
        ...(process.env.NODE_ENV === "development" ? [
            "exp://",                      // Trust any host of the exp:// scheme
            "exp://**",                    // Trust all Expo URLs (wildcard matching)
            "exp://192.168.*.*:*/**",      // Trust 192.168.x.x IP range with any port and path
            "exp://192.168.0.178:8081"     // Trust the specific Expo development server
        ] : [])
    ]
});