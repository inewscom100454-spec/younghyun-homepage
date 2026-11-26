import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkClientProvider } from "@/components/ClerkClientProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "이영현 교수 | AI·SNS마케팅 강사 · 동기부여 강사 · 세계 유일 실행부여가";
const siteDescription =
  "2015년 국내 최초 고려대학교 AI온라인마케팅과정 개설 및 운영. 30년 광고기획자, 15년 AI/SNS마케팅/동기부여 강사, 베스트셀러 저자 이영현 교수의 공식 홈페이지.";

export const metadata: Metadata = {
  metadataBase: new URL("https://20hyun.com"),
  alternates: {
    canonical: "/",
  },
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "SNS마케팅 교육",
    "SNS마케팅 강사",
    "온라인마케팅 교육 강사",
    "AI강사",
    "AI마케팅 강사",
    "마케팅 강사",
    "동기부여 강사",
    "자기계발 강사",
    "실행부여가 이영현 교수",
    "이영현 교수",
    "고려대학교 AI온라인마케팅과정",
    "고려대학교 온라인마케팅과정",
    "고마최고",
    "고마전",
    "AI마케팅 교육",
    "온라인마케팅 교육",
    "한국온라인마케팅연구원",
    "동두천 장미미용실",
    "키워드 전쟁",
    "이영현의 원맨쇼",
    "3TAI 전략",
  ],
  authors: [{ name: "이영현 교수", url: "https://20hyun.com" }],
  creator: "이영현 교수",
  publisher: "한국온라인마케팅연구원",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://20hyun.com",
    siteName: "이영현 교수 공식 홈페이지 (20HYUN.COM)",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
          <JsonLd />
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
