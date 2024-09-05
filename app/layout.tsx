import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import ReactQueryProvider from "./utils/ReactQueryProvider ";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

export const metadata: Metadata = {
  title: "Exchange Project",
  description: "Exchange Project",
};

const fonts = localFont({
  src: "../public/font/Vazirmatn-RD-Regular.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`bg-white text-black ${fonts.className} flex flex-col min-h-screen`}>
        <ReactQueryProvider>
          <Header className="fixed top-0 left-0 w-full z-50" />
          <main className="flex-grow pt-16 pb-16">
            {children}
          </main>
          <Footer className="relative mt-auto w-full" />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
