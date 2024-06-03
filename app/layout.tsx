import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/typography.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jakub Olcha",
  description: "O O O",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
