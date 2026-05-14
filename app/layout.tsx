import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/ui/CookieBanner";
import CookieSettingsButton from "@/components/ui/CookieSettingsButtons";
import ConsentScripts from "./cookies/ConsentScripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Meble Ogrodowe Niewiadów",
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
        {children}
        <CookieBanner />
        <CookieSettingsButton />
        <ConsentScripts />
      </body>
    </html>
  );
}