import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="z-[100] absolute w-[calc(100vw-20px)] overflow-hidden flex justify-between items-center px-8 py-6 bg-white">
      <Image
        src="/dotf_logo.png"
        width={50}
        height={50}
        alt="doctor of the logo"
      />
      <nav>
        <ul className="flex gap-x-6 uppercase text-sm">
          <li>Home</li>
          <li>Plans & Pricing</li>
          <li>Book Online</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Programs</li>
          <li>Terms</li>
        </ul>
      </nav>
    </header>
  );
}
