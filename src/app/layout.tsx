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
  title: "Ideal Telecom - Instalação e Manutenção de Ar-Condicionado",
  description: "Especialistas em instalação e manutenção de ar-condicionado com qualidade e confiança.",

  openGraph: {
    title: "Ideal Telecom - Instalação e Manutenção de Ar-Condicionado",
    description: "Especialistas em instalação e manutenção de ar-condicionado com qualidade e confiança.",
    url: "",
    siteName: "Ideal Telecom",
    images: [
      {
        url: "/../public/idealtelecom-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Ideal Telecom - Instalação e Manutenção de Ar Condicionado",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ideal Telecom - Instalação e Manutenção de Ar-Condicionado",
    description: "Especialistas em instalação e manutenção de ar-condicionado com qualidade e confiança.",
    images: ["/idealtelecom-thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
