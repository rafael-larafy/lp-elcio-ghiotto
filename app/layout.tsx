import type { Metadata } from "next";

import { inter, kodeMono, manrope } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";

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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=clock_arrow_up,robot_2"
        />
      </head>
      <body className="relative min-h-screen w-screen overflow-x-hidden bg-[#00091a] text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
