import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from "./components/Footer";
config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: '/images/favicon.png',
  },
  title: "Healthy Recipe Finder",
  description: "Discover delicious and healthy recipes.",
  openGraph: {
    title: "Healthy Recipes",
    description: "Discover delicious and healthy recipes.",
    url: "https://recipe-finder-beta-two.vercel.app",
    siteName: "Healthy Recipes",
    images: [
      {
        url: "/images/favicon.png", // image in /public
        width: 1200,
        height: 630,
        alt: "Healthy Recipes OG Image"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
