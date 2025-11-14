import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/shared/layout/nav";
import FooterComponent from "@/components/shared/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISCE Tech",
  description:
    "Redefining luxury with tech to live smart and share seamlessly. We build digital solutions that transform businesses and elevate experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
