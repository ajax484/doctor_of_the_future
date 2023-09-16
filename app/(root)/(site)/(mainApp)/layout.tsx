import React from "react";

interface SiteProps {
  children: React.ReactNode;
}

const layout = ({ children }: SiteProps) => {
  return <section className="px-4 mb-20 md:px-8 lg:px-16">{children}</section>;
};

export default layout;
