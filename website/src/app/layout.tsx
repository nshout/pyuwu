import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const euclid = localFont({
  src: [
    {
      path: "./fonts/EuclidCircularB/Euclid Circular B Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/EuclidCircularB/Euclid Circular B Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/EuclidCircularB/Euclid Circular B SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/EuclidCircularB/Euclid Circular B Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-euclid",
});

export const metadata: Metadata = {
  title: "PyUwU - Python with rizz",
  description: "A Python preprocessor that translates Python into brainrot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${euclid.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Nav />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
