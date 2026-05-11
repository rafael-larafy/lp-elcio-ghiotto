import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaraTAX",
  description:
    "Menos planilhas, mais resultado tributário. Diagnóstico tributário completo dos últimos 5 anos em até 40 minutos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${manrope.variable} ${inter.variable} antialiased`}
    >
      <body className="relative min-h-screen w-screen overflow-x-hidden bg-[#00091a] text-white">
        {children}
      </body>
    </html>
  );
}
