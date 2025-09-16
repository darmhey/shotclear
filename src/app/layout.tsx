// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import {
  Space_Grotesk,
  Sofia_Sans_Condensed,
  Nunito_Sans,
} from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const sofiaSansCondensed = Sofia_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-sofia-sans-condensed",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shotclear",
  description: "AI-powered image enhancement for products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${sofiaSansCondensed.variable} ${nunitoSans.variable} antialiased font-[Nunito_Sans]`}
      >
        {children}
      </body>
    </html>
  );
}
