"use client";
import ClientPreventHydration from "@/components/preventHydration/PreventHydration";
import React from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/navbar/Header";
import CartScreen from "@/components/ui/cartScreen";
import { QueryClient, QueryClientProvider } from "react-query";

interface SiteProps {
  children: React.ReactNode;
}

const layout = ({ children }: SiteProps) => {
  const queryClient = new QueryClient();

  return (
    <ClientPreventHydration>
      <QueryClientProvider client={queryClient}>
        {/* header */}
        <Header />
        <CartScreen />
        <main className="py-20">{children}</main>
        <Footer />
      </QueryClientProvider>
    </ClientPreventHydration>
  );
};

export default layout;

export const dynamic = "force-dynamic";
