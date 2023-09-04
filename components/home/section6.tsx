"use client";

import Image from "next/image";
import React from "react";
import Button from "../ui/button";

export default function Section6() {
  return (
    <section className="h-screen relative">
      <Image
        src="/homepage/image4.jpg"
        fill={true}
        objectFit="cover"
        objectPosition="center"
        alt="image of hamburger"
      />
      <div className="absolute top-1/2 left-1/2 md:[left:unset] [right:unset] md:right-2 -translate-x-1/2 -translate-y-1/2 px-3 md:px-6 bg-white/40 z-20 py-10 w-4/5 md:w-1/3 space-y-4">
        <h3 className="text-3xl md:text-5xl text-white">#StayHealthy</h3>
        <p className="text-white">
          Lose weight, look great in 30 days of transformation. Our program includes, Proper diet and Physical workouts
        </p>
        <Button label="Read More" intent="primary" size="fit" />
      </div>
    </section>
  );
}
