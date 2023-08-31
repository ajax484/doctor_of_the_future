import { siteConfig } from "@/siteConfig/site";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CartContextProvider from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

// change favicon and site config files
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* providers will be added here */}
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
