import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="px-8 py-6 bg-black text-white space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base gap-2">
        <div className="flex flex-col items-center justify-center gap-1.5">
          <Link href="/">
            <Image
              src="/dotf_logo.png"
              width={50}
              height={50}
              alt="doctor of the logo"
            />
          </Link>
          <span className="text-slate-400 text-sm">
            <span className="font-bold text-white hover:text-neutral-500">Gideon</span> Bassey
          </span>
        </div>
        <span className="text-sm">Facebook: Gideon Bassey Jacobs</span>
        <span className="text-sm cursor-pointer hover:text-neutral-400">
          Twitter: <a href="https://x.com/g_diets_">g_diets_</a>
        </span>
        <span className="text-sm">
          gidietsworld@gmail.com | +234 912 318 5655 | +234 810 437 5180
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-center text-sm text-center">
        <span>All Rights Reserved | DOCTOR OF THE FUTURE 2023</span>
      </div>
    </section>
  );
}
