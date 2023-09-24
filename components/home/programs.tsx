"use client";
import Image from "next/image";
import React from "react";
import Button from "@/components/ui/customButton";
import Link from "next/link";

export default function Programs() {
  return (
    <section>
      <h2 className="bg-black text-white py-8 text-center text-3xl md:text-6xl font-medium">
        My Programs
      </h2>
      <div className="grid md:grid-cols-2 md:grid-rows-2 h-screen md:h-[calc(100vh*1.5)]">
        <div className="md:row-span-2 relative">
          <div className="bg-black opacity-40 absolute inset-0 h-full w-full z-10 !overflow-hidden" />
          <div className="absolute w-full h-full z-20 flex flex-col justify-center md:justify-end items-center md:[align-items:unset] p-4 md:p-8 text-white gap-4">
            <h3 className="text-2xl md:text-3xl capitalize font-semibold">Knightup Challenge 2.0</h3>
            <p className="w-2/3 text-center lg:text-start text-sm md:text-base">
              A 3-days bootcamp for people interested in losing weight and optimizing their metabolic health
            </p>

            {/* redirects to plans and billing */}
            <Link href={`/plans`}>
              <button className="w-fit p-2 bg-slate-900  rounded-md hover:bg-slate-500">View More</button>
            </Link>
          </div>
          <Image
            src={'https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
            fill={true}
            objectFit="cover"
            alt="image of fit woman"
          />
        </div>
   
        <div className="relative md:row-span-2">
          <div className="bg-black opacity-40 absolute inset-0 h-full w-full z-10 !overflow-hidden" />
          <div className="absolute w-full h-full z-20 flex flex-col justify-center md:justify-end items-center md:[align-items:unset] p-4 md:p-8 text-white gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold capitalize">3-days fertility bootcamp</h3>
            <p className="w-2/3 text-center lg:text-start text-sm md:text-base">
              For people interested in taking their bed skills to the next level, get their sexual groove back on, as well as take care of their ejaculation, erection and fertility issues.
            </p>
            {/* redirects to plans and billing */}
            <Link href={`/plans`}>
              <button className="w-fit p-2 bg-slate-900  rounded-md hover:bg-slate-500">View More</button>
            </Link>
          </div>
          <Image
            src={"https://images.pexels.com/photos/5853820/pexels-photo-5853820.jpeg?auto=compress&cs=tinysrgb&w=800"}
            fill={true}
            objectFit="cover"
            objectPosition="center"
            alt="image of couple"
          />
        </div>
      </div>
    </section>
  );
}
