import ClientPreventHydration from "@/components/preventHydration/PreventHydration";
import React from "react";

interface SiteProps {
  children: React.ReactNode;
}

const layout = ({ children }: SiteProps) => {
  return (
    <ClientPreventHydration>
      {/* header */}
      {children}
      {/* children leads to page i.e home */}
      {/* footer */}
    </ClientPreventHydration>
  );
};

export default layout;

// root layout for all components in HOme
// client prevent hydration to stop nextjs hydration error in the client side