import { Noto_Sans } from "next/font/google";
import "@workspace/ui/globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GFE Projects Showcase",
  description: "Created for GFE exercises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // removed "suppressHydrationWarning". add it back to `html` if there's a problem
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSans.className} antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
