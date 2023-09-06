import { siteConfig } from "@/siteConfig/site";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CartContextProvider from "@/context/CartContext";
import { QueryClient, QueryClientProvider } from "react-query";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";

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
  const queryClient = new QueryClient();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* providers will be added here */}
        <SupabaseProvider>
          <QueryClientProvider client={queryClient}>
            <ModalProvider />
            <CartContextProvider>{children}</CartContextProvider>
          </QueryClientProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
