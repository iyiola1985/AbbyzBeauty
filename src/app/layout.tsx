import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abbyz Beautyy | Luxury Lash Extensions & Glam Makeup",
  description:
    "Luxury lash extensions and flawless glam makeup designed to enhance your natural beauty. Book your appointment for a confident, glamorous experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
