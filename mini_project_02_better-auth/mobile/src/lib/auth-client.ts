import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
    baseURL: "http://192.168.0.178:3000", // Base URL of your Better Auth backend.
    plugins: [
        expoClient({
            scheme: "mobile",
            storagePrefix: "mobile",
            storage: SecureStore,
        })
    ]
});