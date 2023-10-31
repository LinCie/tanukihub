import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Header from "@/components/layout/Header";

const noto = localFont({
  src: [
    {
      path: "./fonts/NotoSansJP-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansJP-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansJP-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "TanukiHub",
  description: "Learn Japanese for Free with TanukiHub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
