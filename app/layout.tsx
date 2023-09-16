import { siteConfig } from "@/app/(root)/siteConfig/page";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CartContextProvider from "@/context/CartContext";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ToastProvider from "@/providers/ToastProvider";
import { absoluteUrl } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

// change favicon and site config files
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Doctor",
    "healthcare",
    "future",
    "fitness",
    "doctor",
    "appointments",
    "food",
    "exercise",
    "wellness",
    "healthy",
    "nigerian",
    "healty expert",
    "weight loss",
    "diet",
    "workouts",
  ],
  authors: [
    {
      name: "codingossy",
      url: "https://ossy.vercel.app",
    },
  ],
  creator: "codingossy",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  
  openGraph: {
    type: "website",
    locale: "en_US, en_NG, en_UK",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/favicon.ico"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        {/* providers will be added here */}
        <SupabaseProvider>
          <ModalProvider />
          <ToastProvider />
          <CartContextProvider>{children}</CartContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
