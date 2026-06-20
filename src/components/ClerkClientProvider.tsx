"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { koKR } from "@clerk/localizations";
import { useState, useEffect } from "react";

export function ClerkClientProvider({ children }: { children: React.ReactNode }) {
  const [publishableKey, setPublishableKey] = useState(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isBot = /googlebot|bingbot|yandexbot|baiduspider|twitterbot|yeti|naver/i.test(userAgent);
    if (isBot) {
      // Use a dummy live key so Clerk initializes in production mode and doesn't run the dev handshake redirect
      setPublishableKey("pk_live_55555555555555555555555555555555");
    }
  }, []);

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      localization={koKR}
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: '#FF8C00' },
        elements: {
          formButtonPrimary: 'bg-brand hover:bg-brand-hover text-black font-bold',
          card: 'bg-[#111] border border-white/10 shadow-2xl',
        }
      }}
    >
      {children}
    </ClerkProvider>
  );
}
