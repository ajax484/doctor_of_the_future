"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// conponents
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import {
  Session  
} from "@supabase/auth-helpers-nextjs";
// icons
import { HiChevronDown, HiMenu, HiUser } from "react-icons/hi";
import AccountDropDown from "./AccountDropDown";

export default function Header({ session }: { session?: Session | null }) {
  const [navMobile, setNavMobile] = useState(false);
  const user = session?.user;

  console.log(user?.user_metadata);

  return (
    <header className="fixed w-full bg-white h-20 z-50 flex justify-between items-center gap-x-4 px-4 md:px-8 py-7">
      <Link href={`/`}>
        <Image
          src="/dotf_logo.png"
          width={40}
          height={40}
          alt="doctor of the logo"
        />
      </Link>
      <Navbar />

      <AccountDropDown />

      {/* mobile nav functionality */}
      <HiMenu
        onClick={() => setNavMobile(true)}
        className="md:hidden text-black text-3xl cursor-pointer"
      />
      {/* mobile */}
      <div className={`${navMobile ? "right-0" : "-right-full"} toggle `}>
        <MobileNav setNavMobile={setNavMobile} />
      </div>
    </header>
  );
}


