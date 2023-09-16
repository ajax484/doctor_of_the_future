"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

// icons
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import AccountDropDown from "./AccountDropDown";
// cart context
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
  { label: "Blog", link: "/blog" },
  { label: "Programs", link: "/programs" },
  { label: "Terms", link: "/terms" },
];

export default function Header() {
  const [navMobile, setNavMobile] = useState(false);
  const { cartVisible, hideCart, showCart, cart } = useCart();

  return (
    <header className="fixed w-full bg-white h-28 z-50  px-4 md:px-8 overflow-hidden bar py-8">
      <div className="flex justify-between items-center gap-x-4">
        {/* mobile nav functionality */}
        <HiMenu
          onClick={() => setNavMobile(true)}
          className="md:hidden text-black  text-3xl cursor-pointer"
        />

        <Link href={`/`} className="">
          <Image
            src="/dotf_logo.png"
            width={100}
            height={100}
            className="invert-[10] object-contain ml-5 xs:ml-10 md:ml-0 w-44 h-16"
            alt="doctor of the future logo"
          />
        </Link>
        <Navbar />

        <div className=" flex items-center gap-x-2">
          <AccountDropDown />

          <button onClick={showCart} className="relative">
            <HiShoppingCart className="text-2xl" />
            <div className="bg-limeGreen px-1 rounded-full absolute -right-2 -top-2 text-white text-[10px]">
              {cart.length}
            </div>
          </button>
        </div>
      </div>

      {/* mobile */}
      <div className={`${navMobile ? "left-0" : "-left-full"} toggle `}>
        <MobileNav setNavMobile={setNavMobile} />
      </div>
    </header>
  );
}
