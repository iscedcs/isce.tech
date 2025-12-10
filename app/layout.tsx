import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/shared/layout/nav";
import FooterComponent from "@/components/shared/layout/footer";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400"],
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
        className={`${montserrat.variable} antialiased`}>
        <NavComponent/>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
