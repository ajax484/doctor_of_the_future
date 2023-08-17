"use client";
import Image from "next/image";
import React from "react";
import Button from "../ui/button";

export default function Programs() {
  return (
    <section>
      <h2 className="bg-black text-white py-4 md:py-8 text-center text-3xl md:text-6xl font-medium">
        My Programs
      </h2>
      <div className="grid md:grid-cols-2 md:grid-rows-2 h-screen md:h-[calc(100vh*1.5)]">
        <div className="md:row-span-2 relative">
          <div className="bg-black opacity-40 absolute inset-0 h-full w-full z-10 !overflow-hidden" />
          <div className="absolute w-full h-full z-20 flex flex-col justify-center md:justify-end items-center md:[align-items:unset] p-4 md:p-8 text-white gap-4">
            <h3 className="text-2xl font-medium">This Program</h3>
            <p className="w-2/3 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <Button label="View More" intent="tertiary" size="fit" />
          </div>
          <Image
            src="/home/soup5.jpg"
            fill={true}
            objectFit="cover"
            objectPosition="center"
            alt="image of soup 3"
          />
        </div>
        <div className="relative">
          <div className="bg-black opacity-40 absolute inset-0 h-full w-full z-10 !overflow-hidden" />
          <div className="absolute w-full h-full z-20 flex flex-col justify-center md:justify-end items-center md:[align-items:unset] p-4 md:p-8 text-white gap-4">
            <h3 className="text-2xl font-medium">This Program</h3>
            <p className="w-2/3 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <Button label="View More" intent="tertiary" size="fit" />
          </div>
          <Image
            src="/home/soup6.jpg"
            fill={true}
            objectFit="cover"
            objectPosition="center"
            alt="image of soup 3"
          />
        </div>
        <div className="relative">
          <div className="bg-black opacity-40 absolute inset-0 h-full w-full z-10 !overflow-hidden" />
          <div className="absolute w-full h-full z-20 flex flex-col justify-center md:justify-end items-center md:[align-items:unset] p-4 md:p-8 text-white gap-4">
            <h3 className="text-2xl font-medium">This Program</h3>
            <p className="w-2/3 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <Button label="View More" intent="tertiary" size="fit" />
          </div>
          <Image
            src="/home/soup7.jpg"
            fill={true}
            objectFit="cover"
            objectPosition="center"
            alt="image of soup 3"
          />
        </div>
      </div>
    </section>
  );
}
