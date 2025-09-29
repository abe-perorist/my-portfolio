import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | 遊び心と仕組みづくりでサービスを形にするPdM",
  description: "プロダクトマネージャーとして、遊び心と仕組みづくりでサービスを形にしています。企画から実装まで一貫して担当し、ユーザーに愛されるプロダクトを作り続けています。",
  keywords: ["プロダクトマネージャー", "PdM", "サービス企画", "UI/UX", "プロダクト開発"],
  authors: [{ name: "Portfolio Owner" }],
  openGraph: {
    title: "Portfolio | 遊び心と仕組みづくりでサービスを形にするPdM",
    description: "プロダクトマネージャーとして、遊び心と仕組みづくりでサービスを形にしています。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${nunito.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
