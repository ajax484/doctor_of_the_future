import React from "react";

interface SiteProps {
  children: React.ReactNode;
}

const layout = ({ children }: SiteProps) => {
  return (
    <div className="space-y-6 my-8">
      <div className=" my-5">
        <h1 className=" text-center text-3xl capitalize font-black">
          plans & pricing
        </h1>
      </div>
      {children}
    </div>
  );
};

export default layout;
