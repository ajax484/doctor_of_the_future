"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

// icons
import { HiChevronDown, HiMenu, HiShoppingCart, HiUser } from "react-icons/hi";
import AccountDropDown from "./AccountDropDown";
import { useCart } from "@/context/CartContext";

type TMenuItem = {
  label: string;
  link: string;
};

export const menuItems: TMenuItem[] = [
  { label: "Home", link: "/" },
  { label: "Plans & Pricing", link: "/plans" },
  { label: "Book Online", link: "/bookings" },
  { label: "Shop", link: "/shop" },
  { label: "Blog", link: "/" },
  { label: "Programs", link: "/programs" },
  { label: "Terms", link: "/terms" },
];

export default function Header() {
  const [navMobile, setNavMobile] = useState(false);
  const { cartVisible, hideCart, showCart } = useCart();

  return (
    <header className="fixed w-full bg-white h-20 z-50  px-4 md:px-8 overflow-hidden bar py-8">
      <div className=" flex justify-between items-center gap-x-4">
        <Link href={`/`}>
          <Image
            src="/dotf_logo.png"
            width={40}
            height={40}
            alt="doctor of the logo"
          />
        </Link>
        <Navbar />

        <div className=" flex items-center gap-x-2">
          <AccountDropDown />

          <button onClick={showCart}>
            <HiShoppingCart className="text-2xl" />
          </button>
          {/* mobile nav functionality */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="md:hidden text-black text-3xl cursor-pointer"
          />
        </div>
      </div>

      {/* mobile */}
      <div className={`${navMobile ? "right-0" : "-right-full"} toggle `}>
        <MobileNav setNavMobile={setNavMobile} />
      </div>
    </header>
  );
}
