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
        <span className="text-sm">Facebook: Doctor Of The Future </span>
        <span className="text-sm cursor-pointer">
          Twitter: <a href="https://x.com/g_diets_" className="hover:text-neutral-400">g_diets_</a>
        </span>
        <span className="text-sm flex flex-col gap-x-3 md:flex-row gap-y-2">
          <p>
            <a className="hover:text-neutral-400" href="mailto:gidietsworld@gmail.com">gidietsworld@gmail.com</a>
          </p> <p>| +234 912 318 5655 |</p> <p>+234 810 437 5180</p>
        </span>
      </div>
      <div className="flex my-5 md:my-0 flex-col md:flex-row justify-center text-sm text-center">
        <span>All Rights Reserved | DOCTOR OF THE FUTURE 2023</span>
      </div>
    </section>
  );
}
