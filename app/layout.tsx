import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

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
    <html  lang="en" dir="rtl">
      <body  className={` bg-white text-black ${fonts.className}`}>
        <main >{children}</main>
      </body>
    </html>
  );
}
