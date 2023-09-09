import React from "react";

interface SiteProps {
  children: React.ReactNode;
}

const layout = ({ children }: SiteProps) => {
  return (
    <div className="space-y-6 my-8">
      <h1 className="text-2xl font-black text-center">Plans & Pricing</h1>
      {children}
    </div>
  );
};

export default layout;
