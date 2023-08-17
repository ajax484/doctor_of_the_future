import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section className="px-8 py-6 bg-black text-white space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base gap-2">
        <Image
          src="/dotf_logo.png"
          width={50}
          height={50}
          alt="doctor of the logo"
        />
        <span>Facebook</span>
        <span>Twitter</span>
        <span>ubahyusuf484@gmail.com | +234 802 933 6571</span>
      </div>
      <div className="flex flex-col md:flex-row justify-center text-sm text-center">
        <span>All Rights Reserved | DOCTOR OF THE FUTURE 2023</span>
      </div>
    </section>
  );
}
