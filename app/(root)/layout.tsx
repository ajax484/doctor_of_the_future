"use client";
import ClientPreventHydration from "@/components/preventHydration/PreventHydration";
import React from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/navbar/Header";
import CartScreen from "@/components/ui/cartScreen";

interface SiteProps {
  children: React.ReactNode;
}

const layout = async ({ children }: SiteProps) => {
  return (
    <ClientPreventHydration>
      {/* header */}
      <Header />
      <CartScreen />
      <main className="py-20">{children}</main>
      <Footer />
    </ClientPreventHydration>
  );
};

export default layout;

export const dynamic = "force-dynamic";

