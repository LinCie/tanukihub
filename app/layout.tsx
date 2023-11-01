import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { Providers } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${noto.className} bg-white dark:bg-gray-950`}>
        <Providers>
          <Header />
          <main id="content" className="ml-0 mt-14 min-h-screen p-10 md:ml-64 md:mt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
