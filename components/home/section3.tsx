"use client";

import Image from "next/image";
import React from "react";
import Button from "@/components/ui/customButton";
import { useRouter } from "next/navigation";

export default function Section3() {

  
  const router = useRouter()

  const onClick = () => {
    router.push('/blog')
  }




  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex-[50%] bg-orange text-white px-8 md:px-24 flex flex-col gap-8 py-8 md:py-12 space-y-6 md:space-y-12">
        <h2 className="space-y-3 flex flex-col text-2xl md:text-4xl">
          <span>Healthy Life, </span>
          <span>Healthy Diet.</span>
        </h2>
        <p className="text-white leading-loose text-justify">
        Embracing a healthy life goes hand in hand with adopting a nourishing diet. Your journey to well-being begins by making mindful choices in what you eat and how you live. Discover the keys to a healthier, happier life through a balanced diet and a lifestyle that prioritizes your well-being.
        </p>
        <Button
          label="Learn More"
          intent="tertiary"
          size="fit"
          padding="wide"
          onClick={onClick}
        />
      </div>

      <div className="md:flex-[50%] w-screen md:w-full h-48 md:h-screen relative">
        <Image
          src="/homepage/image11.jpg"
          fill={true}
          objectFit="cover"
          objectPosition="center"
          alt="image of soup 2"
        />
      </div>
    </section>
  );
}
