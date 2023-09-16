import { siteConfig } from "@/app/(root)/siteConfig/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Plans | " + siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

interface SiteProps {
  children: React.ReactNode;
}

const layout = ({ children }: SiteProps) => {
  return (
    <div className="space-y-6 my-8">
      <div className=" my-10">
        <h1 className=" text-center text-3xl capitalize font-black">
          plans & pricing
        </h1>
      </div>
      {children}
    </div>
  );
};

export default layout;
