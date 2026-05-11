import type { Metadata } from "next";

import { inter, kodeMono, manrope } from "@/lib/fonts";

import "./globals.css";

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
      className={`${manrope.variable} ${inter.variable} ${kodeMono.variable} antialiased`}
    >
      <body className="relative min-h-screen w-screen overflow-x-hidden bg-[#00091a] text-white">
        {children}
      </body>
    </html>
  );
}
