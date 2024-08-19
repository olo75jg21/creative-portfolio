import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/typography.css";
import "@/styles/spacing.css";
import Scroll from "@/components/scroll/Scroll";
import Cursor from "@/components/cursor/Cursor";
import { Theme } from "@/context/Theme";

const inter = Open_Sans({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Theme>
          <Scroll>
            {children}
            <Cursor />
          </Scroll>
        </Theme>
      </body>
    </html>
  );
}
