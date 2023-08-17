"use client";

import Image from "next/image";
import React from "react";
import Button from "../ui/button";

export default function Section3() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex-[50%] bg-black text-white px-8 md:px-24 flex flex-col gap-8 py-6 md:py-12 space-y-6 md:space-y-12">
        <h2 className="space-y-3 flex flex-col text-2xl md:text-4xl">
          <span>Mental Health,</span>
          <span>Mental Wealth.</span>
        </h2>
        <p className="text-white leading-loose text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel
          accusamus nisi fugiat rerum blanditiis, quidem atque laboriosam,
          officiis vitae, minima et magni omnis fugit ullam eius. Ipsam, sed
          assumenda.
        </p>
        <Button
          label="Learn More"
          intent="tertiary"
          size="fit"
          padding="wide"
        />
      </div>

      <div className="md:flex-[50%] w-screen md:w-full h-48 md:h-screen relative">
        <Image
          src="/home/soup2.jpg"
          fill={true}
          objectFit="cover"
          objectPosition="center"
          alt="image of soup 2"
        />
      </div>
    </section>
  );
}
