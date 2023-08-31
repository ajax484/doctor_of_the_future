import ClientPreventHydration from "@/components/preventHydration/PreventHydration";
import React from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/navbar/Header";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import CartScreen from "@/components/ui/cartScreen";

interface SiteProps {
  children: React.ReactNode;
}

const layout = async ({ children }: SiteProps) => {
  const supabase = createServerComponentClient({ cookies });
  // Rest of your code here

  const {
    data: { session },
  } = await supabase.auth.getSession()  

  console.log(session?.user);
  

  return (
    <ClientPreventHydration>
      {/* header */}
      <Header session={session} />
      <CartScreen />
      <main className="py-20">{children}</main>
      {/* children leads to page i.e home */}
      {/* footer */}
      <Footer />
    </ClientPreventHydration>
  );
};

export default layout;

// root layout for all components in HOme
// client prevent hydration to stop nextjs hydration error in the client side
