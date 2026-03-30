import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { koKR } from "@clerk/localizations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이영현 교수 공식 홈페이지",
  description: "이영현 교수의 공식 웹사이트입니다. 고려대학교 AI온라인마케팅과정 운영, 동두천 장미미용실 저자, AI 강의, 마케팅 강의 및 경영 컨설팅 등",
  keywords: "실행부여가, 이영현교수, AI마케팅교육, AI교육, 온라인마케팅교육, 동두천장미미용실, 고려대학교온라인마케팅과정, 최고경영자과정, 고려대학교AI온라인마케팅과정, 고마최고, 고마전, 고마교",
  openGraph: {
    title: "이영현 교수 공식 홈페이지",
    description: "세계 유일 실행부여가, 고려대 AI마케팅과정 운영 이영현 교수",
    type: "website",
    locale: "ko_KR",
  },
  verification: {
    other: {
      "naver-site-verification": "8185e54f1527f6fe92d355e9379cf94c54574683",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
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
      <html
        lang="ko"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      >
        <body className="min-h-full flex flex-col">
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
          <Chatbot />
        </body>
      </html>
    </ClerkProvider>
  );
}
