import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkClientProvider } from "@/components/ClerkClientProvider";
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
  metadataBase: new URL("https://20hyun.com"),
  alternates: {
    canonical: "/",
  },
  title: "이영현 교수 공식 홈페이지",
  description: "이영현 교수의 공식 사이트입니다. 고려대학교 AI온라인마케팅과정 주임교수, 행동유도디자인 연구소 소장, AI 강의, 마케팅 강의 및 경영 컨설팅 제공.",
  keywords: "행동유도디자인, 이영현교수, AI마케팅교육, AI교육, 온라인마케팅교육, 행동유도디자인연구소, 고려대학교온라인마케팅과정, 최고경영자과정, 고려대학교AI온라인마케팅과정, 고마최고, 고마최고 14기, 고마최고 15기",
  openGraph: {
    title: "이영현 교수 공식 홈페이지",
    description: "세계 유일 행동유도디자인, 고려대 AI마케팅과정 주임교수 이영현 교수",
    type: "website",
    locale: "ko_KR",
  },
  verification: {
    google: "K8gPYHmLVlVr2sW8hbky1AvNPupLA3pg9mjrcczQR1k",
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
    <ClerkClientProvider>
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
    </ClerkClientProvider>
  );
}
