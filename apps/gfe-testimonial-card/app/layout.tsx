import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import {Noto_Sans} from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
