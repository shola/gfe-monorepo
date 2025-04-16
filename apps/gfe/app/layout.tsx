import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import {Noto_Sans} from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap'
})


export const metadata: Metadata = {
  title: "Blog Card",
  description: "Created for GFE exercises",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} flex flex-col`}>{children}</body>
    </html>
  );
}
