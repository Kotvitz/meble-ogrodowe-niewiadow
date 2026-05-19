import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/ui/CookieBanner";
import CookieSettingsButton from "@/components/ui/CookieSettingsButtons";
import ConsentScripts from "./cookies/ConsentScripts";
import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Sylwano - Altany, Wiaty, Zadaszenia",
  description:
    "Altany, wiaty, zadaszenia i meble ogrodowe wykonywane na zamówienie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${lora.variable}`}>
        <Navbar />
        {children}
        <ContactStrip />
        <Footer />
        <CookieBanner />
        <CookieSettingsButton />
        <ConsentScripts />
      </body>
    </html>
  );
}