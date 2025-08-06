import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "식품의약품안전처 OX 퀴즈",
  description: "식품의약품안전처 공식 OX 퀴즈에 도전해보세요!",
  metadataBase: new URL('https://mfds-quiz-game.vercel.app'),
  
  openGraph: {
    title: "식품의약품안전처 OX 퀴즈",
    description: "식품의약품안전처 공식 OX 퀴즈에 도전해보세요!",
    url: "https://mfds-quiz-game.vercel.app",
    siteName: "식품의약품안전처 OX 퀴즈",
    images: [
      {
        url: "https://mfds-quiz-game.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:title" content="식품의약품안전처 OX 퀴즈" />
      <meta property="og:description" content="식품의약품안전처 공식 OX 퀴즈에 도전해보세요!" />
      <meta property="og:url" content="https://mfds-quiz-game.vercel.app" />
      <meta property="og:site_name" content="식품의약품안전처 OX 퀴즈" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image" content="https://mfds-quiz-game.vercel.app/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
