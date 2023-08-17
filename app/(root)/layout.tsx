import ClientPreventHydration from "@/components/preventHydration/PreventHydration";
import React from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/navbar/Header";

interface SiteProps {
  children: React.ReactNode;
}

const layout = ({ children }: SiteProps) => {
  return (
    <ClientPreventHydration>
      {/* header */}
      <Header />
      {children}
      {/* children leads to page i.e home */}
      {/* footer */}
      <Footer />
    </ClientPreventHydration>
  );
};

export default layout;

// root layout for all components in HOme
// client prevent hydration to stop nextjs hydration error in the client side
