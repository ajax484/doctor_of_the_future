"use client";

import Image from "next/image";
import React from "react";
import Button from "../ui/button";

export default function Section4() {
  return (
    <section className="flex flex-col md:flex-row py-6">
      <div className="flex-[40%] h-48 md:h-[calc(100vh*1.5)] w-screen md:w-full relative">
        <Image
          src="/homepage/image9.jpg"
          fill={true}
          objectFit="cover"
          objectPosition="center"
          alt="image of soup 3"
        />
        <div className="absolute top-1/2 -right-[20%] hidden md:block">
        <Image
          src="/homepage/image4.jpg"
          height={window.innerHeight / 4}
          width={window.innerWidth / 4}
          alt="image of soup 3"
        />
        </div>
      </div>
      <div className="flex-[60%] px-8 md:px-48 flex flex-col gap-3 md:gap-6">
        <h2 className="space-y-3 flex flex-col text-3xl md:text-5xl py-6 md:py-12 leading-normal">
          Nutrition Assessment & Counseling
        </h2>
        <p className="md:leading-loose text-justify">
        Nutrition assessment and counseling provide personalized guidance for better health through tailored dietary recommendations.
        </p>
        <Button
          label="Learn More"
          size="fit"
          padding="wide"
          intent="primary"
        />
      </div>
    </section>
  );
}
