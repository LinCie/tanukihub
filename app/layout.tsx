import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

import Layout from "@/components/layout/Layout";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
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
      <body
        className={`${roboto.className}  text-main-dark dark:text-main-light bg-white dark:bg-gray-950`}
      >
        <Providers>
          <Layout />
          <main
            id="content"
            className="ml-0 mt-14 p-6 md:ml-64 md:mt-16 md:p-14"
          >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
